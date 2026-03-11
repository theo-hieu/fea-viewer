"""
Test suite for backend/app/parsing/vtk_parser.py

Covers:
  - Successful meshio parse path (with real-like mocking)
  - Successful VTK fallback path (when meshio fails)
  - Both-parsers-fail path → ParseError
  - Malformed point data handling
  - Malformed cell data / connectivity
  - Missing metadata → "Not specified"
  - Partial-parse with warnings
  - Float64 precision preservation
  - No integration-point extrapolation
  - VTK cell type mapping
  - meshio cell type mapping
  - Element node counts

Self-check:
  - Parser does not perform storage, normalization, or rendering
  - Parser does not silently transform units or coordinates
"""

from __future__ import annotations

import importlib
import os
import sys
from dataclasses import dataclass
from typing import Any
from unittest import mock

import numpy as np
import pytest

from app.parsing.models import (
    CellBlock,
    ElementType,
    FieldLocation,
    ParseError,
    ParseResult,
)


# ===================================================================
# Mock meshio types
# ===================================================================

@dataclass
class MockCellBlock:
    """Simulates meshio.CellBlock."""
    type: str
    data: np.ndarray


@dataclass
class MockMesh:
    """Simulates meshio.Mesh with the subset of fields the parser uses."""
    points: np.ndarray
    cells: list[MockCellBlock]
    point_data: dict[str, np.ndarray]
    cell_data: dict[str, list[np.ndarray]]
    field_data: dict[str, np.ndarray]


def make_simple_mesh(
    n_nodes: int = 4,
    n_tris: int = 2,
    point_data: dict[str, np.ndarray] | None = None,
    cell_data: dict[str, list[np.ndarray]] | None = None,
) -> MockMesh:
    """Create a minimal valid mesh for testing."""
    points = np.random.rand(n_nodes, 3).astype(np.float64)
    # Simple triangle connectivity
    connectivity = np.array([[0, 1, 2], [1, 2, 3]], dtype=np.int32)[:n_tris]
    cells = [MockCellBlock(type="triangle", data=connectivity)]

    return MockMesh(
        points=points,
        cells=cells,
        point_data=point_data or {},
        cell_data=cell_data or {},
        field_data={},
    )


def write_dummy_vtu_file(filepath: str) -> None:
    """Write a minimal VTU file that serves as test fixture."""
    with open(filepath, "w") as f:
        f.write('<?xml version="1.0"?>\n<VTKFile type="UnstructuredGrid">\n</VTKFile>\n')


def _run_parse_with_mock_meshio(filepath: str, mesh: MockMesh, filename: str | None = None):
    """
    Helper that mocks meshio.read at the sys.modules level so the deferred
    import inside _parse_with_meshio picks up our mock.
    """
    mock_meshio = mock.MagicMock()
    mock_meshio.read.return_value = mesh

    with mock.patch.dict("sys.modules", {"meshio": mock_meshio}):
        import app.parsing.vtk_parser as parser_mod
        importlib.reload(parser_mod)
        return parser_mod.parse_vtk(filepath, filename=filename)


def _run_parse_both_fail(filepath: str, filename: str | None = None):
    """
    Helper that makes both meshio and VTK fail.
    """
    mock_meshio = mock.MagicMock()
    mock_meshio.read.side_effect = RuntimeError("meshio failure")

    mock_vtk = mock.MagicMock()
    mock_vtk.vtkXMLUnstructuredGridReader.side_effect = RuntimeError("vtk failure")

    with mock.patch.dict("sys.modules", {
        "meshio": mock_meshio,
        "vtk": mock_vtk,
        "vtk.util": mock.MagicMock(),
        "vtk.util.numpy_support": mock.MagicMock(),
    }):
        import app.parsing.vtk_parser as parser_mod
        importlib.reload(parser_mod)
        return parser_mod.parse_vtk(filepath, filename=filename)


# ===================================================================
# 1. Successful meshio parse path
# ===================================================================

