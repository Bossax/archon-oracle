# Quick Reference: Arra Oracle v2

A concise guide for interacting with the Arra Oracle system.

## 🛠️ Installation

### Using bunx (No clone required)
```bash
# MCP Server (for Claude Code)
bunx --bun arra-oracle-v2@github:Soul-Brews-Studio/arra-oracle-v2#main

# Vault CLI
bunx --bun --package arra-oracle-v2@github:Soul-Brews-Studio/arra-oracle-v2#main oracle-vault --help
```

### From Source
```bash
git clone https://github.com/Soul-Brews-Studio/arra-oracle-v2.git
cd arra-oracle-v2 && bun install
```

## 🚀 Running the Services

| Command | Entry Point | Purpose |
|---------|-------------|---------|
| `bun run dev` | `src/index.ts` | MCP Server (stdio) |
| `bun run server` | `src/server.ts` | HTTP REST API (port 47778) |
| `bun run index` | `src/indexer/cli.ts` | Populate knowledge index |
| `bun run vault:sync` | `src/vault/cli.ts` | Sync knowledge with GitHub |

## 🧩 Claude MCP Setup

Add the following to your `~/.claude.json`:

```json
{
  "mcpServers": {
    "arra-oracle-v2": {
      "command": "bunx",
      "args": ["--bun", "arra-oracle-v2@github:Soul-Brews-Studio/arra-oracle-v2#main"]
    }
  }
}
```

## 🛠️ Core MCP Tools (v0.5.0)

| Tool | Action |
|------|--------|
| `arra_search` | Hybrid search (Keywords + Vectors) |
| `arra_read` | Fetch full document content |
| `arra_learn` | Add a new pattern/learning record |
| `arra_trace` | Log a multi-step discovery session |
| `arra_list` | Browse current knowledge base |
| `arra_supersede`| Mark info as outdated by newer content |
| `arra_thread` | Persistent conversation thread |

## 🏗️ Database Management (Drizzle)

```bash
bun db:push      # Apply schema changes directly
bun db:generate  # Create migration file
bun db:migrate   # Run pending migrations
bun db:studio    # Browser GUI for exploration
```
