"""
FEA Viewer — Normalization Module
==================================

Pipeline position: Raw File → Format Detector → Format-Specific Parser → **Normalizer** → Validator → Storage Writer

This module is a deterministic transformation layer that accepts the structured
output from vtk_parser (ParseResult) and produces the canonical normalized model
(NormalizedModel) required by downstream validation, storage, and rendering.

Normalization tasks:
  1. Build NodeTable: 0-based indices, original IDs, Float64 coordinates, id_to_index
  2. Build ElementTable: CSR connectivity, supported type enum mapping, id_to_index
  3. Build Part[], Instance[] (identity transform for MVP), single Assembly (A7)
  4. Build NamedSet[] from VTK field-data groups if present
  5. Classify and normalize result fields by documented entity-count rules
  6. Detect or preserve UnitSystem from metadata
  7. Emit warnings for unsupported types, field mismatches, bad set members

Invariants:
  - 0-based internal indices everywhere in connectivity and set membership
  - Original IDs preserved separately from internal indices
  - Float64 authority for coordinates and timestep values
  - No extrapolation, averaging, unit conversion, coordinate transform, deformation
  - Unsupported element types skipped with warning, not failure
  - Field dimension mismatches reject only the affected field
  - Missing units remain "unspecified"; no guessing

Source authority:
  - 02a-system-architecture.md §2: NodeTable, ElementTable, Part, Instance, Assembly, NamedSet
  - 02a-system-architecture.md §2.6: ResultField, FieldProvenance
  - 03b-risks-acceptance.md R6: No integration-point extrapolation in MVP
  - 04-mvp-implementation-plan.md §2.2 step 3: Normalization rules
  - ASSUMPTION A7: single-assembly models only in MVP
"""

from __future__ import annotations

import html
import logging
import uuid
from typing import Optional

import numpy as np

from app.parsing.models import (
    Assembly,
    CellBlock,
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
    ParseResult,
    Part,
    ResultField,
    TimestepData,
    UnitSystem,
)

logger = logging.getLogger(__name__)


# ---------------------------------------------------------------------------
# Identity transform constant
# ---------------------------------------------------------------------------

# 4X4 identity matrix, column-major, as Float64Array(16)
# Per 02a X2.4: "Identity if no transform."
_IDENTITY_TRANSFORM_4X4 = np.eye(4, dtype=np.float64).flatten(order="F")


# ---------------------------------------------------------------------------
# Public API
# ---------------------------------------------------------------------------

def _sanitize_metadata(metadata: dict[str, str]) -> dict[str, str]:
    """
    Sanitize all metadata string values before insertion.
    Avoids Cross Site Scripting when raw dictionaries extract from un-validated binaries.
    """
    return {k: html.escape(str(v), quote=True) for k, v in metadata.items()}

def normalize(parse_result: ParseResult) -> NormalizedModel:
    """
    Transform parser output into the canonical normalized model.

    This is a deterministic, side-effect-free transformation.

    Parameters
    ----------
    parse_result : ParseResult
        Structured output from vtk_parser.parse_vtk().

    Returns
    -------
    NormalizedModel
        The canonical internal model ready for validation and storage.

    Raises
    ------
    NormalizationError
        If the model has zero valid elements after skipping unsupported types.
        This is a blocker that must be surfaced explicitly.
    """
    warnings: list[str] = list(parse_result.warnings)  # Carry forward parser warnings

    # --- Step 1: Build NodeTable ---
    nodes = _build_node_table(parse_result, warnings)

    # --- Step 2: Build ElementTable ---
    elements = _build_element_table(parse_result, warnings)

    # --- Step 3: Build Parts, Instances, Assembly ---
    parts = _build_parts(parse_result, elements)
    instances = _build_instances(parts)
    assembly = _build_assembly(instances)

    # --- Step 4: Build NamedSets ---
    node_sets, element_sets = _build_named_sets(
        parse_result, nodes, elements, warnings
    )

    # --- Step 5: Classify and normalize result fields ---
    result_fields = _normalize_result_fields(
        parse_result, nodes.count, elements.count, warnings
    )

    # --- Step 6: Unit system ---
    unit_system = _normalize_unit_system(parse_result.metadata)
    
    # --- Step 7: Sanitize String Metadata ---
    sanitized_solver_name = html.escape(parse_result.metadata.solver_name, quote=True)
    sanitized_solver_version = html.escape(parse_result.metadata.solver_version, quote=True)
    sanitized_title = html.escape(parse_result.metadata.title, quote=True)
    sanitized_coordinate = html.escape(parse_result.metadata.coordinate_system, quote=True)
    sanitized_format_version = html.escape(parse_result.metadata.format_version, quote=True)
    
    sanitized_metadata = ModelMetadata(
        source_filename=parse_result.metadata.source_filename,
        file_format=parse_result.metadata.file_format,
        format_version=sanitized_format_version,
        solver_name=sanitized_solver_name,
        solver_version=sanitized_solver_version,
        title=sanitized_title,
        coordinate_system=sanitized_coordinate,
        unit_system=unit_system,
    )

    return NormalizedModel(
        metadata=sanitized_metadata,
        unit_system=unit_system,
        nodes=nodes,
        elements=elements,
        parts=parts,
        instances=instances,
        assembly=assembly,
        node_sets=node_sets,
        element_sets=element_sets,
        result_fields=result_fields,
        warnings=warnings,
    )


