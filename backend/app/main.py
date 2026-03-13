import asyncio
import json
from functools import lru_cache
from typing import Any

import redis
from fastapi import APIRouter, FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from sqlalchemy import text

from app.api.v1.routes_models import (
    get_metadata_store,
    get_object_store,
    get_parse_queue,
    router as models_router,
)
from app.config import settings
from app.models.db import PostgresMetadataStore, engine
from app.storage.s3_client import S3Client
from app.tasks.queue import CeleryParseQueue

SERVICE_NAME = "fea-viewer-api"


@lru_cache
def _metadata_store() -> PostgresMetadataStore:
    return PostgresMetadataStore()


@lru_cache
def _object_store() -> S3Client:
    return S3Client()


@lru_cache
def _parse_queue() -> CeleryParseQueue:
    return CeleryParseQueue()


def _component_ok() -> dict[str, str]:
    return {"status": "ok"}


def _component_error(exc: Exception) -> dict[str, str]:
    return {"status": "error", "detail": str(exc)}


def _readiness_response() -> tuple[int, dict[str, Any]]:
    status_code = 200
    overall_status = "ready"
    components: dict[str, dict[str, str]] = {}

    try:
        with engine.connect() as conn:
            conn.execute(text("SELECT 1"))
        components["postgres"] = _component_ok()
    except Exception as exc:
        status_code = 503
        overall_status = "not_ready"
        components["postgres"] = _component_error(exc)

    try:
        redis_client = redis.from_url(settings.REDIS_URL, decode_responses=True)
        redis_client.ping()
        redis_client.close()
        components["redis"] = _component_ok()
    except Exception as exc:
        status_code = 503
        overall_status = "not_ready"
        components["redis"] = _component_error(exc)

    try:
        storage = S3Client()
        storage.client.head_bucket(Bucket=storage.bucket)
        components["storage"] = _component_ok()
    except Exception as exc:
        status_code = 503
        overall_status = "not_ready"
        components["storage"] = _component_error(exc)

    return status_code, {
        "status": overall_status,
        "service": SERVICE_NAME,
        "components": components,
    }


def create_app() -> FastAPI:
    app = FastAPI(
        title="FEA Viewer API",
        description="API for parsing and serving FEA model geometry and results",
        version="0.1.0",
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    health_router = APIRouter(prefix=settings.API_V1_STR, tags=["Health"])

    @health_router.get("/health")
    def health_check() -> dict[str, str]:
        return {"status": "ok", "service": SERVICE_NAME}

    @health_router.get("/health/ready")
    def readiness_check() -> JSONResponse:
        status_code, payload = _readiness_response()
        return JSONResponse(status_code=status_code, content=payload)

    @app.websocket("/ws/progress/{model_id}")
    async def websocket_endpoint(websocket: WebSocket, model_id: str):
        await websocket.accept()

        import redis.asyncio as async_redis

        redis_client = async_redis.from_url(settings.REDIS_URL, decode_responses=True)
        pubsub = redis_client.pubsub()
        channel = f"parse_progress:{model_id}"

        await pubsub.subscribe(channel)

        try:
            while True:
                message = await pubsub.get_message(ignore_subscribe_messages=True, timeout=1.0)
                if message:
                    await websocket.send_text(message["data"])
                    try:
                        data = json.loads(message["data"])
                    except json.JSONDecodeError:
                        data = {}
                    if data.get("status") in {"ready", "error"}:
                        break

                await asyncio.sleep(0.1)

        except WebSocketDisconnect:
            pass
        finally:
            await pubsub.unsubscribe(channel)
            await redis_client.close()

    app.dependency_overrides[get_metadata_store] = _metadata_store
    app.dependency_overrides[get_object_store] = _object_store
    app.dependency_overrides[get_parse_queue] = _parse_queue

    app.include_router(health_router)
    app.include_router(models_router)

    return app


app = create_app()
