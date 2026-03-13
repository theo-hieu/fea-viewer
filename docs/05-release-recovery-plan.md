# Release Recovery Plan

## Goal

Move the current FEA Viewer from `No-Go` to either:

- `Internal Test Release Go`
- `External Release Go`

This plan converts the audit blockers into concrete implementation, verification,
and re-audit steps. No item is considered closed without reproducible evidence
and automated verification.

## Current Release Gate

Current decision: `No-Go`

Reasons:

- P0: malformed parse jobs can remain stuck in `parsing`
- P0: `/fields/{fid}/data` binary contract is incompatible with the frontend
- P0: frontend FEA semantics are incorrect for elemental contour, element picking, and deformation fallback
- P1: metadata is not surfaced correctly
- P1: tree visibility/isolation is not wired to rendered meshes
- P1: health check, TLS, and nginx runtime/test config are inconsistent
- P1: release evidence is insufficient; only minimal-file chain was validated end to end

## Rules For This Recovery

- Do not relax validation to make failing paths appear green.
- Do not mark an item done based on manual clicking alone.
- Every config change must update runtime config, docs, and CI coverage together.
- Any unfinished chain must be marked `not fixed` or `not verified`.

## Phase 1: Close All P0 Blockers

### P0-1 Parse Failure Must Reach Terminal `error`

#### Implementation

1. Isolate VTU parsing from the Celery worker process.
2. Execute parsing in a controlled subprocess boundary.
3. Treat non-zero parse subprocess exit as a structured parse failure.
4. On any parse crash, worker crash, or `WorkerLostError`, force model state to:
   - `status=error`
   - `error_code=<machine-readable code>`
   - `error_message=<human-readable message>`
5. Preserve raw upload in object storage.
6. Emit a terminal progress event with `status=error`.

#### Suggested code areas

- [parse_task.py](/home/lev52808/projects/fea-viewer/backend/app/tasks/parse_task.py)
- [vtk_parser.py](/home/lev52808/projects/fea-viewer/backend/app/parsing/vtk_parser.py)
- [queue.py](/home/lev52808/projects/fea-viewer/backend/app/tasks/queue.py)
- [db.py](/home/lev52808/projects/fea-viewer/backend/app/models/db.py)

#### Verification

Add an end-to-end malformed VTU test that proves:

1. Upload returns `201`.
2. Status transitions to `error` within bounded time.
3. `error_code` and `error_message` are visible via `/status`.
4. Raw file still exists in MinIO.
5. No `models/{id}/...` artifacts are written.
6. UI shows a visible error instead of endless parsing.

#### Exit criteria

- No malformed VTU can remain in `parsing` beyond timeout.
- No worker hard exit leaves the model without terminal state.

### P0-2 Unify Field Binary Contract

#### Implementation

1. Replace negative-dimension field headers like `[-1, 3]` with concrete shapes.
2. Define a single contract for:
   - scalar nodal field
   - vector nodal field
   - scalar elemental field
3. Keep `dtype`, `shape`, and payload byte length mutually consistent.
4. Update frontend binary parsing only if contract changes require it.
5. Document the final contract in code comments and docs.

#### Suggested code areas

- [routes_models.py](/home/lev52808/projects/fea-viewer/backend/app/api/v1/routes_models.py)
- [client.ts](/home/lev52808/projects/fea-viewer/frontend/src/api/client.ts)
- [feaTypes.ts](/home/lev52808/projects/fea-viewer/frontend/src/utils/feaTypes.ts)

#### Verification

Add automated API-contract tests proving:

1. Backend returns valid shape headers for scalar contour data.
2. Backend returns valid shape headers for displacement vector data.
3. Frontend `fetchBinary()` accepts both payloads.
4. Decoded typed arrays have expected lengths and component counts.

#### Exit criteria

- Real field payloads from backend are consumable by frontend without special-case bypasses.

### P0-3 Fix Frontend FEA Semantics

#### Elemental contour

Implementation:

1. Stop assigning elemental values onto shared indexed vertices.
2. Use a dedicated surface representation for elemental rendering:
   - de-indexed triangles, or
   - split vertices per triangle, or
   - a per-triangle attribute strategy that preserves flat semantics.

Verification:

- Add tests showing adjacent triangles from different elements keep distinct values on shared geometric boundaries.

#### Element picking

Implementation:

