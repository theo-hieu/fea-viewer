/**
 * FEA Viewer — ColorLegend Component
 * =====================================
 *
 * Per 02b §6.2: HTML/canvas legend with field name, component, min/max, units.
 * Not a 3D object — avoids depth/clipping issues.
 * Uses actual LUT data from colorMaps.ts for pixel-accurate gradient.
 */

import React, { useEffect, useRef } from 'react';
import { useModelStore } from '@/store/modelStore';
import { useViewStore } from '@/store/viewStore';
import { sampleLutRGB } from '@/three/colorMaps';

export const ColorLegend: React.FC = () => {
    const fields = useModelStore((s) => s.fields);
    const activeFieldId = useModelStore((s) => s.activeFieldId);
    const metadata = useModelStore((s) => s.metadata);
    const fieldNanCount = useModelStore((s) => s.fieldNanCount);
    const colorMapConfig = useViewStore((s) => s.colorMapConfig);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const activeField = fields.find((f) => f.id === activeFieldId);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !activeField) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const w = canvas.width;
        const h = canvas.height;

        // Draw gradient using actual LUT data (bottom = min, top = max)
        for (let y = 0; y < h; y++) {
            const t = 1 - y / h; // bottom = 0, top = 1
            const [r, g, b] = sampleLutRGB(colorMapConfig.lut_name, t);
            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
            ctx.fillRect(0, y, w, 1);
        }
    }, [activeField, colorMapConfig]);

    if (!activeField) return null;

    // Determine unit label
    const unitLabel = metadata?.unit_system?.declared_system === 'unspecified'
        ? '' : (metadata?.unit_system?.length ?? '');

    return (
        <div className="panel-overlay panel-overlay--legend">
            <div className="color-legend">
                <div className="color-legend__title">
                    {activeField.name}
                    {activeField.n_components > 1 ? ` (${activeField.n_components} comp)` : ''}
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                    <canvas
                        ref={canvasRef}
                        width={24}
                        height={200}
                        className="color-legend__gradient"
                    />
                    <div className="color-legend__labels" style={{ height: 200, padding: '2px 0' }}>
                        <span>{colorMapConfig.max_value.toPrecision(4)}{unitLabel ? ` ${unitLabel}` : ''}</span>
                        <span>{((colorMapConfig.max_value + colorMapConfig.min_value) / 2).toPrecision(4)}</span>
                        <span>{colorMapConfig.min_value.toPrecision(4)}{unitLabel ? ` ${unitLabel}` : ''}</span>
                    </div>
                </div>
                <div style={{ fontSize: 10, color: 'var(--text-secondary)', marginTop: 4 }}>
                    {activeField.location} • {colorMapConfig.lut_name}
                    {colorMapConfig.lut_name === 'jet' && (
                        <span style={{ color: 'var(--accent-warning)', marginLeft: 4 }}>
                            ⚠ not perceptually uniform
                        </span>
                    )}
                </div>
                {fieldNanCount > 0 && (
                    <div style={{ fontSize: 10, color: 'var(--accent-warning)', marginTop: 2 }}>
                        {fieldNanCount} NaN value{fieldNanCount !== 1 ? 's' : ''} (grey)
                    </div>
                )}
            </div>
        </div>
    );
};
