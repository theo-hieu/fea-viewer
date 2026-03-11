"""
Test suite for backend/app/tasks/parse_task.py

Covers:
  - Progress event emission order (detecting → parsing_* → complete/error)
  - Status transitions (pending → parsing → ready/error)
  - Error handling preserves raw file
  - Audit log content verification
  - Detection failure path
  - Parse failure path
  - Successful parse with warnings
  - File-read failure

Self-check:
  - Worker does not perform storage, rendering, or normalization
  - Status transitions are deterministic
"""

from __future__ import annotations

import os
import logging
from unittest import mock

import numpy as np
import pytest

from app.parsing.models import (
    CellBlock,
    ElementType,
    FieldLocation,
    FieldProvenance,
    ModelMetadata,
    ParseError,
    ParseResult,
    ResultField,
    TimestepData,
    UnitSystem,
)
from app.tasks.parse_task import (
    JobStatus,
    ParseJobResult,
    ProgressEvent,
    ProgressStage,
    run_parse_job,
)


# ===================================================================
# Helpers
# ===================================================================

def make_success_result(
    node_count: int = 10,
    element_count: int = 5,
    field_count: int = 1,
    warnings: list[str] | None = None,
) -> ParseResult:
    """Create a minimal ParseResult for testing."""
    return ParseResult(
        points=np.zeros((node_count, 3), dtype=np.float64),
        cell_blocks=[CellBlock(
            element_type=ElementType.TRI3,
            connectivity=np.zeros((element_count, 3), dtype=np.int32),
            count=element_count,
        )],
        result_fields=[ResultField(
            name="stress",
            location=FieldLocation.NODAL,
            n_components=1,
            provenance=FieldProvenance(
                source_field_name="stress",
                source_location=FieldLocation.NODAL,
            ),
            timestep_data=[TimestepData(
                step_index=0,
                time_value=None,
                values=np.zeros(node_count, dtype=np.float64),
            )],
        )] if field_count > 0 else [],
        metadata=ModelMetadata(
            source_filename="model.vtu",
            file_format="vtk_xml",
        ),
        warnings=warnings or [],
        parser_backend="meshio",
        node_count=node_count,
        element_count=element_count,
        field_count=field_count,
    )


def make_parse_error() -> ParseError:
    """Create a ParseError for testing."""
    return ParseError(
        error_type="RuntimeError",
        error_message="Both parsers failed.",
        traceback_meshio="meshio traceback...",
        traceback_vtk="vtk traceback...",
        source_filename="model.vtu",
    )


def write_vtu(filepath: str) -> None:
    """Write a minimal VTU file for detection to pass."""
    with open(filepath, "w") as f:
        f.write('<?xml version="1.0"?>\n<VTKFile type="UnstructuredGrid">\n</VTKFile>\n')


def collect_events(events: list[ProgressEvent]) -> list:
    """Create a publisher that collects events into a list."""
    def publisher(event: ProgressEvent):
        events.append(event)
    return publisher


# ===================================================================
# 1. Successful parse — progress events & status
# ===================================================================

