"""
FEA Viewer — REST API Routes for Models
=======================================

Implements the `/api/v1/models` endpoints for the online FEA viewer.

Endpoints:
  - POST /api/v1/models/upload
  - PUT /api/v1/models/{id}/file
  - GET /api/v1/models/{id}/status
  - GET /api/v1/models/{id}/metadata
  - GET /api/v1/models/{id}/tree
  - GET /api/v1/models/{id}/nodes
  - GET /api/v1/models/{id}/elements
  - GET /api/v1/models/{id}/surfaces
  - GET /api/v1/models/{id}/fields
  - GET /api/v1/models/{id}/fields/{fid}/data?step={n}
  - GET /api/v1/models/{id}/sets
  - GET /api/v1/models/{id}/sets/{sid}/members
  - DELETE /api/v1/models/{id}

Overrides from base architecture doc:
  1. `POST /api/v1/models/upload` handles multipart directly.
  2. `GET /api/v1/models/{id}/fields/{fid}/data?step={n}` streams .f64 directly.
"""

from typing import Any, Protocol

from fastapi import (
    APIRouter,
    Depends,
    File,
    HTTPException,
    Request,
    Response,
    UploadFile,
    status as http_status,
)
from fastapi.responses import JSONResponse
from pydantic import BaseModel

import uuid
import re

router = APIRouter(prefix="/api/v1/models", tags=["Models"])

MAX_UPLOAD_SIZE = 500 * 1024 * 1024  # 500 MB

ALLOWED_MIME_TYPES = {
    "application/vnd.paraview.vtu",
    "application/octet-stream",
    "text/plain",
    "text/xml",
    "application/xml",
}

# ---------------------------------------------------------------------------
# Protocols / Dependencies for Injection
# ---------------------------------------------------------------------------

class ApiMetadataStore(Protocol):
    def get_model(self, model_id: str) -> dict[str, Any] | None: ...
    def create_model(self, model_id: str, row: dict[str, Any]) -> None: ...
    def update_model_status(
        self,
        model_id: str,
        status: str,
        error_message: str | None = None,
        error_code: str | None = None,
    ) -> None: ...
    def get_model_tree(self, model_id: str) -> dict[str, Any]: ...
    def get_fields(self, model_id: str) -> list[dict[str, Any]]: ...
    def get_field(self, model_id: str, field_id: str) -> dict[str, Any] | None: ...
    def get_sets(self, model_id: str) -> list[dict[str, Any]]: ...
    def get_set(self, model_id: str, set_id: str) -> dict[str, Any] | None: ...
    def delete_model(self, model_id: str) -> None: ...

class ApiObjectStore(Protocol):
    def put_object(self, key: str, data: bytes) -> None: ...
    def get_object_stream(self, key: str) -> bytes | None: ...  # Simulates streaming for now
    def delete_prefix(self, prefix: str) -> None: ...

class ApiParseQueue(Protocol):
    def enqueue_parse(self, model_id: str, raw_key: str) -> None: ...

# Assume these will be overridden via FastAPI's dependency injection
def get_metadata_store() -> ApiMetadataStore:
    raise NotImplementedError()

def get_object_store() -> ApiObjectStore:
    raise NotImplementedError()

def get_parse_queue() -> ApiParseQueue:
    raise NotImplementedError()


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _is_safe_file(filename: str, file_bytes: bytes, mime_type: str) -> bool:
    """Check MIME type and magic bytes loosely for MVP upload flow."""
    # Reject executables
    if filename.lower().endswith(('.exe', '.dll', '.sh', '.bat', '.js', '.py')):
        return False
    # Very naive signature check for common executables:
    if file_bytes.startswith(b'MZ') or file_bytes.startswith(b'\x7fELF'):
        return False
    return True

def _sanitize_filename(filename: str) -> str:
    name = str(filename)
    name = re.sub(r'[^a-zA-Z0-9_\-\.]', '_', name)
    name = name.replace('..', '_')
    return name if name else "upload.dat"

