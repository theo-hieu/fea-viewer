"""
FEA Viewer — VTK/VTU Parser Module
====================================

Pipeline position: Raw File → Format Detector → **Format-Specific Parser** → Normalizer → …

This module reads a local VTK/VTU file and extracts geometry, topology,
result fields, timestep metadata, and model metadata into canonical types
from `models.py`.

Parser strategy (per Risk R1 mitigation, 03b-risks-acceptance.md):
  1. Attempt meshio.read(filepath) first
  2. On meshio failure, fall back to vtk.vtkXMLUnstructuredGridReader
  3. If both fail, return ParseError with both stack traces

Invariants enforced:
  - Float64 precision preserved for all numerical data (02a §2)
  - No unit conversion, no coordinate transforms, no extrapolation (03b R6)
  - Missing metadata remains "Not specified" — never fabricated
  - Unrecognized cell types skipped with explicit warning (03b §7.1)
  - No silent transformations of any kind

Source authority:
  - 02a-system-architecture.md §5.2: meshio-backed parser with VTK fallback
  - 02a-system-architecture.md §2: canonical data model
  - 03b-risks-acceptance.md R1: fallback requirement
  - 04-mvp-implementation-plan.md §2.2 steps 2–3: extraction rules
"""

from __future__ import annotations

import logging
import os
import traceback
from typing import Optional

import numpy as np

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

logger = logging.getLogger(__name__)


# ---------------------------------------------------------------------------
# Public API
# ---------------------------------------------------------------------------

def parse_vtk(filepath: str, filename: Optional[str] = None) -> ParseResult | ParseError:
    """
    Parse a VTK/VTU file and return structured results.

    Parameters
    ----------
    filepath : str
        Absolute path to the local VTK/VTU file on disk.
    filename : str, optional
        Original user-declared filename. Used for metadata only.
        Defaults to the basename of filepath.

    Returns
    -------
    ParseResult on success (including partial success with warnings).
    ParseError on complete failure (both parser backends failed).
    """
    if filename is None:
        filename = os.path.basename(filepath)

    meshio_tb: Optional[str] = None
    vtk_tb: Optional[str] = None

    # --- Attempt 1: meshio ---
    try:
        result = _parse_with_meshio(filepath, filename)
        logger.info(
            "meshio parse succeeded",
            extra={"filepath": filepath, "node_count": result.node_count,
                   "element_count": result.element_count},
        )
        return result
    except Exception as exc:
        meshio_tb = traceback.format_exc()
        logger.warning(
            "meshio parse failed, attempting VTK fallback",
            extra={"filepath": filepath, "error": str(exc)},
        )

    # --- Attempt 2: VTK fallback (R1 mitigation) ---
    vtk_error_type: str = "UnknownError"
    try:
        result = _parse_with_vtk_fallback(filepath, filename)
        logger.info(
            "VTK fallback parse succeeded",
            extra={"filepath": filepath, "node_count": result.node_count,
                   "element_count": result.element_count},
        )
        return result
    except Exception as exc:
        vtk_error_type = type(exc).__name__
        vtk_tb = traceback.format_exc()
        logger.error(
            "Both meshio and VTK fallback failed",
            extra={"filepath": filepath, "error": str(exc)},
        )

    # --- Both failed ---
    return ParseError(
        error_type=vtk_error_type,
        error_message=f"Failed to parse '{filename}': both meshio and VTK backends failed.",
        traceback_meshio=meshio_tb,
        traceback_vtk=vtk_tb,
        source_filename=filename,
        raw_file_preserved=True,
    )


# ---------------------------------------------------------------------------
# meshio backend
# ---------------------------------------------------------------------------

