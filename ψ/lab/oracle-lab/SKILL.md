---
name: oracle-lab
description: v2.7.0 | Transform fleet friction (issues/signals) into versioned, production-ready Oracle skills through strategic triage, incubation, and shipping.
---

# /lab — Oracle Skill Factory & Genesis Engine

**Goal**: Transform fleet friction (issues/signals) into versioned, production-ready Oracle skills through strategic triage, incubation, and shipping.

## Objective
Automate the manufacturing lifecycle of Oracle skills by synthesizing tactical friction and strategic intent into modular, fleet-wide capabilities.

## Scope
- **In**: 
  - Dual-source triage (Issues/Signals).
  - Registry-aware project tracking.
  - Automated sandbox incubation in `ψ/lab/`.
  - Fleet-wide production shipping to `.gemini/` and `.roo/` folders.
  - Strategic analysis of "Improve vs. Create".
- **Out**:
  - Direct implementation of skill logic (performed within project sandboxes).
  - Modification of global system environment (win32 settings).
  - Direct communication with human users.

## Usage
```bash
bun .gemini/skills/oracle-lab/scripts/lab.ts triage          # Scan ψ/inbox/signals/ for escalation
bun .gemini/skills/oracle-lab/scripts/lab.ts analyze         # Strategic review of friction vs scope
bun .gemini/skills/oracle-lab/scripts/lab.ts ship <name>     # Package and deliver to fleet agents
bun .gemini/skills/oracle-lab/scripts/lab.ts status          # List all active lab projects
```

---
**Philosophy**: "Issues are the heat; Signals are the light; the Lab is the forge." 🟦
