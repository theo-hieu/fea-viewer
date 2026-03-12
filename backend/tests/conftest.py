from __future__ import annotations

import os
import shutil
import tempfile
import uuid
from pathlib import Path

import pytest


def _test_temp_root() -> Path:
    """
    Use an explicit temp root owned by this repository's test harness.

    In some Windows environments pytest's built-in numbered tmpdir factory can
    create directories that later fail `os.scandir()` with WinError 5. Creating
    and cleaning temp directories ourselves avoids that brittle code path while
    still giving every test an isolated writable location.
    """
    root = Path(tempfile.gettempdir()) / "fea-viewer-test-tmp"
    root.mkdir(parents=True, exist_ok=True)
    return root


@pytest.fixture(scope="session", autouse=True)
def configure_test_temp_env() -> None:
    root = _test_temp_root()
    original_tempdir = tempfile.tempdir
    original_env = {key: os.environ.get(key) for key in ("TMP", "TEMP", "TMPDIR")}

    os.environ["TMP"] = str(root)
    os.environ["TEMP"] = str(root)
    os.environ["TMPDIR"] = str(root)
    tempfile.tempdir = str(root)

    try:
        yield
    finally:
        tempfile.tempdir = original_tempdir
        for key, value in original_env.items():
            if value is None:
                os.environ.pop(key, None)
            else:
                os.environ[key] = value


@pytest.fixture
def tmp_path() -> Path:
    path = _test_temp_root() / f"case-{uuid.uuid4().hex}"
    path.mkdir(parents=True, exist_ok=False)
    try:
        yield path
    finally:
        shutil.rmtree(path, ignore_errors=True)