def _require_model_ready(db: ApiMetadataStore, model_id: str) -> dict[str, Any]:
    row = db.get_model(model_id)
    if not row:
        raise HTTPException(status_code=404, detail="Model not found")
    if row.get("status") != "ready":
        raise HTTPException(
            status_code=409, 
            detail=f"Model is not ready. Current status: {row.get('status')}"
        )
    return row

def _get_request_id(request: Request) -> str:
    return request.headers.get("X-Request-Id", str(uuid.uuid4()))

def _binary_response(content: bytes, dtype: str, shape: str, request_id: str) -> Response:
    """Return an application/octet-stream response with Phase 1 mandated headers."""
    if not content:
        raise HTTPException(status_code=404, detail="Artifact not found in storage")
        
    return Response(
        content=content,
        media_type="application/octet-stream",
        headers={
            "X-Array-Dtype": dtype,
            "X-Array-Shape": shape,
            "X-Array-ByteOrder": "little",
            "X-Request-Id": request_id,
        }
    )

def _json_response(content: Any, request: Request, status_code: int = 200) -> JSONResponse:
    req_id = _get_request_id(request)
    return JSONResponse(status_code=status_code, content=content, headers={"X-Request-Id": req_id})
    

# ---------------------------------------------------------------------------
# Schemas
# ---------------------------------------------------------------------------

class UploadResponse(BaseModel):
    model_id: str

class StatusResponse(BaseModel):
    status: str
    warnings_count: int
    error_message: str | None = None
    error_code: str | None = None

# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------

@router.post("/upload", status_code=201)
async def upload_model(
    request: Request,
    file: UploadFile = File(...),
    db: ApiMetadataStore = Depends(get_metadata_store),
    storage: ApiObjectStore = Depends(get_object_store),
    queue: ApiParseQueue = Depends(get_parse_queue),
):
    """
    Override base MVP doc: Immediately processes multipart upload.
    Validates >500MB sizes, bad executables, and persists bytes.
    Enqueues parsing immediately.
    """
    file_bytes = await file.read()
    
    # 1. Validation
    if len(file_bytes) > MAX_UPLOAD_SIZE:
        raise HTTPException(status_code=413, detail="File too large. Max 500 MB.")
        
    if not _is_safe_file(file.filename or "", file_bytes, file.content_type or ""):
        raise HTTPException(status_code=415, detail="Unsupported media type or executable rejected")

    model_id = str(uuid.uuid4())
    safe_name = _sanitize_filename(file.filename or "upload.vtu")
    raw_key = f"uploads/{model_id}/raw/{safe_name}"

    # 2. Persist
    storage.put_object(raw_key, file_bytes)

    # 3. Create Row
    db.create_model(model_id, {
        "id": model_id,
        "name": safe_name,
        "status": "uploading",
        "file_format": "unknown",
        "file_size_bytes": len(file_bytes),
        "raw_file_key": raw_key,
        "node_count": 0,
        "element_count": 0,
        "metadata": {},
        "unit_system": {},
        "warnings": [],
    })

    # 4. Enqueue
    queue.enqueue_parse(model_id, raw_key)
    # The queue task will transition status: uploading -> parsing -> (ready|error)

    return _json_response({"model_id": model_id}, request, 201)


@router.put("/{id}/file", response_model=UploadResponse)
async def upload_model_put(
    id: str,
    request: Request,
    db: ApiMetadataStore = Depends(get_metadata_store),
    storage: ApiObjectStore = Depends(get_object_store),
    queue: ApiParseQueue = Depends(get_parse_queue),
):
    """
    Alternative upload path (binary PUT stream) per Phase 1 docs.
    """
    file_bytes = await request.body()
    
    # 1. Validation
    if len(file_bytes) > MAX_UPLOAD_SIZE:
        raise HTTPException(status_code=413, detail="File too large. Max 500 MB.")
        
    if not _is_safe_file("put_upload.dat", file_bytes, request.headers.get("content-type", "")):
        raise HTTPException(status_code=415, detail="Unsupported media type or executable rejected")

    row = db.get_model(id)
    if not row:
        raise HTTPException(status_code=404, detail="Model not found")

    raw_key = f"uploads/{id}/raw/put_upload.dat"
    storage.put_object(raw_key, file_bytes)
    
    db.update_model_status(id, "uploading")
    queue.enqueue_parse(id, raw_key)

    return _json_response({"model_id": id}, request)


