import 'dotenv/config';
import express from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./vite";

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Initialize app and export handler
const initApp = async () => {
  // Configure routes
  await registerRoutes(app);

  // Serve static files in production
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  }

  return app;
};

// Export the handler promise
export const handler = initApp();

// Start the server if not in production (i.e., not on Vercel)
if (process.env.NODE_ENV !== "production") {
  initApp().then((app) => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  });
}
