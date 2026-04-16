import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync, copyFileSync } from 'fs';
import { join } from 'path';

/**
 * /lab — Oracle Skill Factory & Genesis Engine Implementation
 * v2.8.0 (Detailed Status Edition)
 */

const LAB_DIR = 'ψ/lab';
const SIGNAL_INBOX = 'ψ/inbox/signals';
const ISSUE_INBOX = 'ψ/inbox/issue';
const REGISTRY_FILE = join(LAB_DIR, 'registry.json');
const CANDIDATES_FILE = join(LAB_DIR, 'candidates.json');
const WORKSPACE_ROOT = '..';

interface ProjectRegistry {
  [name: string]: {
    version: string;
    source_signals: string[];
    source_issues: string[];
    affected_oracles: string[];
    stage: 'Incubating' | 'Researching' | 'Shipping' | 'Production';
    last_shipped?: string;
    deployments: { [member: string]: string };
    ship_to?: string[];
  };
}

function loadJSON<T>(file: string): T {
  if (!existsSync(file)) return {} as T;
  try { return JSON.parse(readFileSync(file, 'utf8')); } catch { return {} as T; }
}

function saveJSON(file: string, data: any) {
  writeFileSync(file, JSON.stringify(data, null, 2));
}

function getArgs() {
  const args = process.argv.slice(2);
  const command = args[0];
  const params: Record<string, string | boolean> = {};
  for (let i = 1; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].slice(2);
      const value = args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true;
      params[key] = value;
      if (typeof value === 'string') i++;
    } else if (!params._) { params._ = args[i]; }
  }
  return { command, params };
}

function updateSkillFrontmatter(content: string, version: string): string {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
  const match = content.match(frontmatterRegex);
  let frontmatter: Record<string, string> = {};
  let body = content;

  if (match) {
    const lines = match[1].split('\n');
    lines.forEach(line => {
      const colonIndex = line.indexOf(':');
      if (colonIndex !== -1) {
        const key = line.substring(0, colonIndex).trim();
        const val = line.substring(colonIndex + 1).trim();
        frontmatter[key] = val;
      }
    });
    body = content.replace(frontmatterRegex, '').trim();
  }

  let desc = frontmatter.description || 'Oracle fleet skill.';
  desc = desc.replace(/^v\d+\.\d+\.\d+\s*\|\s*/, '');
  const finalFrontmatter = ['---', `name: ${frontmatter.name || 'unnamed-skill'}`, `description: v${version} | ${desc}`, '---'].join('\n');
  return `${finalFrontmatter}\n\n${body}`;
}

