"""
Exhaustive test suite for backend/app/parsing/detect.py

Covers:
  - Positive VTU XML detection
  - Positive VTK Legacy detection
  - Extension/signature mismatch rejection
  - Valid extension + invalid content rejection
  - Unknown binary/text content rejection
  - Executable/script rejection (PE, ELF, shebang, ZIP, PDF, Mach-O)
  - Edge cases: empty file, small file, truncated header, no extension,
    uppercase/lowercase extensions, multi-dot filenames
  - Determinism: repeated calls produce identical results
  - No parser work: module has no parser imports or side effects
  - Exodus/CGNS detection with documented blocker warnings
  - HDF5 ambiguity handling
  - API-layer mapping guidance verification

Self-check (final section):
  - Verify module aligns with documented pipeline position
  - Verify module aligns with MVP security requirements
  - Verify module does not perform parser/storage/normalization work
"""

from __future__ import annotations

import io
import sys
import types

import pytest

from app.parsing.detect import (
    HEADER_INSPECTION_SIZE,
    Confidence,
    DetectedFormat,
    DetectionResult,
    MVPParseSupport,
    detect_format,
)


# ===================================================================
# Test helpers — synthetic file content generators
# ===================================================================

def make_vtu_xml(extra_prefix: bytes = b"") -> bytes:
    """Generate minimal valid VTU XML content."""
    return extra_prefix + b'<?xml version="1.0"?>\n<VTKFile type="UnstructuredGrid" version="1.0">\n</VTKFile>\n'


def make_vtk_legacy() -> bytes:
    """Generate minimal valid VTK legacy content."""
    return b"# vtk DataFile Version 3.0\nTest\nASCII\nDATASET UNSTRUCTURED_GRID\n"


def make_hdf5() -> bytes:
    """Generate content with HDF5 magic bytes (used by Exodus II and CGNS)."""
    return b"\x89HDF\r\n\x1a\n" + b"\x00" * 100


def make_netcdf_classic() -> bytes:
    """Generate content with NetCDF classic v1 magic bytes."""
    return b"CDF\x01" + b"\x00" * 100


def make_pe_executable() -> bytes:
    """Generate content with PE/MZ executable signature."""
    return b"MZ" + b"\x90" * 100


def make_elf_executable() -> bytes:
    """Generate content with ELF signature."""
    return b"\x7fELF" + b"\x00" * 100


def make_shebang_script() -> bytes:
    """Generate content with shebang line."""
    return b"#!/usr/bin/env python3\nprint('hello')\n"


def make_zip() -> bytes:
    """Generate content with ZIP signature."""
    return b"PK\x03\x04" + b"\x00" * 100


def make_pdf() -> bytes:
    """Generate content with PDF signature."""
    return b"%PDF-1.4 " + b"\x00" * 100


def make_macho_universal() -> bytes:
    """Generate content with macOS universal binary signature."""
    return b"\xca\xfe\xba\xbe" + b"\x00" * 100


def make_random_binary() -> bytes:
    """Generate content that doesn't match any known signature."""
    return bytes(range(256)) * 4


def make_random_text() -> bytes:
    """Generate text content that doesn't match any FEA signature."""
    return b"This is just a plain text file with no FEA content.\nLine 2.\nLine 3.\n"


# ===================================================================
# 1. Positive tests: valid XML VTK/VTU detection
# ===================================================================

