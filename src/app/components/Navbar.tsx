
'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              M.M ClickUp
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', href: '/' },
              { name: 'Features', href: '/features' },
              { name: 'Products', href: '/products' },
              { name: 'About', href: '/about' },
              { name: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`relative px-1 py-2 text-sm font-medium transition-all duration-300 ease-in-out
                  ${activeLink === link.href
                    ? 'text-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
                  }
                  group
                `}
              >
                {link.name}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 transform origin-left transition-transform duration-300 ease-out
                    ${activeLink === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                  `}
                />
              </Link>
            ))}
          </div>

          {/* Sign Up Button */}
          <div className="hidden md:block">
            <button className="
              relative inline-flex items-center px-6 py-2 overflow-hidden text-sm font-medium text-white rounded-full
              bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500
              hover:shadow-lg hover:shadow-purple-500/30 
              transform transition-all duration-300 ease-out
              hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
            ">
              <Link
                href="/SignUp"
                className="relative block w-full h-full"
              >
                <span className="relative">Sign Up</span>
              </Link>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="
              p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-purple-50
              transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500
            ">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 