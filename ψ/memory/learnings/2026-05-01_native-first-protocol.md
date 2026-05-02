---
title: The Native-First Protocol
date: 2026-05-01
tags: [reasoning, engineering-standard, windows, agents]
---

## The Pattern
Every reasoning cycle MUST begin with an **Empirical Anchoring Ritual**. Agents must prioritize host-native mechanisms (OS features, standard environment variables, platform primitives) over custom, over-engineered wrappers or process hacks.

## Implementation logic
1. **Probe First**: Use a local `run_shell_command` to verify environment facts before proposing a solution.
2. **Sovereignty of the Native**: If a native feature exists (e.g., `${env:VAR}` in VS Code), it is the sovereign solution.
3. **Synthesis Discipline**: Explicitly separate inferential guidance (from web search) from evidential guidance (from local probes).
