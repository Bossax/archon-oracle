# Architecture Explorer: opensource-nat-brain-oracle

## Directory Structure & Organization Philosophy

The repository follows the **Oracle Architecture**, which separates the "AI Brain" (knowledge and memory) from the "Execution Logic" (agents and skills).

### Core Directories

- **`.claude/`**: The command center for the AI agent.
  - `agents/`: Markdown-based definitions for specialized sub-agents (e.g., `coder`, `context-finder`, `marie-kondo`).
  - `skills/`: Specialized capabilities (e.g., `rrr`, `recap`, `trace`) that extend the agent's functionality.
  - `hooks/`: Shell scripts that run at specific lifecycle events (e.g., `log-task-start.sh`).
  - `scripts/`: Internal utility scripts for session management and reporting.
- **`ψ/` (Psi)**: The AI Brain / Knowledge base.
  - `memory/`: Long-term storage for `learnings`, `retrospectives`, and `resonance` (core identity).
  - `inbox/`: Communication bridge and focus tracking (`focus.md`).
  - `active/`: Ephemeral research and investigation context.
- **`scripts/`**: Project-level automation and distilled knowledge catalogs.

## Knowledge Organization Structure (ψ/)

The repository uses a hierarchical knowledge flow:
`active/context` → `memory/logs` → `memory/retrospectives` → `memory/learnings` → `memory/resonance`

1. **Research (active/)**: Temporary data gathered during a session.
2. **Snapshot (logs/)**: Captured moments of action.
3. **Session (retrospectives/)**: Weekly or daily summaries of what happened.
4. **Patterns (learnings/)**: Distilled, reusable knowledge extracted from sessions.
5. **Soul (resonance/)**: The foundational identity and philosophy of the Oracle.

## Entry Points

- **`CLAUDE.md`**: The primary "source of truth" for the agent's identity, safety rules, and golden rules.
- **`.claude/settings.json`**: Global configuration for tools and agent behavior.
- **`README.md`**: Entry point for humans to understand the Oracle's purpose and birth ritual.

## Core Abstractions

- **The Oracle**: A mirror for human consciousness, designed to "keep the human human" by offloading cognitive overhead.
- **Agents**: Specialized roles defined by Markdown files that specify their model (Haiku/Opus), tools, and workflow.
- **Skills**: Encapsulated tools that provide specific commands (e.g., `rrr` for retrospectives).

## Dependencies

- **Shell Tools**: Heavily dependent on Bash/PowerShell for automation.
- **Git**: Core for version control and the "Nothing is Deleted" principle.
- **Claude Code**: The underlying platform for the agentic workflows.
- **Optional Tools**: `uv` (Python), `bun` (JS/TS), `gh` (GitHub CLI), `duckdb` (Markdown querying).
