from __future__ import annotations

import argparse
import json
import pickle
import traceback
from dataclasses import dataclass
from pathlib import Path

from app.parsing.models import ParseError, ParseResult
from app.parsing.vtk_parser import parse_vtk


@dataclass(frozen=True)
class ParseSubprocessEnvelope:
    kind: str
    payload_path: str


def _write_payload(path: Path, value: ParseResult | ParseError) -> None:
    with path.open("wb") as handle:
        pickle.dump(value, handle, protocol=pickle.HIGHEST_PROTOCOL)


def _write_envelope(path: Path, envelope: ParseSubprocessEnvelope) -> None:
    path.write_text(
        json.dumps(
            {
                "kind": envelope.kind,
                "payload_path": envelope.payload_path,
            }
        ),
        encoding="utf-8",
    )


def main() -> int:
    parser = argparse.ArgumentParser(description="Run VTU parsing in an isolated subprocess.")
    parser.add_argument("--input", required=True, dest="input_path")
    parser.add_argument("--filename", required=True)
    parser.add_argument("--output", required=True, dest="output_path")
    parser.add_argument("--payload", required=True, dest="payload_path")
    args = parser.parse_args()

    output_path = Path(args.output_path)
    payload_path = Path(args.payload_path)

    try:
        result = parse_vtk(args.input_path, filename=args.filename)
    except BaseException as exc:
        error = ParseError(
            error_type=type(exc).__name__,
            error_code="parse_subprocess_exception",
            error_message=(
                f"Parsing crashed while reading '{args.filename}'. "
                "The file may be corrupted or unsupported."
            ),
            traceback_meshio=traceback.format_exc(),
            traceback_vtk=None,
            source_filename=args.filename,
            technical_message=str(exc),
            raw_file_preserved=True,
        )
        _write_payload(payload_path, error)
        _write_envelope(
            output_path,
            ParseSubprocessEnvelope(kind="error", payload_path=str(payload_path)),
        )
        return 0

    if isinstance(result, ParseError):
        _write_payload(payload_path, result)
        _write_envelope(
            output_path,
            ParseSubprocessEnvelope(kind="error", payload_path=str(payload_path)),
        )
        return 0

    _write_payload(payload_path, result)
    _write_envelope(
        output_path,
        ParseSubprocessEnvelope(kind="success", payload_path=str(payload_path)),
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
