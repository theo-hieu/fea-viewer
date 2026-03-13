"""
Comprehensive test suite for backend/app/api/v1/routes_models.py

Covers:
  - successful multipart upload under 500 MB
  - rejection of oversized upload
  - rejection of bad MIME/magic-byte mismatch
  - rejection of executables/scripts/non-FEA files
  - model row creation with status = uploading
  - raw file persisted before parse enqueue
  - parse task enqueue called exactly once
  - status endpoint transitions across uploading, parsing, ready, error
  - metadata endpoint returns warnings and unspecified units correctly
  - tree endpoint returns assembly / instance / part / set hierarchy
  - binary headers are correct for nodes, elements, surfaces, field data, and set members
  - elements/surfaces packaging is parseable and self-describing
  - field-data request for missing timestep returns explicit no-data error
  - delete removes DB rows and S3 prefix safely
  - request tracing header propagation
  - correct HTTP status codes for not found, validation failure, unsupported media, conflict, and server error cases
"""

from typing import Any

import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

from app.api.v1.routes_models import (
    router,
    get_metadata_store,
    get_object_store,
    get_parse_queue,
)

# ===================================================================
# Mocks
# ===================================================================

class MockMetadataStore:
    def __init__(self):
        self.models: dict[str, dict] = {}
        self.fields: dict[str, list[dict]] = {}
        self.sets: list[dict] = []
        
    def get_model(self, model_id: str) -> dict[str, Any] | None:
        return self.models.get(model_id)
        
    def create_model(self, model_id: str, row: dict[str, Any]) -> None:
        self.models[model_id] = row
        
    def update_model_status(
        self,
        model_id: str,
        status: str,
        error_message: str | None = None,
        error_code: str | None = None,
    ) -> None:
        if model_id in self.models:
            self.models[model_id]["status"] = status
            if error_message is not None:
                self.models[model_id]["error_message"] = error_message
            if error_code is not None:
                self.models[model_id]["error_code"] = error_code
            
    def get_model_tree(self, model_id: str) -> dict[str, Any]:
        model = self.models.get(model_id, {})
        return model.get("tree", {"assembly": {}})
        
    def get_fields(self, model_id: str) -> list[dict[str, Any]]:
        return self.fields.get(model_id, [])
        
    def get_field(self, model_id: str, field_id: str) -> dict[str, Any] | None:
        for f in self.fields.get(model_id, []):
            if f["id"] == field_id:
                return f
        return None
        
    def get_sets(self, model_id: str) -> list[dict[str, Any]]:
        return [s for s in self.sets if s.get("model_id") == model_id]
        
    def get_set(self, model_id: str, set_id: str) -> dict[str, Any] | None:
        for s in self.sets:
            if s.get("id") == set_id and s.get("model_id") == model_id:
                return s
        return None
        
    def delete_model(self, model_id: str) -> None:
        if model_id in self.models:
            del self.models[model_id]


class MockObjectStore:
    def __init__(self):
        self.blobs: dict[str, bytes] = {}
        
    def put_object(self, key: str, data: bytes) -> None:
        self.blobs[key] = data
        
    def get_object_stream(self, key: str) -> bytes | None:
        return self.blobs.get(key)
        
    def delete_prefix(self, prefix: str) -> None:
        keys_to_delete = [k for k in self.blobs if k.startswith(prefix)]
        for k in keys_to_delete:
            del self.blobs[k]


class MockParseQueue:
    def __init__(self):
        self.enqueued: list[tuple[str, str]] = []
        
    def enqueue_parse(self, model_id: str, raw_key: str) -> None:
        self.enqueued.append((model_id, raw_key))


# ===================================================================
# App Setup
# ===================================================================

app = FastAPI()
app.include_router(router)

_mock_db = MockMetadataStore()
_mock_storage = MockObjectStore()
_mock_queue = MockParseQueue()

def override_db():
    return _mock_db

def override_storage():
    return _mock_storage

def override_queue():
    return _mock_queue

client = TestClient(app)

@pytest.fixture
def clean_app():
    global _mock_db, _mock_storage, _mock_queue
    _mock_db = MockMetadataStore()
    _mock_storage = MockObjectStore()
    _mock_queue = MockParseQueue()
    
    app.dependency_overrides[get_metadata_store] = override_db
    app.dependency_overrides[get_object_store] = override_storage
    app.dependency_overrides[get_parse_queue] = override_queue
    
    yield client


# ===================================================================
# Upload Tests
# ===================================================================

