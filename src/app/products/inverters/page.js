import React from 'react'
import Calltoexpert from '../../../Components/Calltoexpert'

const page = () => {
  return (
    <div>
      <div className="flex justify-center text-center items-center bg-[url(/solarinverter.png)]  bg-cover bg-center h-64 ">

      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h1 className='text-center text-3xl font-bold text-gray-800 mb-8 border-l-[5px] border-r-[5px] border-gray-800'>Solar Panels</h1>
        <p>In recent times, due to soaring electricity bills and prolonged hours of load shedding, people in Pakistan are increasingly turning to renewable sources for electricity production and solar energy has emerged as a leading choice.</p>
        <p>The efficiency of solar energy relies heavily on the components and products involved in the process, and one such crucial component is the solar inverter.&nbsp;Solar inverters not only convert the DC electricity produced by the panels into usable AC for home appliances, but they also monitor system performance, notifying users of errors or maintenance needs.</p>
        <p>Since the efficiency and conversion rate of inverters play a big role, Alpha Solar, in all its solar system installations, includes top of the line inverters from leading brands. These inverters are highly efficient, come with a strong warranty and are budget-friendly.</p>

      </div>

      <Calltoexpert />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h1 className='text-center text-3xl font-bold text-gray-800 pb-2.5 mb-8 border-l-[5px] border-r-[5px] border-gray-800'>
          Different Types of Highly Efficient Solar Panels
        </h1>

        <div className='flex flex-col md:flex-row gap-8'>
          {/* Left side - Text content */}
          <div className='md:w-1/2'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>ON-GRIDE INVERTERS</h2>
            <p className='text-base leading-relaxed'>
              Grid-tied inverters are connected to the grid, and net metering is mandatory for this inverter type. When they convert DC to AC, the generated electricity is first used for household appliances. If the system produces surplus electricity, these inverters feed the excess back into the grid. With net metering, you can track the units you use and the units you return to the grid.
            </p>
            <b>Here is the list of Alpha Solar’s Preferred On-Grid inverters in Pakistan.</b>
            <ul className='list-disc pl-5 mt-2'>
              <li>Fox Ess</li>
              <li>Growatt</li>
              <li>Soils</li>
              <li>Hauwie</li>
              <li>Sofar</li>
              <li>Goodwe</li>
            </ul>
          </div>

          {/* Right side - Image */}
          <div className='md:w-1/2 '>
            {/* Replace this with your actual image */}
            <img
              src="/ON-GRID-INVERTERS.png"
              alt="Bifacial solar panels"
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='md:w-1/2 '>
            {/* Replace this with your actual image */}
            <img
              src="/HYBRID-INVERTERS.png"
              alt="Bifacial solar panels"
              className='w-full h-full object-cover'
            />
          </div>

          <div className='md:w-1/2'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>HYBRID SOLAR INVERTERS</h2>
            <p className='text-base leading-relaxed'>
              Hybrid inverters are the most commonly installed types in Pakistan because they provide the advantage of incorporating a battery backup system and optional net metering. These solar inverters are designed to smoothly convert DC into AC for household usage, storing excess produced energy in batteries for later use. This feature enhances the financial benefits for consumers. Additionally, they can easily switch between solar power, grid energy and the battery backup system, making them versatile and efficient for various energy scenarios.
            </p>
            <p><b>Here is the list of Alpha Solar’s Preferred On-Grid inverters in Pakistan.</b></p>
            <ul className='list-disc pl-5 mt-2'>
              <li>Inverex</li>
              <li>Solarmax</li>
              <li>Maxpower</li>
              <li>Fox Ess</li>
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
