/**
 * FEA Viewer — DeformationControls Component
 * =============================================
 *
 * Per 04 §3.1: toggle (undeformed/deformed/overlay), scale factor input,
 * deformation field selector. Disabled if no valid displacement field exists.
 */

import React from 'react';
import { useModelStore } from '@/store/modelStore';
import { useViewStore } from '@/store/viewStore';

export const DeformationControls: React.FC = () => {
    const fields = useModelStore((s) => s.fields);
    const deformMode = useViewStore((s) => s.deformMode);
    const deformScale = useViewStore((s) => s.deformScale);
    const deformFieldId = useViewStore((s) => s.deformFieldId);
    const setDeformMode = useViewStore((s) => s.setDeformMode);
    const setDeformScale = useViewStore((s) => s.setDeformScale);
    const setDeformFieldId = useViewStore((s) => s.setDeformFieldId);

    // Only vector3 nodal fields can be used for deformation
    const displacementFields = fields.filter(
        (f) => f.location === 'nodal' && f.n_components === 3,
    );

    const hasDisplacement = displacementFields.length > 0;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {/* Field selector */}
            <div className="field-selector">
                <select
                    value={deformFieldId ?? ''}
                    onChange={(e) => setDeformFieldId(e.target.value || null)}
                    disabled={!hasDisplacement}
                >
                    <option value="">
                        {hasDisplacement ? '— No deformation —' : '— No displacement field —'}
                    </option>
                    {displacementFields.map((f) => (
                        <option key={f.id} value={f.id}>
                            {f.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Mode selector */}
            <div style={{ display: 'flex', gap: 4 }}>
                {(['undeformed', 'deformed', 'overlay'] as const).map((mode) => (
                    <button
                        key={mode}
                        className={`toolbar__btn ${deformMode === mode ? 'toolbar__btn--active' : ''}`}
                        onClick={() => setDeformMode(mode)}
                        disabled={!hasDisplacement || !deformFieldId}
                        style={{ flex: 1, fontSize: 11, justifyContent: 'center' }}
                    >
                        {mode}
                    </button>
                ))}
            </div>

            {/* Scale factor */}
            <div className="slider-control">
                <label style={{ fontSize: 11, color: 'var(--text-secondary)' }}>
                    Scale: {deformScale.toFixed(1)}×
                </label>
                <input
                    type="range"
                    min={0}
                    max={100}
                    step={0.1}
                    value={deformScale}
                    onChange={(e) => setDeformScale(parseFloat(e.target.value))}
                    disabled={!hasDisplacement || !deformFieldId}
                />
            </div>
        </div>
    );
};
