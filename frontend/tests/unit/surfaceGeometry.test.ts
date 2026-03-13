import * as THREE from 'three';
import { describe, expect, it } from 'vitest';
import { MeshManager } from '@/three/MeshManager';
import { prepareSurfaceGeometry, SurfaceGeometryError } from '@/three/surfaceGeometry';

describe('surface geometry preparation', () => {
    it('expands indexed surface data into triangle-isolated render vertices', () => {
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

        expect(prepared.geometry.getIndex()).toBeNull();
        expect(prepared.geometry.getAttribute('position').count).toBe(3);
        expect(
            Array.from(
                (prepared.geometry.getAttribute('sourceNodeIndex').array as Uint32Array),
            ),
        ).toEqual([0, 1, 2]);
        expect(
            Array.from(
                (prepared.geometry.getAttribute('sourceElementIndex').array as Int32Array),
            ),
        ).toEqual([7, 7, 7]);
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
        expect(prepared.stats.renderVertexCount).toBe(6);
        expect(prepared.geometry.getAttribute('position').count).toBe(6);
        expect(prepared.geometry.getIndex()).toBeNull();
        expect(prepared.geometry.boundingSphere).not.toBeNull();
    });
});

describe('MeshManager debug rendering path', () => {
    it('creates a simple debug-safe mesh with de-indexed surface geometry', () => {
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
        expect(manager.getBaseGeometry()?.getIndex()).toBeNull();
    });
});