class TestSuccessfulParse:
    """Full success path: detection → parse → ready."""

    def test_status_is_ready(self, tmp_path):
        filepath = str(tmp_path / "model.vtu")
        write_vtu(filepath)

        with mock.patch("app.tasks.parse_task.parse_vtk") as mock_parse:
            mock_parse.return_value = make_success_result()

            result = run_parse_job("model-001", filepath, "model.vtu")

        assert result.status == JobStatus.READY
        assert result.model_id == "model-001"
        assert result.node_count == 10
        assert result.element_count == 5
        assert result.field_count == 1
        assert result.parse_result is not None

    def test_progress_event_order(self, tmp_path):
        """Events are emitted in the correct order."""
        filepath = str(tmp_path / "model.vtu")
        write_vtu(filepath)

        events: list[ProgressEvent] = []

        with mock.patch("app.tasks.parse_task.parse_vtk") as mock_parse:
            mock_parse.return_value = make_success_result()

            run_parse_job("m1", filepath, "model.vtu", publish=collect_events(events))

        stages = [e.stage for e in events]
        assert stages == [
            ProgressStage.DETECTING,
            ProgressStage.PARSING_NODES,
            ProgressStage.PARSING_ELEMENTS,
            ProgressStage.PARSING_FIELDS,
            ProgressStage.READING_METADATA,
            ProgressStage.COMPLETE,
        ]

    def test_progress_percentages_monotonic(self, tmp_path):
        """Progress percentages should be monotonically increasing."""
        filepath = str(tmp_path / "model.vtu")
        write_vtu(filepath)

        events: list[ProgressEvent] = []

        with mock.patch("app.tasks.parse_task.parse_vtk") as mock_parse:
            mock_parse.return_value = make_success_result()

            run_parse_job("m1", filepath, "model.vtu", publish=collect_events(events))

        pcts = [e.progress_pct for e in events]
        assert pcts == sorted(pcts)
        assert pcts[-1] == 100

    def test_complete_event_has_detail(self, tmp_path):
        filepath = str(tmp_path / "model.vtu")
        write_vtu(filepath)

        events: list[ProgressEvent] = []

        with mock.patch("app.tasks.parse_task.parse_vtk") as mock_parse:
            mock_parse.return_value = make_success_result()

            run_parse_job("m1", filepath, "model.vtu", publish=collect_events(events))

        complete = [e for e in events if e.stage == ProgressStage.COMPLETE][0]
        assert complete.detail is not None
        assert "node_count" in complete.detail
        assert "element_count" in complete.detail
        assert "parser_backend" in complete.detail

    def test_warnings_preserved_on_success(self, tmp_path):
        filepath = str(tmp_path / "model.vtu")
        write_vtu(filepath)

        with mock.patch("app.tasks.parse_task.parse_vtk") as mock_parse:
            mock_parse.return_value = make_success_result(
                warnings=["Unsupported element type 'polygon' skipped."]
            )

            result = run_parse_job("m1", filepath, "model.vtu")

        assert result.status == JobStatus.READY
        assert result.warning_count == 1
        assert "polygon" in result.warnings[0]

    def test_duration_recorded(self, tmp_path):
        filepath = str(tmp_path / "model.vtu")
        write_vtu(filepath)

        with mock.patch("app.tasks.parse_task.parse_vtk") as mock_parse:
            mock_parse.return_value = make_success_result()

            result = run_parse_job("m1", filepath, "model.vtu")

        assert result.duration_seconds >= 0


# ===================================================================
# 2. Parse failure path
# ===================================================================

class TestParseFailure:
    """When parser returns ParseError."""

    def test_status_is_error(self, tmp_path):
        filepath = str(tmp_path / "model.vtu")
        write_vtu(filepath)

        with mock.patch("app.tasks.parse_task.parse_vtk") as mock_parse:
            mock_parse.return_value = make_parse_error()

            result = run_parse_job("m1", filepath, "model.vtu")

        assert result.status == JobStatus.ERROR
        assert result.parse_error is not None
        assert result.error_message is not None

    def test_error_event_emitted(self, tmp_path):
        filepath = str(tmp_path / "model.vtu")
        write_vtu(filepath)

        events: list[ProgressEvent] = []

        with mock.patch("app.tasks.parse_task.parse_vtk") as mock_parse:
            mock_parse.return_value = make_parse_error()

            run_parse_job("m1", filepath, "model.vtu", publish=collect_events(events))

        stages = [e.stage for e in events]
        assert ProgressStage.ERROR in stages

    def test_raw_file_preserved_on_error(self, tmp_path):
        filepath = str(tmp_path / "model.vtu")
        write_vtu(filepath)

        with mock.patch("app.tasks.parse_task.parse_vtk") as mock_parse:
            mock_parse.return_value = make_parse_error()

            run_parse_job("m1", filepath, "model.vtu")

        assert os.path.exists(filepath)


# ===================================================================
# 3. Detection failure path
# ===================================================================

class TestDetectionFailure:
    """When format detection rejects the file."""

    def test_unsupported_format_returns_error(self, tmp_path):
        filepath = str(tmp_path / "model.bin")
        with open(filepath, "wb") as f:
            f.write(b"\x00\x01\x02\x03" * 100)

        result = run_parse_job("m1", filepath, "model.bin")

        assert result.status == JobStatus.ERROR
        assert result.error_message is not None

    def test_executable_rejected(self, tmp_path):
        filepath = str(tmp_path / "solver.exe")
        with open(filepath, "wb") as f:
            f.write(b"MZ" + b"\x90" * 100)

        result = run_parse_job("m1", filepath, "solver.exe")

        assert result.status == JobStatus.ERROR

    def test_detection_error_events(self, tmp_path):
        filepath = str(tmp_path / "data.csv")
        with open(filepath, "w") as f:
            f.write("a,b,c\n1,2,3\n")

        events: list[ProgressEvent] = []
        result = run_parse_job("m1", filepath, "data.csv", publish=collect_events(events))

        assert result.status == JobStatus.ERROR
        stages = [e.stage for e in events]
        assert ProgressStage.DETECTING in stages
        assert ProgressStage.ERROR in stages


