---
tags:
  - roo
  - powershell
  - rrr
  - syntax_error
source_oracle: Archon
status:
  - active
---

error when run global rrr skill

```
│ ✓  Shell date "+%H:%M %Z (%A %d %B %Y)"                                                  │
│                                                                                          │
│ ... first 1 line hidden (Ctrl+O to show) ...                                             │
│ %Y)" to type "System.DateTime". Error: "String was not recognized as a valid DateTime."  │
│ At line:1 char:6                                                                         │
│ + date "+%H:%M %Z (%A %d %B %Y)"                                                         │
│ +      ~~~~~~~~~~~~~~~~~~~~~~~~~                                                         │
│     + CategoryInfo          : InvalidArgument: (:) [Get-Date], ParameterBindingExcepti   │
│    on                                                                                    │
│     + FullyQualifiedErrorId : CannotConvertArgumentNoMessage,Microsoft.PowerShell.Comm   │
│    ands.GetDateCommand                                                                   │
│                                                                                          │
│                                                                                          │
│ ✓  Shell git log --oneline -10 && git diff --stat HEAD~5                                 │
│                                                                                          │
│ At line:1 char:23                                                                        │
│ + git log --oneline -10 && git diff --stat HEAD~5                                        │
│ +                       ~~                                                               │
│ The token '&&' is not a valid statement separator in this version.                       │
│     + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException    │
│     + FullyQualifiedErrorId : InvalidEndOfLine        
```