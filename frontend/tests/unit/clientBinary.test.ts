import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchBinary, fetchSurfacesBinary } from '@/api/client';

function mockBinaryResponse(options: {
    buffer: ArrayBuffer;
    headers: Record<string, string>;
    ok?: boolean;
}) {
    const headers = new Headers(options.headers);
    return {
        ok: options.ok ?? true,
        headers,
        arrayBuffer: async () => options.buffer,
        text: async () => 'error-body',
    } as unknown as Response;
}

describe('API binary parsing', () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    it('parses single-array /nodes payload', async () => {
        const nodes = new Float64Array([0, 1, 2, 3, 4, 5]);
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(
            mockBinaryResponse({
                buffer: nodes.buffer,
                headers: {
                    'X-Array-Dtype': 'float64',
                    'X-Array-Shape': '[2,3]',
                    'X-Array-ByteOrder': 'little',
                },
            }),
        ));

        const res = await fetchBinary('/models/m1/nodes');
        expect(res.meta.dtype).toBe('float64');
        expect(res.meta.shape).toEqual([2, 3]);
        expect(new Float64Array(res.buffer).length).toBe(6);
    });

    it('parses packed mixed /surfaces payload', async () => {
        const indices = new Int32Array([0, 1, 2]);
        const normals = new Float32Array([0, 0, 1, 0, 1, 0, 1, 0, 0]);
        const map = new Int32Array([42]);

        const total = indices.byteLength + normals.byteLength + map.byteLength;
        const buffer = new ArrayBuffer(total);
        new Uint8Array(buffer, 0, indices.byteLength).set(new Uint8Array(indices.buffer));
        new Uint8Array(buffer, indices.byteLength, normals.byteLength).set(new Uint8Array(normals.buffer));
        new Uint8Array(buffer, indices.byteLength + normals.byteLength, map.byteLength).set(new Uint8Array(map.buffer));

        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(
            mockBinaryResponse({
                buffer,
                headers: {
                    'X-Array-Dtype': 'mixed',
                    'X-Array-Shape': '{"indices":[3],"normals":[9],"map":[1]}',
                    'X-Array-ByteOrder': 'little',
                    'X-Buffer-Offsets': `{"indices":[0,${indices.byteLength}],"normals":[${indices.byteLength},${indices.byteLength + normals.byteLength}],"map":[${indices.byteLength + normals.byteLength},${total}]}`,
                },
            }),
        ));

        const res = await fetchSurfacesBinary('/models/m1/surfaces');
        expect(Array.from(res.surfaceIndices)).toEqual([0, 1, 2]);
        expect(res.surfaceNormals.length).toBe(9);
        expect(Array.from(res.surfaceElementMap)).toEqual([42]);
    });

    it('throws on malformed x-buffer-offsets', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(
            mockBinaryResponse({
                buffer: new ArrayBuffer(16),
                headers: {
                    'X-Array-Dtype': 'mixed',
                    'X-Array-Shape': '{"indices":[1],"normals":[1],"map":[1]}',
                    'X-Array-ByteOrder': 'little',
                    'X-Buffer-Offsets': '{not-json}',
                },
            }),
        ));

        await expect(fetchSurfacesBinary('/models/m1/surfaces')).rejects.toThrow(
            'Malformed X-Buffer-Offsets header',
        );
    });

    it('throws on malformed x-array-shape', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(
            mockBinaryResponse({
                buffer: new ArrayBuffer(16),
                headers: {
                    'X-Array-Dtype': 'mixed',
                    'X-Array-Shape': '{not-json}',
                    'X-Array-ByteOrder': 'little',
                    'X-Buffer-Offsets': '{"indices":[0,4],"normals":[4,8],"map":[8,12]}',
                },
            }),
        ));

        await expect(fetchSurfacesBinary('/models/m1/surfaces')).rejects.toThrow(
            'Malformed X-Array-Shape header',
        );
    });

    it('throws when required sections are missing', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(
            mockBinaryResponse({
                buffer: new ArrayBuffer(16),
                headers: {
                    'X-Array-Dtype': 'mixed',
                    'X-Array-Shape': '{"indices":[1],"normals":[1],"other":[1]}',
                    'X-Array-ByteOrder': 'little',
                    'X-Buffer-Offsets': '{"indices":[0,4],"normals":[4,8],"other":[8,12]}',
                },
            }),
        ));

        await expect(fetchSurfacesBinary('/models/m1/surfaces')).rejects.toThrow(
            'Missing or malformed shape section "map"',
        );
    });

    it('throws when dtype is not mixed for surfaces', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue(
            mockBinaryResponse({
                buffer: new ArrayBuffer(16),
                headers: {
                    'X-Array-Dtype': 'float64',
                    'X-Array-Shape': '{"indices":[1],"normals":[1],"map":[1]}',
                    'X-Array-ByteOrder': 'little',
                    'X-Buffer-Offsets': '{"indices":[0,4],"normals":[4,8],"map":[8,12]}',
                },
            }),
        ));

        await expect(fetchSurfacesBinary('/models/m1/surfaces')).rejects.toThrow(
            'Expected mixed surfaces payload',
        );
    });
});
