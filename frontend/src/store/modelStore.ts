/**
 * FEA Viewer — Model Store (Zustand)
 * ====================================
 *
 * Central state for model data: metadata, tree, fields, sets, warnings,
 * active field/step, and CPU-side Float64 data arrays.
 *
 * Per 02b §6.5: lazy field loading — only active field + active timestep resident.
 * Per spec: nodeCoords_f64 is immutable after load.
 *
 * Separation: this store holds AUTHORITATIVE model/domain state only.
 * Rendering-only toggles belong in viewStore.
 */

import { create } from 'zustand';
import type {
    ModelMetadata,
    ModelStatus,
    ImportWarning,
    TreeNode,
    ResultFieldDescriptor,
    NamedSetDescriptor,
} from '@/utils/feaTypes';

export interface ModelState {
    // Model identity & status
    modelId: string | null;
    status: ModelStatus;
    uploadProgress: number;
    parseProgress: number;
    errorMessage: string | null;

    // Metadata
    metadata: ModelMetadata | null;
    warnings: ImportWarning[];
    tree: TreeNode | null;

    // Fields & sets (descriptors only — data is lazy-loaded)
    fields: ResultFieldDescriptor[];
    sets: NamedSetDescriptor[];
    activeFieldId: string | null;
    activeTimestep: number;

    // CPU-side Float64 data (authoritative, never GPU-uploaded directly)
    nodeCoords_f64: Float64Array | null;
    fieldValues_f64: Float64Array | null;
    displacement_f64: Float64Array | null;

    // Field load state
    fieldLoadError: string | null;
    fieldNanCount: number;

    // Deformation load state
    deformLoadError: string | null;

    // Surface data for rendering
    surfaceIndices: Int32Array | null;
    surfaceNormals: Float32Array | null;
    surfaceElementMap: Int32Array | null;

    // --- Lifecycle Actions ---
    beginUpload: (modelId: string) => void;
    setParsing: () => void;
    setReady: () => void;
    setError: (msg: string) => void;
    resetModel: () => void;

    // --- Hydration Actions ---
    hydrateMetadata: (meta: ModelMetadata) => void;
    hydrateTree: (tree: TreeNode) => void;
    hydrateFields: (fields: ResultFieldDescriptor[]) => void;
    hydrateSets: (sets: NamedSetDescriptor[]) => void;
    hydrateWarnings: (warnings: ImportWarning[]) => void;

    // --- Granular Setters ---
    setModelId: (id: string) => void;
    setStatus: (status: ModelStatus) => void;
    setUploadProgress: (p: number) => void;
    setParseProgress: (p: number) => void;
    setErrorMessage: (msg: string | null) => void;
    setMetadata: (meta: ModelMetadata) => void;
    setWarnings: (warnings: ImportWarning[]) => void;
    addWarning: (warning: ImportWarning) => void;
    clearWarnings: () => void;
    setTree: (tree: TreeNode) => void;
    setFields: (fields: ResultFieldDescriptor[]) => void;
    setSets: (sets: NamedSetDescriptor[]) => void;

    /** Clears stale fieldValues_f64 on field change. */
    setActiveFieldId: (id: string | null) => void;
    /** Clears stale fieldValues_f64 on timestep change. */
    setActiveTimestep: (step: number) => void;

    /**
     * Install node coordinates (immutable after first load).
     * Subsequent calls are ignored unless store is reset first.
     */
    setNodeCoords: (coords: Float64Array) => void;
    setFieldValues: (values: Float64Array | null) => void;
    setFieldLoadError: (err: string | null) => void;
    setFieldNanCount: (count: number) => void;
    setDisplacementValues: (values: Float64Array | null) => void;
    setDeformLoadError: (err: string | null) => void;
    setSurfaceData: (indices: Int32Array, normals: Float32Array, elementMap: Int32Array) => void;
    reset: () => void;
}

