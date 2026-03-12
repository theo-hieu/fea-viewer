import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from app.api.v1.routes_models import router as models_router
from app.config import settings

app = FastAPI(
    title="FEA Viewer API",
    description="API for parsing and serving FEA model geometry and results",
    version="0.1.0",
)

# Allow CORS for local development 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify exact origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health endpoints
@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.get("/health/ready")
def readiness_check():
    import redis
    from sqlalchemy import text
    from app.models.db import engine
    from app.storage.s3_client import S3Client
    
    status = "ready"
    components = {}
    
    # Check Postgres
    try:
        with engine.connect() as conn:
            conn.execute(text("SELECT 1"))
        components["postgres"] = "ok"
    except Exception as e:
        status = "error"
        components["postgres"] = str(e)
        
    # Check Redis
    try:
        r = redis.from_url(settings.REDIS_URL, decode_responses=True)
        r.ping()
        r.close()
        components["redis"] = "ok"
    except Exception as e:
        status = "error"
        components["redis"] = str(e)
        
    # Check MinIO
    try:
        storage = S3Client()
        storage.client.head_bucket(Bucket=storage.bucket)
        components["minio"] = "ok"
    except Exception as e:
        status = "error"
        components["minio"] = str(e)
        
    return JSONResponse(
        status_code=200 if status == "ready" else 503,
        content={"status": status, "components": components}
    )

import asyncio
from fastapi import WebSocket, WebSocketDisconnect

# WebSocket progress bridge
@app.websocket("/ws/progress/{model_id}")
async def websocket_endpoint(websocket: WebSocket, model_id: str):
    await websocket.accept()
    
    # Subscription logic to Redis
    import redis.asyncio as async_redis
    r = async_redis.from_url(settings.REDIS_URL, decode_responses=True)
    pubsub = r.pubsub()
    channel = f"parse_progress:{model_id}"
    
    await pubsub.subscribe(channel)
    
    try:
        while True:
            # Check for messages from Redis
            message = await pubsub.get_message(ignore_subscribe_messages=True, timeout=1.0)
            if message:
                await websocket.send_text(message["data"])
                
                # If message status is final, we can stop listening
                try:
                    data = json.loads(message["data"])
                    if data.get("status") in ["ready", "error"]:
                        break
                except:
                    pass
            
            # Keep-alive or check for disconnect (FastAPI handles this via receive but we can also use a small sleep)
            await asyncio.sleep(0.1)
            
    except WebSocketDisconnect:
        pass
    finally:
        await pubsub.unsubscribe(channel)
        await r.close()

# Mount API routes
from app.api.v1.routes_models import (
    get_metadata_store,
    get_object_store,
    get_parse_queue
)

from app.models.db import PostgresMetadataStore
from app.storage.s3_client import S3Client
from app.tasks.queue import CeleryParseQueue

_db = PostgresMetadataStore()
_storage = S3Client()
_queue = CeleryParseQueue()

app.dependency_overrides[get_metadata_store] = lambda: _db
app.dependency_overrides[get_object_store] = lambda: _storage
app.dependency_overrides[get_parse_queue] = lambda: _queue

app.include_router(models_router)
