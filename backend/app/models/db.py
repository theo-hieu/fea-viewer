import json
from contextlib import asynccontextmanager, contextmanager
from typing import Any, AsyncGenerator
import threading

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
        self._local = threading.local()
        # Create tables if they do not exist
        try:
            Base.metadata.create_all(self._engine)
        except Exception as e:
            # Expected to fail if DB is not up yet
            pass

    @contextmanager
    def _get_session(self):
        if hasattr(self._local, 'session'):
            yield self._local.session
        else:
            with SessionLocal() as session:
                yield session

    @contextmanager
    def transaction(self):
        if hasattr(self._local, 'session'):
            yield
            return
            
        session = SessionLocal()
        self._local.session = session
        try:
            yield
            session.commit()
        except Exception:
            session.rollback()
            raise
        finally:
            session.close()
            delattr(self._local, 'session')
            
    def get_model(self, model_id: str) -> dict[str, Any] | None:
        with self._get_session() as session:
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
        with self._get_session() as session:
            db_row = ModelRow(
                id=model_id,
                name=row.get("name", "unknown.vtu"),
                status=row.get("status", "uploading"),
                properties={"unit_system": {"length": "unspecified", "force": "unspecified"}}
            )
            session.add(db_row)
            session.commit()

    def update_model_status(self, model_id: str, status: str, error_message: str | None = None) -> None:
        with self._get_session() as session:
            row = session.get(ModelRow, model_id)
            if row:
                row.status = status
                if error_message is not None:
                    props = dict(row.properties) if row.properties else {}
                    props["error_message"] = error_message
                    row.properties = props
                session.commit()

    def get_model_tree(self, model_id: str) -> dict[str, Any]:
        with self._get_session() as session:
            row = session.get(ModelRow, model_id)
            if not row:
                return {"assembly": {}}
            props = row.properties or {}
            return props.get("tree", {"assembly": {}})

    def get_fields(self, model_id: str) -> list[dict[str, Any]]:
        with self._get_session() as session:
            fields = session.query(ResultFieldRow).filter_by(model_id=model_id).all()
            return [{"id": f.id, "name": f.name, "location": f.location, "components": f.components, "timestep_count": f.timestep_count} for f in fields]

    def get_field(self, model_id: str, field_id: str) -> dict[str, Any] | None:
        with self._get_session() as session:
            f = session.query(ResultFieldRow).filter_by(model_id=model_id, id=field_id).first()
            if not f: return None
            return {"id": f.id, "name": f.name, "location": f.location, "components": f.components, "timestep_count": f.timestep_count}

    def get_sets(self, model_id: str) -> list[dict[str, Any]]:
        with self._get_session() as session:
            sets = session.query(NamedSetRow).filter_by(model_id=model_id).all()
            return [{"id": s.id, "name": s.name, "entity_type": s.entity_type, "member_count": s.member_count} for s in sets]

    def get_set(self, model_id: str, set_id: str) -> dict[str, Any] | None:
        with self._get_session() as session:
            s = session.query(NamedSetRow).filter_by(model_id=model_id, id=set_id).first()
            if not s: return None
            return {"id": s.id, "name": s.name, "entity_type": s.entity_type, "member_count": s.member_count}

    def delete_model(self, model_id: str) -> None:
        with self._get_session() as session:
            row = session.get(ModelRow, model_id)
            if row:
                session.delete(row)
                session.commit()
                
    def upsert_model(self, model_row: dict[str, Any]) -> None:
        with self._get_session() as session:
            row = session.get(ModelRow, model_row["id"])
            if not row:
                row = ModelRow(id=model_row["id"])
                session.add(row)
            row.name = model_row.get("name", row.name)
            row.status = model_row.get("status", row.status)
            row.node_count = model_row.get("node_count", 0)
            row.element_count = model_row.get("element_count", 0)
            row.field_count = model_row.get("field_count", 0)
            
            props = row.properties.copy() if row.properties else {}
            props["unit_system"] = model_row.get("unit_system", props.get("unit_system"))
            props["warnings"] = model_row.get("warnings", props.get("warnings", []))
            if "metadata" in model_row:
                props["metadata"] = model_row["metadata"]
            if "tree" in model_row:
                props["tree"] = model_row["tree"]
            if "error_message" in model_row:
                props["error_message"] = model_row["error_message"]
            row.properties = props
            session.commit()
            
    def replace_result_fields(self, model_id: str, field_rows: list[dict[str, Any]]) -> None:
        with self._get_session() as session:
            session.query(ResultFieldRow).filter_by(model_id=model_id).delete()
            for f_row in field_rows:
                db_field = ResultFieldRow(
                    model_id=model_id,
                    id=f_row["id"],
                    name=f_row["name"],
                    location=f_row["location"],
                    components=f_row["components"],
                    timestep_count=f_row.get("timestep_count", 1),
                    properties=f_row
                )
                session.add(db_field)
            session.commit()

    def replace_named_sets(self, model_id: str, set_rows: list[dict[str, Any]]) -> None:
        with self._get_session() as session:
            session.query(NamedSetRow).filter_by(model_id=model_id).delete()
            for s_row in set_rows:
                db_set = NamedSetRow(
                    model_id=model_id,
                    id=s_row["id"],
                    name=s_row["name"],
                    entity_type=s_row["set_type"],
                    member_count=s_row.get("member_count", 0)
                )
                session.add(db_set)
            session.commit()
