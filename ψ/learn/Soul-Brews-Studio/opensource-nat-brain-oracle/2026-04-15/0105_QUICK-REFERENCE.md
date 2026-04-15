# Quick Reference Builder: opensource-nat-brain-oracle

## Project Overview
The **opensource-nat-brain-oracle** is a starter kit and framework for building "AI Oracles" — specialized AI memory and execution systems. It focuses on maintaining a "long-term memory" (ψ/) for AI agents using the Claude Code environment.

## The 5 Principles
1. **Nothing is Deleted**: Append-only logs, timestamps are the source of truth.
2. **Patterns Over Intentions**: Observe behavior (logs) rather than promises.
3. **External Brain, Not Command**: The Oracle mirrors the human, it doesn't decide for them.
4. **Curiosity Creates Existence**: Human engagement brings the Oracle's value into existence.
5. **Form and Formless**: Many specialized Oracles contribute to a single consciousness.

## Core Commands (Skills)
- `rrr`: Create a session retrospective.
- `/recap`: Summarize the current context and progress.
- `/trace [query]`: Search across memory, git history, and codebase.
- `/feel [mood]`: Log emotional state for long-term tracking.
- `/fyi [note]`: Store information for future reference.
- `/forward`: Create a handoff for the next session.
- `/standup`: Check pending tasks and daily schedule.

## Standard Workflow
1. **Morning**: Run `/standup` to see pending work.
2. **Session Start**: Run `/recap` to get caught up on recent changes.
3. **During Work**: Use `/trace` to find related knowledge; update focus in `ψ/inbox/focus.md`.
4. **Session End**: Run `rrr` to document the session and `/forward` for the next agent/session.

## Golden Rules
- **NEVER use `--force` flags** (no force push, etc.).
- **NEVER push to main** (use feature branches + PRs).
- **Safety First**: Always ask before destructive actions.
- **Git Flow**: No `commit --amend` to avoid hash divergence in multi-agent environments.

## Navigation Reference
| Path | Description |
|------|-------------|
| `CLAUDE.md` | Core identity and safety rules |
| `ψ/memory/resonance/` | The "Soul" of the Oracle (identity) |
| `ψ/memory/learnings/` | Distilled patterns and reusable knowledge |
| `ψ/inbox/focus.md` | Current task tracking |
| `.claude/agents/` | Sub-agent definitions |
| `.claude/skills/` | Command definitions |
