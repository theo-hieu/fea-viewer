# FEA Viewer — Product & Technical Specification (Step 1)

> **Document status**: Implementation-ready specification
> **System boundary**: Viewer / inspector / post-processor. NOT a solver.
> **Date**: 2026-03-10

---

## 1. Problem Statement

Engineers produce FEA simulation results using commercial and open-source solvers (Abaqus, ANSYS, Nastran, CalculiX, OpenFOAM-coupled structural, Code_Aster, etc.). Reviewing those results today requires either the solver's own GUI (expensive, desktop-only, license-locked) or ad-hoc scripts. There is no production-grade, browser-based, solver-agnostic tool that lets engineers upload, inspect, and visualize FEA models and results with the correctness guarantees required for engineering decision support.

**This application solves that problem.** It ingests externally produced FEA datasets, normalizes them into an unambiguous internal representation, and renders them for interactive inspection in a browser — without modifying the simulation, re-solving, or silently transforming data.

---

## 2. User Roles

| Role | Description | MVP? |
|---|---|---|
| **Analysis Engineer** | Uploads results, inspects contours, probes values, compares load cases. Primary user. | Yes |
| **Design Engineer** | Views shared results, inspects geometry and deformation, exports screenshots. Read-mostly. | Yes |
| **Project Lead / Reviewer** | Reviews results for sign-off. Needs provenance, metadata, audit trail. | Yes |
| **Admin** | Manages users, storage quotas, retention policies. | Phase 2 |

---

## 3. Core Use Cases (MVP)

### 3.1 Upload & Ingest

| Aspect | Detail |
|---|---|
| **Engineering value** | Eliminates per-seat license cost for result review; enables remote/async review. |
| **Interaction** | User uploads file(s) via drag-drop or file picker. System parses, validates, normalizes. User sees progress, warnings, and a final model tree. |
| **Data required** | Raw file bytes; parser produces: nodes, elements, connectivity, parts, sets, results, metadata. |
| **Failure modes** | Unsupported format → reject with message. Partial parse → ingest geometry, warn about missing results. Corrupt file → reject. Oversized file → reject with quota message. |

**Supported file types (MVP — first-class)**:

| Format | Rationale |
|---|---|
| **VTK / VTU (XML-based)** | Open, well-documented, widely exported. Supports unstructured grids, point/cell data, time series. |
| **Exodus II (.exo, .e)** | NetCDF-based, used by Sandia codes, CalculiX exports via ccx2exo, rich metadata. |
| **CGNS** | ISO/AIAA standard for CFD/FEA, HDF5-based, supports structured/unstructured. |

**Import-through-conversion (Phase 2)**:

| Format | Strategy |
|---|---|
| **Abaqus ODB** | Server-side conversion via `abaqus python` or `odbAccess` → VTK/Exodus. Requires Abaqus license on server. |
| **ANSYS RST** | Conversion via `pymapdl` or `ansys-dpf-core` → VTK. Requires license. |
| **Nastran OP2** | Conversion via `pyNastran` (open-source) → VTK. |
| **CalculiX FRD** | Conversion via `ccx2paraview` or direct parser → VTK. |

**Out of scope**: Proprietary binary formats without documented spec or open-source parser. Solver input decks (no results). CAD formats (STEP, IGES) — these are geometry, not FEA results.

### 3.2 Model Inspection

| Aspect | Detail |
|---|---|
| **Engineering value** | Verify mesh quality, connectivity, part decomposition before trusting results. |
| **Interaction** | Model tree panel showing: assembly → instances → parts → sets. Click to highlight. Probe node/element by ID. Query element type, connectivity, coordinates. |
| **Data required** | Node table (ID → coordinates), element table (ID → type + connectivity), part/instance/set membership. |
| **Failure modes** | Missing part names → show as "Unnamed Part [index]". Duplicate node IDs in source → reject file with error. |

### 3.3 Result Visualization

| Aspect | Detail |
|---|---|
| **Engineering value** | Core value proposition: see stress, strain, displacement, temperature, etc. as contour plots on the mesh. |
| **Interaction** | Select result field from dropdown (organized: displacement → U1/U2/U3/Umag; stress → S11/S22/…/von Mises). Contour map renders on visible surfaces. Color legend with min/max. Probe value at node/element. |
| **Data required** | Result field arrays keyed by (field_name, component, location, timestep). Color map parameters. |
| **Failure modes** | Field has NaN/Inf → display warning badge, exclude from range calculation, render as grey. Field declared as nodal but array length ≠ node count → reject field with warning. |

**Result location handling — critical correctness requirement:**

| Location | Meaning | Visualization strategy |
|---|---|---|
| **Nodal** | One value per node per field component. | Direct interpolation across element faces. Native. |
| **Elemental (constant)** | One value per element. | Flat shading per element face. No interpolation. |
| **Elemental (integration-point)** | Values at Gauss points inside elements. | Extrapolate to nodes using element shape functions → mark as "extrapolated" in UI. **Never** silently present as native nodal data. |

> [!CAUTION]
> Integration-point to nodal extrapolation is an approximation. The UI must label such fields as "Extrapolated from integration points" and display a warning icon. Averaging at shared nodes between elements must use documented strategy (simple average for MVP, with warning).

### 3.4 Timestep / Load-Case / Mode-Shape Switching

