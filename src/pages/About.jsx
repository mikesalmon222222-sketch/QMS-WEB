import { Link } from 'react-router-dom'

function About() {
  const milestones = [
    {
      year: 'Founded',
      title: 'Company Established',
      description: 'Quantum Concierge Services was founded with a mission to streamline procurement processes for government and commercial clients.'
    },
    {
      year: 'Growth',
      title: 'Expanded Services',
      description: 'Added specialized government contracting services and eco-friendly product lines to better serve our clients.'
    },
    {
      year: 'Innovation',
      title: 'Technology Integration',
      description: 'Implemented cutting-edge procurement technologies to improve efficiency and client communication.'
    },
    {
      year: 'Today',
      title: 'Industry Leader',
      description: 'Recognized as a trusted partner in procurement solutions with over 15,000 eco-friendly products and comprehensive service offerings.'
    }
  ]

  const certifications = [
    { name: 'Better Business Bureau', status: 'A+ Rating' },
    { name: 'D-U-N-S Registered', status: 'Verified Business' },
    { name: 'Government Contractor', status: 'Certified' },
    { name: 'ISO Standards', status: 'Compliant' }
  ]

  return (
    <div className="section-modern section-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="section-title">
            About Quantum Concierge Services
          </h1>
          <p className="section-subtitle">
            Your trusted partner in procurement excellence, dedicated to providing innovative solutions for government and commercial organizations nationwide.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="card mb-16">
          <div className="text-center">
            <h2 className="section-title">
              Our Mission
            </h2>
            <p className="section-subtitle mb-8">
              To revolutionize procurement by delivering exceptional service, innovative solutions, and unwavering integrity. We are committed to making procurement processes seamless, efficient, and cost-effective for organizations that serve our communities and nation.
            </p>
            
            <div className="grid grid-3 mt-12">
              <div className="text-center">
                <div className="card-icon mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Speed</h3>
                <p className="text-secondary-600 text-sm">Rapid response times and efficient delivery to meet your urgent needs</p>
              </div>
              
              <div className="text-center">
                <div className="card-icon mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Quality</h3>
                <p className="text-secondary-600 text-sm">Premium products and services that exceed expectations every time</p>
              </div>
              
              <div className="text-center">
                <div className="card-icon mx-auto mb-4">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Care</h3>
                <p className="text-secondary-600 text-sm">Personal attention and dedicated support for every client relationship</p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Story */}
        <div className="grid grid-2 mb-16">
          <div>
            <h2 className="section-title">
              Our Story
            </h2>
            <div className="space-y-6 text-secondary-600">
              <p className="text-lg">
                Quantum Concierge Services was born from a simple observation: procurement processes were often unnecessarily complex, time-consuming, and frustrating for organizations trying to focus on their core missions.
              </p>
              <p>
                Our founders recognized that government agencies and commercial organizations needed a procurement partner who understood both the regulatory landscape and the urgency of their operational needs. This insight led to the creation of a company dedicated to simplifying procurement while maintaining the highest standards of compliance and service.
              </p>
              <p>
                Today, we serve clients across the nation, from federal agencies to local governments, and from small businesses to large corporations. Our commitment to innovation has led us to offer over 15,000 eco-friendly products, helping organizations meet their sustainability goals while fulfilling their procurement needs.
              </p>
              <p>
                What sets us apart is our unwavering commitment to our core values: Integrity, Innovation, and Customer-Centricity. These aren't just words on our website – they're the principles that guide every decision, every interaction, and every solution we provide.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="card">
              <h3 className="text-2xl font-bold text-secondary-800 mb-4">Why We Exist</h3>
              <p className="text-secondary-600 mb-4">
                We believe that procurement should be a strategic advantage, not an operational burden. Our mission is to transform how organizations approach purchasing, making it:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-secondary-600">
                  <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Faster and more efficient
                </li>
                <li className="flex items-center text-secondary-600">
                  <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Fully compliant and transparent
                </li>
                <li className="flex items-center text-secondary-600">
                  <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Cost-effective and value-driven
                </li>
                <li className="flex items-center text-secondary-600">
                  <div className="w-4 h-4 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  Environmentally responsible
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold text-secondary-800 mb-4">Our Commitment</h3>
              <p className="text-secondary-600">
                Every client relationship is built on trust, transparency, and results. We don't just fulfill orders – we become your strategic procurement partner, understanding your unique needs and delivering solutions that support your long-term success.
              </p>
            </div>
          </div>
        </div>

        {/* Company Milestones */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Our Journey
            </h2>
            <p className="section-subtitle">
              Key milestones in our growth and development as a procurement leader
            </p>
          </div>

          <div className="grid grid-4">
            {milestones.map((milestone, index) => (
              <div key={index} className="card text-center">
                <div className="card-icon mx-auto mb-4">
                  {milestone.year}
                </div>
                <h3 className="text-lg font-bold text-secondary-800 mb-3">
                  {milestone.title}
                </h3>
                <p className="text-secondary-600 text-sm">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications and Credentials */}
        <div className="card mb-16">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Certifications & Credentials
            </h2>
            <p className="section-subtitle">
              Our commitment to excellence is recognized by leading industry organizations
            </p>
          </div>

          <div className="certification-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-badge">
                <div className="card-icon mx-auto mb-4">
                  <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                  {cert.name}
                </h3>
                <p className="text-primary-600 font-medium">
                  {cert.status}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainability Commitment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-green-50 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-600 p-3 rounded-full mr-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-secondary-800">
                Environmental Responsibility
              </h2>
            </div>
            <p className="text-secondary-600 mb-4">
              We're committed to supporting your organization's sustainability goals with over 15,000 eco-friendly products in our catalog.
            </p>
            <ul className="space-y-2 text-secondary-600">
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Recycled and sustainable materials
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Energy-efficient technologies
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Green certifications and standards
              </li>
            </ul>
          </div>

          <div className="bg-primary-50 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-primary-600 p-3 rounded-full mr-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-secondary-800">
                Community Focus
              </h2>
            </div>
            <p className="text-secondary-600 mb-4">
              We're proud to support organizations that serve our communities and nation, from local government agencies to federal departments.
            </p>
            <ul className="space-y-2 text-secondary-600">
              <li className="flex items-center">
                <svg className="h-4 w-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Supporting public service missions
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Strengthening business partnerships
              </li>
              <li className="flex items-center">
                <svg className="h-4 w-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Contributing to economic growth
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary-800 mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-secondary-600 mb-8">
            Discover how Quantum Concierge Services can transform your procurement process and support your organization's success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Start Your Partnership
            </Link>
            <Link
              to="/services"
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 hover:text-white transition-colors duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About