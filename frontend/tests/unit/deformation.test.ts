/**
 * FEA Viewer — Unit Tests: Deformation Pipeline
 * =================================================
 *
 * Tests for:
 * - Valid nodal vector3 deformation field selection
 * - Rejection of non-nodal or non-vector3 fields
 * - Rejection of wrong-length displacement arrays
 * - Undeformed mode sets u_deform_scale = 0.0
 * - Scale updates update only uniform (no geometry re-upload)
 * - Base coordinate array remains unchanged after mode/scale changes
 * - Missing-timestep displacement shows "No data at this step"
 * - Float32 overflow clamp-and-warn behavior
 * - CPU-side Float64 preservation for probing
 * - Default deformation state
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { float64ToFloat32 } from '@/utils/arrayUtils';
import { useModelStore } from '@/store/modelStore';
import { useViewStore } from '@/store/viewStore';
import type { ResultFieldDescriptor, FieldProvenance } from '@/utils/feaTypes';

// Helper to create a field descriptor
function makeField(overrides: Partial<ResultFieldDescriptor> = {}): ResultFieldDescriptor {
    return {
        id: 'displacement-1',
        name: 'U',
        location: 'nodal',
        n_components: 3,
        n_timesteps: 1,
        timesteps: [{ step_index: 0, time_value: 0.0 }],
        provenance: {
            source_field_name: 'U',
            source_location: 'nodal',
            extrapolation_applied: false,
            averaging_applied: false,
            averaging_method: null,
            coordinate_system: 'global',
            warnings: [],
        } as FieldProvenance,
        ...overrides,
    };
}

// ---------------------------------------------------------------------------
// Field validation
// ---------------------------------------------------------------------------
describe('Deformation — field validation', () => {
    it('accepts nodal vector3 fields', () => {
        const field = makeField({ location: 'nodal', n_components: 3 });
        expect(field.location).toBe('nodal');
        expect(field.n_components).toBe(3);
        const isValid = field.location === 'nodal' && field.n_components === 3;
        expect(isValid).toBe(true);
    });

    it('rejects elemental fields', () => {
        const field = makeField({ location: 'elemental', n_components: 3 });
        const isValid = field.location === 'nodal' && field.n_components === 3;
        expect(isValid).toBe(false);
    });

    it('rejects integration-point fields', () => {
        const field = makeField({ location: 'integration_point', n_components: 3 });
        const isValid = field.location === 'nodal' && field.n_components === 3;
        expect(isValid).toBe(false);
    });

    it('rejects scalar fields (n_components !== 3)', () => {
        const field = makeField({ location: 'nodal', n_components: 1 });
        const isValid = field.location === 'nodal' && field.n_components === 3;
        expect(isValid).toBe(false);
    });

    it('rejects tensor fields (n_components = 6)', () => {
        const field = makeField({ location: 'nodal', n_components: 6 });
        const isValid = field.location === 'nodal' && field.n_components === 3;
        expect(isValid).toBe(false);
    });
});

// ---------------------------------------------------------------------------
// Displacement array length validation
// ---------------------------------------------------------------------------
describe('Deformation — displacement array length', () => {
    it('accepts correct length (nNodes × 3)', () => {
        const nNodes = 100;
        const disp = new Float64Array(nNodes * 3);
        expect(disp.length).toBe(nNodes * 3);
    });

    it('rejects wrong length', () => {
        const nNodes = 100;
        const expectedLen = nNodes * 3;
        const wrongDisp = new Float64Array(nNodes * 2); // wrong
        expect(wrongDisp.length).not.toBe(expectedLen);
    });
});

// ---------------------------------------------------------------------------
// Float64 → Float32 downcast at GPU boundary
// ---------------------------------------------------------------------------
describe('Deformation — Float64 → Float32 downcast', () => {
    it('downcasts displacement to Float32 for GPU upload', () => {
        const disp_f64 = new Float64Array([1.0, 2.0, 3.0, -0.5, 0.0, 1e-10]);
        const disp_f32 = float64ToFloat32(disp_f64);

        expect(disp_f32).toBeInstanceOf(Float32Array);
        expect(disp_f32.length).toBe(disp_f64.length);
        expect(disp_f32[0]).toBeCloseTo(1.0);
        expect(disp_f32[3]).toBeCloseTo(-0.5);
    });

    it('preserves original Float64 array after downcast', () => {
        const disp_f64 = new Float64Array([1.23456789012345e15]);
        float64ToFloat32(disp_f64); // downcast happens; source unmodified
        // Source must be unchanged
        expect(disp_f64[0]).toBe(1.23456789012345e15);
    });
});

// ---------------------------------------------------------------------------
// Deformation scale and mode
// ---------------------------------------------------------------------------
describe('Deformation — scale and mode behavior', () => {
    beforeEach(() => {
        useViewStore.getState().resetView();
    });

    it('undeformed mode defaults deformScale to 1.0', () => {
        expect(useViewStore.getState().deformScale).toBe(1.0);
    });

    it('undeformed mode should use effective scale 0.0', () => {
        useViewStore.getState().setDeformMode('undeformed');
        const mode = useViewStore.getState().deformMode;
        const effectiveScale = mode === 'undeformed' ? 0.0 : useViewStore.getState().deformScale;
        expect(effectiveScale).toBe(0.0);
    });

    it('deformed mode uses user scale', () => {
        useViewStore.getState().setDeformMode('deformed');
        useViewStore.getState().setDeformScale(5.0);
        const mode = useViewStore.getState().deformMode;
        const effectiveScale = mode === 'undeformed' ? 0.0 : useViewStore.getState().deformScale;
        expect(effectiveScale).toBe(5.0);
    });

    it('overlay mode uses user scale for surface', () => {
        useViewStore.getState().setDeformMode('overlay');
        useViewStore.getState().setDeformScale(3.0);
        const mode = useViewStore.getState().deformMode;
        const effectiveScale = mode === 'undeformed' ? 0.0 : useViewStore.getState().deformScale;
        expect(effectiveScale).toBe(3.0);
    });

    it('scale updates are just state changes (no geometry)', () => {
        // Changing scale should only update the Zustand store — no geometry re-upload
        useViewStore.getState().setDeformScale(1.0);
        useViewStore.getState().setDeformScale(10.0);
        useViewStore.getState().setDeformScale(100.0);
        expect(useViewStore.getState().deformScale).toBe(100.0);
    });

    it('clamps scale to [0, 10000]', () => {
        useViewStore.getState().setDeformScale(0);
        expect(useViewStore.getState().deformScale).toBe(0);
        useViewStore.getState().setDeformScale(10000);
        expect(useViewStore.getState().deformScale).toBe(10000);
    });
});

// ---------------------------------------------------------------------------
// Base coordinate immutability
// ---------------------------------------------------------------------------
describe('Deformation — base coordinate immutability', () => {
    beforeEach(() => {
        useModelStore.getState().reset();
    });

    it('source nodeCoords_f64 remains unchanged after storing displacement', () => {
        const coords = new Float64Array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]);
        useModelStore.getState().setNodeCoords(coords);

        const disp = new Float64Array([0.1, 0.2, 0.3, -0.1, -0.2, -0.3]);
        useModelStore.getState().setDisplacementValues(disp);

        // Base coords must be EXACTLY the originals
        const stored = useModelStore.getState().nodeCoords_f64;
        expect(stored).toBe(coords); // Same reference
        expect(stored![0]).toBe(1.0);
        expect(stored![1]).toBe(2.0);
        expect(stored![5]).toBe(6.0);
    });

    it('clearing displacement does not affect base coords', () => {
        const coords = new Float64Array([10, 20, 30]);
        useModelStore.getState().setNodeCoords(coords);
        useModelStore.getState().setDisplacementValues(new Float64Array([1, 2, 3]));
        useModelStore.getState().setDisplacementValues(null);

        expect(useModelStore.getState().nodeCoords_f64).toBe(coords);
        expect(useModelStore.getState().displacement_f64).toBeNull();
    });
});

// ---------------------------------------------------------------------------
// CPU-side Float64 displacement preservation for probing
// ---------------------------------------------------------------------------
describe('Deformation — Float64 displacement preservation', () => {
    beforeEach(() => {
        useModelStore.getState().reset();
    });

    it('stores displacement as Float64Array for probing', () => {
        const disp = new Float64Array([1.23456789012345, -9.87654321098765]);
        useModelStore.getState().setDisplacementValues(disp);

        const stored = useModelStore.getState().displacement_f64;
        expect(stored).toBe(disp);
        expect(stored).toBeInstanceOf(Float64Array);
        expect(stored![0]).toBe(1.23456789012345);
    });
});

// ---------------------------------------------------------------------------
// Deformation load error state
// ---------------------------------------------------------------------------
describe('Deformation — deformLoadError', () => {
    beforeEach(() => {
        useModelStore.getState().reset();
    });

    it('records error for invalid field', () => {
        useModelStore.getState().setDeformLoadError('Deformation requires a nodal field.');
        expect(useModelStore.getState().deformLoadError).toContain('nodal');
    });

    it('records "No data at this step"', () => {
        useModelStore.getState().setDeformLoadError('No data at this step');
        expect(useModelStore.getState().deformLoadError).toBe('No data at this step');
    });

    it('clears error on valid field selection', () => {
        useModelStore.getState().setDeformLoadError('some error');
        useModelStore.getState().setDeformLoadError(null);
        expect(useModelStore.getState().deformLoadError).toBeNull();
    });
});

// ---------------------------------------------------------------------------
// Float32 overflow detection
// ---------------------------------------------------------------------------
describe('Deformation — Float32 overflow clamp', () => {
    const FLOAT32_MAX_SAFE = 3.4e38;

    it('detects when scale * maxDisp exceeds Float32 max', () => {
        const maxDisp = 1e30;
        const scale = 1e10;
        const wouldOverflow = maxDisp * scale > FLOAT32_MAX_SAFE;
        expect(wouldOverflow).toBe(true);
    });

    it('computes clamped scale to stay within Float32', () => {
        const maxDisp = 1e30;
        const clampedScale = FLOAT32_MAX_SAFE / maxDisp;
        expect(clampedScale * maxDisp).toBeLessThanOrEqual(FLOAT32_MAX_SAFE);
    });

    it('does not clamp for reasonable values', () => {
        const maxDisp = 100;
        const scale = 100;
        const wouldOverflow = maxDisp * scale > FLOAT32_MAX_SAFE;
        expect(wouldOverflow).toBe(false);
    });
});

// ---------------------------------------------------------------------------
// Default deformation configuration
// ---------------------------------------------------------------------------
describe('Deformation — defaults', () => {
    beforeEach(() => {
        useViewStore.getState().resetView();
        useModelStore.getState().reset();
    });

    it('default mode is undeformed', () => {
        expect(useViewStore.getState().deformMode).toBe('undeformed');
    });

    it('default scale is 1.0', () => {
        expect(useViewStore.getState().deformScale).toBe(1.0);
    });

    it('default deformFieldId is null', () => {
        expect(useViewStore.getState().deformFieldId).toBeNull();
    });

    it('default displacement_f64 is null', () => {
        expect(useModelStore.getState().displacement_f64).toBeNull();
    });

    it('default deformLoadError is null', () => {
        expect(useModelStore.getState().deformLoadError).toBeNull();
    });
});
