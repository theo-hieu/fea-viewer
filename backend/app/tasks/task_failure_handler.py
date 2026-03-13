from __future__ import annotations

import logging
from typing import Any

from app.models.db import PostgresMetadataStore

logger = logging.getLogger(__name__)


def write_terminal_failure(
    model_id: str,
    *,
    error_code: str,
    error_message: str,
    status: str = "error",
    extra: dict[str, Any] | None = None,
) -> None:
    log_extra = {"model_id": model_id, "error_code": error_code, "status": status}
    if extra:
        log_extra.update(extra)
    try:
        PostgresMetadataStore().update_model_status(
            model_id,
            status,
            error_message=error_message,
            error_code=error_code,
        )
        logger.error("Forced terminal task failure state", extra=log_extra)
    except Exception:
        logger.exception(
            "Failed to force terminal task failure state",
            extra=log_extra,
        )
