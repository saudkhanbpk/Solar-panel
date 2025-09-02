'use client';
import React from 'react'
import Calltoexpert from '../../../Components/Calltoexpert'
import GetQuoteModal from '../../../Components/Get-quote';
const page = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex justify-center text-center items-center bg-[url(/solarpanel.png)] bg-cover bg-center h-64">
      </div>

      {/* Intro Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1 className='text-center text-3xl font-extrabold text-[#082E6F] mb-8 border-l-[6px] border-r-[6px] border-[#82C701] inline-block px-4 py-2 rounded-lg shadow-lg'>
          Solar Panels
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          We use top-quality solar panels from international brands for all our solar installations in Pakistan, be it for homes, businesses, farms or industries. The efficiency of these solar panels directly influences your electricity savings – the higher the efficiency, the more you save. At <span className="font-semibold text-[#82C701]">GO GREEN SOLAR</span>, we understand how crucial it is to stay updated with the advancements in solar technology. That’s why our engineers and experts closely monitor emerging technologies and their efficiency to ensure our customers always receive the best available products.
        </p>
      </div>

      {/* Bifacial Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1 className='text-center text-3xl font-extrabold text-[#082E6F] pb-2.5 mb-8 border-l-[6px] border-r-[6px] border-[#82C701] inline-block px-4 py-2 rounded-lg shadow-lg'>
          Different Types of Highly Efficient Solar Panels
        </h1>

        <div className='flex flex-col md:flex-row gap-8 items-center'>
          <div className='md:w-1/2'>
            <h2 className='text-2xl font-bold text-[#082E6F] mb-4'>Bifacial solar panels</h2>
            <p className='text-base leading-relaxed text-gray-700'>
              Bifacial solar panels have the ability to generate electricity from both sides of the module, making them the most popular solar panels in Pakistan at the moment. They are highly efficient and produce more electricity per watt compared to other technologies in the market. While the price of bifacial solar panels in Pakistan is a bit higher than mono panels, their high production rate makes them the top choice for many.
            </p>
          </div>
          <div className='md:w-1/2'>
            <img
              src="/BIFACIAL-SOLAR.png"
              alt="Bifacial solar panels"
              className='w-full h-full object-cover rounded-lg shadow-lg border-2 border-[#82C701]'
            />
          </div>
        </div>
      </div>

      {/* Mono Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='flex flex-col md:flex-row gap-8 items-center'>
          <div className='md:w-1/2'>
            <img
              src="/MONOCRYSTALLINE-SOLAR.png"
              alt="MONOCRYSTALLINE-SOLAR"
              className='w-full h-full object-cover rounded-lg shadow-lg border-2 border-[#082E6F]'
            />
          </div>
          <div className='md:w-1/2'>
            <h2 className='text-2xl font-bold text-[#082E6F] mb-4'>Monocrystalline solar panels</h2>
            <p className='text-base leading-relaxed text-gray-700'>
              Monocrystalline solar panels, despite generating electricity from only one side facing the sun, continue to dominate the solar landscape in Pakistan due to their exceptional electricity production. Recognized for their superior efficiency, these panels feature a single crystal structure of high-purity silicon. This technology guarantees reliable and effective energy generation, making them a popular and enduring choice in the country.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Expert */}
      <Calltoexpert />

      {/* Brands Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1 className='text-center text-3xl font-extrabold text-[#082E6F] pb-2.5 mb-10 border-l-[6px] border-r-[6px] border-[#82C701] inline-block px-4 py-2 rounded-lg shadow-lg'>
          GO GREEN SOLAR’s Top Brands: Trusted by Millions
        </h1>

        {/* Canadian Solar */}
        <div className='flex flex-col md:flex-row gap-8 items-center'>
          <div className='md:w-1/2'>
            <h2 className='text-2xl font-bold text-[#082E6F] mb-4'>Canadian Solar Panels</h2>
            <p className='text-base leading-relaxed text-gray-700'>
              Bifacial solar panels have the ability to generate electricity from both sides of the module, making them the most popular solar panels in Pakistan at the moment. They are highly efficient and produce more electricity per watt compared to other technologies in the market. While the price of bifacial solar panels in Pakistan is a bit higher than mono panels, their high production rate makes them the top choice for many.
            </p>
          </div>
          <div className='md:w-1/2'>
            <img
              src="/canadian.png"
              alt="Canadian Solar panels"
              className='w-full h-full object-cover rounded-lg shadow-lg border-2 border-[#82C701]'
            />
          </div>
        </div>

        {/* Longi Solar */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
          <div className='flex flex-col md:flex-row gap-8 items-center'>
            <div className='md:w-1/2'>
              <img
                src="/longisolar.png"
                alt="Longi Solar panels"
                className='w-full h-full object-cover rounded-lg shadow-lg border-2 border-[#082E6F]'
              />
            </div>
            <div className='md:w-1/2'>
              <h2 className='text-2xl font-bold text-[#082E6F] mb-4'>Monocrystalline solar panels</h2>
              <p className='text-base leading-relaxed text-gray-700'>
                Monocrystalline solar panels, despite generating electricity from only one side facing the sun, continue to dominate the solar landscape in Pakistan due to their exceptional electricity production. Recognized for their superior efficiency, these panels feature a single crystal structure of high-purity silicon. This technology guarantees reliable and effective energy generation, making them a popular and enduring choice in the country.
              </p>
            </div>
          </div>
        </div>

        {/* Jinko Solar */}
        <div className='flex flex-col md:flex-row gap-8 items-center'>
          <div className='md:w-1/2'>
            <h2 className='text-2xl font-bold text-[#082E6F] mb-4'>Bifacial solar panels</h2>
            <p className='text-base leading-relaxed text-gray-700'>
              Bifacial solar panels have the ability to generate electricity from both sides of the module, making them the most popular solar panels in Pakistan at the moment. They are highly efficient and produce more electricity per watt compared to other technologies in the market. While the price of bifacial solar panels in Pakistan is a bit higher than mono panels, their high production rate makes them the top choice for many.
            </p>
          </div>
          <div className='md:w-1/2'>
            <img
              src="/jinko.png"
              alt="Jinko Solar panels"
              className='w-full h-full object-cover rounded-lg shadow-lg border-2 border-[#82C701]'
            />
          </div>
        </div>

        {/* JA Solar */}
        <div className='flex flex-col md:flex-row gap-8 items-center mt-12'>
          <div className='md:w-1/2'>
            <img
              src="/jasolar.png"
              alt="JA Solar panels"
              className='w-full h-full object-cover rounded-lg shadow-lg border-2 border-[#082E6F]'
            />
          </div>
          <div className='md:w-1/2'>
            <h2 className='text-2xl font-bold text-[#082E6F] mb-4'>Monocrystalline solar panels</h2>
            <p className='text-base leading-relaxed text-gray-700'>
              Monocrystalline solar panels, despite generating electricity from only one side facing the sun, continue to dominate the solar landscape in Pakistan due to their exceptional electricity production. Recognized for their superior efficiency, these panels feature a single crystal structure of high-purity silicon. This technology guarantees reliable and effective energy generation, making them a popular and enduring choice in the country.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mb-8">
        <div className='mt-6  text-center '>
          <GetQuoteModal />
        </div>
      </div>
    </div>
  )
}

export default page
