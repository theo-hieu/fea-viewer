/**
 * FEA Viewer — DeformationManager
 * ==================================
 *
 * Per 02a §2.8, 02b §6.2, 04 §3.2:
 * - Separate displacement BufferAttribute + u_scale uniform
 * - Vertex shader: position = base_position + u_deform_scale * displacement
 * - Base coordinates NEVER mutated
 * - u_deform_scale updated on slider change — no geometry re-upload
 */

import * as THREE from 'three';

export function expandNodalDisplacementToSurfaceVertices(
    displacement_f64: Float64Array,
    sourceNodeIndices: ArrayLike<number>,
): Float32Array {
    const expanded = new Float32Array(sourceNodeIndices.length * 3);
    for (let i = 0; i < sourceNodeIndices.length; i++) {
        const sourceNodeIndex = sourceNodeIndices[i]!;
        const sourceOffset = sourceNodeIndex * 3;
        const targetOffset = i * 3;
        expanded[targetOffset] = displacement_f64[sourceOffset] ?? 0;
        expanded[targetOffset + 1] = displacement_f64[sourceOffset + 1] ?? 0;
        expanded[targetOffset + 2] = displacement_f64[sourceOffset + 2] ?? 0;
    }
    return expanded;
}

export class DeformationManager {
    private currentMaterial: THREE.ShaderMaterial | null = null;

    /**
     * Upload displacement data to the geometry.
     * Displacement stays as a separate attribute; base position is never modified.
     *
     * @param geometry - BufferGeometry with 'displacement' attribute
     * @param displacement_f64 - CPU-side Float64 displacement array (3 * nNodes)
     */
    setDisplacement(
        geometry: THREE.BufferGeometry,
        displacement_f64: Float64Array,
    ): void {
        const sourceNodeIndexAttr = geometry.getAttribute('sourceNodeIndex') as THREE.BufferAttribute | undefined;
        if (!sourceNodeIndexAttr) {
            throw new Error('Surface geometry is missing sourceNodeIndex for deformation mapping');
        }

        const displacement_f32 = expandNodalDisplacementToSurfaceVertices(
            displacement_f64,
            sourceNodeIndexAttr.array as ArrayLike<number>,
        );
        const attr = geometry.getAttribute('displacement') as THREE.BufferAttribute;

        if (attr && attr.array.length === displacement_f32.length) {
            (attr.array as Float32Array).set(displacement_f32);
            attr.needsUpdate = true;
        } else {
            geometry.setAttribute(
                'displacement',
                new THREE.BufferAttribute(displacement_f32, 3),
            );
        }
    }

    /**
     * Clear displacement to zero (restore undeformed view).
     */
    clearDisplacement(geometry: THREE.BufferGeometry): void {
        const attr = geometry.getAttribute('displacement') as THREE.BufferAttribute;
        if (attr) {
            (attr.array as Float32Array).fill(0);
            attr.needsUpdate = true;
        }
    }

    /**
     * Set the deformation scale uniform on the material.
     * Per spec: u_deform_scale = 0.0 means undeformed view.
     */
    setScale(material: THREE.ShaderMaterial, scale: number): void {
        this.currentMaterial = material;
        material.uniforms['u_deform_scale']!.value = scale;
    }

    /**
     * Get the current deformation scale.
     */
    getScale(): number {
        return this.currentMaterial?.uniforms['u_deform_scale']?.value ?? 0;
    }
}
