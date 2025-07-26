import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Hero from "./components/Hero";

// Placeholder Product Data
const featuredProducts = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: '$199.99',
    imageUrl: '', // Placeholder will be rendered
  },
  {
    id: 2,
    name: 'Smart Fitness Tracker',
    price: '$89.99',
    imageUrl: '', // Placeholder will be rendered
  },
  {
    id: 3,
    name: 'Ergonomic Mechanical Keyboard',
    price: '$129.99',
    imageUrl: '', // Placeholder will be rendered
  },
    {
    id: 4,
    name: '4K Ultra HD Webcam',
    price: '$79.99',
    imageUrl: '', // Placeholder will be rendered
  },
];

// App features data
const appFeatures = [
  { id: 1, name: 'Voice Search', icon: '🔍' },
  { id: 2, name: 'AR Try-On', icon: '👓' },
  { id: 3, name: 'Smart Recommendations', icon: '🧠' },
  { id: 4, name: 'One-Click Checkout', icon: '💳' },
  { id: 5, name: 'Real-time Tracking', icon: '📦' },
  { id: 6, name: 'Personalized Deals', icon: '🏷️' },
  { id: 7, name: 'Virtual Assistant', icon: '🤖' },
  { id: 8, name: 'Secure Payments', icon: '🔒' },
  { id: 9, name: 'Wishlist Sync', icon: '❤️' },
  { id: 10, name: 'Reviews & Ratings', icon: '⭐' },
  { id: 11, name: 'Chat Support', icon: '💬' },
  { id: 12, name: 'Loyalty Points', icon: '🎁' },
];

// AI features for the info cards
const aiFeatures = [
  { 
    title: "Enhanced User Experience with AI", 
    description: "Seamless shopping powered by advanced algorithms"
  },
  { 
    title: "Personalized AI-Driven Recommendations", 
    description: "Products curated just for you based on your preferences"
  },
  { 
    title: "Smart Order Management", 
    description: "Automated tracking and delivery optimization"
  }
];

const LandingPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>M.M ClickUp - Transform Your E-Commerce Experience</title>
        <meta name="description" content="Discover the future of online shopping with M.M ClickUp. AI-powered shopping experience." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen">
        {/* Navigation Bar
        <nav className="bg-white shadow-sm sticky top-0 z-50 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  M.M ClickUp
                </Link>
              </div>
              <div className="hidden sm:flex sm:space-x-8">
                <Link href="/" className="text-sm font-medium text-purple-600 border-b-2 border-purple-600 pb-1">
                  Home
                </Link>
                <Link href="/features" className="text-sm font-medium text-gray-700 hover:text-purple-600">
                  Features
                </Link>
                <Link href="/products" className="text-sm font-medium text-gray-700 hover:text-purple-600">
                  Products
                </Link>
                <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-purple-600">
                  About
                </Link>
                <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-purple-600">
                  Contact
                </Link>
              </div>
              <div>
                <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 px-4 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </nav>

        */}

        {/* Hero Section */}
        <Hero />
    
        {/* Features Overview */}
        <section id="features" className="py-20 bg-gradient-to-b from-orange-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-xl shadow-md transform transition-transform hover:scale-105">
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-500 text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Discover the Experience</h3>
                <p className="text-gray-600">Shop the most innovative solutions with intelligent recommendations based on your preferences.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md transform transition-transform hover:scale-105">
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-pink-100 flex items-center justify-center">
                  <span className="text-pink-500 text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Enhance Your Lifestyle</h3>
                <p className="text-gray-600">Browse cutting-edge products designed to seamlessly integrate with your daily routines.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md transform transition-transform hover:scale-105">
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-500 text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Explore Our Products</h3>
                <p className="text-gray-600">Unlock a world of innovative technologies and premium accessories for modern living.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Person with Product */}
        <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Revolutionize Your Shopping Experience
                </h2>
                <p className="mt-4 text-lg text-indigo-200">
                  Unlock a new way to shop with our AI-powered platform that learns from your preferences and delivers personalized recommendations.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 bg-indigo-500 rounded-full flex items-center justify-center">
                      <span className="text-sm">01</span>
                    </div>
                    <p className="ml-4">Intelligent product discovery based on your interests</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 bg-indigo-500 rounded-full flex items-center justify-center">
                      <span className="text-sm">02</span>
                    </div>
                    <p className="ml-4">Simplified checkout process with smart payment options</p>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 bg-indigo-500 rounded-full flex items-center justify-center">
                      <span className="text-sm">03</span>
                    </div>
                    <p className="ml-4">Real-time inventory and personalized notifications</p>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email to get started"
                      className="w-full py-3 px-4 rounded-full text-gray-100 focus:outline-none focus:ring-4 focus:ring-indigo-500"
                    />
                    <button className="absolute right-1 top-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-4 rounded-full">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  {/* Placeholder for App Interface */}
                  <div className="aspect-[9/19] bg-gradient-to-b from-indigo-50 to-white p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="h-6 w-24 bg-gray-200 rounded-md"></div>
                      <div className="flex space-x-2">
                        <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                        <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-3 mb-4">
                      <div className="bg-orange-100 rounded-lg aspect-square mb-3"></div>
                      <div className="h-4 w-3/4 bg-gray-200 rounded-md mb-2"></div>
                      <div className="h-4 w-1/2 bg-gray-200 rounded-md mb-3"></div>
                      <div className="bg-orange-500 text-white text-center py-2 rounded-lg">
                        Add to Cart
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 h-12 w-12 bg-yellow-400 rounded-full"></div>
                <div className="absolute -top-6 -right-3 h-16 w-16 bg-indigo-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-600 mb-2">
                Experience the Future of Online Shopping:
              </h2>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                M.M ClickUp Blends Cutting-Edge AI
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiFeatures.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* App Features Grid */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Elevate Your Shopping Experience</h2>
              <p className="text-lg text-purple-200">Discover all the powerful features at your fingertips</p>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {appFeatures.map((feature) => (
                <div key={feature.id} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl flex flex-col items-center justify-center hover:bg-white/20 transition-colors">
                  <span className="text-2xl mb-2">{feature.icon}</span>
                  <span className="text-sm text-center">{feature.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-block">
                <div className="bg-white rounded-xl overflow-hidden shadow-xl">
                  <div className="h-60 bg-gradient-to-r from-purple-400 to-pink-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8 space-y-2">
              <h2 className="text-2xl font-bold text-purple-800">Unlock the Future of Online Shopping</h2>
              <h3 className="text-xl font-medium text-gray-700">Capture Our Products</h3>
            </div>
            
            <div className="mt-8">
              <a href="/contact" className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition-all font-medium">
                Explore Now
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact</h2>
            
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Experience the Seamless Integration of Advanced AI, Captivating Visuals, and Unparalleled Convenience. Discover the Future of E-Commerce
              </h3>
              <a 
                href="/products" 
                className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition-all font-medium mt-6"
              >
                Explore Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;

