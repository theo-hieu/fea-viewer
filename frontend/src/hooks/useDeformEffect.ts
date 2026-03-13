/**
 * FEA Viewer — useDeformEffect Hook
 * ====================================
 *
 * Orchestrates the deformation pipeline:
 *   field select → validate → fetch displacement → GPU upload → scale uniform → overlay mode
 *
 * Per spec:
 *   - X_display[i] = NodeTable.coordinates[i] + u_deform_scale * displacement[i]
 *   - Base coordinates NEVER mutated
 *   - Displacement uploaded as separate BufferAttribute
 *   - u_deform_scale updated on slider change — no geometry re-upload
 *   - Only nodal vector3 fields accepted for deformation
 *   - Overlay mode renders undeformed wireframe over deformed surface
 */

import { useEffect, useRef } from 'react';
import { useModelStore } from '@/store/modelStore';
import { useViewStore } from '@/store/viewStore';
import { fetchBinary } from '@/api/client';
import { decodeTypedArray } from '@/utils/arrayUtils';
import type { DeformationManager } from '@/three/DeformationManager';
import type { MeshManager } from '@/three/MeshManager';
import type { WireframeManager } from '@/three/WireframeManager';
import type { ContourManager } from '@/three/ContourManager';
import type * as THREE from 'three';

/** Float32 max safe value — clamp to avoid GPU overflow */
const FLOAT32_MAX_SAFE = 3.4e38;

interface DeformEffectRefs {
    deformManager: DeformationManager | null;
    meshManager: MeshManager | null;
    wireframeManager: WireframeManager | null;
    contourManager: ContourManager | null;
    scene: THREE.Scene | null;
}

