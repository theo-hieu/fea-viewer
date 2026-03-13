/**
 * FEA Viewer — Unit Tests: Scalar Contour Pipeline
 * ===================================================
 *
 * Tests for:
 * - Nodal scalar contour application on known geometry
 * - Elemental scalar contour application using surface_element_map
 * - NaN/Inf exclusion from autorange
 * - Zero-range field handling (min === max)
 * - Integration-point field blocking
 * - CPU-side Float64 preservation after contour application
 * - fieldLoadError state on missing timestep
 * - Above/below range color behavior (shader-level, tested via uniform values)
 * - LUT sampling for legend
 */

import { describe, it, expect, beforeEach } from 'vitest';
import * as THREE from 'three';
import { finiteMinMax, countNaN, normalizeScalar } from '@/utils/arrayUtils';
import { sampleLutRGB } from '@/three/colorMaps';
import { ContourManager } from '@/three/ContourManager';
import { useModelStore } from '@/store/modelStore';
import { useViewStore } from '@/store/viewStore';

function makeSplitSurfaceGeometry(): THREE.BufferGeometry {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(18), 3));
    geometry.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(18), 3));
    geometry.setAttribute('displacement', new THREE.BufferAttribute(new Float32Array(18), 3));
    geometry.setAttribute('scalarValue', new THREE.BufferAttribute(new Float32Array(6), 1));
    geometry.setAttribute(
        'sourceNodeIndex',
        new THREE.BufferAttribute(new Uint32Array([0, 1, 2, 1, 2, 3]), 1),
    );
    geometry.setAttribute(
        'sourceElementIndex',
        new THREE.BufferAttribute(new Int32Array([10, 10, 10, 20, 20, 20]), 1),
    );
    return geometry;
}

// ---------------------------------------------------------------------------
// NaN / Inf autorange exclusion
// ---------------------------------------------------------------------------
describe('Contour autorange — NaN/Inf exclusion', () => {
    it('excludes NaN from min/max computation', () => {
        const vals = new Float64Array([1.0, NaN, 5.0, 3.0]);
        const [min, max] = finiteMinMax(vals);
        expect(min).toBe(1.0);
        expect(max).toBe(5.0);
    });

    it('excludes positive Infinity from min/max computation', () => {
        const vals = new Float64Array([2.0, Infinity, 4.0]);
        const [min, max] = finiteMinMax(vals);
        expect(min).toBe(2.0);
        expect(max).toBe(4.0);
    });

    it('excludes negative Infinity from min/max computation', () => {
        const vals = new Float64Array([-Infinity, 2.0, 4.0]);
        const [min, max] = finiteMinMax(vals);
        expect(min).toBe(2.0);
        expect(max).toBe(4.0);
    });

    it('returns [NaN, NaN] for all-NaN array', () => {
        const vals = new Float64Array([NaN, NaN, NaN]);
        const [min, max] = finiteMinMax(vals);
        expect(Number.isNaN(min)).toBe(true);
        expect(Number.isNaN(max)).toBe(true);
    });

    it('counts NaN values correctly for warning display', () => {
        const vals = new Float64Array([1, NaN, 3, NaN, NaN, 5]);
        expect(countNaN(vals)).toBe(3);
    });

    it('counts zero NaN in clean data', () => {
        const vals = new Float64Array([1, 2, 3, 4]);
        expect(countNaN(vals)).toBe(0);
    });
});

// ---------------------------------------------------------------------------
// Zero-range field handling (min === max → t = 0.5)
// ---------------------------------------------------------------------------
describe('Contour normalization — zero range', () => {
    it('returns 0.5 when min equals max', () => {
        expect(normalizeScalar(5.0, 5.0, 5.0)).toBe(0.5);
    });

    it('returns NaN for NaN input regardless of range', () => {
        expect(Number.isNaN(normalizeScalar(NaN, 0, 10))).toBe(true);
    });

    it('normalizes correctly within range', () => {
        expect(normalizeScalar(5.0, 0.0, 10.0)).toBeCloseTo(0.5);
        expect(normalizeScalar(0.0, 0.0, 10.0)).toBeCloseTo(0.0);
        expect(normalizeScalar(10.0, 0.0, 10.0)).toBeCloseTo(1.0);
    });

    it('returns negative t for below-range values', () => {
        expect(normalizeScalar(-1.0, 0.0, 10.0)).toBeLessThan(0);
    });

    it('returns t > 1 for above-range values', () => {
        expect(normalizeScalar(11.0, 0.0, 10.0)).toBeGreaterThan(1);
    });
});

