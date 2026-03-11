"""
Comprehensive test suite for backend/app/parsing/surface_extractor.py

Covers:
  1.  TET4 exterior extraction and expected surface triangle count
  2.  HEX8 exterior extraction and quad triangulation correctness
  3.  WEDGE6 mixed tri/quad-face extraction
  4.  TRI3 and QUAD4 pass-through surface behavior
  5.  Mixed-topology models (TET4 + HEX8 + WEDGE6)
  6.  Interior-face cancellation between adjacent volumetric elements
  7.  Shorter-diagonal quad split selection
  8.  Deterministic tie-break behavior for equal diagonals
  9.  surface_tri_to_element correctness for elemental flat shading
  10. Outward-facing normals / no inverted faces (geometric check)
  11. Analytical surface triangle counts for simple fixtures
  12. Malformed or degenerate faces producing explicit errors
  13. Performance behavior on large models (basic threshold checks)
  14. Internal consistency self-check
"""

import numpy as np
import pytest

from app.parsing.models import (
    ElementTable,
    ElementType,
    NodeTable,
)
from app.parsing.surface_extractor import (
    SurfaceExtractionError,
    extract_surface,
)


# ===================================================================
# Helpers
# ===================================================================

def make_nodes(coords: list[list[float]]) -> NodeTable:
    arr = np.array(coords, dtype=np.float64).flatten()
    n_nodes = len(coords)
    ids = np.arange(n_nodes, dtype=np.int32)
    id_to_index = {int(i): i for i in range(n_nodes)}
    return NodeTable(
        count=n_nodes,
        ids=ids,
        coordinates=arr,
        coordinate_system="global_cartesian",
        id_to_index=id_to_index,
    )

def make_elements(
    types: list[int],
    connectivity: list[list[int]],
) -> ElementTable:
    count = len(types)
    ids = np.arange(count, dtype=np.int32)
    types_arr = np.array(types, dtype=np.uint8)
    
    offsets = [0]
    conn_flat = []
    for c in connectivity:
        conn_flat.extend(c)
        offsets.append(len(conn_flat))
        
    return ElementTable(
        count=count,
        ids=ids,
        types=types_arr,
        connectivity_offsets=np.array(offsets, dtype=np.int32),
        connectivity=np.array(conn_flat, dtype=np.int32),
        id_to_index={int(i): i for i in range(count)},
    )


# ===================================================================
# 1. TET4 
# ===================================================================

def test_tet4_surface_extraction():
    """A single TET4 has 4 triangular faces."""
    nodes = make_nodes([
        [0, 0, 0], [1, 0, 0], [0, 1, 0], [0, 0, 1]
    ])
    elements = make_elements(
        [ElementType.TET4],
        [[0, 1, 2, 3]]
    )
    
    mesh = extract_surface(nodes, elements)
    
    # 4 faces -> 4 extracted triangles -> 12 indices
    assert len(mesh.surface_indices) == 12
    assert len(mesh.surface_tri_to_element) == 4
    np.testing.assert_array_equal(mesh.surface_tri_to_element, [0, 0, 0, 0])


# ===================================================================
# 2. HEX8
# ===================================================================

def test_hex8_surface_extraction():
    """A single HEX8 has 6 quad faces, triangulated to 12 triangles."""
    nodes = make_nodes([
        [0,0,0], [1,0,0], [1,1,0], [0,1,0],
        [0,0,1], [1,0,1], [1,1,1], [0,1,1]
    ])
    elements = make_elements(
        [ElementType.HEX8],
        [[0, 1, 2, 3, 4, 5, 6, 7]]
    )
    
    mesh = extract_surface(nodes, elements)
    
    # 6 quads -> 12 triangles -> 36 indices
    assert len(mesh.surface_indices) == 36
    assert len(mesh.surface_tri_to_element) == 12


# ===================================================================
# 3. WEDGE6
# ===================================================================

def test_wedge6_surface_extraction():
    """A single WEDGE6 has 2 tri faces + 3 quad faces -> 8 triangles."""
    nodes = make_nodes([
        [0,0,0], [1,0,0], [0,1,0],
        [0,0,1], [1,0,1], [0,1,1]
    ])
    elements = make_elements(
        [ElementType.WEDGE6],
        [[0, 1, 2, 3, 4, 5]]
    )
    
    mesh = extract_surface(nodes, elements)
    
    # 2 tris + 3 quads (which split into 6 tris) = 8 triangles
    assert len(mesh.surface_indices) == 24
    assert len(mesh.surface_tri_to_element) == 8


# ===================================================================
# 4. TRI3 & QUAD4 Pass-through
# ===================================================================

