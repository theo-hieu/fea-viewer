/**
 * FEA Viewer — ColorLegend Component
 * =====================================
 *
 * Per 02b §6.2: HTML/canvas legend with field name, component, min/max, units.
 * Not a 3D object — avoids depth/clipping issues.
 */

import React, { useEffect, useRef } from 'react';
import { useModelStore } from '@/store/modelStore';
import { useViewStore } from '@/store/viewStore';


export const ColorLegend: React.FC = () => {
    const fields = useModelStore((s) => s.fields);
    const activeFieldId = useModelStore((s) => s.activeFieldId);
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

        // Draw gradient (bottom = min, top = max)
        for (let y = 0; y < h; y++) {
            const t = 1 - y / h; // bottom = 0, top = 1
            const colorIdx = Math.floor(t * 255);
            const lutData = getLutRGB(colorMapConfig.lut_name, colorIdx);
            ctx.fillStyle = `rgb(${lutData[0]}, ${lutData[1]}, ${lutData[2]})`;
            ctx.fillRect(0, y, w, 1);
        }
    }, [activeField, colorMapConfig]);

    if (!activeField) return null;

    return (
        <div className="panel-overlay panel-overlay--legend">
            <div className="color-legend">
                <div className="color-legend__title">
                    {activeField.name}
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                    <canvas
                        ref={canvasRef}
                        width={24}
                        height={200}
                        className="color-legend__gradient"
                    />
                    <div className="color-legend__labels" style={{ height: 200, padding: '2px 0' }}>
                        <span>{colorMapConfig.max_value.toPrecision(4)}</span>
                        <span>{((colorMapConfig.max_value + colorMapConfig.min_value) / 2).toPrecision(4)}</span>
                        <span>{colorMapConfig.min_value.toPrecision(4)}</span>
                    </div>
                </div>
                <div style={{ fontSize: 10, color: 'var(--text-secondary)', marginTop: 4 }}>
                    {activeField.location} • {colorMapConfig.lut_name}
                </div>
            </div>
        </div>
    );
};

function getLutRGB(name: string, index: number): [number, number, number] {
    // Simple viridis key colors for the legend preview
    const t = index / 255;
    if (name === 'grayscale') {
        const v = Math.round(t * 255);
        return [v, v, v];
    }
    // Simplified color ramp for legend display
    const r = Math.round(Math.min(1, Math.max(0, t * 2 - 0.5)) * 255);
    const g = Math.round(Math.min(1, Math.max(0, 1 - Math.abs(t - 0.5) * 2)) * 255);
    const b = Math.round(Math.min(1, Math.max(0, 1 - t * 2)) * 255);
    return [r, g, b];
}