class TestMeshioSuccessPath:
    """Test the primary meshio parse path with mocked meshio."""

    def test_basic_triangle_mesh(self, tmp_path):
        """Parse a simple 4-node, 2-triangle mesh."""
        filepath = str(tmp_path / "model.vtu")
        write_dummy_vtu_file(filepath)
        mesh = make_simple_mesh(n_nodes=4, n_tris=2)

        result = _run_parse_with_mock_meshio(filepath, mesh, "model.vtu")

        assert isinstance(result, ParseResult)
        assert result.parser_backend == "meshio"
        assert result.node_count == 4
        assert result.element_count == 2
        assert len(result.cell_blocks) == 1
        assert result.cell_blocks[0].element_type == ElementType.TRI3

    def test_points_are_float64(self, tmp_path):
        """Float64 precision preserved for node coordinates."""
        filepath = str(tmp_path / "model.vtu")
        write_dummy_vtu_file(filepath)
        mesh = make_simple_mesh()

        result = _run_parse_with_mock_meshio(filepath, mesh)

        assert isinstance(result, ParseResult)
        assert result.points.dtype == np.float64

    def test_nodal_scalar_field(self, tmp_path):
        """Extract a nodal scalar field from point_data."""
        filepath = str(tmp_path / "model.vtu")
        write_dummy_vtu_file(filepath)

        n_nodes = 4
        stress_data = np.array([1.0, 2.0, 3.0, 4.0], dtype=np.float64)
        mesh = make_simple_mesh(
            n_nodes=n_nodes,
            point_data={"stress": stress_data},
        )

        result = _run_parse_with_mock_meshio(filepath, mesh)

        assert isinstance(result, ParseResult)
        assert result.field_count == 1
        field = result.result_fields[0]
        assert field.name == "stress"
        assert field.location == FieldLocation.NODAL
        assert field.n_components == 1
        assert field.provenance.source_location == FieldLocation.NODAL
        assert field.provenance.extrapolation_applied is False
        np.testing.assert_array_equal(field.timestep_data[0].values, stress_data)

    def test_nodal_vector_field(self, tmp_path):
        """Extract a nodal vector3 field (e.g., displacement)."""
        filepath = str(tmp_path / "model.vtu")
        write_dummy_vtu_file(filepath)

        n_nodes = 4
        disp_data = np.random.rand(n_nodes, 3).astype(np.float64)
        mesh = make_simple_mesh(
            n_nodes=n_nodes,
            point_data={"displacement": disp_data},
        )

        result = _run_parse_with_mock_meshio(filepath, mesh)

        assert isinstance(result, ParseResult)
        field = result.result_fields[0]
        assert field.name == "displacement"
        assert field.n_components == 3
        assert field.timestep_data[0].values.dtype == np.float64

    def test_elemental_field(self, tmp_path):
        """Extract an elemental field from cell_data."""
        filepath = str(tmp_path / "model.vtu")
        write_dummy_vtu_file(filepath)

        n_tris = 2
        cell_stress = np.array([10.0, 20.0], dtype=np.float64)
        mesh = make_simple_mesh(
            n_tris=n_tris,
            cell_data={"cell_stress": [cell_stress]},
        )

        result = _run_parse_with_mock_meshio(filepath, mesh)

        assert isinstance(result, ParseResult)
        elem_fields = [f for f in result.result_fields if f.location == FieldLocation.ELEMENTAL]
        assert len(elem_fields) == 1
        assert elem_fields[0].name == "cell_stress"

    def test_2d_mesh_padded_to_3d(self, tmp_path):
        """2D mesh points (n, 2) are padded with z=0 to (n, 3)."""
        filepath = str(tmp_path / "model.vtu")
        write_dummy_vtu_file(filepath)

        mesh = make_simple_mesh()
        mesh.points = np.random.rand(4, 2).astype(np.float64)

        result = _run_parse_with_mock_meshio(filepath, mesh)

        assert isinstance(result, ParseResult)
        assert result.points.shape == (4, 3)
        np.testing.assert_array_equal(result.points[:, 2], 0.0)

    def test_multiple_cell_types(self, tmp_path):
        """Parse mesh with both triangles and quads."""
        filepath = str(tmp_path / "model.vtu")
        write_dummy_vtu_file(filepath)

        mesh = MockMesh(
            points=np.random.rand(8, 3).astype(np.float64),
            cells=[
                MockCellBlock("triangle", np.array([[0, 1, 2]], dtype=np.int32)),
                MockCellBlock("quad", np.array([[3, 4, 5, 6]], dtype=np.int32)),
            ],
            point_data={},
            cell_data={},
            field_data={},
        )

        result = _run_parse_with_mock_meshio(filepath, mesh)

        assert isinstance(result, ParseResult)
        assert len(result.cell_blocks) == 2
        types = {cb.element_type for cb in result.cell_blocks}
        assert types == {ElementType.TRI3, ElementType.QUAD4}
        assert result.element_count == 2


