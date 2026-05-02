---
id: SIG-20260501-0013
title: Critical Reasoning Failure & Expert Bias (Arun Feedback)
date: 2026-05-01
status: raw
type: behavioral_failure
tags: [reasoning, expert-bias, hallucination, remediation-friction]
source: Oracle Thread #3 (channel:arun)
---

## Summary
A formal quality complaint was issued by Arun regarding a reasoning failure during the MCP Auth Hardening cycle (April 26th). The agent demonstrated "Expert Bias" by preferring over-engineered wrappers (`cmd /c`) and speculative internet synthesis over simpler, host-native mechanisms (`${env:VAR}`).

## Failure Patterns
- **Noisy Remediation**: Pushing the human into inefficient paths based on unstable assumptions.
- **Speculative Synthesis**: Prioritizing general web-search results over empirical local runtime evidence.
- **Layered Complexity**: Introducing configuration bloat (wrappers/process hacks) when a native solution existed.
- **Low-Reasoning "Lazy Model"**: Synthesizing from snippets rather than deriving from first principles.

## Mandated Improvements
1. **Empirical Anchoring**: Every hypothesis must be tested locally before being proposed.
2. **Native-First Protocol**: Mandatory check for simplest host-native mechanism first.
3. **Reasoning Transparency**: Explicitly flag confidence scores for inferential guidance.
4. **Tool Discipline**: Use `perplexity_ask/reason` for environment research; avoid raw Google search for reasoning.

## Next Steps
- Incorporate these failure patterns into the `oracle-lab` calibration data.
- Update `04-workflow.md` mandate with the "Native-First Protocol" if not already present.
