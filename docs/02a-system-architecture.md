# FEA Viewer — System Architecture (Step 2, Part A)

> **Scope**: Frontend, backend, storage, API, parsing pipeline, data model, schema layer.
> **System boundary**: Viewer / post-processor. NOT a solver.

---

## 1. High-Level Architecture

```
┌────────────────────────────────────────────────-─────────┐
│                      Browser Client                      │
│  ┌───────_────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │  React UI  │  │ Three.js /   │  │  State Manager   │  │
│  │  Panels    │  │ WebGL Render │  │  (Zustand)       │  │
│  └────────-───┘  └──────────────┘  └──────────────────┘  │
│           ↕ REST + WebSocket ↕ Binary ArrayBuffer ↕      │
└─────────────────────────────────────────────────-────────┘
                          │
                    ┌─────┴──────┐
                    │   NGINX    │  (reverse proxy, TLS, static)
                    └─────┬──────┘
                          │
┌─────────────────────────┴───────────────────────────────┐
│                     API Server (Python/FastAPI)         │
│  ┌────────────┐  ┌─────────────┐  ┌──────────────────┐  │
│  │ REST API   │  │ WebSocket   │  │  Parse Job Queue │  │
│  │ endpoints  │  │ progress    │  │  (Celery/Redis)  │  │
│  └────────────┘  └─────────────┘  └──────────────────┘  │
└─────────────────────────┬───────────────────────────────┘
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
┌───────┴───────┐ ┌───────┴───────┐ ┌───────┴───────┐
│  PostgreSQL   │ │  Object Store │ │  Redis        │
│  (metadata,   │ │  (S3/MinIO:   │ │  (job queue,  │
│   projects,   │ │   raw files,  │ │   cache,      │
│   schemas)    │ │   parsed      │ │   sessions)   │
│               │ │   binary)     │ │               │
└───────────────┘ └───────────────┘ └───────────────┘
```

### Technology Choices with Rationale

| Component | Choice | Rationale |
|---|---|---|
| **Frontend framework** | React 18 + TypeScript | Ecosystem maturity, component model, Three.js bindings (`@react-three/fiber`). |
| **3D rendering** | Three.js (raw, not R3F for perf-critical paths) | WebGL2 support, custom shader control, large community. R3F used for UI chrome only. |
| **State management** | Zustand | Lightweight, no boilerplate, supports transient updates for animation without re-renders. |
| **Backend** | Python 3.12 + FastAPI | Async, type-safe, excellent scientific Python ecosystem (VTK, meshio, h5py, netCDF4). |
| **Task queue** | Celery + Redis | Proven for CPU-bound parse jobs. Alternatives considered: RQ (simpler but less robust), Dramatiq (viable). Celery chosen for monitoring (Flower). |
| **Database** | PostgreSQL 16 | ACID, JSONB for flexible metadata, battle-tested. |
| **Object storage** | S3-compatible (MinIO for dev/on-prem, S3 for cloud) | Binary blobs (raw uploads, parsed geometry buffers) don't belong in Postgres. |
| **Binary transfer** | ArrayBuffer over HTTP (not JSON) | Result arrays are Float32/Float64. JSON encoding would be 3–5× larger and 10× slower to parse. |

---

## 2. Data Model — Core FEA Concepts

### 2.1 Canonical Internal Representation

Every imported dataset is normalized into this schema. Raw files are preserved verbatim in object storage for provenance. The normalized form is what the application queries and renders.

