import React from 'react'
import SolarPackageCards from '../../../Components/SolarSystemCard'
import Image from 'next/image'


const Solar = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-green-50">
      {/* Hero Section */}  
         <div className="flex justify-center items-center w-full h-64 text-center relative">
              {/* Mobile Image */}
              <Image
                src="/Cover-On-grid-Mobile.png"
                alt="ON gride Mobile"
                fill
                priority
                className="object-cover object-left-top md:hidden"
              />
        
              {/* Desktop / Tablet Image */}
              <Image
                src="/on-gride.png"
                alt="On gride Desktop"
                fill
                priority
                className="object-cover object-center hidden md:block"
              />
            </div>
      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-center text-3xl font-bold text-[#082E6F] mb-8 border-l-[5px] border-r-[5px] border-[#82C701] inline-block px-4">
          Reduce Your Electricity Bills with <br />
          <span className="text-[#82C701]">GO GREEN SOLAR</span> On-Grid System Packages
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed bg-white p-6 rounded-xl shadow-md border-l-4 border-[#82C701]">
          Our Solar Packages are specially designed for both domestic and commercial users to reduce their electricity bills. With the added benefit of Net Metering, you have the opportunity to sell any excess electricity you generate back to the grid, allowing you to reach a point where your electricity bill is reduced to zero.
          <br /><br />
        </p>
      </div>

      {/* On-Grid Systems Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-center text-3xl font-bold text-[#082E6F] mb-10 border-l-[5px] border-r-[5px] border-[#82C701] inline-block px-4">
          On-Grid Solar Systems
        </h1>
        <div className=" gap-8">
          <SolarPackageCards category="Solar On-Grid System" />
        </div>
      </div>
    </div>
  )
}

export default Solar
