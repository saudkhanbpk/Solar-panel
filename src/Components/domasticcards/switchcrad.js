'use client';
import React from 'react';

const DomasticCards = () => {
  // Solar company logos (replace with your actual image paths)
  const solarLogos = [
    '/logo1.png',
    '/logo2.png',
    '/logo3.png',
    '/logo4.png',
    '/logo5.png',
    '/logo6.png'
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto p-4">
      {/* Card 1: Switch to Solar */}
      <div className="bg-[#14366F] p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
        <h2 className="text-2xl font-bold text-white mb-4">Switch to Solar Power</h2>
        <ul className="space-y-3">
          <li className="flex items-start p-2">
            <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-white">Generate free, green electricity</span>
          </li>
          <li className="flex items-start p-2">
            <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-white">Pay a very low or even no electricity bill</span>
          </li>
          <li className="flex items-start p-2">
            <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-white">Through net metering, sell electricity back to the grid</span>
          </li>
        </ul>
      </div>

      {/* Card 2: Certified Partners */}
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
        <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">Certified By</h2>
        <div className="h-px bg-gray-200 my-4"></div> {/* Horizontal divider */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          {solarLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center p-2 bg-gray-50 rounded-lg">
              <img 
                src={logo} 
                alt={`Solar partner ${index + 1}`} 
                className="h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.src = '/logos/placeholder-logo.png';
                }}
              />
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 mt-6 text-sm">
          Trusted partnerships with world-leading solar manufacturers
        </p>
      </div>
    </div>
  );
};

export default DomasticCards;