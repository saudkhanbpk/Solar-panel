import React from 'react';
// import Image from 'next/image';

const SolarSystemCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-8 border border-gray-200">
      {/* Header Section */}
      <div className="bg-[#82C800] p-4 text-center">
        <h2 className="text-2xl font-bold text-white">6kW Hybrid Solar System Price in Pakistan</h2>
      </div>
      
      {/* Main Content */}
      <div className="p-6">
        {/* System Capacity Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-block bg-gray-100 rounded-full px-6 py-3 text-xl font-semibold text-gray-800">
            6kW
          </span>
        </div>

        {/* System Details */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 border-b pb-2">System Details</h3>
          
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-[#82C800] mr-2">•</span>
              <span className="text-gray-700">Solar Hybrid System</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#82C800] mr-2">•</span>
              <span className="text-gray-700">10x575-585W Tier1 Solar Modules</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#82C800] mr-2">•</span>
              <span className="text-gray-700">1x 6kW Solarmax/Primax Inverter (48v)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#82C800] mr-2">•</span>
              <span className="text-gray-700">4x185AH 12v Tubular Batteries</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#82C800] mr-2">•</span>
              <span className="text-gray-700">Alpha Solar Mounting Structure G.I Sheet 14Gage</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#82C800] mr-2">•</span>
              <span className="text-gray-700">DC Wire, AC & DC Breakers, Box etc.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#82C800] mr-2">•</span>
              <span className="text-gray-700">Installation and 02 Years Free After Sales Services</span>
            </li>
            <li className="flex items-start text-sm text-gray-500">
              <span className="mr-2">*</span>
              <span>Battery Prices are not Included</span>
            </li>
          </ul>
        </div>

        {/* Price Section */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-center">
            <span className="text-gray-600 text-sm">From</span>
            <div className="flex justify-center items-baseline mt-1">
              <span className="text-3xl font-bold text-gray-800">Rs.500,000/-</span>
              <span className="ml-2 text-gray-500">to</span>
              <span className="ml-2 text-3xl font-bold text-gray-800">Rs.528,000/-</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6 text-center">
          <button className="bg-[#82C800] hover:bg-[#82C800] text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Get Quote Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolarSystemCard;