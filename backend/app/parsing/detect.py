"""
FEA Viewer — Format Detection Module
=====================================

Pipeline position: Raw File → **Format Detector** → Format-Specific Parser → …

This module classifies uploaded files by inspecting both declared file extension
and actual byte-level content signatures. It enforces the documented rule that
neither extension nor MIME type is trusted alone — content inspection is mandatory.

Supported MVP parse path: VTK/VTU (XML-based) only.
Detectable but NOT parse-supported in MVP: Exodus II (.exo/.e), CGNS, VTK Legacy.
Those are flagged as detected-but-blocked.

Source authority:
  - 02a-system-architecture.md §5.1: extension + magic-byte validation
  - 03b-risks-acceptance.md §6: MIME-type + magic-byte check, reject executables/scripts
  - 04-mvp-implementation-plan.md §2.2 step 1: detection rules

BLOCKER (documented):
  01-product-specification.md §3.1 lists Exodus II and CGNS as "MVP first-class",
  but 03a-execution-plan.md §1 Phase 1 and 04-mvp-implementation-plan.md §1.1
  restrict MVP parsing to VTK/VTU only. This module detects Exodus/CGNS signatures
  for forward compatibility but marks them as `detected_not_mvp_supported`. Downstream
  code must NOT attempt to parse these until the scope conflict is resolved.
"""

from __future__ import annotations

import os
from dataclasses import dataclass, field
from enum import Enum
from typing import BinaryIO, Optional


# ---------------------------------------------------------------------------
# Enums — the output contract
# ---------------------------------------------------------------------------

class DetectedFormat(Enum):
    """
    Classification result from format detection.

    Values distinguish between *what signature was found* and *what MVP can parse*.
    API layer mapping:
      - VTU_XML, VTK_LEGACY → proceed to parser (VTK_LEGACY is detectable, MVP parse TBD)
      - MISMATCH            → HTTP 422 "File extension does not match content."
      - UNSUPPORTED         → HTTP 415 "Unsupported file format."
      - REJECTED            → HTTP 422 "File rejected: [reason]."
      - DETECTION_ERROR     → HTTP 500 internal error
    """
    VTU_XML = "vtu_xml"
    """XML-based VTK file (<VTKFile> header). MVP parse-supported."""

    VTK_LEGACY = "vtk_legacy"
    """Legacy ASCII/binary VTK file (# vtk DataFile header). Detectable, MVP parse TBD."""

    EXODUS_II = "exodus_ii"
    """Exodus II / NetCDF/HDF5 file. Detected but NOT MVP parse-supported. BLOCKER."""

    CGNS = "cgns"
    """CGNS / HDF5 file. Detected but NOT MVP parse-supported. BLOCKER."""

    MISMATCH = "mismatch"
    """Extension and content signature disagree."""

    UNSUPPORTED = "unsupported"
    """File format not recognized as any known FEA format."""

    REJECTED = "rejected"
    """File rejected for safety reasons (executable, script, etc.)."""

    DETECTION_ERROR = "detection_error"
    """Internal failure during detection. Should never happen in normal operation."""


class Confidence(Enum):
    """How confident the detector is in its classification."""
    HIGH = "high"
    """Signature + extension both match a known format."""

    MEDIUM = "medium"
    """Signature matches but extension is unusual or missing."""

    NONE = "none"
    """No positive classification possible."""


class MVPParseSupport(Enum):
    """Whether the detected format has a parser in the current MVP build."""
    SUPPORTED = "supported"
    """Parser exists and is active in MVP."""

    DETECTED_NOT_SUPPORTED = "detected_not_supported"
    """Signature recognized, but no MVP parser. Documented blocker."""

    NOT_APPLICABLE = "not_applicable"
    """Detection did not yield a parseable format (mismatch, unsupported, rejected)."""


# ---------------------------------------------------------------------------
# Result — the structured output
# ---------------------------------------------------------------------------

