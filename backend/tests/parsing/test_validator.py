"""
Comprehensive test suite for backend/app/parsing/validator.py

Covers:
  1.  Valid model passes with zero errors
  2.  node_count = 0 fails
  3.  element_count = 0 fails
  4.  Negative connectivity index fails
  5.  Connectivity index == node_count fails
  6.  Duplicate node IDs fail
  7.  Duplicate element IDs fail
  8.  Empty node set produces warning
  9.  Empty element set produces warning
  10. Unnamed part warns with fallback naming
  11. Missing units warns and preserves "unspecified"
  12. Multiple warnings coexist without converting to failure
  13. Multiple errors coexist
  14. Error detail structure
  15. Internal consistency self-checks

Output contract:
  - ValidationResult.is_valid == True → model passes, may have warnings
  - ValidationResult.is_valid == False → model fails, has errors[], model is None
  - ValidationResult.warnings always present (may be empty)
  - Downstream maps is_valid=False → model status "error"
  - Downstream preserves raw uploads and parse audit data regardless
"""

from __future__ import annotations

import numpy as np
import pytest

from app.parsing.models import (
    Assembly,
    ElementTable,
    ElementType,
    FieldLocation,
    Instance,
    ModelMetadata,
    NamedSet,
    NodeTable,
    NormalizedFieldProvenance,
    NormalizedModel,
    NormalizedResultField,
    Part,
    TimestepData,
    UnitSystem,
)
from app.parsing.validator import (
    ErrorCode,
    ValidationResult,
    ValidationWarning,
    WarningCode,
    validate,
)


# ===================================================================
# Helpers — synthetic NormalizedModel builders
# ===================================================================

def make_valid_model(
    n_nodes: int = 4,
    n_elements: int = 2,
    parts: list[Part] | None = None,
    instances: list[Instance] | None = None,
    assembly: Assembly | None = None,
    node_sets: list[NamedSet] | None = None,
    element_sets: list[NamedSet] | None = None,
    result_fields: list[NormalizedResultField] | None = None,
    unit_system: UnitSystem | None = None,
    metadata: ModelMetadata | None = None,
    warnings: list[str] | None = None,
    # Overrides for breaking validation
    node_ids: np.ndarray | None = None,
    element_ids: np.ndarray | None = None,
    connectivity: np.ndarray | None = None,
    connectivity_offsets: np.ndarray | None = None,
    element_types: np.ndarray | None = None,
) -> NormalizedModel:
    """Build a valid NormalizedModel with optional overrides for testing."""
    identity = np.eye(4, dtype=np.float64).flatten(order="F")

    if node_ids is None:
        node_ids = np.arange(n_nodes, dtype=np.int32)
    if element_ids is None:
        element_ids = np.arange(n_elements, dtype=np.int32)

    # Default: 2 triangles (indices: 0,1,2 and 1,2,3)
    if connectivity is None:
        connectivity = np.array([0, 1, 2, 1, 2, 3], dtype=np.int32)[:n_elements * 3]
    if connectivity_offsets is None:
        connectivity_offsets = np.array(
            [i * 3 for i in range(n_elements + 1)], dtype=np.int32
        )
    if element_types is None:
        element_types = np.full(n_elements, ElementType.TRI3, dtype=np.uint8)

    nodes = NodeTable(
        count=n_nodes,
        ids=node_ids,
        coordinates=np.random.rand(n_nodes * 3).astype(np.float64),
        coordinate_system="global_cartesian",
        id_to_index={int(node_ids[i]): i for i in range(n_nodes)},
    )

    elements = ElementTable(
        count=n_elements,
        ids=element_ids,
        types=element_types,
        connectivity_offsets=connectivity_offsets,
        connectivity=connectivity,
        id_to_index={int(element_ids[i]): i for i in range(n_elements)},
    )

    if parts is None:
        parts = [Part(
            id="part-0",
            name="Part 1",
            element_indices=np.arange(n_elements, dtype=np.int32),
        )]
    if instances is None:
        instances = [Instance(
            id="instance-0",
            name="Instance 1",
            part_id="part-0",
            transform=identity.copy(),
        )]
    if assembly is None:
        assembly = Assembly(name="Assembly", instance_ids=["instance-0"])

    return NormalizedModel(
        metadata=metadata or ModelMetadata(
            source_filename="test.vtu",
            file_format="vtk_xml",
        ),
        unit_system=unit_system or UnitSystem(),
        nodes=nodes,
        elements=elements,
        parts=parts,
        instances=instances,
        assembly=assembly,
        node_sets=node_sets or [],
        element_sets=element_sets or [],
        result_fields=result_fields or [],
        warnings=warnings or [],
    )


