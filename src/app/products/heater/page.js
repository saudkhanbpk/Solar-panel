import React from 'react'
import Calltoexpert from '../../../Components/Calltoexpert'


const page = () => {
  return (
    <div>
      <div className="flex justify-center text-center items-center bg-[url(/Cover-imageSolar-Water-Heaters.png)]  bg-cover bg-center h-64 ">
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h1 className='text-center text-3xl font-bold text-gray-800 mb-8 border-l-[5px] border-r-[5px] border-gray-800'>Solar Water Heaters in Pakistan</h1>
        <p>Solar water heater looks like regular solar panels but with an extra insulated water tank. Solar geyser consists of solar collectors – a series of pipes- that capture sunlight and convert it into heat to warm the water. A solar water heater, also called a home solar water heating system, is the best and most affordable way to generate hot water for your home. The cool thing about solar water heaters is that they work well in every season, using sunlight as their fuel.

          The water tank that often comes with a solar water heater is equipped with features that enhance its performance and safety. The tanks are insulated to prevent heat loss. Additionally, the tank also comes with anti-freeze features, a pressure relief valve, and a thermostat that helps control the water temperature. These features are the reasons why the water in the tank remains warm and cozy, even on cold nights.

          You have the option to choose a solar water heater that runs solely on solar energy or opt for the hybrid option, which uses grid electricity to warm the water when there isn’t enough sunlight.

          Alpha Solar provides technological advancements and state-of-the-art solar geysers that not only deliver warm water throughout the winter but also offer significant savings and cut carbon emissions. Our solar water heater even works efficiently in cold areas.</p>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h1 className='text-center text-3xl font-bold text-gray-800 mb-8 border-l-[5px] border-r-[5px] border-gray-800'>How Do They Work?</h1>
        <p>
          The solar collector panel, a key component of the solar water heating system, captures the Sun's rays. Within the collectors, a black absorbing surface (absorber) absorbs solar radiation and transfers the resulting heat energy to the flowing water. The heated water accumulates in an insulated tank to prevent heat loss. The circulation of water from the tank through the collectors and back is automatic, facilitated by the thermo-siphon system. Solar water heaters come in two types based on the collector system. They typically consist of a collector for gathering solar energy and an insulated storage tank for storing the heated water. This stored hot water is readily available for use at any time.
        </p>

        <div className='mx-auto'>
          <img
            src="/Water-Heater.png"
            alt="water heater"
            className='max-w-full h-auto mx-auto rounded-lg'
          />
        </div>
      </div>

      <Calltoexpert />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h1 className='pl-6 pr-6 text-3xl font-bold text-gray-800 mb-8 border-l-[5px] border-r-[5px] border-gray-800'>Components of Solar Water Heater/ Solar Water Geysers</h1>
        <ul className='list-disc pl-15 pr-15 space-y-4'>
          <li>Solar Collector (to collect solar energy).</li>
          <li>Insulated water tank (to store hot water).</li>
          <li>Relief valve.</li>
          <li>Supporting stand.</li>
          <li>Supporting stand Connecting pipes and instrumentation etc.</li>
        </ul>

      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <h1 className='pl-6 pr-6 text-3xl font-bold text-gray-800 mb-8 border-l-[5px] border-r-[5px] border-gray-800'>Types of Solar Water Heaters in Pakistan</h1>
        <p className='pl-10 pr-10'>There are two main types of solar geysers commonly used in Pakistan:</p>
        <ul className='list-decimal pl-15 pr-15 space-y-4'>
          <li>Flat Plate Solar Water Heaters:.</li>
          <li>Evacuated Tube Solar Water Heaters:.</li>
        </ul>

      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div >
          <h1 className='text-3xl font-bold text-gray-800'>Flat Plate Solar Water Heaters in Pakistan</h1>
          <p>Flat Plate solar water heaters are the most common type of solar water heater in Pakistan. They are made up of a series of flat, absorber plates that are covered with a transparent cover, typically glass. The plates absorb sunlight and heat the water that flows through them. Flat plate collectors are relatively inexpensive and can be installed on roofs or on the ground. They are also relatively efficient, especially in sunny climates like Pakistan.</p>
        </div>
        <div>
          <img
            src="/Flat-Plate-Solar-Water-Heaters.png"
            alt="flate plate solar water heaters"
            className='w-full h-full object-cover'
          />
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <img
            src="/Tube-Solar-Water-Heaters.png"
            alt="Bifacial solar panels"
            className='w-full h-full object-cover'
          />
        </div>
        <div >
          <h1 className='text-3xl font-bold text-gray-800'>Flat Plate Solar Water Heaters in Pakistan</h1>
          <p>Flat Plate solar water heaters are the most common type of solar water heater in Pakistan. They are made up of a series of flat, absorber plates that are covered with a transparent cover, typically glass. The plates absorb sunlight and heat the water that flows through them. Flat plate collectors are relatively inexpensive and can be installed on roofs or on the ground. They are also relatively efficient, especially in sunny climates like Pakistan.</p>
        </div>
      </div>


      <div>
        <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-md">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Here Is a Table Summarizing the Key Differences Between the Two Types of Solar Water Heaters/ Solar geysers:
          </h3>

          <div className="overflow-x-auto mb-2.5">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#5AA86C] text-white">
                  <th className="p-3 sm:p-4 text-left rounded-tl-xl">Feature</th>
                  <th className="p-3 sm:p-4 text-center">Flat Plate Collector</th>
                  <th className="p-3 sm:p-4 text-right rounded-tr-xl">Evacuated Tube</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {/* Efficiency */}
                <tr className="hover:bg-gray-50">
                  <td className="p-3 sm:p-4 font-medium">Efficiency</td>
                  <td className="p-3 sm:p-4 text-center text-gray-600">60-70% (Good for sunny climates)</td>
                  <td className="p-3 sm:p-4 text-right text-gray-600">70-80% (Better in cloudy/ cold weather)</td>
                </tr>

                {/* Cost */}
                <tr className="hover:bg-gray-50 bg-gray-50/50">
                  <td className="p-3 sm:p-4 font-medium">Cost</td>
                  <td className="p-3 sm:p-4 text-center text-gray-600">PKR 80,000 - 120,000 (More affordable)</td>
                  <td className="p-3 sm:p-4 text-right text-gray-600">PKR 120,000 - 180,000 (Premium)</td>
                </tr>

                {/* Durability */}
                <tr className="hover:bg-gray-50">
                  <td className="p-3 sm:p-4 font-medium">Durability</td>
                  <td className="p-3 sm:p-4 text-center text-gray-600">10-15 years (Metal components corrode)</td>
                  <td className="p-3 sm:p-4 text-right text-gray-600">15-20 years (Vacuum protects tubes)</td>
                </tr>

                {/* Installation */}
                <tr className="hover:bg-gray-50 bg-gray-50/50">
                  <td className="p-3 sm:p-4 font-medium">Installation</td>
                  <td className="p-3 sm:p-4 text-center text-gray-600">Heavy, requires strong roof</td>
                  <td className="p-3 sm:p-4 text-right text-gray-600">Lighter, flexible placement</td>
                </tr>

                {/* Maintenance */}
                <tr className="hover:bg-gray-50">
                  <td className="p-3 sm:p-4 font-medium">Maintenance</td>
                  <td className="p-3 sm:p-4 text-center text-gray-600">Annual cleaning needed</td>
                  <td className="p-3 sm:p-4 text-right text-gray-600">Minimal maintenance</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 text-sm mt-4 text-center">
            What is best for you depends on your needs and budget. If you live in an area with sunny weather and have a limited budget, a flat plate solar geyser is a good option. If you live in an area with cold winters and are willing to pay more for a more efficient system, an evacuated tube solar geyser is a better choice.

            For any information or queries related to solar water heaters, solar geysers, solar panels, solar inverters, etc., feel free to contact us at the provided number or leave us a message by filling out the quotation form. Our representatives will be in touch with you as soon as possible.
          </p>
          <div className='mt-6 flex justify-center'>
            <button className="justify-center text-center bg-[#5AA86C] hover:bg-[#4a8a5a] text-white py-2 px-4 rounded-md text-sm sm:text-base">
              Get Quote
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default page
