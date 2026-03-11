/**
 * FEA Viewer — InfoPanel Component
 * ===================================
 *
 * Per 04 §3.1: exact probe readout for nodes/elements.
 * Per spec: probed values come from Float64 arrays (CPU-side), NOT GPU buffers.
 * Precision: ε ≤ 1e-12.
 */

import React from 'react';
import { useModelStore } from '@/store/modelStore';

export interface PickedEntity {
    mode: 'node' | 'element';
    id: number;
}

interface InfoPanelProps {
    pickedEntity?: PickedEntity | null;
}

export const InfoPanel: React.FC<InfoPanelProps> = ({ pickedEntity }) => {
    const nodeCoords = useModelStore((s) => s.nodeCoords_f64);
    const fieldValues = useModelStore((s) => s.fieldValues_f64);
    const fields = useModelStore((s) => s.fields);
    const activeFieldId = useModelStore((s) => s.activeFieldId);

    if (!pickedEntity) return null;

    const activeField = fields.find((f) => f.id === activeFieldId);

    return (
        <div className="panel-overlay panel-overlay--info">
            <div style={{ fontWeight: 600, marginBottom: 8, fontSize: 12 }}>
                {pickedEntity.mode === 'node' ? '⊙ Node' : '◻ Element'} #{pickedEntity.id}
            </div>

            {pickedEntity.mode === 'node' && nodeCoords && (
                <>
                    <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginBottom: 4 }}>
                        Coordinates (Float64)
                    </div>
                    <div className="info-panel__row">
                        <span className="info-panel__key">X</span>
                        <span className="info-panel__value">
                            {nodeCoords[pickedEntity.id * 3]?.toPrecision(15) ?? 'N/A'}
                        </span>
                    </div>
                    <div className="info-panel__row">
                        <span className="info-panel__key">Y</span>
                        <span className="info-panel__value">
                            {nodeCoords[pickedEntity.id * 3 + 1]?.toPrecision(15) ?? 'N/A'}
                        </span>
                    </div>
                    <div className="info-panel__row">
                        <span className="info-panel__key">Z</span>
                        <span className="info-panel__value">
                            {nodeCoords[pickedEntity.id * 3 + 2]?.toPrecision(15) ?? 'N/A'}
                        </span>
                    </div>

                    {activeField && fieldValues && activeField.location === 'nodal' && (
                        <>
                            <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 8, marginBottom: 4 }}>
                                {activeField.name} (Float64)
                            </div>
                            {Array.from({ length: activeField.n_components }, (_, c) => {
                                const val = fieldValues[pickedEntity.id * activeField.n_components + c];
                                return (
                                    <div className="info-panel__row" key={c}>
                                        <span className="info-panel__key">
                                            {activeField.n_components === 1 ? 'Value' : `C${c}`}
                                        </span>
                                        <span className="info-panel__value">
                                            {val !== undefined ? val.toPrecision(15) : 'N/A'}
                                        </span>
                                    </div>
                                );
                            })}
                        </>
                    )}
                </>
            )}

            {pickedEntity.mode === 'element' && activeField && fieldValues && (
                <>
                    <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 4, marginBottom: 4 }}>
                        {activeField.name} (Float64)
                    </div>
                    {Array.from({ length: activeField.n_components }, (_, c) => {
                        const val = fieldValues[pickedEntity.id * activeField.n_components + c];
                        return (
                            <div className="info-panel__row" key={c}>
                                <span className="info-panel__key">
                                    {activeField.n_components === 1 ? 'Value' : `C${c}`}
                                </span>
                                <span className="info-panel__value">
                                    {val !== undefined ? val.toPrecision(15) : 'N/A'}
                                </span>
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
};
