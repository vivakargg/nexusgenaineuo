import fs from 'fs/promises';
import path from 'path';

async function prepareForVercel() {
  const serverDir = path.join(process.cwd(), 'dist', 'server');
  const clientDir = path.join(process.cwd(), 'dist', 'client');
  
  // Ensure server files are in the correct location
  await fs.cp(serverDir, path.join(process.cwd(), 'dist'), { recursive: true });
  
  // Create a simple server file that serves the static files
  const serverContent = `
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { handler } from './server/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Serve static files from the client build
app.use(express.static(path.join(__dirname, 'client')));

// Use the main application handler
app.use(handler);

export default app;
`;

  await fs.writeFile(path.join(process.cwd(), 'dist', 'index.js'), serverContent);
}

prepareForVercel().catch(console.error); 