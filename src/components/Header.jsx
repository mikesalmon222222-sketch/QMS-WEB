import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Core Values', href: '/core-values' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
    { name: 'About Us', href: '/about' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="header-modern sticky top-0 z-50">
      <div className="container">
        <div className="flex-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/quantum-logo.svg" 
                alt="Quantum Concierge Services Logo" 
                className="h-10 w-auto hover:scale-105 transition-transform duration-200"
              />
              <span className="ml-3 text-xl font-bold text-secondary-800 hidden lg:block">
                Quantum Concierge Services
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile menu button */}
          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              className="btn btn-primary hidden sm:inline-flex"
            >
              Request a Quote
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-xl text-secondary-600 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-1 bg-white rounded-xl p-4 shadow-xl mt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn btn-primary mt-3"
              >
                Request a Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header