export function useDeformEffect(refs: DeformEffectRefs): void {
    const deformFieldId = useViewStore((s) => s.deformFieldId);
    const deformMode = useViewStore((s) => s.deformMode);
    const deformScale = useViewStore((s) => s.deformScale);
    const activeTimestep = useModelStore((s) => s.activeTimestep);
    const modelId = useModelStore((s) => s.modelId);
    const status = useModelStore((s) => s.status);
    const fields = useModelStore((s) => s.fields);
    const nodeCoords_f64 = useModelStore((s) => s.nodeCoords_f64);

    const abortRef = useRef<AbortController | null>(null);
    const prevFieldRef = useRef<string | null>(null);
    const prevTimestepRef = useRef<number>(-1);

    // --- Effect 1: Fetch displacement data on field/timestep change ---
    useEffect(() => {
        const { deformManager, meshManager } = refs;
        if (!deformManager || !meshManager) return;
        if (status !== 'ready' || !modelId) return;

        const geom = meshManager.getBaseGeometry();
        if (!geom) return;

        // If no deform field selected, clear displacement
        if (!deformFieldId) {
            clearDeformation(deformManager, geom);
            prevFieldRef.current = null;
            prevTimestepRef.current = -1;
            return;
        }

        // Validate field: must be nodal + vector3 (n_components === 3)
        const field = fields.find((f) => f.id === deformFieldId);
        if (!field) {
            clearDeformation(deformManager, geom);
            useModelStore.getState().setDeformLoadError('Deformation field not found');
            return;
        }

        if (field.location !== 'nodal') {
            clearDeformation(deformManager, geom);
            useModelStore.getState().setDeformLoadError(
                `Deformation requires a nodal field. "${field.name}" is ${field.location}.`,
            );
            return;
        }

        if (field.n_components !== 3) {
            clearDeformation(deformManager, geom);
            useModelStore.getState().setDeformLoadError(
                `Deformation requires a vector3 field. "${field.name}" has ${field.n_components} component(s).`,
            );
            return;
        }

        // Skip refetch if same field + same timestep (only scale changed)
        if (prevFieldRef.current === deformFieldId && prevTimestepRef.current === activeTimestep) {
            return;
        }

        // Abort any in-flight fetch
        abortRef.current?.abort();
        const controller = new AbortController();
        abortRef.current = controller;

        const loadDisplacement = async () => {
            try {
                useModelStore.getState().setDeformLoadError(null);

                const res = await fetchBinary(
                    `/models/${modelId}/fields/${deformFieldId}/data?step=${activeTimestep}`,
                );
                if (controller.signal.aborted) return;

                const disp_f64 = decodeTypedArray(res.buffer, res.meta.dtype) as Float64Array;

                // Validate array length = nNodes × 3
                const nNodes = nodeCoords_f64 ? nodeCoords_f64.length / 3 : 0;
                const expectedLen = nNodes * 3;
                if (disp_f64.length !== expectedLen) {
                    clearDeformation(deformManager, geom);
                    useModelStore.getState().setDeformLoadError(
                        `Displacement array length mismatch: got ${disp_f64.length}, expected ${expectedLen} (${nNodes} nodes × 3).`,
                    );
                    return;
                }

                // Store CPU-side Float64 for probing (NEVER mutate)
                useModelStore.getState().setDisplacementValues(disp_f64);

                // Upload to GPU via DeformationManager (downcasts to Float32 internally)
                deformManager.setDisplacement(geom, disp_f64);

                prevFieldRef.current = deformFieldId;
                prevTimestepRef.current = activeTimestep;
            } catch (err) {
                if (controller.signal.aborted) return;

                useModelStore.getState().setDisplacementValues(null);
                clearDeformation(deformManager, geom);

                const message = err instanceof Error ? err.message : 'Failed to load displacement data';
                if (message.includes('404') || message.includes('No data')) {
                    useModelStore.getState().setDeformLoadError('No data at this step');
                } else {
                    useModelStore.getState().setDeformLoadError(message);
                }
            }
        };

        void loadDisplacement();

        return () => {
            controller.abort();
        };
    }, [deformFieldId, activeTimestep, modelId, status, fields, nodeCoords_f64, refs]);

    // --- Effect 2: Update deformation uniforms on all visible material paths ---
    useEffect(() => {
        const { deformManager, meshManager, contourManager, wireframeManager, scene } = refs;
        if (!deformManager || !meshManager) return;

        const geom = meshManager.getBaseGeometry();
        if (!geom) return;

        let effectiveScale = 0.0;
        if (deformFieldId) {
            switch (deformMode) {
                case 'undeformed':
                    effectiveScale = 0.0;
                    break;
                case 'deformed':
                case 'overlay':
                    effectiveScale = deformScale;
                    break;
            }
        }

        // Float32 overflow check: clamp if scale * max_displacement > FLOAT32_MAX_SAFE
        const disp_f64 = useModelStore.getState().displacement_f64;
        if (disp_f64 && effectiveScale > 0) {
            let maxAbsDisp = 0;
            for (let i = 0; i < disp_f64.length; i++) {
                const v = Math.abs(disp_f64[i]!);
                if (v > maxAbsDisp && Number.isFinite(v)) maxAbsDisp = v;
            }
            if (maxAbsDisp * effectiveScale > FLOAT32_MAX_SAFE) {
                const clampedScale = FLOAT32_MAX_SAFE / maxAbsDisp;
                useModelStore.getState().setDeformLoadError(
                    `Scale clamped to ${clampedScale.toFixed(1)} to avoid Float32 overflow.`,
                );
                effectiveScale = clampedScale;
            }
        }

        meshManager.setDeformScale(effectiveScale);
        const contourMat = contourManager?.getMaterial();
        if (contourManager && contourMat) {
            contourManager.setDeformScale(effectiveScale);
        }

        // Overlay mode: show undeformed wireframe on top
        if (wireframeManager && scene) {
            if (deformFieldId && deformMode === 'overlay' && effectiveScale > 0) {
                // Create overlay wireframe from base geometry (undeformed)
                wireframeManager.createOverlayWireframe(geom, scene);
            } else {
                wireframeManager.clearOverlay(scene);
            }
        }
    }, [deformMode, deformScale, deformFieldId, refs]);
}

/** Clear displacement to zero and reset error state. */
function clearDeformation(
    deformManager: DeformationManager,
    geometry: THREE.BufferGeometry,
): void {
    deformManager.clearDisplacement(geometry);
    useModelStore.getState().setDisplacementValues(null);
    useModelStore.getState().setDeformLoadError(null);
}