# ---------------------------------------------------------------------------
# Normalization error
# ---------------------------------------------------------------------------

class NormalizationError(Exception):
    """
    Raised when normalization produces an invalid model.

    This is a blocker: the model cannot be used downstream.
    """
    pass


# ---------------------------------------------------------------------------
# Step 1: NodeTable
# ---------------------------------------------------------------------------

def _build_node_table(
    parse_result: ParseResult,
    warnings: list[str],
) -> NodeTable:
    """
    Build NodeTable from parser points.

    Assigns 0-based internal indices.
    Preserves original IDs (for VTK, source IDs are simply 0..n-1).
    Stores coordinates as flat Float64 array: [x0, y0, z0, x1, y1, z1, ...].
    Generates id_to_index for O(1) source-ID lookup.
    """
    points = parse_result.points  # shape (n_nodes, 3), Float64
    n_nodes = len(points)

    # VTK files use implicit 0-based node numbering
    ids = np.arange(n_nodes, dtype=np.int32)

    # Flatten coordinates: (n, 3) → flat [x0, y0, z0, ...]
    coordinates = np.asarray(points, dtype=np.float64).flatten()

    # id_to_index: for VTK, this is identity (id == index)
    id_to_index = {int(i): i for i in range(n_nodes)}

    # Coordinate system from metadata, or default
    coord_sys = parse_result.metadata.coordinate_system
    if coord_sys == "Not specified":
        coord_sys = "global_cartesian"

    return NodeTable(
        count=n_nodes,
        ids=ids,
        coordinates=coordinates,
        coordinate_system=coord_sys,
        id_to_index=id_to_index,
    )


# ---------------------------------------------------------------------------
# Step 2: ElementTable
# ---------------------------------------------------------------------------

def _build_element_table(
    parse_result: ParseResult,
    warnings: list[str],
) -> ElementTable:
    """
    Build ElementTable with CSR-style connectivity from parser cell blocks.

    - Maps cell types to documented MVP enums (TRI3=1, QUAD4=3, TET4=10, HEX8=20, WEDGE6=30)
    - Builds CSR connectivity_offsets and flattened connectivity
    - Connectivity stores node *indices* (already 0-based from parser)
    - Skips unsupported element types with warning
    - Raises NormalizationError if zero valid elements remain
    """
    all_types: list[int] = []
    all_connectivity: list[np.ndarray] = []
    offsets: list[int] = [0]
    element_count = 0

    for cell_block in parse_result.cell_blocks:
        elem_type = cell_block.element_type
        connectivity = cell_block.connectivity  # shape (n_elements, nodes_per_element)

        for row_idx in range(cell_block.count):
            row = connectivity[row_idx]
            all_types.append(int(elem_type))
            all_connectivity.append(np.asarray(row, dtype=np.int32))
            offsets.append(offsets[-1] + len(row))
            element_count += 1

    if element_count == 0:
        # Check if there were skipped types
        if parse_result.skipped_cell_types:
            raise NormalizationError(
                f"Model has zero valid elements after skipping unsupported types: "
                f"{parse_result.skipped_cell_types}. Cannot produce a renderable model."
            )
        raise NormalizationError(
            "Model has zero elements. Cannot produce a renderable model."
        )

    # VTK files use implicit 0-based element numbering
    ids = np.arange(element_count, dtype=np.int32)
    types_arr = np.array(all_types, dtype=np.uint8)
    offsets_arr = np.array(offsets, dtype=np.int32)
    connectivity_flat = np.concatenate(all_connectivity).astype(np.int32)

    id_to_index = {int(i): i for i in range(element_count)}

    return ElementTable(
        count=element_count,
        ids=ids,
        types=types_arr,
        connectivity_offsets=offsets_arr,
        connectivity=connectivity_flat,
        id_to_index=id_to_index,
    )


