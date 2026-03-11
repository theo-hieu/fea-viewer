/**
 * FEA Viewer — WarningBanner Component
 * =======================================
 *
 * Per 04 §3.1: dismissible warnings with "N warnings" badge,
 * plus persistent warning behavior for missing units/context.
 * Displays all 9 warning categories from 03b §7.1.
 */

import React, { useState } from 'react';
import { useModelStore } from '@/store/modelStore';

export const WarningBanner: React.FC = () => {
    const warnings = useModelStore((s) => s.warnings);
    const [dismissed, setDismissed] = useState<Set<number>>(new Set());
    const [expanded, setExpanded] = useState(false);

    const visibleWarnings = warnings.filter((w, i) => {
        // Persistent warnings (missing units, etc.) cannot be dismissed
        if (!w.dismissible) return true;
        return !dismissed.has(i);
    });

    if (visibleWarnings.length === 0) return null;

    const dismiss = (idx: number) => {
        setDismissed((prev) => new Set(prev).add(idx));
    };

    return (
        <div className="panel-overlay panel-overlay--warning">
            <div
                style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}
                onClick={() => setExpanded(!expanded)}
            >
                <span style={{ fontWeight: 600 }}>
                    ⚠ {visibleWarnings.length} warning{visibleWarnings.length !== 1 ? 's' : ''}
                </span>
                <span style={{ fontSize: 10 }}>{expanded ? '▲' : '▼'}</span>
            </div>

            {expanded && (
                <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {warnings.map((warning, i) => {
                        if (warning.dismissible && dismissed.has(i)) return null;
                        return (
                            <div key={i} className="warning-banner">
                                <span style={{ flex: 1 }}>
                                    <strong>[{warning.category}]</strong> {warning.message}
                                </span>
                                {warning.dismissible && (
                                    <button
                                        className="warning-banner__close"
                                        onClick={(e) => { e.stopPropagation(); dismiss(i); }}
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
