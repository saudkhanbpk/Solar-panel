'use client';
import React from 'react'
import Calltoexpert from '../../../Components/Calltoexpert'
import GetQuoteModal from '../../../Components/Get-quote';
import Image from 'next/image';


const page = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="flex justify-center items-center w-full h-64 text-center relative">
                          {/* Mobile Image */}
                          <Image
                            src="/Cover-image-Inverter-mob.png"
                            alt="INVERTERS Mobile"
                            fill
                            priority
                            className="object-cover object-left-top md:hidden"
                          />
                    
                          {/* Desktop / Tablet Image */}
                          <Image
                            src="/solarinverter.png"
                            alt="Inverter Desktop"
                            fill
                            priority
                            className="object-cover object-center hidden md:block"
                          />
                        </div>
      

      {/* Intro Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1 className='text-center text-3xl font-bold text-[#082E6F] mb-8 border-l-[5px] border-r-[5px] border-[#82C701] inline-block px-6'>
          Solar Panels
        </h1>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            With rising electricity bills and long hours of load shedding, people in Pakistan are now shifting towards renewable energy, with solar power emerging as the leading choice.
          </p>
          <p>
            A vital part of any solar system is the <span className="font-semibold text-[#82C701]">solar inverter</span>. It converts DC from the panels into usable AC while also monitoring performance and alerting users about issues or maintenance needs.
          </p>
          <p>
            <span className="font-semibold text-[#82C701]">GO GREEN SOLAR</span> ensures every installation includes top-quality inverters from trusted brands. These inverters are highly efficient, reliable, covered by warranty, and easy on the budget.
          </p>

        </div>
      </div>

      <Calltoexpert />

      {/* On-Grid Inverters Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h1 className='text-center text-3xl font-bold text-[#082E6F] pb-2.5 mb-10 border-l-[5px] border-r-[5px] border-[#82C701] inline-block px-6'>
          Different Types of Highly Efficient Solar Panels
        </h1>

        <div className='flex flex-col md:flex-row gap-8 items-center'>
          {/* Left side - Text content */}
          <div className='md:w-1/2'>
            <h2 className='text-2xl font-bold text-[#82C701] mb-4'>ON-GRID INVERTERS</h2>
            <p className='text-base leading-relaxed text-gray-700'>
              Grid-tied inverters are connected to the grid, and net metering is mandatory for this inverter type. When they convert DC to AC, the generated electricity is first used for household appliances. If the system produces surplus electricity, these inverters feed the excess back into the grid. With net metering, you can track the units you use and the units you return to the grid.
            </p>
            <b className="text-[#082E6F]">Here is the list of GO GREEN SOLAR’s Preferred On-Grid inverters in Pakistan:</b>
            <ul className='list-disc pl-5 mt-2 space-y-1 text-gray-700'>
              <li>Fox Ess</li>
              <li>Growatt</li>
              <li>Soils</li>
              <li>Hauwie</li>
              <li>Sofar</li>
              <li>Goodwe</li>
            </ul>
          </div>

          {/* Right side - Image */}
          <div className='md:w-1/2'>
            <img
              src="/ON-GRID-INVERTERS.png"
              alt="On-grid inverters"
              className='w-full h-full object-cover rounded-lg shadow-lg border border-[#082E6F]/20'
            />
          </div>
        </div>
      </div>

      {/* Hybrid Inverters Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='flex flex-col md:flex-row gap-8 items-center'>
          <div className='md:w-1/2'>
            <img
              src="/HYBRID-INVERTERS.png"
              alt="Hybrid inverters"
              className='w-full h-full object-cover rounded-lg shadow-lg border border-[#82C701]/20'
            />
          </div>

          <div className='md:w-1/2'>
            <h2 className='text-2xl font-bold text-[#82C701] mb-4'>HYBRID SOLAR INVERTERS</h2>
            <p className='text-base leading-relaxed text-gray-700'>
              Hybrid inverters are the most commonly installed types in Pakistan because they provide the advantage of incorporating a battery backup system and optional net metering. These solar inverters are designed to smoothly convert DC into AC for household usage, storing excess produced energy in batteries for later use. This feature enhances the financial benefits for consumers. Additionally, they can easily switch between solar power, grid energy and the battery backup system, making them versatile and efficient for various energy scenarios.
            </p>
            <p className="text-gray-700 mt-3">
              <b className="text-[#082E6F]">Here is the list of GO GREEN SOLAR’s Preferred Hybrid inverters in Pakistan:</b>
            </p>
            <ul className='list-disc pl-5 mt-2 space-y-1 text-gray-700'>
              <li>Inverex</li>
              <li>Solarmax</li>
              <li>Maxpower</li>
              <li>Fox Ess</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mb-8">
        <div className='mt-6 text-center '>
          <GetQuoteModal />
        </div>
      </div>
    </div>
  )
}

export default page