1. Stop encoding element IDs on shared vertices.
2. Use the same per-triangle-safe geometry strategy as elemental contour for picking.

Verification:

- Add tests proving two adjacent triangles with shared coordinates but different source elements pick distinct IDs.

#### Deformation without contour

Implementation:

1. Add a deformation-capable default surface material or shader path.
2. Ensure deformation uses:
   - immutable base positions
   - displacement attribute
   - visible scale effect even when contour is disabled

Verification:

- Add a rendering-path test proving `deformed` mode changes rendered positions without requiring contour activation.

#### Suggested code areas

- [MeshManager.ts](/home/lev52808/projects/fea-viewer/frontend/src/three/MeshManager.ts)
- [ContourManager.ts](/home/lev52808/projects/fea-viewer/frontend/src/three/ContourManager.ts)
- [PickingManager.ts](/home/lev52808/projects/fea-viewer/frontend/src/three/PickingManager.ts)
- [useDeformEffect.ts](/home/lev52808/projects/fea-viewer/frontend/src/hooks/useDeformEffect.ts)
- [surfaceGeometry.ts](/home/lev52808/projects/fea-viewer/frontend/src/three/surfaceGeometry.ts)
- [contour.test.ts](/home/lev52808/projects/fea-viewer/frontend/tests/unit/contour.test.ts)

#### Exit criteria

- Elemental contour is semantically correct.
- Element picking is per-triangle accurate.
- Deformation remains visible when contour is off.

## Phase 2: Close P1 Engineering And Deployment Gaps

### P1-1 Restore Real Metadata In API And UI

#### Implementation

1. Read `properties.metadata` from persistence layer when serving `/metadata`.
2. Preserve units, filename, format, solver, and title end to end.
3. Ensure UI renders actual metadata instead of defaults whenever available.

#### Suggested code areas

- [db.py](/home/lev52808/projects/fea-viewer/backend/app/models/db.py)
- [routes_models.py](/home/lev52808/projects/fea-viewer/backend/app/api/v1/routes_models.py)
- [MetadataPanel.tsx](/home/lev52808/projects/fea-viewer/frontend/src/components/MetadataPanel.tsx)

#### Verification

- Add persistence-to-API tests.
- Add frontend test showing populated metadata panel values from real payload.

### P1-2 Wire ModelTree Visibility To Mesh State

#### Implementation

1. Connect `partVisibility` changes to `MeshManager.setPartVisible()`.
2. Connect isolate action to `MeshManager.isolatePart()`.
3. Add a restore/show-all path if isolate is reversible in UI.

#### Suggested code areas

- [ModelTree.tsx](/home/lev52808/projects/fea-viewer/frontend/src/components/ModelTree.tsx)
- [Viewport.tsx](/home/lev52808/projects/fea-viewer/frontend/src/components/Viewport.tsx)
- [viewStore.ts](/home/lev52808/projects/fea-viewer/frontend/src/store/viewStore.ts)
- [MeshManager.ts](/home/lev52808/projects/fea-viewer/frontend/src/three/MeshManager.ts)

#### Verification

- Add interaction tests that assert mesh visibility calls occur when tree actions are triggered.

### P1-3 Fix Health Checks, TLS, And Runtime/Test Config Drift

#### Implementation

1. Expose API health endpoints under the actual routed path:
   - `/api/v1/health`
   - `/api/v1/health/ready`
2. Route `/health` and `/health/ready` through nginx to the API, not the SPA.
3. Make the nginx config used by tests identical to runtime config.
4. Eliminate `deploy/nginx.conf` versus `nginx/nginx.conf` drift:
   - keep one source of truth, or
   - generate one from the other in CI.
5. Make HTTPS real:
   - listen on `443`
   - provide local certs or self-signed cert flow
   - verify `https://localhost` works

#### Suggested code areas

- [main.py](/home/lev52808/projects/fea-viewer/backend/app/main.py)
- [nginx.conf](/home/lev52808/projects/fea-viewer/nginx/nginx.conf)
- [docker-compose.yml](/home/lev52808/projects/fea-viewer/docker-compose.yml)
- [test_nginx_security.py](/home/lev52808/projects/fea-viewer/tests/integration/test_nginx_security.py)
- [README.md](/home/lev52808/projects/fea-viewer/README.md)

#### Verification

Add runtime-level tests proving:

