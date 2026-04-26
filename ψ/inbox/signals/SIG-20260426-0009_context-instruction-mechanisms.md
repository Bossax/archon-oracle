---
signal_id: SIG-20260426-0009
source_oracle: Archon
timestamp: 2026-04-26 14:55
priority: high
friction_score: 0.7
tags:
  - philosophy-drift
  - context-management
  - modularity
status:
  - active
---

# Oracle Signal: Context & Instruction Mechanisms Stabilization

## 📡 The Raw Signal
Divergence and bloat in how Gemini CLI and Roo Code handle context and custom instructions. Instruction drift between `CLAUDE.md`, `.roo/rules`, and `.gemini/mandates` causes cognitive overhead and inconsistent agent behavior across clients.

## 🧬 Context & Ancestors
- `ψ/inbox/issue/2026-04-18-Gemini-CLI-Context-Mechanisms.md`
- `ψ/inbox/issue/2026-04-18-Roo-Code-Custom-Instructions-Mechanisms.md`
- Learning: `2026-04-18_infrastructure-as-context-modular-mandates.md`

## 🧪 Expected Outcome
1. **Single Source of Truth**: Implementation of the "Infrastructure-as-Context" pattern where instructions are scaffolded from a central registry.
2. **Client-Agnostic Rules**: Standardized set of modular mandates that can be symlinked or injected into any client environment.
3. **Bloat Reduction**: `CLAUDE.md` and equivalent files reduced to <20 line router summaries.

---
> "Formless signals are the energy of the fleet; Archon provides the Form." 🟦
