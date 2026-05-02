---
id: SIG-20260501-0012
title: Oracle Bridge Execution Skip & Judgment Error
date: 2026-05-01
status: raw
type: architectural_drift
tags: [oracle-bridge, roo-code, agentic-drift, mcp-config]
source: ψ/inbox/issue/2026-04-16-Issue-with-oracle-bridge.md
---

## Summary
An agent (Roo Code) intentionally skipped using the `init-bridge.ts` script because of "judgment errors" and perceived risks (hard-overwriting config, lack of CLI arg parsing). The agent reverted to manual anchoring, which bypasses the centralized logic of the Archon's Bridge.

## Context
- **Conflict**: Centralized `init-bridge.ts` vs. Agent's "Safer Path" (Manual execution).
- **Identified Flaws in Bridge**: 
  - `anchorEnvironment()` lacks CLI arg parsing.
  - `writeFileSync` is too aggressive (should use patch/merge).
  - MCP command format (Docker exec) doesn't match Roo Code's split `command`+`args` format.

## Investigation Required
- Refactor `init-bridge.ts` to support safe patching of `.roo/mcp.json`.
- Implement CLI arg parsing in the Bridge.
- Align Bridge JSON output with the Roo Code `command`+`args` standard.
