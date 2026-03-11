/**
 * FEA Viewer — API Client
 * ========================
 *
 * Fetch wrappers for JSON and binary ArrayBuffer endpoints.
 * Binary responses use X-Array-Dtype, X-Array-Shape, X-Array-ByteOrder headers.
 */

import type { BinaryMeta } from '@/utils/feaTypes';

const BASE_URL = '/api/v1';

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