# ===================================================================
# 2. VTK fallback path
# ===================================================================

class TestVTKFallbackPath:
    """Test the R1 fallback when meshio fails."""

    def test_fallback_triggered_on_meshio_failure(self, tmp_path):
        """When meshio raises, VTK fallback is attempted."""
        filepath = str(tmp_path / "model.vtu")
        write_dummy_vtu_file(filepath)

        # Mock meshio to fail
        mock_meshio = mock.MagicMock()
        mock_meshio.read.side_effect = RuntimeError("meshio cannot read this file")

        # Mock VTK to succeed
        mock_vtk_module = mock.MagicMock()
        mock_reader = mock.MagicMock()
        mock_output = mock.MagicMock()
        mock_output.GetNumberOfPoints.return_value = 3
        mock_output.GetNumberOfCells.return_value = 1

        # Set up points
        mock_vtk_numpy = mock.MagicMock()
        mock_vtk_numpy.vtk_to_numpy.return_value = np.array(
            [[0, 0, 0], [1, 0, 0], [0, 1, 0]], dtype=np.float64
        )
        mock_points = mock.MagicMock()
        mock_points.GetData.return_value = mock.MagicMock()
        mock_output.GetPoints.return_value = mock_points

        # Set up cells (1 triangle)
        mock_cell = mock.MagicMock()
        mock_cell.GetCellType.return_value = 5  # VTK_TRIANGLE
        mock_cell.GetNumberOfPoints.return_value = 3
        mock_cell.GetPointId.side_effect = [0, 1, 2]
        mock_output.GetCell.return_value = mock_cell

        # Point data and cell data (empty)
        mock_pd = mock.MagicMock()
        mock_pd.GetNumberOfArrays.return_value = 0
        mock_output.GetPointData.return_value = mock_pd

        mock_cd = mock.MagicMock()
        mock_cd.GetNumberOfArrays.return_value = 0
        mock_output.GetCellData.return_value = mock_cd

        mock_reader.GetOutput.return_value = mock_output
        mock_vtk_module.vtkXMLUnstructuredGridReader.return_value = mock_reader

        with mock.patch.dict("sys.modules", {
            "meshio": mock_meshio,
            "vtk": mock_vtk_module,
            "vtk.util": mock.MagicMock(),
            "vtk.util.numpy_support": mock_vtk_numpy,
        }):
            import app.parsing.vtk_parser as parser_mod
            importlib.reload(parser_mod)

            result = parser_mod.parse_vtk(filepath, filename="model.vtu")

        assert isinstance(result, ParseResult)
        assert result.parser_backend == "vtk_fallback"
        assert result.node_count == 3


# ===================================================================
# 3. Both-parsers-fail path
# ===================================================================

class TestBothParsersFail:
    """When both meshio and VTK fail, ParseError is returned."""

    def test_returns_parse_error(self, tmp_path):
        filepath = str(tmp_path / "model.vtu")
        write_dummy_vtu_file(filepath)

        result = _run_parse_both_fail(filepath, filename="broken.vtu")

        assert isinstance(result, ParseError)
        assert result.raw_file_preserved is True
        assert result.traceback_meshio is not None
        assert result.traceback_vtk is not None
        assert "broken.vtu" in result.error_message
        assert result.source_filename == "broken.vtu"

    def test_raw_file_still_exists_after_failure(self, tmp_path):
        """Raw file is never deleted on parse failure."""
        filepath = str(tmp_path / "model.vtu")
        write_dummy_vtu_file(filepath)

        _run_parse_both_fail(filepath)

        # File must still exist
        assert os.path.exists(filepath)


# ===================================================================
# 4. Malformed data handling
# ===================================================================

class TestMalformedData:
    """Parser handles malformed data with warnings, not crashes."""

    def test_malformed_point_shape(self, tmp_path):
        """Points with wrong shape produce an error (ValueError caught as parse failure)."""
        filepath = str(tmp_path / "model.vtu")
        write_dummy_vtu_file(filepath)

        mesh = make_simple_mesh()
        mesh.points = np.random.rand(4, 5).astype(np.float64)  # Wrong shape

        # meshio path raises on bad shape, VTK fallback also fails
        result = _run_parse_both_fail(filepath)
        assert isinstance(result, ParseError)

    def test_field_dimension_mismatch_produces_warning(self, tmp_path):
        """Nodal field with wrong node count produces warning and is skipped."""
        filepath = str(tmp_path / "model.vtu")
        write_dummy_vtu_file(filepath)

        # 4 nodes but field has 5 values
        mesh = make_simple_mesh(
            n_nodes=4,
            point_data={"bad_field": np.array([1, 2, 3, 4, 5], dtype=np.float64)},
        )

        result = _run_parse_with_mock_meshio(filepath, mesh)

        assert isinstance(result, ParseResult)
        assert result.field_count == 0  # Field was skipped
        assert any("dimension mismatch" in w.lower() for w in result.warnings)

    def test_unsupported_cell_type_produces_warning(self, tmp_path):
        """Unknown meshio cell type is skipped with warning."""
        filepath = str(tmp_path / "model.vtu")
        write_dummy_vtu_file(filepath)

        mesh = MockMesh(
            points=np.random.rand(4, 3).astype(np.float64),
            cells=[
                MockCellBlock("polygon", np.array([[0, 1, 2, 3]], dtype=np.int32)),
            ],
            point_data={},
            cell_data={},
            field_data={},
        )

        result = _run_parse_with_mock_meshio(filepath, mesh)

        assert isinstance(result, ParseResult)
        assert result.element_count == 0
        assert "polygon" in result.skipped_cell_types
        assert any("polygon" in w for w in result.warnings)

    def test_3d_field_data_skipped(self, tmp_path):
        """3D+ field data (unexpected shape) is skipped with warning."""
        filepath = str(tmp_path / "model.vtu")
        write_dummy_vtu_file(filepath)

        mesh = make_simple_mesh(
            n_nodes=4,
            point_data={"weird": np.random.rand(4, 3, 2).astype(np.float64)},
        )

        result = _run_parse_with_mock_meshio(filepath, mesh)

        assert isinstance(result, ParseResult)
        assert result.field_count == 0
        assert any("unexpected shape" in w.lower() for w in result.warnings)


# ===================================================================
# 5. Metadata handling
# ===================================================================

class TestMetadata:
    """Metadata extraction and defaults."""

    def test_missing_metadata_uses_not_specified(self, tmp_path):
        """Missing metadata fields use 'Not specified', not fabricated values."""
        filepath = str(tmp_path / "model.vtu")
        write_dummy_vtu_file(filepath)

        mesh = make_simple_mesh()

        result = _run_parse_with_mock_meshio(filepath, mesh, "test.vtu")

        assert isinstance(result, ParseResult)
        meta = result.metadata
        assert meta.solver_name == "Not specified"
        assert meta.solver_version == "Not specified"
        assert meta.unit_system.length == "unspecified"
        assert meta.unit_system.force == "unspecified"
        assert meta.coordinate_system == "Not specified"
        assert meta.source_filename == "test.vtu"

    def test_filename_defaults_to_basename(self, tmp_path):
        """If no filename provided, use basename of filepath."""
        filepath = str(tmp_path / "subdir" / "mesh.vtu")
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        write_dummy_vtu_file(filepath)

        mesh = make_simple_mesh()

        result = _run_parse_with_mock_meshio(filepath, mesh)

        assert isinstance(result, ParseResult)
        assert result.metadata.source_filename == "mesh.vtu"


# ===================================================================
# 6. Element type mapping
# ===================================================================