```
Model
├── metadata: ModelMetadata
├── coordinate_systems: CoordinateSystem[]
├── unit_system: UnitSystem
├── nodes: NodeTable
├── elements: ElementTable
├── parts: Part[]
│   └── element_ids: int[]
├── instances: Instance[]
│   ├── part_ref: Part
│   └── transform: AffineTransform4x4
├── assembly: Assembly
│   └── instance_refs: Instance[]
├── node_sets: NamedSet[]
├── element_sets: NamedSet[]
├── result_fields: ResultField[]
│   ├── name: string
│   ├── location: "nodal" | "elemental" | "integration_point"
│   ├── data_type: "scalar" | "vector" | "tensor_sym" | "tensor_full"
│   ├── components: string[]  (e.g., ["S11","S22","S33","S12","S13","S23"])
│   ├── unit: Unit | null
│   ├── timesteps: TimestepData[]
│   │   ├── time: float64
│   │   ├── step_index: int
│   │   └── values: Float32Array | Float64Array  (flattened: n_entities × n_components)
│   └── provenance: FieldProvenance
└── warnings: ImportWarning[]
```

### 2.2 Node Table

```typescript
interface NodeTable {
  count: number;                    // Number of nodes
  ids: Int32Array;                  // Original node IDs from source file (may not be contiguous)
  coordinates: Float64Array;        // Flat: [x0, y0, z0, x1, y1, z1, ...] — 3 * count
  coordinate_system: string;        // Reference to CoordinateSystem.id (default: "global_cartesian")
  id_to_index: Map<number, number>; // O(1) lookup: original ID → internal array index
}
```

> [!IMPORTANT]
> Coordinates are stored as **Float64** (double precision) to preserve accuracy from solver output. Rendering downsamples to Float32 at the GPU upload boundary. The base coordinate array is **immutable** after parse. Deformation is always additive at render time.

### 2.3 Element Table

```typescript
interface ElementTable {
  count: number;
  ids: Int32Array;                           // Original element IDs
  types: Uint8Array;                         // Enum: TRI3=1, TRI6=2, QUAD4=3, QUAD8=4, TET4=10, TET10=11, HEX8=20, HEX20=21, WEDGE6=30, ...
  connectivity_offsets: Int32Array;           // CSR-style: element i's nodes are at connectivity[offsets[i]..offsets[i+1]]
  connectivity: Int32Array;                  // Flat array of node *indices* (not IDs) into NodeTable
  id_to_index: Map<number, number>;
}
```

**Element type registry** (MVP support):

| Type | VTK Cell | Nodes | Face extraction | MVP? |
|---|---|---|---|---|
| TRI3 | 5 | 3 | Self (2D) | Yes |
| TRI6 | 22 | 6 | Self (2D) | Phase 2 |
| QUAD4 | 9 | 4 | Self (2D) | Yes |
| QUAD8 | 23 | 8 | Self (2D) | Phase 2 |
| TET4 | 10 | 4 | 4 triangular faces | Yes |
| TET10 | 24 | 10 | 4 triangular faces (mid-edge nodes) | Phase 2 |
| HEX8 | 12 | 8 | 6 quad faces | Yes |
| HEX20 | 25 | 20 | 6 quad faces (mid-edge nodes) | Phase 2 |
| WEDGE6 | 13 | 6 | 2 tri + 3 quad faces | Yes |

### 2.4 Parts, Instances, and Assemblies

```typescript
interface Part {
  id: string;
  name: string;
  element_indices: Int32Array;  // Indices into ElementTable (not IDs)
}

interface Instance {
  id: string;
  name: string;
  part_id: string;              // FK to Part.id
  transform: Float64Array;      // 4×4 affine matrix (16 values, column-major). Identity if no transform.
}

interface Assembly {
  name: string;
  instance_ids: string[];
}
```

> **ASSUMPTION A7**: MVP assumes single-assembly models. Multi-assembly support deferred to Phase 2.

### 2.5 Sets and Named Groups

```typescript
interface NamedSet {
  name: string;
  set_type: "node" | "element";
  member_indices: Int32Array;     // Indices (not IDs) into NodeTable or ElementTable
  source: string;                 // e.g., "file_defined", "user_created"
}
```

### 2.6 Result Fields

```typescript
interface ResultField {
  id: string;                           // Internal unique ID
  name: string;                         // Display name: "Stress", "Displacement", etc.
  location: "nodal" | "elemental" | "integration_point";
  data_type: "scalar" | "vector3" | "symmetric_tensor" | "full_tensor";
  components: string[];                 // e.g., ["U1","U2","U3"] or ["S11","S22","S33","S12","S13","S23"]
  unit: Unit | null;
  provenance: FieldProvenance;
  timesteps: TimestepResult[];
}

interface TimestepResult {
  time_value: number;                   // Physical time or frequency (Float64)
  step_index: number;                   // 0-based ordinal
  step_label: string;                   // e.g., "Step-1, Increment 5" or "Mode 3 (f=12.5 Hz)"
  load_case: string | null;            // For multi-load-case static analyses
  values: Float64Array;                 // Flat: n_entities × n_components
}

interface FieldProvenance {
  source_field_name: string;            // Name as it appeared in the source file
  source_location: string;              // Location as declared in source
  extrapolation_applied: boolean;       // True if integration-point → nodal extrapolation was performed
  averaging_applied: boolean;           // True if nodal averaging across elements was performed
  averaging_method: string | null;      // e.g., "simple_average", "area_weighted"
  coordinate_system: string;            // CS in which tensor/vector is expressed
  warnings: string[];
}
```

> [!CAUTION]
> **Stress data is not monolithic.** The system distinguishes:
> - Raw integration-point values (Gauss-point data)
> - Extrapolated nodal values (computed, labeled)
> - Element-averaged values (centroidal)
> - Nodal-averaged values (averaged across shared elements)
> - Derived invariants (von Mises, principal stresses — computed from tensor, labeled as derived)
>
> Each variant is a separate `ResultField` with its own `FieldProvenance`. Users see which processing has been applied.

### 2.7 Units and Coordinate Systems

```typescript
interface UnitSystem {
  system: "SI" | "imperial" | "custom" | "unspecified";
  length: string;     // "m", "mm", "in", "ft", or "unspecified"
  force: string;      // "N", "kN", "lbf", or "unspecified"
  time: string;       // "s", "ms", "unspecified"
  temperature: string; // "K", "C", "F", "unspecified"
  stress: string;     // "Pa", "MPa", "GPa", "psi", "ksi", or "unspecified"
  source: "file_declared" | "user_specified" | "assumed";
}

interface CoordinateSystem {
  id: string;
  name: string;
  type: "cartesian" | "cylindrical" | "spherical";
  origin: [number, number, number];
  orientation: Float64Array;  // 3×3 rotation matrix
}
```

> [!WARNING]
> If the source file does not declare units, the system stores `"unspecified"` and renders a persistent yellow banner: **"Units not specified in source file. Values are displayed without unit conversion."** The user can optionally declare units, which is stored as `source: "user_specified"`.

### 2.8 Base Geometry and Deformation Fields

**Rendering formula**:
```
X_display[i] = NodeTable.coordinates[i] + deformation_scale * displacement_field.values[timestep][i]
```

- `NodeTable.coordinates` is **read-only** after parse.
- `displacement_field` is a `ResultField` with `location: "nodal"` and `data_type: "vector3"`.
- `deformation_scale` is a UI-controlled float, default `1.0`.
- If no displacement field exists, deformed view is disabled (button greyed out with tooltip).

---

## 3. API Design

### 3.1 REST Endpoints (MVP)

```
POST   /api/v1/models/upload          → Initiate upload, returns {model_id, upload_url}
PUT    /api/v1/models/{id}/file       → Upload raw file (multipart or presigned URL)
GET    /api/v1/models/{id}/status      → Parse status: pending | parsing | ready | error
GET    /api/v1/models/{id}/metadata    → ModelMetadata + UnitSystem + warnings
GET    /api/v1/models/{id}/tree        → Assembly/part/instance/set hierarchy
GET    /api/v1/models/{id}/nodes       → Binary: Float64Array of coordinates (Accept: application/octet-stream)
GET    /api/v1/models/{id}/elements    → Binary: connectivity + types + offsets
GET    /api/v1/models/{id}/surfaces    → Binary: extracted surface triangles (for rendering)
GET    /api/v1/models/{id}/fields      → List of ResultField descriptors (no data)
GET    /api/v1/models/{id}/fields/{field_id}/data?step={n}  → Binary: Float32Array of values
GET    /api/v1/models/{id}/sets        → List of NamedSets with member counts
GET    /api/v1/models/{id}/sets/{set_id}/members  → Binary: Int32Array of indices
DELETE /api/v1/models/{id}             → Delete model and all associated data
```

**Design principles**:
- Geometry and result data endpoints return **binary ArrayBuffers** (Content-Type: `application/octet-stream`) with a JSON metadata header (`X-Array-Dtype`, `X-Array-Shape`, `X-Array-ByteOrder`).
- Metadata endpoints return JSON.
- All binary payloads use **little-endian** byte order (matches x86/ARM and WebGL).

### 3.2 WebSocket (MVP)

```
WS /api/v1/models/{id}/progress
→ Server pushes: { stage: "parsing_nodes" | "parsing_elements" | "extracting_surfaces" | ..., percent: 0-100 }
```

---

## 4. Storage Strategy

| Data | Store | Format | Rationale |
|---|---|---|---|
| Raw uploaded file | S3 (object store) | Original bytes | Provenance: always recoverable |
| Model metadata, project info, user data | PostgreSQL | Relational + JSONB | Structured queries, ACID |
| Parsed node coordinates | S3 | `.npy` (numpy binary) or raw Float64 blob | Fast streaming to client |
| Parsed element connectivity | S3 | Raw Int32 blobs | Same |
| Extracted surface mesh | S3 | Raw Int32 blob (triangle indices) | Pre-computed for rendering |
| Result field data (per timestep) | S3 | Raw Float32/Float64 blobs | Lazy-loaded per timestep |
| Parse job state | Redis | Transient | Job queue, progress |

---

## 5. Parsing Pipeline

```
Raw File → Format Detector → Format-Specific Parser → Normalizer → Validator → Storage Writer
```

### 5.1 Format Detection

File extension + magic-byte validation. For VTK: check XML header `<VTKFile>`. For Exodus: check NetCDF/HDF5 magic bytes. Reject if mismatch between extension and content.

### 5.2 VTK/VTU Parser (MVP)

Uses `meshio` (Python) or `vtk` Python bindings to:
1. Read unstructured grid points → `NodeTable`
2. Read cells → `ElementTable` (map VTK cell types to internal enum)
3. Read point data → `ResultField` with `location: "nodal"`
4. Read cell data → `ResultField` with `location: "elemental"`
5. Read field data / time metadata → `TimestepResult[]`
6. Extract surface mesh → triangle index buffer for WebGL

### 5.3 Normalizer

- Assigns internal 0-based indices; builds `id_to_index` maps.
- Validates connectivity references (all node indices must exist).
- Detects and records element types.
- Classifies result fields by location and data type.
- Records provenance for every field.

### 5.4 Validator

- Node count > 0.
- Element count > 0.
- All connectivity indices within [0, node_count).
- Result field array lengths match expected: `n_nodes × n_components` for nodal, `n_elements × n_components` for elemental.
- No duplicate node/element IDs.
- Warnings for: empty sets, unnamed parts, missing units, unrecognized element types (skip with warning).

### 5.5 Surface Extraction

Volumetric elements (tet, hex, wedge) are not directly renderable in WebGL. The surface extraction step:
1. Enumerates all faces of all volumetric elements.
2. Counts face occurrences (canonical sorted-node key).
3. Faces with count=1 are exterior (skin mesh).
4. Exterior faces are triangulated (quads → 2 triangles).
5. Result: `Int32Array` of triangle vertex indices, stored as a pre-computed render buffer.

> [!IMPORTANT]
> Surface extraction is a **derived artifact**. It does not modify or replace the volumetric element data. The full element table is preserved for probing, set operations, and future section-cut features.
