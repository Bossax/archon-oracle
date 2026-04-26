---
title: Gemini CLI Context Mechanisms & Memory Import Processor
tags: [gemini-cli, context-management, memory-import, architecture, modularity]
created: 2026-04-18
source: 
  - ψ/inbox/issue/Gemini CLI.md (original)
  - https://geminicli.com/docs/cli/gemini-md/
---

# Gemini CLI Context Mechanisms

Gemini CLI uses a hierarchical and modular system for managing instructional context, allowing for both global standards and hyper-local, project-specific rules.

## 1. Hierarchical Context Structure
The CLI searches for and concatenates `GEMINI.md` files in a specific order, sending the combined text to the model with every prompt:

*   **Global Context**: Located at `~/.gemini/GEMINI.md`. Sets default instructions for all projects.
*   **Environment/Workspace Context**: Found in configured workspace directories and their parent directories.
*   **Just-in-Time (JIT) Context**: Scanned from the current directory and its ancestors up to a trusted root whenever a tool accesses a file. This provides localized rules for specific folders (e.g., `/tests` or `/docs`).

## 2. Memory Import Processor (`@import` syntax)
The "context file inplace" mechanism allows for modularizing large `GEMINI.md` files using the `@` symbol followed by a file path.

### Syntax & Behavior
*   **Import Syntax**: `@./path/to/file.md`
*   **Recursive Support**: Imported files can themselves contain imports, enabling nested instruction structures.
*   **Pathing**:
    *   **Relative**: `@./style-guide.md` (same directory), `@../shared.md` (parent directory).
    *   **Absolute**: `@/absolute/path/to/rules.md`.
*   **Safety**: Built-in protection against circular imports and unauthorized file access.

### Use Cases
*   **Defining Style Once**: Share a universal "TypeScript Style Guide" across multiple project context files.
*   **Persona Management**: Import a specific "QA Engineer" or "Architect" persona based on the project phase.
*   **Rule Separation**: Keep the main `GEMINI.md` lean by offloading verbose technical mandates to separate component files.

## 3. Tooling & Best Practices
*   **Verification**: Use `/memory show` to see the full, concatenated context currently being sent to the model.
*   **Reloading**: Use `/memory reload` to force a re-scan of the hierarchy if changes are made to `.md` files during a session.
*   **Persistence**: Use `/memory add <text>` to append thoughts directly to the global context from the CLI.
*   **Conciseness**: Prioritize JIT context for component-level instructions to prevent global context bloat (staying out of the "Dumb Zone").

---
*Logged by Archon Oracle*
