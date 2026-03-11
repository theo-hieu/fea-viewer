/**
 * FEA Viewer — View Store (Zustand)
 * ===================================
 *
 * Rendering state: deformation mode, pick mode, wireframe,
 * part visibility, and color map configuration.
 *
 * Separation: this store holds TRANSIENT rendering/view controls only.
 * Authoritative model data belongs in modelStore.
 *
 * Per 04 §3.3: deformMode, deformScale, deformFieldId, pickMode,
 * wireframeVisible, partVisibility, colorMapConfig.
 */

import { create } from 'zustand';
import type { ColorMapConfig, ColorMapName } from '@/utils/feaTypes';

export interface ViewState {
    // Deformation
    deformMode: 'undeformed' | 'deformed' | 'overlay';
    deformScale: number;
    deformFieldId: string | null;

    // Picking
    pickMode: 'node' | 'element';

    // Wireframe
    wireframeVisible: boolean;

    // Part visibility (part_id → visible)
    partVisibility: Record<string, boolean>;

    // Color map
    colorMapConfig: ColorMapConfig;

    // Actions
    setDeformMode: (mode: 'undeformed' | 'deformed' | 'overlay') => void;
    setDeformScale: (scale: number) => void;
    setDeformFieldId: (id: string | null) => void;
    setPickMode: (mode: 'node' | 'element') => void;
    setWireframeVisible: (visible: boolean) => void;
    toggleWireframe: () => void;
    setPartVisibility: (partId: string, visible: boolean) => void;
    setAllPartsVisible: (visible: boolean) => void;
    isolatePart: (partId: string) => void;
    resetVisibility: () => void;
    setColorMapName: (name: ColorMapName) => void;
    setColorMapRange: (min: number, max: number) => void;
    setColorMapConfig: (config: Partial<ColorMapConfig>) => void;
    resetView: () => void;
}

const defaultColorMap: ColorMapConfig = {
    lut_name: 'viridis',
    min_value: 0,
    max_value: 1,
    n_colors: 256,
    nan_color: [0.5, 0.5, 0.5, 0.3],
    above_range_color: [1, 0, 1, 1],
    below_range_color: [0, 0, 1, 1],
    scale: 'linear',
};

const initialViewState = {
    deformMode: 'undeformed' as const,
    deformScale: 1.0,
    deformFieldId: null as string | null,
    pickMode: 'node' as const,
    wireframeVisible: false,
    partVisibility: {} as Record<string, boolean>,
    colorMapConfig: { ...defaultColorMap },
};

export const useViewStore = create<ViewState>((set) => ({
    ...initialViewState,

    setDeformMode: (mode) => set({ deformMode: mode }),
    setDeformScale: (scale) => set({ deformScale: scale }),
    setDeformFieldId: (id) => set({ deformFieldId: id }),
    setPickMode: (mode) => set({ pickMode: mode }),
    setWireframeVisible: (visible) => set({ wireframeVisible: visible }),
    toggleWireframe: () => set((s) => ({ wireframeVisible: !s.wireframeVisible })),
    setPartVisibility: (partId, visible) =>
        set((s) => ({
            partVisibility: { ...s.partVisibility, [partId]: visible },
        })),
    setAllPartsVisible: (visible) =>
        set((s) => {
            const updated: Record<string, boolean> = {};
            for (const key of Object.keys(s.partVisibility)) {
                updated[key] = visible;
            }
            return { partVisibility: updated };
        }),
    isolatePart: (partId) =>
        set((s) => {
            const updated: Record<string, boolean> = {};
            for (const key of Object.keys(s.partVisibility)) {
                updated[key] = key === partId;
            }
            return { partVisibility: updated };
        }),
    resetVisibility: () => set({ partVisibility: {} }),
    setColorMapName: (name) =>
        set((s) => ({
            colorMapConfig: { ...s.colorMapConfig, lut_name: name },
        })),
    setColorMapRange: (min, max) =>
        set((s) => ({
            colorMapConfig: { ...s.colorMapConfig, min_value: min, max_value: max },
        })),
    setColorMapConfig: (config) =>
        set((s) => ({
            colorMapConfig: { ...s.colorMapConfig, ...config },
        })),
    resetView: () => set(initialViewState),
}));

// --- Derived Selectors ---

/** Get IDs of all visible parts. */
export const selectVisiblePartIds = (state: ViewState): string[] =>
    Object.entries(state.partVisibility)
        .filter(([, v]) => v)
        .map(([k]) => k);