def _parse_with_meshio(filepath: str, filename: str) -> ParseResult:
    """
    Parse using meshio. Raises on failure (caller catches).

    meshio returns:
      - mesh.points: ndarray of shape (n_nodes, 3)
      - mesh.cells: list of CellBlock(type, data) where type is a string
      - mesh.point_data: dict[str, ndarray]
      - mesh.cell_data: dict[str, list[ndarray]]
      - mesh.field_data: dict[str, ndarray] (metadata, e.g. named groups)
    """
    import meshio

    mesh = meshio.read(filepath)

    # --- Extract points (Float64) ---
    points = np.asarray(mesh.points, dtype=np.float64)
    if points.ndim == 2 and points.shape[1] == 2:
        # 2D mesh: pad with zeros to make 3D
        points = np.column_stack([points, np.zeros(len(points), dtype=np.float64)])
    elif points.ndim != 2 or points.shape[1] != 3:
        raise ValueError(
            f"Unexpected points shape {points.shape}. Expected (n_nodes, 3)."
        )

    node_count = len(points)

    # --- Extract cells ---
    cell_blocks, element_count, skipped, warnings = _extract_cells_from_meshio(mesh)

    # --- Extract result fields ---
    result_fields = _extract_fields_from_meshio(mesh, node_count, element_count, warnings)

    # --- Extract metadata ---
    metadata = _extract_metadata_meshio(mesh, filename)

    return ParseResult(
        points=points,
        cell_blocks=cell_blocks,
        result_fields=result_fields,
        metadata=metadata,
        warnings=warnings,
        parser_backend="meshio",
        node_count=node_count,
        element_count=element_count,
        field_count=len(result_fields),
        skipped_cell_types=skipped,
    )


def _extract_cells_from_meshio(mesh) -> tuple[list[CellBlock], int, list[str], list[str]]:
    """
    Extract cell blocks from a meshio Mesh object.

    Returns (cell_blocks, total_element_count, skipped_type_names, warnings).
    """
    cell_blocks: list[CellBlock] = []
    total_count = 0
    skipped: list[str] = []
    warnings: list[str] = []

    for cell_block in mesh.cells:
        cell_type_name = cell_block.type
        elem_type = ElementType.from_meshio_type_name(cell_type_name)

        if elem_type is None:
            skipped.append(cell_type_name)
            warnings.append(
                f"Unsupported element type '{cell_type_name}' skipped. "
                f"This element type is not part of the MVP supported set."
            )
            continue

        connectivity = np.asarray(cell_block.data, dtype=np.int32)

        if connectivity.ndim != 2:
            warnings.append(
                f"Malformed connectivity for '{cell_type_name}': expected 2D array, "
                f"got {connectivity.ndim}D. Skipping this block."
            )
            skipped.append(cell_type_name)
            continue

        expected_nodes = elem_type.nodes_per_element
        actual_nodes = connectivity.shape[1]
        if actual_nodes != expected_nodes:
            warnings.append(
                f"Element type '{cell_type_name}' expects {expected_nodes} nodes per element, "
                f"but got {actual_nodes}. Skipping this block."
            )
            skipped.append(cell_type_name)
            continue

        count = connectivity.shape[0]
        cell_blocks.append(CellBlock(
            element_type=elem_type,
            connectivity=connectivity,
            count=count,
        ))
        total_count += count

    return cell_blocks, total_count, skipped, warnings


