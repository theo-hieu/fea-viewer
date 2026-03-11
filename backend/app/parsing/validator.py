"""
FEA Viewer — Validation Module
================================

Pipeline position: Raw File → Format Detector → Parser → Normalizer → **Validator** → Storage Writer

This module is a deterministic validation layer that consumes the normalized
model (NormalizedModel) and returns either:
  - A validated model with accumulated warnings (ValidationResult with is_valid=True)
  - A blocking validation failure with machine-readable error reasons (is_valid=False)

Blocking checks (hard-fail, model status → "error"):
  1. node_count > 0
  2. element_count > 0
  3. All connectivity indices in [0, node_count)
  4. No duplicate node IDs
  5. No duplicate element IDs

Warning checks (non-blocking, surfaced in model.warnings):
  1. Empty node or element sets
  2. Unnamed parts → fallback naming "Unnamed Part [index]"
  3. Missing units → preserve "unspecified", emit warning

Invariants:
  - Never repair invalid connectivity or deduplicate IDs
  - Never fabricate metadata, units, or part names beyond documented fallback
  - Never downgrade blocking violations to warnings
  - Deterministic, auditable behavior for mission-critical engineering software
  - Output suitable for model status, warnings array, and audit logging

Source authority:
  - 02a-system-architecture.md §2: Data model constraints
  - 03b-risks-acceptance.md: Warning taxonomy
  - 01-product-specification.md: Duplicate ID rejection, metadata handling
  - 04-mvp-implementation-plan.md §2.2 step 4: Validation rules
"""

from __future__ import annotations

import logging
from dataclasses import dataclass, field
from typing import Optional

import numpy as np

from app.parsing.models import NormalizedModel

logger = logging.getLogger(__name__)


# ---------------------------------------------------------------------------
# Validation result types
# ---------------------------------------------------------------------------

@dataclass(frozen=True)
class ValidationError:
    """
    A single blocking validation error.

    Fields:
        code:    Machine-readable error code for API mapping.
        message: Human-readable error description for audit logging.
        detail:  Optional structured detail (e.g., indices, IDs).
    """
    code: str
    message: str
    detail: Optional[dict] = None


@dataclass(frozen=True)
class ValidationWarning:
    """
    A single non-blocking validation warning.

    Fields:
        code:    Machine-readable warning code.
        message: Human-readable warning description.
    """
    code: str
    message: str


@dataclass(frozen=True)
class ValidationResult:
    """
    Complete validation output.

    Fields:
        is_valid: True if no blocking errors found. Model can proceed to storage.
        errors:   Blocking errors (only present when is_valid=False).
        warnings: Non-blocking warnings (present regardless of is_valid).
        model:    The validated model (same reference as input, unchanged).
                  Only meaningful when is_valid=True.
    """
    is_valid: bool
    errors: list[ValidationError] = field(default_factory=list)
    warnings: list[ValidationWarning] = field(default_factory=list)
    model: Optional[NormalizedModel] = None


# ---------------------------------------------------------------------------
# Error codes
# ---------------------------------------------------------------------------

class ErrorCode:
    """Machine-readable error codes for blocking validation failures."""
    EMPTY_NODES = "VALIDATION_EMPTY_NODES"
    EMPTY_ELEMENTS = "VALIDATION_EMPTY_ELEMENTS"
    CONNECTIVITY_OUT_OF_BOUNDS = "VALIDATION_CONNECTIVITY_OUT_OF_BOUNDS"
    DUPLICATE_NODE_IDS = "VALIDATION_DUPLICATE_NODE_IDS"
    DUPLICATE_ELEMENT_IDS = "VALIDATION_DUPLICATE_ELEMENT_IDS"


class WarningCode:
    """Machine-readable warning codes for non-blocking issues."""
    EMPTY_SET = "VALIDATION_EMPTY_SET"
    UNNAMED_PART = "VALIDATION_UNNAMED_PART"
    MISSING_UNITS = "VALIDATION_MISSING_UNITS"


# ---------------------------------------------------------------------------
# Public API
# ---------------------------------------------------------------------------

