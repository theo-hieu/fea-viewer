from __future__ import annotations

from fastapi.testclient import TestClient

import app.main as main_module


class _Connection:
    def execute(self, _query) -> None:
        return None


class _ConnectionContext:
    def __enter__(self) -> _Connection:
        return _Connection()

    def __exit__(self, exc_type, exc, tb) -> bool:
        return False


class _HealthyEngine:
    def connect(self) -> _ConnectionContext:
        return _ConnectionContext()


class _FailingEngine:
    def connect(self) -> _ConnectionContext:
        raise RuntimeError("postgres unavailable")


class _HealthyRedisClient:
    def ping(self) -> None:
        return None

    def close(self) -> None:
        return None


class _HealthyRedisModule:
    @staticmethod
    def from_url(*_args, **_kwargs) -> _HealthyRedisClient:
        return _HealthyRedisClient()


class _HealthyStorageClient:
    def head_bucket(self, *, Bucket: str) -> None:
        return None


class _HealthyStorage:
    def __init__(self):
        self.bucket = "fea-models"
        self.client = _HealthyStorageClient()


client = TestClient(main_module.app)


def test_liveness_endpoint_exists_under_api_v1():
    response = client.get("/api/v1/health")

    assert response.status_code == 200
    assert response.json() == {"status": "ok", "service": "fea-viewer-api"}


def test_backend_root_health_path_is_not_a_second_contract():
    response = client.get("/health")

    assert response.status_code == 404


def test_readiness_endpoint_reports_ready_components(monkeypatch):
    monkeypatch.setattr(main_module, "engine", _HealthyEngine())
    monkeypatch.setattr(main_module, "redis", _HealthyRedisModule())
    monkeypatch.setattr(main_module, "S3Client", _HealthyStorage)

    response = client.get("/api/v1/health/ready")

    assert response.status_code == 200
    assert response.json() == {
        "status": "ready",
        "service": "fea-viewer-api",
        "components": {
            "postgres": {"status": "ok"},
            "redis": {"status": "ok"},
            "storage": {"status": "ok"},
        },
    }


def test_readiness_endpoint_returns_503_with_component_errors(monkeypatch):
    monkeypatch.setattr(main_module, "engine", _FailingEngine())
    monkeypatch.setattr(main_module, "redis", _HealthyRedisModule())
    monkeypatch.setattr(main_module, "S3Client", _HealthyStorage)

    response = client.get("/api/v1/health/ready")

    assert response.status_code == 503
    assert response.json() == {
        "status": "not_ready",
        "service": "fea-viewer-api",
        "components": {
            "postgres": {
                "status": "error",
                "detail": "postgres unavailable",
            },
            "redis": {"status": "ok"},
            "storage": {"status": "ok"},
        },
    }
