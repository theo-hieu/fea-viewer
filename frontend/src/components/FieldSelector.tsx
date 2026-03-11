/**
 * FEA Viewer — FieldSelector Component
 * =======================================
 *
 * Per 04 §3.1: grouped by field name → components.
 * Integration-point fields disabled with explicit MVP warning.
 * Unsupported field locations are never silently contoured.
 */

import React from 'react';
import { useModelStore } from '@/store/modelStore';

export const FieldSelector: React.FC = () => {
    const fields = useModelStore((s) => s.fields);
    const activeFieldId = useModelStore((s) => s.activeFieldId);
    const setActiveFieldId = useModelStore((s) => s.setActiveFieldId);
    const fieldLoadError = useModelStore((s) => s.fieldLoadError);

    return (
        <div className="field-selector">
            <select
                value={activeFieldId ?? ''}
                onChange={(e) => setActiveFieldId(e.target.value || null)}
            >
                <option value="">— No field —</option>
                {fields.map((field) => (
                    <option
                        key={field.id}
                        value={field.id}
                        disabled={field.location === 'integration_point'}
                    >
                        {field.name}
                        {field.n_components > 1 ? ` (${field.n_components} comp)` : ''}
                        {field.location === 'integration_point' ? ' ⚠ Unsupported in MVP' : ''}
                        {field.location === 'elemental' ? ' [elem]' : ''}
                        {field.location === 'nodal' ? ' [nodal]' : ''}
                    </option>
                ))}
            </select>

            {fieldLoadError && (
                <div style={{
                    marginTop: 4,
                    fontSize: 11,
                    color: 'var(--accent-warning)',
                    padding: '4px 6px',
                    background: 'rgba(255,180,0,0.1)',
                    borderRadius: 4,
                }}>
                    ⚠ {fieldLoadError}
                </div>
            )}
        </div>
    );
};
