import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Core Values', href: '/core-values' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
    { name: 'About Us', href: '/about' },
  ]

  const verificationLogos = [
    { name: 'BBB', href: '#', alt: 'Better Business Bureau' },
    { name: 'LinkedIn', href: '#', alt: 'LinkedIn Verified' },
    { name: 'D-U-N-S', href: '#', alt: 'Dun & Bradstreet' },
    { name: 'GovTribe', href: '#', alt: 'GovTribe Verified' },
  ]

  return (
    <footer className="bg-secondary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Logo */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-primary-600 text-white px-3 py-2 rounded-lg font-bold text-lg">
                QCS
              </div>
              <span className="ml-2 text-lg font-bold">
                Quantum Concierge Services
              </span>
            </div>
            <p className="text-secondary-300 text-sm">
              Professional procurement solutions for government and commercial clients.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-secondary-300 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="text-secondary-300 space-y-2">
              <p>
                <a href="mailto:joe@quantumsrv.com" className="hover:text-white transition-colors duration-200">
                  joe@quantumsrv.com
                </a>
              </p>
              <p>
                <a href="tel:+18592872983" className="hover:text-white transition-colors duration-200">
                  +1 859-287-2983
                </a>
              </p>
            </div>
          </div>

          {/* Verification Logos */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Verifications</h3>
            <div className="grid grid-cols-2 gap-4">
              {verificationLogos.map((logo) => (
                <a
                  key={logo.name}
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary-700 hover:bg-secondary-600 p-3 rounded-lg flex items-center justify-center text-center transition-colors duration-200"
                  title={logo.alt}
                >
                  <span className="text-sm font-medium">{logo.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-300">
          <p>&copy; {currentYear} Quantum Concierge Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer