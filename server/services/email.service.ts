import sgMail from '@sendgrid/mail';
import { Lead } from '../../shared/schema';

// Founder information
const FOUNDER_INFO = {
  name: 'Vivakar Gazzela',
  email: 'vivakar@nextgenainova.com',
  phone: '9160484986',
  location: 'Odisha, Gajapati, India',
};

// Will be initialized when the API key is set
let isInitialized = false;

/**
 * Initialize the SendGrid service with API key
 */
export function initializeEmailService(apiKey: string | undefined): boolean {
  if (!apiKey) {
    console.warn('SendGrid API key not provided. Email notifications will be disabled.');
    return false;
  }
  
  try {
    sgMail.setApiKey(apiKey);
    isInitialized = true;
    return true;
  } catch (error) {
    console.error('Failed to initialize SendGrid:', error);
    return false;
  }
}

/**
 * Send a notification email to the founder when a new lead is created
 */
export async function sendLeadNotificationEmail(lead: Lead): Promise<boolean> {
  if (!isInitialized) {
    console.warn('Email service not initialized. Skipping notification email.');
    return false;
  }

  try {
    const msg = {
      to: FOUNDER_INFO.email,
      from: FOUNDER_INFO.email, // Use the same verified sender
      subject: `New ${lead.service} Inquiry from ${lead.name}`,
      html: `
        <h2>New Lead Information</h2>
        <p><strong>Plan/Service:</strong> ${lead.service}</p>
        <p><strong>Name:</strong> ${lead.name}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Phone:</strong> ${lead.phone}</p>
        <p><strong>Message:</strong></p>
        <p>${lead.message || 'No additional message provided.'}</p>
        <p><strong>Date:</strong> ${lead.createdAt.toLocaleString()}</p>
        <hr />
        <p>Please respond to this inquiry as soon as possible.</p>
      `,
    };

    await sgMail.send(msg);
    console.log(`Notification email sent to ${FOUNDER_INFO.email} for lead ${lead.id}`);
    return true;
  } catch (error) {
    console.error('Error sending email notification:', error);
    return false;
  }
}

/**
 * Send a confirmation email to the lead
 */
export async function sendLeadConfirmationEmail(lead: Lead): Promise<boolean> {
  if (!isInitialized) {
    console.warn('Email service not initialized. Skipping confirmation email.');
    return false;
  }

  try {
    const msg = {
      to: lead.email,
      from: FOUNDER_INFO.email,
      subject: `Thank you for your interest in NextGenAiNova's ${lead.service} service`,
      html: `
        <h2>Thank You for Contacting NextGenAiNova</h2>
        <p>Dear ${lead.name},</p>
        <p>Thank you for your interest in our ${lead.service} service. We have received your inquiry and a member of our team will be in touch with you shortly.</p>
        <p>Here's a summary of the information you provided:</p>
        <ul>
          <li><strong>Service:</strong> ${lead.service}</li>
          <li><strong>Phone:</strong> ${lead.phone}</li>
          ${lead.message ? `<li><strong>Your message:</strong> ${lead.message}</li>` : ''}
        </ul>
        <p>If you have any urgent questions, please feel free to call us directly at ${FOUNDER_INFO.phone}.</p>
        <p>Best regards,</p>
        <p><strong>${FOUNDER_INFO.name}</strong><br>
        Founder, NextGenAiNova<br>
        ${FOUNDER_INFO.email}<br>
        ${FOUNDER_INFO.phone}</p>
      `,
    };

    await sgMail.send(msg);
    console.log(`Confirmation email sent to ${lead.email} for lead ${lead.id}`);
    return true;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return false;
  }
}