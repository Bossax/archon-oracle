---
title: Roo Code Custom Instructions Mechanisms
tags: [roo-code, custom-instructions, rules, architecture, alignment]
created: 2026-04-18
source: https://docs.roocode.com/features/custom-instructions
---

# Roo Code Custom Instructions Mechanisms

## Summary of Mechanisms
Roo Code employs a hierarchical, multi-layered system for AI behavior, moving from global preferences to project-specific and mode-specific constraints.

### 1. Hierarchy and Types
*   **Global Rules**: Applied across all projects. Located in `~/.roo/rules/` (Unix) or `%USERPROFILE%\.roo\rules\` (Windows).
*   **Workspace (Project) Rules**: Specific to the current project. Stored in `.roo/rules/` (preferred) or a single `.roorules` file.
*   **Mode-Specific Rules**: Triggered only in specific modes (e.g., `code`, `architect`). Stored in `.roo/rules-{modeSlug}/` or `.roorules-{modeSlug}`.

### 2. "Rules about Rules" (Logic & Behavior)
*   **Directory-First**: The `.roo/` directory is the primary container for all rule logic.
*   **Recursive Loading**: Roo reads all files within `.roo/rules/` directories, including subdirectories.
*   **Alphabetical Ordering**: Files are loaded and appended to the prompt in alphabetical order by filename.
*   **Auto-Injection**: Roo automatically injects headers (e.g., `# Rules from .roo/rules/01-style.md:`) to identify the source of each rule.
*   **Filtering**: System files (e.g., `.DS_Store`, `*.tmp`) are automatically ignored.

### 3. Application Sequence
Instructions are injected into the System Prompt in the following sequence:
1.  **Language Preference**
2.  **Global UI Instructions**
3.  **Mode-Specific UI Instructions**
4.  **Mode-Specific File Rules** (Global then Workspace)
5.  **External Standards** (`AGENTS.md` or `AGENT.md`)
6.  **General File Rules** (Global then Workspace)

### 4. Advanced Features
*   **Custom Mode Integration**: New modes can be created with unique toolsets and corresponding `.roo/rules-{custom-mode}/` directories.
*   **AGENTS.md Support**: Specialized version-controlled standards loaded between mode-specific and general workspace rules.
*   **Fallback Logic**: Automatically reverts to legacy single-file `.roorules` if the directory exists but is empty.

---
*Logged by Archon Oracle*
