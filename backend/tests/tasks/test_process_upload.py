import sys
from unittest import mock

# Mocking dependencies that might be missing in the local test environment
# to allow for test collection and execution of unit tests using mocks.
sys.modules["psycopg2"] = mock.MagicMock()
sys.modules["redis"] = mock.MagicMock()

from unittest import mock
import os
import pytest

from app.tasks.parse_task import process_upload
from app.parsing.models import ParseError
from app.tasks.parse_task import JobStatus
from app.tasks.parse_task import ParseJobResult

class DummyStorage:
    def get_object_stream(self, key):
        if "missing" in key:
            return None
        return b"dummy_data"
    
    def put_object(self, key, data):
        pass

class DummyDB:
    def __init__(self):
        self.status = {}
        self.errors = {}
    
    def update_model_status(self, model_id, status, error_message=None):
        self.status[model_id] = status
        self.errors[model_id] = error_message
        
    def replace_result_fields(self, model_id, fields):
        pass
        
    def replace_named_sets(self, model_id, sets):
        pass
        
    def upsert_model(self, row):
        model_id = row["id"]
        if "status" in row:
            self.status[model_id] = row["status"]
        if "properties" in row and "error_message" in row["properties"]:
            self.errors[model_id] = row["properties"]["error_message"]
        elif "error_message" in row:
            self.errors[model_id] = row["error_message"]
        
    def transaction(self):
        from contextlib import contextmanager
        @contextmanager
        def dummy_ctx():
            yield
        return dummy_ctx()


@mock.patch("app.tasks.parse_task.PostgresMetadataStore")
@mock.patch("app.tasks.parse_task.S3Client")
@mock.patch("app.tasks.parse_task.redis_publisher_factory")
@mock.patch("app.tasks.parse_task.run_parse_job")
def test_process_upload_success(mock_run, mock_pub, mock_s3, mock_db):
    """Test full upload lifecycle success path."""
    db_inst = DummyDB()
    storage_inst = DummyStorage()
    
    mock_db.return_value = db_inst
    mock_s3.return_value = storage_inst
    mock_pub.return_value = lambda event: None
    
    from tests.tasks.test_parse_task import make_success_result
    parse_output = make_success_result()
    
    # Mock parse success
    mock_run.return_value = ParseJobResult(
        model_id="model-123",
        status=JobStatus.READY,
        parse_result=parse_output,
        duration_seconds=1.0,
    )
    
    res = process_upload("model-123", "uploads/model-123/raw/test.vtu", "test.vtu")
    
    assert res["status"] == "ready"
    assert db_inst.status["model-123"] == "ready"
    assert res["model_id"] == "model-123"


@mock.patch("app.tasks.parse_task.PostgresMetadataStore")
@mock.patch("app.tasks.parse_task.S3Client")
@mock.patch("app.tasks.parse_task.redis_publisher_factory")
@mock.patch("app.tasks.parse_task.run_parse_job")
def test_process_upload_parse_failure(mock_run, mock_pub, mock_s3, mock_db):
    """Test full upload lifecycle failure path."""
    db_inst = DummyDB()
    storage_inst = DummyStorage()
    
    mock_db.return_value = db_inst
    mock_s3.return_value = storage_inst
    mock_pub.return_value = lambda event: None
    
    # Mock parse failure
    mock_run.return_value = ParseJobResult(
        model_id="model-123",
        status=JobStatus.ERROR,
        error_message="corrupted file",
        duration_seconds=0.1,
    )
    
    res = process_upload("model-123", "uploads/model-123/raw/fail.vtu", "fail.vtu")
    
    assert res["status"] == "error"
    assert "corrupted file" in res["error"]
    assert db_inst.status["model-123"] == "error"
    assert db_inst.errors["model-123"] == "corrupted file"


@mock.patch("app.tasks.parse_task.PostgresMetadataStore")
@mock.patch("app.tasks.parse_task.S3Client")
@mock.patch("app.tasks.parse_task.redis_publisher_factory")
def test_process_upload_missing_file(mock_pub, mock_s3, mock_db):
    """Test when the file is not found in MinIO."""
    db_inst = DummyDB()
    storage_inst = DummyStorage()
    
    mock_db.return_value = db_inst
    mock_s3.return_value = storage_inst
    mock_pub.return_value = lambda event: None
    
    res = process_upload("model-123", "missing/file.vtu", "file.vtu")
    
    assert res["status"] == "error"
    assert db_inst.status["model-123"] == "error"
    assert "not found in storage" in res["error"]