def validate(model: NormalizedModel) -> ValidationResult:
    """
    Validate a normalized model for structural integrity.

    Runs all blocking checks first. If any fail, returns immediately with
    is_valid=False and the collected errors. Non-blocking checks run only
    if all blocking checks pass.

    Parameters
    ----------
    model : NormalizedModel
        The normalized model from normalizer.normalize().

    Returns
    -------
    ValidationResult
        is_valid=True with warnings if model passes all blocking checks.
        is_valid=False with errors if any blocking check fails.
    """
    errors: list[ValidationError] = []
    warnings: list[ValidationWarning] = []

    # --- Blocking checks ---
    _check_node_count(model, errors)
    _check_element_count(model, errors)
    _check_connectivity_bounds(model, errors)
    _check_duplicate_node_ids(model, errors)
    _check_duplicate_element_ids(model, errors)

    if errors:
        logger.error(
            "Validation failed with blocking errors",
            extra={
                "error_count": len(errors),
                "error_codes": [e.code for e in errors],
                "source_filename": model.metadata.source_filename,
            },
        )
        return ValidationResult(
            is_valid=False,
            errors=errors,
            warnings=warnings,
            model=None,
        )

    # --- Non-blocking checks (warnings only) ---
    _check_empty_sets(model, warnings)
    _check_unnamed_parts(model, warnings)
    _check_missing_units(model, warnings)

    logger.info(
        "Validation passed",
        extra={
            "warning_count": len(warnings),
            "source_filename": model.metadata.source_filename,
            "node_count": model.nodes.count,
            "element_count": model.elements.count,
        },
    )

    return ValidationResult(
        is_valid=True,
        errors=[],
        warnings=warnings,
        model=model,
    )


# ---------------------------------------------------------------------------
# Blocking checks
# ---------------------------------------------------------------------------

def _check_node_count(
    model: NormalizedModel,
    errors: list[ValidationError],
) -> None:
    """node_count must be > 0."""
    if model.nodes.count <= 0:
        errors.append(ValidationError(
            code=ErrorCode.EMPTY_NODES,
            message="Model has zero nodes. Cannot proceed with empty geometry.",
            detail={"node_count": model.nodes.count},
        ))


def _check_element_count(
    model: NormalizedModel,
    errors: list[ValidationError],
) -> None:
    """element_count must be > 0."""
    if model.elements.count <= 0:
        errors.append(ValidationError(
            code=ErrorCode.EMPTY_ELEMENTS,
            message="Model has zero elements. Cannot proceed with empty topology.",
            detail={"element_count": model.elements.count},
        ))


def _check_connectivity_bounds(
    model: NormalizedModel,
    errors: list[ValidationError],
) -> None:
    """
    Every connectivity index must be in [0, node_count).

    Do not silently repair — report and fail.
    """
    if model.elements.count == 0:
        return  # Already caught by element count check

    connectivity = model.elements.connectivity
    node_count = model.nodes.count

    if len(connectivity) == 0:
        return

    min_idx = int(connectivity.min())
    max_idx = int(connectivity.max())

    if min_idx < 0:
        # Find all negative indices
        negative_positions = np.where(connectivity < 0)[0]
        errors.append(ValidationError(
            code=ErrorCode.CONNECTIVITY_OUT_OF_BOUNDS,
            message=(
                f"Connectivity contains negative indices. "
                f"Found {len(negative_positions)} negative value(s), "
                f"minimum value: {min_idx}."
            ),
            detail={
                "min_index": min_idx,
                "negative_count": int(len(negative_positions)),
                "first_positions": negative_positions[:10].tolist(),
            },
        ))

    if max_idx >= node_count:
        # Find all out-of-bounds indices
        oob_positions = np.where(connectivity >= node_count)[0]
        errors.append(ValidationError(
            code=ErrorCode.CONNECTIVITY_OUT_OF_BOUNDS,
            message=(
                f"Connectivity contains indices >= node_count ({node_count}). "
                f"Found {len(oob_positions)} out-of-bounds value(s), "
                f"maximum value: {max_idx}."
            ),
            detail={
                "max_index": max_idx,
                "node_count": node_count,
                "oob_count": int(len(oob_positions)),
                "first_positions": oob_positions[:10].tolist(),
            },
        ))


