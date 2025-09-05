'use client';
import React from 'react'
import Calltoexpert from '../../../Components/Calltoexpert'
import GetQuoteModal from '../../../Components/Get-quote';
import Image from 'next/image';

const page = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section - Responsive heights */}
      <div className="flex justify-center items-center w-full h-64 text-center relative">
        {/* Mobile Image */}
        <Image
          src="/Cover-SolarBatteries-mob.png"
          alt="Batteries Mobile"
          fill
          priority
          className="object-cover object-left-top md:hidden"
        />

        {/* Desktop / Tablet Image */}
        <Image
          src="/Cover-SolarBatteries.png"
          alt="battery Desktop"
          fill
          priority
          className="object-cover object-center hidden md:block"
        />
      </div>

      {/* Intro Section - Better responsive padding and typography */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12'>
        <h1 className='text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#082E6F] mb-6 sm:mb-8 border-l-[5px] border-r-[5px] border-[#82C701] px-2 sm:px-4 py-2'>
          SOLAR BATTERIES
        </h1>
        <p className="text-base sm:text-lg leading-relaxed mb-4 text-justify sm:text-left">
          During the day, solar panels do an excellent job of supplying energy. But for a system that works really well on its own, especially at night or during power outages, you need a backup. That's where solar batteries come in – they're like the superheroes of storage. Solar batteries store the energy produced by the panels for use at night or during power outages. And if you've incorporated net metering, excess electricity can be sold back to the grid, maximizing the benefits from the solar system.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-justify sm:text-left">
          At <span className="font-bold text-[#82C701]">GO GREEN SOLAR</span>, we go above and beyond. We use top-notch, super-efficient and reliable batteries in every installation. Because when it comes to saving your solar power, we only believe in the best.
        </p>
      </div>

      <Calltoexpert />

      {/* Trusted Brands Section - Better responsive spacing */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12'>
        <h1 className='text-center text-xl sm:text-2xl lg:text-3xl font-bold text-[#082E6F] pb-2.5 mb-6 sm:mb-8 border-l-[5px] border-r-[5px] border-[#82C701] px-2 sm:px-4 py-2'>
          GO GREEN SOLAR'S TRUSTED SOLAR BATTERIES BRAND
        </h1>

        {/* Tubular Batteries - Improved mobile layout */}
        <div className='flex flex-col lg:flex-row gap-6 sm:gap-8 items-center mb-12 sm:mb-16'>
          {/* Left side - Text content */}
          <div className='w-full lg:w-1/2 order-2 lg:order-1'>
            <h2 className='text-xl sm:text-2xl font-bold text-[#82C701] mb-3 sm:mb-4 text-center lg:text-left'>
              TUBULAR BATTERIES
            </h2>
            <p className='text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 text-justify'>
              Tubular batteries, a type of lead-acid battery with tubular positive plates, are perfect for inverter/UPS use as they can hold more acid and water. Also known as Deep Cycle batteries, they are suitable for power backup in inverter/UPS and Solar systems. These are the most common and affordable battery options. They're reliable and durable but have a shorter lifespan, requiring more maintenance compared to lithium batteries. However, their prices are quite low and accessible to most customers.
            </p>
            <ul className="list-disc pl-6 text-[#082E6F] font-medium text-sm sm:text-base">
              <li>Osaka</li>
              <li>AGS</li>
              <li>Phoenix</li>
            </ul>
          </div>

          {/* Right side - Image */}
          <div className='w-full lg:w-1/2 order-1 lg:order-2'>
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
              <Image
                src="/TUBULAR-BATTERIES.png"
                alt="Tubular solar batteries"
                fill
                className='object-cover rounded-xl shadow-lg border border-[#82C701]'
              />
            </div>
          </div>
        </div>

        {/* Lithium Ion Batteries - Improved mobile layout */}
        <div className='flex flex-col lg:flex-row gap-6 sm:gap-8 items-center'>
          {/* Left - Image */}
          <div className='w-full lg:w-1/2'>
            <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
              <Image
                src="/LITHIUM-ION-BATTERIES.png"
                alt="Lithium Ion solar batteries"
                fill
                className='object-cover rounded-xl shadow-lg border border-[#082E6F]'
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className='w-full lg:w-1/2'>
            <h2 className='text-xl sm:text-2xl font-bold text-[#82C701] mb-3 sm:mb-4 text-center lg:text-left'>
              LITHIUM ION BATTERIES
            </h2>
            <p className='text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 text-justify'>
              Lithium-ion batteries stand out as the preferred choice among rechargeable batteries. Comprising one or more lithium-ion cells with a protective circuit board, these batteries are renowned for their extended lifespan, increased efficiency and lightweight design. Lithium Ion Batteries are becoming increasingly popular due to their longer lifespan, higher efficiency and lighter weight. However, they come at a slightly higher initial cost.
            </p>
            <ul className="list-disc pl-6 text-[#082E6F] font-medium text-sm sm:text-base">
              <li>Narada</li>
              <li>PylonTech</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Button - Better responsive spacing */}
      <div className="flex justify-center mb-6 sm:mb-8 px-4">
        <div className='mt-4 sm:mt-6 text-center'>
          <GetQuoteModal />
        </div>
      </div>
    </div>
  )
}

export default page