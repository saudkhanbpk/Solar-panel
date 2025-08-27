// "use client"
import React from 'react'
import SolarPackageCards from '../../../Components/SolarSystemCard'

const Hybrid = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex justify-center text-center items-center bg-[url(/Cover-Hybrid.png)] bg-cover bg-center h-64">
        {/* <h1 className='text-6xl font-extrabold text-[#082E6F]'>HYBRID SOLAR SYSTEM</h1> */}
      </div>

      {/* Intro Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1 className='text-center text-3xl font-extrabold text-[#082E6F] mb-8 border-l-[6px] border-r-[6px] border-[#82C701] inline-block px-4 py-2 rounded-lg shadow-lg'>
          Reduce Your Electricity Bills with GO GREEN POWER WITH SUN SOLAR Packages
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          GO GREEN POWER WITH SUN SOLAR only believes in using quality Solar Solutions that will perform to, or above, our customer’s expectations. We want to ensure that our solar solutions provide you with the opportunity to take control of your energy consumption and positively change your energy behavior, resulting in savings. Our solar solutions are designed with that aim in mind and are backed by <span className="font-semibold text-[#82C701]">02-Years workmanship warranty</span>. Scroll down to see our solar packages.
        </p>
      </div>

      {/* Price Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#F9FAFB] rounded-xl shadow-md'>
        <h1 className='text-center text-3xl font-extrabold text-[#082E6F] mb-8 border-l-[6px] border-r-[6px] border-[#82C701] inline-block px-4 py-2 rounded-lg shadow-lg'>
          Solar System Price In Pakistan
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          GO GREEN POWER WITH SUN SOLAR knows how inflation has affected the common man’s buying power in Pakistan. To make solar power affordable for everyone, GO GREEN POWER WITH SUN SOLAR provides the most reasonable and budget-friendly solar system price in Pakistan.
          <br /><br />
          For your convenience, GO GREEN POWER WITH SUN SOLAR introduces solar packages of different sizes. The price in Pakistan is unmatched, starting from just <span className="font-semibold text-[#082E6F]">RS. 351,000/-</span> for a hybrid 3kW solar system without batteries, <span className="font-semibold text-[#082E6F]">RS. 528,000/-</span> for 6kW, <span className="font-semibold text-[#082E6F]">RS. 938,000/-</span> for 10kW, and <span className="font-semibold text-[#082E6F]">RS. 1,327,500/-</span> for 12kW. Moreover, customized solar systems tailored to your specific needs and requirements are also available at a comparatively lower solar system price in Pakistan.
        </p>
      </div>

      {/* Packages Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1 className='text-center text-3xl font-extrabold text-[#082E6F] mb-8 border-l-[6px] border-r-[6px] border-[#82C701] inline-block px-4 py-2 rounded-lg shadow-lg'>
          Hybrid Solar Systems
        </h1>
        <div className=" gap-8">
           <SolarPackageCards category="Solar Hybrid System" />
        </div>
      </div>
    </div>
  )
}

export default Hybrid
