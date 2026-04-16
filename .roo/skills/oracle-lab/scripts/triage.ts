import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'fs';
import { join, basename } from 'path';

const INBOX_DIR = 'ψ/inbox/signals';
const LAB_DIR = 'ψ/lab';

async function triageSignals() {
  console.log('📡 Scanning Oracle Signal Inbox...');
  
  if (!existsSync(INBOX_DIR)) {
    console.error(`❌ Inbox directory not found: ${INBOX_DIR}`);
    return;
  }

  const signals = readdirSync(INBOX_DIR).filter(f => f.startsWith('SIG-') && f.endsWith('.md'));
  
  if (signals.length === 0) {
    console.log('✅ No new signals to triage.');
    return;
  }

  for (const signalFile of signals) {
    const signalPath = join(INBOX_DIR, signalFile);
    const content = readFileSync(signalPath, 'utf8');
    
    // Simple regex to find name for directory
    const titleMatch = content.match(/# Oracle Signal: (.*)/);
    const title = titleMatch ? titleMatch[1].trim() : 'untitled-signal';
    const slug = title.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const projectDir = join(LAB_DIR, slug);

    console.log(`🔍 Triaging: ${signalFile} -> [${title}]`);

    if (existsSync(projectDir)) {
      console.log(`⚠️ Project directory already exists: ${projectDir}. Skipping incubation.`);
      continue;
    }

    // Phase 2: Incubation (The Sandbox)
    console.log(`🧪 Incubating: Creating project at ${projectDir}`);
    mkdirSync(projectDir, { recursive: true });
    
    // Initialize with standard DRD and Signal reference
    const drdContent = `# Design Requirement Document (DRD): ${title}\n\n**Signal Reference**: ${signalFile}\n**Status**: Incubating\n\n## Summary\nCaptured from Signal: ${signalFile}\n\n> "The architecture must be strong enough to hold shape, but flexible enough to contain the void." 🟦`;
    
    writeFileSync(join(projectDir, 'DRD.md'), drdContent);
    writeFileSync(join(projectDir, 'STATUS.md'), `# Status: Incubating\n\n- [ ] Initial Signal Triage\n- [ ] Research & Trace\n- [ ] Draft Implementation\n- [ ] Validation`);
    
    console.log(`✅ Success: ${signalFile} escalated to ${slug}`);
  }
}

triageSignals().catch(err => {
  console.error('❌ Triage failed:', err);
  process.exit(1);
});
