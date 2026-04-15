# Code Snippets: Arra Oracle v2

Key implementation patterns from the Arra Oracle v2 codebase.

## 1. MCP Tool Registration (`src/index.ts`)

How tools are exposed to the Model Context Protocol:

```typescript
this.server.setRequestHandler(ListToolsRequestSchema, async () => {
  const allTools = [
    // Meta-documentation tool
    {
      name: '____IMPORTANT',
      description: `ORACLE WORKFLOW GUIDE (v${this.version})...`,
      inputSchema: { type: 'object', properties: {} }
    },
    searchToolDef,
    readToolDef,
    learnToolDef,
    // ... more tools
  ];

  let tools = allTools.filter(t => !this.disabledTools.has(t.name));
  return { tools };
});
```

## 2. Hono API Routes (`src/server.ts`)

Modern, type-safe routing using Hono:

```typescript
const app = new Hono();

// CORS & Security
app.use('*', cors({ origin: (origin) => { ... } }));

// Modular Route Registration
registerAuthRoutes(app);
registerHealthRoutes(app);
registerSearchRoutes(app);
// ...
```

## 3. Database Schema: "Nothing is Deleted" (`src/db/schema.ts`)

Preserving history via pointers:

```typescript
export const oracleDocuments = sqliteTable('oracle_documents', {
  id: text('id').primaryKey(),
  type: text('type').notNull(),
  sourceFile: text('source_file').notNull(),
  // ...
  supersededBy: text('superseded_by'),      // ID of newer document
  supersededAt: integer('superseded_at'),   // When it was superseded
  supersededReason: text('superseded_reason'), // Why
});
```

## 4. Trace Log: Discovery Dig Points (`src/db/schema.ts`)

Capturing structural context from a discovery session:

```typescript
export const traceLog = sqliteTable('trace_log', {
  traceId: text('trace_id').unique().notNull(),
  query: text('query').notNull(),
  // Dig Points (JSON arrays)
  foundFiles: text('found_files'),            // [{path, type, matchReason, confidence}]
  foundCommits: text('found_commits'),        // [{hash, shortHash, date, message}]
  foundIssues: text('found_issues'),          // [{number, title, state, url}]
});
```

## 5. Graceful Shutdown Handler (`src/server.ts`)

Managing resource cleanup during process termination:

```typescript
registerSignalHandlers(async () => {
  console.log('\n🔮 Shutting down gracefully...');
  await performGracefulShutdown({
    resources: [
      { close: () => { closeDb(); return Promise.resolve(); } }
    ]
  });
  removePidFile();
});
```
