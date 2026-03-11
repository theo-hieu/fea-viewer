/**
 * FEA Viewer — Toolbar Component
 * =================================
 *
 * Per 04 §3.1: wireframe toggle, pick mode, deform toggle, zoom-to-fit.
 */

import React from 'react';
import { useViewStore } from '@/store/viewStore';
import { useModelStore } from '@/store/modelStore';

interface ToolbarProps {
    onZoomToFit?: () => void;
}

export const Toolbar: React.FC<ToolbarProps> = ({ onZoomToFit }) => {
    const status = useModelStore((s) => s.status);
    const wireframeVisible = useViewStore((s) => s.wireframeVisible);
    const toggleWireframe = useViewStore((s) => s.toggleWireframe);
    const pickMode = useViewStore((s) => s.pickMode);
    const setPickMode = useViewStore((s) => s.setPickMode);
    const deformMode = useViewStore((s) => s.deformMode);
    const setDeformMode = useViewStore((s) => s.setDeformMode);

    const isReady = status === 'ready';

    return (
        <div className="toolbar">
            <span className="toolbar__title">FEA Viewer</span>

            {isReady && (
                <>
                    {/* Wireframe */}
                    <button
                        className={`toolbar__btn ${wireframeVisible ? 'toolbar__btn--active' : ''}`}
                        onClick={toggleWireframe}
                        title="Toggle wireframe overlay"
                    >
                        ◇ Wire
                    </button>

                    {/* Pick mode */}
                    <button
                        className={`toolbar__btn ${pickMode === 'node' ? 'toolbar__btn--active' : ''}`}
                        onClick={() => setPickMode('node')}
                        title="Node pick mode"
                    >
                        ⊙ Node
                    </button>
                    <button
                        className={`toolbar__btn ${pickMode === 'element' ? 'toolbar__btn--active' : ''}`}
                        onClick={() => setPickMode('element')}
                        title="Element pick mode"
                    >
                        ◻ Elem
                    </button>

                    {/* Deform */}
                    <button
                        className={`toolbar__btn ${deformMode === 'deformed' ? 'toolbar__btn--active' : ''}`}
                        onClick={() =>
                            setDeformMode(deformMode === 'deformed' ? 'undeformed' : 'deformed')
                        }
                        title="Toggle deformed view"
                    >
                        ↗ Deform
                    </button>

                    {/* Zoom to fit */}
                    <button
                        className="toolbar__btn"
                        onClick={onZoomToFit}
                        title="Zoom to fit model"
                    >
                        ⊞ Fit
                    </button>
                </>
            )}
        </div>
    );
};
