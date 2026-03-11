/**
 * FEA Viewer — App Shell
 * =======================
 *
 * Layout: toolbar (top) + sidebar (left) + viewport (center/right).
 * Panels overlay the viewport: info panel, color legend, warning banner.
 *
 * Per 04 §3.1: App.tsx with layout: toolbar + sidebar + viewport + panels.
 */

import React, { useRef } from 'react';
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

const App: React.FC = () => {
    const status = useModelStore((s) => s.status);
    const warnings = useModelStore((s) => s.warnings);
    const activeFieldId = useModelStore((s) => s.activeFieldId);
    const viewportRef = useRef<HTMLDivElement>(null);

    const isReady = status === 'ready';
    const showUpload = status === 'idle' || status === 'uploading' || status === 'parsing' || status === 'error';

    return (
        <div className="app-layout">
            {/* Toolbar */}
            <Toolbar />

            {/* Sidebar */}
            <div className="sidebar">
                {showUpload && (
                    <div className="sidebar__section">
                        <div className="sidebar__section-title">Upload</div>
                        <UploadPanel />
                    </div>
                )}

                {isReady && (
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

            {/* Viewport */}
            <div className="viewport" ref={viewportRef}>
                {showUpload ? (
                    <div className="no-data-message">
                        Upload a VTK/VTU file to begin
                    </div>
                ) : (
                    <Viewport containerRef={viewportRef} />
                )}

                {/* Overlays */}
                {isReady && activeFieldId && <ColorLegend />}
                {isReady && <InfoPanel />}
                {warnings.length > 0 && <WarningBanner />}
            </div>
        </div>
    );
};

export default App;
