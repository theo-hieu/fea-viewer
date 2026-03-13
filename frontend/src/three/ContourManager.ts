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

export function mapNodalValuesToSurfaceVertices(
    values: Float64Array,
    sourceNodeIndices: ArrayLike<number>,
    target: Float32Array,
): void {
    for (let i = 0; i < target.length; i++) {
        const sourceNodeIndex = sourceNodeIndices[i]!;
        target[i] = sourceNodeIndex < values.length ? values[sourceNodeIndex]! : NaN;
    }
}

export function mapElementalValuesToSurfaceVertices(
    values: Float64Array,
    sourceElementIndices: ArrayLike<number>,
    target: Float32Array,
): void {
    for (let i = 0; i < target.length; i++) {
        const sourceElementIndex = sourceElementIndices[i]!;
        target[i] = sourceElementIndex >= 0 && sourceElementIndex < values.length
            ? values[sourceElementIndex]!
            : NaN;
    }
}

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
                u_use_flat_shading: { value: false },
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
     * @param values - Float64 field values (nodal: per-node, elemental: per-element)
     * @param location - 'nodal' or 'elemental'
     */
    applyScalarField(
        geometry: THREE.BufferGeometry,
        values: Float64Array,
        location: 'nodal' | 'elemental',
    ): { min: number; max: number } {
        const [min, max] = finiteMinMax(values);

        const scalarAttr = geometry.getAttribute('scalarValue') as THREE.BufferAttribute;
        const scalarArray = scalarAttr.array as Float32Array;

        if (location === 'nodal') {
            const sourceNodeIndexAttr = geometry.getAttribute('sourceNodeIndex') as THREE.BufferAttribute | undefined;
            if (!sourceNodeIndexAttr) {
                throw new Error('Surface geometry is missing sourceNodeIndex for nodal contouring');
            }
            mapNodalValuesToSurfaceVertices(values, sourceNodeIndexAttr.array as ArrayLike<number>, scalarArray);
        } else {
            const sourceElementIndexAttr = geometry.getAttribute('sourceElementIndex') as THREE.BufferAttribute | undefined;
            if (!sourceElementIndexAttr) {
                throw new Error('Surface geometry is missing sourceElementIndex for elemental contouring');
            }
            mapElementalValuesToSurfaceVertices(
                values,
                sourceElementIndexAttr.array as ArrayLike<number>,
                scalarArray,
            );
        }

        if (this.material) {
            this.material.uniforms['u_use_flat_shading']!.value = location === 'elemental';
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
