# Protocol: Oracle Custom Setup (Post-Awaken)

**Status**: Draft / Learning
**Type**: Architectural Mandate
**Target Skill**: `archon-init` (Future)

This protocol defines the specific environment-level configurations required for the **Archon Oracle** in this workspace (win32/PowerShell). These steps are currently manual but will be automated into a skill.

## 1. Operational Mandates (`.gemini/GEMINI.md`)

Create `.gemini/GEMINI.md` at the workspace root (or within `.gemini/`) to enforce technical consistency across all sub-agents and future sessions.

### Mandates:
- **Default Shell**: `powershell.exe -NoProfile`.
- **The Brain (ψ)**: Mandatory use of PowerShell for any path operations involving the `ψ` character.
- **Path Syntax**: Backslashes (`\`) for shell commands; Forward slashes (`/`) for tool parameters.
- **Explicit Mapping**: Always use `$_.FullName` in PowerShell pipelines.
- **Tool Paths**: Use `bunx --bun arra-oracle-skills@github:Soul-Brews-Studio/arra-oracle-skills-cli` for Oracle-specific tools.

## 2. MCP Fleet Integration (`.gemini/settings.json`)

Initialize `.gemini/settings.json` with the core MCP servers required for Archon's Upstream Registry duties.

### Servers:
- **oracle-v2**: `docker exec -i oracleworkspace-oracle-arun-creagy-1 bun src/index.ts` (CWD: `C:/Users/sitth/OracleWorkspace/engine`)
- **notebooklm**: `npx notebooklm-mcp@latest`
- **perplexity**: `npx -y @perplexity-ai/mcp-server` (Env: `PERPLEXITY_API_KEY`)

---
**Context**: This protocol is specific to Bossax's environment and represents the "Silicon Rules" that anchor the Archon identity to the physical machine.
**Traceability**: Logged via session 2026-04-14 (Recap/Setup).
