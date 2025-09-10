const express = require('express');
const emailService = require('../utils/emailService');

const router = express.Router();

// API Information endpoint
router.get('/', (req, res) => {
  res.json({
    service: 'Quantum Concierge Services API',
    version: '1.0.0',
    description: 'Professional procurement solutions email API',
    endpoints: {
      health: '/health',
      email: {
        quote: 'POST /api/quote',
        contact: 'POST /api/contact',
        test: 'POST /api/test-email',
        status: 'GET /api/status'
      }
    },
    documentation: 'https://quantumconciergeservices.com/api-docs',
    timestamp: new Date().toISOString()
  });
});

// System information endpoint (development only)
router.get('/info', (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(404).json({
      success: false,
      error: 'Endpoint not available in production'
    });
  }
  
  res.json({
    success: true,
    system: {
      nodeVersion: process.version,
      environment: process.env.NODE_ENV || 'development',
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      platform: process.platform,
      pid: process.pid
    },
    email: {
      smtpHost: process.env.SMTP_HOST,
      smtpPort: process.env.SMTP_PORT,
      fromEmail: process.env.FROM_EMAIL,
      toEmail: process.env.TO_EMAIL
    },
    timestamp: new Date().toISOString()
  });
});

module.exports = router;