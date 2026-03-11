"""
FEA Viewer — Storage Writer Module
====================================

Pipeline position: Parser → Normalizer → Validator → Surface Extractor → **Storage Writer**

This module durably persists validated Phase 1 model artifacts to the documented
storage backends.

Object storage layout (S3-compatible):
  - Raw uploads:    `uploads/{model_id}/raw/{filename}`
  - Node coords:    `models/{model_id}/geometry/nodes.f64`
  - Elements:       `models/{model_id}/geometry/connectivity.i32`
                    `models/{model_id}/geometry/offsets.i32`
                    `models/{model_id}/geometry/types.u8`
  - Surface mesh:   `models/{model_id}/geometry/surface_indices.i32`
                    `models/{model_id}/geometry/surface_normals.f32`
                    `models/{model_id}/geometry/surface_element_map.i32`
  - Result fields:  `models/{model_id}/fields/{field_id}/step_{n}.f64`
  - Named sets:     `models/{model_id}/sets/{set_id}/members.i32`

Data Encoding:
  - All binary arrays are written as raw bytes exactly.
  - Byte order is STRICTLY little-endian (e.g., '<f8', '<i4') to match WebGL requirements.
  - No JSON wrapping, no compression.

Metadata layout (PostgreSQL):
  - `models`
  - `result_fields`
  - `named_sets`

Failure policy:
  - Phase 1: Write all S3 objects first. Verify success.
  - Phase 2: Open PostgreSQL transaction, replace metadata for `model_id`, commit.
  - If S3 writes fail: Halt immediately. Db is unchanged. Orphaned S3 objects are safe.
  - If Db writes fail: Roll back transaction. Orphaned S3 objects are safe.
  - Idempotent overwrites for the same `model_id` replace previous DB rows safely.
  - Sanitization prevents path traversal in filename keys.
"""

from __future__ import annotations

import hashlib
import logging
import re
from dataclasses import dataclass, field
from contextlib import contextmanager
from typing import Any, Iterator, Protocol

import numpy as np

from app.parsing.models import NamedSet
from app.parsing.surface_extractor import SurfaceMesh
from app.parsing.validator import ValidationResult

logger = logging.getLogger(__name__)


# ---------------------------------------------------------------------------
# Protocols (Dependency Injection)
# ---------------------------------------------------------------------------

class ObjectStoreClient(Protocol):
    """Protocol for S3-compatible backend interactions."""
    def put_object(self, key: str, data: bytes) -> None:
        ...


class MetadataStoreClient(Protocol):
    """Protocol for PostgreSQL metadata backend interactions."""
    
    @contextmanager
    def transaction(self) -> Iterator[None]:
        """Provides a transactional context that rolls back on exception."""
        ...
        
    def upsert_model(self, model_row: dict[str, Any]) -> None:
        """Insert or replace the model metadata row."""
        ...
        
    def replace_result_fields(self, model_id: str, field_rows: list[dict[str, Any]]) -> None:
        """Delete existing fields for model_id and insert new ones."""
        ...
        
    def replace_named_sets(self, model_id: str, set_rows: list[dict[str, Any]]) -> None:
        """Delete existing sets for model_id and insert new ones."""
        ...


# ---------------------------------------------------------------------------
# Result Types
# ---------------------------------------------------------------------------

@dataclass
class StorageResult:
    """Outcome of a successful write operation."""
    model_id: str
    written_keys: list[str]
    total_bytes_written: int
    field_count: int
    set_count: int


class StorageWriterError(Exception):
    """Raised for any failure during storage write sequence."""
    pass


# ---------------------------------------------------------------------------
# Public API
# ---------------------------------------------------------------------------

