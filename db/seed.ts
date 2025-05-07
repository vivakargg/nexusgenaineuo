import { db } from "./index";
import * as schema from "@shared/schema";

async function seed() {
  try {
    console.log("🌱 Starting database seeding...");

    // Create initial admin user (only if users table is empty)
    const existingUsers = await db.query.users.findMany({
      limit: 1
    });

    if (existingUsers.length === 0) {
      console.log("Creating default admin user...");
      
      await db.insert(schema.users).values({
        username: "admin",
        // In production, use a properly hashed password
        password: "admin123" 
      });
      
      console.log("✅ Admin user created");
    } else {
      console.log("⏩ Skipping user creation as users already exist");
    }

    // Check if leads table is empty before seeding sample data
    const existingLeads = await db.query.leads.findMany({
      limit: 1
    });

    if (existingLeads.length === 0) {
      console.log("Creating example leads...");
      
      // Only seed in development environment
      if (process.env.NODE_ENV !== "production") {
        const exampleLeads = [
          {
            name: "John Smith",
            email: "john@example.com",
            phone: "1234567890",
            service: "ai-development",
            message: "I'm interested in implementing a custom LLM solution for our customer service department.",
          },
          {
            name: "Emily Johnson",
            email: "emily@example.com",
            phone: "9876543210",
            service: "cloud",
            message: "We need help migrating our ML models to a scalable cloud infrastructure.",
          },
        ];

        for (const lead of exampleLeads) {
          await db.insert(schema.leads).values(lead);
        }
        
        console.log("✅ Example leads created");
      }
    } else {
      console.log("⏩ Skipping lead creation as leads already exist");
    }

    console.log("✅ Database seeding completed successfully");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  }
}

seed();
