/**
 * FEA Viewer — Unit Tests: Zustand Stores
 * ==========================================
 *
 * Tests for modelStore and viewStore state management.
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { useModelStore } from '@/store/modelStore';
import { useViewStore } from '@/store/viewStore';

describe('modelStore', () => {
    beforeEach(() => {
        useModelStore.getState().reset();
    });

    it('starts in idle state', () => {
        expect(useModelStore.getState().status).toBe('idle');
        expect(useModelStore.getState().modelId).toBeNull();
    });

    it('sets model ID and status', () => {
        const store = useModelStore.getState();
        store.setModelId('test-123');
        store.setStatus('parsing');
        expect(useModelStore.getState().modelId).toBe('test-123');
        expect(useModelStore.getState().status).toBe('parsing');
    });

    it('stores Float64 node coordinates as immutable reference', () => {
        const coords = new Float64Array([1.0, 2.0, 3.0, 4.0, 5.0, 6.0]);
        useModelStore.getState().setNodeCoords(coords);
        const stored = useModelStore.getState().nodeCoords_f64;
        expect(stored).toBe(coords); // Same reference — not copied
        expect(stored![0]).toBe(1.0);
    });

    it('manages warnings with add/set', () => {
        const store = useModelStore.getState();
        store.addWarning({
            category: 'Missing Units',
            message: 'Units not declared',
            severity: 'warning',
            dismissible: false,
        });
        expect(useModelStore.getState().warnings).toHaveLength(1);

        store.setWarnings([]);
        expect(useModelStore.getState().warnings).toHaveLength(0);
    });

    it('sets field values to null for "no data" state', () => {
        const store = useModelStore.getState();
        store.setFieldValues(new Float64Array([1, 2, 3]));
        expect(useModelStore.getState().fieldValues_f64).not.toBeNull();

        store.setFieldValues(null);
        expect(useModelStore.getState().fieldValues_f64).toBeNull();
    });

    it('resets to initial state', () => {
        const store = useModelStore.getState();
        store.setModelId('test-123');
        store.setStatus('ready');
        store.reset();
        expect(useModelStore.getState().modelId).toBeNull();
        expect(useModelStore.getState().status).toBe('idle');
    });
});

describe('viewStore', () => {
    beforeEach(() => {
        useViewStore.getState().resetView();
    });

    it('starts with default view state', () => {
        const state = useViewStore.getState();
        expect(state.deformMode).toBe('undeformed');
        expect(state.deformScale).toBe(1.0);
        expect(state.wireframeVisible).toBe(false);
        expect(state.pickMode).toBe('node');
        expect(state.colorMapConfig.lut_name).toBe('viridis');
    });

    it('toggles wireframe', () => {
        useViewStore.getState().toggleWireframe();
        expect(useViewStore.getState().wireframeVisible).toBe(true);
        useViewStore.getState().toggleWireframe();
        expect(useViewStore.getState().wireframeVisible).toBe(false);
    });

    it('sets part visibility', () => {
        const store = useViewStore.getState();
        store.setPartVisibility('part-1', true);
        store.setPartVisibility('part-2', false);
        expect(useViewStore.getState().partVisibility['part-1']).toBe(true);
        expect(useViewStore.getState().partVisibility['part-2']).toBe(false);
    });

    it('isolates a part (hides others)', () => {
        const store = useViewStore.getState();
        store.setPartVisibility('part-1', true);
        store.setPartVisibility('part-2', true);
        store.setPartVisibility('part-3', true);
        store.isolatePart('part-2');
        const vis = useViewStore.getState().partVisibility;
        expect(vis['part-1']).toBe(false);
        expect(vis['part-2']).toBe(true);
        expect(vis['part-3']).toBe(false);
    });

    it('updates color map range', () => {
        useViewStore.getState().setColorMapRange(-5, 100);
        const cfg = useViewStore.getState().colorMapConfig;
        expect(cfg.min_value).toBe(-5);
        expect(cfg.max_value).toBe(100);
    });

    it('deformation scale defaults to 1.0', () => {
        expect(useViewStore.getState().deformScale).toBe(1.0);
        useViewStore.getState().setDeformScale(10.0);
        expect(useViewStore.getState().deformScale).toBe(10.0);
    });
});
