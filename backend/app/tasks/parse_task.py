"""
FEA Viewer — Parse Task (Celery Worker)
========================================

Pipeline position: API Upload → **Celery Worker** → detect → parse → (normalizer → validator → storage)

This module defines the Celery task that orchestrates file detection and parsing.
It manages status transitions, emits progress events through Redis pub/sub,
and produces structured audit logs.

Status transitions (deterministic):
  pending → parsing → ready | error

Progress events (via Redis pub/sub, consumed by WebSocket):
  detecting → parsing_nodes → parsing_elements → parsing_fields →
  reading_metadata → complete | error

Source authority:
  - 02a-system-architecture.md §3.2: WebSocket progress
  - 02a-system-architecture.md §5: Parsing pipeline
  - 03b-risks-acceptance.md §8: Audit logging
  - 04-mvp-implementation-plan.md §2.2: Pipeline orchestration
"""

from __future__ import annotations

import json
import logging
import os
import tempfile
import traceback
import time
from dataclasses import dataclass, field
from enum import Enum
from typing import Any, Callable, Optional

import redis
from app.parsing.detect import (
    MVPParseSupport,
    detect_format,
)
from app.parsing.models import ParseError, ParseResult
from app.parsing.normalizer import normalize
from app.parsing.storage_writer import write_model
from app.parsing.surface_extractor import extract_surface
from app.parsing.validator import validate
from app.parsing.vtk_parser import parse_vtk
from app.config import settings
from app.tasks.celery_app import celery_app

logger = logging.getLogger(__name__)


def _write_model_status(
    db: Any,
    model_id: str,
    status: str,
    error_message: str | None = None,
    error_code: str | None = None,
) -> None:
    _safe_log("info", "Writing final model status", model_id=model_id, status=status)
    db.update_model_status(model_id, status, error_message, error_code)


def _safe_log(level: str, message: str, **extra: Any) -> None:
    """Best-effort structured logging that never breaks task execution."""
    try:
        getattr(logger, level)(message, extra=extra)
    except Exception:
        fallback = ", ".join(f"{key}={value!r}" for key, value in extra.items())
        logger.log(getattr(logging, level.upper(), logging.INFO), f"{message} | {fallback}")


# ---------------------------------------------------------------------------
# Status & progress types
# ---------------------------------------------------------------------------

class JobStatus(Enum):
    """Deterministic job status values."""
    PENDING = "pending"
    PARSING = "parsing"
    READY = "ready"
    ERROR = "error"


class ProgressStage(Enum):
    """Progress event stages for WebSocket updates."""
    DETECTING = "detecting"
    PARSING_NODES = "parsing_nodes"
    PARSING_ELEMENTS = "parsing_elements"
    PARSING_FIELDS = "parsing_fields"
    READING_METADATA = "reading_metadata"
    COMPLETE = "complete"
    ERROR = "error"


@dataclass
class ProgressEvent:
    """
    A single progress event emitted during parsing.

    This is published to Redis and consumed by the WebSocket layer.
    """
    model_id: str
    stage: ProgressStage
    progress_pct: int  # 0-100
    message: str
    detail: Optional[dict[str, Any]] = None

    def to_json(self) -> str:
        return json.dumps({
            "model_id": self.model_id,
            "stage": self.stage.value,
            "progress_pct": self.progress_pct,
            "message": self.message,
            "detail": self.detail,
        })


@dataclass
class ParseJobResult:
    """
    Structured output from the parse job, for consumption by API and status layers.

    Contains everything the API layer needs: final status, audit data, warnings,
    and a reference to the parse result or error.
    """
    model_id: str
    status: JobStatus
    parse_result: Optional[ParseResult] = None
    parse_error: Optional[ParseError] = None
    duration_seconds: float = 0.0
    node_count: int = 0
    element_count: int = 0
    field_count: int = 0
    warning_count: int = 0
    warnings: list[str] = field(default_factory=list)
    error_message: Optional[str] = None
    error_code: Optional[str] = None
    progress_events: list[ProgressEvent] = field(default_factory=list)


# ---------------------------------------------------------------------------
# Progress publisher protocol
# ---------------------------------------------------------------------------

ProgressPublisher = Callable[[ProgressEvent], None]
"""
Callable that publishes a progress event.

In production: publishes to Redis pub/sub channel `parse_progress:{model_id}`.
In tests: appends to a list for assertion.
"""


