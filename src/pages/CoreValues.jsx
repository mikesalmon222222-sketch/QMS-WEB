import { Link } from 'react-router-dom'

function CoreValues() {
  const values = [
    {
      title: 'Integrity',
      description: 'Honest, transparent business practices',
      details: 'We believe that integrity is the foundation of every successful business relationship. Our commitment to honesty and transparency guides every interaction, ensuring that our clients can trust us to deliver on our promises and maintain the highest ethical standards.',
      icon: (
        <svg className="h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      keyPoints: [
        'Transparent communication in all dealings',
        'Ethical business practices without compromise',
        'Honest pricing and fair contract terms',
        'Reliable delivery on promises made'
      ]
    },
    {
      title: 'Innovation',
      description: 'Continuously improving sourcing and delivery',
      details: 'Innovation drives our pursuit of excellence. We continuously seek new ways to improve our sourcing strategies, delivery methods, and service offerings to provide our clients with cutting-edge solutions that meet their evolving needs.',
      icon: (
        <svg className="h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      keyPoints: [
        'Leveraging technology for efficient procurement',
        'Developing new supplier relationships',
        'Streamlining processes for faster delivery',
        'Adopting sustainable and eco-friendly solutions'
      ]
    },
    {
      title: 'Customer-Centric',
      description: 'Focused on client success and timelines',
      details: 'Our clients\' success is our primary focus. We understand that every organization has unique needs and timelines, and we tailor our services to ensure that we not only meet but exceed expectations in supporting our clients\' objectives.',
      icon: (
        <svg className="h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      keyPoints: [
        'Personalized service for each client',
        'Responsive support and communication',
        'Flexible solutions to meet unique needs',
        'Commitment to client timeline adherence'
      ]
    }
  ]

  return (
    <div className="section-modern section-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="section-title">
            Our Core Values
          </h1>
          <p className="section-subtitle">
            The principles that guide our business practices and drive our commitment to excellence in procurement services
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="card value-card"
            >
              {/* Icon */}
              <div className="card-icon mx-auto">
                {value.icon}
              </div>
              
              {/* Title */}
              <h2 className="text-3xl font-bold text-secondary-800 mb-4 text-center">
                {value.title}
              </h2>
              
              {/* Description */}
              <p className="text-lg text-primary-600 font-medium mb-6 text-center">
                {value.description}
              </p>
              
              {/* Details */}
              <p className="text-secondary-600 mb-6 flex-grow">
                {value.details}
              </p>
              
              {/* Key Points */}
              <div>
                <h4 className="text-lg font-semibold text-secondary-800 mb-3">Key Aspects:</h4>
                <ul className="space-y-2">
                  {value.keyPoints.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start text-secondary-600">
                      <div className="w-5 h-5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Values in Action Section */}
        <div className="mt-16 card">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Values in Action
            </h2>
            <p className="section-subtitle">
              These core values are not just words on a page - they are the driving force behind every decision we make, every relationship we build, and every solution we deliver to our clients.
            </p>
            
            <div className="grid grid-3 mt-8">
              <div className="text-center">
                <div className="stats-card">
                  <span className="stats-number">100%</span>
                  <span className="stats-label">Transparent Practices</span>
                  <p className="text-primary-100 text-sm mt-2">Every transaction is conducted with complete honesty and openness</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="stats-card">
                  <span className="stats-number">24/7</span>
                  <span className="stats-label">Innovation Focus</span>
                  <p className="text-primary-100 text-sm mt-2">Continuously developing new solutions to serve our clients better</p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="stats-card">
                  <span className="stats-number">1st</span>
                  <span className="stats-label">Client Priority</span>
                  <p className="text-primary-100 text-sm mt-2">Your success is always our number one priority in every engagement</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How We Apply Our Values */}
        <div className="mt-16 card">
          <div className="text-center mb-12">
            <h2 className="section-title">
              How We Apply Our Values
            </h2>
            <p className="section-subtitle">
              See how our core values translate into tangible benefits for your organization
            </p>
          </div>
          
          <div className="grid grid-2">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="card-icon bg-primary-100 mr-4">
                  <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-800 mb-2">Ethical Sourcing</h3>
                  <p className="text-secondary-600">All our suppliers are vetted for ethical practices, ensuring your procurement supports responsible business.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="card-icon bg-primary-100 mr-4">
                  <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-800 mb-2">Rapid Response</h3>
                  <p className="text-secondary-600">Our customer-centric approach means faster response times and quicker resolution of your procurement needs.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="card-icon bg-primary-100 mr-4">
                  <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-800 mb-2">Continuous Improvement</h3>
                  <p className="text-secondary-600">We regularly update our processes and technologies to provide you with the most efficient procurement solutions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="card-icon bg-primary-100 mr-4">
                  <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-800 mb-2">Partnership Approach</h3>
                  <p className="text-secondary-600">We view every client relationship as a partnership, working together to achieve your organizational goals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="section-title">
            Experience Our Values in Action
          </h2>
          <p className="section-subtitle mb-8">
            Ready to work with a procurement partner who puts integrity, innovation, and your success first?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-primary">
              Start Your Partnership
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoreValues