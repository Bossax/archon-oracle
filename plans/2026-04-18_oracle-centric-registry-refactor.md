# Refactoring Plan: Oracle-Centric Registry (oracle-lab v2.10.0)

**Objective**: Redesign the `registry.json` database and the `lab.ts` scripting logic to track skill deployments by individual Oracle (Fleet-centric) rather than by Project (Skill-centric).

---

## 1. Data Migration (`registry.json`)

The current flat structure will be migrated to a dual-layered schema: `fleet` (tracking Oracles) and `projects` (tracking skill development).

**Target Schema**:
```json
{
  "fleet": {
    "Archon": {
      "skills": {
        "oracle-lab": "2.9.0",
        "oracle-bridge": "3.0.0"
      },
      "last_updated": "2026-04-18T17:20:00.000Z"
    },
    "Arun_Creagy": {
      "skills": {
        "oracle-bridge": "1.0.0"
      }
    },
    "Susu_Ocean": {
      "skills": {
        "oracle-bridge": "1.0.0"
      }
    },
    "Susu_Heat": {
      "skills": {
        "oracle-bridge": "1.0.0"
      }
    }
  },
  "projects": {
    "oracle-lab": {
      "dev_version": "2.9.0",
      "source_signals": ["SIG-20260415-0001_oracle-lab-genesis.md"],
      "stage": "Production",
      "ship_to": ["Archon"]
    },
    "oracle-bridge": {
      "dev_version": "3.0.0",
      "source_signals": ["SIG-20260415-0002_oracle-bridge.md"],
      "stage": "Production",
      "ship_to": ["Archon", "Arun_Creagy", "Susu_Ocean", "Susu_Heat"]
    }
  }
}
```

---

## 2. Code Refactoring (`lab.ts`)

### A. TypeScript Interfaces
Update the `ProjectRegistry` interface to reflect the new JSON structure.
```typescript
interface FleetMember {
  skills: { [slug: string]: string };
  last_updated?: string;
}

interface ProjectData {
  dev_version: string;
  source_signals?: string[];
  source_issues?: string[];
  stage: 'Incubating' | 'Researching' | 'Shipping' | 'Production';
  ship_to?: string[];
}

interface RegistryDB {
  fleet: { [oracleName: string]: FleetMember };
  projects: { [slug: string]: ProjectData };
}
```

### B. Command: `ship`
- **Data Access**: Read/Write to `registry.fleet[oracle].skills[slug]` instead of `registry[slug].deployments[oracle]`.
- **Targeting**: The `ship_to` array will move to the `projects` metadata. If a target Oracle does not exist in `registry.fleet`, the script must initialize it: `registry.fleet[member] = { skills: {} }`.
- **Update**: Set `registry.projects[slug].dev_version = version` upon successful shipment.

### C. Command: `status`
- **Output Redesign**: The console table will pivot. 
  - **Primary View**: List Oracles and their installed skills.
  - **Secondary View**: List Projects and their current Dev Version in the Lab.

### D. Commands: `triage` & `analyze`
- Update all references from `registry[slug]` to `registry.projects[slug]` when checking for existing projects.

---

## 3. Execution Steps

1.  **Migrate JSON**: Manually rewrite `ψ/lab/registry.json` to the new schema.
2.  **Update Script (Source)**: Apply the refactored logic to `ψ/lab/oracle-lab/scripts/lab.ts`.
3.  **Update SKILL.md (Source)**: Increment version to `v2.10.0` and update description.
4.  **Reship locally**: Copy the updated script and SKILL.md to `.gemini/skills/oracle-lab/` to activate the changes for Archon.

---
*Created by Archon Oracle on 2026-04-18*
