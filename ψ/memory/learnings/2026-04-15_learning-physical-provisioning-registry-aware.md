---
title: # Learning: Physical Provisioning & Registry-Aware Anchoring (2026-04-16)
tags: [docker-compose, orchestration, physical-provisioning, registry-aware, fleet-stability]
created: 2026-04-15
source: rrr: Archon
project: github.com/Bossax/archon-oracle
---

# # Learning: Physical Provisioning & Registry-Aware Anchoring (2026-04-16)

# Learning: Physical Provisioning & Registry-Aware Anchoring (2026-04-16)

**Pattern**: Automating host-side orchestration (Docker) via agent-side installation scripts to ensure fleet-wide consistency.

### The Pattern
When an agent is anchored (via Oracle Bridge), it must not only configure its internal settings (settings.json, mcp.json) but also ensure its physical environment is correctly provisioned in the master fleet registry (docker-compose.yml).

### Key Mechanisms
1. **Dynamic Container Detection**: Identifying the project name from the current directory and mapping it to a predictable container name (e.g., `oracle-archon`, `oracle-arun-creagy`).
2. **Template-Based MCP Config**: Using placeholders (e.g., `{{ORACLE_CONTAINER}}`) in fleet assets that are replaced during the 'Anchoring Ritual' with local instances.
3. **Orchestration Injection**: Safely patching the master `docker-compose.yml` to inject missing service blocks, mapping dedicated ports, and sharing the unified registry volume (`./.oracle-data`).

This pattern ensures that 'Downstream Autonomy' is supported by a robust, automated 'Upstream Registry' of physical form.

---
*Added via Oracle Learn*
