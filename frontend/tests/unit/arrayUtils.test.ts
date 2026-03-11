/**
 * FEA Viewer — Unit Tests: Array Utilities
 * ==========================================
 *
 * Tests for Float64→Float32 downcast, NaN-aware min/max, reshape, decode.
 */

import { describe, it, expect } from 'vitest';
import {
    float64ToFloat32,
    finiteMinMax,
    isNaNValue,
    countNaN,
    normalizeScalar,
    decodeTypedArray,
    reshape,
} from '@/utils/arrayUtils';

describe('float64ToFloat32', () => {
    it('downcasts correctly', () => {
        const f64 = new Float64Array([1.0, 2.5, -3.7]);
        const f32 = float64ToFloat32(f64);
        expect(f32).toBeInstanceOf(Float32Array);
        expect(f32.length).toBe(3);
        expect(f32[0]).toBeCloseTo(1.0, 5);
        expect(f32[1]).toBeCloseTo(2.5, 5);
        expect(f32[2]).toBeCloseTo(-3.7, 5);
    });

    it('handles empty array', () => {
        const f32 = float64ToFloat32(new Float64Array(0));
        expect(f32.length).toBe(0);
    });

    it('preserves NaN values through downcast', () => {
        const f64 = new Float64Array([1.0, NaN, 3.0]);
        const f32 = float64ToFloat32(f64);
        expect(Number.isNaN(f32[1])).toBe(true);
    });
});

describe('finiteMinMax', () => {
    it('computes min/max excluding NaN and Infinity', () => {
        const vals = new Float64Array([1.0, NaN, 3.0, -2.0, Infinity, -Infinity]);
        const [min, max] = finiteMinMax(vals);
        expect(min).toBe(-2.0);
        expect(max).toBe(3.0);
    });

    it('returns [NaN, NaN] for all-NaN array', () => {
        const vals = new Float64Array([NaN, NaN, NaN]);
        const [min, max] = finiteMinMax(vals);
        expect(Number.isNaN(min)).toBe(true);
        expect(Number.isNaN(max)).toBe(true);
    });

    it('handles single element', () => {
        const vals = new Float64Array([42.0]);
        const [min, max] = finiteMinMax(vals);
        expect(min).toBe(42.0);
        expect(max).toBe(42.0);
    });
});

describe('isNaNValue', () => {
    it('detects NaN', () => {
        expect(isNaNValue(NaN)).toBe(true);
        expect(isNaNValue(0)).toBe(false);
        expect(isNaNValue(Infinity)).toBe(false);
    });
});

describe('countNaN', () => {
    it('counts NaN values', () => {
        const vals = new Float64Array([1, NaN, 3, NaN, 5]);
        expect(countNaN(vals)).toBe(2);
    });
});

describe('normalizeScalar', () => {
    it('normalizes to [0,1]', () => {
        expect(normalizeScalar(5, 0, 10)).toBeCloseTo(0.5);
        expect(normalizeScalar(0, 0, 10)).toBeCloseTo(0.0);
        expect(normalizeScalar(10, 0, 10)).toBeCloseTo(1.0);
    });

    it('returns NaN for NaN input', () => {
        expect(Number.isNaN(normalizeScalar(NaN, 0, 10))).toBe(true);
    });

    it('returns 0.5 when min equals max', () => {
        expect(normalizeScalar(5, 5, 5)).toBe(0.5);
    });
});

describe('decodeTypedArray', () => {
    it('decodes float64 buffer', () => {
        const original = new Float64Array([1.0, 2.0, 3.0]);
        const decoded = decodeTypedArray(original.buffer, 'float64');
        expect(decoded).toBeInstanceOf(Float64Array);
        expect(decoded.length).toBe(3);
    });

    it('decodes int32 buffer', () => {
        const original = new Int32Array([1, 2, 3]);
        const decoded = decodeTypedArray(original.buffer, 'int32');
        expect(decoded).toBeInstanceOf(Int32Array);
        expect(decoded.length).toBe(3);
    });

    it('throws on unsupported dtype', () => {
        expect(() => decodeTypedArray(new ArrayBuffer(4), 'bfloat16')).toThrow();
    });
});

describe('reshape', () => {
    it('splits flat array into rows', () => {
        const flat = new Float64Array([1, 2, 3, 4, 5, 6]);
        const rows = reshape(flat, 3);
        expect(rows.length).toBe(2);
        expect(Array.from(rows[0]!)).toEqual([1, 2, 3]);
        expect(Array.from(rows[1]!)).toEqual([4, 5, 6]);
    });
});