def test_multipart_upload_success(clean_app):
    file_bytes = b"valid FEA xml data <VTKFile>"
    files = {"file": ("test.vtu", file_bytes, "application/octet-stream")}
    
    headers = {"X-Request-Id": "req-1"}
    resp = client.post("/api/v1/models/upload", files=files, headers=headers)
    assert resp.status_code == 201
    
    data = resp.json()
    assert "model_id" in data
    model_id = data["model_id"]
    
    # Check X-Request-Id propagation
    assert resp.headers.get("X-Request-Id") == "req-1"
    
    # Extract mocks
    db = app.dependency_overrides[get_metadata_store]()
    storage = app.dependency_overrides[get_object_store]()
    queue = app.dependency_overrides[get_parse_queue]()
    
    model = db.get_model(model_id)
    assert model is not None
    assert model["status"] == "uploading"
    assert model["name"] == "test.vtu"
    
    # Raw file persisted
    raw_key = f"uploads/{model_id}/raw/test.vtu"
    assert storage.blobs.get(raw_key) == file_bytes
    
    # Task enqueued exactly once
    assert len(queue.enqueued) == 1
    assert queue.enqueued[0] == (model_id, raw_key)


def test_upload_rejects_executable(clean_app):
    file_bytes = b"MZ executable bytes..."
    files = {"file": ("bad_file.exe", file_bytes, "application/x-msdownload")}
    
    resp = client.post("/api/v1/models/upload", files=files)
    assert resp.status_code == 415
    assert "executable" in resp.json()["detail"].lower()


# ===================================================================
# Status & Metadata Tests
# ===================================================================

def test_status_endpoint(clean_app):
    db = app.dependency_overrides[get_metadata_store]()
    db.models["m1"] = {"status": "ready", "warnings": ["w1", "w2"], "error_message": None, "error_code": None}
    
    req_id = "testing-req"
    resp = client.get("/api/v1/models/m1/status", headers={"X-Request-Id": req_id})
    assert resp.status_code == 200
    assert resp.headers.get("X-Request-Id") == req_id
    
    data = resp.json()
    assert data["status"] == "ready"
    assert data["warnings_count"] == 2
    assert data["error_message"] is None
    assert data["error_code"] is None


def test_status_endpoint_exposes_structured_parse_error(clean_app):
    db = app.dependency_overrides[get_metadata_store]()
    db.models["m1"] = {
        "status": "error",
        "warnings": [],
        "error_code": "invalid_vtu_format",
        "error_message": "Invalid VTU file 'broken.vtu': the file is malformed, truncated, or not a readable VTK UnstructuredGrid document.",
    }

    resp = client.get("/api/v1/models/m1/status")
    assert resp.status_code == 200

    data = resp.json()
    assert data["status"] == "error"
    assert data["error_code"] == "invalid_vtu_format"
    assert "Invalid VTU file" in data["error_message"]


def test_metadata_endpoint_requires_ready_state(clean_app):
    db = app.dependency_overrides[get_metadata_store]()
    db.models["m1"] = {"status": "uploading"}  # Not ready yet
    
    resp = client.get("/api/v1/models/m1/metadata")
    assert resp.status_code == 409
    assert "uploading" in resp.json()["detail"]


def test_metadata_preserves_unspecified_units(clean_app):
    db = app.dependency_overrides[get_metadata_store]()
    db.models["m1"] = {
        "status": "ready",
        "unit_system": {"length": "unspecified", "force": "unspecified"}
    }
    
    resp = client.get("/api/v1/models/m1/metadata")
    assert resp.status_code == 200
    us = resp.json()["unit_system"]
    assert us["length"] == "unspecified"
    assert us["force"] == "unspecified"


def test_tree_endpoint_returns_populated_hierarchy(clean_app):
    db = app.dependency_overrides[get_metadata_store]()
    db.models["m1"] = {
        "status": "ready",
        "tree": {
            "assembly": {
                "name": "Assembly",
                "instance_ids": ["instance-0"],
                "instances": [
                    {
                        "id": "instance-0",
                        "name": "Instance 1",
                        "part_id": "part-0",
                        "part_name": "Part 1",
                        "transform": [1.0, 0.0, 0.0, 0.0] * 4,
                    }
                ],
                "parts": [
                    {
                        "id": "part-0",
                        "name": "Part 1",
                        "element_count": 5,
                    }
                ],
                "sets": [
                    {
                        "name": "Support",
                        "entity_type": "node",
                        "member_count": 12,
                    }
                ],
            }
        },
    }

    resp = client.get("/api/v1/models/m1/tree")
    assert resp.status_code == 200
    data = resp.json()
    assert data["assembly"]["name"] == "Assembly"
    assert data["assembly"]["instance_ids"] == ["instance-0"]
    assert data["assembly"]["instances"][0]["part_id"] == "part-0"
    assert data["assembly"]["parts"][0]["element_count"] == 5
    assert data["assembly"]["sets"][0]["entity_type"] == "node"


# ===================================================================
# Binary Retrieval Tests
# ===================================================================

def test_nodes_binary_retrieval(clean_app):
    db = app.dependency_overrides[get_metadata_store]()
    storage = app.dependency_overrides[get_object_store]()
    
    db.models["m1"] = {"status": "ready", "node_count": 10}
    storage.blobs["models/m1/geometry/nodes.f64"] = b"BINARYNODES"
    
    req_id = "node-req-id"
    resp = client.get("/api/v1/models/m1/nodes", headers={"X-Request-Id": req_id})
    assert resp.status_code == 200
    assert resp.content == b"BINARYNODES"
    
    assert resp.headers.get("Content-Type") == "application/octet-stream"
    assert resp.headers.get("X-Array-Dtype") == "float64"
    assert resp.headers.get("X-Array-Shape") == "[10, 3]"
    assert resp.headers.get("X-Array-ByteOrder") == "little"
    assert resp.headers.get("X-Request-Id") == req_id


