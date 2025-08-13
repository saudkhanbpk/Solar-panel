// "use client"
import React from 'react'
import SolarSystemCard from '../../../Components/SolarSystemCard'

const Hybrid = () => {
  return (
    <div>
      <div className="flex justify-center text-center items-center bg-[url(/solar.jpg)]  bg-cover bg-center h-64 ">
        <h1 className='text-6xl font-extrabold text-[#082E6F] '>HYBRID SOLAR SYSTEM</h1>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h1 className='text-center text-3xl font-bold text-gray-800 mb-8 border-l-[5px] border-r-[5px] border-gray-800'>Reduce Your Electricity Bills with Alpha Solar Packages</h1>
        <p>Alpha Solar only believes in using quality Solar Solutions that will perform to, or above, our customer’s expectations. We want to our ensure that our solar solutions provides you with the opportunity to take control of your energy consumption and positively change your energy behavior, resulting in savings. Our solar solutions are designed with that aim in mind and are backed by 02-Years workmanship warranty. Scroll down to see our solar packages.</p>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-8'>
        <h1 className='text-center text-3xl font-bold text-gray-800 mb-8 border-l-[5px] border-r-[5px] border-gray-800'>Solar System Price In Pakistan</h1>
        <p>Alpha Solar knows how inflation has affected the common man’s buying power in Pakistan. To make solar power affordable for everyone, Alpha Solar provides the most reasonable and budget-friendly solar system price in Pakistan.

          For your convenience, Alpha Solar introduces solar packages of different sizes. The Alpha Solar system price in Pakistan is unmatched, starting from just RS. 351,000/- for a hybrid 3kW solar system without batteries, RS. 528,000/-
          for 6kW, RS. 938,000 for 10kW, and RS. 1,327,500/- for 12kW. Moreover, customized solar systems tailored to your specific needs and requirements are also available at a comparatively lower solar system price in Pakistan.</p>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h1 className='text-center text-3xl font-bold text-gray-800 mb-8 border-l-[5px] border-r-[5px] border-gray-800'>Hybrid Solar Systems</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <SolarSystemCard/>
         <SolarSystemCard/>
         <SolarSystemCard/>
         <SolarSystemCard/>
         <SolarSystemCard/>
         <SolarSystemCard/>

        </div>
      </div>
    </div>
  )
}

export default Hybrid
