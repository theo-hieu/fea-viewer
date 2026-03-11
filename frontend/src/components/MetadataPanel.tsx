/**
 * FEA Viewer — MetadataPanel Component
 * =======================================
 *
 * Per 04 §3.1: solver info, units, coordinate systems, provenance context.
 * Per spec: missing units and coordinate-system context must remain visible.
 */

import React from 'react';
import { useModelStore } from '@/store/modelStore';

export const MetadataPanel: React.FC = () => {
    const metadata = useModelStore((s) => s.metadata);

    if (!metadata) {
        return <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>No metadata</div>;
    }

    const entries: Array<[string, string]> = [
        ['File', metadata.source_filename],
        ['Format', `${metadata.file_format} (${metadata.format_version})`],
        ['Solver', metadata.solver_name],
        ['Version', metadata.solver_version],
        ['Title', metadata.title],
        ['Coord System', metadata.coordinate_system],
        ['Length Unit', metadata.unit_system.length],
        ['Force Unit', metadata.unit_system.force],
        ['Time Unit', metadata.unit_system.time],
        ['Temp Unit', metadata.unit_system.temperature],
        ['System', metadata.unit_system.declared_system],
    ];

    return (
        <div style={{ maxHeight: 200, overflowY: 'auto' }}>
            {entries.map(([key, value]) => (
                <div className="info-panel__row" key={key}>
                    <span className="info-panel__key">{key}</span>
                    <span
                        className="info-panel__value"
                        style={{
                            color: value === 'unspecified' || value === 'Not specified'
                                ? 'var(--accent-warning)'
                                : undefined,
                        }}
                    >
                        {value}
                    </span>
                </div>
            ))}
        </div>
    );
};
