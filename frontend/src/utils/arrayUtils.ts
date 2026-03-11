/**
 * FEA Viewer — Array Utilities
 * =============================
 *
 * Helper functions for binary data manipulation in the rendering pipeline.
 * CPU-side Float64 is authoritative; Float32 downcasting happens only at GPU upload.
 */

/**
 * Downcast Float64Array to Float32Array for GPU upload.
 * This is the ONLY place precision is intentionally reduced.
 */
export function float64ToFloat32(src: Float64Array): Float32Array {
    const dst = new Float32Array(src.length);
    for (let i = 0; i < src.length; i++) {
        dst[i] = src[i]!;
    }
    return dst;
}

/**
 * Compute min and max of an array, excluding NaN and ±Infinity.
 * Returns [NaN, NaN] if no finite values exist.
 */
export function finiteMinMax(values: Float64Array | Float32Array): [number, number] {
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < values.length; i++) {
        const v = values[i]!;
        if (!Number.isFinite(v)) continue;
        if (v < min) min = v;
        if (v > max) max = v;
    }
    if (min === Infinity) return [NaN, NaN];
    return [min, max];
}

/**
 * Check if a value is NaN (handles typed array reads).
 */
export function isNaNValue(v: number): boolean {
    return Number.isNaN(v);
}

/**
 * Reshape a flat typed array into a 2D array of rows.
 * Returns array of subarrays (views when possible).
 */
export function reshape<T extends Float64Array | Float32Array | Int32Array>(
    flat: T,
    cols: number,
): T[] {
    const rows = flat.length / cols;
    const result: T[] = [];
    for (let i = 0; i < rows; i++) {
        result.push(flat.slice(i * cols, (i + 1) * cols) as T);
    }
    return result;
}

/**
 * Decode a binary ArrayBuffer into a typed array based on dtype string.
 */
export function decodeTypedArray(
    buffer: ArrayBuffer,
    dtype: string,
): Float64Array | Float32Array | Int32Array | Uint8Array {
    switch (dtype) {
        case 'float64': return new Float64Array(buffer);
        case 'float32': return new Float32Array(buffer);
        case 'int32': return new Int32Array(buffer);
        case 'uint8': return new Uint8Array(buffer);
        default:
            throw new Error(`Unsupported dtype: ${dtype}`);
    }
}

/**
 * Count NaN values in a typed array.
 */
export function countNaN(values: Float64Array | Float32Array): number {
    let count = 0;
    for (let i = 0; i < values.length; i++) {
        if (Number.isNaN(values[i])) count++;
    }
    return count;
}

/**
 * Normalize a scalar value to [0, 1] range given min/max.
 * Returns NaN for NaN input.
 */
export function normalizeScalar(value: number, min: number, max: number): number {
    if (Number.isNaN(value)) return NaN;
    if (max === min) return 0.5;
    return (value - min) / (max - min);
}
