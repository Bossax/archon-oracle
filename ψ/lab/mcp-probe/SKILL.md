---
name: mcp-probe
description: v1.1.0 | Diagnostic tool to verify MCP environment inheritance and runtime health.
---

# /mcp-probe — Diagnostic Tool

**Goal**: Verify the environment and runtime health of MCP servers, specifically focusing on environment variable propagation and shell execution context.

## Usage

Register this probe in your `mcp.json` to debug auth issues:

```json
{
  "mcpServers": {
    "mcp-probe": {
      "command": "bun",
      "args": ["{{PATH_TO_PROBE}}/probe.ts"],
      "env": {
        "PROBE_VERIFICATION": "active"
      }
    }
  }
}
```

## Tools

### `probe_env`
Returns the environment variables visible to the MCP process.
- `filter`: (Optional) Substring to filter keys (e.g., "API", "PATH").

## 🔒 Security Hardening (Win32)

To prevent plaintext API keys in configuration files, use the **Explicit Environment Injection** pattern. This ensures the MCP process inherits keys directly from your system environment without storing them in `mcp.json`.

**Recommended Secure Pattern:**
```json
"perplexity": {
  "command": "cmd",
  "args": [
    "/c",
    "set PERPLEXITY_API_KEY=%PERPLEXITY_API_KEY% && npx -y @perplexity-ai/mcp-server"
  ]
}
```

---
**Philosophy**: "Visibility is the first step toward stability." 🟦
