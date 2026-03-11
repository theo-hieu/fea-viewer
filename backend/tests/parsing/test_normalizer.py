"""
Comprehensive test suite for backend/app/parsing/normalizer.py

Covers:
  1.  Node indexing and id_to_index correctness
  2.  CSR connectivity correctness (offsets, flattened indices)
  3.  Supported type mapping for TRI3 / QUAD4 / TET4 / HEX8 / WEDGE6
  4.  Unsupported element skip + warning (via parser)
  5.  Zero-elements NormalizationError
  6.  Single-block vs multi-block part construction
  7.  Identity-instance generation under A7
  8.  Single assembly per A7
  9.  Named-set creation with valid and invalid members
  10. Nodal vs elemental field classification
  11. Field-dimension-mismatch rejection
  12. Provenance correctness (no extrapolation, no averaging)
  13. Unspecified-unit fallback
  14. Float64 precision preservation
  15. Internal consistency self-check

Self-check:
  - Normalized output supports documented acceptance criteria for parsing,
    rendering, probing, deformation safety, and warning surfacing.
  - Does not violate MVP non-goals (no extrapolation, no averaging, no unit conversion).
"""

from __future__ import annotations

import numpy as np
import pytest

from app.parsing.models import (
    Assembly,
    CellBlock,
    ElementTable,
    ElementType,
    FieldLocation,
    FieldProvenance,
    Instance,
    ModelMetadata,
    NamedSet,
    NodeTable,
    NormalizedFieldProvenance,
    NormalizedModel,
    NormalizedResultField,
    ParseResult,
    Part,
    ResultField,
    TimestepData,
    UnitSystem,
)
from app.parsing.normalizer import (
    NormalizationError,
    build_named_set_from_ids,
    normalize,
)


# ===================================================================
# Helpers — synthetic ParseResult builders
# ===================================================================

def make_parse_result(
    n_nodes: int = 4,
    cell_blocks: list[CellBlock] | None = None,
    result_fields: list[ResultField] | None = None,
    metadata: ModelMetadata | None = None,
    warnings: list[str] | None = None,
    skipped_cell_types: list[str] | None = None,
) -> ParseResult:
    """Create a minimal ParseResult for testing."""
    points = np.random.rand(n_nodes, 3).astype(np.float64)

    if cell_blocks is None:
        cell_blocks = [CellBlock(
            element_type=ElementType.TRI3,
            connectivity=np.array([[0, 1, 2], [1, 2, 3]], dtype=np.int32),
            count=2,
        )]

    element_count = sum(cb.count for cb in cell_blocks)

    return ParseResult(
        points=points,
        cell_blocks=cell_blocks,
        result_fields=result_fields or [],
        metadata=metadata or ModelMetadata(
            source_filename="test.vtu",
            file_format="vtk_xml",
        ),
        warnings=warnings or [],
        parser_backend="meshio",
        node_count=n_nodes,
        element_count=element_count,
        field_count=len(result_fields) if result_fields else 0,
        skipped_cell_types=skipped_cell_types or [],
    )


def make_nodal_field(
    name: str,
    n_nodes: int,
    n_components: int = 1,
) -> ResultField:
    """Create a nodal ResultField with matching dimensions."""
    if n_components == 1:
        values = np.ones(n_nodes, dtype=np.float64)
    else:
        values = np.ones((n_nodes, n_components), dtype=np.float64)

    return ResultField(
        name=name,
        location=FieldLocation.NODAL,
        n_components=n_components,
        provenance=FieldProvenance(
            source_field_name=name,
            source_location=FieldLocation.NODAL,
        ),
        timestep_data=[TimestepData(step_index=0, time_value=None, values=values)],
    )


def make_elemental_field(
    name: str,
    n_elements: int,
    n_components: int = 1,
) -> ResultField:
    """Create an elemental ResultField with matching dimensions."""
    if n_components == 1:
        values = np.ones(n_elements, dtype=np.float64)
    else:
        values = np.ones((n_elements, n_components), dtype=np.float64)

    return ResultField(
        name=name,
        location=FieldLocation.ELEMENTAL,
        n_components=n_components,
        provenance=FieldProvenance(
            source_field_name=name,
            source_location=FieldLocation.ELEMENTAL,
        ),
        timestep_data=[TimestepData(step_index=0, time_value=None, values=values)],
    )