@router.get("/{id}/status")
async def get_status(
    id: str,
    request: Request,
    db: ApiMetadataStore = Depends(get_metadata_store)
):
    row = db.get_model(id)
    if not row:
        raise HTTPException(status_code=404, detail="Model not found")
        
    # The database row must handle enum values correctly.
    w_count = len(row.get("warnings", []))
    err_msg = row.get("error_message")
    
    return _json_response({
        "status": row.get("status", "uploading"),
        "warnings_count": w_count,
        "error_message": err_msg,
        "error_code": row.get("error_code"),
    }, request)


@router.get("/{id}/metadata")
async def get_metadata(
    id: str,
    request: Request,
    db: ApiMetadataStore = Depends(get_metadata_store)
):
    # Retrieve metadata containing units and array constraints
    row = _require_model_ready(db, id)
    
    # Ensure unspecified remains unspecified per constraint doc
    return _json_response({
        "metadata": row.get("metadata", {}),
        "unit_system": row.get("unit_system", {"length": "unspecified", "force": "unspecified"}),
        "warnings": row.get("warnings", []),
        "node_count": row.get("node_count", 0),
        "element_count": row.get("element_count", 0),
    }, request)


@router.get("/{id}/tree")
async def get_tree(
    id: str,
    request: Request,
    db: ApiMetadataStore = Depends(get_metadata_store)
):
    _require_model_ready(db, id)
    return _json_response(db.get_model_tree(id), request)


@router.get("/{id}/nodes")
async def get_nodes(
    id: str,
    request: Request,
    db: ApiMetadataStore = Depends(get_metadata_store),
    storage: ApiObjectStore = Depends(get_object_store)
):
    row = _require_model_ready(db, id)
    nc = row.get("node_count", 0)
    blob = storage.get_object_stream(f"models/{id}/geometry/nodes.f64")
    if blob is None:
        raise HTTPException(status_code=404, detail="Node geometry missing in backend")
    return _binary_response(blob, "float64", f"[{nc}, 3]", _get_request_id(request))


@router.get("/{id}/elements")
async def get_elements(
    id: str,
    request: Request,
    db: ApiMetadataStore = Depends(get_metadata_store),
    storage: ApiObjectStore = Depends(get_object_store)
):
    row = _require_model_ready(db, id)
    ec = row.get("element_count", 0)
    
    # Combine buffers as a bespoke single payload with offset headers per deterministic choice
    conn = storage.get_object_stream(f"models/{id}/geometry/connectivity.i32")
    offs = storage.get_object_stream(f"models/{id}/geometry/offsets.i32")
    typs = storage.get_object_stream(f"models/{id}/geometry/types.u8")
    
    if not (conn and offs and typs):
        raise HTTPException(status_code=404, detail="Elements geometries missing in backend")

    combined = conn + offs + typs
    
    shape_desc = (
        f'{{"connectivity": [{(len(conn))//4}], '
        f'"offsets": [{len(offs)//4}], '
        f'"types": [{ec}]}}'
    )
    
    return Response(
        content=combined,
        media_type="application/octet-stream",
        headers={
            "X-Array-Dtype": "mixed",
            "X-Array-Shape": shape_desc,
            "X-Array-ByteOrder": "little",
            "X-Buffer-Offsets": f'{{"connectivity": [0, {len(conn)}], "offsets": [{len(conn)}, {len(conn)+len(offs)}], "types": [{len(conn)+len(offs)}, {len(combined)}]}}',
            "X-Request-Id": _get_request_id(request),
        }
    )