def write_model(
    model_id: str,
    raw_filename: str,
    raw_file_bytes: bytes,
    validation_result: ValidationResult,
    surface_mesh: SurfaceMesh,
    object_store: ObjectStoreClient,
    metadata_store: MetadataStoreClient,
) -> StorageResult:
    """
    Persist a fully validated model to Object Storage and PostgreSQL.
    
    Strictly follows a write-objects-first-then-metadata sequence. If any step
    fails, raises StorageWriterError.
    
    Parameters
    ----------
    model_id : str
        The unique ID for the model (typically matching upload token).
    raw_filename : str
        Original uploaded filename.
    raw_file_bytes : bytes
        Raw file payload.
    validation_result : ValidationResult
        Must have is_valid=True and .model present.
    surface_mesh : SurfaceMesh
        Output of surface_extractor.
    object_store : ObjectStoreClient
        Implementation of S3 storage writer.
    metadata_store : MetadataStoreClient
        Implementation of PostgreSQL writer.
        
    Returns
    -------
    StorageResult
        Summary of the written artifacts.
    """
    if not validation_result.is_valid or validation_result.model is None:
        raise StorageWriterError("Cannot write invalid model to storage.")
        
    model = validation_result.model
    safe_filename = _sanitize_filename(raw_filename)
    
    # 1. Prepare Object Store Payload Map
    # Always specify little-endian format (e.g., '<f8') for browser consumption
    
    raw_key = f"uploads/{model_id}/raw/{safe_filename}"
    
    blobs: dict[str, bytes] = {
        raw_key: raw_file_bytes,
        f"models/{model_id}/geometry/nodes.f64": model.nodes.coordinates.astype("<f8").tobytes(),
        f"models/{model_id}/geometry/connectivity.i32": model.elements.connectivity.astype("<i4").tobytes(),
        f"models/{model_id}/geometry/offsets.i32": model.elements.connectivity_offsets.astype("<i4").tobytes(),
        f"models/{model_id}/geometry/types.u8": model.elements.types.astype("<u1").tobytes(),
        f"models/{model_id}/geometry/surface_indices.i32": surface_mesh.surface_indices.astype("<i4").tobytes(),
        f"models/{model_id}/geometry/surface_normals.f32": surface_mesh.vertex_normals.astype("<f4").tobytes(),
        f"models/{model_id}/geometry/surface_element_map.i32": surface_mesh.surface_tri_to_element.astype("<i4").tobytes(),
    }
    
    # Track metadata rows
    field_rows: list[dict[str, Any]] = []
    set_rows: list[dict[str, Any]] = []
    
    # 1.1 Fields
    for field in model.result_fields:
        for ts in field.timestep_data:
            key = f"models/{model_id}/fields/{field.id}/step_{ts.step_index}.f64"
            blobs[key] = ts.values.astype("<f8").tobytes()
            
        data_type = "scalar" if field.n_components == 1 else "vector" if field.n_components == 3 else "tensor"
        
        field_rows.append({
            "id": field.id,
            "model_id": model_id,
            "name": field.name,
            "location": field.location.value,
            "data_type": data_type,
            "components": field.n_components,
            "unit": "unspecified",  # Spec dictates missing defaults to unspecified, no fabrication
            "provenance": {
                "source_field_name": field.provenance.source_field_name,
                "source_location": field.provenance.source_location.value,
                "extrapolation_applied": field.provenance.extrapolation_applied,
                "averaging_applied": field.provenance.averaging_applied,
                "averaging_method": field.provenance.averaging_method,
                "coordinate_system": field.provenance.coordinate_system,
                "warnings": field.provenance.warnings,
            },
            "timestep_count": len(field.timestep_data),
            "s3_key_pattern": f"models/{model_id}/fields/{field.id}/step_{{n}}.f64",
        })
        
    # 1.2 Sets
    for ns in model.node_sets + model.element_sets:
        # Create deterministic set_id using MD5 over name/type
        # (NamedSet doesn't have an ID in canonical model)
        set_id = _generate_set_id(model_id, ns)
        key = f"models/{model_id}/sets/{set_id}/members.i32"
        blobs[key] = ns.member_indices.astype("<i4").tobytes()
        
        set_rows.append({
            "id": set_id,
            "model_id": model_id,
            "name": ns.name,
            "set_type": ns.set_type,
            "member_count": len(ns.member_indices),
            "s3_key": key,
        })
        
    # 1.3 Model Row
    # Combine model parser warnings and validator warnings
    all_warnings = list(model.warnings)
    for vw in validation_result.warnings:
        all_warnings.append(vw.message)
        
    us = model.unit_system
        
    model_row = {
        "id": model_id,
        "name": model.metadata.source_filename,
        "status": "ready",
        "file_format": model.metadata.file_format,
        "file_size_bytes": len(raw_file_bytes),
        "raw_file_key": raw_key,
        "node_count": model.nodes.count,
        "element_count": model.elements.count,
        "metadata": {
            "source_filename": model.metadata.source_filename,
            "file_format": model.metadata.file_format,
            "coordinate_system": model.metadata.coordinate_system,
        },
        "unit_system": {
            "length": us.length,
            "force": us.force,
            "time": us.time,
            "temperature": us.temperature,
            "declared_system": us.declared_system,
        },
        "warnings": all_warnings,
    }

    # 2. Write to Object Store
    # Write S3 objects exactly. Stop on any failure.
    written_bytes = 0
    written_keys = []
    
    try:
        # Write raw upload first just in case
        object_store.put_object(raw_key, blobs[raw_key])
        written_bytes += len(blobs[raw_key])
        written_keys.append(raw_key)
        
        for k, v in blobs.items():
            if k == raw_key:
                continue
            object_store.put_object(k, v)
            written_bytes += len(v)
            written_keys.append(k)
            
    except Exception as e:
        logger.error(f"S3 write failed for key '{k}'. Rolling back process. Error: {e}")
        # Halt execution. Do not touch PostgreSQL. The stored blobs remain safely orphaned.
        raise StorageWriterError(f"Failed to write object {k}: {e}") from e
        
    # 3. Write to PostgreSQL context
    try:
        with metadata_store.transaction():
            metadata_store.replace_result_fields(model_id, field_rows)
            metadata_store.replace_named_sets(model_id, set_rows)
            metadata_store.upsert_model(model_row)
    except Exception as e:
        logger.error(f"PostgreSQL metadata write failed for model '{model_id}'. Rollback complete. Error: {e}")
        raise StorageWriterError(f"Database write failed: {e}") from e

    # 4. Success Emit
    logger.info(
        f"Storage write complete for {model_id}. Wrote {len(written_keys)} keys "
        f"({written_bytes} bytes). DB rows updated."
    )
    
    return StorageResult(
        model_id=model_id,
        written_keys=written_keys,
        total_bytes_written=written_bytes,
        field_count=len(field_rows),
        set_count=len(set_rows),
    )


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _sanitize_filename(filename: str) -> str:
    """
    Sanitize filename strictly to prevent path traversal or injection.
    Only allows alphanumeric, dash, dot, and underscore. Replaces others with _.
    Removes dangerous sequences like '..'.
    """
    name = str(filename)
    name = re.sub(r'[^a-zA-Z0-9_\-\.]', '_', name)
    name = name.replace('..', '_')
    if not name:
        name = "unnamed_upload.dat"
    return name


def _generate_set_id(model_id: str, named_set: NamedSet) -> str:
    """Generate a deterministic 8-char set ID hash."""
    seed = f"{model_id}_{named_set.name}_{named_set.set_type}"
    digest = hashlib.md5(seed.encode("utf-8")).hexdigest()[:8]
    return f"set_{digest}"