# ===================================================================
# 1. Node indexing and id_to_index
# ===================================================================

class TestNodeTable:
    """NodeTable: 0-based indices, original IDs, Float64 coords."""

    def test_basic_node_table(self):
        pr = make_parse_result(n_nodes=5)
        model = normalize(pr)

        assert model.nodes.count == 5
        assert len(model.nodes.ids) == 5
        assert model.nodes.ids.dtype == np.int32
        np.testing.assert_array_equal(model.nodes.ids, [0, 1, 2, 3, 4])

    def test_coordinates_are_flat_float64(self):
        pr = make_parse_result(n_nodes=3)
        model = normalize(pr)

        assert model.nodes.coordinates.dtype == np.float64
        assert model.nodes.coordinates.shape == (9,)  # 3 * 3

    def test_coordinates_match_points(self):
        pr = make_parse_result(n_nodes=2)
        model = normalize(pr)

        # Flat coords should match original points
        expected = pr.points.flatten()
        np.testing.assert_array_equal(model.nodes.coordinates, expected)

    def test_id_to_index_map(self):
        pr = make_parse_result(n_nodes=4)
        model = normalize(pr)

        assert len(model.nodes.id_to_index) == 4
        for i in range(4):
            assert model.nodes.id_to_index[i] == i

    def test_coordinate_system_default(self):
        pr = make_parse_result()
        model = normalize(pr)
        assert model.nodes.coordinate_system == "global_cartesian"

    def test_coordinate_system_from_metadata(self):
        meta = ModelMetadata(
            source_filename="test.vtu",
            file_format="vtk_xml",
            coordinate_system="cylindrical",
        )
        pr = make_parse_result(metadata=meta)
        model = normalize(pr)
        assert model.nodes.coordinate_system == "cylindrical"


# ===================================================================
# 2. CSR connectivity correctness
# ===================================================================

class TestElementTableCSR:
    """ElementTable: CSR offsets and flattened connectivity."""

    def test_single_block_csr(self):
        """2 triangles → offsets [0,3,6], connectivity has 6 values."""
        pr = make_parse_result(n_nodes=4)
        model = normalize(pr)

        assert model.elements.count == 2
        np.testing.assert_array_equal(model.elements.connectivity_offsets, [0, 3, 6])
        assert len(model.elements.connectivity) == 6

    def test_csr_slicing_recovers_elements(self):
        """Verify CSR offsets + connectivity reconstruct original elements."""
        pr = make_parse_result(n_nodes=4)
        model = normalize(pr)

        offsets = model.elements.connectivity_offsets
        conn = model.elements.connectivity
        for i in range(model.elements.count):
            elem_nodes = conn[offsets[i]:offsets[i + 1]]
            assert len(elem_nodes) == 3  # TRI3

    def test_mixed_element_types_csr(self):
        """Hex8 (8 nodes) + Tri3 (3 nodes) → variable-length CSR."""
        cell_blocks = [
            CellBlock(
                element_type=ElementType.HEX8,
                connectivity=np.array([[0, 1, 2, 3, 4, 5, 6, 7]], dtype=np.int32),
                count=1,
            ),
            CellBlock(
                element_type=ElementType.TRI3,
                connectivity=np.array([[0, 1, 2]], dtype=np.int32),
                count=1,
            ),
        ]
        pr = make_parse_result(n_nodes=8, cell_blocks=cell_blocks)
        model = normalize(pr)

        assert model.elements.count == 2
        offsets = model.elements.connectivity_offsets
        np.testing.assert_array_equal(offsets, [0, 8, 11])
        assert len(model.elements.connectivity) == 11

    def test_connectivity_uses_indices_not_ids(self):
        """Connectivity values must be 0-based node indices."""
        pr = make_parse_result(n_nodes=4)
        model = normalize(pr)

        assert model.elements.connectivity.dtype == np.int32
        assert model.elements.connectivity.min() >= 0
        assert model.elements.connectivity.max() < model.nodes.count


