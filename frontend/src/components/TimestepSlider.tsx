/**
 * FEA Viewer — TimestepSlider Component
 * ========================================
 *
 * Per 04 §3.1: range input, time label, animate button.
 * Per spec: explicit "No data at this step" behavior when field lacks data.
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useModelStore } from '@/store/modelStore';

export const TimestepSlider: React.FC = () => {
    const fields = useModelStore((s) => s.fields);
    const activeFieldId = useModelStore((s) => s.activeFieldId);
    const activeTimestep = useModelStore((s) => s.activeTimestep);
    const setActiveTimestep = useModelStore((s) => s.setActiveTimestep);
    const [isAnimating, setIsAnimating] = useState(false);
    const animFrameRef = useRef<number | null>(null);

    const activeField = fields.find((f) => f.id === activeFieldId);
    const nTimesteps = activeField?.n_timesteps ?? 1;
    const maxStep = Math.max(0, nTimesteps - 1);

    const currentTimestepData = activeField?.timesteps.find(
        (t) => t.step_index === activeTimestep,
    );
    const hasData = currentTimestepData !== undefined;
    const timeLabel = currentTimestepData?.time_value != null
        ? `t = ${currentTimestepData.time_value.toFixed(4)}`
        : hasData
            ? `Step ${activeTimestep}`
            : 'No data at this step';

    useEffect(() => {
        if (!isAnimating) {
            if (animFrameRef.current !== null) {
                cancelAnimationFrame(animFrameRef.current);
                animFrameRef.current = null;
            }
            return;
        }

        let lastTime = 0;
        const animate = (time: number) => {
            if (time - lastTime > 500) {
                lastTime = time;
                setActiveTimestep((activeTimestep + 1) % (maxStep + 1));
            }
            animFrameRef.current = requestAnimationFrame(animate);
        };
        animFrameRef.current = requestAnimationFrame(animate);

        return () => {
            if (animFrameRef.current !== null) {
                cancelAnimationFrame(animFrameRef.current);
            }
        };
    }, [isAnimating, activeTimestep, maxStep, setActiveTimestep]);

    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setActiveTimestep(parseInt(e.target.value, 10));
        },
        [setActiveTimestep],
    );

    if (!activeField || nTimesteps <= 1) {
        return (
            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
                {activeField ? 'Single timestep' : 'Select a field first'}
            </div>
        );
    }

    return (
        <div className="slider-control">
            <input
                type="range"
                min={0}
                max={maxStep}
                value={activeTimestep}
                onChange={onChange}
            />
            <div className="slider-control__label">
                <span>{timeLabel}</span>
                <span>
                    {activeTimestep + 1} / {nTimesteps}
                </span>
            </div>
            <button
                className="toolbar__btn"
                onClick={() => setIsAnimating(!isAnimating)}
                style={{ alignSelf: 'flex-start', marginTop: 4 }}
            >
                {isAnimating ? '⏸ Pause' : '▶ Animate'}
            </button>
            {!hasData && (
                <div style={{ color: 'var(--accent-warning)', fontSize: 11, marginTop: 4 }}>
                    ⚠ No data at this step
                </div>
            )}
        </div>
    );
};
