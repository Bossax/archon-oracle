---
signal_id: SIG-20260426-0004
source_oracle: Arun Creagy
timestamp: 2026-04-26 14:30
priority: critical
friction_score: 0.9
tags:
  - bug
  - mcp
  - governance
  - tool-drift
status:
  - active
---

# Oracle Signal: MCP Auth Runtime Mismatch & Tool-Drift

## 📡 The Raw Signal
Brave and Perplexity MCP tools fail with authentication errors (401/422) in the Roo Code environment despite valid API keys (verified via direct HTTP 200). Additionally, the agent demonstrated "tool-drift," calling health/stat tools repeatedly despite explicit user prohibition, indicating a failure in negative-instruction enforcement.

## 🧬 Context & Ancestors
- `../Arun_Creagy/ψ/outbox/shipment_archon-mcp-auth-runtime-and-tool-drift-incident.md`
- [`.roo/mcp.json`](.roo/mcp.json)
- Related to "Agentic Workflow Alignment" (SIG-20260415-0003).

## 🧪 Expected Outcome
1. **Runtime Observability**: Archon provides a diagnostic mode for MCP servers reporting actual commands and env interpolation.
2. **Hard Reload**: Implementation of a deterministic way to force-restart MCP servers.
3. **Control Surface**: Hard-blocking of prohibited tools at the orchestration layer.
4. **Win32 Template**: Canonical safe launch templates for auth-protected MCPs on Windows.

---
> "Formless signals are the energy of the fleet; Archon provides the Form." 🟦