def _check_duplicate_node_ids(
    model: NormalizedModel,
    errors: list[ValidationError],
) -> None:
    """
    No duplicate node IDs allowed.

    Per product spec: duplicate node IDs must reject the file.
    """
    ids = model.nodes.ids
    unique_count = len(np.unique(ids))

    if unique_count < len(ids):
        dup_count = len(ids) - unique_count
        # Find first few duplicates for detail
        _, counts = np.unique(ids, return_counts=True)
        dup_values = ids[np.isin(ids, np.unique(ids)[counts > 1])]
        first_dups = np.unique(dup_values)[:10].tolist()

        errors.append(ValidationError(
            code=ErrorCode.DUPLICATE_NODE_IDS,
            message=(
                f"Found {dup_count} duplicate node ID(s). "
                f"Duplicate IDs must be rejected per specification."
            ),
            detail={
                "duplicate_count": dup_count,
                "first_duplicates": first_dups,
            },
        ))


def _check_duplicate_element_ids(
    model: NormalizedModel,
    errors: list[ValidationError],
) -> None:
    """
    No duplicate element IDs allowed.

    Per product spec: duplicate element IDs must reject the file.
    """
    ids = model.elements.ids
    unique_count = len(np.unique(ids))

    if unique_count < len(ids):
        dup_count = len(ids) - unique_count
        _, counts = np.unique(ids, return_counts=True)
        dup_values = ids[np.isin(ids, np.unique(ids)[counts > 1])]
        first_dups = np.unique(dup_values)[:10].tolist()

        errors.append(ValidationError(
            code=ErrorCode.DUPLICATE_ELEMENT_IDS,
            message=(
                f"Found {dup_count} duplicate element ID(s). "
                f"Duplicate IDs must be rejected per specification."
            ),
            detail={
                "duplicate_count": dup_count,
                "first_duplicates": first_dups,
            },
        ))


# ---------------------------------------------------------------------------
# Non-blocking checks (warnings)
# ---------------------------------------------------------------------------

def _check_empty_sets(
    model: NormalizedModel,
    warnings: list[ValidationWarning],
) -> None:
    """Warn on empty node or element sets."""
    for ns in model.node_sets:
        if len(ns.member_indices) == 0:
            warnings.append(ValidationWarning(
                code=WarningCode.EMPTY_SET,
                message=f"Node set '{ns.name}' is empty (zero members).",
            ))

    for es in model.element_sets:
        if len(es.member_indices) == 0:
            warnings.append(ValidationWarning(
                code=WarningCode.EMPTY_SET,
                message=f"Element set '{es.name}' is empty (zero members).",
            ))


def _check_unnamed_parts(
    model: NormalizedModel,
    warnings: list[ValidationWarning],
) -> None:
    """
    Warn on unnamed parts.

    Per product spec: use fallback display name "Unnamed Part [index]".
    The part itself is NOT modified (frozen dataclass). The warning
    carries the fallback name for downstream UI display.
    """
    for i, part in enumerate(model.parts):
        if not part.name or part.name.strip() == "":
            fallback_name = f"Unnamed Part {i}"
            warnings.append(ValidationWarning(
                code=WarningCode.UNNAMED_PART,
                message=(
                    f"Part '{part.id}' has no name. "
                    f"Display fallback: '{fallback_name}'."
                ),
            ))


def _check_missing_units(
    model: NormalizedModel,
    warnings: list[ValidationWarning],
) -> None:
    """
    Warn when units are unspecified.

    Per spec: do not guess or convert. Preserve "unspecified" and emit warning.
    """
    us = model.unit_system
    unspecified_fields: list[str] = []

    if us.length == "unspecified":
        unspecified_fields.append("length")
    if us.force == "unspecified":
        unspecified_fields.append("force")
    if us.time == "unspecified":
        unspecified_fields.append("time")
    if us.temperature == "unspecified":
        unspecified_fields.append("temperature")

    if unspecified_fields:
        warnings.append(ValidationWarning(
            code=WarningCode.MISSING_UNITS,
            message=(
                f"Unit system has unspecified components: "
                f"{', '.join(unspecified_fields)}. "
                f"No automatic conversion will be applied."
            ),
        ))
