import json
from contextlib import asynccontextmanager
from typing import Any, AsyncGenerator

from sqlalchemy import Column, String, Integer, Float, JSON, ForeignKey
from sqlalchemy.orm import declarative_base, sessionmaker, relationship
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession

from app.config import settings
from app.api.v1.routes_models import ApiMetadataStore

Base = declarative_base()

# ---------------------------------------------------------------------------
# SQLAlchemy Models
# ---------------------------------------------------------------------------

class ModelRow(Base):
    __tablename__ = "models"

    id = Column(String, primary_key=True)
    name = Column(String, nullable=False)
    status = Column(String, nullable=False, default="uploading")
    
    # Hierarchy caching
    node_count = Column(Integer, default=0)
    element_count = Column(Integer, default=0)
    field_count = Column(Integer, default=0)
    
    # Arbitrary properties (e.g. unit system, warnings)
    properties = Column(JSON, default=dict)
    
    # Children
    fields = relationship("ResultFieldRow", back_populates="model", cascade="all, delete-orphan")
    sets = relationship("NamedSetRow", back_populates="model", cascade="all, delete-orphan")

class ResultFieldRow(Base):
    __tablename__ = "result_fields"

    model_id = Column(String, ForeignKey("models.id"), primary_key=True)
    id = Column(String, primary_key=True)
    
    name = Column(String, nullable=False)
    location = Column(String, nullable=False) # 'node' or 'element'
    components = Column(Integer, nullable=False)
    timestep_count = Column(Integer, default=1)
    
    properties = Column(JSON, default=dict)

    model = relationship("ModelRow", back_populates="fields")

class NamedSetRow(Base):
    __tablename__ = "named_sets"

    model_id = Column(String, ForeignKey("models.id"), primary_key=True)
    id = Column(String, primary_key=True)
    
    name = Column(String, nullable=False)
    entity_type = Column(String, nullable=False) # 'node' or 'element'
    member_count = Column(Integer, default=0)
    
    model = relationship("ModelRow", back_populates="sets")


# ---------------------------------------------------------------------------
# Database Engine & Session
# ---------------------------------------------------------------------------

from sqlalchemy import create_engine

# Use psycopg2 synchronous engine to match MVP requirements
engine = create_engine(settings.DATABASE_URL, echo=False)
SessionLocal = sessionmaker(engine, expire_on_commit=False)


# ---------------------------------------------------------------------------
# ApiMetadataStore Implementation
# ---------------------------------------------------------------------------

class PostgresMetadataStore(ApiMetadataStore):
    """
    Synchronous implementation of the ApiMetadataStore protocol for the MVP.
    """
    def __init__(self):
        self._engine = engine
        # Create tables if they do not exist
        try:
            Base.metadata.create_all(self._engine)
        except Exception as e:
            # Expected to fail if DB is not up yet
            pass
            
    def get_model(self, model_id: str) -> dict[str, Any] | None:
        with SessionLocal() as session:
            row = session.get(ModelRow, model_id)
            if not row: return None
            return {
                "id": row.id,
                "name": row.name,
                "status": row.status,
                "node_count": row.node_count,
                "element_count": row.element_count,
                "field_count": row.field_count,
                "unit_system": row.properties.get("unit_system", {"length": "unspecified", "force": "unspecified"}),
                "warnings": row.properties.get("warnings", []),
                "warnings_count": len(row.properties.get("warnings", [])),
                "error_message": row.properties.get("error_message")
            }

    def create_model(self, model_id: str, row: dict[str, Any]) -> None:
        with SessionLocal() as session:
            db_row = ModelRow(
                id=model_id,
                name=row.get("name", "unknown.vtu"),
                status=row.get("status", "uploading"),
                properties={"unit_system": {"length": "unspecified", "force": "unspecified"}}
            )
            session.add(db_row)
            session.commit()

    def update_model_status(self, model_id: str, status: str) -> None:
        with SessionLocal() as session:
            row = session.get(ModelRow, model_id)
            if row:
                row.status = status
                session.commit()

    def get_model_tree(self, model_id: str) -> dict[str, Any]:
        return {"assembly": {}} # MVP returns a dummy tree

    def get_fields(self, model_id: str) -> list[dict[str, Any]]:
        with SessionLocal() as session:
            fields = session.query(ResultFieldRow).filter_by(model_id=model_id).all()
            return [{"id": f.id, "name": f.name, "location": f.location, "components": f.components, "timestep_count": f.timestep_count} for f in fields]

    def get_field(self, model_id: str, field_id: str) -> dict[str, Any] | None:
        with SessionLocal() as session:
            f = session.query(ResultFieldRow).filter_by(model_id=model_id, id=field_id).first()
            if not f: return None
            return {"id": f.id, "name": f.name, "location": f.location, "components": f.components, "timestep_count": f.timestep_count}

    def get_sets(self, model_id: str) -> list[dict[str, Any]]:
        with SessionLocal() as session:
            sets = session.query(NamedSetRow).filter_by(model_id=model_id).all()
            return [{"id": s.id, "name": s.name, "entity_type": s.entity_type, "member_count": s.member_count} for s in sets]

    def get_set(self, model_id: str, set_id: str) -> dict[str, Any] | None:
        with SessionLocal() as session:
            s = session.query(NamedSetRow).filter_by(model_id=model_id, id=set_id).first()
            if not s: return None
            return {"id": s.id, "name": s.name, "entity_type": s.entity_type, "member_count": s.member_count}

    def delete_model(self, model_id: str) -> None:
        with SessionLocal() as session:
            row = session.get(ModelRow, model_id)
            if row:
                session.delete(row)
                session.commit()
