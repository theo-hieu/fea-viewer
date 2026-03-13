/**
 * FEA Viewer — useContourEffect Hook
 * =====================================
 *
 * Orchestrates the full scalar contour pipeline:
 *   field selection → fetch → decode → GPU upload → material swap → legend sync
 *
 * Per spec:
 *   - CPU-side Float64 preserved for probing
 *   - Float32 downcast only at GPU boundary
 *   - NaN/Inf excluded from autorange
 *   - Integration-point fields blocked in MVP
 *   - Stale data never shown on failure
 */

import { useEffect, useRef } from 'react';
import { useModelStore } from '@/store/modelStore';
import { useViewStore } from '@/store/viewStore';
import { fetchBinary } from '@/api/client';
import { decodeTypedArray, finiteMinMax, countNaN } from '@/utils/arrayUtils';
import type { ContourManager } from '@/three/ContourManager';
import type { MeshManager } from '@/three/MeshManager';
import type * as THREE from 'three';

interface ContourEffectRefs {
    contourManager: ContourManager | null;
    meshManager: MeshManager | null;
    scene: THREE.Scene | null;
}

/**
 * React hook that reacts to field/timestep selection changes and drives
 * the contour rendering pipeline end-to-end.
 */
export function useContourEffect(refs: ContourEffectRefs): void {
    const activeFieldId = useModelStore((s) => s.activeFieldId);
    const activeTimestep = useModelStore((s) => s.activeTimestep);
    const modelId = useModelStore((s) => s.modelId);
    const status = useModelStore((s) => s.status);
    const fields = useModelStore((s) => s.fields);

    const colorMapConfig = useViewStore((s) => s.colorMapConfig);

    // Track the previous field to detect changes requiring material swap
    const prevFieldRef = useRef<string | null>(null);
    // Abort controller for cancelling stale fetches
    const abortRef = useRef<AbortController | null>(null);

    // --- Main effect: field/timestep change → fetch → apply contour ---
    useEffect(() => {
        const { contourManager, meshManager } = refs;
        if (!contourManager || !meshManager) return;
        if (status !== 'ready' || !modelId) return;

        // If no field selected, clear contour and restore Phong material
        if (!activeFieldId) {
            clearContour(meshManager, contourManager);
            prevFieldRef.current = null;
            return;
        }

        // Look up field descriptor
        const field = fields.find((f) => f.id === activeFieldId);
        if (!field) {
            clearContour(meshManager, contourManager);
            return;
        }

        // Block integration-point fields in MVP
        if (field.location === 'integration_point') {
            useModelStore.getState().setFieldValues(null);
            useModelStore.getState().setFieldLoadError(
                'Integration-point fields are not supported in MVP. Extrapolation would misrepresent provenance.',
            );
            clearContour(meshManager, contourManager);
            return;
        }

        // Abort any in-flight fetch
        abortRef.current?.abort();
        const controller = new AbortController();
        abortRef.current = controller;

        const loadField = async () => {
            try {
                useModelStore.getState().setFieldLoadError(null);

                // 1. Fetch field data as Float64
                const res = await fetchBinary(
                    `/models/${modelId}/fields/${activeFieldId}/data?step=${activeTimestep}`,
                );

                // Check if aborted
                if (controller.signal.aborted) return;

                const values_f64 = decodeTypedArray(res.buffer, res.meta.dtype) as Float64Array;

                // 2. Store CPU-side Float64 for probing (NEVER mutate)
                useModelStore.getState().setFieldValues(values_f64);

                // 3. Count NaN values for warnings
                const nanCount = countNaN(values_f64);
                useModelStore.getState().setFieldNanCount(nanCount);

                // 4. Compute autorange excluding NaN/Inf
                const [min, max] = finiteMinMax(values_f64);

                if (Number.isNaN(min) || Number.isNaN(max)) {
                    // All values are NaN — show warning
                    useModelStore.getState().setFieldLoadError(
                        'All field values are NaN. Cannot compute contour range.',
                    );
                    useViewStore.getState().setColorMapRange(0, 1);
                } else {
                    // 5. Sync range to viewStore for legend
                    useViewStore.getState().setColorMapRange(min, max);
                }

                // 6. Get current geometry and apply scalar field
                const baseGeom = meshManager.getBaseGeometry();
                if (!baseGeom) return;

                const currentConfig = useViewStore.getState().colorMapConfig;

                // Create contour material if this is a new field activation
                // or if we had previously cleared the contour
                if (prevFieldRef.current !== activeFieldId) {
                    contourManager.createContourMaterial(currentConfig);
                }

                // 7. Apply scalar values to geometry
                contourManager.applyScalarField(
                    baseGeom,
                    values_f64,
                    field.location as 'nodal' | 'elemental',
                );

                // 8. Update range on material
                if (!Number.isNaN(min) && !Number.isNaN(max)) {
                    contourManager.updateRange(min, max);
                }

                // 9. Swap mesh material to contour ShaderMaterial
                const contourMat = contourManager.getMaterial();
                if (contourMat) {
                    contourManager.swapMeshMaterials(meshManager.getMeshGroups(), contourMat);
                }

                prevFieldRef.current = activeFieldId;
            } catch (err) {
                if (controller.signal.aborted) return;

                // Failed to load → explicit error, never show stale data
                useModelStore.getState().setFieldValues(null);
                useModelStore.getState().setFieldNanCount(0);

                const message = err instanceof Error ? err.message : 'Failed to load field data';
                if (message.includes('404') || message.includes('No data')) {
                    useModelStore.getState().setFieldLoadError('No data at this step');
                } else {
                    useModelStore.getState().setFieldLoadError(message);
                }

                clearContour(meshManager, contourManager);
            }
        };

        void loadField();

        return () => {
            controller.abort();
        };
    }, [activeFieldId, activeTimestep, modelId, status, fields, refs, colorMapConfig]);

    // --- LUT switch reaction ---
    useEffect(() => {
        const { contourManager } = refs;
        if (!contourManager || !activeFieldId) return;
        contourManager.setColorMap(colorMapConfig.lut_name);
    }, [colorMapConfig.lut_name, refs, activeFieldId]);
}

/** Clear contour state and restore Phong materials. */
function clearContour(meshManager: MeshManager, contourManager: ContourManager): void {
    useModelStore.getState().setFieldValues(null);
    useModelStore.getState().setFieldLoadError(null);
    useModelStore.getState().setFieldNanCount(0);
    contourManager.restoreMeshMaterials(meshManager.getMeshGroups());
}
