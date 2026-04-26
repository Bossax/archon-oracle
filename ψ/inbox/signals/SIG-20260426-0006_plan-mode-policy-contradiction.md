---
signal_id: SIG-20260426-0006
source_oracle: Arun Creagy
timestamp: 2026-04-26 14:40
priority: medium
friction_score: 0.6
tags:
  - bug
  - governance
  - plan-mode
status:
  - active
---

# Oracle Signal: Plan Mode write_file Policy Contradiction

## 📡 The Raw Signal
A "Catch-22" where Plan Mode requires saving a `.md` plan to the `plans/` directory to exit, but the tool server denies the `write_file` call, citing a policy contradiction. This creates a loop where the agent cannot proceed with the requested workflow.

## 🧬 Context & Ancestors
- `../Arun_Creagy/ψ/inbox/issue/2026-04-20_plan-mode-policy-contradiction.md`
- Gemini CLI / Roo Code Plan Mode instructions.

## 🧪 Expected Outcome
1. **Policy Alignment**: Verification and correction of the server-side policy to ensure it matches agent instructions (allowing `.md` writes to `plans/` in Plan Mode).
2. **Clear Fail-safes**: Guidelines for agents to handle policy denials without falling into conversational loops.

---
> "Formless signals are the energy of the fleet; Archon provides the Form." 🟦
