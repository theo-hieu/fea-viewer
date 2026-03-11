# FEA Viewer — MVP Implementation Plan (Phase 1)

> **Authority**: This document sources exclusively from the five specification documents (`01-product-specification.md`, `02a-system-architecture.md`, `02b-rendering-observability.md`, `03a-execution-plan.md`, `03b-risks-acceptance.md`). No requirements have been added beyond what those documents specify.
>
> **System boundary**: Browser-based FEA viewer / inspector / post-processor. **NOT a solver.**

---

## 0. Unresolved Blockers & Assumptions

These items are documented as unresolved in the source specification (01 §6). They remain unresolved. Implementation proceeds under the stated assumptions; **any change to these assumptions may invalidate portions of this plan**.

| ID | Blocker | Assumption Used | Impact on MVP Implementation |
|---|---|---|---|
| **A1** | Target deployment environment unknown | Cloud (AWS/GCP/Azure), containerized | Affects Dockerfile base images, S3 client config, CI/CD target. If revised to on-prem, MinIO replaces S3; Kubernetes replaced by Docker Compose. |
| **A2** | Maximum model size unknown beyond MVP target | MVP: ≤500K elements | Memory budgets, ArrayBuffer sizing, performance test threshold. |
| **A3** | Auth requirements unknown | MVP ships without auth (localhost / trusted network) | No JWT, no RBAC, no user table. API endpoints are open. Security relies on network-level access control. |
| **A4** | Regulatory/compliance requirements unknown | No formal compliance | Audit logging is best-effort (structlog). No HIPAA/SOX/DO-178C controls. |
| **A5** | Team size/skill profile unknown | 3–5 engineers: WebGL, Python, FEA domain | 12-week timeline is tight (03b §11, status ⚠️). GPU picking may slip into week 12. |
| **A6** | Solver license budget unknown | No solver licenses for MVP | ODB/RST/OP2 conversion is **out of scope** for MVP. |
| **A7** | Single-assembly scope: requirement or assumption? | Single-assembly only | Data model supports one `Assembly` with one-level `Instance[]`. Multi-assembly models will fail validation. |

### Document Conflict: Integration-Point Extrapolation

> [!CAUTION]
> **Conflict identified between source documents.**
>
> - `01-product-specification.md` §3.3 states: *"Elemental (integration-point) … Extrapolate to nodes using element shape functions → mark as 'extrapolated' in UI. Never silently present as native nodal data."* and the CAUTION block states: *"simple average for MVP, with warning"*.
> - `03b-risks-acceptance.md` R6 states: *"MVP does not extrapolate. Phase 2 extrapolation is always labeled."*
> - `01-product-specification.md` §5 lists integration-point extrapolation under **Phase 2** scope.
>
> **Resolution for this plan**: Treat R6 and §5 as authoritative. **MVP does not perform integration-point extrapolation.** If the source file contains integration-point data, the system stores it with `location: "integration_point"` but does **not** render it as a contour, does not extrapolate it, and displays a warning: *"Integration-point field '[name]' cannot be rendered in this version. Extrapolation will be available in a future release."* The field appears in the field list as greyed-out / disabled.
>
> **This must be resolved before implementation begins.** If the stakeholder wants MVP to extrapolate, the 01 §3.3 description governs and must be implemented with full provenance labeling. If not, R6 governs and this plan is correct.

---

## 1. Explicit MVP Scope Lock

### 1.1 In Scope (Phase 1 only)

Every item below has a source reference. No item without a source reference is in scope.