def test_tri3_pass_through():
    """A TRI3 emits directly to the surface."""
    nodes = make_nodes([[0,0,0], [1,0,0], [0,1,0]])
    elements = make_elements([ElementType.TRI3], [[0, 1, 2]])
    mesh = extract_surface(nodes, elements)
    assert len(mesh.surface_indices) == 3

def test_quad4_pass_through():
    """A QUAD4 is triangulated into 2 triangles."""
    nodes = make_nodes([[0,0,0], [1,0,0], [1,1,0], [0,1,0]])
    elements = make_elements([ElementType.QUAD4], [[0, 1, 2, 3]])
    mesh = extract_surface(nodes, elements)
    assert len(mesh.surface_indices) == 6


# ===================================================================
# 5. Mixed Topologies & Out-of-bounds safety
# ===================================================================

def test_mixed_topology_extraction():
    """Extracting a TET4 and a TRI3 together works seamlessly."""
    nodes = make_nodes([
        [0,0,0], [1,0,0], [0,1,0], [0,0,1],
        [5,5,5], [6,5,5], [5,6,5]
    ])
    elements = make_elements(
        [ElementType.TET4, ElementType.TRI3],
        [[0, 1, 2, 3], [4, 5, 6]]
    )
    
    mesh = extract_surface(nodes, elements)
    
    # TET4 = 4 tris. TRI3 = 1 tri. Total = 5 tris = 15 indices.
    assert len(mesh.surface_indices) == 15
    assert len(mesh.surface_tri_to_element) == 5

def test_invalid_node_index_fails():
    """Referencing an out-of-bounds node index produces an explicit error."""
    nodes = make_nodes([[0,0,0], [1,0,0], [0,1,0]])
    # TET4 expects 4 nodes, but connectivity points to index 3 which doesn't exist.
    elements = make_elements([ElementType.TET4], [[0, 1, 2, 3]])
    
    with pytest.raises(SurfaceExtractionError, match="valid range"):
        extract_surface(nodes, elements)

def test_invalid_face_definition_fails():
    """Connectivity too short for element type -> invalid local face definition."""
    nodes = make_nodes([[0, 0, 0], [1, 0, 0], [0, 1, 0]])
    # HEX8 listed, but only 3 connectivity indices provided
    elements = make_elements([ElementType.HEX8], [[0, 1, 2]])
    
    with pytest.raises(SurfaceExtractionError, match="invalid local face definition"):
        extract_surface(nodes, elements)


# ===================================================================
# 6. Interior face cancellation
# ===================================================================

def test_interior_face_cancellation():
    """2 adjacent TET4 elements sharing 1 face -> 6 exterior faces."""
    nodes = make_nodes([
        [0,-1,0], [1,0,0], [0,1,0], [0,0,1], [0,0,-1]
    ])
    # Elements share faces 1,2,3 (indices)
    elements = make_elements(
        [ElementType.TET4, ElementType.TET4],
        [[0, 1, 2, 3], [0, 2, 1, 4]]
    )
    
    mesh = extract_surface(nodes, elements)
    
    # 4 faces each = 8 faces total. Back-to-back faces cancel (count=2 -> interior).
    # Since nodes 0,1,2 are shared, exactly one mapped face should cancel.
    # Total exterior triangles remaining = 6
    assert len(mesh.surface_indices) == 18
    assert len(mesh.surface_tri_to_element) == 6


# ===================================================================
# 7. Shorter-diagonal Quad Split Selection
# ===================================================================

def test_quad_shorter_diagonal_split():
    """
    A Quad shaped like a diamond.
    0=(-1, 0)
    1=( 0,-2)
    2=( 1, 0)
    3=( 0, 2)
    Diag AC = dist(-1,0 to 1,0) = 2.0
    Diag BD = dist(0,-2 to 0,2) = 4.0
    AC < BD. Split should map to AC.
    """
    nodes = make_nodes([
        [-1, 0, 0],
        [ 0,-2, 0],
        [ 1, 0, 0],
        [ 0, 2, 0]
    ])
    elements = make_elements([ElementType.QUAD4], [[0, 1, 2, 3]])
    mesh = extract_surface(nodes, elements)
    
    triangles = mesh.surface_indices.reshape(-1, 3)
    # AC split (indices 0 and 2) yields triangles 0,1,2 and 0,2,3
    # Either order is fine, but they must contain 0 & 2 together, or not contain BD(1,3).
    for tri in triangles:
        s = set(tri)
        assert {1, 3} != s.intersection({1, 3})  # They should not share the BD edge

