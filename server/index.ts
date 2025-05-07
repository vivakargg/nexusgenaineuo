import 'dotenv/config';
import express from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./vite";
import path from 'path';

// Create Express app
const app = express();

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(process.cwd(), 'dist', 'client')));
}

// Register API routes
registerRoutes(app);

// Catch-all route for SPA
app.get('*', (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.join(process.cwd(), 'dist', 'client', 'index.html'));
  } else {
    res.send('Server running in development mode');
  }
});

// Export the app directly
export default app;

// Start server if not in production
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}
