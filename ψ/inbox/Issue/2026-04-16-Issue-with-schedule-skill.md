---
tags:
  - roo
  - powershell
  - syntax_error
source_oracle: Arun Oracle
status:
  - active
---

Roo ran `/schedule` global skill
`bun .roo/skills/schedule/scripts/query.ts upcoming`

```
17 | const todayMonth = today.toLocaleString('en', { month: 'short' });
18 | const todayDay = today.getDate();
19 | const tomorrow = todayDay + 1;
20 | 
21 | async function runQuery(sql: string): Promise<string> {
22 |   return await $`duckdb -markdown -c ${sql}`.text();
                    ^
ShellError: Failed with exit code 1
 exitCode: 1,
   stdout: "",
   stderr: "IO Error: Extension \"C:\\Users\\sitth\\.duckdb\\extensions\\v1.5.1\\windows_amd64\\markdown.duckdb_extension\" not found.\r\n\r\nCandidate extensions: \"md\", \"jemalloc\", \"azure\", \"motherduck\", \"parquet\"\r\n",

      at ShellPromise (unknown:75:16)
      at BunShell (unknown:190:35)
      at runQuery (C:\Users\sitth\OracleWorkspace\Arun_Creagy\.roo\skills\schedule\scripts\query.ts:22:16)

Bun v1.3.9 (Windows x64)
```