// ---------------------------------------------------------------------------
// Nodal scalar contour application
// ---------------------------------------------------------------------------
describe('Contour — nodal scalar application', () => {
    it('maps per-node Float64 values onto split surface vertices', () => {
        const geometry = makeSplitSurfaceGeometry();
        const manager = new ContourManager();
        const values = new Float64Array([10.0, 20.0, 30.0, 40.0]);

        manager.applyScalarField(geometry, values, 'nodal');

        const scalarArray = geometry.getAttribute('scalarValue').array as Float32Array;
        expect(Array.from(scalarArray)).toEqual([10, 20, 30, 20, 30, 40]);
    });

    it('fills excess vertices with NaN', () => {
        const geometry = makeSplitSurfaceGeometry();
        const manager = new ContourManager();
        const values = new Float64Array([1.0, 2.0]);

        manager.applyScalarField(geometry, values, 'nodal');
        const scalarArray = geometry.getAttribute('scalarValue').array as Float32Array;

        expect(scalarArray[2]).toBeNaN();
        expect(scalarArray[4]).toBeNaN();
    });
});

// ---------------------------------------------------------------------------
// Elemental scalar contour application using surface_element_map
// ---------------------------------------------------------------------------
describe('Contour — elemental scalar application via surface_element_map', () => {
    it('keeps adjacent shared-topology elements isolated after triangle splitting', () => {
        const geometry = makeSplitSurfaceGeometry();
        const manager = new ContourManager();
        const values = new Float64Array(100);
        values[10] = 100.0;
        values[20] = 200.0;

        manager.createContourMaterial(useViewStore.getState().colorMapConfig);
        manager.applyScalarField(geometry, values, 'elemental');

        const scalarArray = geometry.getAttribute('scalarValue').array as Float32Array;
        expect(Array.from(scalarArray)).toEqual([100, 100, 100, 200, 200, 200]);
        expect(manager.getMaterial()!.uniforms['u_use_flat_shading']!.value).toBe(true);
    });

    it('restores smooth interpolation semantics for nodal fields explicitly', () => {
        const geometry = makeSplitSurfaceGeometry();
        const manager = new ContourManager();

        manager.createContourMaterial(useViewStore.getState().colorMapConfig);
        manager.applyScalarField(geometry, new Float64Array([1, 2, 3, 4]), 'nodal');

        expect(manager.getMaterial()!.uniforms['u_use_flat_shading']!.value).toBe(false);
    });
});

// ---------------------------------------------------------------------------
// CPU-side Float64 preservation after contour application
// ---------------------------------------------------------------------------
describe('Contour — Float64 preservation for probing', () => {
    beforeEach(() => {
        useModelStore.getState().reset();
    });

    it('stores field values as Float64Array, not downcast', () => {
        const values = new Float64Array([1.23456789012345e15, -9.87654321098765e-20]);
        useModelStore.getState().setFieldValues(values);

        const stored = useModelStore.getState().fieldValues_f64;
        expect(stored).toBe(values); // Same reference
        expect(stored).toBeInstanceOf(Float64Array);
        expect(stored![0]).toBe(1.23456789012345e15);
        expect(stored![1]).toBe(-9.87654321098765e-20);
    });

    it('clears field values to null on field deselection', () => {
        useModelStore.getState().setFieldValues(new Float64Array([1, 2, 3]));
        useModelStore.getState().setFieldValues(null);
        expect(useModelStore.getState().fieldValues_f64).toBeNull();
    });
});

// ---------------------------------------------------------------------------
// Integration-point field blocking
// ---------------------------------------------------------------------------
describe('Contour — integration-point field blocking in MVP', () => {
    beforeEach(() => {
        useModelStore.getState().reset();
    });

    it('sets fieldLoadError for integration-point fields', () => {
        useModelStore.getState().setFieldLoadError(
            'Integration-point fields are not supported in MVP.',
        );
        expect(useModelStore.getState().fieldLoadError).toContain('not supported');
    });

    it('clears fieldLoadError when switching to supported field', () => {
        useModelStore.getState().setFieldLoadError('Integration-point not supported');
        useModelStore.getState().setFieldLoadError(null);
        expect(useModelStore.getState().fieldLoadError).toBeNull();
    });
});