| # | Capability | Source | Critical Path? |
|---|---|---|---|
| F1 | Upload VTK/VTU files (single and multi-block) | 01 §5 | Yes |
| F2 | Format detection (extension + magic-byte) | 02a §5.1 | Yes |
| F3 | VTK/VTU parsing via meshio (fallback: VTK Python bindings) | 02a §5.2 | Yes |
| F4 | Normalization: NodeTable, ElementTable, Parts, Instances, Sets, ResultFields | 02a §2.1–2.6, §5.3 | Yes |
| F5 | Validation: counts, connectivity, field dimensions, duplicate IDs | 02a §5.4 | Yes |
| F6 | Surface extraction from volumetric elements | 02a §5.5 | Yes |
| F7 | Binary storage (S3): raw file + parsed node/element/surface/field blobs | 02a §4 | Yes |
| F8 | PostgreSQL metadata storage (models, result_fields, named_sets tables) | 03a §3.1 | Yes |
| F9 | REST API (11 endpoints documented in 02a §3.1) | 02a §3.1 | Yes |
| F10 | WebSocket parse progress | 02a §3.2 | No |
| F11 | Three.js surface mesh rendering (indexed BufferGeometry) | 02b §6.2 | Yes |
| F12 | Wireframe toggle | 02b §6.2, 03a §2 | No |
| F13 | Scalar contour rendering (per-vertex color + LUT) | 02b §6.2, §6.4 | Yes |
| F14 | Color legend (HTML overlay) | 02b §6.2 | Yes |
| F15 | Field selector (dropdown, organized by field/component) | 01 §3.3 | Yes |
| F16 | Timestep slider | 01 §3.4 | Yes |
| F17 | Deformed/undeformed toggle + scale factor + overlay | 01 §3.5, 02a §2.8, 02b §6.2 | Yes |
| F18 | GPU ID picking (node and element modes) | 02b §6.6 | Yes |
| F19 | Info panel (node ID, coords, field values; element ID, type, connectivity) | 01 §3.2 | Yes |
| F20 | Part/set tree navigation with show/hide/isolate | 01 §3.6, 02b §6.2 | No |
| F21 | Metadata panel (solver info, units, warnings) | 01 §3.7 | No |
| F22 | Warning/error surfacing (all 9 categories in 03b §7.1) | 03b §7.1 | No |
| F23 | Orbit/pan/zoom controls | 02b §6.2 | Yes |
| F24 | Lazy field loading (one field + one timestep at a time) | 02b §6.5 | Yes |
| F25 | Request tracing (`X-Request-Id`) | 03b §8 | No |
| F26 | Parse/upload audit logging (structlog) | 03b §8 | No |
| F27 | Health check endpoints (`/health`, `/health/ready`) | 02b §8.3 | No |

### 1.2 Explicitly Out of Scope (Phase 2+)

All items below are documented as Phase 2 or Phase 3 in the source documents. **Do not implement.**

Exodus II, CGNS, ODB, RST, OP2, FRD parsers • Authentication / JWT / RBAC • Project management / multi-user • Vector glyph rendering • Tensor glyph rendering • Section cuts / clipping planes • Screenshot / PDF export • Integration-point extrapolation (blocked — see §0) • Shared view links • Multi-model comparison • Animation export • Custom derived fields • CI/CD API • Admin panel • Prometheus/Grafana metrics • LOD • Error alerting • Data retention policies • Unit conversion

---

## 2. Backend Implementation Specification

### 2.1 Project Structure