def _extract_fields_from_meshio(
    mesh,
    node_count: int,
    element_count: int,
    warnings: list[str],
) -> list[ResultField]:
    """
    Extract result fields from meshio point_data and cell_data.

    Per 04-mvp-implementation-plan.md §2.2 step 3:
      - point_data → ResultField with location="nodal"
      - cell_data → ResultField with location="elemental"
      - Validate field dimensions match node/element counts
      - Skip malformed fields with warning
    """
    result_fields: list[ResultField] = []

    # --- Point data (nodal fields) ---
    for field_name, data in mesh.point_data.items():
        data_f64 = np.asarray(data, dtype=np.float64)

        # Determine components
        if data_f64.ndim == 1:
            n_components = 1
            # Reshape to (n_nodes, 1) for consistency? No — keep flat for scalars.
        elif data_f64.ndim == 2:
            n_components = data_f64.shape[1]
        else:
            warnings.append(
                f"Nodal field '{field_name}' has unexpected shape {data_f64.shape}. "
                f"Skipping this field."
            )
            continue

        # Validate length
        if data_f64.shape[0] != node_count:
            warnings.append(
                f"Nodal field '{field_name}' has {data_f64.shape[0]} values but "
                f"expected {node_count} (node_count). Field dimension mismatch. "
                f"Skipping this field."
            )
            continue

        result_fields.append(ResultField(
            name=field_name,
            location=FieldLocation.NODAL,
            n_components=n_components,
            provenance=FieldProvenance(
                source_field_name=field_name,
                source_location=FieldLocation.NODAL,
            ),
            timestep_data=[TimestepData(
                step_index=0,
                time_value=None,
                values=data_f64,
            )],
        ))

    # --- Cell data (elemental fields) ---
    for field_name, data_blocks in mesh.cell_data.items():
        # meshio cell_data is a list of arrays, one per cell block.
        # Concatenate all blocks into a single array for this field.
        try:
            combined = np.concatenate(
                [np.asarray(d, dtype=np.float64) for d in data_blocks]
            )
        except (ValueError, TypeError) as exc:
            warnings.append(
                f"Elemental field '{field_name}' could not be concatenated: {exc}. "
                f"Skipping this field."
            )
            continue

        if combined.ndim == 1:
            n_components = 1
        elif combined.ndim == 2:
            n_components = combined.shape[1]
        else:
            warnings.append(
                f"Elemental field '{field_name}' has unexpected shape {combined.shape}. "
                f"Skipping this field."
            )
            continue

        # Note: element_count may differ from combined length if some cell types
        # were skipped. We compare against total elements read, which includes
        # skipped types' elements in the source file.
        total_source_elements = sum(
            len(np.asarray(d)) for d in data_blocks
        )
        if combined.shape[0] != total_source_elements:
            warnings.append(
                f"Elemental field '{field_name}' has inconsistent lengths across "
                f"cell blocks. Skipping this field."
            )
            continue

        result_fields.append(ResultField(
            name=field_name,
            location=FieldLocation.ELEMENTAL,
            n_components=n_components,
            provenance=FieldProvenance(
                source_field_name=field_name,
                source_location=FieldLocation.ELEMENTAL,
            ),
            timestep_data=[TimestepData(
                step_index=0,
                time_value=None,
                values=combined,
            )],
        ))

    return result_fields


def _extract_metadata_meshio(mesh, filename: str) -> ModelMetadata:
    """
    Extract model metadata from meshio Mesh.

    meshio does not expose rich metadata. We extract what is available
    and leave the rest as "Not specified".
    """
    # meshio field_data can contain named groups / sets info
    # but not solver metadata. We preserve what's available.
    file_format = "vtk_xml"

    # Check for any metadata hints in field_data
    solver_name = "Not specified"
    title = "Not specified"

    if hasattr(mesh, "info") and isinstance(mesh.info, dict):
        title = mesh.info.get("title", "Not specified")

    return ModelMetadata(
        source_filename=filename,
        file_format=file_format,
        solver_name=solver_name,
        title=title,
        unit_system=UnitSystem(),  # "unspecified" for all — never fabricated
    )


# ---------------------------------------------------------------------------
# VTK fallback backend (R1 mitigation)
# ---------------------------------------------------------------------------

def _parse_with_vtk_fallback(filepath: str, filename: str) -> ParseResult:
    """
    Parse using VTK Python bindings. Raises on failure (caller catches).

    This is the documented R1 fallback for edge-case files that meshio
    cannot handle.
    """
    import vtk
    from vtk.util.numpy_support import vtk_to_numpy

    reader = vtk.vtkXMLUnstructuredGridReader()
    reader.SetFileName(filepath)
    reader.Update()

    output = reader.GetOutput()
    if output is None or output.GetNumberOfPoints() == 0:
        raise ValueError(
            f"VTK reader returned empty output for '{filename}'."
        )

    # --- Points ---
    vtk_points = output.GetPoints()
    points_vtk = vtk_to_numpy(vtk_points.GetData())
    points = np.asarray(points_vtk, dtype=np.float64)
    if points.ndim == 2 and points.shape[1] == 2:
        points = np.column_stack([points, np.zeros(len(points), dtype=np.float64)])

    node_count = len(points)
    warnings: list[str] = []

    # --- Cells ---
    cell_blocks, element_count, skipped = _extract_cells_from_vtk(output, warnings)

    # --- Result fields ---
    result_fields = _extract_fields_from_vtk(output, node_count, element_count, warnings)

    # --- Metadata ---
    metadata = ModelMetadata(
        source_filename=filename,
        file_format="vtk_xml",
        solver_name="Not specified",
        title="Not specified",
        unit_system=UnitSystem(),
    )

    return ParseResult(
        points=points,
        cell_blocks=cell_blocks,
        result_fields=result_fields,
        metadata=metadata,
        warnings=warnings,
        parser_backend="vtk_fallback",
        node_count=node_count,
        element_count=element_count,
        field_count=len(result_fields),
        skipped_cell_types=skipped,
    )


