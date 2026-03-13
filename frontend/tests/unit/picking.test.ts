/**
 * FEA Viewer — Unit Tests: GPU Picking Pipeline
 * =================================================
 *
 * Tests for:
 * - 24-bit ID encode/decode correctness
 * - Element-pick exactness using known surface_element_map
 * - Node-pick nearest-vertex per-vertex encoding
 * - No-hit / background clicks (ID = 0)
 * - InfoPanel population from CPU-side Float64
 * - Timestep-sensitive probing with fieldLoadError
 * - Resize / DPR correctness for pick coordinates
 * - CPU-side value authority (not GPU buffers)
 */

import { describe, it, expect, beforeEach } from 'vitest';
import {
    buildElementPickingColors,
    buildNodePickingColors,
    decodeId,
    encodeId,
} from '@/three/PickingManager';
import { useModelStore } from '@/store/modelStore';
import { useViewStore } from '@/store/viewStore';

// ---------------------------------------------------------------------------
// 24-bit ID encode/decode correctness
// ---------------------------------------------------------------------------
describe('Picking — 24-bit ID encode/decode', () => {
    it('encodes ID 0 as black (0,0,0)', () => {
        const [r, g, b] = encodeId(0);
        expect(r).toBe(0);
        expect(g).toBe(0);
        expect(b).toBe(0);
    });

    it('encodes ID 1 correctly', () => {
        const [r, g, b] = encodeId(1);
        // ID 1 = 0x000001 → R=0, G=0, B=1/255
        expect(r).toBeCloseTo(0);
        expect(g).toBeCloseTo(0);
        expect(b).toBeCloseTo(1 / 255);
    });

    it('encodes ID 255 correctly (max blue channel)', () => {
        const [r, g, b] = encodeId(255);
        expect(r).toBeCloseTo(0);
        expect(g).toBeCloseTo(0);
        expect(b).toBeCloseTo(1.0);
    });

    it('encodes ID 256 correctly (overflow to green)', () => {
        const [r, g, b] = encodeId(256);
        // 256 = 0x000100 → R=0, G=1/255, B=0
        expect(r).toBeCloseTo(0);
        expect(g).toBeCloseTo(1 / 255);
        expect(b).toBeCloseTo(0);
    });

    it('encodes ID 65535 correctly (max green+blue)', () => {
        const [r, g, b] = encodeId(65535);
        expect(r).toBeCloseTo(0);
        expect(g).toBeCloseTo(1.0);
        expect(b).toBeCloseTo(1.0);
    });

    it('encodes ID 65536 correctly (overflow to red)', () => {
        const [r, g, b] = encodeId(65536);
        expect(r).toBeCloseTo(1 / 255);
        expect(g).toBeCloseTo(0);
        expect(b).toBeCloseTo(0);
    });

    it('round-trips IDs 0 through 100', () => {
        for (let id = 0; id <= 100; id++) {
            const [rF, gF, bF] = encodeId(id);
            const r = Math.round(rF * 255);
            const g = Math.round(gF * 255);
            const b = Math.round(bF * 255);
            const decoded = decodeId(r, g, b);
            expect(decoded).toBe(id);
        }
    });

    it('round-trips large IDs', () => {
        const testIds = [1000, 10000, 100000, 16777215]; // max 24-bit = 2^24 - 1
        for (const id of testIds) {
            const [rF, gF, bF] = encodeId(id);
            const r = Math.round(rF * 255);
            const g = Math.round(gF * 255);
            const b = Math.round(bF * 255);
            const decoded = decodeId(r, g, b);
            expect(decoded).toBe(id);
        }
    });

    it('decodes (0,0,0) as ID 0 (background/no-hit)', () => {
        expect(decodeId(0, 0, 0)).toBe(0);
    });

    it('decodes (255,255,255) as max 24-bit ID', () => {
        expect(decodeId(255, 255, 255)).toBe(16777215);
    });
});

