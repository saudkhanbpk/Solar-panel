import React from 'react'
import Calltoexpert from '../../../Components/Calltoexpert'

const page = () => {
  return (
    <div>
      <div className="flex justify-center text-center items-center bg-[url(/Cover-SolarBatteries.png)]  bg-cover bg-center h-64 ">

      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h1 className='text-center text-3xl font-bold text-gray-800 mb-8 border-l-[5px] border-r-[5px] border-gray-800'>SOLAR BATTERIES</h1>
        <p>
          During the day, solar panels do an excellent job of supplying energy. But for a system that works really well on its own, especially at night or during power outages, you need a backup. That’s where solar batteries come in – they’re like the superheroes of storage. Solar batteries store the energy produced by the panels for use at night or during power outages. And if you’ve incorporated net metering, excess electricity can be sold back to the grid, maximizing the benefits from the solar system.
        </p>
        <p>At Alpha Solar, we go above and beyond.  We use top-notch, super-efficient and reliable batteries in every installation. Because when it comes to saving your solar power, we only believe in the best</p>
      </div>
      <Calltoexpert />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h1 className='text-center text-3xl font-bold text-gray-800 pb-2.5 mb-8 border-l-[5px] border-r-[5px] border-gray-800'>
          ALPHA SOLAR'S TRUSTED SOLAR BATTERIES BRAND
        </h1>
        <div className='flex flex-col md:flex-row gap-8'>
          {/* Left side - Text content */}
          <div className='md:w-1/2'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>TUBULAR BATTERIES</h2>
            <p className='text-base leading-relaxed'>
              Tubular batteries, a type of lead-acid battery with tubular positive plates, are perfect for inverter/UPS use as they can hold more acid and water. Also known as Deep Cycle batteries, they are suitable for power backup in inverter/UPS and Solar systems. These are the most common and affordable battery options. They're reliable and durable but have a shorter lifespan, requiring more maintenance compared to lithium batteries. However, their prices are quite low and accessible to most customers.            </p>
            <ul>
              <li>Osaka</li>
              <li>AGS</li>
              <li>Phoenix</li>
            </ul>
          </div>

          {/* Right side - Image */}
          <div className='md:w-1/2 '>
            {/* Replace this with your actual image */}
            <img
              src="/TUBULAR-BATTERIES.png"
              alt="Bifacial solar panels"
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='md:w-1/2'>
            {/* Replace this with your actual image */}
            <img
              src="/LITHIUM-ION-BATTERIES.png"
              alt="Bifacial solar panels"
              className='w-full h-full object-cover'
            />
          </div>

          <div className='md:w-1/2'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>LITHIUM ION BATTERIES</h2>
            <p className='text-base leading-relaxed'>
              Lithium-ion batteries stand out as the preferred choice among rechargeable batteries. Comprising one or more lithium-ion cells with a protective circuit board, these batteries are renowned for their extended lifespan, increased efficiency and lightweight design. Lithium Ion Batteries are becoming increasingly popular due to their longer lifespan, higher efficiency and lighter weight. However, they come at a slightly higher initial cost.
            </p>
            <ul>
              <li>Narada</li>
              <li>PylonTech</li>
            </ul>
          </div>
        </div>
      </div>


      <div className="flex justify-center">
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded m-4">
          Get A Quote
        </button>
      </div>

    </div>
  )
}

export default page