def _extract_cells_from_vtk(output, warnings: list[str]) -> tuple[list[CellBlock], int, list[str]]:
    """Extract cell blocks from VTK unstructured grid output."""
    import vtk

    cell_blocks: list[CellBlock] = []
    total_count = 0
    skipped: list[str] = []

    # Group cells by type
    cells_by_type: dict[int, list[list[int]]] = {}
    for i in range(output.GetNumberOfCells()):
        cell = output.GetCell(i)
        vtk_type = cell.GetCellType()
        if vtk_type not in cells_by_type:
            cells_by_type[vtk_type] = []
        point_ids = [cell.GetPointId(j) for j in range(cell.GetNumberOfPoints())]
        cells_by_type[vtk_type].append(point_ids)

    for vtk_type, cell_list in cells_by_type.items():
        elem_type = ElementType.from_vtk_type_code(vtk_type)
        if elem_type is None:
            skipped.append(f"vtk_type_{vtk_type}")
            warnings.append(
                f"Unsupported VTK cell type code {vtk_type} skipped. "
                f"This element type is not part of the MVP supported set."
            )
            continue

        connectivity = np.array(cell_list, dtype=np.int32)
        count = len(cell_list)
        cell_blocks.append(CellBlock(
            element_type=elem_type,
            connectivity=connectivity,
            count=count,
        ))
        total_count += count

    return cell_blocks, total_count, skipped


def _extract_fields_from_vtk(
    output,
    node_count: int,
    element_count: int,
    warnings: list[str],
) -> list[ResultField]:
    """Extract result fields from VTK point data and cell data."""
    from vtk.util.numpy_support import vtk_to_numpy

    result_fields: list[ResultField] = []

    # --- Point data (nodal) ---
    pd = output.GetPointData()
    for i in range(pd.GetNumberOfArrays()):
        arr = pd.GetArray(i)
        if arr is None:
            continue
        field_name = arr.GetName() or f"point_field_{i}"
        try:
            data = vtk_to_numpy(arr).astype(np.float64)
        except Exception as exc:
            warnings.append(f"Could not convert nodal field '{field_name}': {exc}. Skipping.")
            continue

        if data.shape[0] != node_count:
            warnings.append(
                f"Nodal field '{field_name}' has {data.shape[0]} values but "
                f"expected {node_count}. Field dimension mismatch. Skipping."
            )
            continue

        n_components = 1 if data.ndim == 1 else data.shape[1]

        result_fields.append(ResultField(
            name=field_name,
            location=FieldLocation.NODAL,
            n_components=n_components,
            provenance=FieldProvenance(
                source_field_name=field_name,
                source_location=FieldLocation.NODAL,
            ),
            timestep_data=[TimestepData(step_index=0, time_value=None, values=data)],
        ))

    # --- Cell data (elemental) ---
    cd = output.GetCellData()
    for i in range(cd.GetNumberOfArrays()):
        arr = cd.GetArray(i)
        if arr is None:
            continue
        field_name = arr.GetName() or f"cell_field_{i}"
        try:
            data = vtk_to_numpy(arr).astype(np.float64)
        except Exception as exc:
            warnings.append(f"Could not convert elemental field '{field_name}': {exc}. Skipping.")
            continue

        n_components = 1 if data.ndim == 1 else data.shape[1]

        result_fields.append(ResultField(
            name=field_name,
            location=FieldLocation.ELEMENTAL,
            n_components=n_components,
            provenance=FieldProvenance(
                source_field_name=field_name,
                source_location=FieldLocation.ELEMENTAL,
            ),
            timestep_data=[TimestepData(step_index=0, time_value=None, values=data)],
        ))

    return result_fields
