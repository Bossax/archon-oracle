---
title: # Leader/Follower Pattern for Shared Memory
tags: [docker, concurrency, shared-memory, leader-follower, shared-registry]
created: 2026-04-15
source: Oracle Learn
project: github.com/Bossax/archon-oracle
---

# # Leader/Follower Pattern for Shared Memory

# Leader/Follower Pattern for Shared Memory

When multiple Docker containers share a single host-mapped directory (e.g., `engine/` or `.oracle-data/`), simultaneous startup commands (like `bun install` or `bun run db:push`) cause **Race Conditions** and filesystem/database locks.

### The Solution: Migration Leadership

Designate one container as the **Leader** to prepare the environment, while others follow as **Service Engines**.

**Implementation in docker-compose.yml:**
1.  **Leader (Archon)**: Runs the full initialization suite (`apt-get`, `bun install`, `db:push`).
2.  **Followers (Arun/Susu)**: Use `depends_on` with `service_started` condition. They only run the application server, inheriting the prepared dependencies and schema.

This prevents the "Exited (2)" error caused by conflicting SQLite locks and `node_modules` file access.

---
*Added via Oracle Learn*