```
fea-viewer/
├── docker-compose.yml
├── nginx/
│   └── nginx.conf                  (reverse proxy, rate limiting, TLS, CSP, static)
├── backend/
│   ├── pyproject.toml              (Python 3.12, FastAPI, Celery, meshio, vtk, boto3, structlog)
│   ├── app/
│   │   ├── main.py                 (FastAPI app, CORS, middleware, router mount)
│   │   ├── config.py               (env-based settings: S3 endpoint, PG DSN, Redis URL, max upload)
│   │   ├── api/
│   │   │   ├── routes_models.py    (11 REST endpoints from 02a §3.1)
│   │   │   ├── routes_health.py    (/health, /health/ready)
│   │   │   └── ws_progress.py      (WebSocket progress from 02a §3.2)
│   │   ├── models/
│   │   │   ├── db.py               (SQLAlchemy/asyncpg models: models, result_fields, named_sets)
│   │   │   └── schemas.py          (Pydantic: ModelMetadata, ResultFieldDescriptor, NamedSetDescriptor, UnitSystem)
│   │   ├── parsing/
│   │   │   ├── detect.py           (format detection: extension + magic bytes)
│   │   │   ├── vtk_parser.py       (meshio-backed VTK/VTU parser)
│   │   │   ├── normalizer.py       (build NodeTable, ElementTable, id_to_index maps, classify fields)
│   │   │   ├── validator.py        (all validation rules from 02a §5.4)
│   │   │   ├── surface_extractor.py(face enumeration, exterior detection, triangulation)
│   │   │   └── storage_writer.py   (serialize to S3 as typed binary blobs)
│   │   ├── tasks/
│   │   │   └── parse_task.py       (Celery task: orchestrate detect → parse → normalize → validate → extract → store)
│   │   ├── storage/
│   │   │   └── s3_client.py        (boto3 wrapper: put_binary, get_binary, presigned_url)
│   │   ├── middleware/
│   │   │   └── request_id.py       (X-Request-Id generation + propagation)
│   │   └── logging_config.py       (structlog setup: JSON, request_id, model_id context)
│   └── tests/
│       ├── parsing/                (unit tests per parser)
│       ├── validation/             (data model validation tests)
│       ├── api/                    (endpoint integration tests)
│       ├── e2e/                    (Playwright: upload → render)
│       └── fixtures/               (10 reference VTU files from 03a §4.1)
├── frontend/
│   └── (see §3)
└── README.md
```

### 2.2 Parsing Pipeline (exact flow, per 02a §5)

```
1. detect.py: Read first 1024 bytes + extension.
   - VTK/VTU: look for `<VTKFile` in first 1024 bytes + extension in {.vtk, .vtu, .vtp, .pvtu}
   - Mismatch → reject with HTTP 422: "File extension does not match content."
   - Unknown → reject with HTTP 415: "Unsupported file format."

2. vtk_parser.py (Celery worker, via parse_task.py):
   a. Read with meshio.read(filepath).
      - On meshio failure → try vtk.vtkXMLUnstructuredGridReader as fallback (R1 mitigation).
      - On both failure → status='error', log stack trace, preserve raw file.
   b. Extract:
      - points → Float64Array (3 × n_nodes)
      - cells → per-cell-type blocks, map VTK type codes to internal enum
      - point_data → ResultField with location="nodal"
      - cell_data → ResultField with location="elemental"
      - field_data (time) → TimestepResult[]
      - metadata: file header fields → ModelMetadata
   c. Report progress via Redis pub/sub → WebSocket.

3. normalizer.py:
   - Build NodeTable: assign 0-based indices, build id_to_index map.
   - Build ElementTable: CSR connectivity, map cell types to enum (TRI3=1, QUAD4=3, TET4=10, HEX8=20, WEDGE6=30).
   - Unrecognized cell types → skip with warning (03b §7.1 "Unsupported element type").
   - Build Part[]: if VTK multi-block, one Part per block. If single-block, one Part.
   - Build Instance[] with identity transform (ASSUMPTION A7: single assembly).
   - Build NamedSet[]: from VTK field data named groups if present.
   - Classify ResultFields: check array length vs n_nodes / n_elements.
     * length == n_nodes × n_components → nodal
     * length == n_elements × n_components → elemental
     * neither → reject field with warning (03b §7.1 "Field dimension mismatch")
   - Build FieldProvenance for each field (source_field_name, source_location, extrapolation_applied=false, averaging_applied=false).
   - Detect UnitSystem from metadata if present; else "unspecified".

4. validator.py:
   - Assert node_count > 0
   - Assert element_count > 0
   - Assert all connectivity indices in [0, node_count)
   - Assert no duplicate node IDs, no duplicate element IDs → reject on violation
   - Warn: empty sets, unnamed parts, missing units

5. surface_extractor.py:
   - For each volumetric element, enumerate faces using canonical face tables:
     * TET4: 4 faces, each 3 nodes → [{0,1,2}, {0,1,3}, {0,2,3}, {1,2,3}]
     * HEX8: 6 faces, each 4 nodes → [{0,1,2,3}, {4,5,6,7}, {0,1,5,4}, {2,3,7,6}, {0,3,7,4}, {1,2,6,5}]
     * WEDGE6: 2 tri faces (3 nodes) + 3 quad faces (4 nodes)
     * TRI3, QUAD4: face = self (2D element)
   - Build face hash → count map (canonical: sorted node indices as key)
   - Exterior faces: count == 1
   - Triangulate quads: split along shorter diagonal
   - Output: Int32Array of triangle vertex indices (surface_indices)
   - Output: Int32Array of surface_tri_to_element mapping (for elemental result rendering)
   - Compute vertex normals for the surface mesh (face-area-weighted average at shared vertices)

6. storage_writer.py:
   - Raw upload → S3: `uploads/{model_id}/raw/{filename}`
   - Node coords → S3: `models/{model_id}/geometry/nodes.f64` (raw Float64 bytes)
   - Element connectivity → S3: `models/{model_id}/geometry/connectivity.i32`
   - Element offsets → S3: `models/{model_id}/geometry/offsets.i32`
   - Element types → S3: `models/{model_id}/geometry/types.u8`
   - Surface indices → S3: `models/{model_id}/geometry/surface_indices.i32`
   - Surface normals → S3: `models/{model_id}/geometry/surface_normals.f32`
   - Surface-to-element map → S3: `models/{model_id}/geometry/surface_element_map.i32`
   - Result field data → S3: `models/{model_id}/fields/{field_id}/step_{n}.f64` (one blob per timestep)
   - Set members → S3: `models/{model_id}/sets/{set_id}/members.i32`
   - Metadata → PostgreSQL (models, result_fields, named_sets rows)
```

