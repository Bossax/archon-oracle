---
id: SIG-20260501-0011
title: PowerShell Variable Syntax Error in Roo Code
date: 2026-05-01
status: raw
type: syntax_error
tags: [roo-code, powershell, variable-scope, windows]
source: ψ/inbox/issue/2026-04-16-Issue-with-editing table.md
---

## Summary
Roo Code attempted to use PowerShell variables (`$path`, `$tom`) directly in what appeared to be a standard shell call, resulting in a `'path' is not recognized` error. The remediation required wrapping the entire command in `pwsh -NoProfile -Command "..."`.

## Context
- **Operation**: Editing markdown tables via regex replacement.
- **Root Cause**: Environment/Tooling mismatch where the agent assumes a persistent PowerShell session but the command is executed in a context that expects a standard Windows command or a fresh shell instance.

## Investigation Required
- Verify why Roo Code occasionally defaults to direct variable usage without the `pwsh` wrapper.
- Update `rrr-powershell-syntax` incubator project with this failure case.
