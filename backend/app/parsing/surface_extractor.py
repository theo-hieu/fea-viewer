"""
FEA Viewer — Surface Extraction Module
======================================

Pipeline position: Parser → Normalizer → Validator → **Surface Extractor** → Storage

This module converts normalized volumetric and 2D elements into a render-ready
exterior triangle mesh. It operates entirely on the canonical NodeTable and ElementTable
without modifying the authoritative data.

Tasks:
  1. Enumerate canonical faces for TRI3, QUAD4, TET4, HEX8, WEDGE6.
  2. Identify exterior faces using sorted canonical-face hashing (occurrence == 1).
  3. Emit triangles corresponding to exterior faces.
  4. Triangulate quads using the shorter-diagonal rule.
  5. Emit `surface_indices` (Int32Array) mapped to 0-based node indices.
  6. Emit `surface_tri_to_element` (Int32Array) for rendering flat-shaded elemental results.
  7. Compute `vertex_normals` (Float32Array) using face-area-weighted averaging.

Invariants:
  - Do NOT modify or replace the volumetric data.
  - Fail loudly on invalid node indices.
  - Skip unsupported element topologies gracefully.
  - Keep outward-facing normals and proper winding.
"""

from __future__ import annotations

import logging
from dataclasses import dataclass
from typing import cast

import numpy as np

from app.parsing.models import ElementTable, ElementType, NodeTable

logger = logging.getLogger(__name__)


# ---------------------------------------------------------------------------
# canonical face definitions (outward winding per VTK convention)
# ---------------------------------------------------------------------------

# TET4: 4 nodes
# base uses 0,1,2. peak is 3. outward face from base is 0,2,1
# other faces are CCW when viewed from outside
_FACES_TET4 = (
    (0, 2, 1),
    (0, 1, 3),
    (1, 2, 3),
    (2, 0, 3),
)

# HEX8: 8 nodes
# bottom: 0,1,2,3 up to 4,5,6,7
_FACES_HEX8 = (
    (0, 3, 2, 1),  # Bottom (z-)
    (4, 5, 6, 7),  # Top (z+)
    (0, 1, 5, 4),  # Front (y-)
    (1, 2, 6, 5),  # Right (x+)
    (2, 3, 7, 6),  # Back (y+)
    (3, 0, 4, 7),  # Left (x-)
)

# WEDGE6: 6 nodes
# base 0,1,2 to top 3,4,5
_FACES_WEDGE6 = (
    (0, 2, 1),        # Bottom (z-)
    (3, 4, 5),        # Top (z+)
    (0, 1, 4, 3),     # Quad 1
    (1, 2, 5, 4),     # Quad 2
    (2, 0, 3, 5),     # Quad 3
)

# TRI3: 3 nodes
_FACES_TRI3 = (
    (0, 1, 2),
)

# QUAD4: 4 nodes
_FACES_QUAD4 = (
    (0, 1, 2, 3),
)


# ---------------------------------------------------------------------------
# Helper map
# ---------------------------------------------------------------------------
_FACE_MAP = {
    ElementType.TET4: _FACES_TET4,
    ElementType.HEX8: _FACES_HEX8,
    ElementType.WEDGE6: _FACES_WEDGE6,
    ElementType.TRI3: _FACES_TRI3,
    ElementType.QUAD4: _FACES_QUAD4,
}

_SUPPORTED_TYPES = set(_FACE_MAP.keys())


# ---------------------------------------------------------------------------
# Output Types
# ---------------------------------------------------------------------------

@dataclass(frozen=True)
class SurfaceMesh:
    """
    Render-ready surface extraction artifacts.

    Fields:
        surface_indices:        Flat Int32 array of triangle vertex indices (3 per tri).
        surface_tri_to_element: Flat Int32 array mapping every emitted triangle to
                                its source element index, for flat-shaded elemental results.
        vertex_normals:         Flat Float32 array of area-weighted averaged normals
                                structured as [nx0, ny0, nz0, nx1, ny1, nz1, ...].
    """
    surface_indices: np.ndarray
    surface_tri_to_element: np.ndarray
    vertex_normals: np.ndarray


class SurfaceExtractionError(Exception):
    """Raised when surface extraction encounters invalid topology/indices."""
    pass


# ---------------------------------------------------------------------------
# Public API
# ---------------------------------------------------------------------------

