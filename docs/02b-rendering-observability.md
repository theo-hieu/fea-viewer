# FEA Viewer — Rendering, Observability & Deployment (Step 2, Part B)

> **Scope**: Browser rendering pipeline, visualization correctness, provenance safety, observability, deployment.

---

## 6. Browser Rendering Pipeline

### 6.1 Architecture

```
┌──────────────────────────────────────────────────────────┐
│  Rendering Layer (Three.js + custom shaders)              │
│                                                          │
│  SceneManager                                            │
│  ├── MeshGroup (per part/instance)                       │
│  │   ├── BufferGeometry (position, normal, index)        │
│  │   ├── ColorAttribute (per-vertex scalar → color map)  │
│  │   └── WireframeGeometry (optional overlay)            │
│  ├── GlyphGroup (vector arrows — Phase 2)                │
│  ├── ClipPlanes[] (section cuts — Phase 2)               │
│  ├── PickingScene (ID-encoded color buffer)              │
│  └── Overlay (axes, legend, annotations)                 │
│                                                          │
│  DataManager                                             │
│  ├── GeometryStore (Float32 positions, Int32 indices)    │
│  ├── FieldStore (active field Float32, color LUT)        │
│  └── DeformationStore (displacement Float32 + scale)     │
└──────────────────────────────────────────────────────────┘
```

### 6.2 Rendering Features — MVP

| Feature | Implementation | Notes |
|---|---|---|
| **Surface mesh** | Indexed `BufferGeometry` from pre-extracted triangles. Custom `MeshPhongMaterial` for shading. | Primary view. |
| **Wireframe overlay** | `LineSegments` from edge extraction. Toggle on/off. | Uses `EdgesGeometry` or custom edge buffer. |
| **Scalar contours** | Per-vertex color attribute mapped through LUT (color lookup table). | Vertex shader samples LUT texture. Smooth interpolation for nodal data; flat for elemental. |
| **Color legend** | HTML overlay (`<canvas>` or DOM). Shows field name, component, min/max, units. | Not a 3D object — avoids depth/clipping issues. |
| **Deformation** | Vertex shader: `position = base_position + u_scale * displacement`. Uniform `u_scale`. | Base and displacement are separate `BufferAttribute`s. Never summed on CPU. |
| **Orbit/pan/zoom** | `OrbitControls` from Three.js. | Standard. |
| **Node/element picking** | GPU picking: render to off-screen framebuffer with ID-encoded colors. Read pixel at click → decode ID. | Avoids raycasting (too slow for large meshes). |
| **Show/hide parts** | Set `mesh.visible = false` per part group. | Instant. No GPU re-upload. |
| **Isolate set** | Hide all meshes, then show only elements in selected set. Requires per-set index buffers or draw-range manipulation. | May require re-building index buffer for arbitrary sets. |

### 6.3 Handling Volumetric Data for Visualization

Volumetric elements (TET4, HEX8, WEDGE6, etc.) cannot be rendered as-is in WebGL (no volume rendering in MVP). The strategy:

1. **Surface extraction** (server-side, during parse): Extract exterior skin mesh → triangle index buffer.
2. **Elemental results on surfaces**: For cell data, each surface triangle inherits the scalar value of its parent volumetric element. This is stored as a mapping: `surface_tri_index → source_element_index`.
3. **Nodal results on surfaces**: Surface nodes are a subset of volume nodes; values transfer directly (no transformation needed, just index remapping).
4. **Interior inspection** (Phase 2): Clipping planes will reveal interior faces, dynamically extracted and rendered.

> [!IMPORTANT]
> The surface extraction step **does not discard volumetric data**. The full element table remains in the model store. Surface triangles are a derived view used exclusively for rendering. Probing always queries the full element/node table.

### 6.4 Color Mapping (Scalar → Color)

```typescript
interface ColorMapConfig {
  lut_name: "rainbow" | "viridis" | "coolwarm" | "jet" | "grayscale";
  min_value: number;        // Auto from data or user override
  max_value: number;
  n_colors: 256;            // LUT resolution
  nan_color: [0.5, 0.5, 0.5, 0.3];  // Grey semi-transparent for NaN/missing
  above_range_color: [1, 0, 1, 1];   // Magenta for above-max
  below_range_color: [0, 0, 1, 1];   // Blue for below-min
  scale: "linear" | "log";
}
```

- Default LUT: `viridis` (perceptually uniform, colorblind-safe).
- `jet` available but UI shows warning: "Jet colormap is not perceptually uniform."

### 6.5 Large-Model Performance Strategy

**Target**: 500K elements at 30fps (MVP), 2M elements at 30fps (Phase 2).

| Technique | Description |
|---|---|
| **Geometry instancing** | If multiple instances share the same part, use `InstancedMesh`. |
| **Index buffer sharing** | All triangles of a part in one draw call. Minimize draw calls. |
| **LOD (Phase 2)** | Decimated meshes for zoom-out. Switch at distance thresholds. |
| **Frustum culling** | Three.js built-in. Per-mesh bounding sphere check. |
| **Web Workers for parsing** | Parse binary ArrayBuffers on worker thread. Main thread stays responsive. |
| **Lazy field loading** | Result data loaded only for active field + active timestep. Not all fields resident. |
| **Float32 for GPU** | All GPU-bound data is Float32. Float64 stays on CPU for precision-critical operations (probing, coordinate queries). |
| **Transfer via SharedArrayBuffer** | Where supported, avoid copying between worker and main thread. Fallback: `Transferable` ArrayBuffers. |

