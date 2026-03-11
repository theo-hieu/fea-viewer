/**
 * FEA Viewer — DeformationControls Component
 * =============================================
 *
 * Per 04 §3.1: toggle (undeformed/deformed/overlay), scale factor input (0–10000),
 * deformation field selector. Disabled if no valid displacement field exists.
 * Shows deformLoadError for invalid fields or missing timestep data.
 */

import React from 'react';
import { useModelStore } from '@/store/modelStore';
import { useViewStore } from '@/store/viewStore';

export const DeformationControls: React.FC = () => {
    const fields = useModelStore((s) => s.fields);
    const deformLoadError = useModelStore((s) => s.deformLoadError);
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

    const handleScaleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseFloat(e.target.value);
        if (!Number.isNaN(val)) {
            setDeformScale(Math.min(Math.max(val, 0), 10000));
        }
    };

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

            {!hasDisplacement && (
                <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>
                    No nodal vector3 fields available for deformation.
                </div>
            )}

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

            {/* Scale factor — slider + numeric input */}
            <div className="slider-control">
                <label style={{ fontSize: 11, color: 'var(--text-secondary)' }}>
                    Scale: {deformScale.toFixed(1)}×
                </label>
                <input
                    type="range"
                    min={0}
                    max={100}
                    step={0.1}
                    value={Math.min(deformScale, 100)}
                    onChange={(e) => setDeformScale(parseFloat(e.target.value))}
                    disabled={!hasDisplacement || !deformFieldId}
                />
                <input
                    type="number"
                    min={0}
                    max={10000}
                    step={1}
                    value={deformScale}
                    onChange={handleScaleInput}
                    disabled={!hasDisplacement || !deformFieldId}
                    style={{
                        width: 60,
                        fontSize: 11,
                        padding: '2px 4px',
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--border-primary)',
                        borderRadius: 4,
                    }}
                />
            </div>

            {/* Deformation error/warning */}
            {deformLoadError && (
                <div style={{
                    fontSize: 11,
                    color: 'var(--accent-warning)',
                    padding: '4px 6px',
                    background: 'rgba(255,180,0,0.1)',
                    borderRadius: 4,
                }}>
                    ⚠ {deformLoadError}
                </div>
            )}
        </div>
    );
};
