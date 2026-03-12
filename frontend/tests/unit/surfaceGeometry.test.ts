import * as THREE from 'three';
import { describe, expect, it } from 'vitest';
import { MeshManager } from '@/three/MeshManager';
import { prepareSurfaceGeometry, SurfaceGeometryError } from '@/three/surfaceGeometry';

describe('surface geometry preparation', () => {
    it('converts decoded Int32Array indices to Uint32Array for rendering', () => {
        const prepared = prepareSurfaceGeometry({
            nodeCoords_f64: new Float64Array([
                0, 0, 0,
                1, 0, 0,
                0, 1, 0,
            ]),
            surfaceIndices: new Int32Array([0, 1, 2]),
            surfaceNormals: new Float32Array([
                0, 0, 1,
                0, 0, 1,
                0, 0, 1,
            ]),
            surfaceElementMap: new Int32Array([7]),
        });

        expect(prepared.renderIndices).toBeInstanceOf(Uint32Array);
        expect(Array.from(prepared.renderIndices)).toEqual([0, 1, 2]);
        expect(prepared.geometry.getIndex()?.array).toBeInstanceOf(Uint32Array);
    });

    it('throws explicit errors for negative indices', () => {
        expect(() =>
            prepareSurfaceGeometry({
                nodeCoords_f64: new Float64Array([
                    0, 0, 0,
                    1, 0, 0,
                    0, 1, 0,
                ]),
                surfaceIndices: new Int32Array([0, -1, 2]),
                surfaceNormals: new Float32Array([
                    0, 0, 1,
                    0, 0, 1,
                    0, 0, 1,
                ]),
                surfaceElementMap: new Int32Array([0]),
            }),
        ).toThrow(SurfaceGeometryError);

        expect(() =>
            prepareSurfaceGeometry({
                nodeCoords_f64: new Float64Array([
                    0, 0, 0,
                    1, 0, 0,
                    0, 1, 0,
                ]),
                surfaceIndices: new Int32Array([0, -1, 2]),
                surfaceNormals: new Float32Array([
                    0, 0, 1,
                    0, 0, 1,
                    0, 0, 1,
                ]),
                surfaceElementMap: new Int32Array([0]),
            }),
        ).toThrow('negative values');
    });

    it('throws explicit errors for out-of-range indices', () => {
        expect(() =>
            prepareSurfaceGeometry({
                nodeCoords_f64: new Float64Array([
                    0, 0, 0,
                    1, 0, 0,
                    0, 1, 0,
                ]),
                surfaceIndices: new Int32Array([0, 1, 9]),
                surfaceNormals: new Float32Array([
                    0, 0, 1,
                    0, 0, 1,
                    0, 0, 1,
                ]),
                surfaceElementMap: new Int32Array([0]),
            }),
        ).toThrow('exceed vertex count');
    });

    it('builds a renderable BufferGeometry for valid data', () => {
        const prepared = prepareSurfaceGeometry({
            nodeCoords_f64: new Float64Array([
                0, 0, 0,
                1, 0, 0,
                0, 1, 0,
                1, 1, 0,
            ]),
            surfaceIndices: new Int32Array([0, 1, 2, 1, 3, 2]),
            surfaceNormals: new Float32Array([
                0, 0, 1,
                0, 0, 1,
                0, 0, 1,
                0, 0, 1,
            ]),
            surfaceElementMap: new Int32Array([10, 11]),
        });

        expect(prepared.stats.positionsLength).toBe(12);
        expect(prepared.stats.indicesLength).toBe(6);
        expect(prepared.stats.normalsLength).toBe(12);
        expect(prepared.stats.surfaceElementMapLength).toBe(2);
        expect(prepared.geometry.getAttribute('position').count).toBe(4);
        expect(prepared.geometry.getIndex()?.count).toBe(6);
        expect(prepared.geometry.boundingSphere).not.toBeNull();
    });
});

describe('MeshManager debug rendering path', () => {
    it('creates a simple debug-safe mesh that uses unsigned indices', () => {
        const manager = new MeshManager({ debugMaterialMode: true });
        const scene = new THREE.Scene();

        manager.buildMesh(
            new Float64Array([
                0, 0, 0,
                1, 0, 0,
                0, 1, 0,
            ]),
            new Int32Array([0, 1, 2]),
            new Float32Array([
                0, 0, 1,
                0, 0, 1,
                0, 0, 1,
            ]),
            new Int32Array([0]),
            new Map(),
            scene,
        );

        const groups = manager.getMeshGroups();
        expect(groups).toHaveLength(1);
        expect(groups[0]!.mesh.material).toBeInstanceOf(THREE.MeshNormalMaterial);
        expect(groups[0]!.mesh.frustumCulled).toBe(false);
        expect(manager.getBaseGeometry()?.getIndex()?.array).toBeInstanceOf(Uint32Array);
    });
});