### 2.3 REST API Implementation (per 02a §3.1)

All binary endpoints return `Content-Type: application/octet-stream` with metadata headers:
- `X-Array-Dtype`: `float64`, `float32`, `int32`, `uint8`
- `X-Array-Shape`: e.g., `[15000, 3]`
- `X-Array-ByteOrder`: `little`

```python
# routes_models.py — endpoint signatures (FastAPI)

POST   /api/v1/models/upload           # Accept multipart file. Validate size ≤ 500MB. Create model row (status='uploading'). Store raw to S3. Enqueue parse task. Return {model_id}.
PUT    /api/v1/models/{id}/file         # Alternative: presigned URL upload. Update status to 'uploading'.
GET    /api/v1/models/{id}/status       # Return {status, warnings_count, error_message?}
GET    /api/v1/models/{id}/metadata     # Return JSON: ModelMetadata, UnitSystem, warnings[]
GET    /api/v1/models/{id}/tree         # Return JSON: Assembly → Instances → Parts → Sets hierarchy
GET    /api/v1/models/{id}/nodes        # Stream S3 blob: nodes.f64 (Float64)
GET    /api/v1/models/{id}/elements     # Stream S3 blobs: connectivity.i32 + offsets.i32 + types.u8 (multipart or single response with header-described sections)
GET    /api/v1/models/{id}/surfaces     # Stream S3 blobs: surface_indices.i32 + surface_normals.f32 + surface_element_map.i32
GET    /api/v1/models/{id}/fields       # Return JSON: ResultFieldDescriptor[] (no data, just metadata)
GET    /api/v1/models/{id}/fields/{fid}/data?step={n}  # Stream S3 blob: step_{n}.f64 → downcast to Float32 at client
GET    /api/v1/models/{id}/sets         # Return JSON: NamedSetDescriptor[]
GET    /api/v1/models/{id}/sets/{sid}/members  # Stream S3 blob: members.i32
DELETE /api/v1/models/{id}              # Delete model row, cascade delete result_fields/named_sets rows, delete S3 prefix.
```

### 2.4 MVP Security Controls (per 03b §6)