async function triage() {
  console.log('📡 [Lab] Triage: Identifying candidates...');
  const candidates: Record<string, any> = {};
  const registry = loadJSON<ProjectRegistry>(REGISTRY_FILE);

  if (existsSync(SIGNAL_INBOX)) {
    readdirSync(SIGNAL_INBOX).filter(f => f.startsWith('SIG-') && f.endsWith('.md')).forEach(file => {
      const content = readFileSync(join(SIGNAL_INBOX, file), 'utf8');
      const titleMatch = content.match(/# (?:Oracle Signal|Production Shipment): (.*)/);
      const title = titleMatch ? titleMatch[1].trim() : 'untitled';
      const slug = title.toLowerCase().replace(/[^a-z0-9]/g, '-');
      if (!registry[slug]) {
        if (!candidates[slug]) candidates[slug] = { slug, type: 'Signal', files: [], oracles: [] };
        candidates[slug].files.push(file);
      }
    });
  }

  if (existsSync(ISSUE_INBOX)) {
    readdirSync(ISSUE_INBOX).filter(f => f.endsWith('.md')).forEach(file => {
      const content = readFileSync(join(ISSUE_INBOX, file), 'utf8');
      const tagsMatch = content.match(/tags:\s*\n\s*-\s*(.*)/);
      const tag = tagsMatch ? tagsMatch[1].trim() : 'general-friction';
      const oracleMatch = content.match(/source_oracle:\s*(.*)/);
      const oracle = oracleMatch ? oracleMatch[1].trim() : 'Unknown';
      const slug = tag.toLowerCase().replace(/[^a-z0-9]/g, '-');
      if (!registry[slug]) {
        if (!candidates[slug]) candidates[slug] = { slug, type: 'Issue', files: [], oracles: [] };
        if (!candidates[slug].files.includes(file)) candidates[slug].files.push(file);
        if (!candidates[slug].oracles.includes(oracle)) candidates[slug].oracles.push(oracle);
      }
    });
  }
  saveJSON(CANDIDATES_FILE, candidates);
  console.log(`✅ Triage complete. ${Object.keys(candidates).length} candidates identified.`);
}

function analyze() {
  const registry = loadJSON<ProjectRegistry>(REGISTRY_FILE);
  const candidates = loadJSON<Record<string, any>>(CANDIDATES_FILE);
  console.log('\n📊 [Lab] Strategic Analysis:');
  console.log('\n--- EXISTING PROJECTS ---');
  for (const [slug, data] of Object.entries(registry)) {
    const skillPath = join(LAB_DIR, slug, 'SKILL.md');
    let objective = 'Missing objective';
    if (existsSync(skillPath)) {
      const objMatch = readFileSync(skillPath, 'utf8').match(/## Objective\n(.*)/);
      if (objMatch) objective = objMatch[1].trim();
    }
    console.log(`- ${slug.toUpperCase()} | v${data.version} | ${objective}`);
  }
  console.log('\n--- NEW CANDIDATES ---');
  for (const c of Object.values(candidates)) {
    console.log(`\nCandidate: [ ${c.slug.toUpperCase()} ] | Source: ${c.files.join(', ')}`);
    const match = Object.keys(registry).find(s => c.slug.includes(s) || s.includes(c.slug));
    console.log(`💡 Recommendation: ${match ? `IMPROVE [${match}]` : `CREATE [${c.slug}]`}`);
  }
}

function ship(name: string, version: string) {
  const slug = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const projectDir = join(LAB_DIR, slug);
  const registry = loadJSON<ProjectRegistry>(REGISTRY_FILE);
  if (!registry[slug]) return console.error(`❌ Project not found: ${slug}`);

  console.log(`🚢 [Lab] Shipping Skill: ${slug} (v${version})...`);
  const skillSource = join(projectDir, 'SKILL.md');
  if (!existsSync(skillSource)) return console.error(`❌ SKILL.md missing in ${slug}`);
  
  const originalContent = readFileSync(skillSource, 'utf8');
  const productionContent = updateSkillFrontmatter(originalContent, version);

  const targets = registry[slug].ship_to || readdirSync(WORKSPACE_ROOT, { withFileTypes: true })
    .filter(d => d.isDirectory() && !['temp', 'engine', '.git'].includes(d.name))
    .map(d => d.name);

  targets.forEach(member => {
    const memberRoot = (member === 'Archon' || member === '.') ? '.' : join(WORKSPACE_ROOT, member);
    const agentTargets = [join(memberRoot, '.gemini/skills', slug), join(memberRoot, '.roo/skills', slug)];

    agentTargets.forEach(targetDir => {
      try {
        if (!existsSync(targetDir)) mkdirSync(targetDir, { recursive: true });
        writeFileSync(join(targetDir, 'SKILL.md'), productionContent);
        ['scripts', 'assets'].forEach(dir => {
          const s = join(projectDir, dir);
          const d = join(targetDir, dir);
          if (existsSync(s)) {
            if (!existsSync(d)) mkdirSync(d, { recursive: true });
            readdirSync(s).forEach(f => copyFileSync(join(s, f), join(d, f)));
          }
        });
      } catch (err: any) { console.error(`❌ Shipment to ${member} failed: ${err.message}`); }
    });
    
    if (!registry[slug].deployments) registry[slug].deployments = {};
    registry[slug].deployments[member] = version;
  });

  registry[slug].version = version;
  registry[slug].stage = 'Production';
  registry[slug].last_shipped = new Date().toISOString();
  saveJSON(REGISTRY_FILE, registry);
  console.log('✨ [Lab] Shipment complete.');
}

function status() {
  const reg = loadJSON<ProjectRegistry>(REGISTRY_FILE);
  console.log('\n🏭 [Oracle Lab] Manufacturing Status (v2.8.0):');
  console.log(''.padEnd(90, '='));
  console.log(`${'Project'.padEnd(20)} | ${'Dev v'.padEnd(10)} | ${'Stage'.padEnd(12)} | ${'Deployments (Agent: v)'}`);
  console.log(''.padEnd(90, '-'));
  for (const [name, data] of Object.entries(reg)) {
    const deployments = Object.entries(data.deployments || {})
      .map(([agent, ver]) => `${agent}: v${ver}`)
      .join(', ') || 'None';
    console.log(`${name.padEnd(20)} | ${('v'+data.version).padEnd(10)} | ${data.stage.padEnd(12)} | ${deployments}`);
  }
  console.log(''.padEnd(90, '='));
}

async function main() {
  const { command, params } = getArgs();
  switch (command) {
    case 'triage': await triage(); break;
    case 'analyze': analyze(); break;
    case 'ship': ship(params._ as string, (params.version as string) || '1.0.0'); break;
    case 'status': status(); break;
    default: console.log('Usage: /lab <status|ship|triage|analyze>');
  }
}

main();