class TestVTKXMLDetection:
    """Positive tests for XML VTK-family file detection."""

    def test_valid_vtu_file(self):
        result = detect_format(make_vtu_xml(), filename="model.vtu")
        assert result.detected_format == DetectedFormat.VTU_XML
        assert result.declared_extension == ".vtu"
        assert result.signature_match is True
        assert result.confidence == Confidence.HIGH
        assert result.mvp_parse_support == MVPParseSupport.SUPPORTED
        assert result.rejection_reason is None
        assert result.next_parser_hint == "vtk_parser"
        assert result.inspected_bytes > 0

    def test_valid_vtp_file(self):
        result = detect_format(make_vtu_xml(), filename="surface.vtp")
        assert result.detected_format == DetectedFormat.VTU_XML
        assert result.declared_extension == ".vtp"
        assert result.confidence == Confidence.HIGH
        assert result.mvp_parse_support == MVPParseSupport.SUPPORTED

    def test_valid_pvtu_file(self):
        result = detect_format(make_vtu_xml(), filename="parallel.pvtu")
        assert result.detected_format == DetectedFormat.VTU_XML
        assert result.declared_extension == ".pvtu"
        assert result.confidence == Confidence.HIGH

    def test_vtu_with_xml_declaration_prefix(self):
        """VTKFile tag may be preceded by an XML declaration."""
        content = b'<?xml version="1.0" encoding="utf-8"?>\n<VTKFile type="UnstructuredGrid">\n'
        result = detect_format(content, filename="model.vtu")
        assert result.detected_format == DetectedFormat.VTU_XML
        assert result.signature_match is True

    def test_vtu_with_whitespace_before_tag(self):
        content = b"   \n\n  <VTKFile type=\"UnstructuredGrid\">\n"
        result = detect_format(content, filename="model.vtu")
        assert result.detected_format == DetectedFormat.VTU_XML

    def test_vtu_via_stream(self):
        """Accept file-like objects (BinaryIO), not just bytes."""
        stream = io.BytesIO(make_vtu_xml())
        result = detect_format(stream, filename="model.vtu")
        assert result.detected_format == DetectedFormat.VTU_XML
        assert result.signature_match is True

    @pytest.mark.parametrize("ext", [".vtu", ".vtp", ".vts", ".vtr", ".vti",
                                       ".pvtu", ".pvtp", ".pvts", ".pvtr", ".pvti"])
    def test_all_vtk_xml_extensions(self, ext: str):
        result = detect_format(make_vtu_xml(), filename=f"model{ext}")
        assert result.detected_format == DetectedFormat.VTU_XML
        assert result.confidence == Confidence.HIGH
        assert result.mvp_parse_support == MVPParseSupport.SUPPORTED


# ===================================================================
# 2. Positive tests: VTK Legacy detection
# ===================================================================

class TestVTKLegacyDetection:
    """VTK Legacy files are detectable but NOT MVP-parse-supported."""

    def test_valid_vtk_legacy(self):
        result = detect_format(make_vtk_legacy(), filename="model.vtk")
        assert result.detected_format == DetectedFormat.VTK_LEGACY
        assert result.declared_extension == ".vtk"
        assert result.signature_match is True
        assert result.confidence == Confidence.HIGH
        assert result.mvp_parse_support == MVPParseSupport.DETECTED_NOT_SUPPORTED
        assert result.next_parser_hint is None  # No MVP parser
        assert len(result.warnings) > 0
        assert "not supported for parsing" in result.warnings[0].lower()

    def test_vtk_legacy_with_leading_whitespace(self):
        content = b"  \n# vtk DataFile Version 2.0\nTest\nASCII\n"
        result = detect_format(content, filename="old.vtk")
        assert result.detected_format == DetectedFormat.VTK_LEGACY


# ===================================================================
# 3. Mismatch: wrong extension with valid VTK signature
# ===================================================================

class TestExtensionSignatureMismatch:
    """File extension does not match detected content signature."""

    def test_vtu_content_with_txt_extension(self):
        result = detect_format(make_vtu_xml(), filename="model.txt")
        assert result.detected_format == DetectedFormat.MISMATCH
        assert result.signature_match is True
        assert result.rejection_reason is not None
        assert "does not match content" in result.rejection_reason

    def test_vtu_content_with_csv_extension(self):
        result = detect_format(make_vtu_xml(), filename="data.csv")
        assert result.detected_format == DetectedFormat.MISMATCH
        assert result.confidence == Confidence.NONE

    def test_vtu_content_with_stl_extension(self):
        result = detect_format(make_vtu_xml(), filename="mesh.stl")
        assert result.detected_format == DetectedFormat.MISMATCH

    def test_vtk_legacy_content_with_vtu_extension(self):
        """Legacy VTK signature + .vtu extension is a mismatch."""
        result = detect_format(make_vtk_legacy(), filename="model.vtu")
        # The XML signature check comes first and won't match legacy.
        # Legacy signature found, but .vtu is not in legacy's expected set.
        assert result.detected_format == DetectedFormat.MISMATCH
        assert result.signature_match is True

    def test_hdf5_content_with_vtu_extension(self):
        """HDF5 magic + .vtu extension is a mismatch."""
        result = detect_format(make_hdf5(), filename="model.vtu")
        assert result.detected_format == DetectedFormat.MISMATCH
        assert result.signature_match is True


# ===================================================================
# 4. Mismatch: valid extension with invalid content
# ===================================================================