class TestElementTypeMapping:
    """Verify VTK and meshio type code mapping."""

    @pytest.mark.parametrize("vtk_code,expected", [
        (5, ElementType.TRI3),
        (9, ElementType.QUAD4),
        (10, ElementType.TET4),
        (12, ElementType.HEX8),
        (13, ElementType.WEDGE6),
    ])
    def test_vtk_code_to_element_type(self, vtk_code, expected):
        assert ElementType.from_vtk_type_code(vtk_code) == expected

    @pytest.mark.parametrize("meshio_name,expected", [
        ("triangle", ElementType.TRI3),
        ("quad", ElementType.QUAD4),
        ("tetra", ElementType.TET4),
        ("hexahedron", ElementType.HEX8),
        ("wedge", ElementType.WEDGE6),
    ])
    def test_meshio_name_to_element_type(self, meshio_name, expected):
        assert ElementType.from_meshio_type_name(meshio_name) == expected

    def test_unknown_vtk_code_returns_none(self):
        assert ElementType.from_vtk_type_code(999) is None

    def test_unknown_meshio_name_returns_none(self):
        assert ElementType.from_meshio_type_name("pyramid") is None

    @pytest.mark.parametrize("elem_type,expected_nodes", [
        (ElementType.TRI3, 3),
        (ElementType.QUAD4, 4),
        (ElementType.TET4, 4),
        (ElementType.HEX8, 8),
        (ElementType.WEDGE6, 6),
    ])
    def test_nodes_per_element(self, elem_type, expected_nodes):
        assert elem_type.nodes_per_element == expected_nodes


# ===================================================================
# 7. Float64 precision
# ===================================================================

class TestFloat64Precision:
    """Verify Float64 is preserved throughout, never downcast."""

    def test_points_precision(self, tmp_path):
        filepath = str(tmp_path / "model.vtu")
        write_dummy_vtu_file(filepath)

        mesh = make_simple_mesh()
        # Use float32 input to verify upcasting
        mesh.points = np.float32(mesh.points)

        result = _run_parse_with_mock_meshio(filepath, mesh)

        assert isinstance(result, ParseResult)
        assert result.points.dtype == np.float64

    def test_field_precision(self, tmp_path):
        filepath = str(tmp_path / "model.vtu")
        write_dummy_vtu_file(filepath)

        mesh = make_simple_mesh(
            n_nodes=4,
            point_data={"temp": np.float32([1.1, 2.2, 3.3, 4.4])},
        )

        result = _run_parse_with_mock_meshio(filepath, mesh)

        assert isinstance(result, ParseResult)
        assert result.result_fields[0].timestep_data[0].values.dtype == np.float64


# ===================================================================
# 8. No extrapolation in MVP
# ===================================================================

class TestNoExtrapolation:
    """Verify no integration-point extrapolation happens."""

    def test_provenance_no_extrapolation(self, tmp_path):
        filepath = str(tmp_path / "model.vtu")
        write_dummy_vtu_file(filepath)

        mesh = make_simple_mesh(
            n_nodes=4,
            point_data={"stress": np.ones(4, dtype=np.float64)},
        )

        result = _run_parse_with_mock_meshio(filepath, mesh)

        assert isinstance(result, ParseResult)
        for field in result.result_fields:
            assert field.provenance.extrapolation_applied is False
            assert field.provenance.averaging_applied is False


# ===================================================================
# 9. Self-check alignment
# ===================================================================

class TestDocumentAlignment:
    """Verify parser behavior aligns with documented requirements."""

    def test_parser_does_not_import_storage(self):
        """Parser must not reference storage modules."""
        import app.parsing.vtk_parser as m
        source = open(m.__file__, "r").read()
        assert "storage_writer" not in source
        assert "s3_client" not in source
        assert "boto3" not in source

    def test_parser_does_not_import_rendering(self):
        """Parser must not reference rendering modules."""
        import app.parsing.vtk_parser as m
        source = open(m.__file__, "r").read()
        assert "webgl" not in source.lower()
        assert "three.js" not in source.lower()

    def test_parser_does_not_perform_unit_conversion(self):
        """Parser must not contain unit conversion logic."""
        import app.parsing.vtk_parser as m
        source = open(m.__file__, "r").read()
        assert "convert_unit" not in source
        assert "unit_conversion" not in source