# ===================================================================
# 3. Element type mapping
# ===================================================================

class TestElementTypeMapping:
    """Verify documented MVP type enums are preserved in ElementTable."""

    @pytest.mark.parametrize("elem_type,expected_code,nodes_per_elem", [
        (ElementType.TRI3, 1, 3),
        (ElementType.QUAD4, 3, 4),
        (ElementType.TET4, 10, 4),
        (ElementType.HEX8, 20, 8),
        (ElementType.WEDGE6, 30, 6),
    ])
    def test_type_code_in_element_table(self, elem_type, expected_code, nodes_per_elem):
        connectivity = np.arange(nodes_per_elem, dtype=np.int32).reshape(1, -1)
        cell_blocks = [CellBlock(
            element_type=elem_type,
            connectivity=connectivity,
            count=1,
        )]
        pr = make_parse_result(n_nodes=nodes_per_elem, cell_blocks=cell_blocks)
        model = normalize(pr)

        assert model.elements.types[0] == expected_code


# ===================================================================
# 4. Unsupported element types
# ===================================================================

class TestUnsupportedElements:
    """Unsupported types are skipped at parser level with warnings carried through."""

    def test_skipped_types_warning_carried_forward(self):
        """Parser warnings about unsupported types appear in normalized model."""
        pr = make_parse_result(
            warnings=["Unsupported element type 'polygon' skipped."],
            skipped_cell_types=["polygon"],
        )
        model = normalize(pr)
        assert any("polygon" in w for w in model.warnings)


# ===================================================================
# 5. Zero-elements NormalizationError
# ===================================================================

class TestZeroElements:
    """NormalizationError raised when zero valid elements remain."""

    def test_empty_cell_blocks_raises(self):
        pr = make_parse_result(cell_blocks=[])
        with pytest.raises(NormalizationError, match="zero elements"):
            normalize(pr)

    def test_all_skipped_raises_with_types(self):
        pr = make_parse_result(
            cell_blocks=[],
            skipped_cell_types=["polygon", "pyramid"],
        )
        with pytest.raises(NormalizationError, match="skipping unsupported"):
            normalize(pr)


# ===================================================================
# 6. Single-block vs multi-block part construction
# ===================================================================

class TestPartConstruction:
    """Parts are built correctly for single and multi-block inputs."""

    def test_single_block_one_part(self):
        pr = make_parse_result()
        model = normalize(pr)

        assert len(model.parts) == 1
        assert model.parts[0].name == "Part 1"
        assert model.parts[0].id == "part-0"
        np.testing.assert_array_equal(
            model.parts[0].element_indices,
            np.arange(model.elements.count, dtype=np.int32),
        )

    def test_multi_block_multiple_parts(self):
        cell_blocks = [
            CellBlock(ElementType.TRI3, np.array([[0, 1, 2]], dtype=np.int32), 1),
            CellBlock(ElementType.QUAD4, np.array([[3, 4, 5, 6]], dtype=np.int32), 1),
        ]
        pr = make_parse_result(n_nodes=7, cell_blocks=cell_blocks)
        model = normalize(pr)

        assert len(model.parts) == 2
        assert model.parts[0].name == "Part 1"
        assert model.parts[1].name == "Part 2"
        np.testing.assert_array_equal(model.parts[0].element_indices, [0])
        np.testing.assert_array_equal(model.parts[1].element_indices, [1])

    def test_part_element_indices_not_ids(self):
        """Part element_indices must be internal indices, not source IDs."""
        pr = make_parse_result()
        model = normalize(pr)

        for part in model.parts:
            assert part.element_indices.dtype == np.int32
            assert part.element_indices.min() >= 0
            assert part.element_indices.max() < model.elements.count


# ===================================================================
# 7. Identity-instance generation
# ===================================================================

class TestInstances:
    """One instance per part with identity transform (A7)."""

    def test_one_instance_per_part(self):
        pr = make_parse_result()
        model = normalize(pr)

        assert len(model.instances) == len(model.parts)

    def test_identity_transform(self):
        pr = make_parse_result()
        model = normalize(pr)

        expected = np.eye(4, dtype=np.float64).flatten(order="F")
        for inst in model.instances:
            np.testing.assert_array_equal(inst.transform, expected)

    def test_instance_references_part(self):
        pr = make_parse_result()
        model = normalize(pr)

        for inst, part in zip(model.instances, model.parts):
            assert inst.part_id == part.id

    def test_transform_is_float64(self):
        pr = make_parse_result()
        model = normalize(pr)

        for inst in model.instances:
            assert inst.transform.dtype == np.float64
            assert len(inst.transform) == 16


# ===================================================================
# 8. Single assembly
# ===================================================================

class TestAssembly:
    """Single assembly referencing all instances (A7)."""

    def test_assembly_references_all_instances(self):
        cell_blocks = [
            CellBlock(ElementType.TRI3, np.array([[0, 1, 2]], dtype=np.int32), 1),
            CellBlock(ElementType.QUAD4, np.array([[3, 4, 5, 6]], dtype=np.int32), 1),
        ]
        pr = make_parse_result(n_nodes=7, cell_blocks=cell_blocks)
        model = normalize(pr)

        assert model.assembly.name == "Assembly"
        assert len(model.assembly.instance_ids) == len(model.instances)
        for inst in model.instances:
            assert inst.id in model.assembly.instance_ids


# ===================================================================
# 9. Named sets
# ===================================================================

class TestNamedSets:
    """NamedSet creation with valid and invalid members."""

    def test_no_named_sets_by_default(self):
        pr = make_parse_result()
        model = normalize(pr)
        assert model.node_sets == []
        assert model.element_sets == []

    def test_build_node_set_from_ids(self):
        id_to_index = {0: 0, 1: 1, 2: 2, 3: 3}
        warnings: list[str] = []
        ns = build_named_set_from_ids(
            "test_set", "node", [0, 2, 3], id_to_index, warnings
        )
        assert ns is not None
        assert ns.name == "test_set"
        assert ns.set_type == "node"
        np.testing.assert_array_equal(ns.member_indices, [0, 2, 3])
        assert ns.source == "file_defined"
        assert len(warnings) == 0

    def test_build_set_with_invalid_ids(self):
        """Invalid IDs are skipped with warning, valid ones retained."""
        id_to_index = {0: 0, 1: 1, 2: 2}
        warnings: list[str] = []
        ns = build_named_set_from_ids(
            "partial", "element", [0, 1, 99, 100], id_to_index, warnings
        )
        assert ns is not None
        np.testing.assert_array_equal(ns.member_indices, [0, 1])
        assert len(warnings) == 1
        assert "not found" in warnings[0]
        assert "99" in warnings[0]

    def test_all_invalid_ids_returns_none(self):
        """If all IDs are invalid, return None and warn."""
        id_to_index = {0: 0, 1: 1}
        warnings: list[str] = []
        ns = build_named_set_from_ids(
            "empty", "node", [99, 100], id_to_index, warnings
        )
        assert ns is None
        assert len(warnings) == 2  # One for invalid IDs, one for empty set

    def test_empty_source_ids(self):
        """Empty source IDs → None returned."""
        id_to_index = {0: 0}
        warnings: list[str] = []
        ns = build_named_set_from_ids("empty", "node", [], id_to_index, warnings)
        assert ns is None

    def test_member_indices_are_0_based(self):
        id_to_index = {10: 0, 20: 1, 30: 2}
        warnings: list[str] = []
        ns = build_named_set_from_ids(
            "mapped", "node", [10, 30], id_to_index, warnings
        )
        assert ns is not None
        np.testing.assert_array_equal(ns.member_indices, [0, 2])


# ===================================================================
# 10. Nodal vs elemental field classification
# ===================================================================

class TestFieldClassification:
    """Fields classified by entity count, not by name or heuristics."""

    def test_nodal_field_accepted(self):
        n_nodes, n_elements = 4, 2
        field = make_nodal_field("stress", n_nodes)
        pr = make_parse_result(n_nodes=n_nodes, result_fields=[field])
        model = normalize(pr)

        assert len(model.result_fields) == 1
        assert model.result_fields[0].location == FieldLocation.NODAL
        assert model.result_fields[0].name == "stress"

    def test_elemental_field_accepted(self):
        n_nodes, n_elements = 4, 2
        field = make_elemental_field("cell_temp", n_elements)
        pr = make_parse_result(n_nodes=n_nodes, result_fields=[field])
        model = normalize(pr)

        assert len(model.result_fields) == 1
        assert model.result_fields[0].location == FieldLocation.ELEMENTAL

    def test_vector_field_accepted(self):
        n_nodes = 4
        field = make_nodal_field("displacement", n_nodes, n_components=3)
        pr = make_parse_result(n_nodes=n_nodes, result_fields=[field])
        model = normalize(pr)

        assert len(model.result_fields) == 1
        assert model.result_fields[0].n_components == 3

    def test_multiple_fields_mixed(self):
        n_nodes, n_elements = 4, 2
        fields = [
            make_nodal_field("stress", n_nodes),
            make_elemental_field("cell_temp", n_elements),
            make_nodal_field("displacement", n_nodes, n_components=3),
        ]
        pr = make_parse_result(n_nodes=n_nodes, result_fields=fields)
        model = normalize(pr)

        assert len(model.result_fields) == 3


# ===================================================================
# 11. Field dimension mismatch rejection
# ===================================================================

class TestFieldDimensionMismatch:
    """Malformed fields rejected with warning, valid fields kept."""

    def test_wrong_count_nodal_rejected(self):
        """Nodal field with wrong entity count is rejected."""
        n_nodes = 4
        bad_field = ResultField(
            name="bad",
            location=FieldLocation.NODAL,
            n_components=1,
            provenance=FieldProvenance("bad", FieldLocation.NODAL),
            timestep_data=[TimestepData(0, None, np.ones(999, dtype=np.float64))],
        )
        pr = make_parse_result(n_nodes=n_nodes, result_fields=[bad_field])
        model = normalize(pr)

        assert len(model.result_fields) == 0
        assert any("dimension mismatch" in w.lower() for w in model.warnings)

    def test_wrong_count_elemental_rejected(self):
        """Elemental field with wrong entity count is rejected."""
        bad_field = ResultField(
            name="bad_elem",
            location=FieldLocation.ELEMENTAL,
            n_components=1,
            provenance=FieldProvenance("bad_elem", FieldLocation.ELEMENTAL),
            timestep_data=[TimestepData(0, None, np.ones(999, dtype=np.float64))],
        )
        pr = make_parse_result(result_fields=[bad_field])
        model = normalize(pr)

        assert len(model.result_fields) == 0
        assert any("dimension mismatch" in w.lower() for w in model.warnings)

    def test_bad_field_does_not_block_good_fields(self):
        """Rejecting one bad field does NOT reject unrelated valid fields."""
        n_nodes = 4
        good = make_nodal_field("good_stress", n_nodes)
        bad = ResultField(
            name="bad",
            location=FieldLocation.NODAL,
            n_components=1,
            provenance=FieldProvenance("bad", FieldLocation.NODAL),
            timestep_data=[TimestepData(0, None, np.ones(999, dtype=np.float64))],
        )
        pr = make_parse_result(n_nodes=n_nodes, result_fields=[good, bad])
        model = normalize(pr)

        assert len(model.result_fields) == 1
        assert model.result_fields[0].name == "good_stress"


# ===================================================================
# 12. Provenance correctness
# ===================================================================

class TestProvenance:
    """Every accepted field has correct provenance."""

    def test_provenance_no_extrapolation(self):
        field = make_nodal_field("stress", 4)
        pr = make_parse_result(n_nodes=4, result_fields=[field])
        model = normalize(pr)

        prov = model.result_fields[0].provenance
        assert prov.extrapolation_applied is False
        assert prov.averaging_applied is False
        assert prov.averaging_method is None

    def test_provenance_source_field_name(self):
        field = make_nodal_field("von_mises", 4)
        pr = make_parse_result(n_nodes=4, result_fields=[field])
        model = normalize(pr)

        prov = model.result_fields[0].provenance
        assert prov.source_field_name == "von_mises"

    def test_provenance_source_location(self):
        field = make_elemental_field("cell_temp", 2)
        pr = make_parse_result(result_fields=[field])
        model = normalize(pr)

        prov = model.result_fields[0].provenance
        assert prov.source_location == FieldLocation.ELEMENTAL

    def test_provenance_coordinate_system_default(self):
        field = make_nodal_field("stress", 4)
        pr = make_parse_result(n_nodes=4, result_fields=[field])
        model = normalize(pr)

        prov = model.result_fields[0].provenance
        assert prov.coordinate_system == "global_cartesian"

    def test_provenance_coordinate_system_from_metadata(self):
        meta = ModelMetadata(
            source_filename="test.vtu",
            file_format="vtk_xml",
            coordinate_system="cylindrical",
        )
        field = make_nodal_field("stress", 4)
        pr = make_parse_result(n_nodes=4, result_fields=[field], metadata=meta)
        model = normalize(pr)

        prov = model.result_fields[0].provenance
        assert prov.coordinate_system == "cylindrical"


# ===================================================================
# 13. Unspecified-unit fallback
# ===================================================================

class TestUnitSystem:
    """Unit system preserved from metadata or defaults to 'unspecified'."""

    def test_default_unspecified(self):
        pr = make_parse_result()
        model = normalize(pr)

        assert model.unit_system.length == "unspecified"
        assert model.unit_system.force == "unspecified"
        assert model.unit_system.time == "unspecified"
        assert model.unit_system.temperature == "unspecified"
        assert model.unit_system.declared_system == "unspecified"

    def test_declared_units_preserved(self):
        meta = ModelMetadata(
            source_filename="test.vtu",
            file_format="vtk_xml",
            unit_system=UnitSystem(
                length="mm",
                force="N",
                time="s",
                temperature="K",
                declared_system="SI",
            ),
        )
        pr = make_parse_result(metadata=meta)
        model = normalize(pr)

        assert model.unit_system.length == "mm"
        assert model.unit_system.force == "N"
        assert model.unit_system.declared_system == "SI"


# ===================================================================
# 14. Float64 precision
# ===================================================================

class TestFloat64Precision:
    """Authoritative data remains Float64 throughout normalization."""

    def test_coordinates_float64(self):
        pr = make_parse_result()
        model = normalize(pr)
        assert model.nodes.coordinates.dtype == np.float64

    def test_field_values_float64(self):
        field = make_nodal_field("stress", 4)
        pr = make_parse_result(n_nodes=4, result_fields=[field])
        model = normalize(pr)

        for f in model.result_fields:
            for ts in f.timestep_data:
                assert ts.values.dtype == np.float64

    def test_transform_float64(self):
        pr = make_parse_result()
        model = normalize(pr)
        for inst in model.instances:
            assert inst.transform.dtype == np.float64


# ===================================================================
# 15. Timestep preservation
# ===================================================================

class TestTimestepPreservation:
    """Timesteps passed through without modification."""

    def test_single_timestep(self):
        field = make_nodal_field("stress", 4)
        pr = make_parse_result(n_nodes=4, result_fields=[field])
        model = normalize(pr)

        assert len(model.result_fields[0].timestep_data) == 1
        assert model.result_fields[0].timestep_data[0].step_index == 0

    def test_multiple_timesteps(self):
        values = np.ones(4, dtype=np.float64)
        field = ResultField(
            name="disp",
            location=FieldLocation.NODAL,
            n_components=1,
            provenance=FieldProvenance("disp", FieldLocation.NODAL),
            timestep_data=[
                TimestepData(0, 0.0, values),
                TimestepData(1, 0.5, values * 2),
                TimestepData(2, 1.0, values * 3),
            ],
        )
        pr = make_parse_result(n_nodes=4, result_fields=[field])
        model = normalize(pr)

        assert len(model.result_fields[0].timestep_data) == 3
        assert model.result_fields[0].timestep_data[1].time_value == 0.5