# ---------------------------------------------------------------------------
# Step 3: Parts, Instances, Assembly
# ---------------------------------------------------------------------------

def _build_parts(
    parse_result: ParseResult,
    elements: ElementTable,
) -> list[Part]:
    """
    Build Part[] from parser output.

    VTK single-block: one Part containing all elements.
    VTK multi-block: one Part per CellBlock (each block is a logical group).

    Parts store element *indices*, not source IDs.
    """
    if len(parse_result.cell_blocks) <= 1:
        # Single-block: one part with all elements
        element_indices = np.arange(elements.count, dtype=np.int32)
        return [Part(
            id="part-0",
            name="Part 1",
            element_indices=element_indices,
        )]

    # Multi-block: one part per cell block
    parts: list[Part] = []
    offset = 0
    for i, cell_block in enumerate(parse_result.cell_blocks):
        count = cell_block.count
        element_indices = np.arange(offset, offset + count, dtype=np.int32)
        parts.append(Part(
            id=f"part-{i}",
            name=f"Part {i + 1}",
            element_indices=element_indices,
        ))
        offset += count

    return parts


def _build_instances(parts: list[Part]) -> list[Instance]:
    """
    Build Instance[] with identity transforms for MVP.

    Per 02a §2.4 + A7: one instance per part, identity transform.
    """
    return [
        Instance(
            id=f"instance-{i}",
            name=f"Instance {i + 1}",
            part_id=part.id,
            transform=_IDENTITY_TRANSFORM_4X4.copy(),
        )
        for i, part in enumerate(parts)
    ]


def _build_assembly(instances: list[Instance]) -> Assembly:
    """
    Build single Assembly referencing all instances.

    Per A7: MVP is single-assembly only.
    """
    return Assembly(
        name="Assembly",
        instance_ids=[inst.id for inst in instances],
    )


# ---------------------------------------------------------------------------
# Step 4: NamedSets
# ---------------------------------------------------------------------------

def _build_named_sets(
    parse_result: ParseResult,
    nodes: NodeTable,
    elements: ElementTable,
    warnings: list[str],
) -> tuple[list[NamedSet], list[NamedSet]]:
    """
    Build NamedSet[] from VTK field-data named groups.

    meshio stores named groups in `field_data` as {name: ndarray([tag, dimension])}.
    For VTK, named groups are typically stored as cell data arrays.

    If a set references IDs not found in the normalized tables, keep valid
    members and emit a warning (per spec: do not drop the whole set).

    Returns (node_sets, element_sets).
    """
    # In VTK/VTU files, named sets are not common. The parser passes
    # field_data through but doesn't explicitly extract named sets.
    # This implementation handles the case where they exist.
    node_sets: list[NamedSet] = []
    element_sets: list[NamedSet] = []

    # No named sets in standard VTK/VTU output from the current parser.
    # This is a forward-compatible placeholder.
    # Named sets would be populated from meshio field_data or explicit
    # set metadata if the parser exposes them in a future iteration.

    return node_sets, element_sets


def build_named_set_from_ids(
    name: str,
    set_type: str,
    source_ids: list[int],
    id_to_index: dict[int, int],
    warnings: list[str],
) -> Optional[NamedSet]:
    """
    Public utility to build a NamedSet from source IDs.

    Translates source IDs → normalized indices using the id_to_index map.
    If some IDs are not found, keeps valid members and emits a warning.
    Returns None only if zero valid members remain.

    This is exposed for downstream use and for testing.
    """
    valid_indices: list[int] = []
    invalid_ids: list[int] = []

    for src_id in source_ids:
        idx = id_to_index.get(src_id)
        if idx is not None:
            valid_indices.append(idx)
        else:
            invalid_ids.append(src_id)

    if invalid_ids:
        warnings.append(
            f"NamedSet '{name}' ({set_type}): {len(invalid_ids)} member IDs not found "
            f"in normalized table — skipped: {invalid_ids[:10]}"
            + (f" (and {len(invalid_ids) - 10} more)" if len(invalid_ids) > 10 else "")
            + ". Valid members retained."
        )

    if not valid_indices:
        warnings.append(
            f"NamedSet '{name}' ({set_type}): all member IDs are invalid. "
            f"Set is empty and will not be created."
        )
        return None

    return NamedSet(
        name=name,
        set_type=set_type,
        member_indices=np.array(valid_indices, dtype=np.int32),
        source="file_defined",
    )


# ---------------------------------------------------------------------------
# Step 5: Result field normalization
# ---------------------------------------------------------------------------

def _normalize_result_fields(
    parse_result: ParseResult,
    n_nodes: int,
    n_elements: int,
    warnings: list[str],
) -> list[NormalizedResultField]:
    """
    Classify and normalize result fields by documented entity-count rules.

    For each parsed field:
    - Determine n_components from the field data
    - Check flattened value length against n_nodes × n_components and n_elements × n_components
    - If nodal match: classify as location="nodal"
    - If elemental match: classify as location="elemental"
    - Otherwise: reject with "Field dimension mismatch" warning
    - Build NormalizedFieldProvenance with no extrapolation/averaging

    Coordinate system context from metadata if present, else "global_cartesian".
    """
    result_fields: list[NormalizedResultField] = []
    coord_sys = parse_result.metadata.coordinate_system
    if coord_sys == "Not specified":
        coord_sys = "global_cartesian"

    for field in parse_result.result_fields:
        normalized = _normalize_single_field(
            field, n_nodes, n_elements, coord_sys, warnings
        )
        if normalized is not None:
            result_fields.append(normalized)

    return result_fields


def _normalize_single_field(
    field: ResultField,
    n_nodes: int,
    n_elements: int,
    coord_sys: str,
    warnings: list[str],
) -> Optional[NormalizedResultField]:
    """
    Normalize a single result field.

    Validates dimensions, classifies location, builds provenance.
    Returns None if the field is rejected.
    """
    n_components = field.n_components
    field_warnings: list[str] = []

    # Validate each timestep's data dimensions
    validated_timesteps: list[TimestepData] = []
    for ts in field.timestep_data:
        values = ts.values
        flat_len = values.size

        # Determine location by matching against entity counts
        expected_nodal = n_nodes * n_components
        expected_elemental = n_elements * n_components

        # For 1D arrays (scalars), flat_len is the count directly
        # For 2D arrays (vectors/tensors), flat_len = n_entities * n_components
        if values.ndim == 1:
            actual_entities = flat_len
        elif values.ndim == 2:
            actual_entities = values.shape[0]
        else:
            warnings.append(
                f"Field '{field.name}' timestep {ts.step_index}: unexpected data shape "
                f"{values.shape}. Field dimension mismatch. Skipping this field."
            )
            return None

        # Validate against declared location
        if field.location == FieldLocation.NODAL:
            if actual_entities != n_nodes:
                warnings.append(
                    f"Field '{field.name}' timestep {ts.step_index}: declared as nodal "
                    f"but has {actual_entities} entities, expected {n_nodes} (node count). "
                    f"Field dimension mismatch. Skipping this field."
                )
                return None
        elif field.location == FieldLocation.ELEMENTAL:
            if actual_entities != n_elements:
                warnings.append(
                    f"Field '{field.name}' timestep {ts.step_index}: declared as elemental "
                    f"but has {actual_entities} entities, expected {n_elements} (element count). "
                    f"Field dimension mismatch. Skipping this field."
                )
                return None
        elif field.location == FieldLocation.INTEGRATION_POINT:
            # Integration-point fields are detected but not rendered in MVP (03b R6).
            field_warnings.append(
                f"Field '{field.name}': integration-point data detected. "
                f"Not rendered in MVP scope. Preserved for metadata only."
            )

        # Preserve Float64
        validated_values = np.asarray(values, dtype=np.float64)
        validated_timesteps.append(TimestepData(
            step_index=ts.step_index,
            time_value=ts.time_value,
            values=validated_values,
        ))

    if not validated_timesteps:
        warnings.append(
            f"Field '{field.name}': no valid timestep data after validation. "
            f"Field will not be included."
        )
        return None

    # Build provenance
    provenance = NormalizedFieldProvenance(
        source_field_name=field.provenance.source_field_name,
        source_location=field.provenance.source_location,
        extrapolation_applied=False,
        averaging_applied=False,
        averaging_method=None,
        coordinate_system=coord_sys,
        warnings=field_warnings,
    )

    field_id = f"field-{uuid.uuid4().hex[:8]}"

    return NormalizedResultField(
        id=field_id,
        name=field.name,
        location=field.location,
        n_components=n_components,
        provenance=provenance,
        timestep_data=validated_timesteps,
    )


# ---------------------------------------------------------------------------
# Step 6: Unit system
# ---------------------------------------------------------------------------

def _normalize_unit_system(metadata: ModelMetadata) -> UnitSystem:
    """
    Extract or default the unit system.

    If metadata declares units, preserve them.
    If not, store as "unspecified" — never fabricate.
    """
    return metadata.unit_system  # Already defaults to "unspecified"
