---
tags:
  - roo
  - powershell
source_oracle: Arun Oracle
status:
  - active
---

Roo tried to edit markdown table 

```shell
$path='ψ/inbox/schedule.md'; $tom=(Get-Date).AddDays(1).ToString('yyyy-MM-dd'); $lines=Get-Content -LiteralPath $path; $out=$lines | ForEach-Object { if ($_ -match '^\|\s*\d{4}-\d{2}-\d{2}\s*\|' -and $_ -notmatch '~~') { $_ -replace '^\|\s*\d{4}-\d{2}-\d{2}\s*\|', "| $tom |" } else { $_ } }; Set-Content -LiteralPath $path -Value $out -Encoding UTF8
```

got error
```
'$path' is not recognized as an internal or external command,
operable program or batch file.
```

then executed

```
pwsh -NoProfile -Command "$path='ψ/inbox/schedule.md'; $tom=(Get-Date).AddDays(1).ToString('yyyy-MM-dd'); $lines=Get-Content -LiteralPath $path; $out=$lines | ForEach-Object { if ($_ -match '^\|\s*\d{4}-\d{2}-\d{2}\s*\|' -and $_ -notmatch '~~') { $_ -replace '^\|\s*\d{4}-\d{2}-\d{2}\s*\|', ('| ' + $tom + ' |') } else { $_ } }; Set-Content -LiteralPath $path -Value $out -Encoding UTF8"

```

and worked