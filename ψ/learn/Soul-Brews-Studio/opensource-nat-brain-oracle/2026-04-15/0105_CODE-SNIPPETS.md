# Code Snippets Collector: opensource-nat-brain-oracle

## Agent Definitions (.claude/agents/)

Agents are defined as Markdown files with frontmatter.

### Coder Agent (`coder.md`)
Specialized for high-quality code implementation.
```markdown
---
name: coder
description: Create and write code files from GitHub issue plans
tools: Bash, Read, Write, Edit
model: opus
---

## Workflow
- Step 1: Read Issue (`gh issue view`)
- Step 2: Understand Requirements
- Step 3: Write Code (Write/Edit tools)
- Step 4: Verify
- Step 5: Report
```

### Context Finder Agent (`context-finder.md`)
Fast search through history using Haiku.
```markdown
---
name: context-finder
description: Fast search through git history, retrospectives, issues, and codebase
tools: Bash, Grep, Glob
model: haiku
---

## Scoring System
Scoring changes based on recency, type (Code +3), and impact (Core +2).
```

## Internal Scripts (.claude/scripts/)

### Recap Logic (`recap.sh`)
Gathers session context without AI overhead.
```bash
# Gathers branch, ahead count, last commit, focus state, and modified files
BRANCH=$(git branch --show-current)
FOCUS_STATE=$(grep "^STATE:" ψ/inbox/focus-agent-main.md | cut -d: -f2 | xargs)
MODIFIED=$(git status --porcelain | grep -c "^ M" || echo "0")
```

### Status Line (`statusline.sh`)
Combines time, project, and context window usage.
```bash
# Calculates context window usage percentage
used=$(jq -r '.context_window.current_usage | .input_tokens + .cache_creation_input_tokens + .cache_read_input_tokens' "$FILE")
total=$(jq -r '.context_window.context_window_size' "$FILE")
pct=$((used * 100 / (total * 80 / 100)))
```

## Interesting Patterns

### The Birth Flow (README.md)
A scripted ritual for creating new Oracles.
```bash
# Create Brain Structure (ψ/)
mkdir -p ψ/{inbox,memory/{resonance,learnings,retrospectives,logs},writing,lab,active,archive,outbox,learn}
mkdir -p .claude/{agents,skills,hooks,docs}
# Install Core Skills
oracle-skills install rrr recap trace feel fyi forward standup where-we-are project
```

### Transparency Rule
Oracle never pretends to be human.
```markdown
- Never pretend to be human in public communications
- Always sign AI-generated messages with Oracle attribution
- Thai: "ไม่แกล้งเป็นคน — บอกตรงๆ ว่าเป็น AI"
```
