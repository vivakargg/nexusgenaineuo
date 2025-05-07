import { Router } from 'express';
import { z } from 'zod';
import { sendLeadNotification } from '../../services/emailService';

const router = Router();

const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z.string().optional(),
  planId: z.string().optional(),
});

router.post('/api/leads', async (req, res) => {
  try {
    const data = leadSchema.parse(req.body);
    
    // Store lead in database (you can add this later)
    // await db.leads.create({ data });
    
    // Send email notification
    await sendLeadNotification(data);
    
    res.status(200).json({ message: 'Lead submitted successfully' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ 
        message: 'Validation error', 
        errors: error.errors 
      });
      return;
    }
    
    console.error('Error processing lead:', error);
    res.status(500).json({ message: 'Failed to process lead submission' });
  }
});

export default router; 