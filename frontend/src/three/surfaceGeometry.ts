import * as THREE from 'three';
import { float64ToFloat32 } from '@/utils/arrayUtils';

export interface SurfaceGeometryStats {
    positionsLength: number;
    indicesLength: number;
    normalsLength: number;
    surfaceElementMapLength: number;
    vertexCount: number;
    triangleCount: number;
    minIndex: number;
    maxIndex: number;
    hasNegativeIndices: boolean;
    hasOutOfRangeIndices: boolean;
}

export class SurfaceGeometryError extends Error {
    constructor(message: string, public readonly stats: SurfaceGeometryStats) {
        super(message);
        this.name = 'SurfaceGeometryError';
    }
}

export interface PreparedSurfaceGeometry {
    geometry: THREE.BufferGeometry;
    positions: Float32Array;
    renderIndices: Uint32Array;
    stats: SurfaceGeometryStats;
}

export function prepareSurfaceGeometry(params: {
    nodeCoords_f64: Float64Array;
    surfaceIndices: Int32Array;
    surfaceNormals: Float32Array;
    surfaceElementMap?: Int32Array | null;
}): PreparedSurfaceGeometry {
    const {
        nodeCoords_f64,
        surfaceIndices,
        surfaceNormals,
        surfaceElementMap,
    } = params;
    const positions = float64ToFloat32(nodeCoords_f64);
    const vertexCount = positions.length / 3;

    const stats = collectSurfaceGeometryStats({
        positionsLength: positions.length,
        vertexCount,
        surfaceIndices,
        surfaceNormals,
        surfaceElementMap,
    });

    if (positions.length === 0) {
        throw new SurfaceGeometryError('Surface geometry has no node positions', stats);
    }
    if (positions.length % 3 !== 0) {
        throw new SurfaceGeometryError(
            `Surface positions length must be divisible by 3; received ${positions.length}`,
            stats,
        );
    }
    if (surfaceIndices.length === 0) {
        throw new SurfaceGeometryError('Surface geometry has no indices', stats);
    }
    if (surfaceIndices.length % 3 !== 0) {
        throw new SurfaceGeometryError(
            `Surface indices length must be divisible by 3; received ${surfaceIndices.length}`,
            stats,
        );
    }
    if (surfaceNormals.length !== positions.length) {
        throw new SurfaceGeometryError(
            `Surface normals length ${surfaceNormals.length} does not match positions length ${positions.length}`,
            stats,
        );
    }
    if (surfaceElementMap && surfaceElementMap.length !== surfaceIndices.length / 3) {
        throw new SurfaceGeometryError(
            `surfaceElementMap length ${surfaceElementMap.length} does not match triangle count ${surfaceIndices.length / 3}`,
            stats,
        );
    }
    if (stats.hasNegativeIndices) {
        throw new SurfaceGeometryError(
            `Surface indices contain negative values (min=${stats.minIndex})`,
            stats,
        );
    }
    if (stats.hasOutOfRangeIndices) {
        throw new SurfaceGeometryError(
            `Surface indices exceed vertex count (max=${stats.maxIndex}, vertexCount=${vertexCount})`,
            stats,
        );
    }

    const renderIndices = Uint32Array.from(surfaceIndices);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('normal', new THREE.BufferAttribute(surfaceNormals, 3));
    geometry.setIndex(new THREE.BufferAttribute(renderIndices, 1));
    geometry.computeBoundingBox();
    geometry.computeBoundingSphere();

    return {
        geometry,
        positions,
        renderIndices,
        stats,
    };
}

export function logSurfaceGeometryStats(
    stats: SurfaceGeometryStats,
    context: string,
): void {
    console.info(`[${context}] Surface geometry stats`, stats);
}

function collectSurfaceGeometryStats(params: {
    positionsLength: number;
    vertexCount: number;
    surfaceIndices: Int32Array;
    surfaceNormals: Float32Array;
    surfaceElementMap?: Int32Array | null;
}): SurfaceGeometryStats {
    const {
        positionsLength,
        vertexCount,
        surfaceIndices,
        surfaceNormals,
        surfaceElementMap,
    } = params;

    let minIndex = Infinity;
    let maxIndex = -Infinity;
    let hasNegativeIndices = false;

    for (let i = 0; i < surfaceIndices.length; i++) {
        const idx = surfaceIndices[i]!;
        if (idx < minIndex) minIndex = idx;
        if (idx > maxIndex) maxIndex = idx;
        if (idx < 0) hasNegativeIndices = true;
    }

    if (surfaceIndices.length === 0) {
        minIndex = NaN;
        maxIndex = NaN;
    }

    return {
        positionsLength,
        indicesLength: surfaceIndices.length,
        normalsLength: surfaceNormals.length,
        surfaceElementMapLength: surfaceElementMap?.length ?? 0,
        vertexCount,
        triangleCount: surfaceIndices.length / 3,
        minIndex,
        maxIndex,
        hasNegativeIndices,
        hasOutOfRangeIndices: Number.isFinite(maxIndex) && maxIndex > vertexCount - 1,
    };
}