1. `http://localhost/health` returns API JSON, not `index.html`.
2. `http://localhost/api/v1/health` returns API JSON.
3. `https://localhost` is reachable.
4. Security headers are present on runtime nginx responses.

### P1-4 Add Bootstrap Timeout And Visible Terminal Failure

#### Implementation

1. Add independent timeout for `ready -> bootstrap`.
2. Timeout must set a user-visible terminal error.
3. Distinguish parsing timeout from bootstrap timeout in message and logs.

#### Suggested code areas

- [Viewport.tsx](/home/lev52808/projects/fea-viewer/frontend/src/components/Viewport.tsx)
- [models.ts](/home/lev52808/projects/fea-viewer/frontend/src/api/models.ts)
- [App.tsx](/home/lev52808/projects/fea-viewer/frontend/src/App.tsx)

#### Verification

- Add test showing `Loading model...` cannot persist forever when geometry/panel fetch hangs.

### P1-5 Upgrade Release Evidence

#### Implementation

1. Add at least 10 reference files under a stable fixtures directory.
2. Cover:
   - minimal valid
   - mixed topology
   - nodal scalar
   - nodal vector3
   - elemental scalar
   - multi-timestep
   - no-results geometry-only
   - malformed
   - unsupported-but-valid-ish
   - stress/NaN edge case
3. Add a repeatable script that executes:
   - upload
   - poll to terminal state
   - fetch metadata/fields/nodes/surfaces
   - record result

#### Suggested layout

- `backend/tests/fixtures/`
- `frontend/tests/fixtures/`
- `scripts/`

#### Exit criteria

- Fixture set is versioned and reusable by CI and local re-audit.

## Phase 3: Re-Audit With Real Browser And Reference Files

### E2E Matrix

Minimum cases:

1. Minimal VTU with nodal scalar + nodal vector3.
2. Typical engineering VTU with elemental scalar.
3. Multi-field file with timestep switching.
4. Malformed VTU.
5. Parseable-but-unsupported scenario.
6. Geometry ready but field load failure scenario.
7. Bootstrap failure scenario.

### Browser Validation

Use at least one real browser automation path, preferably Playwright.

Required checks:

1. Upload succeeds and returns a model.
2. Status transitions to `ready` or `error`.
3. Ready model bootstraps without endless loading.
4. Mesh is visible.
5. Field selector populates correctly.
6. Nodal contour renders.
7. Elemental contour renders correctly on shared boundaries.
8. Deformation is visible with contour off.
9. Picking returns plausible node/element info.
10. Malformed upload shows terminal error in UI.

### Runtime Evidence To Collect

For each run, archive:

- browser console output
- API logs
- worker logs
- nginx logs
- model_id
- request-id sample
- screenshots for success and failure cases

## CI And Gate Updates

### Must-pass gates before re-review

Frontend:

- `npm run lint`
- `npm run typecheck`
- `npm test`
- browser E2E suite
- build

Backend:

- `pytest tests -q`
- parser crash regression test
- contract tests for field binary payloads
- runtime nginx/health tests
- `ruff`
- `mypy`

### Re-review gate

The project can only move out of `No-Go` when:

1. All current P0 items are closed.
2. No new P0 appears during re-audit.
3. Reference-file E2E suite passes.
4. Real browser rendering/picking/deformation checks pass.
5. Runtime deployment config matches tested config.

## Execution Order

Recommended order:

1. Parse terminal state
2. Field binary contract
3. Frontend FEA semantics
4. Metadata/tree wiring
5. Health/TLS/nginx source-of-truth
6. Bootstrap timeout
7. Reference fixtures and scripted regression
8. Real browser E2E
9. Final re-audit and new go/no-go

## Deliverables Required For Re-Audit

Before requesting a new release decision, produce:

1. A blocker closure table mapping old P0/P1 to:
   - fixed
   - not fixed
   - not verified
2. Command output or CI links for all mandatory gates.
3. Reference fixture run summary.
4. Browser E2E summary with screenshots.
5. Updated release recommendation:
   - `No-Go`
   - `Internal Test Release Go`
   - `External Release Go`

## Minimum Success State

If all P0 items are closed and P1 deployment/runtime issues are corrected, the
minimum target for the next review is:

- `Internal Test Release Go`

Only move to:

- `External Release Go`

after the browser E2E matrix, fixture coverage, and deployment/runtime evidence
are stable and repeatable.
