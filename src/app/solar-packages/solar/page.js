import React from 'react'
import SolarSystemCard from '../../../Components/SolarSystemCard'

const solar = () => {
  return (
    <div>
      <div className="flex justify-center text-center items-center bg-[url(/solar.jpg)]  bg-cover bg-center h-64 ">
        <h1 className='text-6xl font-extrabold text-[#082E6F] '>ON GRID SOLAR SYSTEM</h1>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h1 className='text-center text-3xl font-bold text-gray-800 mb-8 border-l-[5px] border-r-[5px] border-gray-800'>Reduce Your Electricity Bills with Alpha Solar On-Grid System Packages</h1>
        <p>Our Solar Packages are specially designed for both domestic and commercial users to reduce their electricity bills. With the added benefit of Net Metering, you have the opportunity to sell any excess electricity you generate back to the grid, allowing you to reach a point where your electricity bill is reduced to zero.

          To provide our customers with convenience, Alpha Solar offers a range of different on-grid solar system packages at affordable prices. The Alpha On-Grid Solar System price in Pakistan, including net metering, starts at just Rs. 734,000/- for a 5kW on-grid system. As the system size increases, it becomes even more cost-effective; our 10kW on-grid system is available for just Rs. 991,000/-, and the price for a 25kW on-grid system is only Rs. 1,882,000</p>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h1 className='text-center text-3xl font-bold text-gray-800 mb-8 border-l-[5px] border-r-[5px] border-gray-800'>On-Grid Solar Systems</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SolarSystemCard />
          <SolarSystemCard />
          <SolarSystemCard />
          <SolarSystemCard />
          <SolarSystemCard />
          <SolarSystemCard />
          <SolarSystemCard />
          <SolarSystemCard />
        </div>
      </div>


    </div>
  )
}

export default solar
