/**
 * FEA Viewer — Color Map LUT Data
 * =================================
 *
 * Per 02b §6.4: viridis (default), coolwarm, jet, rainbow, grayscale.
 * Each map is a Float32Array of 256 RGB triplets (768 floats).
 * viridis is perceptually uniform and colorblind-safe (default).
 * jet shows a UI warning: "Jet colormap is not perceptually uniform."
 */

import * as THREE from 'three';

export type LutName = 'viridis' | 'coolwarm' | 'jet' | 'rainbow' | 'grayscale';

/**
 * Generate a 256-entry LUT texture for a given colormap name.
 */
export function createLutTexture(name: LutName): THREE.DataTexture {
    const data = new Uint8Array(256 * 4);
    const colors = getLutColors(name);

    for (let i = 0; i < 256; i++) {
        const idx = i * 3;
        const dataIdx = i * 4;
        data[dataIdx] = Math.round(colors[idx]! * 255);
        data[dataIdx + 1] = Math.round(colors[idx + 1]! * 255);
        data[dataIdx + 2] = Math.round(colors[idx + 2]! * 255);
        data[dataIdx + 3] = 255;
    }

    const texture = new THREE.DataTexture(data, 256, 1, THREE.RGBAFormat);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.needsUpdate = true;
    return texture;
}

/**
 * Sample a LUT color at a normalized position t ∈ [0,1].
 * Returns [r, g, b] as integers [0,255] for canvas rendering.
 */
export function sampleLutRGB(name: LutName, t: number): [number, number, number] {
    const colors = getLutColors(name);
    const idx = Math.min(Math.max(Math.round(t * 255), 0), 255) * 3;
    return [
        Math.round(colors[idx]! * 255),
        Math.round(colors[idx + 1]! * 255),
        Math.round(colors[idx + 2]! * 255),
    ];
}

/**
 * Get raw LUT color data (256 RGB triplets as float [0,1]).
 */
function getLutColors(name: LutName): Float32Array {
    switch (name) {
        case 'viridis': return generateViridis();
        case 'coolwarm': return generateCoolwarm();
        case 'jet': return generateJet();
        case 'rainbow': return generateRainbow();
        case 'grayscale': return generateGrayscale();
    }
}

// --- Viridis (simplified approximation) ---
function generateViridis(): Float32Array {
    const data = new Float32Array(256 * 3);
    // Key stops for viridis: dark purple → teal → yellow
    const stops = [
        [0.267, 0.004, 0.329],
        [0.282, 0.140, 0.458],
        [0.254, 0.265, 0.530],
        [0.207, 0.372, 0.553],
        [0.164, 0.471, 0.558],
        [0.128, 0.567, 0.551],
        [0.134, 0.658, 0.517],
        [0.267, 0.749, 0.441],
        [0.478, 0.821, 0.318],
        [0.741, 0.873, 0.150],
        [0.993, 0.906, 0.144],
    ];
    return interpolateStops(stops, data);
}

// --- Coolwarm ---
function generateCoolwarm(): Float32Array {
    const data = new Float32Array(256 * 3);
    const stops = [
        [0.230, 0.299, 0.754],
        [0.552, 0.588, 0.893],
        [0.866, 0.866, 0.866],
        [0.897, 0.570, 0.462],
        [0.706, 0.016, 0.150],
    ];
    return interpolateStops(stops, data);
}

// --- Jet ---
function generateJet(): Float32Array {
    const data = new Float32Array(256 * 3);
    const stops = [
        [0.0, 0.0, 0.5],
        [0.0, 0.0, 1.0],
        [0.0, 1.0, 1.0],
        [1.0, 1.0, 0.0],
        [1.0, 0.0, 0.0],
        [0.5, 0.0, 0.0],
    ];
    return interpolateStops(stops, data);
}

// --- Rainbow ---
function generateRainbow(): Float32Array {
    const data = new Float32Array(256 * 3);
    for (let i = 0; i < 256; i++) {
        const t = i / 255;
        const hue = (1.0 - t) * 300; // 300° → 0° (purple→red)
        const [r, g, b] = hslToRgb(hue / 360, 1.0, 0.5);
        data[i * 3] = r;
        data[i * 3 + 1] = g;
        data[i * 3 + 2] = b;
    }
    return data;
}

// --- Grayscale ---
function generateGrayscale(): Float32Array {
    const data = new Float32Array(256 * 3);
    for (let i = 0; i < 256; i++) {
        const v = i / 255;
        data[i * 3] = v;
        data[i * 3 + 1] = v;
        data[i * 3 + 2] = v;
    }
    return data;
}

// --- Helpers ---

function interpolateStops(stops: number[][], data: Float32Array): Float32Array {
    const n = stops.length - 1;
    for (let i = 0; i < 256; i++) {
        const t = i / 255;
        const segment = Math.min(Math.floor(t * n), n - 1);
        const localT = (t * n) - segment;
        const c0 = stops[segment]!;
        const c1 = stops[segment + 1]!;
        data[i * 3] = c0[0]! + (c1[0]! - c0[0]!) * localT;
        data[i * 3 + 1] = c0[1]! + (c1[1]! - c0[1]!) * localT;
        data[i * 3 + 2] = c0[2]! + (c1[2]! - c0[2]!) * localT;
    }
    return data;
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h * 6) % 2 - 1));
    const m = l - c / 2;
    let r = 0, g = 0, b = 0;
    const sector = Math.floor(h * 6);
    switch (sector % 6) {
        case 0: r = c; g = x; break;
        case 1: r = x; g = c; break;
        case 2: g = c; b = x; break;
        case 3: g = x; b = c; break;
        case 4: r = x; b = c; break;
        case 5: r = c; b = x; break;
    }
    return [r + m, g + m, b + m];
}
