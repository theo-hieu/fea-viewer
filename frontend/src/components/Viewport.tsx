/**
 * FEA Viewer — Viewport Component
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
import { fetchJSON, fetchBinary, fetchBinaryMultipart } from '@/api/client';
import { decodeTypedArray } from '@/utils/arrayUtils';
import type {
    ModelMetadata,
    ResultFieldDescriptor,
    NamedSetDescriptor,
    TreeNode,
    ImportWarning,
} from '@/utils/feaTypes';

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

    // Wire the contour pipeline
    useContourEffect({
        contourManager: contourManagerRef.current,
        meshManager: meshManagerRef.current,
        scene: sceneManagerRef.current?.scene ?? null,
    });

    // Wire the deformation pipeline
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
    const wireframeVisible = useViewStore((s) => s.wireframeVisible);

    // Check WebGL2 availability
    useEffect(() => {
        if (!SceneManager.isWebGL2Available()) {
            setWebglAvailable(false);
        }
    }, []);

    // Check memory budget
    useEffect(() => {
        const perf = performance as Performance & { memory?: { usedJSHeapSize: number } };
        if (perf.memory) {
            const usedMB = perf.memory.usedJSHeapSize / (1024 * 1024);
            if (usedMB > 2048) {
                console.error('[Memory] Heap exceeds 2GB — refusing further loads');
            } else if (usedMB > 1536) {
                console.warn('[Memory] Heap approaching 1.5GB — performance may degrade');
            }
        }
    }, [status]);

    // Initialize Three.js scene
    useEffect(() => {
        const container = canvasContainerRef.current;
        if (!container || !webglAvailable) return;

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

        return () => {
            sm.dispose();
            pickingManagerRef.current?.dispose();
            sceneManagerRef.current = null;
        };
    }, [webglAvailable]);

    // Load model data when status becomes 'ready'
    useEffect(() => {
        if (status !== 'ready' || !modelId) return;

        const loadModel = async () => {
            const sm = sceneManagerRef.current;
            const mm = meshManagerRef.current;
            const wm = wireframeManagerRef.current;
            if (!sm || !mm || !wm) return;

            try {
                // Parallel fetch: surfaces, nodes, metadata, tree, fields, sets
                const [surfaceRes, nodeRes, metadataRes, treeRes, fieldsRes, setsRes] =
                    await Promise.all([
                        fetchBinaryMultipart(`/models/${modelId}/surfaces`),
                        fetchBinary(`/models/${modelId}/nodes`),
                        fetchJSON<{ metadata: ModelMetadata; warnings: ImportWarning[] }>(
                            `/models/${modelId}/metadata`,
                        ),
                        fetchJSON<TreeNode>(`/models/${modelId}/tree`),
                        fetchJSON<ResultFieldDescriptor[]>(`/models/${modelId}/fields`),
                        fetchJSON<NamedSetDescriptor[]>(`/models/${modelId}/sets`),
                    ]);

                // Decode binary data
                const surfaceIndices = decodeTypedArray(surfaceRes['indices']!, 'int32') as Int32Array;
                const surfaceNormals = decodeTypedArray(surfaceRes['normals']!, 'float32') as Float32Array;
                const surfaceElementMap = decodeTypedArray(surfaceRes['map']!, 'int32') as Int32Array;

                const nodeCoords_f64 = decodeTypedArray(nodeRes.buffer, nodeRes.meta.dtype) as Float64Array;

                // Store CPU-side Float64 for probing (NEVER modify)
                setNodeCoords(nodeCoords_f64);
                setSurfaceData(
                    surfaceIndices,
                    surfaceNormals,
                    surfaceElementMap,
                );

                // Store metadata into Zustand
                setMetadata(metadataRes.metadata);
                setWarnings(metadataRes.warnings ?? []);
                setTree(treeRes);
                setFields(fieldsRes);
                setSets(setsRes);

                mm.buildMesh(
                    nodeCoords_f64,
                    surfaceIndices,
                    surfaceNormals,
                    new Map(), // Single-part for now
                    sm.scene,
                );

                // Build wireframe
                const geom = mm.getBaseGeometry();
                if (geom) {
                    wm.createWireframe(geom, sm.scene);
                }

                // Fit camera
                sm.zoomToFit();

                // Add unit warnings if applicable
                if (metadataRes.metadata.unit_system.declared_system === 'unspecified') {
                    useModelStore.getState().addWarning({
                        category: 'Missing Units',
                        message: 'Units not declared. Values shown without unit context.',
                        severity: 'warning',
                        dismissible: false,
                    });
                }
            } catch (err) {
                console.error('[Viewport] Failed to load model:', err);
                useModelStore.getState().setStatus('error');
                useModelStore.getState().setErrorMessage(
                    err instanceof Error ? err.message : 'Failed to load model',
                );
            }
        };

        void loadModel();
    }, [status, modelId, setMetadata, setWarnings, setTree, setFields,
        setSets, setNodeCoords, setSurfaceData]);

    // Sync wireframe visibility
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

    // Canvas click handler for GPU picking
    const pickMode = useViewStore((s) => s.pickMode);
    const deformMode = useViewStore((s) => s.deformMode);
    const deformScale = useViewStore((s) => s.deformScale);
    const surfaceElementMap = useModelStore((s) => s.surfaceElementMap);
    const nodeCoords_f64 = useModelStore((s) => s.nodeCoords_f64);
    const pickSceneBuiltRef = useRef<{ mode: string; gen: number }>({ mode: '', gen: 0 });
    const geomGenRef = useRef(0);

    // Track geometry generation for picking scene rebuild
    useEffect(() => {
        if (status === 'ready' && surfaceElementMap) {
            geomGenRef.current += 1;
        }
    }, [status, surfaceElementMap]);

    // Rebuild picking scene when mode or geometry changes
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

    // Sync deformation scale to picking meshes
    useEffect(() => {
        const pm = pickingManagerRef.current;
        if (!pm) return;
        pm.setDeformScale(deformMode === 'undeformed' ? 0.0 : deformScale);
    }, [deformMode, deformScale]);

    // Sync picking render target size
    useEffect(() => {
        const pm = pickingManagerRef.current;
        const sm = sceneManagerRef.current;
        if (!pm || !sm) return;
        const handleResize = () => {
            const c = sm.renderer.domElement;
            pm.resize(c.width, c.height);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [webglAvailable]);

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