| Aspect | Detail |
|---|---|
| **Engineering value** | Review transient results, compare load cases, inspect mode shapes. |
| **Interaction** | Timestep slider or dropdown. Animate button for transient playback. Modal analysis shows frequency + mode shape. Load case selector for multi-load-case static. |
| **Data required** | Time/step index → result field mapping. Modal frequencies. Load case labels. |
| **Failure modes** | Timestep has no results for selected field → show "No data at this step" rather than last-known-good (which would mislead). Non-monotonic time values → warn but accept. |

### 3.5 Deformed vs. Undeformed Display

| Aspect | Detail |
|---|---|
| **Engineering value** | Visualize structural deformation; compare deformed shape to original. |
| **Interaction** | Toggle: undeformed / deformed / overlay. Scale factor input (default 1.0, allow 0–10000). Deformation field selector (default: displacement if available). |
| **Data required** | Base node coordinates (immutable). Displacement/deformation vector field. |
| **Failure modes** | Displacement field has wrong length → reject deformation for that field with warning. Scale factor causes coordinates to overflow Float32 → clamp and warn. |

> [!IMPORTANT]
> **Base geometry and deformation fields must never be conflated.** The internal data model stores original coordinates separately. Deformed coordinates are computed as `X_deformed = X_base + scale * U` at render time, never saved back to the base coordinate array.

### 3.6 Set / Group Navigation

| Aspect | Detail |
|---|---|
| **Engineering value** | Inspect specific regions (bolt holes, welds, constraints) by named sets. |
| **Interaction** | Tree panel lists node sets and element sets. Click to highlight/isolate. "Show only" to hide everything else. |
| **Data required** | Set name → member IDs (node IDs or element IDs). |
| **Failure modes** | Set references non-existent IDs → warn, show valid members only. |

### 3.7 Metadata Inspection

| Aspect | Detail |
|---|---|
| **Engineering value** | Provenance: which solver, version, date, units, job name, analysis type. |
| **Interaction** | Info panel showing all metadata extracted from file. Non-editable. |
| **Data required** | Key-value metadata from file header. |
| **Failure modes** | Missing metadata → show "Not specified" per field. Never fabricate. |

---

## 4. Non-Goals (Explicit)

1. **Solving** — This application does not solve FEA problems. No stiffness assembly, no equation solving, no meshing.
2. **Mesh generation / editing** — No mesh manipulation, refinement, or repair.
3. **CAD import** — No STEP/IGES/Parasolid geometry import. Only FEA result data.
4. **Real-time collaboration editing** — No simultaneous multi-user editing of views (Phase 2 may add shared view links).
5. **Solver-specific pre-processing** — No boundary condition setup, load definitions, material assignment.

---

## 5. MVP vs. Later-Phase Scope

### MVP (Phase 1)

- Upload VTK/VTU files (single and multi-block)
- Parse nodes, elements, point data, cell data
- 3D rendering: surface mesh, wireframe toggle, scalar contours
- Color legend with auto-range and user-adjustable range
- Timestep switching for time-series VTK
- Deformed/undeformed toggle with scale factor
- Node/element probing (click to query ID + values)
- Part/set tree navigation with show/hide/isolate
- Metadata panel
- Single-user, single-session (no auth)
- Performance target: 500K elements interactive at 30 fps

### Phase 2

- Exodus II and CGNS support
- User authentication and project management
- ODB/RST/OP2 conversion pipeline (server-side)
- Vector glyph rendering
- Section cuts / clipping planes
- Screenshot and report export (PNG + PDF)
- Integration-point extrapolation with labeled warnings
- Shared view links (read-only)
- Performance target: 2M elements

### Phase 3 (Advanced)

- Tensor glyph rendering (ellipsoids)
- Multi-model comparison (overlay / side-by-side)
- Animation export (MP4/GIF)
- Custom derived fields (user expressions: e.g., `von_mises(S)`)
- API access for CI/CD integration (automated result checking)
- Admin panel with quotas, retention, audit logs

---

## 6. Blocked / Missing Information

| Item | Impact | Assumption Used |
|---|---|---|
| **Target deployment environment** | Affects storage, compute, scaling decisions. | **ASSUMPTION A1**: Cloud deployment (AWS/GCP/Azure), containerized. Can be revised to on-prem. |
| **Maximum expected model size** | Affects memory budgets, chunking strategy. | **ASSUMPTION A2**: MVP targets up to 500K elements; Phase 2 targets 2M. Models >5M require explicit scoping. |
| **User authentication requirements** | Affects Phase 1 scope. | **ASSUMPTION A3**: MVP ships without auth (localhost / trusted network). Phase 2 adds auth. |
| **Regulatory / compliance requirements** | Affects audit logging depth, data retention. | **ASSUMPTION A4**: No formal regulatory compliance (e.g., FDA, DO-178C) required in initial release. Audit logging is best-effort. |
| **Team size and skill profile** | Affects timeline estimates. | **ASSUMPTION A5**: Team of 3–5 engineers with WebGL, Python/Rust, and FEA domain experience. |
| **Budget for proprietary solver licenses on server** | Affects ODB/RST conversion feasibility. | **ASSUMPTION A6**: No solver licenses available for MVP. Conversion features deferred to Phase 2. |