def redis_publisher_factory(model_id: str):
    """Creates a publisher that sends events to a Redis channel for this model."""
    r = redis.from_url(settings.REDIS_URL, decode_responses=True)
    channel = f"parse_progress:{model_id}"
    
    def publish(event: ProgressEvent) -> None:
        try:
            # The frontend expects status/progress/message/warnings_count
            # We map the internal ProgressEvent to the format the frontend expects in UploadPanel.tsx
            msg = {
                "model_id": model_id,
                "status": "parsing" if event.stage != ProgressStage.COMPLETE and event.stage != ProgressStage.ERROR else ("ready" if event.stage == ProgressStage.COMPLETE else "error"),
                "progress": event.progress_pct / 100.0,
                "message": event.message,
                "warnings_count": event.detail.get("warnings_count", 0) if event.detail else 0
            }
            r.publish(channel, json.dumps(msg))
        except Exception as e:
            print(f"Failed to publish progress event: {e}")
        
    return publish


def null_publisher(event: ProgressEvent) -> None:
    """No-op publisher for use when no Redis connection is available."""
    pass


# ---------------------------------------------------------------------------
# Core job logic
# ---------------------------------------------------------------------------

def run_parse_job(
    model_id: str,
    filepath: str,
    filename: str,
    publish: ProgressPublisher = null_publisher,
) -> ParseJobResult:
    """
    Execute the full parse pipeline for a single uploaded file.

    This is the function that the Celery task calls. It is designed to be
    testable without Celery or Redis by accepting a `publish` callback.

    Parameters
    ----------
    model_id : str
        Unique identifier for this model/upload.
    filepath : str
        Absolute path to the local file on disk (already stored in object store).
    filename : str
        Original user-declared filename.
    publish : ProgressPublisher
        Callback for emitting progress events. Defaults to no-op.

    Returns
    -------
    ParseJobResult
        Contains final status, parse result or error, audit data, and all
        progress events emitted during the job.
    """
    start_time = time.monotonic()
    events: list[ProgressEvent] = []

    def emit(stage: ProgressStage, pct: int, msg: str,
             detail: Optional[dict[str, Any]] = None):
        event = ProgressEvent(
            model_id=model_id,
            stage=stage,
            progress_pct=pct,
            message=msg,
            detail=detail,
        )
        events.append(event)
        try:
            publish(event)
        except Exception as pub_exc:
            _safe_log("warning", "Failed to publish progress event", model_id=model_id, stage=stage.value, error=str(pub_exc))

    # --- Step 1: Format detection ---
    emit(ProgressStage.DETECTING, 5, "Detecting file format...")

    try:
        with open(filepath, "rb") as f:
            header_bytes = f.read(1024)
    except Exception as exc:
        duration = time.monotonic() - start_time
        error_msg = f"Cannot read file '{filename}': {exc}"
        emit(ProgressStage.ERROR, 0, error_msg)
        _log_audit(model_id, filename, duration, error=error_msg)
        return ParseJobResult(
            model_id=model_id,
            status=JobStatus.ERROR,
            duration_seconds=duration,
            error_message=error_msg,
            progress_events=events,
        )

    detection = detect_format(header_bytes, filename=filename)

    if detection.mvp_parse_support != MVPParseSupport.SUPPORTED:
        duration = time.monotonic() - start_time
        error_msg = detection.rejection_reason or (
            f"Detected format '{detection.detected_format.value}' is not supported "
            f"for parsing in the current MVP."
        )
        emit(ProgressStage.ERROR, 0, error_msg)
        _log_audit(model_id, filename, duration, error=error_msg)
        return ParseJobResult(
            model_id=model_id,
            status=JobStatus.ERROR,
            duration_seconds=duration,
            error_message=error_msg,
            warnings=detection.warnings,
            warning_count=len(detection.warnings),
            progress_events=events,
        )

    # --- Step 2: Parse ---
    emit(ProgressStage.PARSING_NODES, 15, "Parsing nodes/geometry...")
    emit(ProgressStage.PARSING_ELEMENTS, 35, "Parsing elements/topology...")
    emit(ProgressStage.PARSING_FIELDS, 55, "Parsing result fields...")
    emit(ProgressStage.READING_METADATA, 75, "Reading metadata...")

    parse_output = parse_vtk(filepath, filename=filename)

    duration = time.monotonic() - start_time

    # --- Handle results ---
    if isinstance(parse_output, ParseError):
        error_msg = parse_output.error_message
        emit(ProgressStage.ERROR, 0, error_msg, detail={
            "error_code": parse_output.error_code,
            "error_type": parse_output.error_type,
            "raw_file_preserved": parse_output.raw_file_preserved,
        })
        _log_audit(model_id, filename, duration, error=error_msg)
        return ParseJobResult(
            model_id=model_id,
            status=JobStatus.ERROR,
            parse_error=parse_output,
            duration_seconds=duration,
            error_message=error_msg,
            error_code=parse_output.error_code,
            progress_events=events,
        )

    # Success (possibly with warnings)
    emit(ProgressStage.COMPLETE, 100, "Parse complete.", detail={
        "node_count": parse_output.node_count,
        "element_count": parse_output.element_count,
        "field_count": parse_output.field_count,
        "parser_backend": parse_output.parser_backend,
        "warning_count": len(parse_output.warnings),
    })

    _log_audit(
        model_id, filename, duration,
        node_count=parse_output.node_count,
        element_count=parse_output.element_count,
        field_count=parse_output.field_count,
        warning_count=len(parse_output.warnings),
        parser_backend=parse_output.parser_backend,
    )

    return ParseJobResult(
        model_id=model_id,
        status=JobStatus.READY,
        parse_result=parse_output,
        duration_seconds=duration,
        node_count=parse_output.node_count,
        element_count=parse_output.element_count,
        field_count=parse_output.field_count,
        warning_count=len(parse_output.warnings),
        warnings=parse_output.warnings,
        progress_events=events,
    )


