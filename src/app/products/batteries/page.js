import React from 'react'
import Calltoexpert from '../../../Components/Calltoexpert'

const page = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Cover Section */}
      <div className="flex justify-center text-center items-center bg-[url(/Cover-SolarBatteries.png)] bg-cover bg-center h-64">
        {/* Empty background section */}
      </div>

      {/* Intro Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h1 className='text-center text-3xl font-bold text-[#082E6F] mb-8 border-l-[5px] border-r-[5px] border-[#82C701]'>
          SOLAR BATTERIES
        </h1>
        <p className="text-lg leading-relaxed mb-4">
          During the day, solar panels do an excellent job of supplying energy. But for a system that works really well on its own, especially at night or during power outages, you need a backup. That’s where solar batteries come in – they’re like the superheroes of storage. Solar batteries store the energy produced by the panels for use at night or during power outages. And if you’ve incorporated net metering, excess electricity can be sold back to the grid, maximizing the benefits from the solar system.
        </p>
        <p className="text-lg leading-relaxed">
          At <span className="font-bold text-[#82C701]">GO GREEN POWER WITH SUN SOLAR</span>, we go above and beyond. We use top-notch, super-efficient and reliable batteries in every installation. Because when it comes to saving your solar power, we only believe in the best.
        </p>
      </div>

      <Calltoexpert />

      {/* Tubular Batteries */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h1 className='text-center text-3xl font-bold text-[#082E6F] pb-2.5 mb-8 border-l-[5px] border-r-[5px] border-[#82C701]'>
          GO GREEN POWER WITH SUN SOLAR'S TRUSTED SOLAR BATTERIES BRAND
        </h1>
        <div className='flex flex-col md:flex-row gap-8 items-center'>
          {/* Left side - Text content */}
          <div className='md:w-1/2'>
            <h2 className='text-2xl font-bold text-[#82C701] mb-4'>TUBULAR BATTERIES</h2>
            <p className='text-base leading-relaxed mb-4'>
              Tubular batteries, a type of lead-acid battery with tubular positive plates, are perfect for inverter/UPS use as they can hold more acid and water. Also known as Deep Cycle batteries, they are suitable for power backup in inverter/UPS and Solar systems. These are the most common and affordable battery options. They're reliable and durable but have a shorter lifespan, requiring more maintenance compared to lithium batteries. However, their prices are quite low and accessible to most customers.
            </p>
            <ul className="list-disc pl-6 text-[#082E6F] font-medium">
              <li>Osaka</li>
              <li>AGS</li>
              <li>Phoenix</li>
            </ul>
          </div>

          {/* Right side - Image */}
          <div className='md:w-1/2'>
            <img
              src="/TUBULAR-BATTERIES.png"
              alt="Tubular solar batteries"
              className='w-full h-full object-cover rounded-xl shadow-lg border border-[#82C701]'
            />
          </div>
        </div>
      </div>

      {/* Lithium Ion Batteries */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col md:flex-row gap-8 items-center'>
          {/* Left - Image */}
          <div className='md:w-1/2'>
            <img
              src="/LITHIUM-ION-BATTERIES.png"
              alt="Lithium Ion solar batteries"
              className='w-full h-full object-cover rounded-xl shadow-lg border border-[#082E6F]'
            />
          </div>

          {/* Right - Content */}
          <div className='md:w-1/2'>
            <h2 className='text-2xl font-bold text-[#82C701] mb-4'>LITHIUM ION BATTERIES</h2>
            <p className='text-base leading-relaxed mb-4'>
              Lithium-ion batteries stand out as the preferred choice among rechargeable batteries. Comprising one or more lithium-ion cells with a protective circuit board, these batteries are renowned for their extended lifespan, increased efficiency and lightweight design. Lithium Ion Batteries are becoming increasingly popular due to their longer lifespan, higher efficiency and lighter weight. However, they come at a slightly higher initial cost.
            </p>
            <ul className="list-disc pl-6 text-[#082E6F] font-medium">
              <li>Narada</li>
              <li>PylonTech</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button className="bg-[#82C701] hover:bg-[#6db600] text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300">
          Get A Quote
        </button>
      </div>
    </div>
  )
}

export default page
