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

# Provide simple in-memory stubs so the MVP container can run without a real DB for now
class StubDB:
    def __init__(self):
        self.models = {}
    def get_model(self, model_id): return self.models.get(model_id)
    def create_model(self, model_id, row): self.models[model_id] = row
    def update_model_status(self, model_id, status): 
        if model_id in self.models: self.models[model_id]["status"] = status
    def get_model_tree(self, model_id): return {"assembly": {}}
    def get_fields(self, model_id): return []
    def get_field(self, model_id, field_id): return None
    def get_sets(self, model_id): return []
    def get_set(self, model_id, set_id): return None
    def delete_model(self, model_id): self.models.pop(model_id, None)

class StubStorage:
    def put_object(self, key, data): pass
    def get_object_stream(self, key): return b""
    def delete_prefix(self, prefix): pass

class StubQueue:
    def enqueue_parse(self, model_id, raw_key): pass

_db = StubDB()
_storage = StubStorage()
_queue = StubQueue()

app.dependency_overrides[get_metadata_store] = lambda: _db
app.dependency_overrides[get_object_store] = lambda: _storage
app.dependency_overrides[get_parse_queue] = lambda: _queue

app.include_router(models_router)
