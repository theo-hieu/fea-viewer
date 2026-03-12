/**
 * FEA Viewer - App Shell
 * =======================
 *
 * Layout: toolbar (top) + sidebar (left) + viewport (center/right).
 * Panels overlay the viewport: info panel, color legend, warning banner.
 *
 * Per 04 3.1: App.tsx with layout: toolbar + sidebar + viewport + panels.
 */

import React, { useEffect, useRef } from 'react';
import { useModelStore } from '@/store/modelStore';
import { UploadPanel } from '@/components/UploadPanel';
import { ModelTree } from '@/components/ModelTree';
import { FieldSelector } from '@/components/FieldSelector';
import { TimestepSlider } from '@/components/TimestepSlider';
import { DeformationControls } from '@/components/DeformationControls';
import { Toolbar } from '@/components/Toolbar';
import { Viewport } from '@/components/Viewport';
import { ColorLegend } from '@/components/ColorLegend';
import { InfoPanel } from '@/components/InfoPanel';
import { MetadataPanel } from '@/components/MetadataPanel';
import { WarningBanner } from '@/components/WarningBanner';
import { monitorModelStatus } from '@/api/models';

const App: React.FC = () => {
    const requestedModelId = new URLSearchParams(window.location.search).get('modelId');
    const modelId = useModelStore((s) => s.modelId);
    const status = useModelStore((s) => s.status);
    const bootstrapStatus = useModelStore((s) => s.bootstrapStatus);
    const warnings = useModelStore((s) => s.warnings);
    const tree = useModelStore((s) => s.tree);
    const metadata = useModelStore((s) => s.metadata);
    const fields = useModelStore((s) => s.fields);
    const activeFieldId = useModelStore((s) => s.activeFieldId);
    const viewportRef = useRef<HTMLDivElement>(null);
    const setModelId = useModelStore((s) => s.setModelId);
    const setStatus = useModelStore((s) => s.setStatus);
    const setErrorMessage = useModelStore((s) => s.setErrorMessage);
    const setParseProgress = useModelStore((s) => s.setParseProgress);
    const resetModel = useModelStore((s) => s.resetModel);
    const setBootstrapIdle = useModelStore((s) => s.setBootstrapIdle);

    useEffect(() => {
        if (!requestedModelId || modelId === requestedModelId) return;

        console.info(`[App] Detected modelId from URL: ${requestedModelId}`);
        resetModel();
        setModelId(requestedModelId);
        setParseProgress(0);
        setErrorMessage(null);
        setBootstrapIdle();
    }, [modelId, requestedModelId, resetModel, setBootstrapIdle, setErrorMessage, setModelId, setParseProgress]);

    useEffect(() => {
        if (!modelId) return;
        if (status === 'ready' || status === 'error') return;

        console.info('[App] Starting status lifecycle monitor', { modelId, status });

        return monitorModelStatus(modelId, {
            onStatus: (response) => {
                console.info('[App] Status response payload', { modelId, response });
                if (response.status === 'ready') {
                    console.info(`[App] Transition to ready for ${modelId}`);
                    setStatus('ready');
                    setParseProgress(100);
                    return;
                }

                if (response.status === 'error') {
                    setStatus('error');
                    setErrorMessage(response.error_message ?? 'Model parsing failed');
                    return;
                }

                setStatus(response.status);
            },
            onProgress: (message) => {
                setParseProgress(message.progress * 100);
            },
            onError: (error) => {
                console.error('[App] Bootstrap error', error);
                setStatus('error');
                setErrorMessage(`Status polling failed: ${error.message || 'Failed to bootstrap model'}`);
            },
            onTimeout: () => {
                const timeoutMessage = 'Model parsing timed out after 60 seconds';
                console.error('[App] Bootstrap timeout', { modelId });
                setStatus('error');
                setErrorMessage(timeoutMessage);
            },
        });
    }, [modelId, setErrorMessage, setParseProgress, setStatus, status]);

    const isReady = status === 'ready';
    const hasModelData = metadata !== null || tree !== null || fields.length > 0;
    const showDataPanels = isReady || (status === 'error' && hasModelData);
    const isCheckingStatus = !!modelId && status === 'idle';
    const isParsingFromBackend = status === 'parsing' || status === 'uploading';
    const isBootstrappingReadyModel = status === 'ready' && bootstrapStatus !== 'loaded';
    const showUploadPanel = !modelId && status !== 'ready';

    return (
        <div className="app-layout">
            <Toolbar />

            <div className="sidebar">
                {(showUploadPanel || status === 'parsing' || status === 'error') && (
                    <div className="sidebar__section">
                        <div className="sidebar__section-title">Upload / Status</div>
                        <UploadPanel />
                    </div>
                )}

                {showDataPanels && (
                    <>
                        <div className="sidebar__section">
                            <div className="sidebar__section-title">Model Tree</div>
                            <ModelTree />
                        </div>

                        <div className="sidebar__section">
                            <div className="sidebar__section-title">Field</div>
                            <FieldSelector />
                        </div>

                        <div className="sidebar__section">
                            <div className="sidebar__section-title">Timestep</div>
                            <TimestepSlider />
                        </div>

                        <div className="sidebar__section">
                            <div className="sidebar__section-title">Deformation</div>
                            <DeformationControls />
                        </div>

                        <div className="sidebar__section">
                            <div className="sidebar__section-title">Metadata</div>
                            <MetadataPanel />
                        </div>
                    </>
                )}
            </div>

            <div className="viewport" ref={viewportRef}>
                {status === 'idle' && !modelId ? (
                    <div className="no-data-message">
                        Upload a VTK/VTU file to begin
                    </div>
                ) : status === 'uploading' ? (
                    <div className="no-data-message">Uploading...</div>
                ) : isCheckingStatus ? (
                    <div className="no-data-message">Checking model status...</div>
                ) : isParsingFromBackend ? (
                    <div className="no-data-message">
                        {modelId ? `Parsing ${modelId}...` : 'Parsing...'}
                    </div>
                ) : status === 'error' ? (
                    <div className="no-data-message" style={{ color: 'var(--accent-danger)' }}>
                        Error loading model. Check sidebar for details.
                    </div>
                ) : (
                    <>
                        <Viewport containerRef={viewportRef} />
                        {isBootstrappingReadyModel && (
                            <div className="no-data-message">Loading model...</div>
                        )}
                    </>
                )}

                {showDataPanels && activeFieldId && <ColorLegend />}
                {showDataPanels && <InfoPanel />}
                {warnings.length > 0 && <WarningBanner />}
            </div>
        </div>
    );
};

export default App;
