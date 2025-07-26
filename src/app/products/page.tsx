import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Placeholder Product Data
const products = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: '$199.99',
    category: 'Audio',
    rating: 4.5,
    imageUrl: 'premium-wireless-headphones.png',
  },
  {
    id: 2,
    name: 'Smart Fitness Tracker',
    price: '$89.99',
    category: 'Wearables',
    rating: 4.2,
    imageUrl: 'smart-fitness-tracker.png',
  },
  {
    id: 3,
    name: 'Ergonomic Mechanical Keyboard',
    price: '$129.99',
    category: 'Peripherals',
    rating: 4.7,
    imageUrl: 'ergonomic-mechanical-keyboard.png',
  },
  {
    id: 4,
    name: '4K Ultra HD Webcam',
    price: '$79.99',
    category: 'Video',
    rating: 4.0,
    imageUrl: '4K-ultra-HD-webcam.png',
  },
  {
    id: 5,
    name: 'Wireless Charging Pad',
    price: '$49.99',
    category: 'Accessories',
    rating: 4.3,
    imageUrl: 'wireless-charging-pad.png',
  },
  {
    id: 6,
    name: 'Smart Home Hub',
    price: '$159.99',
    category: 'Smart Home',
    rating: 4.6,
    imageUrl: 'smart-home-hub.png',
  },
  {
    id: 7,
    name: 'Noise-Cancelling Earbuds',
    price: '$149.99',
    category: 'Audio',
    rating: 4.4,
    imageUrl: 'noise-cancelling-earbuds.png',
  },
  {
    id: 8,
    name: 'Portable Power Bank',
    price: '$39.99',
    category: 'Accessories',
    rating: 4.1,
    imageUrl: 'portable-power-bank.png',
  },
];

// Categories for filtering
const categories = ['All', 'Audio', 'Wearables', 'Peripherals', 'Video', 'Accessories', 'Smart Home'];

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Products
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white opacity-80 sm:text-lg">
            Discover premium gadgets and accessories designed to enhance your digital experience.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm rounded-full bg-white shadow-sm hover:shadow text-gray-700 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full py-2 pl-10 pr-4 bg-white text-black rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-full min-h-60 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none flex items-center justify-center">
                {/* Product Image */}
                <Image
                  src={`/${product.imageUrl}`}
                  alt={product.name}
                  width={240}
                  height={240}
                  className="object-contain w-full h-full"
                  unoptimized
                />
              </div>
              <div className="mt-4">
                <div className="flex justify-between">
                  <h3 className="text-sm text-gray-700 font-medium">
                    <Link href={`/products/${product.id}`} className="hover:text-purple-600">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-sm font-bold text-gray-900">{product.price}</p>
                </div>
                <div className="mt-1 flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <svg
                        key={rating}
                        className={`w-4 h-4 ${
                          product.rating > rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-2">({product.rating})</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">{product.category}</p>
                <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center space-x-2">
            <a href="#" className="px-3 py-1 rounded-md bg-white text-gray-500 hover:text-purple-600">
              <span className="sr-only">Previous</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="px-3 py-1 rounded-md bg-purple-600 text-white">
              1
            </a>
            <a href="#" className="px-3 py-1 rounded-md bg-white text-gray-500 hover:text-purple-600">
              2
            </a>
            <a href="#" className="px-3 py-1 rounded-md bg-white text-gray-500 hover:text-purple-600">
              3
            </a>
            <span className="px-3 py-1 text-gray-500">...</span>
            <a href="#" className="px-3 py-1 rounded-md bg-white text-gray-500 hover:text-purple-600">
              8
            </a>
            <a href="#" className="px-3 py-1 rounded-md bg-white text-gray-500 hover:text-purple-600">
              <span className="sr-only">Next</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage; 