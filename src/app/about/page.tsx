import React from 'react';
import Link from 'next/link';

// Team Member Data
const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Chief Executive Officer',
    bio: 'With over 15 years of experience in e-commerce and technology, Sarah leads our vision to transform online shopping through AI innovation.',
    imageUrl: '', // Placeholder will be rendered
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Chief Technology Officer',
    bio: 'Michael oversees our engineering team and AI research, bringing expertise from his previous roles at leading tech companies.',
    imageUrl: '', // Placeholder will be rendered
  },
  {
    id: 3,
    name: 'Aisha Patel',
    role: 'Chief Product Officer',
    bio: 'Aisha is passionate about creating intuitive user experiences that leverage cutting-edge technology to solve real customer needs.',
    imageUrl: '', // Placeholder will be rendered
  },
  {
    id: 4,
    name: 'David Rodriguez',
    role: 'Chief Marketing Officer',
    bio: 'David brings a wealth of experience in digital marketing and brand building, focusing on communicating our unique value proposition.',
    imageUrl: '', // Placeholder will be rendered
  },
];

// Company Values
const companyValues = [
  {
    title: 'Innovation',
    description: 'We continuously push the boundaries of what\'s possible in e-commerce through cutting-edge AI research and development.',
    icon: '💡'
  },
  {
    title: 'Customer-Centricity',
    description: 'Every decision we make is guided by understanding and addressing the needs of our customers and merchant partners.',
    icon: '👥'
  },
  {
    title: 'Integrity',
    description: 'We operate with transparency and honesty in all our interactions, building trust with our users and partners.',
    icon: '🤝'
  },
  {
    title: 'Inclusivity',
    description: 'We design our platform to be accessible and beneficial for all users, regardless of background or technical expertise.',
    icon: '🌐'
  }
];

// Milestones
const milestones = [
  {
    year: '2018',
    event: 'Founded in San Francisco, California'
  },
  {
    year: '2019',
    event: 'Launched first AI-powered product recommendation engine'
  },
  {
    year: '2020',
    event: 'Expanded services to include visual search technology'
  },
  {
    year: '2021',
    event: 'Reached 1 million active users milestone'
  },
  {
    year: '2022',
    event: 'Introduced augmented reality try-on features'
  },
  {
    year: '2023',
    event: 'Secured Series B funding to accelerate AI innovation'
  }
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-800 to-indigo-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            About M.M ClickUp
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-purple-100">
            Revolutionizing e-commerce with AI-powered innovation
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Our Story</h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p>
                  M.M ClickUp was founded with a simple but powerful vision: to transform the online shopping experience by making it more personalized, intuitive, and enjoyable through cutting-edge artificial intelligence.
                </p>
                <p>
                  What began as a small startup with a passionate team of AI researchers and e-commerce experts has grown into a leading platform that serves millions of users worldwide. Our journey has been driven by continuous innovation and an unwavering commitment to solving real customer problems.
                </p>
                <p>
                  Today, we're at the forefront of e-commerce technology, developing AI solutions that help customers discover products they'll love while empowering businesses to better understand and serve their customers.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 relative">
              <div className="bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-2xl p-1">
                <div className="bg-white rounded-xl aspect-w-4 aspect-h-3 overflow-hidden">
                  {/* Placeholder for Company Image */}
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Our Mission</h2>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500">
            To transform e-commerce through intelligent technology that creates delightful shopping experiences for customers and empowers businesses to thrive in the digital economy.
          </p>
          <div className="mt-12">
            <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">
              <svg className="h-12 w-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Our Values</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              These core principles guide everything we do at M.M ClickUp
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Our Journey</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Key milestones in our evolution
            </p>
          </div>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-indigo-300"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`absolute left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full border-4 border-white ${index === milestones.length - 1 ? 'bg-indigo-600' : 'bg-indigo-400'}`}>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  <div className={`relative w-5/12 bg-white rounded-xl shadow-md p-6 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                    <div className="absolute top-6 w-6 h-6 bg-white transform rotate-45 ${index % 2 === 0 ? '-right-3' : '-left-3'}"></div>
                    <h3 className="text-lg font-bold text-indigo-600">{milestone.year}</h3>
                    <p className="mt-2 text-gray-600">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Our Leadership Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Meet the talented individuals driving our vision forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="text-center">
                <div className="mx-auto h-40 w-40 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 p-1">
                  <div className="h-full w-full rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    {/* Placeholder for Team Member Image */}
                    <svg className="h-20 w-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-sm text-indigo-600">{member.role}</p>
                  <p className="mt-3 text-base text-gray-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Join us on our mission
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-100 max-w-3xl mx-auto">
            Whether you're looking to shop smarter or join our growing team, we'd love to connect with you and share our passion for transforming e-commerce.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Explore Our Products
              </Link>
            </div>
            <div className="ml-3 inline-flex">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-700"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 