# ===================================================================
# 1. Valid model passes
# ===================================================================

class TestValidModel:
    """A well-formed model passes validation with zero errors."""

    def test_valid_model_passes(self):
        model = make_valid_model()
        result = validate(model)

        assert result.is_valid is True
        assert len(result.errors) == 0
        assert result.model is model

    def test_valid_model_with_fields(self):
        rf = NormalizedResultField(
            id="f1",
            name="stress",
            location=FieldLocation.NODAL,
            n_components=1,
            provenance=NormalizedFieldProvenance("stress", FieldLocation.NODAL),
            timestep_data=[TimestepData(0, None, np.ones(4, dtype=np.float64))],
        )
        model = make_valid_model(result_fields=[rf])
        result = validate(model)
        assert result.is_valid is True

    def test_valid_model_with_declared_units(self):
        model = make_valid_model(unit_system=UnitSystem(
            length="mm", force="N", time="s", temperature="K", declared_system="SI",
        ))
        result = validate(model)
        assert result.is_valid is True
        assert len(result.warnings) == 0  # No missing-units warning


# ===================================================================
# 2. Empty nodes (blocking)
# ===================================================================

class TestEmptyNodes:
    """node_count = 0 is a blocking failure."""

    def test_zero_nodes_fails(self):
        model = make_valid_model(
            n_nodes=0,
            n_elements=0,
            node_ids=np.array([], dtype=np.int32),
            element_ids=np.array([], dtype=np.int32),
            connectivity=np.array([], dtype=np.int32),
            connectivity_offsets=np.array([0], dtype=np.int32),
            element_types=np.array([], dtype=np.uint8),
        )
        result = validate(model)

        assert result.is_valid is False
        assert result.model is None
        codes = [e.code for e in result.errors]
        assert ErrorCode.EMPTY_NODES in codes

    def test_zero_nodes_error_has_detail(self):
        model = make_valid_model(
            n_nodes=0,
            n_elements=0,
            node_ids=np.array([], dtype=np.int32),
            element_ids=np.array([], dtype=np.int32),
            connectivity=np.array([], dtype=np.int32),
            connectivity_offsets=np.array([0], dtype=np.int32),
            element_types=np.array([], dtype=np.uint8),
        )
        result = validate(model)

        node_error = [e for e in result.errors if e.code == ErrorCode.EMPTY_NODES][0]
        assert node_error.detail["node_count"] == 0


# ===================================================================
# 3. Empty elements (blocking)
# ===================================================================

class TestEmptyElements:
    """element_count = 0 is a blocking failure."""

    def test_zero_elements_fails(self):
        model = make_valid_model(
            n_elements=0,
            element_ids=np.array([], dtype=np.int32),
            connectivity=np.array([], dtype=np.int32),
            connectivity_offsets=np.array([0], dtype=np.int32),
            element_types=np.array([], dtype=np.uint8),
        )
        result = validate(model)

        assert result.is_valid is False
        codes = [e.code for e in result.errors]
        assert ErrorCode.EMPTY_ELEMENTS in codes


# ===================================================================
# 4. Negative connectivity index (blocking)
# ===================================================================