class TestValidExtensionInvalidContent:
    """Extension claims FEA, but content does not match any known signature."""

    def test_vtu_extension_random_binary(self):
        result = detect_format(make_random_binary(), filename="model.vtu")
        assert result.detected_format == DetectedFormat.MISMATCH
        assert result.signature_match is False
        assert "does not match any known FEA file signature" in result.rejection_reason

    def test_vtk_extension_random_text(self):
        result = detect_format(make_random_text(), filename="model.vtk")
        assert result.detected_format == DetectedFormat.MISMATCH
        assert result.signature_match is False

    def test_exo_extension_random_binary(self):
        result = detect_format(make_random_binary(), filename="model.exo")
        assert result.detected_format == DetectedFormat.MISMATCH
        assert result.signature_match is False

    def test_cgns_extension_random_binary(self):
        result = detect_format(make_random_binary(), filename="results.cgns")
        assert result.detected_format == DetectedFormat.MISMATCH


# ===================================================================
# 5. Unknown content rejection (completely unrecognized)
# ===================================================================

class TestUnknownContentRejection:
    """Files with no recognized signature and no FEA extension."""

    def test_random_binary_no_fea_extension(self):
        result = detect_format(make_random_binary(), filename="data.bin")
        assert result.detected_format == DetectedFormat.UNSUPPORTED
        assert result.rejection_reason == "Unsupported file format."

    def test_plain_text_no_fea_extension(self):
        result = detect_format(make_random_text(), filename="readme.txt")
        assert result.detected_format == DetectedFormat.UNSUPPORTED

    def test_json_file(self):
        result = detect_format(b'{"key": "value"}', filename="config.json")
        assert result.detected_format == DetectedFormat.UNSUPPORTED

    def test_html_file(self):
        result = detect_format(b"<html><body>Hello</body></html>", filename="page.html")
        assert result.detected_format == DetectedFormat.UNSUPPORTED

    def test_no_filename_no_signature(self):
        result = detect_format(make_random_binary())
        assert result.detected_format == DetectedFormat.UNSUPPORTED


# ===================================================================
# 6. Executable/script rejection
# ===================================================================

class TestExecutableRejection:
    """Per 03b §6: reject executables, scripts, non-FEA files."""

    def test_pe_executable(self):
        result = detect_format(make_pe_executable(), filename="solver.exe")
        assert result.detected_format == DetectedFormat.REJECTED
        assert "PE/MZ" in result.rejection_reason

    def test_elf_executable(self):
        result = detect_format(make_elf_executable(), filename="solver")
        assert result.detected_format == DetectedFormat.REJECTED
        assert "ELF" in result.rejection_reason

    def test_shebang_script(self):
        result = detect_format(make_shebang_script(), filename="run.sh")
        assert result.detected_format == DetectedFormat.REJECTED
        assert "shebang" in result.rejection_reason.lower()

    def test_zip_archive(self):
        result = detect_format(make_zip(), filename="archive.zip")
        assert result.detected_format == DetectedFormat.REJECTED
        assert "ZIP" in result.rejection_reason

    def test_pdf_document(self):
        result = detect_format(make_pdf(), filename="report.pdf")
        assert result.detected_format == DetectedFormat.REJECTED
        assert "PDF" in result.rejection_reason

    def test_macho_binary(self):
        result = detect_format(make_macho_universal(), filename="solver")
        assert result.detected_format == DetectedFormat.REJECTED

    def test_exe_with_vtu_extension(self):
        """Executable signature takes priority even if extension says .vtu."""
        result = detect_format(make_pe_executable(), filename="trick.vtu")
        assert result.detected_format == DetectedFormat.REJECTED

    def test_script_with_vtk_extension(self):
        result = detect_format(make_shebang_script(), filename="trick.vtk")
        assert result.detected_format == DetectedFormat.REJECTED


# ===================================================================
# 7. Edge cases
# ===================================================================