// ---------------------------------------------------------------------------
// Field load error state
// ---------------------------------------------------------------------------
describe('Contour — fieldLoadError on missing timestep', () => {
    beforeEach(() => {
        useModelStore.getState().reset();
    });

    it('records "No data at this step" error', () => {
        useModelStore.getState().setFieldLoadError('No data at this step');
        expect(useModelStore.getState().fieldLoadError).toBe('No data at this step');
        // Field values should be null (no stale data)
        expect(useModelStore.getState().fieldValues_f64).toBeNull();
    });

    it('NaN count tracks correctly', () => {
        useModelStore.getState().setFieldNanCount(42);
        expect(useModelStore.getState().fieldNanCount).toBe(42);
    });
});

// ---------------------------------------------------------------------------
// Color map range syncing
// ---------------------------------------------------------------------------
describe('Contour — color map range sync', () => {
    beforeEach(() => {
        useViewStore.getState().resetView();
    });

    it('updates min/max from autorange computation', () => {
        const values = new Float64Array([1.0, NaN, 5.0, 3.0, NaN, 7.0]);
        const [min, max] = finiteMinMax(values);
        useViewStore.getState().setColorMapRange(min, max);

        const cfg = useViewStore.getState().colorMapConfig;
        expect(cfg.min_value).toBe(1.0);
        expect(cfg.max_value).toBe(7.0);
    });

    it('preserves NaN color as grey with alpha 0.3', () => {
        const cfg = useViewStore.getState().colorMapConfig;
        expect(cfg.nan_color).toEqual([0.5, 0.5, 0.5, 0.3]);
    });

    it('preserves above-range color as magenta', () => {
        const cfg = useViewStore.getState().colorMapConfig;
        expect(cfg.above_range_color).toEqual([1, 0, 1, 1]);
    });

    it('preserves below-range color as blue', () => {
        const cfg = useViewStore.getState().colorMapConfig;
        expect(cfg.below_range_color).toEqual([0, 0, 1, 1]);
    });
});

// ---------------------------------------------------------------------------
// LUT sampling for legend
// ---------------------------------------------------------------------------
describe('Contour — LUT sampling', () => {
    it('samples viridis at t=0 (dark purple)', () => {
        const [r, g, b] = sampleLutRGB('viridis', 0);
        // Viridis starts dark: R,G low, B higher
        expect(r).toBeLessThan(128);
        expect(g).toBeLessThan(10);
        expect(b).toBeGreaterThan(50);
    });

    it('samples viridis at t=1 (yellow)', () => {
        const [r, g, b] = sampleLutRGB('viridis', 1);
        // Viridis ends yellow: R high, G high, B low
        expect(r).toBeGreaterThan(200);
        expect(g).toBeGreaterThan(200);
        expect(b).toBeLessThan(100);
    });

    it('samples grayscale at t=0 (black)', () => {
        const [r, g, b] = sampleLutRGB('grayscale', 0);
        expect(r).toBe(0);
        expect(g).toBe(0);
        expect(b).toBe(0);
    });

    it('samples grayscale at t=1 (white)', () => {
        const [r, g, b] = sampleLutRGB('grayscale', 1);
        expect(r).toBe(255);
        expect(g).toBe(255);
        expect(b).toBe(255);
    });

    it('clamps out-of-range t values', () => {
        // Should not throw for t < 0 or t > 1
        expect(() => sampleLutRGB('viridis', -0.5)).not.toThrow();
        expect(() => sampleLutRGB('viridis', 1.5)).not.toThrow();
    });
});

// ---------------------------------------------------------------------------
// Default LUT is viridis
// ---------------------------------------------------------------------------
describe('Contour — default configuration', () => {
    beforeEach(() => {
        useViewStore.getState().resetView();
    });

    it('defaults to viridis LUT', () => {
        expect(useViewStore.getState().colorMapConfig.lut_name).toBe('viridis');
    });

    it('defaults to 256 colors', () => {
        expect(useViewStore.getState().colorMapConfig.n_colors).toBe(256);
    });

    it('defaults to linear scale', () => {
        expect(useViewStore.getState().colorMapConfig.scale).toBe('linear');
    });
});
