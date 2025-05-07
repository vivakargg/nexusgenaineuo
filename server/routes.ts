import type { Express } from "express";
import { createServer, type Server } from "http";
import Stripe from "stripe";
import { storage } from "./storage";
import { contactFormSchema, createLeadSchema } from "@shared/schema";
import { z } from "zod";
import { initializeEmailService, sendLeadNotificationEmail, sendLeadConfirmationEmail } from './services/email.service';

// Initialize Stripe if secret key is available
if (!process.env.STRIPE_SECRET_KEY) {
  console.warn('Missing Stripe secret key. Payment functionality will be disabled.');
}

// Initialize SendGrid if API key is available
if (!process.env.SENDGRID_API_KEY) {
  console.warn('Missing SendGrid API key. Email notifications will be disabled.');
} else {
  initializeEmailService(process.env.SENDGRID_API_KEY);
}

// Initialize Stripe if secret key is available
const stripe = process.env.STRIPE_SECRET_KEY ? new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-04-30.basil" as const,
}) : null;

export async function registerRoutes(app: Express): Promise<Server> {
  // API prefix
  const apiPrefix = "/api";

  // Contact form submission
  app.post(`${apiPrefix}/contact`, async (req, res) => {
    try {
      const formData = contactFormSchema.parse(req.body);
      const lead = await storage.createLead(formData);
      
      // Send email notifications
      if (process.env.SENDGRID_API_KEY) {
        try {
          // Send notification to founder
          await sendLeadNotificationEmail(lead);
          
          // Send confirmation to lead
          await sendLeadConfirmationEmail(lead);
        } catch (emailError) {
          console.error('Error sending emails:', emailError);
          // Continue with response even if email fails
        }
      }
      
      res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully",
        leadId: lead.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      console.error('Error submitting contact form:', error);
      res.status(500).json({ error: 'Failed to submit contact form' });
    }
  });

  // Stripe payment intent for checkout
  app.post(`${apiPrefix}/create-payment-intent`, async (req, res) => {
    try {
      const { planId, amount, currency = "usd" } = req.body;
      
      if (!amount) {
        return res.status(400).json({ error: "Amount is required for non-enterprise plans" });
      }
      
      if (!stripe) {
        return res.status(503).json({ error: "Payment service unavailable" });
      }

      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency,
        metadata: {
          planId,
        },
      });

      res.json({ 
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
      });
    } catch (error: any) {
      console.error("Error creating payment intent:", error);
      res
        .status(500)
        .json({ error: "Error creating payment intent: " + error.message });
    }
  });

  // Subscribe to a service package or request information
  app.post(`${apiPrefix}/subscribe`, async (req, res) => {
    try {
      const { name, email, phone, company, planId, message, additionalInfo } = req.body;

      const leadData = createLeadSchema.parse({
        name,
        email,
        phone,
        service: planId,
        message: message || additionalInfo || `Registration request for plan: ${planId} | Company: ${company}`,
      });

      const lead = await storage.createLead(leadData);
      
      // Send email notifications
      if (process.env.SENDGRID_API_KEY) {
        try {
          // Send notification to founder
          await sendLeadNotificationEmail(lead);
          
          // Send confirmation to lead
          await sendLeadConfirmationEmail(lead);
        } catch (emailError) {
          console.error('Error sending subscription emails:', emailError);
          // Continue with response even if email fails
        }
      }
      
      // Different response messages based on plan type
      let responseMessage = "Registration request submitted successfully";
      if (planId === 'free-poc') {
        responseMessage = "Your Free POC application has been submitted successfully";
      } else if (planId === 'enterprise') {
        responseMessage = "Your Enterprise plan inquiry has been submitted successfully";
      }
      
      res.status(201).json({ 
        success: true, 
        message: responseMessage,
        leadId: lead.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      console.error('Error processing registration:', error);
      res.status(500).json({ error: 'Failed to process your request' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
