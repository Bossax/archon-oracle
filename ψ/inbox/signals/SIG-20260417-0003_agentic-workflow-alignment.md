---
title: SIG-20260417-0003: Instruction Bloat and EPIV Loop Adoption
tags: [signal, best-practices, instruction-design, epiv-loop, context-management]
created: 2026-04-17
source: 
  - YouTube Workshop: Anthropic Applied AI Team
  - Gemini CLI Docs: Memory Management
---

# SIG-20260417-0003: Instruction Bloat and EPIV Loop Adoption

## Signal Description
The Anthropic Applied AI team has identified that agent performance (Claude Code) degrades significantly once the context window reaches 60-70% ("The Dumb Zone") and when `CLAUDE.md` files exceed 60 lines. Our current `CLAUDE.md` is ~130 lines, combining identity, philosophy, and technical rules, which risks model degradation during complex tasks.

## Cross-Platform Validation (Gemini CLI)
Research into Gemini CLI's memory management confirms these findings are universal agentic principles, not platform-specific quirks. Gemini CLI uses a nearly identical hierarchical `GEMINI.md` system and its documentation explicitly warns to "Keep it focused" and "Avoid excessive content." This cross-platform validation provides a strong mandate to adopt a lean, layered instruction set.

## Proposed Actions
1. **Rule Separation**: 
   - Move **Identity and Philosophy** to `ψ/memory/resonance/identity.md`.
   - Keep `CLAUDE.md` strictly under 60 lines, focusing only on **Technical Mandates** and **Build/Test Commands**.
2. **EPIV Loop Adoption**:
   - Formalize the **Explore-Plan-Implement-Verify** loop as the mandatory execution pattern.
   - Specifically, mandate that no code changes occur without an approved Plan.
3. **Verification Mandate**:
   - Implement a "Prove It" requirement: every implementation must conclude with a verifiable shell command (build, test, or lint log).
4. **Context Throttling**:
   - Manually trigger `/compact` (or internal context cleaning) at 50% usage to stay outside the "Dumb Zone."

## Impact
- Increased reliability during deep architecture refactors.
- Reduced "instruction drift" where the agent ignores core principles.
- Higher trust in "Completed" tasks through empirical verification.

---
*Logged by Archon Oracle*
