/**
 * FEA Viewer — Unit Tests: Zustand Stores
 * ==========================================
 *
 * Comprehensive tests covering:
 * - Initial state correctness
 * - Upload/parse/ready/error lifecycle transitions
 * - Model reset clears stale binary/view state
 * - nodeCoords_f64 immutability after load
 * - Lazy replacement of fieldValues_f64 on field/timestep switch
 * - Warning persistence and warning-count selector
 * - Deformation mode/scale defaults and updates
 * - Pick mode toggling
 * - Part visibility isolate/show/reset behavior
 * - Color map config updates preserving documented defaults
 * - Float64 retention for probe-critical arrays
 * - "No data at this step" state handling
 * - Derived selectors
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { useModelStore, selectActiveField, selectWarningCount, selectIsRenderReady, selectIsDeformValid } from '@/store/modelStore';
import { useViewStore, selectVisiblePartIds } from '@/store/viewStore';
import type { ResultFieldDescriptor, FieldProvenance } from '@/utils/feaTypes';

// Helper to create a field descriptor
function makeField(overrides: Partial<ResultFieldDescriptor> = {}): ResultFieldDescriptor {
    return {
        id: 'stress-1',
        name: 'Von Mises Stress',
        location: 'nodal',
        n_components: 1,
        n_timesteps: 1,
        timesteps: [{ step_index: 0, time_value: 0.0 }],
        provenance: {
            source_field_name: 'S',
            source_location: 'nodal',
            extrapolation_applied: false,
            averaging_applied: false,
            averaging_method: null,
            coordinate_system: 'global',
            warnings: [],
        } as FieldProvenance,
        ...overrides,
    };
}

// ===========================================================================
// MODEL STORE
// ===========================================================================
describe('modelStore — initial state', () => {
    beforeEach(() => { useModelStore.getState().reset(); });

    it('starts in idle state with null modelId', () => {
        const s = useModelStore.getState();
        expect(s.status).toBe('idle');
        expect(s.modelId).toBeNull();
    });

    it('has null metadata, tree, and empty arrays initially', () => {
        const s = useModelStore.getState();
        expect(s.metadata).toBeNull();
        expect(s.tree).toBeNull();
        expect(s.fields).toEqual([]);
        expect(s.sets).toEqual([]);
        expect(s.warnings).toEqual([]);
    });

    it('has null CPU-side Float64 arrays initially', () => {
        const s = useModelStore.getState();
        expect(s.nodeCoords_f64).toBeNull();
        expect(s.fieldValues_f64).toBeNull();
        expect(s.displacement_f64).toBeNull();
    });

    it('has zero progress and no errors', () => {
        const s = useModelStore.getState();
        expect(s.uploadProgress).toBe(0);
        expect(s.parseProgress).toBe(0);
        expect(s.errorMessage).toBeNull();
        expect(s.fieldLoadError).toBeNull();
        expect(s.deformLoadError).toBeNull();
    });
});

describe('modelStore — lifecycle transitions', () => {
    beforeEach(() => { useModelStore.getState().reset(); });

    it('beginUpload sets modelId and status=uploading', () => {
        useModelStore.getState().beginUpload('model-42');
        const s = useModelStore.getState();
        expect(s.modelId).toBe('model-42');
        expect(s.status).toBe('uploading');
    });

    it('beginUpload clears stale state from previous model', () => {
        // Populate some state first
        useModelStore.getState().setFieldValues(new Float64Array([1, 2]));
        useModelStore.getState().addWarning({
            category: 'test', message: 'old', severity: 'warning', dismissible: false,
        });

        // Begin new upload
        useModelStore.getState().beginUpload('model-new');
        const s = useModelStore.getState();
        expect(s.fieldValues_f64).toBeNull();
        expect(s.warnings).toHaveLength(0);
        expect(s.modelId).toBe('model-new');
    });

    it('setParsing transitions to parsing', () => {
        useModelStore.getState().beginUpload('m1');
        useModelStore.getState().setParsing();
        expect(useModelStore.getState().status).toBe('parsing');
    });

    it('setReady transitions to ready', () => {
        useModelStore.getState().beginUpload('m1');
        useModelStore.getState().setParsing();
        useModelStore.getState().setReady();
        expect(useModelStore.getState().status).toBe('ready');
    });

    it('setError transitions to error with message', () => {
        useModelStore.getState().beginUpload('m1');
        useModelStore.getState().setError('parse failure');
        expect(useModelStore.getState().status).toBe('error');
        expect(useModelStore.getState().errorMessage).toBe('parse failure');
    });

    it('resetModel returns to initial state', () => {
        useModelStore.getState().beginUpload('m1');
        useModelStore.getState().setReady();
        useModelStore.getState().resetModel();
        expect(useModelStore.getState().status).toBe('idle');
        expect(useModelStore.getState().modelId).toBeNull();
    });

    it('full lifecycle: idle → uploading → parsing → ready', () => {
        expect(useModelStore.getState().status).toBe('idle');
        useModelStore.getState().beginUpload('m1');
        expect(useModelStore.getState().status).toBe('uploading');
        useModelStore.getState().setParsing();
        expect(useModelStore.getState().status).toBe('parsing');
        useModelStore.getState().setReady();
        expect(useModelStore.getState().status).toBe('ready');
    });
});

describe('modelStore — nodeCoords_f64 immutability', () => {
    beforeEach(() => { useModelStore.getState().reset(); });

    it('sets coords on first call', () => {
        const coords = new Float64Array([1, 2, 3]);
        useModelStore.getState().setNodeCoords(coords);
        expect(useModelStore.getState().nodeCoords_f64).toBe(coords);
    });

    it('ignores subsequent setNodeCoords calls (immutable after load)', () => {
        const coords1 = new Float64Array([1, 2, 3]);
        const coords2 = new Float64Array([4, 5, 6]);
        useModelStore.getState().setNodeCoords(coords1);
        useModelStore.getState().setNodeCoords(coords2);
        expect(useModelStore.getState().nodeCoords_f64).toBe(coords1);
    });

    it('allows setNodeCoords after reset', () => {
        const coords1 = new Float64Array([1, 2, 3]);
        useModelStore.getState().setNodeCoords(coords1);
        useModelStore.getState().reset();
        const coords2 = new Float64Array([4, 5, 6]);
        useModelStore.getState().setNodeCoords(coords2);
        expect(useModelStore.getState().nodeCoords_f64).toBe(coords2);
    });
});

describe('modelStore — field/timestep stale-clearing', () => {
    beforeEach(() => { useModelStore.getState().reset(); });

    it('setActiveFieldId clears fieldValues_f64', () => {
        useModelStore.getState().setFieldValues(new Float64Array([1, 2]));
        useModelStore.getState().setActiveFieldId('new-field');
        expect(useModelStore.getState().fieldValues_f64).toBeNull();
        expect(useModelStore.getState().activeFieldId).toBe('new-field');
    });

    it('setActiveFieldId clears fieldLoadError and fieldNanCount', () => {
        useModelStore.getState().setFieldLoadError('error!');
        useModelStore.getState().setFieldNanCount(5);
        useModelStore.getState().setActiveFieldId('f1');
        expect(useModelStore.getState().fieldLoadError).toBeNull();
        expect(useModelStore.getState().fieldNanCount).toBe(0);
    });

    it('setActiveFieldId(null) clears field state', () => {
        useModelStore.getState().setFieldValues(new Float64Array([1]));
        useModelStore.getState().setActiveFieldId(null);
        expect(useModelStore.getState().fieldValues_f64).toBeNull();
        expect(useModelStore.getState().activeFieldId).toBeNull();
    });

    it('setActiveTimestep clears fieldValues_f64', () => {
        useModelStore.getState().setFieldValues(new Float64Array([1, 2]));
        useModelStore.getState().setActiveTimestep(5);
        expect(useModelStore.getState().fieldValues_f64).toBeNull();
        expect(useModelStore.getState().activeTimestep).toBe(5);
    });

    it('setActiveTimestep clears fieldLoadError', () => {
        useModelStore.getState().setFieldLoadError('No data');
        useModelStore.getState().setActiveTimestep(3);
        expect(useModelStore.getState().fieldLoadError).toBeNull();
    });
});

describe('modelStore — warnings', () => {
    beforeEach(() => { useModelStore.getState().reset(); });

    it('addWarning appends to warnings array', () => {
        const w = { category: 'Units', message: 'Missing', severity: 'warning' as const, dismissible: false };
        useModelStore.getState().addWarning(w);
        useModelStore.getState().addWarning({ ...w, message: 'Second' });
        expect(useModelStore.getState().warnings).toHaveLength(2);
    });

    it('setWarnings replaces entire array', () => {
        useModelStore.getState().addWarning({
            category: 'X', message: 'old', severity: 'info', dismissible: true,
        });
        useModelStore.getState().setWarnings([]);
        expect(useModelStore.getState().warnings).toHaveLength(0);
    });

    it('clearWarnings empties the array', () => {
        useModelStore.getState().addWarning({
            category: 'X', message: 'w1', severity: 'warning', dismissible: false,
        });
        useModelStore.getState().clearWarnings();
        expect(useModelStore.getState().warnings).toHaveLength(0);
    });

    it('hydrateWarnings replaces warnings', () => {
        const ws = [
            { category: 'A', message: 'a', severity: 'info' as const, dismissible: true },
            { category: 'B', message: 'b', severity: 'error' as const, dismissible: false },
        ];
        useModelStore.getState().hydrateWarnings(ws);
        expect(useModelStore.getState().warnings).toHaveLength(2);
    });
});

describe('modelStore — "No data at this step"', () => {
    beforeEach(() => { useModelStore.getState().reset(); });

    it('fieldLoadError signals missing step data', () => {
        useModelStore.getState().setFieldLoadError('No data at this step');
        expect(useModelStore.getState().fieldLoadError).toBe('No data at this step');
        expect(useModelStore.getState().fieldValues_f64).toBeNull();
    });

    it('timestep change clears error so UI can show loading state', () => {
        useModelStore.getState().setFieldLoadError('No data at this step');
        useModelStore.getState().setActiveTimestep(2);
        expect(useModelStore.getState().fieldLoadError).toBeNull();
    });
});

describe('modelStore — Float64 precision', () => {
    beforeEach(() => { useModelStore.getState().reset(); });

    it('preserves exact Float64 coordinates for probing', () => {
        const coords = new Float64Array([1.23456789012345, 9.87654321098765e-15]);
        useModelStore.getState().setNodeCoords(coords);
        const stored = useModelStore.getState().nodeCoords_f64!;
        expect(stored[0]).toBe(1.23456789012345);
        expect(stored[1]).toBe(9.87654321098765e-15);
    });

    it('preserves exact Float64 field values for probing', () => {
        const vals = new Float64Array([Math.PI, -Math.E]);
        useModelStore.getState().setFieldValues(vals);
        const stored = useModelStore.getState().fieldValues_f64!;
        expect(stored[0]).toBe(Math.PI);
        expect(stored[1]).toBe(-Math.E);
    });

    it('probe precision satisfies ε ≤ 1e-12', () => {
        const source = 3.141592653589793238;
        const f64 = new Float64Array([source]);
        useModelStore.getState().setNodeCoords(f64);
        const probed = useModelStore.getState().nodeCoords_f64![0]!;
        expect(Math.abs(probed - source)).toBeLessThan(1e-12);
    });
});

describe('modelStore — derived selectors', () => {
    beforeEach(() => { useModelStore.getState().reset(); });

    it('selectActiveField returns matching field descriptor', () => {
        const field = makeField({ id: 'f1', name: 'Stress' });
        useModelStore.getState().setFields([field]);
        useModelStore.getState().setActiveFieldId('f1');
        const active = selectActiveField(useModelStore.getState());
        expect(active?.name).toBe('Stress');
    });

    it('selectActiveField returns undefined when no active field', () => {
        expect(selectActiveField(useModelStore.getState())).toBeUndefined();
    });

    it('selectWarningCount returns correct count', () => {
        expect(selectWarningCount(useModelStore.getState())).toBe(0);
        useModelStore.getState().addWarning({
            category: 'X', message: 'w', severity: 'warning', dismissible: false,
        });
        expect(selectWarningCount(useModelStore.getState())).toBe(1);
    });

    it('selectIsRenderReady requires status=ready AND nodeCoords', () => {
        expect(selectIsRenderReady(useModelStore.getState())).toBe(false);
        useModelStore.getState().setReady();
        expect(selectIsRenderReady(useModelStore.getState())).toBe(false); // no coords
        useModelStore.getState().setNodeCoords(new Float64Array([1, 2, 3]));
        expect(selectIsRenderReady(useModelStore.getState())).toBe(true);
    });

    it('selectIsDeformValid checks nodal+vector3', () => {
        const v3Field = makeField({ id: 'u1', location: 'nodal', n_components: 3 });
        const scalarField = makeField({ id: 's1', location: 'nodal', n_components: 1 });
        useModelStore.getState().setFields([v3Field, scalarField]);
        expect(selectIsDeformValid(useModelStore.getState(), 'u1')).toBe(true);
        expect(selectIsDeformValid(useModelStore.getState(), 's1')).toBe(false);
        expect(selectIsDeformValid(useModelStore.getState(), null)).toBe(false);
    });
});

describe('modelStore — model reset clears stale state', () => {
    it('reset clears binary data, fields, metadata, and errors', () => {
        useModelStore.getState().beginUpload('m1');
        useModelStore.getState().setNodeCoords(new Float64Array([1, 2, 3]));
        useModelStore.getState().setFieldValues(new Float64Array([4, 5]));
        useModelStore.getState().setDisplacementValues(new Float64Array([0.1, 0.2]));
        useModelStore.getState().setFieldLoadError('error');
        useModelStore.getState().setDeformLoadError('deform error');
        useModelStore.getState().addWarning({
            category: 'X', message: 'w', severity: 'info', dismissible: true,
        });

        useModelStore.getState().reset();
        const s = useModelStore.getState();
        expect(s.nodeCoords_f64).toBeNull();
        expect(s.fieldValues_f64).toBeNull();
        expect(s.displacement_f64).toBeNull();
        expect(s.fieldLoadError).toBeNull();
        expect(s.deformLoadError).toBeNull();
        expect(s.warnings).toHaveLength(0);
        expect(s.modelId).toBeNull();
        expect(s.status).toBe('idle');
    });
});

// ===========================================================================
// VIEW STORE
// ===========================================================================
describe('viewStore — initial state', () => {
    beforeEach(() => { useViewStore.getState().resetView(); });

    it('defaults deformMode to undeformed', () => {
        expect(useViewStore.getState().deformMode).toBe('undeformed');
    });

    it('defaults deformScale to 1.0', () => {
        expect(useViewStore.getState().deformScale).toBe(1.0);
    });

    it('defaults pickMode to node', () => {
        expect(useViewStore.getState().pickMode).toBe('node');
    });

    it('defaults wireframeVisible to false', () => {
        expect(useViewStore.getState().wireframeVisible).toBe(false);
    });

    it('defaults colorMap to viridis with documented settings', () => {
        const cfg = useViewStore.getState().colorMapConfig;
        expect(cfg.lut_name).toBe('viridis');
        expect(cfg.scale).toBe('linear');
        expect(cfg.n_colors).toBe(256);
        expect(cfg.nan_color).toEqual([0.5, 0.5, 0.5, 0.3]);
    });
});

describe('viewStore — deformation controls', () => {
    beforeEach(() => { useViewStore.getState().resetView(); });

    it('sets deform mode', () => {
        useViewStore.getState().setDeformMode('deformed');
        expect(useViewStore.getState().deformMode).toBe('deformed');
    });

    it('sets deform scale', () => {
        useViewStore.getState().setDeformScale(50.0);
        expect(useViewStore.getState().deformScale).toBe(50.0);
    });

    it('sets deform field ID', () => {
        useViewStore.getState().setDeformFieldId('u-field');
        expect(useViewStore.getState().deformFieldId).toBe('u-field');
    });
});

describe('viewStore — pick mode', () => {
    beforeEach(() => { useViewStore.getState().resetView(); });

    it('toggles between node and element', () => {
        useViewStore.getState().setPickMode('element');
        expect(useViewStore.getState().pickMode).toBe('element');
        useViewStore.getState().setPickMode('node');
        expect(useViewStore.getState().pickMode).toBe('node');
    });
});

describe('viewStore — wireframe', () => {
    beforeEach(() => { useViewStore.getState().resetView(); });

    it('toggleWireframe flips state', () => {
        useViewStore.getState().toggleWireframe();
        expect(useViewStore.getState().wireframeVisible).toBe(true);
        useViewStore.getState().toggleWireframe();
        expect(useViewStore.getState().wireframeVisible).toBe(false);
    });

    it('setWireframeVisible sets exact value', () => {
        useViewStore.getState().setWireframeVisible(true);
        expect(useViewStore.getState().wireframeVisible).toBe(true);
        useViewStore.getState().setWireframeVisible(false);
        expect(useViewStore.getState().wireframeVisible).toBe(false);
    });
});

describe('viewStore — part visibility', () => {
    beforeEach(() => { useViewStore.getState().resetView(); });

    it('sets individual part visibility', () => {
        useViewStore.getState().setPartVisibility('p1', true);
        useViewStore.getState().setPartVisibility('p2', false);
        const vis = useViewStore.getState().partVisibility;
        expect(vis['p1']).toBe(true);
        expect(vis['p2']).toBe(false);
    });

    it('setAllPartsVisible updates all existing parts', () => {
        useViewStore.getState().setPartVisibility('p1', true);
        useViewStore.getState().setPartVisibility('p2', false);
        useViewStore.getState().setAllPartsVisible(true);
        const vis = useViewStore.getState().partVisibility;
        expect(vis['p1']).toBe(true);
        expect(vis['p2']).toBe(true);
    });

    it('isolatePart shows only the target', () => {
        useViewStore.getState().setPartVisibility('p1', true);
        useViewStore.getState().setPartVisibility('p2', true);
        useViewStore.getState().setPartVisibility('p3', true);
        useViewStore.getState().isolatePart('p2');
        const vis = useViewStore.getState().partVisibility;
        expect(vis['p1']).toBe(false);
        expect(vis['p2']).toBe(true);
        expect(vis['p3']).toBe(false);
    });

    it('resetVisibility clears part visibility map', () => {
        useViewStore.getState().setPartVisibility('p1', true);
        useViewStore.getState().resetVisibility();
        expect(useViewStore.getState().partVisibility).toEqual({});
    });
});

describe('viewStore — color map config', () => {
    beforeEach(() => { useViewStore.getState().resetView(); });

    it('updates LUT name while preserving other defaults', () => {
        useViewStore.getState().setColorMapName('coolwarm');
        const cfg = useViewStore.getState().colorMapConfig;
        expect(cfg.lut_name).toBe('coolwarm');
        expect(cfg.n_colors).toBe(256); // preserved
        expect(cfg.nan_color).toEqual([0.5, 0.5, 0.5, 0.3]); // preserved
    });

    it('updates range', () => {
        useViewStore.getState().setColorMapRange(-10, 10);
        const cfg = useViewStore.getState().colorMapConfig;
        expect(cfg.min_value).toBe(-10);
        expect(cfg.max_value).toBe(10);
    });

    it('setColorMapConfig does partial update', () => {
        useViewStore.getState().setColorMapConfig({ scale: 'log', n_colors: 512 });
        const cfg = useViewStore.getState().colorMapConfig;
        expect(cfg.scale).toBe('log');
        expect(cfg.n_colors).toBe(512);
        expect(cfg.lut_name).toBe('viridis'); // preserved
    });

    it('resetView restores default color map', () => {
        useViewStore.getState().setColorMapName('jet');
        useViewStore.getState().setColorMapRange(-100, 100);
        useViewStore.getState().resetView();
        const cfg = useViewStore.getState().colorMapConfig;
        expect(cfg.lut_name).toBe('viridis');
        expect(cfg.min_value).toBe(0);
        expect(cfg.max_value).toBe(1);
    });
});

describe('viewStore — derived selectors', () => {
    beforeEach(() => { useViewStore.getState().resetView(); });

    it('selectVisiblePartIds returns only visible parts', () => {
        useViewStore.getState().setPartVisibility('p1', true);
        useViewStore.getState().setPartVisibility('p2', false);
        useViewStore.getState().setPartVisibility('p3', true);
        const visible = selectVisiblePartIds(useViewStore.getState());
        expect(visible).toContain('p1');
        expect(visible).toContain('p3');
        expect(visible).not.toContain('p2');
        expect(visible).toHaveLength(2);
    });

    it('selectVisiblePartIds returns empty for no parts', () => {
        expect(selectVisiblePartIds(useViewStore.getState())).toEqual([]);
    });
});

describe('viewStore — reset clears transient state', () => {
    it('resetView resets all view state', () => {
        useViewStore.getState().setDeformMode('overlay');
        useViewStore.getState().setDeformScale(100);
        useViewStore.getState().setPickMode('element');
        useViewStore.getState().setWireframeVisible(true);
        useViewStore.getState().setPartVisibility('p1', true);

        useViewStore.getState().resetView();
        const s = useViewStore.getState();
        expect(s.deformMode).toBe('undeformed');
        expect(s.deformScale).toBe(1.0);
        expect(s.pickMode).toBe('node');
        expect(s.wireframeVisible).toBe(false);
        expect(s.partVisibility).toEqual({});
    });
});

// ===========================================================================
// CROSS-STORE: model ↔ view isolation
// ===========================================================================
describe('store isolation — model vs. view', () => {
    beforeEach(() => {
        useModelStore.getState().reset();
        useViewStore.getState().resetView();
    });

    it('model reset does not affect view state', () => {
        useViewStore.getState().setDeformMode('deformed');
        useModelStore.getState().reset();
        expect(useViewStore.getState().deformMode).toBe('deformed');
    });

    it('view reset does not affect model state', () => {
        useModelStore.getState().setFields([makeField()]);
        useViewStore.getState().resetView();
        expect(useModelStore.getState().fields).toHaveLength(1);
    });

    it('view store does not hold authoritative Float64 data', () => {
        // viewStore has no nodeCoords_f64, fieldValues_f64, etc.
        const viewKeys = Object.keys(useViewStore.getState());
        expect(viewKeys).not.toContain('nodeCoords_f64');
        expect(viewKeys).not.toContain('fieldValues_f64');
    });
});