class TestNegativeConnectivity:
    """Negative connectivity indices are blocking failures."""

    def test_negative_index_fails(self):
        model = make_valid_model(
            connectivity=np.array([0, 1, -1, 1, 2, 3], dtype=np.int32),
        )
        result = validate(model)

        assert result.is_valid is False
        codes = [e.code for e in result.errors]
        assert ErrorCode.CONNECTIVITY_OUT_OF_BOUNDS in codes

    def test_negative_index_error_has_detail(self):
        model = make_valid_model(
            connectivity=np.array([0, 1, -5, 1, 2, 3], dtype=np.int32),
        )
        result = validate(model)

        oob_error = [e for e in result.errors
                     if e.code == ErrorCode.CONNECTIVITY_OUT_OF_BOUNDS][0]
        assert oob_error.detail["min_index"] == -5


# ===================================================================
# 5. Connectivity index == node_count (blocking)
# ===================================================================

class TestConnectivityUpperBound:
    """Connectivity index >= node_count is a blocking failure."""

    def test_index_equals_node_count_fails(self):
        """Index 4 with node_count=4 is out of bounds (valid range is 0..3)."""
        model = make_valid_model(
            n_nodes=4,
            connectivity=np.array([0, 1, 4, 1, 2, 3], dtype=np.int32),
        )
        result = validate(model)

        assert result.is_valid is False
        codes = [e.code for e in result.errors]
        assert ErrorCode.CONNECTIVITY_OUT_OF_BOUNDS in codes

    def test_large_index_fails(self):
        model = make_valid_model(
            n_nodes=4,
            connectivity=np.array([0, 1, 999, 1, 2, 3], dtype=np.int32),
        )
        result = validate(model)

        assert result.is_valid is False
        oob_error = [e for e in result.errors
                     if e.code == ErrorCode.CONNECTIVITY_OUT_OF_BOUNDS][0]
        assert oob_error.detail["max_index"] == 999
        assert oob_error.detail["node_count"] == 4


# ===================================================================
# 6. Duplicate node IDs (blocking)
# ===================================================================

class TestDuplicateNodeIds:
    """Duplicate node IDs are a blocking failure."""

    def test_duplicate_node_ids_fail(self):
        model = make_valid_model(
            n_nodes=4,
            node_ids=np.array([0, 1, 1, 3], dtype=np.int32),
        )
        result = validate(model)

        assert result.is_valid is False
        codes = [e.code for e in result.errors]
        assert ErrorCode.DUPLICATE_NODE_IDS in codes

    def test_duplicate_node_ids_detail(self):
        model = make_valid_model(
            n_nodes=4,
            node_ids=np.array([0, 1, 1, 3], dtype=np.int32),
        )
        result = validate(model)

        dup_error = [e for e in result.errors
                     if e.code == ErrorCode.DUPLICATE_NODE_IDS][0]
        assert dup_error.detail["duplicate_count"] == 1
        assert 1 in dup_error.detail["first_duplicates"]

    def test_multiple_duplicates(self):
        model = make_valid_model(
            n_nodes=6,
            node_ids=np.array([0, 0, 1, 1, 2, 2], dtype=np.int32),
        )
        result = validate(model)

        assert result.is_valid is False
        dup_error = [e for e in result.errors
                     if e.code == ErrorCode.DUPLICATE_NODE_IDS][0]
        assert dup_error.detail["duplicate_count"] == 3


# ===================================================================
# 7. Duplicate element IDs (blocking)
# ===================================================================

class TestDuplicateElementIds:
    """Duplicate element IDs are a blocking failure."""

    def test_duplicate_element_ids_fail(self):
        model = make_valid_model(
            n_elements=2,
            element_ids=np.array([0, 0], dtype=np.int32),
        )
        result = validate(model)

        assert result.is_valid is False
        codes = [e.code for e in result.errors]
        assert ErrorCode.DUPLICATE_ELEMENT_IDS in codes

    def test_duplicate_element_ids_detail(self):
        model = make_valid_model(
            n_elements=2,
            element_ids=np.array([5, 5], dtype=np.int32),
        )
        result = validate(model)

        dup_error = [e for e in result.errors
                     if e.code == ErrorCode.DUPLICATE_ELEMENT_IDS][0]
        assert dup_error.detail["duplicate_count"] == 1
        assert 5 in dup_error.detail["first_duplicates"]


# ===================================================================
# 8. Empty node set (warning)
# ===================================================================

