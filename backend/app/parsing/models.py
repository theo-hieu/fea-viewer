"""
FEA Viewer — Canonical Data Model Types
========================================

These types define the structured output contract between the parser
(`vtk_parser.py`), the normalizer, the validator, and the storage writer.

All types are frozen dataclasses or enums — immutable after construction.
Float64 precision is preserved for all authoritative numerical data.

Source authority:
  - 02a-system-architecture.md §2: Data model definitions
  - 04-mvp-implementation-plan.md §2.2: Parsing pipeline outputs
  - 03b-risks-acceptance.md R6: No integration-point extrapolation in MVP
"""

from __future__ import annotations

from dataclasses import dataclass, field
from enum import Enum, IntEnum
from typing import Optional

import numpy as np
from numpy.typing import NDArray


# ---------------------------------------------------------------------------
# Element type enumeration with VTK cell-type mapping
# ---------------------------------------------------------------------------

class ElementType(IntEnum):
    """
    Internal element-type codes, matching the documented canonical model.

    Per 04-mvp-implementation-plan.md §2.2 step 3 (normalizer):
      TRI3=1, QUAD4=3, TET4=10, HEX8=20, WEDGE6=30

    VTK cell type codes (from VTK source):
      VTK_TRIANGLE=5, VTK_QUAD=9, VTK_TETRA=10, VTK_HEXAHEDRON=12, VTK_WEDGE=13
    """
    TRI3 = 1
    QUAD4 = 3
    TET4 = 10
    HEX8 = 20
    WEDGE6 = 30

    @classmethod
    def from_vtk_type_code(cls, vtk_code: int) -> Optional[ElementType]:
        """
        Map a VTK cell type integer to the internal ElementType.

        Returns None for unrecognized types (caller must emit a warning).
        """
        return _VTK_TO_INTERNAL.get(vtk_code)

    @classmethod
    def from_meshio_type_name(cls, meshio_name: str) -> Optional[ElementType]:
        """
        Map a meshio cell type string to the internal ElementType.

        Returns None for unrecognized types (caller must emit a warning).
        """
        return _MESHIO_TO_INTERNAL.get(meshio_name)

    @property
    def nodes_per_element(self) -> int:
        """Number of nodes defining one element of this type."""
        return _NODES_PER_ELEMENT[self]


# VTK cell type code → internal ElementType
_VTK_TO_INTERNAL: dict[int, ElementType] = {
    5: ElementType.TRI3,      # VTK_TRIANGLE
    9: ElementType.QUAD4,     # VTK_QUAD
    10: ElementType.TET4,     # VTK_TETRA
    12: ElementType.HEX8,     # VTK_HEXAHEDRON
    13: ElementType.WEDGE6,   # VTK_WEDGE
}

# meshio cell type string → internal ElementType
_MESHIO_TO_INTERNAL: dict[str, ElementType] = {
    "triangle": ElementType.TRI3,
    "quad": ElementType.QUAD4,
    "tetra": ElementType.TET4,
    "hexahedron": ElementType.HEX8,
    "wedge": ElementType.WEDGE6,
}

# Nodes per element type
_NODES_PER_ELEMENT: dict[ElementType, int] = {
    ElementType.TRI3: 3,
    ElementType.QUAD4: 4,
    ElementType.TET4: 4,
    ElementType.HEX8: 8,
    ElementType.WEDGE6: 6,
}


# ---------------------------------------------------------------------------
# Field location enumeration
# ---------------------------------------------------------------------------

class FieldLocation(Enum):
    """
    Where result field values are defined.

    Per 02a §2: nodal, elemental, or integration-point.
    Integration-point is detectable but NOT rendered in MVP (03b R6).
    """
    NODAL = "nodal"
    ELEMENTAL = "elemental"
    INTEGRATION_POINT = "integration_point"


# ---------------------------------------------------------------------------
# Structured data types
# ---------------------------------------------------------------------------

@dataclass(frozen=True)
class FieldProvenance:
    """
    Tracks the origin and any transformations applied to a result field.

    Per 02a §2.6: provenance must record source field name, source location,
    and whether extrapolation or averaging has been applied.

    MVP constraint: extrapolation_applied and averaging_applied are always False.
    """
    source_field_name: str
    source_location: FieldLocation
    extrapolation_applied: bool = False
    averaging_applied: bool = False


