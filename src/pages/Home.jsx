import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-modern">
        <div className="container">
          <div className="hero-content animate-fade-up">
            <h1 className="hero-title">
              Professional Procurement Solutions
            </h1>
            <p className="hero-subtitle">
              Streamlining government and commercial procurement with integrity, innovation, and customer-centric service that exceeds expectations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-secondary">
                Request a Quote
              </Link>
              <Link to="/services" className="btn btn-outline">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Government Procurement Section */}
      <section className="section-modern section-white">
        <div className="container">
          <div className="grid grid-2 items-center">
            <div className="animate-slide-left">
              <h2 className="section-title text-left">
                Government Procurement Excellence
              </h2>
              <p className="mb-4">
                With decades of experience in government contracting, we understand the complexities of public sector procurement. Our team navigates regulations, compliance requirements, and tight timelines to deliver results that exceed expectations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-secondary-700 font-medium">Federal, State, and Local Government Contracts</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-secondary-700 font-medium">Compliance with All Procurement Regulations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-secondary-700 font-medium">Fast Turnaround Times</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-secondary-700 font-medium">Competitive Pricing Solutions</span>
                </div>
              </div>
            </div>
            <div className="card text-center">
              <div className="card-icon mx-auto">
                <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-secondary-800 mb-3">Contract-Ready Support</h3>
              <p className="text-secondary-600">
                Our experienced team ensures your procurement needs are met with professionalism and attention to detail that government contracts demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-modern section-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Trusted by Organizations Nationwide
            </h2>
            <p className="section-subtitle">
              Our commitment to excellence has earned us the trust of clients across various sectors
            </p>
          </div>
          
          <div className="grid grid-4">
            <div className="stats-card">
              <span className="stats-number">15,000+</span>
              <span className="stats-label">Eco-Friendly Products</span>
            </div>
            <div className="stats-card">
              <span className="stats-number">100%</span>
              <span className="stats-label">Client Satisfaction</span>
            </div>
            <div className="stats-card">
              <span className="stats-number">24/7</span>
              <span className="stats-label">Customer Support</span>
            </div>
            <div className="stats-card">
              <span className="stats-number animate-pulse">Fast</span>
              <span className="stats-label">Delivery Times</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-modern section-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle">
              Comprehensive procurement solutions tailored to your organization's needs
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="card text-center">
              <div className="card-icon mx-auto">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Government Contracting</h3>
              <p className="text-secondary-600">
                Expert navigation of federal, state, and local procurement processes with full regulatory compliance.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="card-icon mx-auto">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Supply Chain Management</h3>
              <p className="text-secondary-600">
                Streamlined supply chain solutions ensuring timely delivery and cost-effective procurement.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="card-icon mx-auto">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Consulting Services</h3>
              <p className="text-secondary-600">
                Strategic procurement consulting to optimize your processes and maximize value.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-modern section-primary">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Streamline Your Procurement?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today to discuss how we can support your organization's procurement needs with our proven expertise and commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-secondary">
              Get Started Today
            </Link>
            <Link to="/team" className="btn btn-outline">
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home