class TestEmptyNodeSet:
    """Empty node sets produce warnings, not errors."""

    def test_empty_node_set_warns(self):
        empty_set = NamedSet(
            name="empty_nodes",
            set_type="node",
            member_indices=np.array([], dtype=np.int32),
        )
        model = make_valid_model(node_sets=[empty_set])
        result = validate(model)

        assert result.is_valid is True
        warning_codes = [w.code for w in result.warnings]
        assert WarningCode.EMPTY_SET in warning_codes
        assert any("empty_nodes" in w.message for w in result.warnings)


# ===================================================================
# 9. Empty element set (warning)
# ===================================================================

class TestEmptyElementSet:
    """Empty element sets produce warnings, not errors."""

    def test_empty_element_set_warns(self):
        empty_set = NamedSet(
            name="empty_elems",
            set_type="element",
            member_indices=np.array([], dtype=np.int32),
        )
        model = make_valid_model(element_sets=[empty_set])
        result = validate(model)

        assert result.is_valid is True
        warning_codes = [w.code for w in result.warnings]
        assert WarningCode.EMPTY_SET in warning_codes


# ===================================================================
# 10. Unnamed parts (warning + fallback naming)
# ===================================================================

class TestUnnamedParts:
    """Unnamed parts warn with deterministic fallback naming."""

    def test_unnamed_part_warns(self):
        unnamed_part = Part(
            id="part-0",
            name="",
            element_indices=np.arange(2, dtype=np.int32),
        )
        model = make_valid_model(parts=[unnamed_part])
        result = validate(model)

        assert result.is_valid is True
        warning_codes = [w.code for w in result.warnings]
        assert WarningCode.UNNAMED_PART in warning_codes

    def test_unnamed_part_fallback_name_in_message(self):
        unnamed_part = Part(
            id="part-0",
            name="",
            element_indices=np.arange(2, dtype=np.int32),
        )
        model = make_valid_model(parts=[unnamed_part])
        result = validate(model)

        unnamed_warning = [w for w in result.warnings
                           if w.code == WarningCode.UNNAMED_PART][0]
        assert "Unnamed Part 0" in unnamed_warning.message

    def test_multiple_unnamed_parts_deterministic(self):
        parts = [
            Part("part-0", "", np.array([0], dtype=np.int32)),
            Part("part-1", "Named Part", np.array([1], dtype=np.int32)),
            Part("part-2", "", np.array([], dtype=np.int32)),
        ]
        model = make_valid_model(parts=parts)
        result = validate(model)

        unnamed_warnings = [w for w in result.warnings
                            if w.code == WarningCode.UNNAMED_PART]
        assert len(unnamed_warnings) == 2
        assert "Unnamed Part 0" in unnamed_warnings[0].message
        assert "Unnamed Part 2" in unnamed_warnings[1].message

    def test_named_part_no_warning(self):
        model = make_valid_model()  # Default has "Part 1"
        result = validate(model)

        unnamed_warnings = [w for w in result.warnings
                            if w.code == WarningCode.UNNAMED_PART]
        assert len(unnamed_warnings) == 0


# ===================================================================
# 11. Missing units (warning)
# ===================================================================

class TestMissingUnits:
    """Missing units warn and preserve "unspecified"."""

    def test_all_unspecified_warns(self):
        model = make_valid_model(unit_system=UnitSystem())
        result = validate(model)

        assert result.is_valid is True
        warning_codes = [w.code for w in result.warnings]
        assert WarningCode.MISSING_UNITS in warning_codes

    def test_warning_lists_unspecified_fields(self):
        model = make_valid_model(unit_system=UnitSystem())
        result = validate(model)

        unit_warning = [w for w in result.warnings
                        if w.code == WarningCode.MISSING_UNITS][0]
        assert "length" in unit_warning.message
        assert "force" in unit_warning.message

    def test_partial_units_warns_for_missing_only(self):
        model = make_valid_model(unit_system=UnitSystem(
            length="mm", force="N", time="unspecified", temperature="unspecified",
        ))
        result = validate(model)

        unit_warning = [w for w in result.warnings
                        if w.code == WarningCode.MISSING_UNITS][0]
        assert "time" in unit_warning.message
        assert "temperature" in unit_warning.message
        assert "length" not in unit_warning.message
        assert "force" not in unit_warning.message

    def test_all_specified_no_warning(self):
        model = make_valid_model(unit_system=UnitSystem(
            length="mm", force="N", time="s", temperature="K", declared_system="SI",
        ))
        result = validate(model)

        unit_warnings = [w for w in result.warnings
                         if w.code == WarningCode.MISSING_UNITS]
        assert len(unit_warnings) == 0

    def test_units_not_fabricated(self):
        """Validator must NOT modify the unit system — just warn."""
        model = make_valid_model(unit_system=UnitSystem())
        result = validate(model)

        assert result.model.unit_system.length == "unspecified"
        assert result.model.unit_system.force == "unspecified"


# ===================================================================
# 12. Multiple warnings coexist
# ===================================================================

class TestMultipleWarnings:
    """Multiple warnings can coexist without causing failure."""

    def test_multiple_warnings_still_valid(self):
        empty_node_set = NamedSet("ns1", "node", np.array([], dtype=np.int32))
        empty_elem_set = NamedSet("es1", "element", np.array([], dtype=np.int32))
        unnamed_part = Part("part-0", "", np.arange(2, dtype=np.int32))

        model = make_valid_model(
            parts=[unnamed_part],
            node_sets=[empty_node_set],
            element_sets=[empty_elem_set],
            unit_system=UnitSystem(),  # All unspecified
        )
        result = validate(model)

        assert result.is_valid is True
        assert len(result.warnings) >= 3  # Empty set, unnamed part, missing units

    def test_warning_codes_are_distinct(self):
        empty_set = NamedSet("ns1", "node", np.array([], dtype=np.int32))
        unnamed_part = Part("part-0", "", np.arange(2, dtype=np.int32))

        model = make_valid_model(
            parts=[unnamed_part],
            node_sets=[empty_set],
            unit_system=UnitSystem(),
        )
        result = validate(model)

        codes = {w.code for w in result.warnings}
        assert WarningCode.EMPTY_SET in codes
        assert WarningCode.UNNAMED_PART in codes
        assert WarningCode.MISSING_UNITS in codes


# ===================================================================
# 13. Multiple errors coexist
# ===================================================================

class TestMultipleErrors:
    """Multiple blocking errors are collected, not short-circuited."""

    def test_both_empty_geometry_errors(self):
        model = make_valid_model(
            n_nodes=0,
            n_elements=0,
            node_ids=np.array([], dtype=np.int32),
            element_ids=np.array([], dtype=np.int32),
            connectivity=np.array([], dtype=np.int32),
            connectivity_offsets=np.array([0], dtype=np.int32),
            element_types=np.array([], dtype=np.uint8),
        )
        result = validate(model)

        assert result.is_valid is False
        codes = [e.code for e in result.errors]
        assert ErrorCode.EMPTY_NODES in codes
        assert ErrorCode.EMPTY_ELEMENTS in codes

    def test_duplicate_ids_both_types(self):
        model = make_valid_model(
            n_nodes=4,
            n_elements=2,
            node_ids=np.array([0, 0, 2, 3], dtype=np.int32),
            element_ids=np.array([0, 0], dtype=np.int32),
        )
        result = validate(model)

        assert result.is_valid is False
        codes = [e.code for e in result.errors]
        assert ErrorCode.DUPLICATE_NODE_IDS in codes
        assert ErrorCode.DUPLICATE_ELEMENT_IDS in codes


# ===================================================================
# 14. Error detail structure
# ===================================================================

