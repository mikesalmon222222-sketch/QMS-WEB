function Footer() {
  const currentYear = new Date().getFullYear()

  const verificationLogos = [
    { name: 'BBB', href: '#', alt: 'Better Business Bureau' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jack-baker-469a82361/', alt: 'LinkedIn Verified' },
    { name: 'D-U-N-S', href: 'https://www.dnb.com/duns-number/lookup.html', alt: 'Dun & Bradstreet' },
    { name: 'GovTribe', href: '#', alt: 'GovTribe Verified' },
  ]

  return (
    <footer className="footer-modern">
      <div className="container">
        <div className="grid grid-4">
          {/* Company Logo */}
          <div className="footer-section">
            <div className="flex items-center mb-4">
              <img 
                src="/quantum-logo.svg" 
                alt="Quantum Concierge Services Logo" 
                className="h-8 w-auto mr-3 hover:scale-105 transition-transform duration-200"
              />
              <span className="text-lg font-bold text-white">
                Quantum Concierge Services
              </span>
            </div>
            <p className="text-secondary-300">
              Professional procurement solutions for government and commercial clients with integrity, innovation, and excellence.
            </p>
          </div>

          {/* Services Overview */}
          <div className="footer-section">
            <h3 className="footer-title">Our Services</h3>
            <div className="flex flex-col space-y-1">
              <span className="text-secondary-400 text-sm">Government Contracting</span>
              <span className="text-secondary-400 text-sm">Supply Chain Management</span>
              <span className="text-secondary-400 text-sm">Procurement Consulting</span>
              <span className="text-secondary-400 text-sm">Contract-Ready Support</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-primary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:joe.root@quantumsrv.com" className="footer-link">
                  joe.root@quantumsrv.com
                </a>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-primary-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+18592872983" className="footer-link">
                  +1 859-287-2983
                </a>
              </div>
            </div>
          </div>

          {/* Verification Logos */}
          <div className="footer-section">
            <h3 className="footer-title">Verifications</h3>
            <div className="grid grid-cols-2 gap-2">
              {verificationLogos.map((logo) => (
                <a
                  key={logo.name}
                  href={logo.href}
                  target={logo.href !== '#' ? '_blank' : '_self'}
                  rel={logo.href !== '#' ? 'noopener noreferrer' : undefined}
                  className="verification-badge"
                  title={logo.alt}
                >
                  {logo.name}
                </a>
              ))}
            </div>
            <div className="mt-4 flex space-x-3">
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors cursor-pointer">
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </div>
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors cursor-pointer">
                <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-700 mt-12 pt-8 text-center">
          <p className="text-secondary-400">
            &copy; {currentYear} Quantum Concierge Services. All rights reserved. | 
            <span className="ml-2 text-primary-400">Professional Procurement Excellence</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer