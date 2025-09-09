import { Link } from 'react-router-dom'

function Services() {
  const services = [
    {
      title: 'Office Supplies',
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      description: 'Complete range of office supplies from pens and paper to specialized government forms and documentation supplies.',
      features: ['Writing Instruments', 'Paper Products', 'Filing Systems', 'Government Forms']
    },
    {
      title: 'Office Furniture',
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      description: 'Professional office furniture solutions including ergonomic chairs, desks, conference tables, and storage solutions.',
      features: ['Ergonomic Seating', 'Executive Desks', 'Conference Tables', 'Storage Solutions']
    },
    {
      title: 'Cleaning & Janitorial',
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      description: 'Comprehensive cleaning and janitorial supplies for maintaining professional environments in government and commercial facilities.',
      features: ['Cleaning Chemicals', 'Paper Products', 'Equipment & Tools', 'Safety Supplies']
    },
    {
      title: 'Technology Products',
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Latest technology solutions including computers, networking equipment, software licenses, and IT accessories for modern workplaces.',
      features: ['Computer Hardware', 'Networking Equipment', 'Software Licenses', 'IT Accessories']
    },
    {
      title: 'Eco-Friendly Products',
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      description: 'Over 15,000 environmentally sustainable products supporting your organization\'s green initiatives and sustainability goals.',
      features: ['Recycled Materials', 'Energy Efficient', 'Biodegradable Options', 'Green Certifications'],
      highlight: '15,000+ Items'
    },
    {
      title: 'Contract-Ready Support',
      icon: (
        <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      description: 'Specialized support for government contracts with full compliance, documentation, and delivery coordination services.',
      features: ['Compliance Management', 'Documentation Support', 'Delivery Coordination', 'Vendor Management']
    }
  ]

  return (
    <div className="section-modern section-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="section-title">
            Our Services
          </h1>
          <p className="section-subtitle">
            Comprehensive procurement solutions designed to meet the unique needs of government agencies and commercial organizations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-3">
          {services.map((service, index) => (
            <div key={index} className="card relative">
              {service.highlight && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {service.highlight}
                </div>
              )}
              
              <div className="card-icon mx-auto">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-secondary-800 mb-4 text-center">
                {service.title}
              </h3>
              
              <p className="text-secondary-600 mb-6 text-center">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-secondary-700">
                    <div className="w-5 h-5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20 card">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Why Choose Quantum Concierge Services?
            </h2>
            <p className="section-subtitle">
              Our comprehensive approach ensures your procurement needs are met with precision and professionalism
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="text-center">
              <div className="card-icon mx-auto bg-gradient-to-r from-blue-500 to-blue-600">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-800 mb-3">Fast Delivery</h3>
              <p className="text-secondary-600">Quick turnaround times to meet your urgent procurement deadlines</p>
            </div>
            
            <div className="text-center">
              <div className="card-icon mx-auto bg-gradient-to-r from-emerald-500 to-emerald-600">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-800 mb-3">Compliance Assured</h3>
              <p className="text-secondary-600">Full regulatory compliance for all government procurement requirements</p>
            </div>
            
            <div className="text-center">
              <div className="card-icon mx-auto bg-gradient-to-r from-amber-500 to-amber-600">
                <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-800 mb-3">Competitive Pricing</h3>
              <p className="text-secondary-600">Best value solutions that maximize your budget efficiency</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-secondary-800 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your specific procurement needs and how we can help streamline your operations with our proven expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
            <Link to="/team" className="btn btn-secondary">
              Meet Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services