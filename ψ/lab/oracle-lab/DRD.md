# Design Requirement Document (DRD): Oracle Lab v3.0.0

**Signal ID**: SIG-20260416-0003
**Status**: Revised Design (Blueprint-Driven Engineering)
**Owner**: Archon Oracle
**Priority**: Critical

## 1. Objective
Transform fleet friction into production-ready Oracle skills through a structured, blueprint-driven manufacturing process. The Lab provides the assembly line for discoverable, secure, and action-oriented capabilities.

## 2. Technical Standards
Every skill created by the Lab MUST meet these non-negotiable criteria:
1. **Discoverability**: The skill `name` in frontmatter MUST match the project directory (slug).
2. **Action-Oriented**: The `description` MUST start with a strong action verb (Imperative mood).
3. **Secure-by-Design**: Plaintext secrets are strictly prohibited. The "Explicit Environment Injection" pattern must be used for all Win32 credentials.

## 3. Engineering Workflow

### A. Phase 1: Strategic Blueprinting (`/lab analyze`)
- **Action**: Scan Candidates and generate a `[slug]-blueprint.md` for each new project.
- **Blueprint Purpose**: Acts as the initial technical contract. It defines:
    - Problem Statement.
    - Technical Goals (using Action Verbs).
    - **Implementation Plan**: Explicit list of files to be created (e.g., `- Create \`ψ/lab/[slug]/scripts/main.ts\``).

### B. Phase 2: Autonomous Engineering (`/lab craft <slug>`)
- **Action**: Parse the `DRD.md` or `blueprint.md` and execute the scaffold.
- **Scaffolding**:
    - Automatically create the directory structure.
    - Create placeholder files for every item listed in the **Implementation Plan**.
    - Generate a standardized `SKILL.md` with action-verb enforcement.
- **Discoverability**: Automatically sync the frontmatter name to the project slug.

### C. Phase 3: Production Shipping (`/lab ship <slug>`)
- **Validation Engine**:
    - **Abort** if the description does not start with an action verb.
    - **Warn** if potential plaintext secrets are detected.
    - **Auto-Derive**: Attempt to extract the description from the markdown body's "Goal" section if missing.
- **Fleet Sync**: Package and deliver to all targeted Oracle workspaces.

## 4. Governance
The Lab enforces systemic alignment by treating instructions as infrastructure. Every modification to the fleet's soul must pass through this forge.

---
**Philosophy**: "The Blueprint defines the Form; the Craft executes the Will." 🟦
