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

function isDebugGeometryModeEnabled(): boolean {
    if (typeof window === 'undefined') return false;
    const params = new URLSearchParams(window.location.search);
    return params.get('debugGeometry') === '1';
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
    const bootstrapStatus = useModelStore((s) => s.bootstrapStatus);
    const setMetadata = useModelStore((s) => s.setMetadata);
    const setWarnings = useModelStore((s) => s.setWarnings);
    const setTree = useModelStore((s) => s.setTree);
    const setFields = useModelStore((s) => s.setFields);
    const setSets = useModelStore((s) => s.setSets);
    const setNodeCoords = useModelStore((s) => s.setNodeCoords);
    const setSurfaceData = useModelStore((s) => s.setSurfaceData);
    const setActiveFieldId = useModelStore((s) => s.setActiveFieldId);
    const setBootstrapLoading = useModelStore((s) => s.setBootstrapLoading);
    const setBootstrapLoaded = useModelStore((s) => s.setBootstrapLoaded);
    const setBootstrapIdle = useModelStore((s) => s.setBootstrapIdle);
    const setBootstrapError = useModelStore((s) => s.setBootstrapError);
    const wireframeVisible = useViewStore((s) => s.wireframeVisible);
    const bootstrappedModelIdRef = useRef<string | null>(null);

    useEffect(() => {
        bootstrappedModelIdRef.current = null;
        setBootstrapIdle();
    }, [modelId, setBootstrapIdle]);

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

        let sm: SceneManager | null = null;
        try {
            sm = new SceneManager(container);
            sceneManagerRef.current = sm;
            meshManagerRef.current = new MeshManager({
                debugMaterialMode: isDebugGeometryModeEnabled(),
            });
            wireframeManagerRef.current = new WireframeManager();
            contourManagerRef.current = new ContourManager();
            deformManagerRef.current = new DeformationManager();
            pickingManagerRef.current = new PickingManager(
                container.clientWidth, container.clientHeight,
            );
            sm.start();
            console.info('[Viewport] Scene mounted');
        } catch (error) {
            console.error('[Viewport] Renderer initialization failure', error);
            setWebglAvailable(false);
            useModelStore.getState().setBootstrapError(
                'renderer initialization',
                `Bootstrap failed during renderer initialization: ${error instanceof Error ? error.message : 'Unknown renderer error'}`,
            );
            return;
        }

        const handleResize = () => {
            if (sm.renderer) {
                const c = sm.renderer.domElement;
                pickingManagerRef.current?.resize(c.width, c.height);
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            sm?.dispose();
            pickingManagerRef.current?.dispose();
            sceneManagerRef.current = null;
        };
    }, [webglAvailable]);

    useEffect(() => {
        if (status !== 'ready' || !modelId) return;
        if (bootstrapStatus === 'loading') return;
        if (bootstrapStatus === 'loaded' && bootstrappedModelIdRef.current === modelId) return;

        const loadModel = async () => {
            const sm = sceneManagerRef.current;
            const mm = meshManagerRef.current;
            const wm = wireframeManagerRef.current;
            const failStep = (step: string, error: unknown) => {
                const reason = error instanceof Error ? error.message : 'Failed to load model';
                console.error('[Viewport] Bootstrap failure', { modelId, step, error });
                setBootstrapError(step, `Bootstrap failed during ${step}: ${reason}`);
            };

            if (!sm || !mm || !wm) {
                failStep('renderer initialization', new Error('Scene managers are not initialized'));
                return;
            }

            const updateStep = (step: string) => {
                console.info('[Viewport] Bootstrap step', { modelId, step });
                setBootstrapLoading(step);
            };

            try {
                console.info(`[Viewport] Status became ready for ${modelId}`);
                console.info(`[Viewport] Bootstrap start for ${modelId}`);
                updateStep('loading metadata');
                const metadataPromise = fetchModelMetadata(modelId);
                const treePromise = fetchModelTree(modelId);
                const fieldsPromise = fetchModelFields(modelId);
                const setsPromise = fetchModelSets(modelId);

                updateStep('fetching geometry');

                const [nodeRes, surfaceRes] = await Promise.all([
                    fetchBinary(`/models/${modelId}/nodes`),
                    fetchSurfacesBinary(`/models/${modelId}/surfaces`),
                ]);

                console.info('[Viewport] Nodes headers', {
                    modelId,
                    dtype: nodeRes.meta.dtype,
                    shape: nodeRes.meta.shape,
                    byteOrder: nodeRes.meta.byteOrder,
                });
                console.info('[Viewport] Surfaces headers', {
                    modelId,
                    dtype: surfaceRes.headers.dtype,
                    byteOrder: surfaceRes.headers.byteOrder,
                    shape: surfaceRes.headers.shape,
                    offsets: surfaceRes.headers.offsets,
                });

                const surfaceIndices = surfaceRes.surfaceIndices;
                const surfaceNormals = surfaceRes.surfaceNormals;
                const surfaceElementMap = surfaceRes.surfaceElementMap;
                const nodeCoords_f64 = decodeTypedArray(nodeRes.buffer, nodeRes.meta.dtype) as Float64Array;

                console.info('[Viewport] Parsed nodes length', {
                    modelId,
                    length: nodeCoords_f64.length,
                });
                console.info('[Viewport] Parsed surface indices length', {
                    modelId,
                    length: surfaceIndices.length,
                });
                console.info('[Viewport] Parsed surface normals length', {
                    modelId,
                    length: surfaceNormals.length,
                });
                console.info('[Viewport] Parsed surface element map length', {
                    modelId,
                    length: surfaceElementMap.length,
                });

                setNodeCoords(nodeCoords_f64);
                setSurfaceData(surfaceIndices, surfaceNormals, surfaceElementMap);

                updateStep('creating geometry');
                console.info('[Viewport] Geometry creation started', { modelId });
                mm.buildMesh(
                    nodeCoords_f64,
                    surfaceIndices,
                    surfaceNormals,
                    surfaceElementMap,
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

                updateStep('fetching panels');
                const [metadataResult, treeResult, fieldsResult, setsResult] = await Promise.allSettled([
                    metadataPromise,
                    treePromise,
                    fieldsPromise,
                    setsPromise,
                ]);

                if (metadataResult.status === 'fulfilled') {
                    console.info('[Viewport] Metadata loaded', { modelId });
                    setMetadata(metadataResult.value.metadata);
                    setWarnings(metadataResult.value.warnings ?? []);

                    if (metadataResult.value.metadata.unit_system.declared_system === 'unspecified') {
                        useModelStore.getState().addWarning({
                            category: 'Missing Units',
                            message: 'Units not declared. Values shown without unit context.',
                            severity: 'warning',
                            dismissible: false,
                        });
                    }
                } else {
                    console.error('[Viewport] Non-blocking metadata fetch failure', {
                        modelId,
                        error: metadataResult.reason,
                    });
                }

                if (treeResult.status === 'fulfilled') {
                    console.info('[Viewport] Tree loaded', { modelId });
                    setTree(treeResult.value);
                } else {
                    console.error('[Viewport] Non-blocking tree fetch failure', {
                        modelId,
                        error: treeResult.reason,
                    });
                    setTree({
                        id: 'assembly-root',
                        name: 'Assembly',
                        type: 'assembly',
                        children: [],
                    });
                }

                if (fieldsResult.status === 'fulfilled') {
                    console.info('[Viewport] Fields loaded', { modelId, count: fieldsResult.value.length });
                    setFields(fieldsResult.value);
                    if (fieldsResult.value.length > 0 && !useModelStore.getState().activeFieldId) {
                        setActiveFieldId(fieldsResult.value[0]!.id);
                    }
                } else {
                    console.error('[Viewport] Non-blocking fields fetch failure', {
                        modelId,
                        error: fieldsResult.reason,
                    });
                    setFields([]);
                }

                if (setsResult.status === 'fulfilled') {
                    setSets(setsResult.value);
                } else {
                    console.error('[Viewport] Non-blocking sets fetch failure', {
                        modelId,
                        error: setsResult.reason,
                    });
                    setSets([]);
                }

                bootstrappedModelIdRef.current = modelId;
                setBootstrapLoaded();
            } catch (error) {
                failStep(useModelStore.getState().bootstrapStep ?? 'bootstrap', error);
            }
        };

        void loadModel();
    }, [
        bootstrapStatus,
        modelId,
        setActiveFieldId,
        setBootstrapError,
        setBootstrapLoaded,
        setBootstrapLoading,
        setFields,
        setBootstrapIdle,
        setMetadata,
        setNodeCoords,
        setSets,
        setSurfaceData,
        setTree,
        setWarnings,
        status,
    ]);

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
