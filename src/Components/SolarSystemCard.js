'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SolarPackageCards = ({category}) => {
  const [packages, setPackages] = useState([]);

  // Fetch API
  const fetchPackages = async () => {
    try {
           const res = await axios.get("http://localhost:3000/api/pakages");
           setPackages(res.data);
    } catch (error) {
             console.log({ error: error.message });
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);
  
  return (
   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {packages?.filter((pkg) => pkg.category === category).map((pkg) => (
             <div
               key={pkg._id}
               className="relative flex flex-col bg-white rounded-2xl overflow-hidden hover:shadow-lg transition duration-300"
             >
               
               {/* Header Section */}
               <div className="bg-gradient-to-r from-[#83C700] to-[#6C9E33] text-white text-center py-4 px-6">
                 <h2 className="text-2xl font-bold">
                   {pkg.capacity} {pkg.category} Price in Pakistan
                 </h2>
               </div>
   
               {/* Main Content Section */}
               <div className="flex flex-col md:flex-row">
                 {/* Left Side - Image and System Info */}
                 <div className="w-full md:w-[60%] bg-[#6C9E33] p-6 flex flex-col">
                   {/* System Title */}
                   <div className="text-white mb-4">
                     <h3 className="text-4xl font-bold text-white">
                       {pkg.capacity}
                     </h3>
                     <h4 className="text-xl font-medium">
                       Solar Hybrid System
                     </h4>
                   </div>
   
                   {/* Image Container */}
                   <div className="flex-1 flex items-center justify-center">
                     <img
                       src="/cardpic.png"
                       alt="Solar Package"
                       className="w-full h-auto object-contain max-h-64"
                     />
                   </div>
   
                   {/* Additional branding space if needed */}
                   <div className="mt-4 text-center">
                     <p className="text-white text-sm opacity-75">{pkg.model}</p>
                   </div>
                 </div>
   
                 {/* Right Side - System Details */}
                 <div className="w-full md:w-[40%] p-6 bg-white">
                   <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">System Details</h3>
   
                   {/* Details List */}
                   <ul className="text-gray-700 text-sm space-y-3 mb-6">
                     <li className="flex items-start">
                       <span className="w-2 h-2 bg-[#6C9E33] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                       <span>{pkg.solarModules}</span>
                     </li>
                     <li className="flex items-start">
                       <span className="w-2 h-2 bg-[#6C9E33] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                       <span>{pkg.inverter}</span>
                     </li>
                     <li className="flex items-start">
                       <span className="w-2 h-2 bg-[#6C9E33] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                       <span>{pkg.batteries}</span>
                     </li>
                     <li className="flex items-start">
                       <span className="w-2 h-2 bg-[#6C9E33] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                       <span>{pkg.mountingStructure}</span>
                     </li>
                     <li className="flex items-start">
                       <span className="w-2 h-2 bg-[#6C9E33] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                       <span>{pkg.wiringComponents}</span>
                     </li>
                     <li className="flex items-start">
                       <span className="w-2 h-2 bg-[#6C9E33] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                       <span>{pkg.services}</span>
                     </li>
                     <li className="flex items-start">
                       <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                       <span className="font-medium text-red-600">{pkg.batteryNote}</span>
                     </li>
                   </ul>
   
                   {/* Price Section */}
                   <div className="bg-[#83C700] text-white text-center rounded-lg font-bold">
                     <div className="text-lg">
                       FROM RS {pkg.priceFrom}/-
                     </div>
                     <div className="text-lg">
                       TO RS {pkg.priceTo}/-
                     </div>
                   </div>
                   <div className='mt-6 bg-blue-900 text-white text-center '>
                      <button className=' font-bold p-3'>GET QUOTE</button>
                     </div>
                 </div>
               </div>
             </div>
           ))}
         </div>
  );
};

export default SolarPackageCards;
