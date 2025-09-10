const express = require('express');
const emailService = require('../utils/emailService');
const { 
  validateQuoteRequest,
  validateContactForm, 
  validateTestEmail,
  sanitizeInput
} = require('../middleware/validation');

const router = express.Router();

// Quote request endpoint
router.post('/quote', sanitizeInput, validateQuoteRequest, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    console.log(`📬 Processing quote request from ${name} (${email})`);
    
    const result = await emailService.sendQuoteRequest({
      name,
      email,
      phone,
      message
    });
    
    res.json({
      success: true,
      message: 'Quote request sent successfully',
      messageId: result.messageId,
      recipients: result.recipients
    });
    
  } catch (error) {
    console.error('❌ Quote request error:', error.message);
    
    res.status(500).json({
      success: false,
      error: 'Failed to send quote request',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// General contact form endpoint
router.post('/contact', sanitizeInput, validateContactForm, async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    
    console.log(`📬 Processing contact form from ${name} (${email})`);
    
    const result = await emailService.sendContactForm({
      name,
      email,
      phone,
      subject,
      message
    });
    
    res.json({
      success: true,
      message: 'Contact form submitted successfully',
      messageId: result.messageId,
      recipients: result.recipients
    });
    
  } catch (error) {
    console.error('❌ Contact form error:', error.message);
    
    res.status(500).json({
      success: false,
      error: 'Failed to send contact form',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Test email endpoint
router.post('/test-email', sanitizeInput, validateTestEmail, async (req, res) => {
  try {
    const { email } = req.body;
    
    console.log(`🧪 Sending test email to ${email}`);
    
    const result = await emailService.sendTestEmail(email);
    
    res.json({
      success: true,
      message: 'Test email sent successfully',
      messageId: result.messageId,
      recipient: result.recipient
    });
    
  } catch (error) {
    console.error('❌ Test email error:', error.message);
    
    res.status(500).json({
      success: false,
      error: 'Failed to send test email',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Email service status endpoint
router.get('/status', async (req, res) => {
  try {
    const verification = await emailService.verifyConnection();
    
    res.json({
      success: true,
      status: 'operational',
      emailService: verification,
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development'
    });
    
  } catch (error) {
    console.error('❌ Email service status error:', error.message);
    
    res.status(500).json({
      success: false,
      status: 'error',
      error: 'Email service unavailable',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;