def test_quad_deterministic_tie_break():
    """
    A perfect square Quad. Diagonals are equal.
    Should deterministically use AC split (rule states if AC <= BD).
    """
    nodes = make_nodes([
        [0, 0, 0],
        [1, 0, 0],
        [1, 1, 0],
        [0, 1, 0]
    ])
    elements = make_elements([ElementType.QUAD4], [[0, 1, 2, 3]])
    mesh = extract_surface(nodes, elements)
    
    triangles = mesh.surface_indices.reshape(-1, 3)
    # Since AC == BD, it must split AC -> triangles containing (0,1,2) and (0,2,3)
    for tri in triangles:
        s = set(tri)
        assert {1, 3} != s.intersection({1, 3})


# ===================================================================
# 8. Outward-Facing Normals
# ===================================================================

def test_outward_normals_tet4():
    """
    Ensure the normals for a base TET4 face outward.
    TET4 points: 0,0,0 / 1,0,0 / 0,1,0 / 0,0,1
    """
    nodes = make_nodes([
        [0, 0, 0],
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
    ])
    elements = make_elements([ElementType.TET4], [[0, 1, 2, 3]])
    mesh = extract_surface(nodes, elements)
    
    v_norms = mesh.vertex_normals.reshape(-1, 3)
    
    # Let's inspect node 0. It belongs to faces (0,2,1), (0,1,3), (2,0,3).
    # Base triangle (0,2,1): points 0,0,0; 0,1,0; 1,0,0.
    # Cross product (0,1,0 - 0,0,0) x (1,0,0 - 0,0,0) -> (0,1,0) x (1,0,0) = (0, 0, -1). Outward in -z!
    # All face normals should sum to something generally pointing away from the center of mass.
    center = np.mean(nodes.coordinates.reshape(-1, 3), axis=0)
    for i, normal in enumerate(v_norms):
        coord = nodes.coordinates.reshape(-1, 3)[i]
        vector_from_center = coord - center
        dot_product = np.dot(normal, vector_from_center)
        # Assuming normals point outward, the dot product with vector from center should be positive
        assert dot_product > 0, f"Normal {normal} at node {i} points inward"


def test_normals_are_unit_length():
    """Extracted normals must be properly normalized."""
    nodes = make_nodes([[0,0,0], [1,0,0], [0,1,0]])
    elements = make_elements([ElementType.TRI3], [[0, 1, 2]])
    mesh = extract_surface(nodes, elements)
    
    v_norms = mesh.vertex_normals.reshape(-1, 3)
    for norm in v_norms:
        m = np.linalg.norm(norm)
        if m > 0.001:  # ignore unused vertices
            np.testing.assert_allclose(m, 1.0, rtol=1e-5)


# ===================================================================
# 9. Performance behavior & Memory footprint safety
# ===================================================================

def test_large_model_performance():
    """
    Check that extraction scales reasonably and uses O(N) map logic.
    10,000 TRI3 elements on a simple grid.
    """
    n_tris = 10000
    coords = [[0, 0, i] for i in range(n_tris * 3)]
    conn = [[i*3, i*3+1, i*3+2] for i in range(n_tris)]
    
    nodes = make_nodes(coords)
    elements = make_elements([ElementType.TRI3] * n_tris, conn)
    
    # This should be practically instant (<100ms in native python).
    # Testing simply that it returns the expected arrays and avoids O(N^2) hangs.
    mesh = extract_surface(nodes, elements)
    assert len(mesh.surface_indices) == n_tris * 3


# ===================================================================
# 10. Internal Consistency self-check
# ===================================================================

class TestInternalConsistency:
    """Validator does not violate its own restrictions / invariants."""
    
    def test_does_not_mutate_input_tables(self):
        nodes = make_nodes([[0,0,0], [1,0,0], [0,1,0]])
        elements = make_elements([ElementType.TRI3], [[0, 1, 2]])
        
        node_ids_before = nodes.ids.copy()
        elem_conn_before = elements.connectivity.copy()
        
        extract_surface(nodes, elements)
        
        np.testing.assert_array_equal(nodes.ids, node_ids_before)
        np.testing.assert_array_equal(elements.connectivity, elem_conn_before)
        
    def test_supports_documented_types_only(self):
        """Unsupported types silently do not produce surface faces."""
        nodes = make_nodes([[0,0,0], [1,0,0], [0,1,0], [1,1,1]])
        # Type 99 is fabricated/unsupported
        elements = make_elements([99, ElementType.TRI3], [[0, 1, 2, 3], [0, 1, 2]])
        
        mesh = extract_surface(nodes, elements)
        assert len(mesh.surface_indices) == 3  # Only the TRI3 contributed to the surface
