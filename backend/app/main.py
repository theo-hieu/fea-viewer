from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.v1.routes_models import router as models_router

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
    return {"status": "ready"}

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
