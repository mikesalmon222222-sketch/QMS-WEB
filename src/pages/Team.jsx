import { Link } from 'react-router-dom'

function Team() {
  const teamMembers = [
    {
      name: 'Freddy Johnson',
      title: 'CEO',
      description: 'Leading Quantum Concierge Services with a vision for excellence in procurement solutions. Freddy brings years of leadership experience in government contracting and commercial procurement.',
      image: null, // Placeholder - will use initials
      contact: null
    },
    {
      name: 'Jack Baker',
      title: 'Director of Operations',
      description: 'Overseeing all operational aspects of our procurement services to ensure seamless delivery and client satisfaction. Jack manages our supplier relationships and process optimization.',
      image: null, // Placeholder - will use initials
      contact: {
        email: 'jack@quantumsrv.com'
      }
    },
    {
      name: 'Joe Root',
      title: 'Manager Procurement',
      description: 'Specializing in procurement management and client relations. Joe is your primary point of contact for procurement needs and ensures all requirements are met with precision and timeliness.',
      image: null, // Placeholder - will use initials
      contact: {
        email: 'joe.root@quantumsrv.com',
        phone: '+1 859-287-2983'
      }
    }
  ]

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('')
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-800 mb-6">
            Our Team
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Meet the dedicated professionals who make Quantum Concierge Services your trusted procurement partner
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 text-center"
            >
              {/* Profile Image/Initials */}
              <div className="mb-6">
                <div className="bg-primary-600 text-white w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  {getInitials(member.name)}
                </div>
              </div>
              
              {/* Name & Title */}
              <h3 className="text-2xl font-bold text-secondary-800 mb-2">
                {member.name}
              </h3>
              <p className="text-lg text-primary-600 font-semibold mb-4">
                {member.title}
              </p>
              
              {/* Description */}
              <p className="text-secondary-600 mb-6">
                {member.description}
              </p>
              
              {/* Contact Information */}
              {member.contact && (
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-semibold text-secondary-800 mb-3 uppercase tracking-wide">Contact</h4>
                  <div className="space-y-2">
                    {member.contact.email && (
                      <div className="flex items-center justify-center">
                        <svg className="h-4 w-4 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a 
                          href={`mailto:${member.contact.email}`}
                          className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
                        >
                          {member.contact.email}
                        </a>
                      </div>
                    )}
                    {member.contact.phone && (
                      <div className="flex items-center justify-center">
                        <svg className="h-4 w-4 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a 
                          href={`tel:${member.contact.phone}`}
                          className="text-secondary-600 hover:text-primary-600 transition-colors duration-200"
                        >
                          {member.contact.phone}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Team Expertise Section */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
              Our Collective Expertise
            </h2>
            <p className="text-lg text-secondary-600">
              Together, our team brings decades of experience in procurement, operations, and client service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary-800 mb-2">Government Contracting</h3>
              <p className="text-secondary-600 text-sm">Extensive experience with federal, state, and local procurement processes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary-800 mb-2">Supplier Relations</h3>
              <p className="text-secondary-600 text-sm">Strong relationships with trusted suppliers across multiple industries</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary-800 mb-2">Operations Management</h3>
              <p className="text-secondary-600 text-sm">Streamlined processes ensuring efficient delivery and client satisfaction</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary-800 mb-2">Client Service</h3>
              <p className="text-secondary-600 text-sm">Dedicated to understanding and exceeding client expectations</p>
            </div>
          </div>
        </div>

        {/* Why Work With Our Team Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-2xl p-12 mb-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Work With Our Team?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-4xl mx-auto">
              Our team combines deep industry knowledge with a commitment to personal service, ensuring you receive both expertise and attention to detail.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Responsive Communication</h3>
                <p className="text-primary-100 text-sm">Quick response times and proactive updates throughout the procurement process</p>
              </div>
              
              <div>
                <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Proven Track Record</h3>
                <p className="text-primary-100 text-sm">Successful completion of numerous government and commercial procurement projects</p>
              </div>
              
              <div>
                <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Personal Approach</h3>
                <p className="text-primary-100 text-sm">Direct access to team members who understand your specific needs and requirements</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary-800 mb-6">
            Ready to Connect With Our Team?
          </h2>
          <p className="text-lg text-secondary-600 mb-8">
            Contact us today to discuss your procurement needs and discover how our experienced team can support your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Get in Touch
            </Link>
            <a
              href="mailto:joe.root@quantumsrv.com"
              className="border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 hover:text-white transition-colors duration-200"
            >
              Email Joe Directly
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team