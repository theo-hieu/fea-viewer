import * as THREE from 'three';
import { float64ToFloat32 } from '@/utils/arrayUtils';

export interface SurfaceGeometryStats {
    positionsLength: number;
    indicesLength: number;
    normalsLength: number;
    surfaceElementMapLength: number;
    vertexCount: number;
    renderVertexCount: number;
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
    const renderVertexCount = surfaceIndices.length;

    const stats = collectSurfaceGeometryStats({
        positionsLength: positions.length,
        vertexCount,
        renderVertexCount,
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

    const renderPositions = new Float32Array(renderVertexCount * 3);
    const smoothNormals = new Float32Array(renderVertexCount * 3);
    const flatNormals = new Float32Array(renderVertexCount * 3);
    const sourceNodeIndices = new Uint32Array(renderVertexCount);
    const sourceElementIndices = new Int32Array(renderVertexCount);

    for (let tri = 0; tri < surfaceIndices.length / 3; tri++) {
        const triOffset = tri * 3;
        const a = surfaceIndices[triOffset]!;
        const b = surfaceIndices[triOffset + 1]!;
        const c = surfaceIndices[triOffset + 2]!;
        const elementIndex = surfaceElementMap ? surfaceElementMap[tri]! : -1;

        const ax = positions[a * 3]!;
        const ay = positions[a * 3 + 1]!;
        const az = positions[a * 3 + 2]!;
        const bx = positions[b * 3]!;
        const by = positions[b * 3 + 1]!;
        const bz = positions[b * 3 + 2]!;
        const cx = positions[c * 3]!;
        const cy = positions[c * 3 + 1]!;
        const cz = positions[c * 3 + 2]!;

        const abx = bx - ax;
        const aby = by - ay;
        const abz = bz - az;
        const acx = cx - ax;
        const acy = cy - ay;
        const acz = cz - az;

        let fnx = aby * acz - abz * acy;
        let fny = abz * acx - abx * acz;
        let fnz = abx * acy - aby * acx;
        const faceLength = Math.hypot(fnx, fny, fnz) || 1;
        fnx /= faceLength;
        fny /= faceLength;
        fnz /= faceLength;

        for (let corner = 0; corner < 3; corner++) {
            const sourceNodeIndex = surfaceIndices[triOffset + corner]!;
            const renderOffset = (triOffset + corner) * 3;
            const sourceOffset = sourceNodeIndex * 3;

            renderPositions[renderOffset] = positions[sourceOffset]!;
            renderPositions[renderOffset + 1] = positions[sourceOffset + 1]!;
            renderPositions[renderOffset + 2] = positions[sourceOffset + 2]!;

            smoothNormals[renderOffset] = surfaceNormals[sourceOffset]!;
            smoothNormals[renderOffset + 1] = surfaceNormals[sourceOffset + 1]!;
            smoothNormals[renderOffset + 2] = surfaceNormals[sourceOffset + 2]!;

            flatNormals[renderOffset] = fnx;
            flatNormals[renderOffset + 1] = fny;
            flatNormals[renderOffset + 2] = fnz;

            sourceNodeIndices[triOffset + corner] = sourceNodeIndex;
            sourceElementIndices[triOffset + corner] = elementIndex;
        }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(renderPositions, 3));
    geometry.setAttribute('normal', new THREE.BufferAttribute(smoothNormals, 3));
    geometry.setAttribute('smoothNormal', new THREE.BufferAttribute(smoothNormals.slice(), 3));
    geometry.setAttribute('flatNormal', new THREE.BufferAttribute(flatNormals, 3));
    geometry.setAttribute('sourceNodeIndex', new THREE.BufferAttribute(sourceNodeIndices, 1));
    geometry.setAttribute('sourceElementIndex', new THREE.BufferAttribute(sourceElementIndices, 1));
    geometry.computeBoundingBox();
    geometry.computeBoundingSphere();

    return {
        geometry,
        positions: renderPositions,
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
    renderVertexCount: number;
    surfaceIndices: Int32Array;
    surfaceNormals: Float32Array;
    surfaceElementMap?: Int32Array | null;
}): SurfaceGeometryStats {
    const {
        positionsLength,
        vertexCount,
        renderVertexCount,
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
        renderVertexCount,
        triangleCount: surfaceIndices.length / 3,
        minIndex,
        maxIndex,
        hasNegativeIndices,
        hasOutOfRangeIndices: Number.isFinite(maxIndex) && maxIndex > vertexCount - 1,
    };
}
