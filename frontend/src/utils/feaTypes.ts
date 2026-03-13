/**
 * FEA Viewer — Canonical TypeScript Interfaces
 * ==============================================
 *
 * Matches the documented data model from 02a §2:
 *   ModelMetadata, UnitSystem, NodeTable, ElementTable,
 *   Part, Instance, Assembly, NamedSet, ResultField,
 *   TimestepData, FieldProvenance, ColorMapConfig, warnings.
 *
 * CPU-side Float64 arrays are used for authoritative coordinates and probe values.
 * GPU-side Float32 arrays are used only at the upload boundary.
 */

// ---------------------------------------------------------------------------
// Unit System (02a §2.1)
// ---------------------------------------------------------------------------

export interface UnitSystem {
    length: string;       // e.g. "mm", "m", or "unspecified"
    force: string;        // e.g. "N", "kN", or "unspecified"
    time: string;         // e.g. "s" or "unspecified"
    temperature: string;  // e.g. "K", "C", or "unspecified"
    declared_system: string; // e.g. "SI", "imperial", or "unspecified"
}

// ---------------------------------------------------------------------------
// Model Metadata (02a §2.1)
// ---------------------------------------------------------------------------

export interface ModelMetadata {
    source_filename: string;
    file_format: string;
    format_version: string;
    solver_name: string;
    solver_version: string;
    title: string;
    unit_system: UnitSystem;
    coordinate_system: string;
}

// ---------------------------------------------------------------------------
// Geometry Tables (02a §2.2–2.3)
// ---------------------------------------------------------------------------

/** CPU-side authoritative node data — Float64 for precision. */
export interface NodeTable {
    count: number;
    ids: Int32Array;
    coordinates: Float64Array;       // flat [x0,y0,z0, x1,y1,z1, ...]
    coordinate_system: string;
}

/** CSR-format element connectivity. */
export interface ElementTable {
    count: number;
    ids: Int32Array;
    types: Uint8Array;
    connectivity_offsets: Int32Array;
    connectivity: Int32Array;
}

// ---------------------------------------------------------------------------
// Model Hierarchy (02a §2.4–2.5)
// ---------------------------------------------------------------------------

export interface Part {
    id: string;
    name: string;
    element_indices: Int32Array;
}

export interface Instance {
    id: string;
    name: string;
    part_id: string;
    transform: Float64Array; // 4x4 column-major, 16 elements
}

export interface Assembly {
    name: string;
    instance_ids: string[];
}

// ---------------------------------------------------------------------------
// Named Sets (02a §2.5)
// ---------------------------------------------------------------------------

export interface NamedSet {
    name: string;
    set_type: 'node' | 'element';
    member_count: number;
}

export interface NamedSetDescriptor {
    id: string;
    name: string;
    set_type: 'node' | 'element';
    member_count: number;
}

// ---------------------------------------------------------------------------
// Result Fields (02a §2.6)
// ---------------------------------------------------------------------------

export type FieldLocation = 'nodal' | 'elemental' | 'integration_point';

export interface FieldProvenance {
    source_field_name: string;
    source_location: FieldLocation;
    extrapolation_applied: boolean;
    averaging_applied: boolean;
    averaging_method: string | null;
    coordinate_system: string;
    warnings: string[];
}

export interface TimestepData {
    step_index: number;
    time_value: number | null;
    values: Float64Array;  // CPU-side Float64 for precision
}

export interface ResultFieldDescriptor {
    id: string;
    name: string;
    location: FieldLocation;
    n_components: number;
    n_timesteps: number;
    timesteps: Array<{ step_index: number; time_value: number | null }>;
    provenance: FieldProvenance;
}

// ---------------------------------------------------------------------------
// Assembly Tree (for /tree endpoint)
// ---------------------------------------------------------------------------

export interface TreeNode {
    id: string;
    name: string;
    type: 'assembly' | 'instance' | 'part' | 'node_set' | 'element_set';
    children?: TreeNode[];
}

// ---------------------------------------------------------------------------
// Warnings (03b §7.1)
// ---------------------------------------------------------------------------

export interface ImportWarning {
    category: string;
    message: string;
    severity: 'info' | 'warning' | 'error';
    dismissible: boolean;
}

// ---------------------------------------------------------------------------
// Color Map Config (02b §6.4)
// ---------------------------------------------------------------------------

export type ColorMapName = 'viridis' | 'coolwarm' | 'jet' | 'rainbow' | 'grayscale';

export interface ColorMapConfig {
    lut_name: ColorMapName;
    min_value: number;
    max_value: number;
    n_colors: number;
    nan_color: [number, number, number, number];
    above_range_color: [number, number, number, number];
    below_range_color: [number, number, number, number];
    scale: 'linear' | 'log';
}

// ---------------------------------------------------------------------------
// Binary Response Metadata (from X-Array-* headers)
// ---------------------------------------------------------------------------

export interface BinaryMeta {
    dtype: string;        // "float64", "float32", "int32", "uint8"
    shape: number[];      // scalar: [n], vector/tensor: [n, components]
    byteOrder: string;    // "little"
}

// ---------------------------------------------------------------------------
// Model Status
// ---------------------------------------------------------------------------

export type ModelStatus = 'idle' | 'uploading' | 'parsing' | 'ready' | 'error';

export interface StatusResponse {
    status: ModelStatus;
    warnings_count: number;
    error_message?: string;
    error_code?: string;
    progress?: number;
}
