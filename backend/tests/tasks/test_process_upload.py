import sys
from pathlib import Path
from unittest import mock

# Mocking dependencies that might be missing in the local test environment
# to allow for test collection and execution of unit tests using mocks.
sys.modules["psycopg2"] = mock.MagicMock()
sys.modules["redis"] = mock.MagicMock()

from app.tasks.parse_task import process_upload
from app.tasks.parse_task import JobStatus
from app.tasks.parse_task import ParseJobResult
from app.tasks.parse_task import TASK_WORKER_LOST_CODE
from app.tasks.parse_task import WorkerLostError

class DummyStorage:
    def __init__(self, initial_objects=None):
        self.blobs = dict(initial_objects or {})

    def get_object_stream(self, key):
        return self.blobs.get(key)
    
    def put_object(self, key, data):
        self.blobs[key] = data

class DummyDB:
    def __init__(self):
        self.status = {}
        self.errors = {}
        self.error_codes = {}
    
    def update_model_status(self, model_id, status, error_message=None, error_code=None):
        self.status[model_id] = status
        self.errors[model_id] = error_message
        self.error_codes[model_id] = error_code
        
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
        if "properties" in row and "error_code" in row["properties"]:
            self.error_codes[model_id] = row["properties"]["error_code"]
        elif "error_code" in row:
            self.error_codes[model_id] = row["error_code"]
        
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
    raw_key = "uploads/model-123/raw/test.vtu"
    storage_inst = DummyStorage({raw_key: b"dummy_data"})
    
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
    
    res = process_upload("model-123", raw_key, "test.vtu")
    
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
    raw_key = "uploads/model-123/raw/fail.vtu"
    storage_inst = DummyStorage({raw_key: b"dummy_data"})
    
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
    
    res = process_upload("model-123", raw_key, "fail.vtu")
    
    assert res["status"] == "error"
    assert "corrupted file" in res["error"]
    assert db_inst.status["model-123"] == "error"
    assert db_inst.errors["model-123"] == "corrupted file"


@mock.patch("app.tasks.parse_task.PostgresMetadataStore")
@mock.patch("app.tasks.parse_task.S3Client")
@mock.patch("app.tasks.parse_task.redis_publisher_factory")
@mock.patch("app.tasks.parse_task.run_parse_job")
def test_process_upload_persists_structured_parse_error_code(mock_run, mock_pub, mock_s3, mock_db):
    db_inst = DummyDB()
    raw_key = "uploads/model-123/raw/fail.vtu"
    storage_inst = DummyStorage({raw_key: b"dummy_data"})

    mock_db.return_value = db_inst
    mock_s3.return_value = storage_inst
    mock_pub.return_value = lambda event: None
    mock_run.return_value = ParseJobResult(
        model_id="model-123",
        status=JobStatus.ERROR,
        error_message="Invalid VTU file 'fail.vtu': the file is malformed.",
        error_code="invalid_vtu_format",
        duration_seconds=0.1,
    )

    res = process_upload("model-123", raw_key, "fail.vtu")

    assert res["status"] == "error"
    assert res["error_code"] == "invalid_vtu_format"
    assert db_inst.error_codes["model-123"] == "invalid_vtu_format"


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
    assert res["error_code"] == "raw_upload_missing"
    assert db_inst.status["model-123"] == "error"
    assert "not found in storage" in res["error"]


@mock.patch("app.tasks.parse_task.PostgresMetadataStore")
@mock.patch("app.tasks.parse_task.S3Client")
@mock.patch("app.tasks.parse_task.redis_publisher_factory")
@mock.patch("app.tasks.parse_task.run_parse_job")
def test_corrupted_vtu_stays_raw_only_and_transitions_to_error(mock_run, mock_pub, mock_s3, mock_db):
    db_inst = DummyDB()
    broken_bytes = Path("/home/lev52808/projects/fea-viewer/backend/tests/audit-artifacts/audit_broken.vtu").read_bytes()
    raw_key = "uploads/model-corrupt/raw/audit_broken.vtu"
    storage_inst = DummyStorage({raw_key: broken_bytes})

    mock_db.return_value = db_inst
    mock_s3.return_value = storage_inst
    mock_pub.return_value = lambda event: None
    mock_run.return_value = ParseJobResult(
        model_id="model-corrupt",
        status=JobStatus.ERROR,
        error_message="Parsing failed for 'audit_broken.vtu' because the parser process exited unexpectedly.",
        error_code="parse_subprocess_failed",
        duration_seconds=0.1,
    )

    res = process_upload("model-corrupt", raw_key, "audit_broken.vtu")

    assert res["status"] == "error"
    assert res["error_code"] == "parse_subprocess_failed"
    assert db_inst.status["model-corrupt"] == "error"
    assert db_inst.errors["model-corrupt"]
    assert db_inst.error_codes["model-corrupt"] == "parse_subprocess_failed"
    assert storage_inst.blobs[raw_key] == broken_bytes
    assert not any(key.startswith("models/model-corrupt/") for key in storage_inst.blobs)


@mock.patch("app.tasks.parse_task.PostgresMetadataStore")
@mock.patch("app.tasks.parse_task.S3Client")
@mock.patch("app.tasks.parse_task.redis_publisher_factory")
@mock.patch("app.tasks.task_failure_handler.PostgresMetadataStore")
@mock.patch("app.tasks.parse_task.run_parse_job")
def test_worker_lost_forces_terminal_error_state(mock_run, mock_failure_db, mock_pub, mock_s3, mock_db):
    db_inst = DummyDB()
    raw_key = "uploads/model-123/raw/fail.vtu"
    storage_inst = DummyStorage({raw_key: b"dummy_data"})

    mock_db.return_value = db_inst
    mock_failure_db.return_value = db_inst
    mock_s3.return_value = storage_inst
    mock_pub.return_value = lambda event: None
    mock_run.side_effect = WorkerLostError("child exited")

    res = process_upload("model-123", raw_key, "fail.vtu")

    assert res["status"] == "error"
    assert res["error_code"] == TASK_WORKER_LOST_CODE
    assert db_inst.status["model-123"] == "error"
    assert db_inst.error_codes["model-123"] == TASK_WORKER_LOST_CODE
