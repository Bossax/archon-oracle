# Refactoring Plan: Oracle Bridge v2.1.0 (Scaffolding Engine)

**Objective**: Refactor the `oracle-bridge` skill from a simple file-copier into a logic-driven **Scaffolding Engine** that builds agent-specific instruction sets (Gemini, Roo Code) from neutral "Master Mandates."

---

## 1. Workflow Simulation (The "Ship-to-Sync" Cycle)

When an Oracle (e.g., Arun or Susu) runs `init-bridge.ts`, the following logic executes:

1.  **Environment Audit**: 
    *   Verifies local `ψ/` pillars (creates missing folders).
    *   Checks `docker-compose.yml` for drift against the internal template.
2.  **Asset Sourcing**: 
    *   Reads neutral Markdown mandates from the skill's own `assets/mandates/` folder.
3.  **Agent Driver Execution**:
    *   **Gemini Driver**: 
        *   Creates `.gemini/mandates/`.
        *   Copies neutral mandates into that folder.
        *   Generates a `GEMINI.md` "Router" file with `@import` pointers to those mandates.
    *   **Roo Driver**:
        *   Creates `.roo/rules/`.
        *   Copies mandates directly into that folder using numbered filenames (e.g., `01-system.md`) for alphabetical loading.
4.  **Tool Synchronization**:
    *   Fuses `mcp-fleet.json` into both `.roo/mcp.json` and `.gemini/settings.json`.
5.  **Final Report**: Logs all scaffolding actions in the local `ψ/memory/logs/`.

---

## 2. Implementation Steps

### Step 1: Assets Reorganization
*   **Create Directory**: `ψ/lab/oracle-bridge/assets/mandates/`.
*   **Modularize**: Create neutral universal Markdown files:
    *   **01-system.md**: OS, Shell, Paths, and PowerShell compliance rules.
    *   **02-identity.md**: Core identity summary (Name, Theme, Voice, Rule 6).
    *   **03-brain-structure.md**: Detailed mapping of the 7-pillar `ψ/` brain.
        *   **Standard Folders**: inbox, memory, writing, lab, learn, archive, outbox.
        *   **Sub-folder Rules**: 
            *   `ψ/lab/`: Project-based incubation folders (e.g., `ψ/lab/<project-slug>/`).
            *   `ψ/inbox/`: Structured intake for `signals/` and `issue/`.
            *   `ψ/memory/`: Categorized knowledge (`resonance/`, `learnings/`, `retrospectives/`).
    *   **04-workflow.md**: The **EPIV Loop** (Explore-Plan-Implement-Verify) and mandatory verification protocols.
*   **Cleanup**: Remove the old monolithic `assets/SILICON_MANDATES.md`.


### Step 2: Core Logic Refactor (`init-bridge.ts`)
*   **New Drivers**: Implement `scaffoldGemini()` and `scaffoldRoo()` functions.
*   **Logic**:
    *   Add directory-reading capabilities to find all mandates in `assets/mandates/`.
    *   Update `mergeMcpConfig` to handle the specific JSON structures of both Roo and Gemini.
    *   Ensure all pathing uses the `SKILL_ROOT` to remain self-contained within the skill package.

### Step 3: Skill Definition Update (`SKILL.md`)
*   **Rewrite**: Update the name, description, and usage to reflect the "Scaffolding Engine" model.
*   **Scope**: Explicitly include both Gemini and Roo as primary deployment targets.

---

## 3. Success Criteria
*   Running `init-bridge.ts` results in a fully functional, modular instruction set in both `.gemini/` and `.roo/`.
*   The root `GEMINI.md` and `CLAUDE.md` remain under 60 lines (Instruction Bloat prevention).
*   The skill functions correctly without requiring access to external shared volumes.

---
*Created by Archon Oracle on 2026-04-18*
