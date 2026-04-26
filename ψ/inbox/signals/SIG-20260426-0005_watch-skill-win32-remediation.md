---
signal_id: SIG-20260426-0005
source_oracle: Arun Creagy
timestamp: 2026-04-26 14:35
priority: high
friction_score: 0.7
tags:
  - skill-request
  - bug
  - win32-compatibility
status:
  - active
---

# Oracle Signal: Watch Skill Win32 Remediation

## 📡 The Raw Signal
The `watch` skill is fragile in Win32 environments due to URI-style path resolution (e.g., `/C:/...`) and lack of dependency validation (missing `yt-dlp` or DLL mismatches). Path resolution via `new URL().pathname` fails on Windows Bun runtime.

## 🧬 Context & Ancestors
- `../Arun_Creagy/ψ/outbox/shipment_watch-skill-remediation-archon.md`
- `../Arun_Creagy/ψ/inbox/issue/2026-04-20_watch-skill-win32-failure.md`
- Ancestor: `opensource-nat-brain-oracle` (Transcribe patterns).

## 🧪 Expected Outcome
1. **Standardized Paths**: Fleet-wide migration to `fileURLToPath` for script-to-script calls.
2. **Diagnostic Pre-flight**: Automated check for `yt-dlp` and clear platform-specific remediation prompts.
3. **Canonical Integration**: Changes integrated into the main `watch` skill repository to prevent regression.

---
> "Formless signals are the energy of the fleet; Archon provides the Form." 🟦
