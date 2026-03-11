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
import { float64ToFloat32 } from '@/utils/arrayUtils';

export interface PartMeshGroup {
    partId: string;
    mesh: THREE.Mesh;
}

export class MeshManager {
    private meshGroups: PartMeshGroup[] = [];
    private baseGeometry: THREE.BufferGeometry | null = null;

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
        partTriangleRanges: Map<string, [number, number]>,
        scene: THREE.Scene,
    ): void {
        this.clear(scene);

        // Downcast coordinates from Float64 → Float32 for GPU
        const positions_f32 = float64ToFloat32(nodeCoords_f64);

        // Build shared geometry
        this.baseGeometry = new THREE.BufferGeometry();
        this.baseGeometry.setAttribute('position', new THREE.BufferAttribute(positions_f32, 3));
        this.baseGeometry.setAttribute('normal', new THREE.BufferAttribute(surfaceNormals, 3));
        this.baseGeometry.setIndex(new THREE.BufferAttribute(surfaceIndices, 1));

        // Add displacement attribute (zeroed initially)
        const displacement = new Float32Array(positions_f32.length);
        this.baseGeometry.setAttribute('displacement', new THREE.BufferAttribute(displacement, 3));

        // Add scalar value attribute (zeroed initially)
        const scalarValue = new Float32Array(nodeCoords_f64.length / 3);
        this.baseGeometry.setAttribute('scalarValue', new THREE.BufferAttribute(scalarValue, 1));

        if (partTriangleRanges.size === 0) {
            // Single part — one mesh for all
            const material = new THREE.MeshPhongMaterial({
                color: 0x58a6ff,
                side: THREE.DoubleSide,
                flatShading: false,
                vertexColors: false,
            });
            const mesh = new THREE.Mesh(this.baseGeometry, material);
            mesh.name = 'default';
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

                const material = new THREE.MeshPhongMaterial({
                    color: 0x58a6ff,
                    side: THREE.DoubleSide,
                    flatShading: false,
                    vertexColors: false,
                });

                const mesh = new THREE.Mesh(partGeom, material);
                mesh.name = partId;
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
}
