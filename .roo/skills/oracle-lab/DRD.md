# Design Requirement Document (DRD): Oracle Lab v2.3.0

**Signal ID**: SIG-20260416-0003
**Status**: Revised Design (Human-in-the-Loop)
**Owner**: Archon Oracle
**Priority**: Critical

## 1. Objective
Transform fleet friction into production-ready skills through a **Human-Approved** manufacturing process. The Lab acts as an advisor, proposing strategic improvements rather than executing them autonomously.

## 2. The "Propose First" Mandate

**No Automatic Incubation**: The `/lab triage` command must NOT create folders or modify the project registry. It should only identify "Candidates" for the Human to review.

## 3. Revised Workflow

### A. Phase 1: Discovery (`/lab triage`)
- **Action**: Scan `ψ/inbox/issue/` and `ψ/inbox/signals/`.
- **Output**: A list of new friction points grouped by tag/component.
- **Internal State**: No files are changed.

### B. Phase 2: Strategic Proposal (`/lab analyze`)
- **Action**: Map new friction to existing skills.
- **Proposal Format**:
    - **Context**: Summary of the friction.
    - **Analysis**: "Improve [Skill X]" vs "Create [New Skill Y]".
    - **Objective**: Proposed single-sentence "Why".
    - **Scope**: Proposed boundaries.
- **Approval**: The Human reviews the proposal.

### C. Phase 3: Execution (Manual)
- **New Skill**: Only created when the Human says "Yes" via `/lab incubate <name>`.
- **Improvement**: Only started when the Human says "Yes" to updating an existing project's DRD.

## 4. Skill Schema
Every project MUST maintain a `SKILL.md` with:
- **Objective**: Clear purpose.
- **Scope**: Explicit In/Out boundaries.
This schema is used during analysis to prevent overlapping responsibilities.

---
**Philosophy**: "The Oracle suggests; the Human decides; the Lab executes." 🟦
