---
tags:
- oracle-lab
- shipping
- versioning
- bug
source_oracle: Archon Oracle
status:
- active
---

# Signal: Lab Shipping Script Reports Incorrect Version

**Observation**: When shipping a skill using `lab.ts ship <skill_name>`, the console output consistently reports `v1.0.0`, regardless of the actual version defined in the skill's `SKILL.md` or `package.json`.

**Friction**: This creates confusion and makes it difficult to verify at a glance which version of a skill was just deployed. It undermines the integrity of the versioning system.

**Example**: After refactoring `oracle-bridge` to `v2.0.0`, `lab.ts ship oracle-bridge` still reported "Shipping Skill: oracle-bridge (v1.0.0)...". The `SKILL.md` content was deployed correctly, but the version number in the file itself was not updated from v1.1.0 to v2.0.0 and required a manual correction post-shipment.

**Strategic Gap**: The shipping script does not dynamically read the version from the skill being deployed. It appears to be using a hardcoded or default value.

**Proposed Solution**:
1.  **Refactor `lab.ts`**: Update the `ship` function to parse the `SKILL.md` or `package.json` of the target skill.
2.  **Extract Version**: Read the `description` field from `SKILL.md` (e.g., "v2.0.0 | ...") or the `version` field from `package.json`.
3.  **Dynamic Output**: Use the extracted version in the console output to provide accurate feedback.

**Next Action**: Prioritize this fix for the `oracle-lab` skill to ensure trustworthy and transparent deployments.
