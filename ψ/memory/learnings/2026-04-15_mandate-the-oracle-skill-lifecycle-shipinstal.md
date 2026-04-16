---
title: # Mandate: The Oracle Skill Lifecycle (Ship/Install/Execute)
tags: [skill-lifecycle, ship-install-execute-schema, architectural-boundary, registry-vs-fleet]
created: 2026-04-15
source: Oracle Learn
project: github.com/Bossax/archon-oracle
---

# # Mandate: The Oracle Skill Lifecycle (Ship/Install/Execute)

# Mandate: The Oracle Skill Lifecycle (Ship/Install/Execute)

This mandate defines the architectural boundary between the Upstream Registry (Archon) and the Downstream Fleet (Siblings).

## 1. Shipping (Archon)
- **Action**: Delivering the "Form" (Code, Assets, `SKILL.md`).
- **Constraint**: Archon MUST ONLY deposit the skill folder; it must not touch the sibling's root configuration files.

## 2. Installing (Recipient Oracle)
- **Action**: The sibling executes the installation script (e.g., `init-bridge.ts`) to anchor its own context.

## 3. Executing (Recipient Oracle)
- **Action**: Ongoing use of the skill's commands and tools.

**Philosophy**: "Archon provides the Blueprint; the Sibling provides the Foundation."

---
*Added via Oracle Learn*