**Performance budget (MVP)**:

| Metric | Target |
|---|---|
| Initial load (500K tri mesh, geometry only) | < 3 seconds |
| Field switch (load new scalar array) | < 500ms |
| Timestep switch | < 500ms |
| Orbit/zoom frame rate | ≥ 30 fps |
| GPU memory | < 1 GB |
| CPU memory (tab) | < 2 GB |

### 6.6 Selection & Picking (Detail)

**GPU ID-picking approach**:

1. Assign each node a unique 24-bit integer ID.
2. Render the scene to an off-screen `WebGLRenderTarget` with a flat shader that encodes ID as RGB.
3. On click, `readPixels` at cursor position → decode ID.
4. Look up node/element in `NodeTable`/`ElementTable` → display in info panel.

For element picking: encode element ID (not node ID) in the face color.
Toggle between node-pick and element-pick modes via toolbar.

---

## 7. Provenance & Safety Guarantees

### 7.1 Unit Confusion Prevention

- Every `ResultField` carries a `unit` field. If the source file specifies units, they are recorded.
- If units are unspecified, the system does **not** guess. A persistent banner reads: *"Units not declared. Values shown without unit context."*
- Unit conversion is **not** performed automatically. If a user requests unit display change (Phase 2), the conversion factor and formula are shown.

### 7.2 Coordinate System Safety

- All vector/tensor fields carry a `coordinate_system` reference in `FieldProvenance`.
- If the source file uses a local coordinate system for results, the system records this and labels the field: *"Values in coordinate system: [name]"*.
- Coordinate transformations are **not** performed silently. If transformation is needed (Phase 2), it requires explicit user action and is logged.

### 7.3 Data Transformation Transparency

Every derived quantity displays its lineage:
- "von Mises stress — derived from symmetric stress tensor [S11, S22, S33, S12, S13, S23]"
- "Nodal stress (averaged) — extrapolated from integration points, simple average at shared nodes"
- "Displacement magnitude — computed as sqrt(U1² + U2² + U3²)"

---

## 8. Observability

### 8.1 Logging

| Layer | Tool | What is logged |
|---|---|---|
| API server | Structured JSON logs (structlog) | All requests, response times, error codes, model IDs |
| Parse workers | Same | Parse start/end, element counts, warnings generated, parse duration |
| Frontend | Browser console + optional telemetry endpoint | WebGL errors, performance marks, user actions |

### 8.2 Metrics (Phase 2)

- Prometheus metrics exported from FastAPI (`prometheus-fastapi-instrumentator`).
- Key metrics: request latency p50/p95/p99, parse job duration, upload size distribution, active model count, WebGL error rate.

### 8.3 Health Checks

```
GET /health          → { status: "ok", db: "ok", redis: "ok", storage: "ok" }
GET /health/ready    → 200 if all dependencies reachable
```

---

## 9. Deployment

### 9.1 Containerization

```
docker-compose.yml
├── nginx          (reverse proxy, static frontend, TLS termination)
├── api            (FastAPI, Uvicorn, 2+ workers)
├── worker         (Celery worker, 2+ instances)
├── postgres       (database)
├── redis          (queue + cache)
└── minio          (S3-compatible object store, dev/on-prem)
```

### 9.2 Production (Cloud)

- API + Workers: Kubernetes pods with HPA (CPU-based autoscaling).
- Database: Managed PostgreSQL (RDS/Cloud SQL).
- Storage: S3 / GCS.
- Redis: Managed Redis (ElastiCache / Memorystore).
- CDN: CloudFront / Cloud CDN for static frontend assets.
- TLS: Managed certificates (ACM / Let's Encrypt).

### 9.3 Development

- `docker-compose up` for full local stack.
- Frontend dev server: `vite` with HMR.
- Backend dev server: `uvicorn --reload`.

---

## 10. Technology Alternatives Considered

| Decision | Chosen | Alternatives Rejected | Rationale |
|---|---|---|---|
| 3D engine | Three.js | Babylon.js, VTK.js | Three.js: smaller bundle, more flexible shaders, larger community. VTK.js: heavier, opinionated for medical imaging. Babylon.js: game-oriented, unnecessary features. |
| Backend lang | Python | Rust, Go, Node.js | Python: best scientific ecosystem (VTK, meshio, numpy, h5py). Parse performance addressed via numpy vectorization and Celery workers. Rust considered for parser, may be introduced in Phase 3. |
| Binary format | Raw typed arrays over HTTP | Protocol Buffers, FlatBuffers, Arrow IPC | Raw arrays: zero deserialization cost in browser (`new Float32Array(buffer)`). Protobuf adds schema overhead unnecessary for flat numeric arrays. Arrow IPC: viable future optimization. |
| State management | Zustand | Redux, MobX, Jotai | Zustand: minimal boilerplate, supports transient updates (critical for animation), excellent TypeScript support. Redux: too much ceremony for this use case. |
| DB | PostgreSQL | MongoDB, SQLite | Postgres: ACID, relational integrity for project/model metadata, JSONB for flexible metadata. MongoDB: unnecessary for structured data. SQLite: not suitable for multi-worker production. |
