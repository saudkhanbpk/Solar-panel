import React from 'react'
import Calltoexpert from '../../../Components/Calltoexpert'

const page = () => {
  return (
    <div>
      <div className="flex justify-center text-center items-center bg-[url(/solar.jpg)]  bg-cover bg-center h-64 ">
        <h1 className='text-6xl font-extrabold text-[#082E6F] '>SOLAR PANELS</h1>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h1 className='text-center text-3xl font-bold text-gray-800 mb-8 border-l-[5px] border-r-[5px] border-gray-800'>Solar Panels</h1>
        <p>We use top-quality solar panels from international brands for all our solar installations in Pakistan, be it for homes, businesses, farms or industries. The efficiency of these solar panels directly influences your electricity savings – the higher the efficiency, the more you save. At Alpha Solar, we understand how crucial it is to stay updated with the advancements in solar technology. That’s why our engineers and experts closely monitor emerging technologies and their efficiency to ensure our customers always receive the best available products.</p>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h1 className='text-center text-3xl font-bold text-gray-800 pb-2.5 mb-8 border-l-[5px] border-r-[5px] border-gray-800'>
          Different Types of Highly Efficient Solar Panels
        </h1>

        <div className='flex flex-col md:flex-row gap-8'>
          {/* Left side - Text content */}
          <div className='md:w-1/2'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>Bifacial solar panels</h2>
            <p className='text-base leading-relaxed'>
              Bifacial solar panels have the ability to generate electricity from both sides of the module, making them the most popular solar panels in Pakistan at the moment. They are highly efficient and produce more electricity per watt compared to other technologies in the market. While the price of bifacial solar panels in Pakistan is a bit higher than mono panels, their high production rate makes them the top choice for many.
            </p>
          </div>

          {/* Right side - Image */}
          <div className='md:w-1/2 shadow-md border-2'>
            {/* Replace this with your actual image */}
            <img
              src="/path-to-your-image.jpg"
              alt="Bifacial solar panels"
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='md:w-1/2 shadow-md border-2'>
            {/* Replace this with your actual image */}
            <img
              src="/path-to-your-image.jpg"
              alt="Bifacial solar panels"
              className='w-full h-full object-cover'
            />
          </div>

          <div className='md:w-1/2'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>Monocrystalline solar panels</h2>
            <p className='text-base leading-relaxed'>
              Monocrystalline solar panels, despite generating electricity from only one side facing the sun, continue to dominate the solar landscape in Pakistan due to their exceptional electricity production. Recognized for their superior efficiency, these panels feature a single crystal structure of high-purity silicon. This technology guarantees reliable and effective energy generation, making them a popular and enduring choice in the country.
            </p>
          </div>
        </div>
      </div>

      <Calltoexpert />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h1 className='text-center text-3xl font-bold text-gray-800 pb-2.5 mb-8 border-l-[5px] border-r-[5px] border-gray-800'>
          Alpha Solar’s Top Brands: Trusted by Millions
        </h1>

        <div className='flex flex-col md:flex-row gap-8'>
          {/* Left side - Text content */}
          <div className='md:w-1/2'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>Canadian Solar Panels</h2>
            <p className='text-base leading-relaxed'>
              Bifacial solar panels have the ability to generate electricity from both sides of the module, making them the most popular solar panels in Pakistan at the moment. They are highly efficient and produce more electricity per watt compared to other technologies in the market. While the price of bifacial solar panels in Pakistan is a bit higher than mono panels, their high production rate makes them the top choice for many.
            </p>
          </div>

          {/* Right side - Image */}
          <div className='md:w-1/2 shadow-md border-2'>
            {/* Replace this with your actual image */}
            <img
              src="/path-to-your-image.jpg"
              alt="Bifacial solar panels"
              className='w-full h-full object-cover'
            />
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
