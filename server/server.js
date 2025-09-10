const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const emailRoutes = require('./routes/email');
const apiRoutes = require('./routes/api');
const { validateEnvironment } = require('./middleware/validation');

// Validate environment variables on startup
try {
  console.log('🔍 Checking environment configuration...');
  
  // Check if we have minimum required variables for development
  const hasMinimumConfig = process.env.SMTP_HOST && process.env.FROM_EMAIL && process.env.TO_EMAIL;
  
  if (!hasMinimumConfig) {
    console.log('⚠️  Missing email configuration. Server will start but email features may not work.');
    console.log('   Please set SMTP_HOST, FROM_EMAIL, and TO_EMAIL in your .env file');
    console.log('   See .env.example for reference');
  } else {
    console.log('✅ Email configuration found');
  }
} catch (error) {
  console.log('⚠️  Environment validation failed:', error.message);
}

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable CSP for development
}));

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://quantumconciergeservices.com', 'https://www.quantumconciergeservices.com']
    : ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
  credentials: true,
  optionsSuccessStatus: 200
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.',
    retryAfter: 15 * 60 // 15 minutes in seconds
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Stricter rate limiting for email endpoints
const emailLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // limit each IP to 10 email requests per hour
  message: {
    error: 'Too many email requests from this IP, please try again later.',
    retryAfter: 60 * 60 // 1 hour in seconds
  },
});

app.use(limiter);
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'QMS Email API',
    version: '1.0.0'
  });
});

// API routes
app.use('/api', apiRoutes);
app.use('/api', emailLimiter, emailRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  
  const isDevelopment = process.env.NODE_ENV !== 'production';
  
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal server error',
    ...(isDevelopment && { stack: err.stack })
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found',
    path: req.originalUrl
  });
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

app.listen(PORT, () => {
  console.log(`🚀 QMS Email API Server running on port ${PORT}`);
  console.log(`📧 Email service configured with SMTP: ${process.env.SMTP_HOST}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
});

module.exports = app;