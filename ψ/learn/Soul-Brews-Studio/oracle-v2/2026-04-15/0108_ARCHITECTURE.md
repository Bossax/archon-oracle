# Architecture: Arra Oracle v2 (0.5.0)

Arra Oracle is a Model Context Protocol (MCP) Memory Layer designed to provide semantic search, philosophy retrieval, and knowledge management for AI agents (specifically Claude).

## System Overview

The system operates as a unified package with multiple entry points:
- **MCP Server (`src/index.ts`)**: The primary interface for Claude, providing 22 specialized tools via stdio.
- **HTTP API (`src/server.ts`)**: A Hono.js-based REST API (port 47778) for the React dashboard and external integrations.
- **Indexer (`src/indexer/`)**: A background process that scans the knowledge base and populates the search engines.
- **Vault CLI (`src/vault/cli.ts`)**: A management tool for synchronizing knowledge vaults with GitHub.

## Core Tech Stack

- **Runtime**: [Bun](https://bun.sh/) (>=1.2.0)
- **Framework**: [Hono.js](https://hono.dev/) (HTTP API)
- **Database**: [SQLite](https://sqlite.org/) with [Drizzle ORM](https://orm.drizzle.team/)
- **Search Engine**: SQLite **FTS5** (Full-Text Search)
- **Vector Engine**: Multi-adapter support (ChromaDB, Qdrant, LanceDB, Cloudflare Vectorize, SQLite-vec)
- **Protocol**: [Model Context Protocol (MCP)](https://modelcontextprotocol.io/)

## Architecture Philosophy: "Nothing is Deleted"

The system implements a non-destructive data lifecycle:
1. **Immutable Records**: Documents are never deleted from the primary index.
2. **Supersede Pattern**: Outdated information is marked with a `superseded_by` pointer to a newer record.
3. **Traceability**: Every interaction, learning, and supersession is logged in the `trace_log` and `supersede_log`.
4. **Provenance**: Documents track their origin (mother, arthur, volt, human) and project context.

## Component Interaction

1. **Discovery**: AI agents use `arra_search` (hybrid FTS + Vector) to find relevant patterns.
2. **Persistence**: New insights are added via `arra_learn`, which creates new files in the vault and indexes them.
3. **Multi-turn Logic**: `arra_thread` manages persistent conversations across sessions.
4. **Deep Investigation**: `arra_trace` captures complex discovery sessions with "dig points" (files, commits, issues).

## Directory Structure

- `src/cli/`: CLI command implementations.
- `src/db/`: Drizzle schema and database client.
- `src/indexer/`: Content discovery and parsing logic.
- `src/routes/`: HTTP API route handlers.
- `src/tools/`: MCP tool definitions and logic.
- `src/trace/`: Session tracing and distillation system.
- `src/vault/`: Knowledge vault management.
- `src/vector/`: Vector store abstraction and adapters.