class TestEdgeCases:
    """Empty, small, truncated, unusual filenames."""

    def test_empty_file(self):
        result = detect_format(b"", filename="model.vtu")
        assert result.detected_format == DetectedFormat.UNSUPPORTED
        assert result.rejection_reason == "File is empty (0 bytes)."
        assert result.inspected_bytes == 0

    def test_empty_stream(self):
        result = detect_format(io.BytesIO(b""), filename="model.vtu")
        assert result.detected_format == DetectedFormat.UNSUPPORTED

    def test_single_byte(self):
        result = detect_format(b"X", filename="model.vtu")
        assert result.detected_format == DetectedFormat.MISMATCH
        assert result.inspected_bytes == 1

    def test_three_bytes(self):
        result = detect_format(b"abc", filename="model.vtu")
        assert result.detected_format == DetectedFormat.MISMATCH

    def test_truncated_vtk_signature(self):
        """Partial VTKFile tag — not enough to match."""
        result = detect_format(b"<VTKFi", filename="model.vtu")
        assert result.detected_format == DetectedFormat.MISMATCH
        assert result.signature_match is False

    def test_uppercase_extension(self):
        result = detect_format(make_vtu_xml(), filename="MODEL.VTU")
        assert result.detected_format == DetectedFormat.VTU_XML
        assert result.declared_extension == ".vtu"

    def test_mixed_case_extension(self):
        result = detect_format(make_vtu_xml(), filename="Model.Vtu")
        assert result.detected_format == DetectedFormat.VTU_XML

    def test_multi_dot_filename(self):
        result = detect_format(make_vtu_xml(), filename="model.step1.frame0.vtu")
        assert result.detected_format == DetectedFormat.VTU_XML
        assert result.declared_extension == ".vtu"

    def test_no_extension_with_vtk_content(self):
        result = detect_format(make_vtu_xml(), filename="modeldata")
        assert result.detected_format == DetectedFormat.VTU_XML
        assert result.declared_extension is None
        assert result.confidence == Confidence.MEDIUM
        assert len(result.warnings) > 0

    def test_no_filename_at_all(self):
        result = detect_format(make_vtu_xml())
        assert result.detected_format == DetectedFormat.VTU_XML
        assert result.declared_extension is None
        assert result.confidence == Confidence.MEDIUM

    def test_filename_with_spaces(self):
        result = detect_format(make_vtu_xml(), filename="my model file.vtu")
        assert result.detected_format == DetectedFormat.VTU_XML

    def test_hidden_file_with_extension(self):
        result = detect_format(make_vtu_xml(), filename=".hidden.vtu")
        assert result.detected_format == DetectedFormat.VTU_XML

    def test_large_header_region(self):
        """Content larger than inspection window still works."""
        large_prefix = b"<!-- " + b"x" * 2000 + b" -->\n"
        # VTKFile tag is beyond 1024 bytes — should NOT be detected
        content = large_prefix + b"<VTKFile>\n"
        result = detect_format(content, filename="model.vtu")
        # VTKFile is past the inspection window, so signature won't match
        assert result.detected_format == DetectedFormat.MISMATCH
        assert result.signature_match is False


# ===================================================================
# 8. Determinism tests
# ===================================================================

class TestDeterminism:
    """Verify repeated calls produce identical results."""

    def test_same_input_same_output_vtu(self):
        content = make_vtu_xml()
        results = [detect_format(content, filename="model.vtu") for _ in range(10)]
        assert all(r == results[0] for r in results)

    def test_same_input_same_output_rejected(self):
        content = make_pe_executable()
        results = [detect_format(content, filename="bad.exe") for _ in range(10)]
        assert all(r == results[0] for r in results)

    def test_same_input_same_output_unsupported(self):
        content = make_random_binary()
        results = [detect_format(content, filename="data.bin") for _ in range(10)]
        assert all(r == results[0] for r in results)

    def test_result_is_frozen(self):
        """DetectionResult is a frozen dataclass — immutable."""
        result = detect_format(make_vtu_xml(), filename="model.vtu")
        with pytest.raises(AttributeError):
            result.detected_format = DetectedFormat.UNSUPPORTED  # type: ignore[misc]


# ===================================================================
# 9. No parser work happens inside detection
# ===================================================================

class TestNoParserSideEffects:
    """Verify detect.py does not import or invoke parser modules."""

    def test_no_meshio_import(self):
        """meshio should not be imported by detect.py."""
        import app.parsing.detect as detect_module
        # Check that meshio is not in the module's globals or imported names
        assert "meshio" not in dir(detect_module)
        assert "meshio" not in {
            name for name, obj in vars(detect_module).items()
            if isinstance(obj, types.ModuleType)
        }

    def test_no_vtk_import(self):
        """vtk Python bindings should not be imported by detect.py."""
        import app.parsing.detect as detect_module
        assert "vtk" not in {
            name for name, obj in vars(detect_module).items()
            if isinstance(obj, types.ModuleType)
        }

    def test_detect_only_returns_result(self):
        """detect_format returns DetectionResult and nothing else."""
        result = detect_format(make_vtu_xml(), filename="model.vtu")
        assert isinstance(result, DetectionResult)

    def test_stream_not_fully_consumed(self):
        """Only the first HEADER_INSPECTION_SIZE bytes are read from stream."""
        full_content = make_vtu_xml() + b"\x00" * 5000
        stream = io.BytesIO(full_content)
        detect_format(stream, filename="model.vtu")
        bytes_read = stream.tell()
        assert bytes_read <= HEADER_INSPECTION_SIZE


