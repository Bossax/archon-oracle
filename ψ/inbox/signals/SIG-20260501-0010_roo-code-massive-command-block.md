---
id: SIG-20260501-0010
title: Roo Code Massive Command Block Behavior
date: 2026-05-01
status: raw
type: tool_behavior
tags: [roo-code, powershell, command-block, dcce-cri]
source: ψ/inbox/issue/2026-05-01-roo-code-massive-command-block-behavior-for-file-operation.md
---

## Summary
Detected behavior where Roo Code generates massive PowerShell command blocks for directory scaffolding and ORIENTATION.md creation in the DCCE/CRI workflow. While technically functional if escaped correctly, it represents a drift from surgical, incremental operations and risks shell buffer limits or escaping failures.

## Context
- **Workflow**: CRI Asset Dictionary v2
- **Command**: Multi-directory `New-Item` + `Set-Content` with heredoc (`@' ... '@`)
- **Impact**: Potential operational friction or execution failure in constrained environments.

## Investigation Required
- Does this behavior occur because of specific user instructions or agentic preference for speed?
- Does it violate the "Surgical Update" mandate?
- Reproduce the execution to verify if encoding or special characters in the ORIENTATION.md cause failures.
