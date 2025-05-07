import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY environment variable is required');
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

type LeadNotificationData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message?: string;
  planId?: string;
};

export async function sendLeadNotification(data: LeadNotificationData) {
  const planName = data.planId ? `Plan: ${data.planId}\n` : '';
  
  const msg = {
    to: process.env.NOTIFICATION_EMAIL || 'your-email@example.com', // Change this to your email
    from: process.env.FROM_EMAIL || 'noreply@nexusgenai.com', // Change this to your verified sender
    subject: `New Lead: ${data.name} from ${data.company}`,
    text: `
New lead submission:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company}
${planName}
Message: ${data.message || 'No message provided'}
    `,
    html: `
      <h2>New Lead Submission</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${data.phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Company</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${data.company}</td>
        </tr>
        ${data.planId ? `
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Plan</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${data.planId}</td>
        </tr>
        ` : ''}
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Message</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${data.message || 'No message provided'}</td>
        </tr>
      </table>
    `
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email notification');
  }
} 