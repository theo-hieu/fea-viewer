/**
 * FEA Viewer - API Client
 * ========================
 *
 * Fetch wrappers for JSON and binary ArrayBuffer endpoints.
 * Binary responses use X-Array-Dtype, X-Array-Shape, X-Array-ByteOrder headers.
 */

import type { BinaryMeta } from '@/utils/feaTypes';

const BASE_URL = '/api/v1';
type BufferOffsets = Record<string, [number, number]>;

export interface SurfaceSections {
    surfaceIndices: Int32Array;
    surfaceNormals: Float32Array;
    surfaceElementMap: Int32Array;
    headers: {
        dtype: string;
        shape: Record<string, number[]>;
        byteOrder: string;
        offsets: BufferOffsets;
    };
}

/**
 * Fetch JSON from the API.
 */
export async function fetchJSON<T>(path: string): Promise<T> {
    const res = await fetch(`${BASE_URL}${path}`, {
        headers: { 'Accept': 'application/json' },
    });
    if (!res.ok) {
        const body = await res.text();
        throw new ApiError(res.status, body);
    }
    return res.json() as Promise<T>;
}

/**
 * Fetch a binary ArrayBuffer from the API with typed-array metadata headers.
 */
export async function fetchBinary(
    path: string,
): Promise<{ buffer: ArrayBuffer; meta: BinaryMeta }> {
    const res = await fetch(`${BASE_URL}${path}`, {
        headers: { 'Accept': 'application/octet-stream' },
    });
    if (!res.ok) {
        const body = await res.text();
        throw new ApiError(res.status, body);
    }

    const dtype = res.headers.get('X-Array-Dtype') ?? 'float64';
    const shapeStr = res.headers.get('X-Array-Shape') ?? '[]';
    const byteOrder = res.headers.get('X-Array-ByteOrder') ?? 'little';

    let shape: number[];
    try {
        shape = JSON.parse(shapeStr) as number[];
    } catch {
        shape = [];
    }

    const buffer = await res.arrayBuffer();
    return { buffer, meta: { dtype, shape, byteOrder } };
}

/**
 * Fetch and parse packed mixed-binary surfaces payload.
 */
export async function fetchSurfacesBinary(path: string): Promise<SurfaceSections> {
    const res = await fetch(`${BASE_URL}${path}`, {
        headers: { Accept: 'application/octet-stream' },
    });
    if (!res.ok) {
        const body = await res.text();
        throw new ApiError(res.status, body);
    }

    const dtype = res.headers.get('X-Array-Dtype') ?? '';
    const byteOrder = res.headers.get('X-Array-ByteOrder') ?? 'little';
    const shapeStr = res.headers.get('X-Array-Shape');
    const offsetsStr = res.headers.get('X-Buffer-Offsets');

    if (dtype !== 'mixed') {
        throw new Error(`Expected mixed surfaces payload, got dtype="${dtype || 'missing'}"`);
    }
    if (byteOrder !== 'little') {
        throw new Error(`Unsupported byte order "${byteOrder}" for surfaces payload`);
    }
    if (!shapeStr) {
        throw new Error('Missing X-Array-Shape header for surfaces payload');
    }
    if (!offsetsStr) {
        throw new Error('Missing X-Buffer-Offsets header for surfaces payload');
    }

    const shape = parseJsonHeader<Record<string, number[]>>(shapeStr, 'X-Array-Shape');
    const offsets = parseJsonHeader<BufferOffsets>(offsetsStr, 'X-Buffer-Offsets');
    const fullBuffer = await res.arrayBuffer();

    requireSection(shape, offsets, 'indices');
    requireSection(shape, offsets, 'normals');
    requireSection(shape, offsets, 'map');

    const indicesOffsets = offsets.indices!;
    const normalsOffsets = offsets.normals!;
    const mapOffsets = offsets.map!;
    const indicesShape = shape.indices!;
    const normalsShape = shape.normals!;
    const mapShape = shape.map!;

    const indicesView = parseTypedSection(fullBuffer, indicesOffsets, 'int32', 'indices');
    const normalsView = parseTypedSection(fullBuffer, normalsOffsets, 'float32', 'normals');
    const mapView = parseTypedSection(fullBuffer, mapOffsets, 'int32', 'map');

    validateShapeLength(indicesShape, indicesView.length, 'indices');
    validateShapeLength(normalsShape, normalsView.length, 'normals');
    validateShapeLength(mapShape, mapView.length, 'map');

    return {
        surfaceIndices: indicesView as Int32Array,
        surfaceNormals: normalsView as Float32Array,
        surfaceElementMap: mapView as Int32Array,
        headers: { dtype, shape, byteOrder, offsets },
    };
}

/**
 * Fetch a multipart binary ArrayBuffer using X-Buffer-Offsets.
 */
export async function fetchBinaryMultipart(
    path: string,
): Promise<Record<string, ArrayBuffer>> {
    const res = await fetch(`${BASE_URL}${path}`, {
        headers: { 'Accept': 'application/octet-stream' },
    });
    if (!res.ok) {
        const body = await res.text();
        throw new ApiError(res.status, body);
    }

    const offsetsStr = res.headers.get('X-Buffer-Offsets') ?? '{}';
    let offsets: Record<string, [number, number]>;
    try {
        offsets = JSON.parse(offsetsStr) as Record<string, [number, number]>;
    } catch {
        offsets = {};
    }

    const fullBuffer = await res.arrayBuffer();
    const result: Record<string, ArrayBuffer> = {};

    for (const [key, [start, end]] of Object.entries(offsets)) {
        result[key] = fullBuffer.slice(start, end);
    }

    return result;
}

function parseJsonHeader<T>(rawValue: string, headerName: string): T {
    try {
        return JSON.parse(rawValue) as T;
    } catch {
        throw new Error(`Malformed ${headerName} header`);
    }
}

function requireSection(
    shape: Record<string, number[]>,
    offsets: BufferOffsets,
    section: string,
): void {
    if (!Array.isArray(shape[section])) {
        throw new Error(`Missing or malformed shape section "${section}"`);
    }
    const range = offsets[section];
    if (!Array.isArray(range) || range.length !== 2) {
        throw new Error(`Missing or malformed offsets section "${section}"`);
    }
}

function parseTypedSection(
    fullBuffer: ArrayBuffer,
    [start, end]: [number, number],
    dtype: 'int32' | 'float32',
    sectionName: string,
): Int32Array | Float32Array {
    const byteLength = end - start;
    if (
        !Number.isInteger(start) ||
        !Number.isInteger(end) ||
        start < 0 ||
        end < 0 ||
        end <= start ||
        end > fullBuffer.byteLength
    ) {
        throw new Error(`Invalid byte range for section "${sectionName}"`);
    }
    if (start % 4 !== 0 || byteLength % 4 !== 0) {
        throw new Error(`Misaligned byte range for section "${sectionName}"`);
    }

    if (dtype === 'int32') {
        return new Int32Array(fullBuffer, start, byteLength / 4);
    }
    return new Float32Array(fullBuffer, start, byteLength / 4);
}

function validateShapeLength(shape: number[], actualLength: number, sectionName: string): void {
    if (shape.length !== 1 || !Number.isInteger(shape[0]) || shape[0]! < 0) {
        throw new Error(`Unsupported shape for section "${sectionName}"`);
    }
    if (shape[0] !== actualLength) {
        throw new Error(
            `Shape length mismatch for section "${sectionName}": expected ${shape[0]}, got ${actualLength}`,
        );
    }
}

/**
 * Upload a file via multipart form data.
 */
export async function uploadFile(
    file: File,
): Promise<{ model_id: string }> {
    const form = new FormData();
    form.append('file', file);

    const res = await fetch(`${BASE_URL}/models/upload`, {
        method: 'POST',
        body: form,
    });
    if (!res.ok) {
        const body = await res.text();
        throw new ApiError(res.status, body);
    }
    return res.json() as Promise<{ model_id: string }>;
}

/**
 * Delete a model.
 */
export async function deleteModel(modelId: string): Promise<void> {
    const res = await fetch(`${BASE_URL}/models/${modelId}`, {
        method: 'DELETE',
    });
    if (!res.ok) {
        const body = await res.text();
        throw new ApiError(res.status, body);
    }
}

/**
 * Structured API error.
 */
export class ApiError extends Error {
    constructor(
        public readonly status: number,
        public readonly body: string,
    ) {
        super(`API ${status}: ${body}`);
        this.name = 'ApiError';
    }
}

