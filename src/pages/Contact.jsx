import { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // EmailJS configuration from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_default'
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_default'
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_default'
      
      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone || 'Not provided',
        message: formData.message,
        to_email_primary: import.meta.env.VITE_PRIMARY_EMAIL || 'joe.root@quantumsrv.com',
        to_email_secondary: import.meta.env.VITE_SECONDARY_EMAIL || 'jack.baker@quantumsrv.com',
        subject: `Quote Request from ${formData.name}`,
        formatted_message: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}

---
This request was submitted through the Quantum Concierge Services website.
        `
      }

      // Initialize EmailJS if not already done
      if (publicKey !== 'public_key_default') {
        emailjs.init(publicKey)
        
        // Send email using EmailJS
        const result = await emailjs.send(serviceId, templateId, templateParams)
        console.log('Email sent successfully:', result)
        
        // Show success message
        setSubmitStatus('success')
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          })
          setSubmitStatus(null)
        }, 5000)
      } else {
        // Fallback to mailto if EmailJS not configured
        console.warn('EmailJS not configured, falling back to mailto')
        const subject = `Quote Request from ${formData.name}`
        const body = templateParams.formatted_message
        const mailtoLinkPrimary = `mailto:joe.root@quantumsrv.com?cc=jack.baker@quantumsrv.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        
        window.open(mailtoLinkPrimary, '_blank')
        setSubmitStatus('success')
        
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          })
          setSubmitStatus(null)
        }, 5000)
      }
      
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="section-modern section-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="section-title">
            Contact Us
          </h1>
          <p className="section-subtitle">
            Ready to streamline your procurement process? Get in touch with our team to discuss your specific needs and receive a customized quote.
          </p>
        </div>

        <div className="grid grid-2">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-secondary-800 mb-6">Request a Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                  Phone <span className="text-secondary-400">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                  placeholder="Please describe your procurement needs, including types of products, quantities, timelines, and any specific requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-primary-700 disabled:bg-primary-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Send Quote Request
                  </>
                )}
              </button>
            </form>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-emerald-700 font-medium">
                    Your request has been submitted successfully! Our team will contact you shortly.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.864-.833-2.634 0L4.168 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <p className="text-red-700 font-medium">
                    There was an error submitting your request. Please try again or contact us directly at joe.root@quantumsrv.com
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 text-sm text-secondary-600">
              <p>* Required fields</p>
              <p className="mt-2">Your request will be automatically delivered to both joe.root@quantumsrv.com and jack.baker@quantumsrv.com for fastest response.</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-secondary-800 mb-6">Direct Contact</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-800">Joe Root</h3>
                    <p className="text-primary-600 font-medium">Manager Procurement</p>
                    <p className="text-secondary-600 mt-1">Your primary point of contact for all procurement needs</p>
                  </div>
                </div>

                <div className="flex items-center pl-14">
                  <svg className="h-5 w-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a 
                    href="mailto:joe.root@quantumsrv.com"
                    className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    joe.root@quantumsrv.com
                  </a>
                </div>

                <div className="flex items-center pl-14">
                  <svg className="h-5 w-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a 
                    href="tel:+18592872983"
                    className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
                  >
                    +1 859-287-2983
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-secondary-800 mb-6">Business Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-secondary-600">Monday - Friday</span>
                  <span className="text-secondary-800 font-medium">8:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600">Saturday</span>
                  <span className="text-secondary-800 font-medium">9:00 AM - 2:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-secondary-600">Sunday</span>
                  <span className="text-secondary-800 font-medium">Closed</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-primary-700">
                  <strong>Emergency Procurement:</strong> For urgent government contract requirements, we provide 24/7 emergency support. Contact Joe directly for immediate assistance.
                </p>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-primary-600 text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Response Guarantee</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="h-6 w-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Email inquiries: Within 2 hours</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Phone calls: Answered live or returned within 1 hour</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-6 w-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                  <span>Quote requests: Delivered within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">
              What to Include in Your Request
            </h2>
            <p className="text-lg text-secondary-600">
              Help us serve you better by providing as much detail as possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary-800 mb-2">Product Details</h3>
              <p className="text-secondary-600 text-sm">Specific items needed, quantities, specifications, and any brand preferences</p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-4 8a3 3 0 01-3-3V8a3 3 0 013-3h4a3 3 0 013 3v4a3 3 0 01-3 3m-4 0a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary-800 mb-2">Timeline & Budget</h3>
              <p className="text-secondary-600 text-sm">Delivery deadlines, budget constraints, and any flexible parameters</p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary-800 mb-2">Special Requirements</h3>
              <p className="text-secondary-600 text-sm">Government compliance needs, certifications, or delivery location preferences</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact