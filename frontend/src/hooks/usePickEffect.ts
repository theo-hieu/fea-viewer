/**
 * FEA Viewer — usePickEffect Hook
 * ==================================
 *
 * Orchestrates the GPU picking pipeline:
 *   canvas click → PickingManager.pick() → decode ID → set pickedEntity state
 *
 * Per spec:
 *   - GPU ID-picking via off-screen WebGLRenderTarget, NOT raycasting
 *   - Picking pass rendered on-demand (click only), not every frame
 *   - Element-pick is exact per surface triangle via surfaceElementMap
 *   - Node-pick is nearest-surface-vertex approximation (documented MVP behavior)
 *   - Probed values come from CPU-side Float64, never GPU buffers
 *   - ID 0 = background (no hit)
 */

import { useEffect, useCallback, useRef } from 'react';
import { useModelStore } from '@/store/modelStore';
import { useViewStore } from '@/store/viewStore';
import type { PickingManager } from '@/three/PickingManager';
import type { MeshManager } from '@/three/MeshManager';
import type { SceneManager } from '@/three/SceneManager';
import type { PickedEntity } from '@/components/InfoPanel';

interface PickEffectRefs {
    pickingManager: PickingManager | null;
    meshManager: MeshManager | null;
    sceneManager: SceneManager | null;
}

interface PickEffectResult {
    onCanvasClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    pickedEntity: PickedEntity | null;
}

export function usePickEffect(refs: PickEffectRefs): PickEffectResult {
    const pickMode = useViewStore((s) => s.pickMode);
    const deformMode = useViewStore((s) => s.deformMode);
    const deformScale = useViewStore((s) => s.deformScale);
    const surfaceElementMap = useModelStore((s) => s.surfaceElementMap);
    const nodeCoords_f64 = useModelStore((s) => s.nodeCoords_f64);
    const status = useModelStore((s) => s.status);

    const pickedEntityRef = useRef<PickedEntity | null>(null);
    const pickSceneBuiltRef = useRef<{ mode: string; geomGen: number }>({ mode: '', geomGen: 0 });
    const geomGenRef = useRef(0);

    // Track geometry generation for rebuild detection
    useEffect(() => {
        if (status === 'ready') {
            geomGenRef.current += 1;
        }
    }, [status, surfaceElementMap]);

    // Rebuild picking scene when mode or geometry changes
    useEffect(() => {
        const { pickingManager, meshManager } = refs;
        if (!pickingManager || !meshManager) return;
        if (status !== 'ready') return;

        const geom = meshManager.getBaseGeometry();
        if (!geom || !surfaceElementMap) return;

        const key = { mode: pickMode, geomGen: geomGenRef.current };
        if (
            pickSceneBuiltRef.current.mode === key.mode &&
            pickSceneBuiltRef.current.geomGen === key.geomGen
        ) {
            return; // Already built for this configuration
        }

        const nNodes = nodeCoords_f64 ? nodeCoords_f64.length / 3 : 0;
        pickingManager.buildPickingScene(geom, surfaceElementMap, nNodes, pickMode);
        pickSceneBuiltRef.current = key;
    }, [pickMode, status, surfaceElementMap, nodeCoords_f64, refs]);

    // Sync deformation scale to picking meshes
    useEffect(() => {
        const { pickingManager } = refs;
        if (!pickingManager) return;

        const effectiveScale = deformMode === 'undeformed' ? 0.0 : deformScale;
        pickingManager.setDeformScale(effectiveScale);
    }, [deformMode, deformScale, refs]);

    // Sync picking render target size with renderer
    useEffect(() => {
        const { pickingManager, sceneManager } = refs;
        if (!pickingManager || !sceneManager) return;

        const handleResize = () => {
            const canvas = sceneManager.renderer.domElement;
            pickingManager.resize(canvas.width, canvas.height);
        };

        handleResize(); // Initial sync
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [refs]);

    // Click handler — triggers on-demand picking render
    const onCanvasClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const { pickingManager, sceneManager } = refs;
            if (!pickingManager || !sceneManager) return;
            if (status !== 'ready') return;

            const canvas = sceneManager.renderer.domElement;
            const rect = canvas.getBoundingClientRect();
            const dpr = sceneManager.renderer.getPixelRatio();

            // Convert client coords to pixel coords (accounting for DPR)
            const x = Math.round((e.clientX - rect.left) * dpr);
            const y = Math.round((e.clientY - rect.top) * dpr);

            const result = pickingManager.pick(
                sceneManager.renderer,
                sceneManager.camera,
                x, y,
                pickMode,
            );

            if (result) {
                pickedEntityRef.current = { mode: result.mode, id: result.id };
            } else {
                // No hit — clear selection per documented UI policy
                pickedEntityRef.current = null;
            }

            // Force re-render by dispatching a state update
            // (We use a store update to trigger React re-render)
            useModelStore.getState().setFieldLoadError(
                useModelStore.getState().fieldLoadError,
            );
        },
        [pickMode, status, refs],
    );

    return {
        onCanvasClick,
        pickedEntity: pickedEntityRef.current,
    };
}
