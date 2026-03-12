/**
 * FEA Viewer - Viewport Component
 * ==================================
 *
 * Main 3D viewport wrapping raw Three.js SceneManager.
 * Handles initialization after model status = 'ready',
 * data fetching, geometry construction, and camera fitting.
 *
 * Per spec: raw Three.js, NOT React Three Fiber.
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useModelStore } from '@/store/modelStore';
import { useViewStore } from '@/store/viewStore';
import { SceneManager } from '@/three/SceneManager';
import { MeshManager } from '@/three/MeshManager';
import { WireframeManager } from '@/three/WireframeManager';
import { ContourManager } from '@/three/ContourManager';
import { DeformationManager } from '@/three/DeformationManager';
import { useContourEffect } from '@/hooks/useContourEffect';
import { useDeformEffect } from '@/hooks/useDeformEffect';
import { PickingManager } from '@/three/PickingManager';
import { InfoPanel, type PickedEntity } from '@/components/InfoPanel';
import { fetchBinary, fetchSurfacesBinary } from '@/api/client';
import { fetchModelFields, fetchModelMetadata, fetchModelSets, fetchModelTree } from '@/api/models';
import { decodeTypedArray } from '@/utils/arrayUtils';

interface ViewportProps {
    containerRef?: React.RefObject<HTMLDivElement | null>;
}

export const Viewport: React.FC<ViewportProps> = ({ containerRef: _containerRef }) => {
    const canvasContainerRef = useRef<HTMLDivElement>(null);
    const sceneManagerRef = useRef<SceneManager | null>(null);
    const meshManagerRef = useRef<MeshManager | null>(null);
    const wireframeManagerRef = useRef<WireframeManager | null>(null);
    const contourManagerRef = useRef<ContourManager | null>(null);
    const deformManagerRef = useRef<DeformationManager | null>(null);
    const pickingManagerRef = useRef<PickingManager | null>(null);
    const [webglAvailable, setWebglAvailable] = useState(true);
    const [pickedEntity, setPickedEntity] = useState<PickedEntity | null>(null);

    useContourEffect({
        contourManager: contourManagerRef.current,
        meshManager: meshManagerRef.current,
        scene: sceneManagerRef.current?.scene ?? null,
    });

    useDeformEffect({
        deformManager: deformManagerRef.current,
        meshManager: meshManagerRef.current,
        wireframeManager: wireframeManagerRef.current,
        contourManager: contourManagerRef.current,
        scene: sceneManagerRef.current?.scene ?? null,
    });

    const modelId = useModelStore((s) => s.modelId);
    const status = useModelStore((s) => s.status);
    const setMetadata = useModelStore((s) => s.setMetadata);
    const setWarnings = useModelStore((s) => s.setWarnings);
    const setTree = useModelStore((s) => s.setTree);
    const setFields = useModelStore((s) => s.setFields);
    const setSets = useModelStore((s) => s.setSets);
    const setNodeCoords = useModelStore((s) => s.setNodeCoords);
    const setSurfaceData = useModelStore((s) => s.setSurfaceData);
    const setActiveFieldId = useModelStore((s) => s.setActiveFieldId);
    const wireframeVisible = useViewStore((s) => s.wireframeVisible);

    useEffect(() => {
        if (!SceneManager.isWebGL2Available()) {
            setWebglAvailable(false);
        }
    }, []);

    useEffect(() => {
        const perf = performance as Performance & { memory?: { usedJSHeapSize: number } };
        if (perf.memory) {
            const usedMB = perf.memory.usedJSHeapSize / (1024 * 1024);
            if (usedMB > 2048) {
                console.error('[Memory] Heap exceeds 2GB - refusing further loads');
            } else if (usedMB > 1536) {
                console.warn('[Memory] Heap approaching 1.5GB - performance may degrade');
            }
        }
    }, [status]);

    useEffect(() => {
        const container = canvasContainerRef.current;
        if (!container || !webglAvailable || !SceneManager.isWebGL2Available()) {
            setWebglAvailable(false);
            return;
        }

        const sm = new SceneManager(container);
        sceneManagerRef.current = sm;
        meshManagerRef.current = new MeshManager();
        wireframeManagerRef.current = new WireframeManager();
        contourManagerRef.current = new ContourManager();
        deformManagerRef.current = new DeformationManager();
        pickingManagerRef.current = new PickingManager(
            container.clientWidth, container.clientHeight,
        );
        sm.start();

        const handleResize = () => {
            if (sm.renderer) {
                const c = sm.renderer.domElement;
                pickingManagerRef.current?.resize(c.width, c.height);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            sm.dispose();
            pickingManagerRef.current?.dispose();
            sceneManagerRef.current = null;
        };
    }, [webglAvailable]);

    useEffect(() => {
        if (status !== 'ready' || !modelId) return;

        const loadModel = async () => {
            const sm = sceneManagerRef.current;
            const mm = meshManagerRef.current;
            const wm = wireframeManagerRef.current;
            if (!sm || !mm || !wm) return;

            try {
                console.info(`[Viewport] Status became ready for ${modelId}`);
                console.info(`[Viewport] Renderer init start for ${modelId}`);
                console.info(`[Viewport] Nodes fetch start for ${modelId}`);
                console.info(`[Viewport] Surfaces fetch start for ${modelId}`);

                const [nodeRes, surfaceRes, metadataRes, treeRes, fieldsRes, setsRes] =
                    await Promise.all([
                        fetchBinary(`/models/${modelId}/nodes`),
                        fetchSurfacesBinary(`/models/${modelId}/surfaces`),
                        fetchModelMetadata(modelId),
                        fetchModelTree(modelId),
                        fetchModelFields(modelId),
                        fetchModelSets(modelId),
                    ]);

                console.info('[Viewport] Surfaces headers', {
                    modelId,
                    dtype: surfaceRes.headers.dtype,
                    byteOrder: surfaceRes.headers.byteOrder,
                    shape: surfaceRes.headers.shape,
                    offsets: surfaceRes.headers.offsets,
                });
                console.info('[Viewport] Parsed surface sections', {
                    modelId,
                    indicesLength: surfaceRes.surfaceIndices.length,
                    normalsLength: surfaceRes.surfaceNormals.length,
                    mapLength: surfaceRes.surfaceElementMap.length,
                });
                console.info('[Viewport] Nodes fetch result', { modelId, byteLength: nodeRes.buffer.byteLength });

                const surfaceIndices = surfaceRes.surfaceIndices;
                const surfaceNormals = surfaceRes.surfaceNormals;
                const surfaceElementMap = surfaceRes.surfaceElementMap;
                const nodeCoords_f64 = decodeTypedArray(nodeRes.buffer, nodeRes.meta.dtype) as Float64Array;

                setNodeCoords(nodeCoords_f64);
                setSurfaceData(surfaceIndices, surfaceNormals, surfaceElementMap);
                setMetadata(metadataRes.metadata);
                setWarnings(metadataRes.warnings ?? []);
                setTree(treeRes);
                setFields(fieldsRes);
                setSets(setsRes);

                if (fieldsRes.length > 0 && !useModelStore.getState().activeFieldId) {
                    setActiveFieldId(fieldsRes[0]!.id);
                }

                console.info('[Viewport] Geometry creation started', { modelId });
                mm.buildMesh(
                    nodeCoords_f64,
                    surfaceIndices,
                    surfaceNormals,
                    new Map(),
                    sm.scene,
                );

                const geom = mm.getBaseGeometry();
                if (geom) {
                    wm.createWireframe(geom, sm.scene);
                }

                sm.zoomToFit();
                console.info('[Viewport] Geometry creation succeeded', { modelId });
                console.info('[Viewport] Renderer init result', {
                    modelId,
                    nodeCount: nodeCoords_f64.length / 3,
                    triangleCount: surfaceIndices.length / 3,
                });

                if (metadataRes.metadata.unit_system.declared_system === 'unspecified') {
                    useModelStore.getState().addWarning({
                        category: 'Missing Units',
                        message: 'Units not declared. Values shown without unit context.',
                        severity: 'warning',
                        dismissible: false,
                    });
                }
            } catch (err) {
                const reason = err instanceof Error ? err.message : 'Failed to load model';
                console.error('[Viewport] Failed to load model:', err);
                useModelStore.getState().setStatus('error');
                useModelStore.getState().setErrorMessage(`Surface/bootstrap failed: ${reason}`);
            }
        };

        void loadModel();
    }, [modelId, setActiveFieldId, setFields, setMetadata, setNodeCoords, setSets, setSurfaceData, setTree, setWarnings, status]);

    useEffect(() => {
        wireframeManagerRef.current?.setVisible(wireframeVisible);
    }, [wireframeVisible]);

    if (!webglAvailable) {
        return (
            <div className="webgl-fallback">
                <div className="webgl-fallback__title">WebGL2 Not Available</div>
                <div className="webgl-fallback__text">
                    Your browser does not support WebGL2. The 3D viewer requires WebGL2 for rendering.
                    You can still view model metadata and text-based summaries.
                </div>
            </div>
        );
    }

    const pickMode = useViewStore((s) => s.pickMode);
    const deformMode = useViewStore((s) => s.deformMode);
    const deformScale = useViewStore((s) => s.deformScale);
    const surfaceElementMap = useModelStore((s) => s.surfaceElementMap);
    const nodeCoords_f64 = useModelStore((s) => s.nodeCoords_f64);
    const pickSceneBuiltRef = useRef<{ mode: string; gen: number }>({ mode: '', gen: 0 });
    const geomGenRef = useRef(0);

    useEffect(() => {
        if (status === 'ready' && surfaceElementMap) {
            geomGenRef.current += 1;
        }
    }, [status, surfaceElementMap]);

    useEffect(() => {
        const pm = pickingManagerRef.current;
        const mm = meshManagerRef.current;
        if (!pm || !mm || status !== 'ready' || !surfaceElementMap) return;

        const geom = mm.getBaseGeometry();
        if (!geom) return;

        const key = { mode: pickMode, gen: geomGenRef.current };
        if (pickSceneBuiltRef.current.mode === key.mode &&
            pickSceneBuiltRef.current.gen === key.gen) return;

        const nNodes = nodeCoords_f64 ? nodeCoords_f64.length / 3 : 0;
        pm.buildPickingScene(geom, surfaceElementMap, nNodes, pickMode);
        pickSceneBuiltRef.current = key;
    }, [pickMode, status, surfaceElementMap, nodeCoords_f64]);

    useEffect(() => {
        const pm = pickingManagerRef.current;
        if (!pm) return;
        pm.setDeformScale(deformMode === 'undeformed' ? 0.0 : deformScale);
    }, [deformMode, deformScale]);

    const onCanvasClick = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const pm = pickingManagerRef.current;
            const sm = sceneManagerRef.current;
            if (!pm || !sm || status !== 'ready') return;

            const canvas = sm.renderer.domElement;
            const rect = canvas.getBoundingClientRect();
            const dpr = sm.renderer.getPixelRatio();
            const x = Math.round((e.clientX - rect.left) * dpr);
            const y = Math.round((e.clientY - rect.top) * dpr);

            const result = pm.pick(sm.renderer, sm.camera, x, y, pickMode);
            setPickedEntity(result ? { mode: result.mode, id: result.id } : null);
        },
        [pickMode, status],
    );

    return (
        <div
            ref={canvasContainerRef}
            onClick={onCanvasClick}
            style={{ width: '100%', height: '100%', position: 'relative' }}
        >
            <InfoPanel pickedEntity={pickedEntity} />
        </div>
    );
};
