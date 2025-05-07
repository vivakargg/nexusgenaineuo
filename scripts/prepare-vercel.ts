import fs from 'fs/promises';
import path from 'path';

async function prepareForVercel() {
  const serverDir = path.join(process.cwd(), 'dist', 'server');
  const clientDir = path.join(process.cwd(), 'dist', 'client');
  
  // Ensure server files are in the correct location
  await fs.cp(serverDir, path.join(process.cwd(), 'dist'), { recursive: true });
  
  // Create the Vercel entry point
  const serverContent = `
import app from './server/index.js';

// Export the Express app
export default app;
`;

  await fs.writeFile(path.join(process.cwd(), 'dist', 'index.js'), serverContent);
}

prepareForVercel().catch(console.error); 