# ===================================================================
# 4. File read failure
# ===================================================================

class TestFileReadFailure:
    """When the file cannot be read at all."""

    def test_missing_file_returns_error(self, tmp_path):
        filepath = str(tmp_path / "nonexistent.vtu")

        result = run_parse_job("m1", filepath, "nonexistent.vtu")

        assert result.status == JobStatus.ERROR
        assert "Cannot read file" in result.error_message


# ===================================================================
# 5. Progress event serialization
# ===================================================================

class TestProgressEventSerialization:
    """ProgressEvent JSON serialization contract."""

    def test_to_json_format(self):
        event = ProgressEvent(
            model_id="m1",
            stage=ProgressStage.PARSING_NODES,
            progress_pct=15,
            message="Parsing nodes...",
        )
        import json
        data = json.loads(event.to_json())
        assert data["model_id"] == "m1"
        assert data["stage"] == "parsing_nodes"
        assert data["progress_pct"] == 15
        assert data["message"] == "Parsing nodes..."

    def test_to_json_with_detail(self):
        event = ProgressEvent(
            model_id="m1",
            stage=ProgressStage.COMPLETE,
            progress_pct=100,
            message="Done",
            detail={"node_count": 42},
        )
        import json
        data = json.loads(event.to_json())
        assert data["detail"]["node_count"] == 42


# ===================================================================
# 6. Audit logging
# ===================================================================

class TestAuditLogging:
    """Verify structured audit logging."""

    def test_success_audit_log(self, tmp_path, caplog):
        filepath = str(tmp_path / "model.vtu")
        write_vtu(filepath)

        with mock.patch("app.tasks.parse_task.parse_vtk") as mock_parse:
            mock_parse.return_value = make_success_result()

            with caplog.at_level(logging.INFO):
                run_parse_job("m1", filepath, "model.vtu")

        assert any("parse_job_audit" in r.message or
                    "Parse job completed" in r.message
                    for r in caplog.records)

    def test_error_audit_log(self, tmp_path, caplog):
        filepath = str(tmp_path / "model.vtu")
        write_vtu(filepath)

        with mock.patch("app.tasks.parse_task.parse_vtk") as mock_parse:
            mock_parse.return_value = make_parse_error()

            with caplog.at_level(logging.ERROR):
                run_parse_job("m1", filepath, "model.vtu")

        assert any("parse_job" in r.message.lower() or
                    "Parse job failed" in r.message
                    for r in caplog.records)


# ===================================================================
# 7. Publisher failure resilience
# ===================================================================

class TestPublisherResilience:
    """Progress publishing failures must not crash the job."""

    def test_publisher_exception_does_not_crash(self, tmp_path):
        filepath = str(tmp_path / "model.vtu")
        write_vtu(filepath)

        def bad_publisher(event):
            raise ConnectionError("Redis down")

        with mock.patch("app.tasks.parse_task.parse_vtk") as mock_parse:
            mock_parse.return_value = make_success_result()

            # Should not raise despite publisher failures
            result = run_parse_job("m1", filepath, "model.vtu", publish=bad_publisher)

        assert result.status == JobStatus.READY


# ===================================================================
# 8. Determinism
# ===================================================================

class TestDeterminism:
    """Status transitions are deterministic."""

    def test_success_always_ready(self, tmp_path):
        filepath = str(tmp_path / "model.vtu")
        write_vtu(filepath)

        results = []
        for _ in range(5):
            with mock.patch("app.tasks.parse_task.parse_vtk") as mock_parse:
                mock_parse.return_value = make_success_result()
                results.append(run_parse_job("m1", filepath, "model.vtu"))

        assert all(r.status == JobStatus.READY for r in results)

    def test_error_always_error(self, tmp_path):
        filepath = str(tmp_path / "model.vtu")
        write_vtu(filepath)

        results = []
        for _ in range(5):
            with mock.patch("app.tasks.parse_task.parse_vtk") as mock_parse:
                mock_parse.return_value = make_parse_error()
                results.append(run_parse_job("m1", filepath, "model.vtu"))

        assert all(r.status == JobStatus.ERROR for r in results)