@dataclass(frozen=True)
class DetectionResult:
    """
    Structured result from format detection.

    This is the sole return type of `detect_format()`. Downstream code (API routes,
    parse task dispatcher) consumes this to decide whether to proceed, reject, or
    log a warning.

    Fields:
        detected_format:    The classification enum value.
        declared_extension: The file extension as extracted from the filename (lowercase,
                            including the dot), or None if no extension.
        signature_match:    True if a known FEA format signature was found in the
                            inspected bytes, regardless of extension agreement.
        confidence:         HIGH / MEDIUM / NONE.
        mvp_parse_support:  Whether this format has an active MVP parser.
        rejection_reason:   Human-readable reason for rejection, or None if accepted.
        warnings:           List of non-fatal warnings (e.g., "Jet colormap" style
                            advisories about detected-but-unsupported formats).
        next_parser_hint:   Suggested parser module name, or None if not parseable.
        inspected_bytes:    Number of bytes actually inspected for signature detection.
    """
    detected_format: DetectedFormat
    declared_extension: Optional[str]
    signature_match: bool
    confidence: Confidence
    mvp_parse_support: MVPParseSupport
    rejection_reason: Optional[str] = None
    warnings: list[str] = field(default_factory=list)
    next_parser_hint: Optional[str] = None
    inspected_bytes: int = 0


# ---------------------------------------------------------------------------
# Signature constants
# ---------------------------------------------------------------------------

# XML VTK family: look for "<VTKFile" in the first 1024 bytes.
# Per 02a §5.1: "For VTK: check XML header `<VTKFile>`".
_VTK_XML_SIGNATURE = b"<VTKFile"

# Legacy VTK: "# vtk DataFile Version" as the first line.
_VTK_LEGACY_SIGNATURE = b"# vtk DataFile Version"

# HDF5 magic bytes (used by both Exodus II and CGNS).
# HDF5 files start with \x89HDF\r\n\x1a\n.
_HDF5_MAGIC = b"\x89HDF\r\n\x1a\n"

# NetCDF classic magic: "CDF\x01" or "CDF\x02".
# Exodus II files may use classic NetCDF format.
_NETCDF_CLASSIC_MAGIC_V1 = b"CDF\x01"
_NETCDF_CLASSIC_MAGIC_V2 = b"CDF\x02"

# Executable/script signatures to reject (per 03b §6: "Reject executables, scripts").
_REJECTED_SIGNATURES: list[tuple[bytes, str]] = [
    (b"MZ", "Windows executable (PE/MZ)"),
    (b"\x7fELF", "Linux executable (ELF)"),
    (b"#!", "Script with shebang"),
    (b"PK\x03\x04", "ZIP archive (may contain executables)"),
    (b"%PDF", "PDF document"),
    (b"\xca\xfe\xba\xbe", "macOS universal binary"),
    (b"\xfe\xed\xfa\xce", "macOS Mach-O 32-bit"),
    (b"\xfe\xed\xfa\xcf", "macOS Mach-O 64-bit"),
    (b"\xcf\xfa\xed\xfe", "macOS Mach-O 64-bit (reversed)"),
    (b"<!DOCTYPE html", "HTML Document (XSS payload risk)"),
    (b"<!doctype html", "HTML Document (XSS payload risk)"),
    (b"<html", "HTML Document (XSS payload risk)"),
    (b"<script", "JavaScript block (XSS payload risk)"),
]

# Extensions recognized as VTK XML family (MVP parse-supported).
_VTK_XML_EXTENSIONS: frozenset[str] = frozenset({
    ".vtu",   # Unstructured grid (primary MVP target)
    ".vtp",   # PolyData
    ".vts",   # StructuredGrid
    ".vtr",   # RectilinearGrid
    ".vti",   # ImageData
    ".pvtu",  # Parallel unstructured grid
    ".pvtp",  # Parallel polydata
    ".pvts",  # Parallel structured grid
    ".pvtr",  # Parallel rectilinear grid
    ".pvti",  # Parallel image data
})

# Extensions recognized as legacy VTK.
_VTK_LEGACY_EXTENSIONS: frozenset[str] = frozenset({".vtk"})

# Extensions recognized as Exodus II.
_EXODUS_EXTENSIONS: frozenset[str] = frozenset({".exo", ".e", ".ex2"})

# Extensions recognized as CGNS.
_CGNS_EXTENSIONS: frozenset[str] = frozenset({".cgns"})

# All recognized FEA extensions (for mismatch detection).
_ALL_FEA_EXTENSIONS: frozenset[str] = (
    _VTK_XML_EXTENSIONS | _VTK_LEGACY_EXTENSIONS | _EXODUS_EXTENSIONS | _CGNS_EXTENSIONS
)

# Header inspection size (per spec: "inspect at least the first 1024 bytes").
HEADER_INSPECTION_SIZE: int = 1024


# ---------------------------------------------------------------------------
# Internal helpers
# ---------------------------------------------------------------------------

