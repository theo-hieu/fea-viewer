# FEA Viewer — Execution Plan (Step 3, Part B)

> **Scope**: Security, error handling, risks, acceptance criteria, internal consistency check.

---

## 6. Security Requirements

| Requirement | Implementation | Phase |
|---|---|---|
| **File upload validation** | Max file size (500 MB MVP, configurable). MIME-type + magic-byte check. Reject executables, scripts, non-FEA files. | MVP |
| **Input sanitization** | All metadata strings sanitized before storage and display. No raw HTML rendering of user data. | MVP |
| **Rate limiting** | Upload endpoint: 10 requests/min per IP (nginx `limit_req`). API endpoints: 100 req/min. | MVP |
| **HTTPS only** | TLS termination at nginx. HSTS header. | MVP |
| **File isolation** | Uploaded files stored in per-model S3 prefix. No path traversal. Parser runs in sandboxed subprocess. | MVP |
| **Authentication** | JWT-based auth (OAuth2 / email+password). Session tokens with expiry. | Phase 2 |
| **Authorization** | Per-project RBAC: owner, editor, viewer. | Phase 2 |
| **Audit logging** | All uploads, deletions, shares logged with timestamp + user ID. | Phase 2 |
| **Data retention** | Configurable retention policy. Auto-delete after N days. | Phase 2 |
| **Dependency scanning** | `npm audit`, `pip-audit`, `trivy` container scanning in CI. | MVP |
| **CSP headers** | Strict Content-Security-Policy. No inline scripts. | MVP |

---

## 7. Error Handling & User-Visible Warning Strategy

### 7.1 Error Categories

| Category | Severity | User Experience | System Behavior |
|---|---|---|---|
| **Parse failure (corrupt file)** | Critical | Red banner: "File could not be parsed. [details]". Model status: `error`. | Log full stack trace. Preserve raw file for debugging. |
| **Partial parse (missing results)** | Warning | Yellow banner: "Geometry loaded. N result fields could not be parsed. [details for each]". | Parse what's possible. Skip bad fields. Log warnings. |
| **Unsupported element type** | Warning | Yellow badge next to affected part: "Contains unsupported element types (e.g., PYRAMID5). These elements are excluded from rendering." | Skip unsupported elements. Include in model tree with warning icon. |
| **Field dimension mismatch** | Warning | "Field 'Stress' has 4500 values but model has 5000 nodes. Field excluded." | Reject specific field. Other fields unaffected. |
| **NaN/Inf in results** | Info | "Field 'Stress' contains N NaN values. These are shown in grey." | Exclude from min/max range. Render as `nan_color`. |
| **Missing units** | Info | Persistent yellow banner: "Units not specified in source file." | Store as `unspecified`. No conversion. |
| **Upload too large** | Blocking | "File exceeds maximum size (500 MB)." | Reject at nginx level. No processing. |
| **WebGL failure** | Critical | "3D rendering is not available. Your browser may not support WebGL2." | Fallback: show metadata + text-based model summary only. |
| **Server error** | Critical | "An unexpected error occurred. Please try again or contact support." | Log error. Return 500. No partial state exposed. |

### 7.2 Warning Persistence

- **Critical errors**: Full-page error state. Cannot proceed.
- **Warnings**: Yellow banner at top of viewer, dismissible, with "N warnings" badge. Warning panel lists all with detail.
- **Info**: Shown in metadata panel. Not intrusive.

---

## 8. Observability & Auditability

| Requirement | Implementation |
|---|---|
| **Request tracing** | Unique `X-Request-Id` header propagated through API → worker → storage. |
| **Parse job audit** | Every parse job logged: model_id, start_time, end_time, node_count, element_count, field_count, warning_count, error (if any). |
| **Upload audit** | Every upload logged: file_name, file_size, source_ip, timestamp, model_id. |
| **Error alerting (Phase 2)** | Alert on: parse failure rate > 5%, API error rate > 1%, worker queue depth > 50. |
| **Dashboard (Phase 2)** | Grafana dashboard: upload volume, parse durations, active models, error rates. |

---

## 9. Top Technical Risks & Mitigations

| # | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| R1 | **VTK/meshio parser cannot handle edge-case files** | Medium | High | Maintain growing test corpus. Fallback: raw VTK Python bindings. Fuzzing with malformed files. |
| R2 | **WebGL performance insufficient for 500K elements** | Low | High | Benchmark early (week 5). Fallback: geometry simplification, frustum culling tuning. Escape hatch: server-side rendering to image tiles. |
| R3 | **Float32 precision loss corrupts contour display** | Medium | Medium | Store as Float64 on server. Only downcast for GPU upload. Probing always uses Float64. Test with extreme value ranges. |
| R4 | **Surface extraction is incorrect for complex topology** | Medium | Critical | Validate against analytical surface counts. Visual regression tests. Compare against ParaView screenshots. |
| R5 | **Browser memory exhaustion on large models** | Medium | High | Monitor `performance.memory`. Warn user at 1.5 GB. Refuse load at 2 GB. Phase 2: streaming/chunked loading. |
| R6 | **Integration-point extrapolation produces misleading values** | Medium | Critical | **MVP does not extrapolate.** Phase 2 extrapolation is always labeled. Validation against known analytical solutions. |
| R7 | **Proprietary format conversion fails silently** | Medium | High | Conversion is Phase 2+. Each conversion path has dedicated validation suite. Raw file always preserved. |
| R8 | **User misinterprets results due to missing context** | High | Critical | Provenance tracking on every field. Persistent unit/CS warnings. No silent transformations. |

---

## 10. Acceptance Criteria for Core Workflows

### AC-1: Upload & Parse

```gherkin
Given a valid VTK/VTU file with nodes, elements, and result fields
When the user uploads the file
Then the system returns a model_id within 2 seconds
And the parse job completes within (file_size_MB × 0.5) seconds
And the model status transitions to "ready"
And the metadata endpoint returns correct solver info, unit system, and element counts
And any parse warnings are returned in the warnings array
```

### AC-2: Render Surface Mesh

```gherkin
Given a parsed model with TET4 elements
When the 3D viewer loads
Then the exterior surface mesh is rendered as a solid shaded triangulated surface
And wireframe toggle shows element edges
And orbit/pan/zoom responds at ≥ 30 fps
And the surface has correct outward-facing normals (no inverted faces)
```

### AC-3: Scalar Contour

```gherkin
Given a model with a nodal scalar field "Temperature" ranging [100, 500]
When the user selects "Temperature" in the field selector
Then the mesh is colored using the viridis LUT
And the color legend shows min=100, max=500 with correct units
And probing a node shows the exact Float64 value from the source file
And NaN values (if any) are rendered in grey and excluded from the legend range
```

### AC-4: Deformed View

```gherkin
Given a model with a displacement vector field
When the user toggles "Deformed" view with scale factor 10.0
Then each vertex position is X_base + 10.0 * U_displacement
And the undeformed wireframe overlay (if enabled) shows original geometry
And switching to "Undeformed" restores original positions exactly
And the base coordinate array is never modified
```

### AC-5: Timestep Navigation

```gherkin
Given a model with 10 timesteps for field "Displacement"
When the user moves the timestep slider to step 5
Then the contour and deformation update to reflect step 5 data
And the timestep label shows the correct time value
And if the selected field has no data at step 5, a message "No data at this step" is shown
```

### AC-6: Probing

```gherkin
Given a rendered model
When the user clicks on a surface node
Then the info panel shows: node ID, coordinates (X, Y, Z), and all active field values at that node
And the displayed values match the source file values within ε = 1e-12
And if the user switches to element-pick mode and clicks a face, the element ID, type, connectivity, and elemental field values are shown
```

---

## 11. Internal Consistency Check

| Check | Status | Notes |
|---|---|---|
| Product scope (Step 1) aligns with architecture (Step 2)? | ✅ |Every MVP feature has a corresponding API endpoint, data model field, and rendering capability. |
| Data model supports all declared result locations? | ✅ | Nodal, elemental, integration-point — all represented in `ResultField.location`. |
| Surface extraction preserves volumetric data? | ✅ | Surface is derived; full element table retained (§6.3 of Part B). |
| Unit handling is consistent? | ✅ | Units stored on `ResultField` and `UnitSystem`. Missing units → warning banner. No silent conversion. |
| Deformation never modifies base coordinates? | ✅ | Stated in data model (§2.2), rendering pipeline (§6.2 MVP table), and acceptance criteria (AC-4). |
| Stress data is properly differentiated? | ✅ | `FieldProvenance` tracks extrapolation, averaging, coordinate system. Distinct `ResultField` per variant. |
| MVP timeline is achievable for assumed team? | ⚠️ | 12 weeks for 3–5 engineers is tight. **Risk**: surface extraction + GPU picking in same sprint may cause slippage. Mitigation: GPU picking can slip to week 12; probing is lower priority than rendering. |
| Phase 2 features have no MVP dependencies missing? | ✅ | All Phase 2 builds on MVP data model and API. No architectural changes required. |
| Security model is consistent? | ✅ | MVP: no auth, file validation + rate limiting. Phase 2: full auth/RBAC. No Phase 1 feature requires auth. |
| Rendering pipeline handles all MVP element types? | ✅ | TRI3, QUAD4, TET4, HEX8, WEDGE6 — all have face extraction rules defined. |
| No feature claims capability not supported by data model? | ✅ | Verified: every UI feature maps to a data model entity and API endpoint. |
| Assumption labels are consistent across documents? | ✅ | A1–A7 defined in Step 1, referenced in Steps 2 and 3. No orphaned assumptions. |

---

## 12. Document Map

| Document | File | Content |
|---|---|---|
| Step 1: Product Specification | `01-product-specification.md` | Problem, users, use cases, scope, blockers |
| Step 2A: Architecture & Data Model | `02a-system-architecture.md` | System diagram, data model, API, storage, parsing |
| Step 2B: Rendering & Deployment | `02b-rendering-observability.md` | 3D rendering, provenance, observability, deployment |
| Step 3A: Execution Plan | `03a-execution-plan.md` | Roadmap, features, DB schema, test strategy |
| Step 3B: Risks & Acceptance | `03b-risks-acceptance.md` | Security, errors, risks, acceptance criteria, consistency |