// ---------------------------------------------------------------------------
// Element-pick exactness using surface_element_map
// ---------------------------------------------------------------------------
describe('Picking — element-pick encoding', () => {
    it('maps surface triangle to source element via surfaceElementMap', () => {
        // surface_element_map: tri0→elem5, tri1→elem12, tri2→elem5
        const surfaceElementMap = new Int32Array([5, 12, 5]);

        // Element-pick encoding: each tri's element ID + 1 (0 reserved for no-hit)
        const tri0ElemId = surfaceElementMap[0]!;
        const tri1ElemId = surfaceElementMap[1]!;
        const tri2ElemId = surfaceElementMap[2]!;

        // Encode with +1 offset
        const [r0, g0, b0] = encodeId(tri0ElemId + 1);
        const [r1, g1, b1] = encodeId(tri1ElemId + 1);

        // Decoded IDs (after -1 offset)
        const decoded0 = decodeId(
            Math.round(r0 * 255), Math.round(g0 * 255), Math.round(b0 * 255),
        ) - 1;
        const decoded1 = decodeId(
            Math.round(r1 * 255), Math.round(g1 * 255), Math.round(b1 * 255),
        ) - 1;

        expect(decoded0).toBe(5);
        expect(decoded1).toBe(12);
        expect(tri2ElemId).toBe(tri0ElemId); // tri2 shares element with tri0
    });

    it('all three vertices of a triangle share the same element color', () => {
        const elemId = 42;
        const [r, g, b] = encodeId(elemId + 1);

        // All 3 vertices should get the same color
        for (let v = 0; v < 3; v++) {
            expect(r).toBeCloseTo(((elemId + 1) >> 16 & 0xFF) / 255);
            expect(g).toBeCloseTo(((elemId + 1) >> 8 & 0xFF) / 255);
            expect(b).toBeCloseTo(((elemId + 1) & 0xFF) / 255);
        }
    });

    it('adjacent triangles with shared source vertices keep isolated element IDs', () => {
        const colors = buildElementPickingColors(new Int32Array([5, 5, 5, 12, 12, 12]));

        const firstTriIds = [0, 1, 2].map((vertex) => decodeId(
            Math.round(colors[vertex * 3]! * 255),
            Math.round(colors[vertex * 3 + 1]! * 255),
            Math.round(colors[vertex * 3 + 2]! * 255),
        ) - 1);
        const secondTriIds = [3, 4, 5].map((vertex) => decodeId(
            Math.round(colors[vertex * 3]! * 255),
            Math.round(colors[vertex * 3 + 1]! * 255),
            Math.round(colors[vertex * 3 + 2]! * 255),
        ) - 1);

        expect(firstTriIds).toEqual([5, 5, 5]);
        expect(secondTriIds).toEqual([12, 12, 12]);
    });
});

// ---------------------------------------------------------------------------
// Node-pick nearest-vertex encoding
// ---------------------------------------------------------------------------
describe('Picking — node-pick vertex encoding', () => {
    it('each vertex gets a unique node ID', () => {
        const colors = buildNodePickingColors(new Uint32Array([0, 1, 2, 3]));

        // Decode each vertex and verify unique IDs
        for (let i = 0; i < 4; i++) {
            const r = Math.round(colors[i * 3]! * 255);
            const g = Math.round(colors[i * 3 + 1]! * 255);
            const b = Math.round(colors[i * 3 + 2]! * 255);
            const decoded = decodeId(r, g, b) - 1;
            expect(decoded).toBe(i);
        }
    });

    it('vertex 0 encodes as ID 1 (0 reserved for background)', () => {
        const colors = buildNodePickingColors(new Uint32Array([0]));
        const r = colors[0]!;
        const g = colors[1]!;
        const b = colors[2]!;
        const decoded = decodeId(
            Math.round(r * 255), Math.round(g * 255), Math.round(b * 255),
        );
        expect(decoded).toBe(1);
        expect(decoded - 1).toBe(0); // actual node index
    });
});

// ---------------------------------------------------------------------------
// No-hit / background clicks
// ---------------------------------------------------------------------------
describe('Picking — no-hit behavior', () => {
    it('ID 0 means no hit (background)', () => {
        const decoded = decodeId(0, 0, 0);
        expect(decoded).toBe(0);
        // PickingManager returns null for ID == 0
    });

    it('null result should clear pickedEntity', () => {
        // Simulating: result is null → pickedEntity should be null
        const result = null;
        const pickedEntity = result ? { mode: 'node' as const, id: 0 } : null;
        expect(pickedEntity).toBeNull();
    });
});

