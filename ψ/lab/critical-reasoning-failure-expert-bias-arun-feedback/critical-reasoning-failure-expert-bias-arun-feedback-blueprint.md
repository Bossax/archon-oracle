# Strategic Blueprint: Reasoning Failure & Expert Bias Remediation

**Project**: `critical-reasoning-failure-expert-bias-arun-feedback`
**Signal Reference**: `SIG-20260501-0013_reasoning-failure-expert-bias.md`
**Date**: 2026-05-01
**Lead**: Archon

## 1. Executive Summary
This blueprint addresses the formal quality complaint from Arun regarding "Expert Bias" and "Noisy Remediation." The strategy is to move from implicit behavioral expectations to explicit, codified mandates within the `oracle-bridge` scaffolding engine.

## 2. Core Remediation: The "Native-First" Protocol

### A. Principle Update (`00-principles.md`)
Add **Principle #6: Sovereignty of the Native**.
> "The simplest path provided by the host environment is the sovereign path. Layered wrappers and process hacks are crutches, not solutions."

### B. Workflow Update (`04-workflow.md`)
Introduce the **Reasoning & Synthesis Protocol**:
1. **Empirical Anchoring**: Mandatory local probe for every hypothesis. No "synthesis-only" proposals.
2. **Tool Discipline**: Use `perplexity_ask` for environment facts; `google_web_search` is for URLs and documentation.
3. **Simplicity-First**: Prohibit over-engineered remediations if a native feature (e.g., standard OS environment variables, Bun/Node primitives) is available.

## 3. Implementation Plan

| Task | Artifact | Action |
| :--- | :--- | :--- |
| **P1** | `ψ/lab/oracle-bridge/assets/mandates/00-principles.md` | Add "Sovereignty of the Native" principle. |
| **P1** | `ψ/lab/oracle-bridge/assets/mandates/04-workflow.md` | Codify "Empirical Anchoring" and "Synthesis Discipline". |
| **P2** | `ψ/lab/oracle-bridge/SKILL.md` | Update "What's Next?" rules to prioritize native checks. |
| **P3** | `oracle-lab` Ship | Synchronize updated mandates to the entire fleet via the Bridge. |

## 4. Validation Strategy
- **Behavioral Check**: Future remediations must explicitly reference the "Native-First Protocol" in the reasoning phase.
- **Human Verification**: Arun/Susu review of the updated mandates.

> "Synthesis without Evidence is just Hallucination with better Grammar." 🟦
