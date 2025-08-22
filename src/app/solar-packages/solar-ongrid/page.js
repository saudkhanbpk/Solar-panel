import React from 'react'
import SolarSystemCard from '../../../Components/pakages'

const Solar = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="flex justify-center text-center items-center bg-[url(/on-gride.png)] bg-cover bg-center h-64 relative"> </div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-center text-3xl font-bold text-[#082E6F] mb-8 border-l-[5px] border-r-[5px] border-[#82C701] inline-block px-4">
          Reduce Your Electricity Bills with <br />
          <span className="text-[#82C701]">GO GREEN POWER WITH SUN SOLAR</span> On-Grid System Packages
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed bg-white p-6 rounded-xl shadow-md border-l-4 border-[#82C701]">
          Our Solar Packages are specially designed for both domestic and commercial users to reduce their electricity bills. With the added benefit of Net Metering, you have the opportunity to sell any excess electricity you generate back to the grid, allowing you to reach a point where your electricity bill is reduced to zero.
          <br /><br />
          To provide our customers with convenience, <span className="font-semibold text-[#082E6F]">GO GREEN POWER WITH SUN SOLAR</span> offers a range of different on-grid solar system packages at affordable prices. The On-Grid Solar System price in Pakistan, including net metering, starts at just <span className="text-[#82C701] font-bold">Rs. 734,000/-</span> for a 5kW on-grid system. As the system size increases, it becomes even more cost-effective; our 10kW on-grid system is available for just <span className="text-[#82C701] font-bold">Rs. 991,000/-</span>, and the price for a 25kW on-grid system is only <span className="text-[#82C701] font-bold">Rs. 1,882,000/-</span>.
        </p>
      </div>

      {/* On-Grid Systems Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-center text-3xl font-bold text-[#082E6F] mb-10 border-l-[5px] border-r-[5px] border-[#82C701] inline-block px-4">
          On-Grid Solar Systems
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

export default Solar
