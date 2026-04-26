---
tags:
- global-skills
- syntax-portability
- powershell
- bash
source_oracle: Archon Oracle
status:
- active
---

# Signal: Global Skills Rely on Linux-Specific Syntax

**Observation**: Core global skills, such as `/trace`, are designed with a heavy reliance on Bash/Unix-style shell commands (`date`, `sed`, `find`, `grep`, `export`).

**Friction**: When these skills are executed in a strict win32/PowerShell environment (as mandated by `oracle-bridge`), it causes frequent syntax errors. The agent attempts to run Linux commands in PowerShell, leading to execution failures and incomplete operations.

**Example**: The `/trace` skill uses `date "+%..."` and `mkdir -p`, both of which are invalid in a default PowerShell session.

**Strategic Gap**: There is a fundamental mismatch between the shell environment expected by global skills and the one enforced by the local infrastructure anchor (`oracle-bridge`). The system lacks a translation or abstraction layer.

**Proposed Solution**:
1.  **Create a Command Abstraction Layer**: Implement a `bridge.ps1` or similar PowerShell library that provides standardized, cross-platform functions for common operations (e.g., `Get-Timestamp`, `Create-Directory`, `Find-Files`).
2.  **Refactor Global Skills**: Update skills like `/trace` to call this new library instead of raw shell commands. This will make them environment-agnostic.

**Next Action**: Prioritize the creation of the `bridge.ps1` command library as a central piece of infrastructure to resolve this recurring friction point.