const initialState = {
    modelId: null as string | null,
    status: 'idle' as ModelStatus,
    uploadProgress: 0,
    parseProgress: 0,
    errorMessage: null as string | null,
    metadata: null as ModelMetadata | null,
    warnings: [] as ImportWarning[],
    tree: null as TreeNode | null,
    fields: [] as ResultFieldDescriptor[],
    sets: [] as NamedSetDescriptor[],
    activeFieldId: null as string | null,
    activeTimestep: 0,
    nodeCoords_f64: null as Float64Array | null,
    fieldValues_f64: null as Float64Array | null,
    displacement_f64: null as Float64Array | null,
    fieldLoadError: null as string | null,
    fieldNanCount: 0,
    deformLoadError: null as string | null,
    surfaceIndices: null as Int32Array | null,
    surfaceNormals: null as Float32Array | null,
    surfaceElementMap: null as Int32Array | null,
};

export const useModelStore = create<ModelState>((set, get) => ({
    ...initialState,

    // --- Lifecycle Actions ---
    beginUpload: (modelId) =>
        set({
            ...initialState,
            modelId,
            status: 'uploading',
        }),
    setParsing: () => set({ status: 'parsing' }),
    setReady: () => set({ status: 'ready' }),
    setError: (msg) => set({ status: 'error', errorMessage: msg }),
    resetModel: () => set(initialState),

    // --- Hydration Actions (semantic aliases) ---
    hydrateMetadata: (meta) => set({ metadata: meta }),
    hydrateTree: (tree) => set({ tree }),
    hydrateFields: (fields) => set({ fields }),
    hydrateSets: (sets) => set({ sets }),
    hydrateWarnings: (warnings) => set({ warnings }),

    // --- Granular Setters ---
    setModelId: (id) => set({ modelId: id }),
    setStatus: (status) => set({ status }),
    setUploadProgress: (p) => set({ uploadProgress: p }),
    setParseProgress: (p) => set({ parseProgress: p }),
    setErrorMessage: (msg) => set({ errorMessage: msg }),
    setMetadata: (meta) => set({ metadata: meta }),
    setWarnings: (warnings) => set({ warnings }),
    addWarning: (warning) => set((s) => ({ warnings: [...s.warnings, warning] })),
    clearWarnings: () => set({ warnings: [] }),
    setTree: (tree) => set({ tree }),
    setFields: (fields) => set({ fields }),
    setSets: (sets) => set({ sets }),

    // Field/timestep changes clear stale values
    setActiveFieldId: (id) =>
        set({
            activeFieldId: id,
            fieldValues_f64: null,
            fieldLoadError: null,
            fieldNanCount: 0,
        }),
    setActiveTimestep: (step) =>
        set({
            activeTimestep: step,
            fieldValues_f64: null,
            fieldLoadError: null,
        }),

    // Immutable after first load: only set if currently null
    setNodeCoords: (coords) => {
        if (get().nodeCoords_f64 !== null) return;
        set({ nodeCoords_f64: coords });
    },

    setFieldValues: (values) => set({ fieldValues_f64: values }),
    setFieldLoadError: (err) => set({ fieldLoadError: err }),
    setFieldNanCount: (count) => set({ fieldNanCount: count }),
    setDisplacementValues: (values) => set({ displacement_f64: values }),
    setDeformLoadError: (err) => set({ deformLoadError: err }),
    setSurfaceData: (indices, normals, elementMap) =>
        set({ surfaceIndices: indices, surfaceNormals: normals, surfaceElementMap: elementMap }),
    reset: () => set(initialState),
}));

// --- Derived Selectors ---

/** Get the active field descriptor. */
export const selectActiveField = (state: ModelState): ResultFieldDescriptor | undefined =>
    state.fields.find((f) => f.id === state.activeFieldId);

/** Get the warning count. */
export const selectWarningCount = (state: ModelState): number =>
    state.warnings.length;

/** Whether the model is ready for 3D rendering. */
export const selectIsRenderReady = (state: ModelState): boolean =>
    state.status === 'ready' && state.nodeCoords_f64 !== null;

/** Whether a given deformation field is valid (nodal + vector3). */
export const selectIsDeformValid = (
    state: ModelState,
    deformFieldId: string | null,
): boolean => {
    if (!deformFieldId) return false;
    const field = state.fields.find((f) => f.id === deformFieldId);
    return field !== undefined && field.location === 'nodal' && field.n_components === 3;
};