def _extract_extension(filename: Optional[str]) -> Optional[str]:
    """
    Extract the lowercase file extension from a filename.

    Handles filenames with multiple dots (e.g., "model.step1.vtu" → ".vtu").
    Returns None if no extension is present.
    """
    if not filename:
        return None
    _, ext = os.path.splitext(filename)
    if not ext:
        return None
    return ext.lower()


def _check_rejected_signatures(header: bytes) -> Optional[str]:
    """
    Check if the file header matches any rejected (dangerous) signature.

    Returns the rejection reason string if matched, None otherwise.
    """
    for signature, description in _REJECTED_SIGNATURES:
        if header[:len(signature)] == signature:
            return description
    return None


def _detect_signature(header: bytes) -> Optional[tuple[DetectedFormat, str]]:
    """
    Inspect header bytes for known FEA format signatures.

    Returns (DetectedFormat, parser_hint) if a known signature is found.
    Returns None if no known signature matches.

    Search order matters: check specific signatures before generic ones.
    XML VTK signature can appear anywhere in first 1024 bytes (it may follow
    an XML declaration like <?xml version="1.0"?>).
    """
    # 1. VTK XML: search for "<VTKFile" anywhere in the header region.
    #    This handles cases where the XML declaration precedes the root element.
    if _VTK_XML_SIGNATURE in header:
        return (DetectedFormat.VTU_XML, "vtk_parser")

    # 2. VTK Legacy: must start with "# vtk DataFile Version".
    if header.lstrip()[:len(_VTK_LEGACY_SIGNATURE)] == _VTK_LEGACY_SIGNATURE:
        return (DetectedFormat.VTK_LEGACY, "vtk_legacy_parser")

    # 3. HDF5 magic (Exodus II or CGNS — distinguished by extension downstream).
    if header[:len(_HDF5_MAGIC)] == _HDF5_MAGIC:
        # Both Exodus II and CGNS use HDF5. We cannot distinguish them by
        # magic bytes alone without deeper inspection. Return a generic HDF5
        # detection that will be refined by extension matching.
        return (DetectedFormat.EXODUS_II, "exodus_parser")  # default; refined below

    # 4. NetCDF classic magic (Exodus II).
    if header[:4] in (_NETCDF_CLASSIC_MAGIC_V1, _NETCDF_CLASSIC_MAGIC_V2):
        return (DetectedFormat.EXODUS_II, "exodus_parser")

    return None


# ---------------------------------------------------------------------------
# Public API
# ---------------------------------------------------------------------------

def detect_format(
    file_content: bytes | BinaryIO,
    filename: Optional[str] = None,
    declared_mime_type: Optional[str] = None,
) -> DetectionResult:
    """
    Classify an uploaded file for the FEA viewer parsing pipeline.

    This function inspects the first HEADER_INSPECTION_SIZE bytes of the file
    content and the declared filename extension to produce a deterministic
    classification. It does NOT trust the filename or MIME type alone.

    Parameters
    ----------
    file_content : bytes or BinaryIO
        Raw file content (bytes) or a seekable file-like object. If a stream,
        it is read up to HEADER_INSPECTION_SIZE bytes and the stream position
        is NOT restored (caller's responsibility).
    filename : str, optional
        Original filename as declared by the uploader. Used for extension
        extraction only. Not trusted for classification without signature match.
    declared_mime_type : str, optional
        MIME type as declared by the uploader or HTTP headers. Logged for
        audit but not used for classification decisions.

    Returns
    -------
    DetectionResult
        A frozen dataclass with all classification details. See class docstring
        for field descriptions and API-layer mapping guidance.

    Raises
    ------
    This function does not raise exceptions. All error conditions are captured
    in the returned DetectionResult with appropriate detected_format values.
    Internal failures produce DETECTION_ERROR with details in rejection_reason.
    """
    try:
        return _detect_format_impl(file_content, filename, declared_mime_type)
    except Exception as exc:
        return DetectionResult(
            detected_format=DetectedFormat.DETECTION_ERROR,
            declared_extension=_extract_extension(filename),
            signature_match=False,
            confidence=Confidence.NONE,
            mvp_parse_support=MVPParseSupport.NOT_APPLICABLE,
            rejection_reason=f"Internal detection error: {type(exc).__name__}: {exc}",
            warnings=[],
            next_parser_hint=None,
            inspected_bytes=0,
        )