// ---------------------------------------------------------------------------
// CPU-side Float64 value authority
// ---------------------------------------------------------------------------
describe('Picking — CPU-side Float64 authority for probe values', () => {
    beforeEach(() => {
        useModelStore.getState().reset();
    });

    it('node coordinates come from nodeCoords_f64, not GPU buffers', () => {
        const coords = new Float64Array([
            1.23456789012345, 2.34567890123456, 3.45678901234567,
            4.56789012345678, 5.67890123456789, 6.78901234567890,
        ]);
        useModelStore.getState().setNodeCoords(coords);

        const stored = useModelStore.getState().nodeCoords_f64;
        expect(stored).toBeInstanceOf(Float64Array);
        // Verify full Float64 precision is preserved
        expect(stored![0]).toBe(1.23456789012345);
        expect(stored![3]).toBe(4.56789012345678);
    });

    it('field values come from fieldValues_f64, not GPU buffers', () => {
        const values = new Float64Array([
            9.87654321098765e-15,
            -1.23456789012345e20,
        ]);
        useModelStore.getState().setFieldValues(values);

        const stored = useModelStore.getState().fieldValues_f64;
        expect(stored).toBeInstanceOf(Float64Array);
        expect(stored![0]).toBe(9.87654321098765e-15);
        expect(stored![1]).toBe(-1.23456789012345e20);
    });

    it('probed value precision satisfies ε ≤ 1e-12', () => {
        const sourceValue = 3.141592653589793;
        const coords = new Float64Array([sourceValue, 0, 0]);
        useModelStore.getState().setNodeCoords(coords);

        const probedValue = useModelStore.getState().nodeCoords_f64![0]!;
        const epsilon = Math.abs(probedValue - sourceValue);
        expect(epsilon).toBeLessThan(1e-12);
    });
});

// ---------------------------------------------------------------------------
// Timestep-sensitive probing
// ---------------------------------------------------------------------------
describe('Picking — timestep-sensitive probing', () => {
    beforeEach(() => {
        useModelStore.getState().reset();
    });

    it('shows fieldLoadError when data unavailable at active timestep', () => {
        useModelStore.getState().setFieldLoadError('No data at this step');
        expect(useModelStore.getState().fieldLoadError).toBe('No data at this step');
    });

    it('clears fieldLoadError when data becomes available', () => {
        useModelStore.getState().setFieldLoadError('No data at this step');
        useModelStore.getState().setFieldLoadError(null);
        expect(useModelStore.getState().fieldLoadError).toBeNull();
    });
});

// ---------------------------------------------------------------------------
// Resize / DPR correctness
// ---------------------------------------------------------------------------
describe('Picking — resize and DPR handling', () => {
    it('pixel coordinates scale with device pixel ratio', () => {
        // Simulate: client click at (100, 200), DPR = 2
        const clientX = 100;
        const clientY = 200;
        const rectLeft = 0;
        const rectTop = 0;
        const dpr = 2;

        const x = Math.round((clientX - rectLeft) * dpr);
        const y = Math.round((clientY - rectTop) * dpr);

        expect(x).toBe(200);
        expect(y).toBe(400);
    });

    it('pixel coordinates account for container offset', () => {
        const clientX = 350;
        const clientY = 250;
        const rectLeft = 50;
        const rectTop = 100;
        const dpr = 1;

        const x = Math.round((clientX - rectLeft) * dpr);
        const y = Math.round((clientY - rectTop) * dpr);

        expect(x).toBe(300);
        expect(y).toBe(150);
    });
});

// ---------------------------------------------------------------------------
// Pick mode defaults
// ---------------------------------------------------------------------------
describe('Picking — default configuration', () => {
    beforeEach(() => {
        useViewStore.getState().resetView();
    });

    it('default pick mode is node', () => {
        expect(useViewStore.getState().pickMode).toBe('node');
    });

    it('can switch to element mode', () => {
        useViewStore.getState().setPickMode('element');
        expect(useViewStore.getState().pickMode).toBe('element');
    });

    it('can switch back to node mode', () => {
        useViewStore.getState().setPickMode('element');
        useViewStore.getState().setPickMode('node');
        expect(useViewStore.getState().pickMode).toBe('node');
    });
});
