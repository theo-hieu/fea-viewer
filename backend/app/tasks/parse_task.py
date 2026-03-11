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
import time
from dataclasses import dataclass, field
from enum import Enum
from typing import Any, Callable, Optional

from app.parsing.detect import (
    DetectedFormat,
    MVPParseSupport,
    detect_format,
)
from app.parsing.models import ParseError, ParseResult
from app.parsing.vtk_parser import parse_vtk

logger = logging.getLogger(__name__)


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
            logger.warning(
                "Failed to publish progress event",
                extra={"model_id": model_id, "stage": stage.value, "error": str(pub_exc)},
            )

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


# ---------------------------------------------------------------------------
# Celery Task Entrypoint
# ---------------------------------------------------------------------------
import os
import tempfile
import traceback
from app.tasks.celery_app import celery_app
from app.models.db import PostgresMetadataStore
from app.storage.s3_client import S3Client

@celery_app.task(name="app.tasks.parse_task.process_upload")
def process_upload(model_id: str, raw_key: str, filename: str) -> dict:
    db = PostgresMetadataStore()
    storage = S3Client()

    try:
        # Mark as parsing
        db.update_model_status(model_id, "parsing")

        # Download from S3 to temp disk
        raw_bytes = storage.get_object_stream(raw_key)
        if not raw_bytes:
            db.update_model_status(model_id, "error")
            return {"status": "error", "error": f"Raw key {raw_key} not found in storage."}

        # Create temporary file for meshio
        fd, temp_path = tempfile.mkstemp(suffix=".vtu")
        try:
            with open(fd, "wb") as f:
                f.write(raw_bytes)
            
            # Execute the core parse logic
            result = run_parse_job(model_id, temp_path, filename)

            if result.status == JobStatus.ERROR:
                db.update_model_status(model_id, "error")
            else:
                db.update_model_status(model_id, "ready")

            return {"status": result.status.value, "model_id": model_id}

        finally:
            os.unlink(temp_path)

    except Exception as e:
        logger.error(f"Unhandled exception in process_upload: {e}\n{traceback.format_exc()}")
        db.update_model_status(model_id, "error")
        return {"status": "error", "error": str(e)}