def _detect_format_impl(
    file_content: bytes | BinaryIO,
    filename: Optional[str],
    declared_mime_type: Optional[str],
) -> DetectionResult:
    """Core detection logic, wrapped by detect_format for exception safety."""

    # --- Extract header bytes ---
    if isinstance(file_content, bytes):
        header = file_content[:HEADER_INSPECTION_SIZE]
        inspected = min(len(file_content), HEADER_INSPECTION_SIZE)
    else:
        header = file_content.read(HEADER_INSPECTION_SIZE)
        inspected = len(header)

    extension = _extract_extension(filename)
    warnings: list[str] = []

    # --- Reject empty files ---
    if inspected == 0:
        return DetectionResult(
            detected_format=DetectedFormat.UNSUPPORTED,
            declared_extension=extension,
            signature_match=False,
            confidence=Confidence.NONE,
            mvp_parse_support=MVPParseSupport.NOT_APPLICABLE,
            rejection_reason="File is empty (0 bytes).",
            warnings=[],
            next_parser_hint=None,
            inspected_bytes=0,
        )

    # --- Safety check: reject executables/scripts ---
    rejected_reason = _check_rejected_signatures(header)
    if rejected_reason is not None:
        return DetectionResult(
            detected_format=DetectedFormat.REJECTED,
            declared_extension=extension,
            signature_match=False,
            confidence=Confidence.HIGH,
            mvp_parse_support=MVPParseSupport.NOT_APPLICABLE,
            rejection_reason=f"File rejected: detected as {rejected_reason}.",
            warnings=[],
            next_parser_hint=None,
            inspected_bytes=inspected,
        )

    # --- Signature detection ---
    sig_result = _detect_signature(header)

    if sig_result is not None:
        detected_format, parser_hint = sig_result

        # Refine HDF5-based detection by extension (Exodus vs CGNS).
        if detected_format == DetectedFormat.EXODUS_II:
            if extension in _CGNS_EXTENSIONS:
                detected_format = DetectedFormat.CGNS
                parser_hint = "cgns_parser"
            elif extension not in _EXODUS_EXTENSIONS and extension is not None:
                # HDF5 signature + non-Exodus/CGNS extension: ambiguous.
                # Could be any HDF5 file. Don't guess.
                return DetectionResult(
                    detected_format=DetectedFormat.MISMATCH,
                    declared_extension=extension,
                    signature_match=True,
                    confidence=Confidence.NONE,
                    mvp_parse_support=MVPParseSupport.NOT_APPLICABLE,
                    rejection_reason=(
                        f"File has HDF5/NetCDF signature but extension '{extension}' "
                        f"is not a recognized FEA format. Cannot determine file type."
                    ),
                    warnings=[],
                    next_parser_hint=None,
                    inspected_bytes=inspected,
                )
            # else: extension is None with HDF5 → default to Exodus (medium confidence)

        # --- Extension vs signature agreement ---
        return _reconcile_extension_and_signature(
            detected_format, parser_hint, extension, inspected, warnings
        )

    # --- No signature match: check if extension claims to be FEA ---
    if extension in _ALL_FEA_EXTENSIONS:
        # Extension says FEA, but content doesn't match any known signature.
        return DetectionResult(
            detected_format=DetectedFormat.MISMATCH,
            declared_extension=extension,
            signature_match=False,
            confidence=Confidence.NONE,
            mvp_parse_support=MVPParseSupport.NOT_APPLICABLE,
            rejection_reason=(
                f"File extension '{extension}' suggests an FEA format, "
                f"but file content does not match any known FEA file signature."
            ),
            warnings=[],
            next_parser_hint=None,
            inspected_bytes=inspected,
        )

    # --- Completely unrecognized ---
    return DetectionResult(
        detected_format=DetectedFormat.UNSUPPORTED,
        declared_extension=extension,
        signature_match=False,
        confidence=Confidence.NONE,
        mvp_parse_support=MVPParseSupport.NOT_APPLICABLE,
        rejection_reason="Unsupported file format.",
        warnings=[],
        next_parser_hint=None,
        inspected_bytes=inspected,
    )