def extract_surface(nodes: NodeTable, elements: ElementTable) -> SurfaceMesh:
    """
    Extract exterior surface mesh from canonical volumetric & 2D element tables.

    Steps:
      1. Hashes canonical faces to find exterior (occurrence count == 1).
      2. Triangulates quadrilaterals by shorter diagonal.
      3. Outputs triangle indices and owning element map.
      4. Computes face-area-weighted vertex normals.

    Returns deterministic `SurfaceMesh`.
    """
    # Hash map for finding exterior surfaces
    # Key: sorted tuple of global node indices.
    # Value: None (if interior/duplicate), OR (original_indices_tuple, source_elem_idx).
    face_registry: dict[tuple[int, ...], tuple[tuple[int, ...], int] | None] = {}

    offsets = elements.connectivity_offsets
    conn = elements.connectivity
    types = elements.types
    node_count = nodes.count

    # 1. Enumerate faces and hash them
    for elem_idx in range(elements.count):
        elem_t = types[elem_idx]
        if elem_t not in _SUPPORTED_TYPES:
            continue  # Silently skip unsupported types

        start = offsets[elem_idx]
        end = offsets[elem_idx + 1]
        elem_nodes = conn[start:end]

        canonical_faces = _FACE_MAP[elem_t]
        for local_face in canonical_faces:
            # Check array bounds just in case (protect against malformed connectivity)
            if max(local_face) >= len(elem_nodes):
                raise SurfaceExtractionError(
                    f"Element {elem_idx} (type {elem_t}) has invalid local face definition."
                )

            global_face: tuple[int, ...] = tuple(int(elem_nodes[lf]) for lf in local_face)

            for g_node in global_face:
                if g_node < 0 or g_node >= node_count:
                    raise SurfaceExtractionError(
                        f"Face references invalid node index {g_node} "
                        f"(valid range 0 to {node_count - 1})."
                    )

            hash_key = tuple(sorted(global_face))
            if hash_key in face_registry:
                # Seen > 1 time -> it's interior
                face_registry[hash_key] = None
            else:
                # Seen 1 time -> potentially exterior
                face_registry[hash_key] = (global_face, elem_idx)

    # 2. Extract exterior faces, triangulate, and emit
    emitted_triangles: list[tuple[int, int, int]] = []
    emitted_tri_to_element: list[int] = []
    
    # Reshape coords for easier distance calculations: (N, 3)
    coords_3d = nodes.coordinates.reshape(-1, 3)

    for hash_key, val in face_registry.items():
        if val is None:
            continue  # Skip interior faces
        
        global_face, elem_idx = val
        num_v = len(global_face)

        if num_v == 3:
            # Triangle: emit directly
            emitted_triangles.append(cast(tuple[int, int, int], global_face))
            emitted_tri_to_element.append(elem_idx)
        elif num_v == 4:
            # Quad: Triangulate by shorter diagonal
            A, B, C, D = global_face
            
            pA = coords_3d[A]
            pB = coords_3d[B]
            pC = coords_3d[C]
            pD = coords_3d[D]

            # Diagonals
            diag_AC_sq = float(np.sum((pC - pA) ** 2))
            diag_BD_sq = float(np.sum((pD - pB) ** 2))

            # Tie-break deterministic rule: if equal, split AC. 
            if diag_AC_sq <= diag_BD_sq:
                # Split AC: triangles ABC and ACD
                emitted_triangles.append((A, B, C))
                emitted_tri_to_element.append(elem_idx)
                emitted_triangles.append((A, C, D))
                emitted_tri_to_element.append(elem_idx)
            else:
                # Split BD: triangles ABD and BCD
                emitted_triangles.append((A, B, D))
                emitted_tri_to_element.append(elem_idx)
                emitted_triangles.append((B, C, D))
                emitted_tri_to_element.append(elem_idx)
        else:
            raise SurfaceExtractionError(
                f"Unsupported face topology with {num_v} vertices on exterior."
            )

    # Convert emits to numpy arrays
    if not emitted_triangles:
        # Handle entirely degenerate or empty surface mesh safely
        surf_indices = np.array([], dtype=np.int32)
        surf_tri_to_elem = np.array([], dtype=np.int32)
        v_normals = np.zeros(node_count * 3, dtype=np.float32)
        return SurfaceMesh(
            surface_indices=surf_indices,
            surface_tri_to_element=surf_tri_to_elem,
            vertex_normals=v_normals,
        )
        
    surf_indices = np.array(emitted_triangles, dtype=np.int32).flatten()
    surf_tri_to_elem = np.array(emitted_tri_to_element, dtype=np.int32)

    # 3. Compute face-area-weighted vertex normals
    _v_normals = np.zeros((node_count, 3), dtype=np.float32)
    emitted_arr = np.array(emitted_triangles, dtype=np.int32)

    a_idx = emitted_arr[:, 0]
    b_idx = emitted_arr[:, 1]
    c_idx = emitted_arr[:, 2]

    pa = coords_3d[a_idx]
    pb = coords_3d[b_idx]
    pc = coords_3d[c_idx]

    # Face unnormalized normals = cross(AB, AC)
    # The magnitude of this vector is exactly 2 * area!
    # Area-weighted normal is exactly this cross product.
    face_normals = np.cross(pb - pa, pc - pa)

    # Accumulate into vertex normals
    np.add.at(_v_normals, a_idx, face_normals)
    np.add.at(_v_normals, b_idx, face_normals)
    np.add.at(_v_normals, c_idx, face_normals)

    # Normalize per-vertex
    norms = np.linalg.norm(_v_normals, axis=1, keepdims=True)
    
    # Avoid div-by-zero on unused or perfectly degenerate vertices
    norms[norms == 0] = 1.0
    _v_normals /= norms

    v_normals_flat = _v_normals.flatten()

    return SurfaceMesh(
        surface_indices=surf_indices,
        surface_tri_to_element=surf_tri_to_elem,
        vertex_normals=v_normals_flat,
    )
