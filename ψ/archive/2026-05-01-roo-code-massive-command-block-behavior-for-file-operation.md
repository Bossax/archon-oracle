```powershell
New-Item -ItemType Directory -Force -Path "ψ\incubate\DCCE\CRI\output\asset_indicator_dictionary\v2\notebooklm_raw","ψ\incubate\DCCE\CRI\output\asset_indicator_dictionary\v2\flattened","ψ\incubate\DCCE\CRI\output\asset_indicator_dictionary\v2\concepts","ψ\incubate\DCCE\CRI\output\asset_indicator_dictionary\v2\reflection","ψ\incubate\DCCE\CRI\output\asset_indicator_dictionary\v2\dictionary" | Out-Null; Set-Content -Encoding utf8 -Path "ψ\incubate\DCCE\CRI\output\asset_indicator_dictionary\v2\ORIENTATION.md" -Value @'
# CRI Asset Dictionary v2 — Working Area Orientation

Location: `ψ/incubate/DCCE/CRI/output/asset_indicator_dictionary/v2/`

This working area supports the **service-oriented CRI asset dictionary v2** workflow. It is intentionally scoped to: raw extractions, intermediate transforms, conceptual notes, reflection, and the final dictionary outputs.

## Subfolders

- `notebooklm_raw/`
  - Purpose: Store *verbatim* NotebookLM outputs (raw excerpts / answers) used as upstream evidence for v2.
  - Notes: No edits other than file naming / light metadata headers.

- `flattened/`
  - Purpose: Store normalized / flattened representations derived from raw sources (e.g., consistent tables, JSON/CSV exports, or line-oriented text suitable for diffing).

- `concepts/`
  - Purpose: Store concept definitions and mappings used by the service-oriented dictionary (e.g., "asset", "service", "indicator", "function", "failure mode").

- `reflection/`
  - Purpose: Store reasoning notes, design decisions, open questions, and audit trails specific to v2 assembly.

- `dictionary/`
  - Purpose: Store the assembled v2 asset-indicator dictionary outputs (drafts and finalized versions).

## Fixed NotebookLM parameters (do not change for this workflow)

- `notebook_id = urban-resilience-infrastructur`
- `session_id = cb4bff4b`

Canonical source-title record (resolved list used for title normalization):
- `ψ/incubate/DCCE/CRI/output/notebooklm_runs/2026-05-01_urban-resilience_title-resolution_raw.md`

## Guardrails for this working area

- Do not place synthesized narrative drafts here unless they directly support v2 dictionary assembly.
- Keep raw vs derived outputs separated (raw in `notebooklm_raw/`, derived in `flattened/` or downstream folders).
'@

```