@dataclass(frozen=True)
class TimestepData:
    """
    Result field values at a single timestep.

    Per 02a §2: timestep data is Float64 on the server side.
    Shape: (n_entities, n_components) where n_entities is node_count or element_count.
    """
    step_index: int
    time_value: Optional[float]
    values: NDArray[np.float64]


@dataclass(frozen=True)
class ResultField:
    """
    A single result field extracted from the source file.

    Per 02a §2.4-2.6: each field has a name, location, component count,
    provenance, and per-timestep data.

    Fields:
        name:         Field name as declared in the source file.
        location:     NODAL or ELEMENTAL (INTEGRATION_POINT detected but not rendered).
        n_components: Number of components (1=scalar, 3=vector, 6=symmetric tensor).
        provenance:   Origin and transformation tracking.
        timestep_data: List of TimestepData, one per available timestep.
                       For non-time-dependent fields, contains a single entry
                       with step_index=0 and time_value=None.
    """
    name: str
    location: FieldLocation
    n_components: int
    provenance: FieldProvenance
    timestep_data: list[TimestepData] = field(default_factory=list)


@dataclass(frozen=True)
class CellBlock:
    """
    A block of elements sharing the same type.

    Per 02a §2.2: elements are stored per-type with connectivity arrays.

    Fields:
        element_type: The canonical element type.
        connectivity: Int32 array of shape (n_elements, nodes_per_element).
                      Node indices are 0-based.
        count:        Number of elements in this block.
    """
    element_type: ElementType
    connectivity: NDArray[np.int32]
    count: int


@dataclass(frozen=True)
class UnitSystem:
    """
    Unit system metadata from the source file.

    Per 02a §2.7: if not specified, remains "unspecified" — never fabricated.
    """
    length: str = "unspecified"
    force: str = "unspecified"
    time: str = "unspecified"
    temperature: str = "unspecified"
    declared_system: str = "unspecified"


@dataclass(frozen=True)
class ModelMetadata:
    """
    Metadata extracted from the source file.

    Per 02a §2.1: solver info, units, coordinate system, format version.
    Missing fields use "Not specified" — never fabricated.
    """
    source_filename: str
    file_format: str
    format_version: str = "Not specified"
    solver_name: str = "Not specified"
    solver_version: str = "Not specified"
    title: str = "Not specified"
    unit_system: UnitSystem = field(default_factory=UnitSystem)
    coordinate_system: str = "Not specified"


# ---------------------------------------------------------------------------
# Parser output types
# ---------------------------------------------------------------------------

@dataclass(frozen=True)
class ParseResult:
    """
    Structured output from a successful (or partially successful) parse.

    This is the return type from vtk_parser.parse_vtk() on success.
    Downstream normalizer/validator consumes this directly.

    Fields:
        points:         Float64 array of node coordinates, shape (n_nodes, 3).
        cell_blocks:    List of CellBlock, one per element type found.
        result_fields:  List of ResultField extracted from the file.
        metadata:       ModelMetadata with whatever the source file declared.
        warnings:       Non-fatal issues encountered during parsing.
        parser_backend: Which parser succeeded: "meshio" or "vtk_fallback".
        node_count:     Number of nodes (len(points)).
        element_count:  Total elements across all cell blocks.
        field_count:    Number of result fields extracted.
        skipped_cell_types: List of cell type names/codes that were skipped.
    """
    points: NDArray[np.float64]
    cell_blocks: list[CellBlock]
    result_fields: list[ResultField]
    metadata: ModelMetadata
    warnings: list[str]
    parser_backend: str
    node_count: int
    element_count: int
    field_count: int
    skipped_cell_types: list[str] = field(default_factory=list)


@dataclass(frozen=True)
class ParseError:
    """
    Structured output from a failed parse.

    Both parser attempts have failed. The raw file is preserved.

    Fields:
        error_type:        Exception class name from the final failure.
        error_message:     Human-readable error message.
        traceback_meshio:  Full traceback from the meshio attempt (or None).
        traceback_vtk:     Full traceback from the VTK fallback attempt (or None).
        source_filename:   Original filename for audit logging.
        raw_file_preserved: Always True — raw file is never deleted on error.
    """
    error_type: str
    error_message: str
    traceback_meshio: Optional[str]
    traceback_vtk: Optional[str]
    source_filename: str
    error_code: str = "vtu_parse_failed"
    technical_message: Optional[str] = None
    raw_file_preserved: bool = True