# ===================================================================
# 10. Exodus/CGNS detection with blocker warnings
# ===================================================================

class TestExodusAndCGNSDetection:
    """Formats detectable via signature but NOT MVP-parse-supported."""

    def test_exodus_hdf5_detection(self):
        result = detect_format(make_hdf5(), filename="results.exo")
        assert result.detected_format == DetectedFormat.EXODUS_II
        assert result.signature_match is True
        assert result.mvp_parse_support == MVPParseSupport.DETECTED_NOT_SUPPORTED
        assert result.next_parser_hint is None
        assert any("not supported for parsing" in w.lower() for w in result.warnings)

    def test_exodus_netcdf_detection(self):
        result = detect_format(make_netcdf_classic(), filename="results.exo")
        assert result.detected_format == DetectedFormat.EXODUS_II
        assert result.mvp_parse_support == MVPParseSupport.DETECTED_NOT_SUPPORTED

    def test_exodus_e_extension(self):
        result = detect_format(make_hdf5(), filename="output.e")
        assert result.detected_format == DetectedFormat.EXODUS_II

    def test_cgns_detection(self):
        result = detect_format(make_hdf5(), filename="flow.cgns")
        assert result.detected_format == DetectedFormat.CGNS
        assert result.mvp_parse_support == MVPParseSupport.DETECTED_NOT_SUPPORTED
        assert result.next_parser_hint is None
        assert any("not supported for parsing" in w.lower() for w in result.warnings)

    def test_hdf5_with_unknown_extension(self):
        """HDF5 magic + non-FEA extension → ambiguous, cannot determine type."""
        result = detect_format(make_hdf5(), filename="data.h5")
        assert result.detected_format == DetectedFormat.MISMATCH
        assert "Cannot determine file type" in result.rejection_reason

    def test_hdf5_no_extension(self):
        """HDF5 magic + no extension → default to Exodus, medium confidence."""
        result = detect_format(make_hdf5(), filename="results")
        assert result.detected_format == DetectedFormat.EXODUS_II
        assert result.confidence == Confidence.MEDIUM


# ===================================================================
# 11. Output contract verification
# ===================================================================

class TestOutputContract:
    """Verify the output structure matches the documented contract."""

    def test_all_fields_present_on_success(self):
        result = detect_format(make_vtu_xml(), filename="model.vtu")
        assert hasattr(result, "detected_format")
        assert hasattr(result, "declared_extension")
        assert hasattr(result, "signature_match")
        assert hasattr(result, "confidence")
        assert hasattr(result, "mvp_parse_support")
        assert hasattr(result, "rejection_reason")
        assert hasattr(result, "warnings")
        assert hasattr(result, "next_parser_hint")
        assert hasattr(result, "inspected_bytes")

    def test_detected_format_is_enum(self):
        result = detect_format(make_vtu_xml(), filename="model.vtu")
        assert isinstance(result.detected_format, DetectedFormat)

    def test_confidence_is_enum(self):
        result = detect_format(make_vtu_xml(), filename="model.vtu")
        assert isinstance(result.confidence, Confidence)

    def test_mvp_support_is_enum(self):
        result = detect_format(make_vtu_xml(), filename="model.vtu")
        assert isinstance(result.mvp_parse_support, MVPParseSupport)

    def test_warnings_is_list(self):
        result = detect_format(make_vtu_xml(), filename="model.vtu")
        assert isinstance(result.warnings, list)

    def test_api_mapping_mismatch_is_422(self):
        """MISMATCH results should map to HTTP 422."""
        result = detect_format(make_vtu_xml(), filename="model.txt")
        assert result.detected_format == DetectedFormat.MISMATCH
        # Documented: HTTP 422 "File extension does not match content."
        assert result.rejection_reason is not None

    def test_api_mapping_unsupported_is_415(self):
        """UNSUPPORTED results should map to HTTP 415."""
        result = detect_format(make_random_binary(), filename="data.bin")
        assert result.detected_format == DetectedFormat.UNSUPPORTED
        # Documented: HTTP 415 "Unsupported file format."
        assert result.rejection_reason is not None

    def test_api_mapping_rejected_is_422(self):
        """REJECTED results should map to HTTP 422."""
        result = detect_format(make_pe_executable(), filename="solver.exe")
        assert result.detected_format == DetectedFormat.REJECTED
        assert result.rejection_reason is not None

    def test_supported_format_has_parser_hint(self):
        result = detect_format(make_vtu_xml(), filename="model.vtu")
        assert result.next_parser_hint is not None
        assert result.next_parser_hint == "vtk_parser"

    def test_unsupported_format_no_parser_hint(self):
        result = detect_format(make_random_binary(), filename="data.bin")
        assert result.next_parser_hint is None

    def test_blocked_format_no_parser_hint(self):
        """Detected-but-not-MVP-supported formats must NOT have a parser hint."""
        result = detect_format(make_hdf5(), filename="model.exo")
        assert result.next_parser_hint is None


