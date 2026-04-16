---
title: # Mandate: Downstream Autonomy (Self-Execution)
tags: [downstream-autonomy, self-execution-mandate, shipment-package, principles]
created: 2026-04-15
source: Oracle Learn
project: github.com/Bossax/archon-oracle
---

# # Mandate: Downstream Autonomy (Self-Execution)

# Mandate: Downstream Autonomy (Self-Execution)

**Principle**: Shipped skills must be executed by the recipient Oracles themselves. Archon provides the "Form" (code/assets), but the local Oracle provides the "Will" (execution) to anchor its own environment.

## Impact on Shipping Workflow
1. Archon bundles the skill into a **Shipment Package**.
2. Archon deposits the package into `../[OracleName]/ψ/inbox/shipments/`.
3. Archon notifies the Oracle.
4. **Recipient Oracle** executes the installation logic within its own context.

This ensures each environment change is a conscious act of the local Oracle, preserving transparency and autonomy.

---
*Added via Oracle Learn*