- **nginx**: `client_max_body_size 500m;` — reject oversized uploads at proxy level.
- **nginx**: `limit_req zone=upload burst=10 rate=10r/m;` and `limit_req zone=api burst=100 rate=100r/m;`
- **nginx**: CSP headers: `Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' blob:; connect-src 'self' wss:;`
- **nginx**: HSTS: `Strict-Transport-Security: max-age=31536000; includeSubDomains`
- **detect.py**: Magic-byte validation. Reject files with executable signatures.
- **normalizer.py**: All metadata strings HTML-escaped before DB insertion.
- **CI pipeline**: `pip-audit`, `npm audit`, `trivy` container scan.

---

## 3. Frontend Implementation Specification

### 3.1 Project Structure

```
frontend/
├── package.json          (React 18, TypeScript 5, Three.js, Zustand, Vite)
├── vite.config.ts
├── tsconfig.json
├── src/
│   ├── main.tsx
│   ├── App.tsx           (layout: toolbar + sidebar + viewport + panels)
│   ├── api/
│   │   ├── client.ts     (fetch wrappers: JSON + binary ArrayBuffer endpoints)
│   │   └── ws.ts         (WebSocket progress listener)
│   ├── store/
│   │   ├── modelStore.ts (Zustand: model metadata, tree, fields, sets, warnings, active field, active step)
│   │   └── viewStore.ts  (Zustand: camera, deformation mode/scale, visibility, pick mode)
│   ├── three/
│   │   ├── SceneManager.ts       (create scene, camera, renderer, controls, lights)
│   │   ├── MeshManager.ts        (create BufferGeometry from binary, build per-part mesh groups)
│   │   ├── ContourManager.ts     (apply scalar color attribute, LUT texture, handle NaN, flat vs smooth)
│   │   ├── DeformationManager.ts (upload displacement BufferAttribute, set u_scale uniform)
│   │   ├── WireframeManager.ts   (edge extraction, LineSegments overlay)
│   │   ├── PickingManager.ts     (offscreen render target, ID-encode shader, readPixels, decode)
│   │   ├── shaders/
│   │   │   ├── contour.vert.glsl (base_position + u_scale * displacement; pass scalar to fragment)
│   │   │   ├── contour.frag.glsl (LUT texture sample; NaN → nan_color; above/below range colors)
│   │   │   ├── picking.vert.glsl (passthrough position)
│   │   │   └── picking.frag.glsl (encode ID as RGB)
│   │   └── colorMaps.ts          (viridis, coolwarm, jet, rainbow, grayscale LUT data)
│   ├── components/
│   │   ├── UploadPanel.tsx        (drag-drop / file picker, progress bar via WS)
│   │   ├── ModelTree.tsx          (assembly → instances → parts → sets, show/hide/isolate)
│   │   ├── FieldSelector.tsx      (dropdown grouped by field name → components)
│   │   ├── TimestepSlider.tsx     (range input, time label, animate button)
│   │   ├── DeformationControls.tsx(toggle, scale factor input, field selector)
│   │   ├── ColorLegend.tsx        (canvas-drawn gradient, min/max labels, field name, units)
│   │   ├── InfoPanel.tsx          (probed node/element details)
│   │   ├── MetadataPanel.tsx      (solver info, units, coordinate systems)
│   │   ├── WarningBanner.tsx      (yellow/red banners, dismissible, "N warnings" badge)
│   │   └── Toolbar.tsx            (wireframe toggle, pick mode, deform toggle, zoom-to-fit)
│   ├── workers/
│   │   └── binaryParser.worker.ts (parse ArrayBuffer on background thread, transfer back)
│   └── utils/
│       ├── arrayUtils.ts          (Float64→Float32 downcast, reshape, NaN detection)
│       └── feaTypes.ts            (TypeScript interfaces matching 02a §2 data model)
└── tests/
    ├── unit/              (color map, array utils, store logic)
    └── e2e/               (Playwright: upload → render → probe → assert)
```

### 3.2 Rendering Pipeline (per 02b §6.2)

