'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';
import { RiMenu3Line } from 'react-icons/ri';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, onClose, onOpen }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={onOpen}
        className="lg:hidden md:hidden fixed top-4 right-4 z-50 p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
        aria-label="Open Menu"
      >
        <RiMenu3Line size={24} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
            aria-label="Close Menu"
          >
            <IoMdClose size={24} />
          </button>

          <div className="mt-12 space-y-4">
            <Link
              href="/"
              className="block py-2 px-4 text-gray-800 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors"
              onClick={onClose}
            >
              Home
            </Link>
            <Link
              href="/features"
              className="block py-2 px-4 text-gray-800 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors"
              onClick={onClose}
            >
              Features
            </Link>
            <Link
              href="/products"
              className="block py-2 px-4 text-gray-800 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors"
              onClick={onClose}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="block py-2 px-4 text-gray-800 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors"
              onClick={onClose}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 px-4 text-gray-800 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors"
              onClick={onClose}
            >
              Contact
            </Link>
          </div>

          <div className="absolute bottom-8 left-0 right-0 px-4">
            <Link
              href="/signup"
              className="block w-full py-2 px-4 text-center bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              onClick={onClose}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar; 