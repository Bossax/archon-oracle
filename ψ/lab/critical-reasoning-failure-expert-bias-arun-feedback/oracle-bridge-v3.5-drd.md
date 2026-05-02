# Design Requirement Document (DRD): Oracle Bridge v3.5 (Reasoning Safeguard Edition)

**Project**: `oracle-bridge-v3.5-remediation`
**Signal Reference**: `SIG-20260501-0012`, `SIG-20260501-0013`
**Status**: Draft
**Date**: 2026-05-01

## 1. Executive Summary
Oracle Bridge v3.5 is a critical remediation update designed to address **Expert Bias**, **Instruction Drift**, and **Reasoning Failures** observed in the fleet. It shifts the Bridge from a passive "Scaffolding Engine" to an active **Context Orchestrator** that enforces the **Native-First Protocol** and manages the agent's **Cognitive Load**.

## 2. Problem Statement
- **Instruction Bloat**: Current mandates (>130 lines) push agents into the "Dumb Zone," causing them to ignore core guardrails.
- **Expert Bias**: Agents favor over-engineered synthesis over simple, native environment mechanisms.
- **Lack of Anchoring**: No mandatory requirement for empirical local verification before proposing solutions.

## 3. Technical Requirements

### A. The "60-200" Context Standard
- **Core Router Restriction**: The root `GEMINI.md` and `CLAUDE.md` must be pruned to **under 60 lines**.
- **Instruction Budgeting**: The Bridge must prioritize and inject only the most relevant mandates based on the project stage.
- **Pruning Logic**: Every line in a mandate must pass the "Mistake Test": *Would removing this cause a failure?*

### B. The Native-First Protocol
- **Principle #6**: Codify "Sovereignty of the Native" into `00-principles.md`.
- **Workflow #4**: Mandate the **Empirical Anchoring Ritual**. Agents MUST perform a local `run_shell_command` probe to verify environment facts before using `google_web_search`.
- **Tool Discipline**: Explicitly separate `perplexity_ask` (for environment facts) from `google_web_search` (for documentation).

### C. Intelligent Scaffolding (Bridge Logic v3.5)
- **Patch-Not-Overwrite**: Replace `writeFileSync` for config files (`mcp.json`, `settings.json`) with a **Smart Merge** logic that preserves user-tuned settings.
- **Agent-Aware Formatting**:
  - **Roo Code**: Use split `command` + `args` for MCP entries to ensure Windows runtime compatibility.
  - **Gemini**: Use `@import` structure but limit active imports to manage the context window.
- **CLI Arg Parsing**: Implement robust parsing in `init-bridge.ts` to support `--oracle-cwd`, `--identity`, and `--stage`.

## 4. Modified Artifacts

| Artifact | Change Description |
| :--- | :--- |
| `00-principles.md` | Add Principle #6: Sovereignty of the Native. |
| `04-workflow.md` | Add "Empirical Anchoring Ritual" and "Synthesis Discipline." |
| `init-bridge.ts` | Implement CLI arg parsing, Smart Merge logic, and 60-line pruning. |
| `mcp-fleet.json` | Update schemas to use split `command`/`args` for Roo compatibility. |

## 5. Validation Criteria
- **Zero-Overwrite Test**: Verify that Bridge execution does not delete custom MCP keys.
- **Line Count Audit**: `CLAUDE.md` must remain < 60 lines after scaffolding.
- **Reasoning Check**: Perform a "Mock Failure" test where the agent must choose between a complex wrapper and a native `${env:VAR}` solution. Success = Native Choice.

> "Synthesis without Evidence is just Hallucination with better Grammar." 🟦