**Initialization** (after model status = `ready`):

```
1. Fetch /surfaces → ArrayBuffer → surface_indices: Int32Array, surface_normals: Float32Array, surface_element_map: Int32Array
2. Fetch /nodes → ArrayBuffer → node_coords: Float64Array
3. Downcast node_coords to Float32Array for GPU (keep Float64 for probing)
4. Build BufferGeometry: position attribute (Float32), normal attribute (Float32), index (Int32)
5. Group triangles by part → one Mesh per part (MeshPhongMaterial, vertexColors enabled)
6. Add to scene. Compute bounding box → set camera to fit.
7. Fetch /fields → JSON → populate field selector dropdown
8. Fetch /tree → JSON → populate model tree
9. Fetch /metadata → JSON → populate metadata panel, check for unit warnings
```

**Scalar contour application** (on field selection, per 02b §6.2 + §6.4):

```
1. Fetch /fields/{fid}/data?step={n} → ArrayBuffer → Float64 field_values
2. Compute min/max (excluding NaN/Inf)
3. For each vertex in surface:
   - If field.location == "nodal": value = field_values[vertex_node_index]
   - If field.location == "elemental": value = field_values[surface_element_map[tri_index]]
4. Map value → [0,1] using (value - min) / (max - min)
5. Upload as Float32 BufferAttribute (scalar_value); fragment shader samples LUT texture
6. Nodal data: smooth interpolation (default ShaderMaterial varying)
7. Elemental data: flat shading (use `flat` qualifier in GLSL, or replicate vertex attribute per face)
8. NaN → nan_color (grey, 0.3 alpha); above_max → magenta; below_min → blue
```

**Deformation** (per 02a §2.8, 02b §6.2):

```
1. User selects deformation field (must be nodal, vector3)
2. Fetch displacement data for active timestep
3. Downcast to Float32, upload as BufferAttribute "displacement"
4. Vertex shader: gl_Position = projectionMatrix * modelViewMatrix * vec4(position + u_deform_scale * displacement, 1.0)
5. u_deform_scale is a uniform, updated on slider change — no geometry re-upload
6. Undeformed mode: set u_deform_scale = 0.0
7. Overlay mode: render undeformed wireframe at u_deform_scale = 0.0 on top of deformed surface
```

**GPU Picking** (per 02b §6.6):

```
1. Offscreen WebGLRenderTarget (same resolution as viewport)
2. Picking shader: fragment outputs vec4(r, g, b, 1.0) where RGB encodes 24-bit ID
3. Node-pick mode: encode node_index into face vertices (all 3 vertices of a tri get the same node ID? No — encode per-vertex, readPixels interpolates. Instead: for node pick, encode closest-vertex ID)
   Alternative (documented): element-pick mode default. Encode element ID into all 3 vertices of each surface triangle (from surface_element_map). This gives unambiguous flat-color per triangle.
   Node pick: encode node index per vertex. On readPixels, get nearest-vertex node index. Acceptably approximate for click interaction.
4. On click: render picking scene → readPixels(x, y, 1, 1) → decode ID
5. Query Float64 node coordinates and field values from CPU-side stores → display in InfoPanel

Precision assertion (AC-6): probed values come from Float64 arrays kept in JavaScript memory, NOT from GPU buffers.
```

### 3.3 State Management (Zustand, per 02a §1 choice)

```typescript
// modelStore.ts — key state shape
interface ModelState {
  modelId: string | null;
  status: 'idle' | 'uploading' | 'parsing' | 'ready' | 'error';
  metadata: ModelMetadata | null;
  unitSystem: UnitSystem | null;
  warnings: ImportWarning[];
  tree: AssemblyTree | null;
  fields: ResultFieldDescriptor[];
  sets: NamedSetDescriptor[];
  activeFieldId: string | null;
  activeTimestep: number;

  // Binary data (CPU-side Float64)
  nodeCoords_f64: Float64Array | null;       // immutable after load
  fieldValues_f64: Float64Array | null;      // active field, active timestep
}

// viewStore.ts — rendering state
interface ViewState {
  deformMode: 'undeformed' | 'deformed' | 'overlay';
  deformScale: number;                        // default 1.0
  deformFieldId: string | null;
  pickMode: 'node' | 'element';
  wireframeVisible: boolean;
  partVisibility: Record<string, boolean>;    // part_id → visible
  colorMapConfig: ColorMapConfig;
}
```

