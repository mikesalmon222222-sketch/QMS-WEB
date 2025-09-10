// API utility functions for QMS frontend

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

class ApiError extends Error {
  constructor(message, status, details) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.details = details;
  }
}

// Generic API request function
async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  // Add request body if provided
  if (options.body && typeof options.body === 'object') {
    config.body = JSON.stringify(options.body);
  }

  try {
    console.log(`🔄 API Request: ${config.method || 'GET'} ${url}`);
    
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new ApiError(
        data.error || 'API request failed',
        response.status,
        data.details
      );
    }

    console.log('✅ API Response:', data);
    return data;
    
  } catch (error) {
    console.error('❌ API Error:', error);
    
    if (error instanceof ApiError) {
      throw error;
    }
    
    // Handle network errors
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new ApiError(
        'Unable to connect to the server. Please check your internet connection.',
        0
      );
    }
    
    throw new ApiError('An unexpected error occurred', 500);
  }
}

// Quote request API
export async function submitQuoteRequest(formData) {
  return apiRequest('/api/quote', {
    method: 'POST',
    body: {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '',
      message: formData.message,
    },
  });
}

// Contact form API  
export async function submitContactForm(formData) {
  return apiRequest('/api/contact', {
    method: 'POST',
    body: {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '',
      subject: formData.subject || '',
      message: formData.message,
    },
  });
}

// Test email API
export async function sendTestEmail(email) {
  return apiRequest('/api/test-email', {
    method: 'POST',
    body: { email },
  });
}

// Check email service status
export async function checkEmailServiceStatus() {
  return apiRequest('/api/status');
}

// Check server health
export async function checkServerHealth() {
  return apiRequest('/health');
}

// Get API information
export async function getApiInfo() {
  return apiRequest('/api');
}

// Error handling utilities
export function getErrorMessage(error) {
  if (error instanceof ApiError) {
    return error.message;
  }
  
  if (error.message) {
    return error.message;
  }
  
  return 'An unexpected error occurred. Please try again.';
}

export function isNetworkError(error) {
  return error instanceof ApiError && error.status === 0;
}

export function isValidationError(error) {
  return error instanceof ApiError && error.status === 400;
}

export function isServerError(error) {
  return error instanceof ApiError && error.status >= 500;
}

// Form validation utilities
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone) {
  if (!phone || phone.trim() === '') return true; // Optional field
  const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-()]/g, ''));
}

export function validateName(name) {
  return name && name.trim().length >= 2 && name.trim().length <= 100;
}

export function validateMessage(message) {
  return message && message.trim().length >= 10 && message.trim().length <= 2000;
}

// Form data sanitization
export function sanitizeFormData(data) {
  const sanitized = {};
  
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      // Trim whitespace and remove potentially dangerous characters
      sanitized[key] = value.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    } else {
      sanitized[key] = value;
    }
  }
  
  return sanitized;
}

// Export ApiError for use in components
export { ApiError };