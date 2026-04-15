
import { Database } from 'bun:sqlite';

const dbPath = 'C:/Users/sitth/oracle-v2/oracle.db';
const sqlite = new Database(dbPath);

console.log('--- LATEST MESSAGES ---');
const messages = sqlite.query('SELECT id, thread_id, role, author, content, created_at FROM forum_messages ORDER BY created_at DESC LIMIT 5').all();
console.log(JSON.stringify(messages, null, 2));

console.log('\n--- THREAD STATUS ---');
const threads = sqlite.query('SELECT id, title, status, updated_at FROM forum_threads ORDER BY updated_at DESC LIMIT 5').all();
console.log(JSON.stringify(threads, null, 2));

sqlite.close();
