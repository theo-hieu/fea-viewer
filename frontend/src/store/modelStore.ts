/**
 * FEA Viewer — Model Store (Zustand)
 * ====================================
 *
 * Central state for model data: metadata, tree, fields, sets, warnings,
 * active field/step, and CPU-side Float64 data arrays.
 *
 * Per 02b §6.5: lazy field loading — only active field + active timestep resident.
 * Per spec: nodeCoords_f64 is immutable after load.
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

    // Actions
    setModelId: (id: string) => void;
    setStatus: (status: ModelStatus) => void;
    setUploadProgress: (p: number) => void;
    setParseProgress: (p: number) => void;
    setErrorMessage: (msg: string | null) => void;
    setMetadata: (meta: ModelMetadata) => void;
    setWarnings: (warnings: ImportWarning[]) => void;
    addWarning: (warning: ImportWarning) => void;
    setTree: (tree: TreeNode) => void;
    setFields: (fields: ResultFieldDescriptor[]) => void;
    setSets: (sets: NamedSetDescriptor[]) => void;
    setActiveFieldId: (id: string | null) => void;
    setActiveTimestep: (step: number) => void;
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
    modelId: null,
    status: 'idle' as ModelStatus,
    uploadProgress: 0,
    parseProgress: 0,
    errorMessage: null,
    metadata: null,
    warnings: [],
    tree: null,
    fields: [],
    sets: [],
    activeFieldId: null,
    activeTimestep: 0,
    nodeCoords_f64: null,
    fieldValues_f64: null,
    fieldLoadError: null,
    fieldNanCount: 0,
    displacement_f64: null,
    deformLoadError: null,
    surfaceIndices: null,
    surfaceNormals: null,
    surfaceElementMap: null,
};

export const useModelStore = create<ModelState>((set) => ({
    ...initialState,

    setModelId: (id) => set({ modelId: id }),
    setStatus: (status) => set({ status }),
    setUploadProgress: (p) => set({ uploadProgress: p }),
    setParseProgress: (p) => set({ parseProgress: p }),
    setErrorMessage: (msg) => set({ errorMessage: msg }),
    setMetadata: (meta) => set({ metadata: meta }),
    setWarnings: (warnings) => set({ warnings }),
    addWarning: (warning) => set((s) => ({ warnings: [...s.warnings, warning] })),
    setTree: (tree) => set({ tree }),
    setFields: (fields) => set({ fields }),
    setSets: (sets) => set({ sets }),
    setActiveFieldId: (id) => set({ activeFieldId: id }),
    setActiveTimestep: (step) => set({ activeTimestep: step }),
    setNodeCoords: (coords) => set({ nodeCoords_f64: coords }),
    setFieldValues: (values) => set({ fieldValues_f64: values }),
    setFieldLoadError: (err) => set({ fieldLoadError: err }),
    setFieldNanCount: (count) => set({ fieldNanCount: count }),
    setDisplacementValues: (values) => set({ displacement_f64: values }),
    setDeformLoadError: (err) => set({ deformLoadError: err }),
    setSurfaceData: (indices, normals, elementMap) =>
        set({ surfaceIndices: indices, surfaceNormals: normals, surfaceElementMap: elementMap }),
    reset: () => set(initialState),
}));
