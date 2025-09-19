// 'use client';
import React from 'react'
import SolarPackageCards from '../../../Components/SolarSystemCard'


const page = () => {
  return (
    <div className="bg-gradient-to-b from-[#f9fdf6] to-white">
      {/* Banner Section */}
      <div className="flex justify-center text-center items-center bg-[url(/.png)] bg-full bg-green-100 bg-center  shadow-lg">
        <img src="/offgrid.png" alt="" className='h-[60vh] w-full mx-auto object-fill '/>
      </div>

      {/* Intro Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1 className='text-center text-3xl font-bold text-[#082E6F] mb-8 border-l-[5px] border-r-[5px] border-[#82C701] px-2 inline-block'>
          Complete Independence with Reliable and Cost-Effective Off-Grid Solar Systems
        </h1>
        <p className="text-gray-700 leading-relaxed text-lg text-center">
          At <span className="text-[#82C701] font-semibold">GO GREEN SOLAR</span>, we provide 
          the most dependable <span className="text-[#082E6F] font-semibold">Off-Grid Solar Solutions</span> for 
          households and businesses in areas where grid electricity is either unreliable or unavailable. 
          Our off-grid systems are designed with high-performance inverters and long-life batteries, 
          ensuring 24/7 power backup. These systems allow you to enjoy energy independence, reduce 
          reliance on the utility grid, and secure a consistent power supply for your home or workplace. 
          Every installation comes with a <span className="text-[#082E6F] font-semibold">10-year battery warranty</span> 
          and a <span className="text-[#82C701] font-semibold">2-year workmanship warranty</span> for peace of mind.
        </p>
      </div>

      {/* Pricing Section */}
      {/* <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-[#f4fbf0] rounded-2xl shadow-md'>
        <h1 className='text-center text-3xl font-bold text-[#082E6F] mb-8 border-l-[5px] border-r-[5px] border-[#82C701] px-2 inline-block'>
          Off-Grid Solar System Price in Pakistan
        </h1>
        <p className="text-gray-700 leading-relaxed text-lg text-center">
          <span className="text-[#82C701] font-semibold">GO GREEN POWER WITH SUN SOLAR</span> offers 
          customized Off-Grid solar packages that ensure complete energy independence. 
          The <span className="text-[#082E6F] font-semibold">5kW Off-Grid System</span> is priced at 
          <span className="text-[#82C701] font-semibold"> PKR 950,000</span>, perfect for small households. 
          For medium-sized homes, the <span className="text-[#082E6F] font-semibold">10kW Off-Grid System</span> 
          is available at <span className="text-[#82C701] font-semibold">PKR 1,750,000</span>. 
          For large homes, farms, or small industries, the <span className="text-[#082E6F] font-semibold">20kW Off-Grid System</span> 
          is offered at <span className="text-[#82C701] font-semibold">PKR 2,950,000</span>. 
          These prices include high-quality inverters and batteries with a 
          <span className="text-[#082E6F] font-semibold"> 10-year replacement warranty</span>, 
          delivering maximum efficiency and durability.
        </p>
      </div> */}
      
      {/* Product Cards Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1 className='text-center text-3xl font-bold text-[#082E6F] mb-8 border-l-[5px] border-r-[5px] border-[#82C701] px-2 inline-block'>
          Off-Grid Solar Systems
        </h1>
        <div className="gap-8">
          <SolarPackageCards category="Solar Off-Grid System" />
        </div>
      </div>
    </div>
  )
}

export default page