---

## 4. Docker Compose Stack (per 02b §9.1)

```yaml
# docker-compose.yml
version: "3.9"
services:
  nginx:
    image: nginx:1.25-alpine
    ports: ["80:80", "443:443"]
    volumes: ["./nginx/nginx.conf:/etc/nginx/nginx.conf:ro", "./frontend/dist:/usr/share/nginx/html:ro"]
    depends_on: [api]

  api:
    build: ./backend
    command: uvicorn app.main:app --host 0.0.0.0 --port 8000 --workers 2
    environment: {DATABASE_URL, REDIS_URL, S3_ENDPOINT, S3_BUCKET, S3_ACCESS_KEY, S3_SECRET_KEY}
    depends_on: [postgres, redis, minio]

  worker:
    build: ./backend
    command: celery -A app.tasks.parse_task worker --loglevel=info --concurrency=2
    environment: {DATABASE_URL, REDIS_URL, S3_ENDPOINT, S3_BUCKET, S3_ACCESS_KEY, S3_SECRET_KEY}
    depends_on: [postgres, redis, minio]

  postgres:
    image: postgres:16-alpine
    environment: {POSTGRES_DB: feaviewer, POSTGRES_USER: fea, POSTGRES_PASSWORD: fea}
    volumes: [pgdata:/var/lib/postgresql/data]

  redis:
    image: redis:7-alpine

  minio:
    image: minio/minio:latest
    command: server /data --console-address ":9001"
    environment: {MINIO_ROOT_USER: minioadmin, MINIO_ROOT_PASSWORD: minioadmin}
    volumes: [miniodata:/data]

volumes:
  pgdata:
  miniodata:
```

---

## 5. Week-by-Week Execution (per 03a §1)

### Week 1–2: Scaffold & Infrastructure

| Deliverable | Detail |
|---|---|
| Monorepo structure | As specified in §2.1 and §3.1 above |
| Docker Compose | All 6 services running locally |
| CI pipeline | GitHub Actions: lint, type-check, pytest, npm test, `pip-audit`, `npm audit`, `trivy` |
| Database migration | Alembic migration for 3 tables (03a §3.1) |
| Hello-world API | `POST /upload` returns 200, `GET /health` returns ok |
| Hello-world frontend | Vite + React renders "FEA Viewer" text, connects to API |

### Week 3–4: Parser, Data Model, Binary APIs

| Deliverable | Detail |
|---|---|
| Format detector | detect.py with extension + magic-byte check |
| VTK/VTU parser | vtk_parser.py: meshio-backed with VTK fallback |
| Normalizer | normalizer.py: NodeTable, ElementTable, Parts, Sets, ResultFields, Provenance |
| Validator | validator.py: all rules from 02a §5.4 |
| Surface extractor | surface_extractor.py: face enumeration, exterior detection, triangulation, normals |
| Storage writer | storage_writer.py: all binary blobs to S3 |
| Celery task | parse_task.py: orchestrate full pipeline with progress reporting |
| Binary API endpoints | All 11 REST endpoints functional, returning correct binary/JSON |
| Unit tests | 10 reference test files (03a §4.1), validation test matrix (03a §4.2) |

### Week 5–6: 3D Viewer Core

| Deliverable | Detail |
|---|---|
| SceneManager | Three.js scene, camera, renderer, OrbitControls, lights, resize handling |
| MeshManager | Build BufferGeometry from binary surfaces, per-part mesh groups |
| Wireframe overlay | WireframeManager with EdgesGeometry |
| Part show/hide | Toggle mesh.visible per part from model tree |
| Binary client | Fetch binary endpoints, parse ArrayBuffers, Web Worker offload |

### Week 7–8: Result Visualization

| Deliverable | Detail |
|---|---|
| ContourManager | Vertex shader color attribute, LUT texture, NaN handling |
| Custom shaders | contour.vert.glsl + contour.frag.glsl |
| Color legend | ColorLegend.tsx: canvas-drawn, min/max, field name, units |
| Field selector | FieldSelector.tsx: grouped dropdown, integration-point fields greyed out |
| Auto-range + user range | Compute from data (excluding NaN); user min/max inputs |
| Color map selection | viridis (default), coolwarm, jet (with warning), rainbow, grayscale |

### Week 9–10: Deformation & Timesteps

| Deliverable | Detail |
|---|---|
| DeformationManager | Displacement BufferAttribute, u_deform_scale uniform |
| Deformation controls | Toggle (undeformed/deformed/overlay), scale factor input, field selector |
| Timestep slider | TimestepSlider.tsx: range input, time label, lazy field fetch on change |
| Lazy loading | Fetch field data only for active field + active timestep |
| "No data at this step" | Show message when field has no data at selected timestep |

### Week 11: Probing & Model Tree

| Deliverable | Detail |
|---|---|
| PickingManager | Offscreen framebuffer, ID-encode shaders, readPixels decode |
| Info panel | InfoPanel.tsx: node ID, coords, field values (Float64) or element ID, type, connectivity |
| Model tree | ModelTree.tsx: assembly → instances → parts → sets, show/hide/isolate |
| Metadata panel | MetadataPanel.tsx: all metadata, units, coordinate systems |
| Warning banner | WarningBanner.tsx: all 9 categories from 03b §7.1 |

### Week 12: Integration, Performance, Release

| Deliverable | Detail |
|---|---|
| E2E tests | Playwright: upload → parse → render → select field → probe → assert (AC-1 through AC-6) |
| Performance tests | Playwright: 500K model, measure TTR, FPS, field switch, timestep switch (02b §6.5) |
| Bug fixes | Address all P0/P1 from testing |
| Documentation | README, API docs (OpenAPI auto-generated from FastAPI), deployment guide |
| Staging deploy | Docker Compose on cloud VM or local |

---

## 6. Release Criteria Checklist (per 03a §1 + 03b §10)

All must pass before MVP release:

- [ ] Upload VTK/VTU → parse succeeds for all 10 reference test files
- [ ] Surface mesh renders correctly for TRI3, QUAD4, TET4, HEX8, WEDGE6
- [ ] Scalar contour matches reference values within ε = 1e-6
- [ ] Deformed view: `X_display = X_base + scale * U` verified against known displacement
- [ ] Probe value at node matches source file value exactly (Float64, ε = 1e-12)
- [ ] 500K element model renders at ≥30 fps on mid-range GPU (GTX 1660)
- [ ] Initial geometry load <3s for 500K tri mesh
- [ ] Field switch <500ms
- [ ] Timestep switch <500ms
- [ ] GPU memory <1 GB for 500K model
- [ ] Browser tab memory <2 GB for 500K model
- [ ] No data-corrupting bugs in parsing, normalization, or rendering
- [ ] All import warnings surfaced to user (all 9 categories)
- [ ] NaN values rendered grey, excluded from range
- [ ] Malformed VTU rejected with clear error message
- [ ] Duplicate node/element IDs rejected with clear error message
- [ ] Missing units → persistent yellow banner
- [ ] Integration-point fields not rendered, shown as greyed-out with warning
- [ ] Base coordinate array never modified during deformation display
- [ ] Upload >500MB rejected at nginx
- [ ] CSP headers present on all responses
- [ ] `X-Request-Id` present on all API responses
- [ ] Parse job audit logged: model_id, duration, counts, warnings
- [ ] `/health` and `/health/ready` functional
- [ ] CI pipeline green: lint, type-check, all tests, security scans
