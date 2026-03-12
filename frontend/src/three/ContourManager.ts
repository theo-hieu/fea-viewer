/**
 * FEA Viewer — ContourManager
 * ==============================
 *
 * Per 02b §6.2, §6.4, 04 §3.2:
 * - LUT-based scalar mapping with viridis default
 * - NaN → grey (nan_color), excluded from range calculation
 * - Above-range → magenta, below-range → blue
 * - Smooth interpolation for nodal data, flat shading for elemental
 *
 * Uses custom ShaderMaterial with the contour vertex/fragment shaders.
 */

import * as THREE from 'three';
import { createLutTexture, type LutName } from './colorMaps';
import type { ColorMapConfig } from '@/utils/feaTypes';
import { finiteMinMax } from '@/utils/arrayUtils';
import type { PartMeshGroup } from './MeshManager';
import contourVert from './shaders/contour.vert.glsl?raw';
import contourFrag from './shaders/contour.frag.glsl?raw';

export class ContourManager {
    private lutTexture: THREE.DataTexture;
    private material: THREE.ShaderMaterial | null = null;

    constructor() {
        this.lutTexture = createLutTexture('viridis');
    }

    /**
     * Create a ShaderMaterial for contour rendering.
     */
    createContourMaterial(config: ColorMapConfig): THREE.ShaderMaterial {
        this.lutTexture = createLutTexture(config.lut_name);

        this.material = new THREE.ShaderMaterial({
            vertexShader: contourVert,
            fragmentShader: contourFrag,
            uniforms: {
                u_lut: { value: this.lutTexture },
                u_min: { value: config.min_value },
                u_max: { value: config.max_value },
                u_deform_scale: { value: 0.0 },
                u_nan_color: { value: new THREE.Vector4(...config.nan_color) },
                u_above_color: { value: new THREE.Vector4(...config.above_range_color) },
                u_below_color: { value: new THREE.Vector4(...config.below_range_color) },
            },
            side: THREE.DoubleSide,
            transparent: true,
        });

        return this.material;
    }

    /**
     * Update the scalar values on the geometry for contour rendering.
     *
     * @param geometry - BufferGeometry with 'scalarValue' attribute
     * @param values - Float64 field values (nodal: per-node, elemental: per-surface-tri)
     * @param location - 'nodal' or 'elemental'
     * @param surfaceElementMap - mapping surface tri → source element (for elemental)
     * @param surfaceIndices - surface triangle indices (for elemental flat shading)
     */
    applyScalarField(
        geometry: THREE.BufferGeometry,
        values: Float64Array,
        location: 'nodal' | 'elemental',
        surfaceElementMap?: Int32Array,
        surfaceIndices?: Int32Array,
    ): { min: number; max: number } {
        const [min, max] = finiteMinMax(values);

        const scalarAttr = geometry.getAttribute('scalarValue') as THREE.BufferAttribute;
        const scalarArray = scalarAttr.array as Float32Array;

        if (location === 'nodal') {
            // Per-vertex scalar values
            for (let i = 0; i < scalarArray.length; i++) {
                scalarArray[i] = i < values.length ? values[i]! : NaN;
            }
        } else if (location === 'elemental' && surfaceElementMap && surfaceIndices) {
            // Elemental: each surface triangle's 3 vertices get the same scalar
            // (the parent element's value) for flat shading
            const nTris = surfaceIndices.length / 3;
            // Reset all to NaN first
            scalarArray.fill(NaN);
            for (let tri = 0; tri < nTris; tri++) {
                const elemIdx = surfaceElementMap[tri]!;
                const val = elemIdx < values.length ? values[elemIdx]! : NaN;
                // Set all 3 vertices of this triangle
                for (let v = 0; v < 3; v++) {
                    const nodeIdx = surfaceIndices[tri * 3 + v]!;
                    scalarArray[nodeIdx] = val;
                }
            }
        }

        scalarAttr.needsUpdate = true;
        return { min, max };
    }

    /**
     * Update the color map range.
     */
    updateRange(min: number, max: number): void {
        if (this.material) {
            this.material.uniforms['u_min']!.value = min;
            this.material.uniforms['u_max']!.value = max;
        }
    }

    /**
     * Switch the color map.
     */
    setColorMap(name: LutName): void {
        this.lutTexture.dispose();
        this.lutTexture = createLutTexture(name);
        if (this.material) {
            this.material.uniforms['u_lut']!.value = this.lutTexture;
        }
    }

    /**
     * Get the current material.
     */
    getMaterial(): THREE.ShaderMaterial | null {
        return this.material;
    }

    /**
     * Swap mesh materials to contour ShaderMaterial.
     * Stores original materials for restoration.
     */
    private originalMaterials = new Map<string, THREE.Material | THREE.Material[]>();

    swapMeshMaterials(
        meshGroups: PartMeshGroup[],
        contourMaterial: THREE.ShaderMaterial,
    ): void {
        for (const group of meshGroups) {
            if (!this.originalMaterials.has(group.partId)) {
                this.originalMaterials.set(group.partId, group.mesh.material);
            }
            group.mesh.material = contourMaterial;
        }
    }

    /**
     * Restore original Phong materials on all meshes.
     */
    restoreMeshMaterials(meshGroups: PartMeshGroup[]): void {
        for (const group of meshGroups) {
            const orig = this.originalMaterials.get(group.partId);
            if (orig) {
                group.mesh.material = orig;
            }
        }
        this.originalMaterials.clear();
    }

    /**
     * Update deformation scale on the contour material.
     */
    setDeformScale(scale: number): void {
        if (this.material) {
            this.material.uniforms['u_deform_scale']!.value = scale;
        }
    }

    dispose(): void {
        this.lutTexture.dispose();
        this.material?.dispose();
        this.originalMaterials.clear();
    }
}
