---
name: unnamed-skill
description: v1.0.0 | Oracle fleet skill.
---

---
name: mcp-probe
description: v1.0.0 | Diagnostic tool to verify MCP environment inheritance and runtime health.
---

# /mcp-probe — Diagnostic Tool

**Goal**: Verify the environment and runtime health of MCP servers, specifically focusing on environment variable propagation and shell execution context.

## Usage

```bash
# Register this probe in your mcp.json to debug auth issues
{
  "mcpServers": {
    "probe": {
      "command": "bun",
      "args": ["{{PATH_TO_PROBE}}/probe.ts"],
      "env": {
        "TEST_VAR": "verification_value"
      }
    }
  }
}
```

## Tools

### `probe_env`
Returns the environment variables visible to the MCP process.
- `filter`: (Optional) Substring to filter keys (e.g., "API", "PATH").

## Troubleshooting Workflow
1. If an auth-protected MCP fails (e.g., Perplexity 401), install `mcp-probe`.
2. Call `probe_env(filter: "PERPLEXITY")`.
3. If the variable is missing or incorrect, use the **Explicit Injection Pattern** in `mcp.json`:

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