class TestErrorDetailStructure:
    """ValidationError.detail has the expected keys."""

    def test_empty_nodes_detail(self):
        model = make_valid_model(
            n_nodes=0,
            n_elements=0,
            node_ids=np.array([], dtype=np.int32),
            element_ids=np.array([], dtype=np.int32),
            connectivity=np.array([], dtype=np.int32),
            connectivity_offsets=np.array([0], dtype=np.int32),
            element_types=np.array([], dtype=np.uint8),
        )
        result = validate(model)
        err = [e for e in result.errors if e.code == ErrorCode.EMPTY_NODES][0]
        assert "node_count" in err.detail

    def test_connectivity_oob_detail(self):
        model = make_valid_model(
            connectivity=np.array([0, 1, 99, 1, 2, 3], dtype=np.int32),
        )
        result = validate(model)
        err = [e for e in result.errors
               if e.code == ErrorCode.CONNECTIVITY_OUT_OF_BOUNDS][0]
        assert "max_index" in err.detail
        assert "node_count" in err.detail
        assert "oob_count" in err.detail

    def test_duplicate_ids_detail(self):
        model = make_valid_model(
            node_ids=np.array([1, 1, 2, 3], dtype=np.int32),
        )
        result = validate(model)
        err = [e for e in result.errors
               if e.code == ErrorCode.DUPLICATE_NODE_IDS][0]
        assert "duplicate_count" in err.detail
        assert "first_duplicates" in err.detail


# ===================================================================
# 15. Warnings not run on failure
# ===================================================================

class TestWarningsNotRunOnFailure:
    """Warning checks do not run when blocking errors exist."""

    def test_no_warnings_on_blocking_failure(self):
        """With blocking errors, warning checks are skipped."""
        model = make_valid_model(
            n_nodes=0,
            n_elements=0,
            node_ids=np.array([], dtype=np.int32),
            element_ids=np.array([], dtype=np.int32),
            connectivity=np.array([], dtype=np.int32),
            connectivity_offsets=np.array([0], dtype=np.int32),
            element_types=np.array([], dtype=np.uint8),
            unit_system=UnitSystem(),  # Would normally warn
        )
        result = validate(model)

        assert result.is_valid is False
        # Warning checks should not have run
        assert len(result.warnings) == 0


# ===================================================================
# 16. Result model reference
# ===================================================================

class TestResultModelReference:
    """Validated model reference is correct."""

    def test_valid_result_has_model(self):
        model = make_valid_model()
        result = validate(model)
        assert result.model is model

    def test_invalid_result_has_no_model(self):
        model = make_valid_model(
            node_ids=np.array([0, 0, 2, 3], dtype=np.int32),
        )
        result = validate(model)
        assert result.model is None


# ===================================================================
# 17. Internal consistency self-checks
# ===================================================================

class TestInternalConsistency:
    """Verify validator behavior aligns with documented requirements."""

    def test_validator_does_not_modify_model(self):
        """Validator must not modify the input model."""
        model = make_valid_model()
        original_node_count = model.nodes.count
        result = validate(model)

        assert result.model.nodes.count == original_node_count

    def test_validator_does_not_import_forbidden_modules(self):
        """Validator must not reference storage, rendering, or parsing."""
        import app.parsing.validator as m
        source = open(m.__file__, "r").read()
        assert "storage_writer" not in source
        assert "s3_client" not in source
        assert "boto3" not in source
        assert "webgl" not in source.lower()
        assert "three.js" not in source.lower()
        # Validator should not import vtk_parser or normalizer
        assert "import vtk_parser" not in source
        assert "from app.parsing.normalizer" not in source

    def test_valid_model_roundtrip(self):
        """A valid model can be validated multiple times with same result."""
        model = make_valid_model()
        r1 = validate(model)
        r2 = validate(model)
        assert r1.is_valid == r2.is_valid
        assert len(r1.warnings) == len(r2.warnings)

    def test_error_codes_are_strings(self):
        """All error codes are non-empty strings suitable for API mapping."""
        model = make_valid_model(
            node_ids=np.array([0, 0, 2, 3], dtype=np.int32),
        )
        result = validate(model)
        for err in result.errors:
            assert isinstance(err.code, str)
            assert len(err.code) > 0
            assert err.code.startswith("VALIDATION_")

    def test_warning_codes_are_strings(self):
        """All warning codes are non-empty strings."""
        model = make_valid_model(unit_system=UnitSystem())
        result = validate(model)
        for w in result.warnings:
            assert isinstance(w.code, str)
            assert len(w.code) > 0
            assert w.code.startswith("VALIDATION_")
