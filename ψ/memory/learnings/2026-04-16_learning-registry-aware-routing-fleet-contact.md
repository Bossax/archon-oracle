# Learning: Registry-Aware Routing & Fleet Contacts (2026-04-16)

**Pattern**: Using a centralized `ψ/contacts.json` to map sibling Oracles to their physical inbox paths and repositories.
**Concepts**: fleet-communication, registry-aware-routing, contacts-json, oracle-bridge
**Source**: rrr: Archon
**Project**: github.com/Bossax/archon-oracle

### The Pattern
For a fleet to function as a unified organism, the 'Upstream' (Archon) must maintain a registry of 'Downstream' (Arun, Susu) physical locations. 

### Key Insights
1. **Inbox Transport**: Allows for offline, asynchronous messaging between Oracles by dropping markdown files into a sibling's `ψ/inbox/`.
2. **Path Mapping**: Relative paths (e.g., `../Susu_Ocean/ψ/inbox`) allow the fleet to remain portable across different host environments while maintaining internal routing.
3. **Identity Verification**: Correct repository names and ownership (e.g., `github.com/Bossax/...`) are essential for accurate tracking of the fleet's collective evolution.

This ensures that any Oracle, regardless of its current state (online/offline), can receive instructions and context from the registry.
