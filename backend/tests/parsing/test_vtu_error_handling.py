from __future__ import annotations

import importlib
from unittest import mock
from xml.etree.ElementTree import ParseError as XmlParseError

from app.parsing.models import ParseError


def write_dummy_vtu_file(filepath: str) -> None:
    with open(filepath, "w", encoding="utf-8") as f:
        f.write('<?xml version="1.0"?><VTKFile type="UnstructuredGrid"></VTKFile>')


def test_malformed_vtu_returns_structured_domain_error(tmp_path):
    filepath = str(tmp_path / "broken.vtu")
    write_dummy_vtu_file(filepath)

    mock_meshio = mock.MagicMock()
    mock_meshio.read.side_effect = XmlParseError("mismatched tag: line 1, column 42")

    mock_vtk_module = mock.MagicMock()
    mock_reader = mock.MagicMock()
    mock_output = mock.MagicMock()
    mock_output.GetNumberOfPoints.return_value = 0
    mock_reader.GetOutput.return_value = mock_output
    mock_vtk_module.vtkXMLUnstructuredGridReader.return_value = mock_reader

    with mock.patch.dict("sys.modules", {
        "meshio": mock_meshio,
        "vtk": mock_vtk_module,
        "vtk.util": mock.MagicMock(),
        "vtk.util.numpy_support": mock.MagicMock(),
    }):
        import app.parsing.vtk_parser as parser_mod

        importlib.reload(parser_mod)
        result = parser_mod.parse_vtk(filepath, filename="broken.vtu")

    assert isinstance(result, ParseError)
    assert result.error_code == "invalid_vtu_format"
    assert "Invalid VTU file 'broken.vtu'" in result.error_message
    assert "malformed" in result.error_message
    assert result.technical_message is not None
    assert "mismatched tag" in result.technical_message


def test_generic_backend_failures_keep_generic_parse_code(tmp_path):
    filepath = str(tmp_path / "broken.vtu")
    write_dummy_vtu_file(filepath)

    mock_meshio = mock.MagicMock()
    mock_meshio.read.side_effect = RuntimeError("meshio backend crashed")

    mock_vtk_module = mock.MagicMock()
    mock_vtk_module.vtkXMLUnstructuredGridReader.side_effect = RuntimeError("vtk backend crashed")

    with mock.patch.dict("sys.modules", {
        "meshio": mock_meshio,
        "vtk": mock_vtk_module,
        "vtk.util": mock.MagicMock(),
        "vtk.util.numpy_support": mock.MagicMock(),
    }):
        import app.parsing.vtk_parser as parser_mod

        importlib.reload(parser_mod)
        result = parser_mod.parse_vtk(filepath, filename="broken.vtu")

    assert isinstance(result, ParseError)
    assert result.error_code == "vtu_parse_failed"
    assert "Failed to parse VTU file 'broken.vtu'" in result.error_message
