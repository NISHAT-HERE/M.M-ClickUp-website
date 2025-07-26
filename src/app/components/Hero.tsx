'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  gradient?: string;
  showPhoneMockup?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  title = "Transform Your \n E-Commerce Experience",
  subtitle = "Discover the future of online shopping with convenience and curated products.",
  buttonText = "Explore Now",
  buttonLink = "/features",
  gradient = "from-orange-400 to-pink-500",
  showPhoneMockup = true,
}) => {
  return (
    
    <section id="home" className={`relative overflow-hidden bg-gradient-to-r ${gradient} py-20 md:py-28`}>
      {/* Animated background shapes */}
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl" 
        initial={{ x: 100, y: -100 }}
        animate={{ 
          x: [100, 120, 100],
          y: [-100, -80, -100]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl" 
        initial={{ x: -100, y: 100 }}
        animate={{ 
          x: [-100, -120, -100],
          y: [100, 120, 100]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-8 h-8 bg-yellow-300 opacity-70 rounded-full"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-6 h-6 bg-purple-400 opacity-70 rounded-full"
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-1/4 w-10 h-10 bg-pink-300 opacity-70 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {title}
            </motion.h1>
            <motion.p 
              className="mt-4 text-lg text-white opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {subtitle}
            </motion.p>
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={buttonLink}
                  className="inline-block bg-white text-purple-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all"
                >
                  {buttonText}
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {showPhoneMockup && (
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8,
                delay: 0.6,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div 
                className="bg-white p-4 rounded-2xl shadow-xl max-w-xs mx-auto"
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                {/* Phone mockup with animations */}
                <div className="bg-purple-100 rounded-xl p-6 aspect-[9/16] flex flex-col relative overflow-hidden">
                  {/* Phone interface elements */}
                  <div className="flex justify-between items-center mb-4">
                    <motion.div 
                      className="h-6 w-24 bg-purple-200 rounded-md"
                      initial={{ width: 0 }}
                      animate={{ width: "6rem" }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                    ></motion.div>
                    <motion.div 
                      className="h-6 w-6 bg-purple-300 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 1.4 }}
                    ></motion.div>
                  </div>
                  <div className="bg-white rounded-lg flex-1 p-4 shadow-md">
                    <motion.div 
                      className="h-4 w-3/4 bg-purple-100 rounded-md mb-3"
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 0.8, delay: 1.6 }}
                    ></motion.div>
                    <motion.div 
                      className="h-24 w-full bg-purple-200 rounded-md mb-3"
                      initial={{ height: 0 }}
                      animate={{ height: "6rem" }}
                      transition={{ duration: 0.8, delay: 1.8 }}
                    ></motion.div>
                    <motion.div 
                      className="h-4 w-1/2 bg-purple-100 rounded-md"
                      initial={{ width: 0 }}
                      animate={{ width: "50%" }}
                      transition={{ duration: 0.8, delay: 2.0 }}
                    ></motion.div>
                  </div>
                  <motion.div 
                    className="mt-4 bg-purple-500 text-white py-2 px-4 rounded-lg text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 2.2 }}
                  >
                    Get Started
                  </motion.div>
                  
                  {/* Animated dots/circles inside the phone mockup */}
                  <motion.div
                    className="absolute top-2 right-2 w-3 h-3 bg-pink-400 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  <motion.div
                    className="absolute bottom-12 left-3 w-4 h-4 bg-yellow-400 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: 0.5
                    }}
                  />
                </div>
              </motion.div>
              
              {/* Decorative elements with animations */}
              <motion.div 
                className="absolute -top-4 -right-4 h-12 w-12 bg-yellow-400 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.4 }}
                whileHover={{ scale: 1.2, rotate: 180 }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 h-8 w-8 bg-purple-600 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.6 }}
                whileHover={{ scale: 1.2, rotate: -180 }}
              />
              
              {/* Additional decorative elements */}
              <motion.div
                className="absolute -top-6 left-1/4 h-5 w-5 bg-pink-300 rounded-full"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [0, 1, 1],
                  y: [0, -10, -5]
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: 2.8,
                  y: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    delay: 3
                  }
                }}
              />
              <motion.div
                className="absolute -bottom-6 right-1/4 h-5 w-5 bg-orange-300 rounded-full"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [0, 1, 1],
                  y: [0, 10, 5]
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: 3,
                  y: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    delay: 3.2
                  }
                }}
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero; 