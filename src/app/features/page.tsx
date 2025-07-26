import React from 'react';
import Link from 'next/link';

// Feature data with descriptions and icons
const aiFeatures = [
  {
    id: 1,
    title: "Personalized Shopping Experience",
    description: "Our AI learns from your browsing and purchasing history to create a customized shopping experience tailored specifically to your preferences and needs.",
    icon: "🧠",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 2,
    title: "Smart Product Recommendations",
    description: "Discover products you'll love with our intelligent recommendation engine that analyzes your taste profile and suggests items you're most likely to enjoy.",
    icon: "💡",
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 3,
    title: "Visual Search Technology",
    description: "Simply upload an image of a product you like, and our AI will find similar or complementary items in our catalog, making shopping more intuitive.",
    icon: "👁️",
    color: "from-amber-400 to-orange-500"
  },
  {
    id: 4,
    title: "Dynamic Pricing Insights",
    description: "Get notified about the best time to buy with our price prediction algorithm that analyzes market trends and historical data to forecast price changes.",
    icon: "📊",
    color: "from-emerald-400 to-teal-500"
  },
  {
    id: 5,
    title: "Voice-Powered Shopping Assistant",
    description: "Shop hands-free with our voice assistant that can search products, add items to your cart, and complete purchases using natural language commands.",
    icon: "🎙️",
    color: "from-purple-500 to-violet-600"
  },
  {
    id: 6,
    title: "Augmented Reality Try-On",
    description: "Visualize products in your space or on yourself before buying with our AR technology, reducing returns and increasing shopping confidence.",
    icon: "🔮",
    color: "from-cyan-400 to-blue-500"
  },
];

// Usage statistics for visualization
const usageStats = [
  { label: 'Customer Satisfaction', value: '97%' },
  { label: 'Return Rate Reduction', value: '45%' },
  { label: 'Time Saved Shopping', value: '68%' },
  { label: 'Purchase Confidence', value: '92%' }
];

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">


      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-700 to-purple-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            AI-Powered Features
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-indigo-100">
            Discover how our cutting-edge technology transforms your shopping experience
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#features"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-indigo-700 bg-white hover:bg-indigo-50"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>

      {/* Features Showcase */}
      <section id="features" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">Intelligent Shopping</h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Revolutionize Your Experience
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Our AI-powered platform learns and adapts to provide you with the most intuitive and efficient shopping journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {aiFeatures.map((feature) => (
              <div 
                key={feature.id} 
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${feature.color}`}></div>
                <div className="p-8 relative">
                  <div className={`inline-flex items-center justify-center rounded-xl p-3 shadow-lg mb-5 bg-gradient-to-br ${feature.color}`}>
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Experience the future of shopping today
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Our platform combines the latest in artificial intelligence and machine learning to create a shopping experience that's not just easier, but more enjoyable.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Learn from your preferences</h3>
                    <p className="mt-2 text-base text-gray-500">The more you shop, the smarter our recommendations become.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Lightning-fast results</h3>
                    <p className="mt-2 text-base text-gray-500">Find exactly what you need in seconds, not minutes.</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Privacy-focused design</h3>
                    <p className="mt-2 text-base text-gray-500">Your data is encrypted and never shared with third parties.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-indigo-600 px-6 py-8 md:px-8 md:py-10">
                  <div className="flex items-center">
                    <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mt-6 bg-white bg-opacity-10 rounded-lg p-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-300 flex items-center justify-center text-indigo-600">
                        AI
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">
                          AI Shopping Assistant
                        </p>
                        <p className="text-sm text-indigo-200 truncate">
                          Online now
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-3 text-indigo-100 text-sm">
                        How can I help with your shopping today?
                      </div>
                      <div className="bg-white rounded-lg p-3 text-gray-700 text-sm ml-12">
                        I'm looking for a gift for my friend who loves tech gadgets
                      </div>
                      <div className="bg-indigo-700 bg-opacity-50 rounded-lg p-3 text-indigo-100 text-sm">
                        Great! Based on recent trends and your past purchases, I recommend these items:
                      </div>
                      <div className="grid grid-cols-3 gap-2 mt-2">
                        <div className="bg-white rounded-md h-16 flex items-center justify-center">
                          <div className="w-10 h-10 bg-gray-200 rounded"></div>
                        </div>
                        <div className="bg-white rounded-md h-16 flex items-center justify-center">
                          <div className="w-10 h-10 bg-gray-200 rounded"></div>
                        </div>
                        <div className="bg-white rounded-md h-16 flex items-center justify-center">
                          <div className="w-10 h-10 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">The Numbers Speak for Themselves</h2>
            <p className="mt-4 text-lg text-gray-500">Our AI-powered features have transformed the shopping experience for thousands of customers</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {usageStats.map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center shadow-sm">
                <p className="text-4xl font-extrabold text-indigo-600">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to experience the future of shopping?
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-100">
            Join thousands of satisfied customers who have transformed their shopping experience with M.M ClickUp.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Browse Products
              </Link>
            </div>
            <div className="ml-3 inline-flex">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800"
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

export default FeaturesPage; 