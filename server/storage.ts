import { db } from "@db";
import { leads } from "@shared/schema";
import type { CreateLead, Lead } from "@shared/schema";

class Storage {
  async createLead(leadData: CreateLead): Promise<Lead> {
    const [newLead] = await db.insert(leads).values(leadData).returning();
    return newLead;
  }

  async getLeadById(id: number): Promise<Lead | null> {
    const lead = await db.query.leads.findFirst({
      where: (leads, { eq }) => eq(leads.id, id),
    });
    return lead || null;
  }

  async getAllLeads(): Promise<Lead[]> {
    const allLeads = await db.query.leads.findMany({
      orderBy: (leads, { desc }) => desc(leads.createdAt),
    });
    return allLeads;
  }
}

export const storage = new Storage();
