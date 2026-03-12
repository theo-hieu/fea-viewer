/**
 * FEA Viewer — MeshManager
 * ==========================
 *
 * Per 04 §3.2: Build BufferGeometry from binary surfaces,
 * per-part mesh groups, indexed draw.
 *
 * Float32 positions for GPU, Int32 indices for indexed drawing.
 * Per-part grouping enables show/hide/isolate without GPU re-upload.
 */

import * as THREE from 'three';
import { logSurfaceGeometryStats, prepareSurfaceGeometry } from '@/three/surfaceGeometry';

export interface PartMeshGroup {
    partId: string;
    mesh: THREE.Mesh;
}

export class MeshManager {
    private meshGroups: PartMeshGroup[] = [];
    private baseGeometry: THREE.BufferGeometry | null = null;
    private readonly debugMaterialMode: boolean;

    constructor(options?: { debugMaterialMode?: boolean }) {
        this.debugMaterialMode = options?.debugMaterialMode ?? false;
    }

    /**
     * Build the complete surface mesh from binary data.
     *
     * @param nodeCoords_f64 - CPU-side Float64 node coordinates (3 * nNodes)
     * @param surfaceIndices - Int32 surface triangle indices
     * @param surfaceNormals - Float32 vertex normals for the surface
     * @param partTriangleRanges - Map of partId → [startTriIdx, endTriIdx]
     * @param scene - Three.js scene to add meshes to
     */
    buildMesh(
        nodeCoords_f64: Float64Array,
        surfaceIndices: Int32Array,
        surfaceNormals: Float32Array,
        surfaceElementMap: Int32Array | null,
        partTriangleRanges: Map<string, [number, number]>,
        scene: THREE.Scene,
    ): void {
        this.clear(scene);
        const prepared = prepareSurfaceGeometry({
            nodeCoords_f64,
            surfaceIndices,
            surfaceNormals,
            surfaceElementMap,
        });
        logSurfaceGeometryStats(prepared.stats, 'MeshManager');
        this.baseGeometry = prepared.geometry;

        // Add displacement attribute (zeroed initially)
        const displacement = new Float32Array(prepared.positions.length);
        this.baseGeometry.setAttribute('displacement', new THREE.BufferAttribute(displacement, 3));

        // Add scalar value attribute (zeroed initially)
        const scalarValue = new Float32Array(nodeCoords_f64.length / 3);
        this.baseGeometry.setAttribute('scalarValue', new THREE.BufferAttribute(scalarValue, 1));

        if (partTriangleRanges.size === 0) {
            // Single part — one mesh for all
            const material = this.createSurfaceMaterial();
            const mesh = new THREE.Mesh(this.baseGeometry, material);
            mesh.name = 'default';
            mesh.frustumCulled = !this.debugMaterialMode;
            scene.add(mesh);
            this.meshGroups.push({ partId: 'default', mesh });
        } else {
            // Per-part meshes using draw range groups
            for (const [partId, [startTri, endTri]] of partTriangleRanges) {
                const startIdx = startTri * 3;
                const count = (endTri - startTri) * 3;

                // Create a sub-geometry sharing the same attributes but with restricted draw range
                const partGeom = this.baseGeometry.clone();
                partGeom.setDrawRange(startIdx, count);

                const material = this.createSurfaceMaterial();
                const mesh = new THREE.Mesh(partGeom, material);
                mesh.name = partId;
                mesh.frustumCulled = !this.debugMaterialMode;
                scene.add(mesh);
                this.meshGroups.push({ partId, mesh });
            }
        }
    }

    /**
     * Get all mesh groups.
     */
    getMeshGroups(): PartMeshGroup[] {
        return this.meshGroups;
    }

    /**
     * Get the shared base geometry.
     */
    getBaseGeometry(): THREE.BufferGeometry | null {
        return this.baseGeometry;
    }

    /**
     * Set visibility for a specific part.
     */
    setPartVisible(partId: string, visible: boolean): void {
        const group = this.meshGroups.find((g) => g.partId === partId);
        if (group) group.mesh.visible = visible;
    }

    /**
     * Isolate a part (hide all others).
     */
    isolatePart(partId: string): void {
        for (const group of this.meshGroups) {
            group.mesh.visible = group.partId === partId;
        }
    }

    /**
     * Show all parts.
     */
    showAll(): void {
        for (const group of this.meshGroups) {
            group.mesh.visible = true;
        }
    }

    /**
     * Remove all meshes from the scene.
     */
    clear(scene: THREE.Scene): void {
        for (const group of this.meshGroups) {
            scene.remove(group.mesh);
            group.mesh.geometry.dispose();
            if (Array.isArray(group.mesh.material)) {
                group.mesh.material.forEach((m) => m.dispose());
            } else {
                group.mesh.material.dispose();
            }
        }
        this.meshGroups = [];
        this.baseGeometry = null;
    }

    private createSurfaceMaterial(): THREE.Material {
        if (this.debugMaterialMode) {
            return new THREE.MeshNormalMaterial({
                side: THREE.DoubleSide,
            });
        }

        return new THREE.MeshPhongMaterial({
            color: 0x58a6ff,
            side: THREE.DoubleSide,
            flatShading: false,
            vertexColors: false,
        });
    }
}
