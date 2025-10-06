const nodemailer = require('nodemailer');
const fs = require('fs').promises;
const path = require('path');

class EmailService {
  constructor() {
    this.transporter = null;
    this.initializeTransporter();
  }

  initializeTransporter() {
    try {
      this.transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT) || 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        tls: {
          rejectUnauthorized: false
        }
      });

      console.log('📧 Email transporter initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize email transporter:', error.message);
    }
  }

  async verifyConnection() {
    try {
      if (!this.transporter) {
        throw new Error('Email transporter not initialized');
      }
      
      await this.transporter.verify();
      return { success: true, message: 'Email service connection verified' };
    } catch (error) {
      console.error('❌ Email verification failed:', error.message);
      return { success: false, error: error.message };
    }
  }

  async loadTemplate(templateName) {
    try {
      const templatePath = path.join(__dirname, '../templates', templateName);
      const template = await fs.readFile(templatePath, 'utf-8');
      return template;
    } catch (error) {
      console.error(`❌ Failed to load template ${templateName}:`, error.message);
      throw new Error(`Template ${templateName} not found`);
    }
  }

  replacePlaceholders(template, data) {
    let result = template;
    
    // Replace all placeholders in format {{key}}
    for (const [key, value] of Object.entries(data)) {
      const placeholder = new RegExp(`{{${key}}}`, 'g');
      result = result.replace(placeholder, value || '');
    }
    
    return result;
  }

  generatePlainText(htmlContent) {
    // Convert HTML to plain text (basic implementation)
    return htmlContent
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/\s+/g, ' ')
      .trim();
  }

  async sendQuoteRequest(formData) {
    try {
      const templateData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        message: formData.message,
        timestamp: new Date().toLocaleString(),
        subject: `Quote Request from ${formData.name}`,
      };

      // Load and process the quote email template
      const htmlTemplate = await this.loadTemplate('quote-email.html');
      const htmlContent = this.replacePlaceholders(htmlTemplate, templateData);
      const plainTextContent = this.generatePlainText(htmlContent);

      // Parse recipients
      const recipients = process.env.TO_EMAIL ? process.env.TO_EMAIL.split(',').map(email => email.trim()) : [];
      
      if (recipients.length === 0) {
        throw new Error('No recipient email addresses configured');
      }

      const mailOptions = {
        from: `"QMS Quote Request" <${process.env.FROM_EMAIL}>`,
        to: recipients.join(', '),
        subject: `Quote Request from ${formData.name}`,
        text: plainTextContent,
        html: htmlContent,
        replyTo: formData.email,
        headers: {
          'X-Priority': '3',
          'X-MSMail-Priority': 'Normal',
          'Importance': 'Normal'
        }
      };

      const result = await this.transporter.sendMail(mailOptions);
      
      console.log('✅ Quote request email sent successfully:', result.messageId);

      // Send confirmation email to customer
      await this.sendConfirmationEmail(formData, 'quote');

      return {
        success: true,
        messageId: result.messageId,
        recipients: recipients
      };
      
    } catch (error) {
      console.error('❌ Failed to send quote request email:', error.message);
      throw error;
    }
  }

  async sendContactForm(formData) {
    try {
      const templateData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Not provided',
        subject: formData.subject || 'General Contact',
        message: formData.message,
        timestamp: new Date().toLocaleString(),
      };

      // Load and process the contact email template
      const htmlTemplate = await this.loadTemplate('contact-email.html');
      const htmlContent = this.replacePlaceholders(htmlTemplate, templateData);
      const plainTextContent = this.generatePlainText(htmlContent);

      // Parse recipients
      const recipients = process.env.TO_EMAIL ? process.env.TO_EMAIL.split(',').map(email => email.trim()) : [];
      
      if (recipients.length === 0) {
        throw new Error('No recipient email addresses configured');
      }

      const mailOptions = {
        from: `"QMS Contact Form" <${process.env.FROM_EMAIL}>`,
        to: recipients.join(', '),
        subject: `Contact Form: ${formData.subject || 'General Inquiry'}`,
        text: plainTextContent,
        html: htmlContent,
        replyTo: formData.email,
        headers: {
          'X-Priority': '3',
          'X-MSMail-Priority': 'Normal',
          'Importance': 'Normal'
        }
      };

      const result = await this.transporter.sendMail(mailOptions);
      
      console.log('✅ Contact form email sent successfully:', result.messageId);

      // Send confirmation email to customer
      await this.sendConfirmationEmail(formData, 'contact');

      return {
        success: true,
        messageId: result.messageId,
        recipients: recipients
      };
      
    } catch (error) {
      console.error('❌ Failed to send contact form email:', error.message);
      throw error;
    }
  }

  async sendConfirmationEmail(formData, type) {
    try {
      const templateData = {
        name: formData.name,
        type: type === 'quote' ? 'quote request' : 'contact form',
        supportEmail: process.env.TO_EMAIL ? process.env.TO_EMAIL.split(',')[0].trim() : 'support@quantumconciergeservices.com',
        timestamp: new Date().toLocaleString(),
      };

      const htmlTemplate = await this.loadTemplate('confirmation-email.html');
      const htmlContent = this.replacePlaceholders(htmlTemplate, templateData);
      const plainTextContent = this.generatePlainText(htmlContent);

      const mailOptions = {
        from: `"Quantum Concierge Services" <${process.env.FROM_EMAIL}>`,
        to: formData.email,
        subject: `Thank you for your ${type === 'quote' ? 'quote request' : 'inquiry'} - QCS`,
        text: plainTextContent,
        html: htmlContent,
        headers: {
          'X-Priority': '3',
          'X-MSMail-Priority': 'Normal',
          'Importance': 'Normal'
        }
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log('✅ Confirmation email sent successfully:', result.messageId);

      return {
        success: true,
        messageId: result.messageId
      };
      
    } catch (error) {
      console.error('⚠️ Failed to send confirmation email:', error.message);
      // Don't throw error for confirmation email failure
      return {
        success: false,
        error: error.message
      };
    }
  }

  async sendTestEmail(testEmail) {
    try {
      const testData = {
        recipientEmail: testEmail,
        timestamp: new Date().toLocaleString(),
        serverInfo: `${process.env.SMTP_HOST}:${process.env.SMTP_PORT}`,
      };

      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>QMS Email Test</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #1e40af;">🧪 QMS Email Service Test</h2>
            <p>This is a test email from the Quantum Concierge Services email system.</p>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3>Test Details:</h3>
              <p><strong>Recipient:</strong> ${testData.recipientEmail}</p>
              <p><strong>Timestamp:</strong> ${testData.timestamp}</p>
              <p><strong>SMTP Server:</strong> ${testData.serverInfo}</p>
              <p><strong>Status:</strong> ✅ Email delivery successful!</p>
            </div>
            <p>If you received this email, the QMS email service is working correctly.</p>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px;">
              This is an automated test email from Quantum Concierge Services.<br>
              Please do not reply to this message.
            </p>
          </div>
        </body>
        </html>
      `;

      const plainTextContent = `
QMS Email Service Test

This is a test email from the Quantum Concierge Services email system.

Test Details:
- Recipient: ${testData.recipientEmail}
- Timestamp: ${testData.timestamp}
- SMTP Server: ${testData.serverInfo}
- Status: Email delivery successful!

If you received this email, the QMS email service is working correctly.

This is an automated test email from Quantum Concierge Services.
Please do not reply to this message.
      `;

      const mailOptions = {
        from: `"QMS Test Service" <${process.env.FROM_EMAIL}>`,
        to: testEmail,
        subject: '🧪 QMS Email Service Test',
        text: plainTextContent,
        html: htmlContent,
        headers: {
          'X-Priority': '3',
          'X-MSMail-Priority': 'Normal',
          'Importance': 'Normal',
          'X-QMS-Test': 'true'
        }
      };

      const result = await this.transporter.sendMail(mailOptions);
      
      console.log('✅ Test email sent successfully:', result.messageId);

      return {
        success: true,
        messageId: result.messageId,
        recipient: testEmail
      };
      
    } catch (error) {
      console.error('❌ Failed to send test email:', error.message);
      throw error;
    }
  }
}

module.exports = new EmailService();