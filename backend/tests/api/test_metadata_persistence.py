from __future__ import annotations

from typing import Any

import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from app.api.v1.routes_models import get_metadata_store, router
from app.models import db as db_module


PERSISTED_UNIT_SYSTEM = {
    "length": "mm",
    "force": "N",
    "time": "s",
    "temperature": "C",
    "declared_system": "SI",
}

PERSISTED_METADATA = {
    "source_filename": "rear_bracket_ready.vtu",
    "file_format": "vtu",
    "format_version": "2.2",
    "solver_name": "Abaqus",
    "solver_version": "2024",
    "title": "Rear Bracket Static Load",
    "coordinate_system": "global_cartesian",
    "unit_system": PERSISTED_UNIT_SYSTEM,
    "analysis_case": "LC-17",
}


def _ready_model_row(model_id: str, metadata: dict[str, Any] | None = PERSISTED_METADATA) -> dict[str, Any]:
    row = {
        "id": model_id,
        "name": "rear_bracket_ready.vtu",
        "status": "ready",
        "node_count": 128,
        "element_count": 64,
        "field_count": 3,
        "unit_system": PERSISTED_UNIT_SYSTEM,
        "warnings": ["mesh normalized"],
    }
    if metadata is not None:
        row["metadata"] = metadata
    return row


@pytest.fixture
def sqlite_metadata_store(tmp_path, monkeypatch):
    engine = create_engine(
        f"sqlite:///{tmp_path / 'metadata-store.db'}",
        connect_args={"check_same_thread": False},
    )
    session_local = sessionmaker(engine, expire_on_commit=False)

    monkeypatch.setattr(db_module, "engine", engine)
    monkeypatch.setattr(db_module, "SessionLocal", session_local)

    store = db_module.PostgresMetadataStore()

    try:
        yield store
    finally:
        engine.dispose()


@pytest.fixture
def client(sqlite_metadata_store):
    app = FastAPI()
    app.include_router(router)
    app.dependency_overrides[get_metadata_store] = lambda: sqlite_metadata_store
    return TestClient(app)


def test_postgres_metadata_store_reads_persisted_metadata(sqlite_metadata_store):
    sqlite_metadata_store.upsert_model(_ready_model_row("ready-model"))

    model = sqlite_metadata_store.get_model("ready-model")

    assert model is not None
    assert model["metadata"] == PERSISTED_METADATA
    assert model["unit_system"] == PERSISTED_UNIT_SYSTEM
    assert model["warnings"] == ["mesh normalized"]


def test_metadata_endpoint_surfaces_persisted_metadata(client, sqlite_metadata_store):
    sqlite_metadata_store.upsert_model(_ready_model_row("ready-model"))

    response = client.get("/api/v1/models/ready-model/metadata")

    assert response.status_code == 200
    assert response.json() == {
        "metadata": PERSISTED_METADATA,
        "unit_system": PERSISTED_UNIT_SYSTEM,
        "warnings": ["mesh normalized"],
        "node_count": 128,
        "element_count": 64,
    }


def test_metadata_endpoint_only_returns_empty_metadata_when_absent(client, sqlite_metadata_store):
    sqlite_metadata_store.upsert_model(_ready_model_row("missing-metadata", metadata=None))

    response = client.get("/api/v1/models/missing-metadata/metadata")

    assert response.status_code == 200
    assert response.json()["metadata"] == {}
