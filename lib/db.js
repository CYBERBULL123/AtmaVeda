import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

// Ensure the data directory exists
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

const dbPath = path.join(dataDir, 'cache.db');
const db = new Database(dbPath);

// Create the aiCache table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS aiCache (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    part TEXT NOT NULL,
    language TEXT NOT NULL,
    content TEXT NOT NULL,
    UNIQUE(part, language)
  );
`);

export default db;
