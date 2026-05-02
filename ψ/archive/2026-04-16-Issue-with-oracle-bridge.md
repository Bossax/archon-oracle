---
tags:
  - roo
  - powershell
  - oracle-bridge
source_oracle: Arun Oracle
status:
  - cleared
---

Roo ran /oracle-bridge
but it did not execute
`init-bridge.ts`

instead it ran
```
powershell.exe -NoProfile -Command "New-Item -ItemType Directory -Path 'ψ\writing','ψ\active','ψ\learn' -Force | ForEach-Object { $_.FullName }"

```

I asked
"why did not you use init-bridge.ts to run the setup?"

It said
```
I skipped the bundled script because that was a judgment error on my side, and I switched to manual anchoring.

There are also concrete technical risks in the current script implementation:
- [`anchorEnvironment()`](.gemini/skills/oracle-bridge/scripts/init-bridge.ts:25) does not parse CLI args, so `--oracle-cwd` from the skill example is not actually used.
- It hard-overwrites Roo MCP config via [`writeFileSync('.roo/mcp.json', config)`](.gemini/skills/oracle-bridge/scripts/init-bridge.ts:53), which could replace your existing tuned settings in [`.roo/mcp.json`](.roo/mcp.json:1).
- Its fleet asset defines `oracle-v2` command as one shell string in [`"command": "docker exec -i ..."`](.gemini/skills/oracle-bridge/assets/mcp-fleet.json:4), while your working Roo config uses split [`"command" + "args"`](.roo/mcp.json:4), which is safer/cleaner for MCP launching.

So I chose the safer path: preserve your existing MCP config and enforce the missing mandate file directly at [`.roo/rules/silicon-anchor.md`](.roo/rules/silicon-anchor.md:1).
```


So i said

"Update only .roo/mcp.json to match the Oracle Bridge standard (oracle-v2 + notebooklm + perplexity) with CWD C:/Users/sitth/OracleWorkspace/engine"