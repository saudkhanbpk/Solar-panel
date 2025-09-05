// "use client"
import React from 'react'
import SolarPackageCards from '../../../Components/SolarSystemCard'
import Image from 'next/image'

const Hybrid = () => {
  return (
    <div>
      {/* Hero Section */}
   <div className="flex justify-center items-center w-full h-64 text-center relative">
      {/* Mobile Image */}
      <Image
        src="/Cover-Hybrid-Mobile.png"
        alt="Hybrid Mobile"
        fill
        priority
        className="object-cover object-left-top md:hidden"
      />

      {/* Desktop / Tablet Image */}
      <Image
        src="/Cover-Hybrid.png"
        alt="Hybrid Desktop"
        fill
        priority
        className="object-cover object-center hidden md:block"
      />
    </div>

      {/* Intro Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1 className='text-center text-3xl font-extrabold text-[#082E6F] mb-8 border-l-[6px] border-r-[6px] border-[#82C701] inline-block px-4 py-2 rounded-lg shadow-lg'>
          Reduce Your Electricity Bills with <b className='text-[#82c701]'>GO GREEN</b> SOLAR Packages
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          <span className='text-[#82c701]'>GO GREEN</span> SOLAR only believes in using quality Solar Solutions that will perform to, or above, our customer’s expectations. We want to ensure that our solar solutions provide you with the opportunity to take control of your energy consumption and positively change your energy behavior, resulting in savings. Our solar solutions are designed with that aim in mind and are backed by <span className="font-semibold text-[#82C701]">02-Years workmanship warranty</span>. Scroll down to see our solar packages.
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