# ---------------------------------------------------------------------------
# Normalized model types — canonical internal representation
# ---------------------------------------------------------------------------
# These types are the output of normalizer.py and the input to the validator
# and storage writer. They match the schema in 02a-system-architecture.md §2.

@dataclass(frozen=True)
class NodeTable:
    """
    Canonical node table per 02a §2.2.

    Fields:
        count:             Number of nodes.
        ids:               Original node IDs from source file (Int32).
        coordinates:       Flat Float64 array [x0, y0, z0, x1, y1, z1, ...], length = 3 * count.
        coordinate_system: Reference coordinate system (default: "global_cartesian").
        id_to_index:       O(1) lookup: original ID → 0-based internal index.
    """
    count: int
    ids: NDArray[np.int32]
    coordinates: NDArray[np.float64]
    coordinate_system: str
    id_to_index: dict[int, int]


@dataclass(frozen=True)
class ElementTable:
    """
    Canonical element table per 02a §2.3 using CSR-style connectivity.

    Fields:
        count:                Number of elements.
        ids:                  Original element IDs (Int32).
        types:                Element type enum codes (Uint8), one per element.
        connectivity_offsets: CSR offsets (Int32), length = count + 1.
                              Element i's nodes are connectivity[offsets[i]:offsets[i+1]].
        connectivity:         Flattened node *indices* (Int32) into NodeTable (not IDs).
        id_to_index:          O(1) lookup: original ID → 0-based internal index.
    """
    count: int
    ids: NDArray[np.int32]
    types: NDArray[np.uint8]
    connectivity_offsets: NDArray[np.int32]
    connectivity: NDArray[np.int32]
    id_to_index: dict[int, int]


@dataclass(frozen=True)
class Part:
    """
    Part per 02a §2.4.

    Fields:
        id:              Unique part identifier.
        name:            Display name.
        element_indices: Indices into ElementTable (not source IDs).
    """
    id: str
    name: str
    element_indices: NDArray[np.int32]


@dataclass(frozen=True)
class Instance:
    """
    Instance per 02a §2.4.

    MVP: identity transform (4×4 affine, 16 values, column-major).
    """
    id: str
    name: str
    part_id: str
    transform: NDArray[np.float64]  # 4×4 = 16 values, column-major


@dataclass(frozen=True)
class Assembly:
    """
    Assembly per 02a §2.4.

    ASSUMPTION A7: single assembly only in MVP.
    """
    name: str
    instance_ids: list[str]


@dataclass(frozen=True)
class NamedSet:
    """
    Named set per 02a §2.5.

    Fields:
        name:           Set name from source file.
        set_type:       "node" or "element".
        member_indices: 0-based indices into NodeTable or ElementTable.
        source:         Origin: "file_defined" or "user_created".
    """
    name: str
    set_type: str  # "node" or "element"
    member_indices: NDArray[np.int32]
    source: str = "file_defined"


@dataclass(frozen=True)
class NormalizedFieldProvenance:
    """
    Extended provenance per 02a §2.6 for normalized result fields.

    Includes coordinate_system and field-specific warnings.
    MVP: extrapolation_applied and averaging_applied are always False.
    """
    source_field_name: str
    source_location: FieldLocation
    extrapolation_applied: bool = False
    averaging_applied: bool = False
    averaging_method: Optional[str] = None
    coordinate_system: str = "global_cartesian"
    warnings: list[str] = field(default_factory=list)


@dataclass(frozen=True)
class NormalizedResultField:
    """
    Normalized result field per 02a §2.6.

    This is the canonical field representation after normalization.
    Location is re-validated against node/element counts.
    """
    id: str
    name: str
    location: FieldLocation
    n_components: int
    provenance: NormalizedFieldProvenance
    timestep_data: list[TimestepData] = field(default_factory=list)


@dataclass(frozen=True)
class NormalizedModel:
    """
    Complete normalized model per 02a §2.1.

    This is the output of normalizer.normalize() and the input to the
    validator and storage writer.
    """
    metadata: ModelMetadata
    unit_system: UnitSystem
    nodes: NodeTable
    elements: ElementTable
    parts: list[Part]
    instances: list[Instance]
    assembly: Assembly
    node_sets: list[NamedSet]
    element_sets: list[NamedSet]
    result_fields: list[NormalizedResultField]
    warnings: list[str]