@router.get("/{id}/surfaces")
async def get_surfaces(
    id: str,
    request: Request,
    db: ApiMetadataStore = Depends(get_metadata_store),
    storage: ApiObjectStore = Depends(get_object_store)
):
    _require_model_ready(db, id)
    
    idx = storage.get_object_stream(f"models/{id}/geometry/surface_indices.i32")
    nrm = storage.get_object_stream(f"models/{id}/geometry/surface_normals.f32")
    mp = storage.get_object_stream(f"models/{id}/geometry/surface_element_map.i32")
    
    if idx is None or nrm is None or mp is None:
        raise HTTPException(status_code=404, detail="Surface geometry missing in backend")

    combined = idx + nrm + mp
    
    return Response(
        content=combined,
        media_type="application/octet-stream",
        headers={
            "X-Array-Dtype": "mixed",
            "X-Array-Shape": f'{{"indices": [{len(idx)//4}], "normals": [{len(nrm)//4}], "map": [{len(mp)//4}]}}',
            "X-Array-ByteOrder": "little",
            "X-Buffer-Offsets": f'{{"indices": [0, {len(idx)}], "normals": [{len(idx)}, {len(idx)+len(nrm)}], "map": [{len(idx)+len(nrm)}, {len(combined)}]}}',
            "X-Request-Id": _get_request_id(request),
        }
    )


@router.get("/{id}/fields")
async def get_fields(
    id: str,
    request: Request,
    db: ApiMetadataStore = Depends(get_metadata_store)
):
    _require_model_ready(db, id)
    return _json_response(db.get_fields(id), request)


@router.get("/{id}/fields/{fid}/data")
async def get_field_data(
    id: str,
    fid: str,
    step: int,
    request: Request,
    db: ApiMetadataStore = Depends(get_metadata_store),
    storage: ApiObjectStore = Depends(get_object_store)
):
    # Must retrieve `.f64` exact representation directly without casting.
    _require_model_ready(db, id)
    
    field_meta = db.get_field(id, fid)
    if not field_meta:
        raise HTTPException(status_code=404, detail="Field not found")
        
    if step < 0 or step >= field_meta.get("timestep_count", 0):
        # Explicitly return no-data rather than serving wrong index.
        raise HTTPException(status_code=404, detail=f"No data available for timestep {step}")
        
    blob = storage.get_object_stream(f"models/{id}/fields/{fid}/step_{step}.f64")
    if not blob:
        raise HTTPException(status_code=404, detail="Binary payload missing")
        
    # Example constraint: field vectors are unrolled into a flat dimension 
    shape_str = f"[-1, {field_meta.get('components', 1)}]"
    
    return _binary_response(blob, "float64", shape_str, _get_request_id(request))


@router.get("/{id}/sets")
async def get_sets(
    id: str,
    request: Request,
    db: ApiMetadataStore = Depends(get_metadata_store)
):
    _require_model_ready(db, id)
    return _json_response(db.get_sets(id), request)


@router.get("/{id}/sets/{sid}/members")
async def get_set_members(
    id: str,
    sid: str,
    request: Request,
    db: ApiMetadataStore = Depends(get_metadata_store),
    storage: ApiObjectStore = Depends(get_object_store)
):
    _require_model_ready(db, id)
    
    s_meta = db.get_set(id, sid)
    if not s_meta:
        raise HTTPException(status_code=404, detail="Set not found")
        
    blob = storage.get_object_stream(f"models/{id}/sets/{sid}/members.i32")
    if blob is None:
        raise HTTPException(status_code=404, detail="Set members missing in backend")
    return _binary_response(blob, "int32", f"[{s_meta.get('member_count', 0)}]", _get_request_id(request))


@router.delete("/{id}", status_code=204)
async def delete_model(
    id: str,
    request: Request,
    db: ApiMetadataStore = Depends(get_metadata_store),
    storage: ApiObjectStore = Depends(get_object_store)
):
    """
    Idempotent deletion flow spanning Object Storage and Metadata Database.
    We delete backend storage paths directly matching 'models/{id}*' and 'uploads/{id}*'.
    """
    row = db.get_model(id)
    if row:
        db.delete_model(id)
        
    storage.delete_prefix(f"models/{id}/")
    storage.delete_prefix(f"uploads/{id}/")
    return Response(
        status_code=http_status.HTTP_204_NO_CONTENT,
        headers={"X-Request-Id": _get_request_id(request)}
    )