# ---------------------------------------------------------------------------
# Audit logging
# ---------------------------------------------------------------------------

def _log_audit(
    model_id: str,
    filename: str,
    duration: float,
    *,
    node_count: int = 0,
    element_count: int = 0,
    field_count: int = 0,
    warning_count: int = 0,
    parser_backend: str = "",
    error: Optional[str] = None,
) -> None:
    """
    Structured audit log for parse job completion.

    Per 03b §8: parse job audit must include model_id, duration, counts, warnings.
    """
    log_data = {
        "event": "parse_job_audit",
        "model_id": model_id,
        "source_filename": filename,
        "duration_seconds": round(duration, 3),
        "node_count": node_count,
        "element_count": element_count,
        "field_count": field_count,
        "warning_count": warning_count,
        "parser_backend": parser_backend,
    }
    if error:
        log_data["error"] = error
        logger.error("Parse job failed", extra=log_data)
    else:
        logger.info("Parse job completed", extra=log_data)


def PostgresMetadataStore():
    """
    Lazily construct the concrete metadata store.

    Tests that only exercise parsing/task orchestration should be able to import
    this module without requiring the Postgres DBAPI driver to be installed.
    """
    from app.models.db import PostgresMetadataStore as _PostgresMetadataStore

    return _PostgresMetadataStore()


def S3Client():
    """
    Lazily construct the concrete object store.

    This keeps boto3/storage startup side effects out of import-time code paths.
    """
    from app.storage.s3_client import S3Client as _S3Client

    return _S3Client()

@celery_app.task(name="app.tasks.parse_task.process_upload")
def process_upload(model_id: str, raw_key: str, filename: str) -> dict:
    _safe_log("info", "Parse task picked up", model_id=model_id, raw_key=raw_key, uploaded_filename=filename)
    db = PostgresMetadataStore()
    storage = S3Client()
    publish = redis_publisher_factory(model_id)

    temp_path = None
    try:
        # Mark as parsing
        db.update_model_status(model_id, "parsing")

        # Download from S3 to temp disk
        raw_bytes = storage.get_object_stream(raw_key)
        if not raw_bytes:
            error_msg = f"Raw key {raw_key} not found in storage."
            db.update_model_status(model_id, "error", error_msg)
            publish(ProgressEvent(model_id, ProgressStage.ERROR, 0, error_msg))
            return {"status": "error", "error": error_msg, "model_id": model_id}

        # Create temporary file for meshio
        fd, temp_path = tempfile.mkstemp(suffix=".vtu")
        
        with os.fdopen(fd, "wb") as f:
            f.write(raw_bytes)
        
        # 1. Parse
        result = run_parse_job(model_id, temp_path, filename, publish=publish)

        if result.status == JobStatus.ERROR:
            _safe_log("error", "Parse failed", model_id=model_id, error=result.error_message)
            _write_model_status(db, model_id, "error", result.error_message, result.error_code)
            publish(ProgressEvent(
                model_id,
                ProgressStage.ERROR,
                100,
                result.error_message or "Parsing failed",
                detail={"error_code": result.error_code},
            ))
            return {
                "status": "error",
                "error": result.error_message,
                "error_code": result.error_code,
                "model_id": model_id,
            }

        # 2. Normalize
        publish(ProgressEvent(model_id, ProgressStage.PARSING_FIELDS, 80, "Normalizing data..."))
        try:
            if result.parse_result is None:
                raise ValueError("Parse result missing for successful parse job")
            normalized_model = normalize(result.parse_result)
        except Exception as e:
            error_msg = f"Normalization failed: {e}"
            _safe_log("error", "Normalization failed", model_id=model_id, error=error_msg)
            _write_model_status(db, model_id, "error", error_msg)
            publish(ProgressEvent(model_id, ProgressStage.ERROR, 100, error_msg))
            return {"status": "error", "error": error_msg, "model_id": model_id}

        # 3. Validate
        publish(ProgressEvent(model_id, ProgressStage.PARSING_FIELDS, 85, "Validating model..."))
        val_result = validate(normalized_model)
        if not val_result.is_valid:
            error_details = "; ".join(e.message for e in val_result.errors)
            error_msg = f"Validation failed: {error_details}"
            _safe_log("error", "Validation failed", model_id=model_id, error=error_msg)
            _write_model_status(db, model_id, "error", error_msg)
            publish(ProgressEvent(model_id, ProgressStage.ERROR, 100, error_msg))
            return {"status": "error", "error": error_msg, "model_id": model_id}

        # 4. Extract Surface
        publish(ProgressEvent(model_id, ProgressStage.PARSING_FIELDS, 90, "Extracting surfaces..."))
        try:
            surface_mesh = extract_surface(normalized_model.nodes, normalized_model.elements)
        except Exception as e:
            error_msg = f"Surface extraction failed: {e}"
            _safe_log("error", "Surface extraction failed", model_id=model_id, error=error_msg)
            _write_model_status(db, model_id, "error", error_msg)
            publish(ProgressEvent(model_id, ProgressStage.ERROR, 100, error_msg))
            return {"status": "error", "error": error_msg, "model_id": model_id}

        # 5. Write to Storage & Postgres 
        publish(ProgressEvent(model_id, ProgressStage.PARSING_FIELDS, 95, "Writing to storage..."))
        try:
            write_result = write_model(
                model_id=model_id,
                raw_filename=filename,
                raw_file_bytes=raw_bytes,
                validation_result=val_result,
                surface_mesh=surface_mesh,
                object_store=storage,
                metadata_store=db
            )
        except Exception as e:
            error_msg = f"Storage write failed: {e}"
            _safe_log("error", "Storage write failed", model_id=model_id, error=error_msg)
            _write_model_status(db, model_id, "error", error_msg)
            publish(ProgressEvent(model_id, ProgressStage.ERROR, 100, error_msg))
            return {"status": "error", "error": error_msg, "model_id": model_id}

        _safe_log("info", "Parse succeeded", model_id=model_id, written_keys=len(write_result.written_keys))
        _write_model_status(db, model_id, "ready")
        publish(ProgressEvent(model_id, ProgressStage.COMPLETE, 100, "Parsing complete"))
        return {"status": "ready", "model_id": model_id, "written_keys": len(write_result.written_keys)}

    except Exception as e:
        error_msg = str(e)
        logger.error(f"Unhandled exception in process_upload: {e}\n{traceback.format_exc()}")
        try:
            _write_model_status(db, model_id, "error", error_msg)
        except Exception:
            pass
        try:
            publish(ProgressEvent(model_id, ProgressStage.ERROR, 100, error_msg))
        except Exception:
            pass
        return {"status": "error", "error": error_msg, "model_id": model_id}

    finally:
        if temp_path and os.path.exists(temp_path):
            try:
                os.unlink(temp_path)
            except Exception as e:
                logger.warning(f"Failed to unlink temp file {temp_path}: {e}")
