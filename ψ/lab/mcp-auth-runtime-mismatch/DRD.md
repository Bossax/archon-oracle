# DRD: MCP Runtime Observability & Governance
**Project**: MCP-AUTH-RUNTIME-MISMATCH
**Version**: 1.0.0
**Status**: Researching

## 1. Problem Statement
The Roo Code MCP host exhibits inconsistent environment variable propagation and tool-drift behavior on Win32. Specifically, auth-protected MCPs (Brave/Perplexity) fail despite valid system-level credentials, and the agent fails to adhere to negative tool constraints (e.g., "do not call get_health").

## 2. Technical Goals
1. **Runtime Probing**: Implement a diagnostic script (`mcp-probe.ts`) that can be used to verify environment inheritance within an MCP process.
2. **Deterministic Scaffolding**: Provide a Windows-safe `mcp.json` template that uses explicit environment injection wrappers.
3. **Governance Overlay**: Propose a "Quiet Mandate" or "Tool Filter" mechanism to enforce negative constraints at the instruction level.

## 3. Implementation Plan

### Phase 1: Observability (The Probe)
- Create `ψ/lab/mcp-auth-runtime-mismatch/scripts/probe.ts`.
- This script will be launched as an MCP server itself to report its internal environment block.

### Phase 2: Remediation (The Template)
- Create `ψ/lab/mcp-auth-runtime-mismatch/assets/win32-mcp-template.json`.
- Document the `cmd /c set ... && npx ...` pattern for Windows.

### Phase 3: Governance (The Filter)
- Update `ψ/lab/oracle-bridge/assets/mandates/05-safety.md` to include explicit loop detection and negative-instruction enforcement patterns.

## 4. Evidence of Issue
- SIG-20260426-0004
- Arun Creagy Shipment: `shipment_archon-mcp-auth-runtime-and-tool-drift-incident.md`
