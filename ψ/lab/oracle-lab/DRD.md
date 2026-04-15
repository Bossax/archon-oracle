# Design Requirement Document (DRD): Oracle Lab (The Genesis Engine)

**Signal ID**: SIG-20260415-0001
**Status**: Operational / Strategic Reflection
**Owner**: Archon Oracle (Strategist)
**Priority**: Critical
**Environment**: win32 / PowerShell / Bun

## 1. Objective
Establish an end-to-end "Skill Factory" that converts raw signals into versioned, durable, and production-ready skills for the Oracle fleet through rigorous strategic triage and architectural synthesis.

---

## 2. Phase 0: Strategic Signal Harvesting (Requirement Gathering)

Before a skill enters the Lab, its requirements must be harvested and hardened.

### A. Signal Ingestion (The "Why")
- **Human Intent**: "Aha!" moments or architectural mandates from Bossax (via `fyi --important`).
- **Fleet Friction**: Performance data or logic failures reported by sibling Oracles (Arun, Susu, Jiji) via Signal Tickets.
- **Location**: All raw signals are archived in `ψ/inbox/signals/` for triage.

### B. Pattern Triage (Strategic Evaluation)
- **Friction Score**: Every signal is evaluated on a 0.0-1.0 scale. High friction (0.7+) triggers immediate incubation.
- **Pattern Identification**: Archon scans the inbox to determine if multiple signals point to a single **Systemic Pattern**. 
- **Requirement Hardening**: Formless friction is converted into a **Design Requirement Document (DRD)**. This is where "Energy" becomes "Logic."

### C. Ancestral Trace (Provenance)
- **Action**: Every new requirement MUST be tested against ancestor knowledge.
- **Skill**: Use `/trace --deep` to find how ancestors (`oracle-v2`, `nat-brain`) handled similar logic.
- **Artifact**: `trace.json` logs these "Dig Points" to ensure the new skill has historical integrity.

---

## 3. The Four-Stage Manufacturing Lifecycle

### Stage 1: Incubation (Creation)
- **Action**: Use `oracle-lab --incubate [name]` to create the sandbox workspace in `ψ/lab/`.
- **Constraint**: Development noise stays in the Lab to preserve the fleet's contextual purity.

### Stage 2: Shipping (Clean Packaging)
- **Command**: `oracle-lab --ship [name] --version [X.Y.Z]`
- **Packaging Logic**: 
    - **Fresh Start**: Clear the target agent folders to prevent artifact rot.
    - **Purge**: EXCLUDE development history (`DRD`, `STATUS`, `trace`).
    - **Form Delivery**: Copy ONLY production artifacts (`SKILL.md`, `scripts/`, `assets/`) to the agent's configuration (`.gemini/`, `.roo/`).

### Stage 3: Installation (Autonomous Anchor)
- **Trigger**: A Signal Notification is sent to the sibling's inbox with the manual activation command.
- **Mandate**: **Downstream Autonomy**. The sibling Oracle provides the "Will" to execute its own internal `init-[name].ts` ritual.

### Stage 4: Usage (Continuous Operation)
- **Action**: Repetitive execution of the skill by the anchored Oracle.
- **Feedback Loop**: Friction from usage generates new signals, informing the next version (v1.0.X).

---

## 4. Core Manufacturing Mandates

1.  **Strategic Precedence**: No skill is shipped without a DRD synthesized from a Signal.
2.  **Silicon Anchor**: Every script must be win32/PowerShell compatible.
3.  **Quiet Mandates**: Only behavioral rules in root configuration files.
4.  **Nothing is Deleted**: Every strategic decision is archived in the `ψ/` brain.

---
> "Strategy provides the direction; the Lab provides the Form; the Fleet provides the Life." 🟦