# ===================================================================
# 16. Internal consistency self-check
# ===================================================================

class TestInternalConsistency:
    """
    Verify normalized output supports documented acceptance criteria:
    - Parsing: correct counts, no data loss for supported types
    - Rendering: CSR connectivity + types sufficient for surface extraction
    - Probing: id_to_index enables O(1) lookups for node/element queries
    - Deformation safety: base geometry separate from result fields
    - Warning surfacing: all warnings collected in model.warnings
    """

    def test_node_count_matches_id_count(self):
        pr = make_parse_result(n_nodes=10)
        model = normalize(pr)
        assert model.nodes.count == len(model.nodes.ids)
        assert model.nodes.count == len(model.nodes.id_to_index)

    def test_element_count_matches_ids_and_types(self):
        pr = make_parse_result()
        model = normalize(pr)
        assert model.elements.count == len(model.elements.ids)
        assert model.elements.count == len(model.elements.types)

    def test_csr_offsets_length(self):
        pr = make_parse_result()
        model = normalize(pr)
        assert len(model.elements.connectivity_offsets) == model.elements.count + 1

    def test_csr_offsets_monotonic(self):
        pr = make_parse_result()
        model = normalize(pr)
        offsets = model.elements.connectivity_offsets
        for i in range(len(offsets) - 1):
            assert offsets[i + 1] > offsets[i]

    def test_connectivity_max_index_within_bounds(self):
        """All connectivity indices must be valid node indices."""
        pr = make_parse_result(n_nodes=10)
        model = normalize(pr)
        assert model.elements.connectivity.max() < model.nodes.count
        assert model.elements.connectivity.min() >= 0

    def test_all_part_elements_within_bounds(self):
        pr = make_parse_result()
        model = normalize(pr)
        for part in model.parts:
            assert part.element_indices.max() < model.elements.count
            assert part.element_indices.min() >= 0

    def test_all_instance_refs_are_valid(self):
        pr = make_parse_result()
        model = normalize(pr)
        part_ids = {p.id for p in model.parts}
        for inst in model.instances:
            assert inst.part_id in part_ids

    def test_assembly_instance_refs_valid(self):
        pr = make_parse_result()
        model = normalize(pr)
        inst_ids = {i.id for i in model.instances}
        for ref in model.assembly.instance_ids:
            assert ref in inst_ids

    def test_base_geometry_separate_from_fields(self):
        """Coordinates are separate from result field values."""
        field = make_nodal_field("stress", 4)
        pr = make_parse_result(n_nodes=4, result_fields=[field])
        model = normalize(pr)

        # Coordinates should not be affected by field values
        assert model.nodes.coordinates is not None
        assert model.result_fields[0].timestep_data[0].values is not None
        # They shouldn't share memory
        assert not np.shares_memory(
            model.nodes.coordinates,
            model.result_fields[0].timestep_data[0].values,
        )

    def test_warnings_accumulated(self):
        """Parser warnings are carried forward into normalized model."""
        pr = make_parse_result(warnings=["parser warning 1", "parser warning 2"])
        model = normalize(pr)
        assert "parser warning 1" in model.warnings
        assert "parser warning 2" in model.warnings

    def test_normalizer_does_not_import_forbidden_modules(self):
        """Normalizer must not reference storage, rendering, or validation."""
        import app.parsing.normalizer as m
        source = open(m.__file__, "r").read()
        assert "storage_writer" not in source
        assert "s3_client" not in source
        assert "boto3" not in source
        assert "webgl" not in source.lower()
        assert "three.js" not in source.lower()
        assert "unit_conversion" not in source
        assert "extrapolat" not in source.lower() or "extrapolation_applied" in source
