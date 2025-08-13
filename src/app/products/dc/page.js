import React from 'react'
import Calltoexpert from '../../../Components/Calltoexpert'

const page = () => {
  return (
    <div>
      <div className="flex justify-center text-center items-center bg-[url(/solar.jpg)] bg-cover bg-center h-48 sm:h-64 md:h-80">
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#082E6F] px-4'>DC HOME SYSTEM</h1>
      </div>


      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8'>
        <h1 className='text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-6 border-l-[5px] border-r-[5px] border-gray-800 px-4'>Alpha Solar Renewable Provides Best and High Quality DC Home System or Wind Energy System</h1>
        {/* <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'> */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Side - Text Content Divs */}
          <div className="md:w-1/2 flex flex-col gap-6">
            {/* First Nested Div */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">DC Home System</h3>
              <p className="text-gray-600">
                Have no power in your home or farms. Want an uninterrupted power supply @ a bear minimum of the price? Alpha Solar brings its DC home system @ best prices all over Pakistan. DC system is a solution to power problems where solar panels produce direct current and batteries store the same as well. There are no current loses in the DC system due to its uni-directional current flow. DC solar energy is the purest and eco-friendly form of electricity that is produced without burning of fossil fuels and hazardous gases. Want more information regarding DC system, contact our experts now +92 343-3813810.                </p>
            </div>

            {/* Second Nested Div */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Feasibility</h3>
              <p className="text-gray-600">
                Taking into account the feasibility of DC solar system in Pakistan, the system can work both in remote as well as developing areas of the country. Alpha Solar has installed and maintained DC systems all over Pakistan. Read out our case study on how Alpha Solar made Pakistan Army independent of power problems in Quetta, How we lit-up schools in remote areas of Bahawalnagar.              </p>
            </div>
          </div>

          {/* Right Side - Image Div */}
          <div className="md:w-1/2">
            <img
              src="/solar-street-light.jpg"  // Changed to more relevant image
              alt="Solar Street Light"
              className="w-full h-full rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
      <Calltoexpert />
      <br />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h1 className='text-center text-3xl font-bold text-gray-800 mb-8 border-l-[5px] border-r-[5px] border-gray-800'>Advantages of DC solar system in Pakistan</h1>
        <p>Keeping in mind the state of electricity in Pakistan, DC solar system is the best solution for people of remote as well as the developing areas. Below are the following perks of DC system.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
          <div className='bg-white p-6 rounded-xl shadow-md'>
            <h1 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>The cheapest form of electricity</h1>
            <p className='text-sm md:text-base'>The DC solar system is the cheapest form of electricity man can ever produce because of its components. DC solar system prices in Pakistan are very low. The main components of the DC system are solar panels, charge controllers and battery backup.</p>
          </div>
          <div className='bg-white p-6 rounded-xl shadow-md'>
            <h1 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>A solution to power cuts</h1>
            <p className='text-sm md:text-base'>DC solar energy system is the best and most affordable solution to frequent power cuts that we suffer quite often in Pakistan.</p>
          </div>
          <div className='bg-white p-6 rounded-xl shadow-md'>
            <h1 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>Is the most feasible solution to areas where no power is available</h1>
            <p className='text-sm md:text-base'>DC solar system helps you to generate energy from the sun directly, requiring no processing. So, If you are in an area where no power supply is available from Wapda or any other source, DC system is the best and economical solution to having.</p>
          </div>
          <div className='bg-white p-6 rounded-xl shadow-md'>
            <h1 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>No maintenance cost required</h1>
            <p className='text-sm md:text-base'>Once you have installed the DC system, forget about the maintenance cost and operational cost for life. Another benefit of DC solar energy is that it requires no manly efforts and runs completely on its own without any issues or la</p>
          </div>
        </div>
      </div>
      <div className="mb-6 flex justify-center">
        <button className="bg-[#5AA86C] hover:bg-[#4a8a5a] text-white font-medium py-2 px-6 rounded-lg transition hover:scale-105">
          Get Quote
        </button>
      </div>


    </div>
  )
}

export default page
