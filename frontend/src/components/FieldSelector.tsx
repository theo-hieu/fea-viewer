/**
 * FEA Viewer — FieldSelector Component
 * =======================================
 *
 * Per 04 §3.1: grouped by field name → components.
 * Integration-point fields greyed out with warning.
 */

import React from 'react';
import { useModelStore } from '@/store/modelStore';

export const FieldSelector: React.FC = () => {
    const fields = useModelStore((s) => s.fields);
    const activeFieldId = useModelStore((s) => s.activeFieldId);
    const setActiveFieldId = useModelStore((s) => s.setActiveFieldId);

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
                        {field.location === 'integration_point' ? ' ⚠ (int. point — N/A)' : ''}
                        {field.location === 'elemental' ? ' [elem]' : ''}
                        {field.location === 'nodal' ? ' [nodal]' : ''}
                    </option>
                ))}
            </select>
        </div>
    );
};