# ===================================================================
# 12. Internal error handling
# ===================================================================

class TestInternalErrors:
    """Verify graceful handling of internal failures."""

    def test_detect_format_never_raises(self):
        """Even with bizarre input, detect_format returns a result, not an exception."""
        # Pass an object that isn't bytes or BinaryIO — triggers internal error handling
        result = detect_format(12345, filename="model.vtu")  # type: ignore[arg-type]
        assert result.detected_format == DetectedFormat.DETECTION_ERROR
        assert result.rejection_reason is not None
        assert "Internal detection error" in result.rejection_reason


# ===================================================================
# 13. Self-check: alignment with documented pipeline and requirements
# ===================================================================

class TestDocumentAlignment:
    """
    Verify the module's behavior satisfies documented requirements.

    Sources:
      - 02a §5.1: "File extension + magic-byte validation"
      - 02a §5.1: "For VTK: check XML header `<VTKFile>`"
      - 02a §5.1: "Reject if mismatch between extension and content"
      - 03b §6: "MIME-type + magic-byte check. Reject executables, scripts, non-FEA files."
      - 03b §7.1: "Unsupported file format" → HTTP 415
      - 03b §7.1: "File extension does not match content" → HTTP 422
    """

    def test_pipeline_position_no_parser_import(self):
        """Detection module sits before parser in pipeline; must not invoke parsing."""
        import app.parsing.detect as m
        source = open(m.__file__, "r").read()
        assert "meshio" not in source, "detect.py must not reference meshio"
        assert "import vtk" not in source, "detect.py must not import vtk"
        assert "normalizer" not in source, "detect.py must not reference normalizer"
        assert "surface_extract" not in source, "detect.py must not reference surface extraction"

    def test_extension_alone_never_sufficient(self):
        """
        02a §5.1: Extension alone is not trusted.
        A .vtu extension with non-VTK content must be rejected.
        """
        result = detect_format(b"Not a VTK file at all", filename="model.vtu")
        assert result.detected_format != DetectedFormat.VTU_XML

    def test_signature_alone_triggers_medium_confidence(self):
        """Without extension, signature is accepted but at reduced confidence."""
        result = detect_format(make_vtu_xml())
        assert result.confidence == Confidence.MEDIUM

    def test_mismatch_and_unsupported_are_distinct(self):
        """
        03b §7.1: Mismatch and unsupported are different error categories.
        They must not be conflated.
        """
        mismatch = detect_format(make_vtu_xml(), filename="model.txt")
        unsupported = detect_format(make_random_binary(), filename="data.bin")
        assert mismatch.detected_format == DetectedFormat.MISMATCH
        assert unsupported.detected_format == DetectedFormat.UNSUPPORTED
        assert mismatch.detected_format != unsupported.detected_format

    def test_executable_rejection_precedes_signature_check(self):
        """
        03b §6: Executables must be rejected even if they happen to contain
        FEA-like byte sequences later.
        """
        # PE header followed by VTKFile bytes
        tricky = b"MZ" + b"\x00" * 50 + b"<VTKFile>"
        result = detect_format(tricky, filename="sneaky.vtu")
        assert result.detected_format == DetectedFormat.REJECTED

    def test_detection_vs_parse_support_separation(self):
        """
        Detection capability and parse support are documented as distinct concepts.
        Exodus is detectable but not MVP-parseable.
        """
        result = detect_format(make_hdf5(), filename="model.exo")
        assert result.detected_format == DetectedFormat.EXODUS_II
        assert result.mvp_parse_support == MVPParseSupport.DETECTED_NOT_SUPPORTED