def _reconcile_extension_and_signature(
    detected_format: DetectedFormat,
    parser_hint: str,
    extension: Optional[str],
    inspected: int,
    warnings: list[str],
) -> DetectionResult:
    """
    Given a positive signature match, check whether the declared extension agrees.

    Extension/signature agreement rules:
    - VTU_XML signature + VTK XML extension → accepted
    - VTU_XML signature + non-VTK extension → MISMATCH
    - VTK_LEGACY signature + .vtk extension → accepted
    - VTK_LEGACY signature + non-.vtk extension → MISMATCH
    - EXODUS_II signature + Exodus extension → accepted (but not MVP-supported)
    - CGNS signature + .cgns extension → accepted (but not MVP-supported)
    - Any signature + no extension → accepted with MEDIUM confidence
    """

    # Determine which extension set this format expects.
    expected_extensions: frozenset[str]
    if detected_format == DetectedFormat.VTU_XML:
        expected_extensions = _VTK_XML_EXTENSIONS
    elif detected_format == DetectedFormat.VTK_LEGACY:
        expected_extensions = _VTK_LEGACY_EXTENSIONS
    elif detected_format == DetectedFormat.EXODUS_II:
        expected_extensions = _EXODUS_EXTENSIONS
    elif detected_format == DetectedFormat.CGNS:
        expected_extensions = _CGNS_EXTENSIONS
    else:
        # Should not reach here based on _detect_signature output.
        expected_extensions = frozenset()

    # No extension: accept with reduced confidence.
    if extension is None:
        warnings.append(
            f"No file extension provided. Detected format '{detected_format.value}' "
            f"from content signature only."
        )
        mvp_support = _mvp_support_for(detected_format)
        if mvp_support == MVPParseSupport.DETECTED_NOT_SUPPORTED:
            warnings.append(_blocker_warning(detected_format))
        return DetectionResult(
            detected_format=detected_format,
            declared_extension=None,
            signature_match=True,
            confidence=Confidence.MEDIUM,
            mvp_parse_support=mvp_support,
            rejection_reason=None,
            warnings=warnings,
            next_parser_hint=parser_hint if mvp_support == MVPParseSupport.SUPPORTED else None,
            inspected_bytes=inspected,
        )

    # Extension matches expected set: full agreement.
    if extension in expected_extensions:
        mvp_support = _mvp_support_for(detected_format)
        if mvp_support == MVPParseSupport.DETECTED_NOT_SUPPORTED:
            warnings.append(_blocker_warning(detected_format))
        return DetectionResult(
            detected_format=detected_format,
            declared_extension=extension,
            signature_match=True,
            confidence=Confidence.HIGH,
            mvp_parse_support=mvp_support,
            rejection_reason=None,
            warnings=warnings,
            next_parser_hint=parser_hint if mvp_support == MVPParseSupport.SUPPORTED else None,
            inspected_bytes=inspected,
        )

    # Extension does NOT match the detected signature: MISMATCH.
    return DetectionResult(
        detected_format=DetectedFormat.MISMATCH,
        declared_extension=extension,
        signature_match=True,
        confidence=Confidence.NONE,
        mvp_parse_support=MVPParseSupport.NOT_APPLICABLE,
        rejection_reason=(
            f"File extension '{extension}' does not match content. "
            f"Content signature indicates {detected_format.value}, "
            f"which expects extension(s): {sorted(expected_extensions)}."
        ),
        warnings=[],
        next_parser_hint=None,
        inspected_bytes=inspected,
    )


def _mvp_support_for(fmt: DetectedFormat) -> MVPParseSupport:
    """
    Determine MVP parse support status for a detected format.

    Per 04-mvp-implementation-plan.md §1.1: Only VTU_XML is MVP parse-supported.
    VTK_LEGACY, EXODUS_II, and CGNS are detectable but have no MVP parser.
    """
    if fmt == DetectedFormat.VTU_XML:
        return MVPParseSupport.SUPPORTED
    elif fmt in (DetectedFormat.VTK_LEGACY, DetectedFormat.EXODUS_II, DetectedFormat.CGNS):
        return MVPParseSupport.DETECTED_NOT_SUPPORTED
    else:
        return MVPParseSupport.NOT_APPLICABLE


def _blocker_warning(fmt: DetectedFormat) -> str:
    """Generate the documented blocker warning for non-MVP-supported formats."""
    format_names = {
        DetectedFormat.VTK_LEGACY: "VTK Legacy",
        DetectedFormat.EXODUS_II: "Exodus II",
        DetectedFormat.CGNS: "CGNS",
    }
    name = format_names.get(fmt, fmt.value)
    return (
        f"Format '{name}' was detected but is not supported for parsing in the "
        f"current MVP. This is a documented scope limitation. Parser support for "
        f"this format is planned for a future phase."
    )