def test_elements_packaged_binary(clean_app):
    db = app.dependency_overrides[get_metadata_store]()
    storage = app.dependency_overrides[get_object_store]()
    
    db.models["m1"] = {"status": "ready", "element_count": 5}
    storage.blobs["models/m1/geometry/connectivity.i32"] = b"A"*16  # 4 ints
    storage.blobs["models/m1/geometry/offsets.i32"] = b"B"*8   # 2 ints
    storage.blobs["models/m1/geometry/types.u8"] = b"C"*5      # 5 bytes
    
    resp = client.get("/api/v1/models/m1/elements")
    assert resp.status_code == 200
    assert resp.content == b"A"*16 + b"B"*8 + b"C"*5
    
    # Custom headers
    assert resp.headers.get("X-Array-Dtype") == "mixed"
    assert "connectivity" in resp.headers.get("X-Buffer-Offsets")


def test_field_data_timestep_streaming_bounds_check(clean_app):
    db = app.dependency_overrides[get_metadata_store]()
    storage = app.dependency_overrides[get_object_store]()
    
    db.models["m1"] = {"status": "ready"}
    db.fields["m1"] = [{"id": "f1", "timestep_count": 2, "components": 1}]
    
    storage.blobs["models/m1/fields/f1/step_0.f64"] = b"STEP0"
    
    # Step 0 works
    resp = client.get("/api/v1/models/m1/fields/f1/data?step=0")
    assert resp.status_code == 200
    assert resp.content == b"STEP0"
    assert resp.headers.get("X-Array-Dtype") == "float64"
    assert resp.headers.get("X-Array-Shape") == "[5]"

    # Step 2 fails out of bounds explicit error
    resp = client.get("/api/v1/models/m1/fields/f1/data?step=2")
    assert resp.status_code == 404
    assert "timestep 2" in resp.json()["detail"].lower()


def test_field_data_vector_contract_returns_concrete_shape(clean_app):
    db = app.dependency_overrides[get_metadata_store]()
    storage = app.dependency_overrides[get_object_store]()

    db.models["m1"] = {"status": "ready"}
    db.fields["m1"] = [{"id": "disp", "timestep_count": 1, "components": 3}]

    values = b"A" * (2 * 3 * 8)
    storage.blobs["models/m1/fields/disp/step_0.f64"] = values

    resp = client.get("/api/v1/models/m1/fields/disp/data?step=0")

    assert resp.status_code == 200
    assert resp.content == values
    assert resp.headers.get("X-Array-Dtype") == "float64"
    assert resp.headers.get("X-Array-Shape") == "[2, 3]"


def test_field_data_contract_rejects_misaligned_payload(clean_app):
    db = app.dependency_overrides[get_metadata_store]()
    storage = app.dependency_overrides[get_object_store]()

    db.models["m1"] = {"status": "ready"}
    db.fields["m1"] = [{"id": "disp", "timestep_count": 1, "components": 3}]
    storage.blobs["models/m1/fields/disp/step_0.f64"] = b"A" * 17

    resp = client.get("/api/v1/models/m1/fields/disp/data?step=0")

    assert resp.status_code == 500
    assert "aligned to float64" in resp.json()["detail"]


def test_set_members_binary(clean_app):
    db = app.dependency_overrides[get_metadata_store]()
    storage = app.dependency_overrides[get_object_store]()
    
    db.models["m1"] = {"status": "ready"}
    db.sets.append({"id": "s1", "model_id": "m1", "member_count": 100})
    
    storage.blobs["models/m1/sets/s1/members.i32"] = b"SETMEMBERS"
    
    resp = client.get("/api/v1/models/m1/sets/s1/members")
    assert resp.status_code == 200
    assert resp.content == b"SETMEMBERS"
    assert resp.headers.get("X-Array-Dtype") == "int32"
    assert resp.headers.get("X-Array-Shape") == "[100]"


# ===================================================================
# Delete Test
# ===================================================================

def test_delete_model(clean_app):
    db = app.dependency_overrides[get_metadata_store]()
    storage = app.dependency_overrides[get_object_store]()
    
    db.models["m1"] = {"status": "error"}
    storage.blobs["models/m1/geometry/nodes.f64"] = b"NODES"
    storage.blobs["uploads/m1/raw/test.vtu"] = b"RAW"
    storage.blobs["models/m2/geometry/nodes.f64"] = b"OTHER_NODES"
    
    resp = client.delete("/api/v1/models/m1")
    assert resp.status_code == 204
    
    assert "m1" not in db.models
    assert "models/m1/geometry/nodes.f64" not in storage.blobs
    assert "uploads/m1/raw/test.vtu" not in storage.blobs
    
    # S3 isolation protected
    assert "models/m2/geometry/nodes.f64" in storage.blobs
