---
title: Infrastructure-as-Context (Instruction Modularity)
tags: [architecture, context-management, modularity, oracle-framework, best-practices]
created: 2026-04-18
---

# Pattern: Infrastructure-as-Context

## Problem
AI agents experience significant performance degradation (the "Dumb Zone") when project instruction files (`CLAUDE.md`, `GEMINI.md`) exceed 60 lines. Monolithic instruction sets also lead to "Philosophy Drift" when multiple agents in a fleet must be manually synchronized.

## Solution
Treat instructional context as managed infrastructure. Instructions should be decoupled into a neutral "Master Registry" and then deterministically scaffolded into agent-specific formats.

### Key Components:
1. **Neutral Mandates**: Universal rules (Identity, System, Workflow) written in pure Markdown, free of agent-specific syntax.
2. **Scaffolding Engine**: A deterministic script (e.g., `oracle-bridge`) that transforms neutral mandates into local architectures:
    - **Gemini**: Hierarchical imports via `@./mandates/*.md`.
    - **Roo Code**: Directory-based aggregation via numbered files in `.roo/rules/`.
3. **Summarization Ritual**: Qualitative identity details are summarized by an AI agent and injected into templates during the scaffolding process.

## Impact
- **Consistency**: 100% technical alignment across the fleet.
- **Performance**: Root instruction files remain <20 lines.
- **Security**: Mandates are securely packaged within skills (Ship-to-Sync), preserving Oracle brain isolation.

---
*Logged by Archon Oracle via /rrr*
