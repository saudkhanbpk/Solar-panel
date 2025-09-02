import React from 'react'
import DomasticCards from '../../../../Components/domasticcards/switchcrad'
import AppointmentForm from '../../../../Components/domasticcards/Appointment'

const page = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[url(/domestic-solar-solution-cover.png)] bg-cover bg-center text-white py-12 shadow-lg">
        
        <div className="flex items-center justify-center">
          <DomasticCards />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative">
          {/* Layout with sidebar */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-10">
            
            {/* Left Content */}
            <div className="flex-1 space-y-10">
              <div>
                <h1 className="text-3xl font-bold mb-4 text-[#082E6F] border-l-4 border-[#82C701] pl-3">
                  3kW Solar System Price in Pakistan
                </h1>
                <p className="text-gray-700 leading-relaxed">
                  There are hundreds of houses in Pakistan that consume between 300 to 400 units of electricity monthly...
                </p>
              </div>

              <div>
                <h1 className="text-3xl font-bold mb-4 text-[#082E6F] border-l-4 border-[#82C701] pl-3">
                  What is a 3kW Solar System?
                </h1>
                <p className="text-gray-700 leading-relaxed">
                  A 3kW solar Panel system refers to a system that produces 12 kWh of electricity per day...
                </p>
                <img src="image/logo" alt="image" className="my-4 rounded-lg shadow-md" />
                <p className="text-gray-700 leading-relaxed">
                  A 3kW system is capable of powering most small household appliances...
                </p>
              </div>

              <div>
                <h1 className="text-3xl font-bold mb-4 text-[#082E6F] border-l-4 border-[#82C701] pl-3">
                  3kW Solar System Price in Pakistan?
                </h1>
                <p className="text-gray-700 leading-relaxed">
                  A 3kW solar PV system in Pakistan costs around 390,000 PKR...
                </p>
              </div>

              <div>
                <h1 className="text-3xl font-bold mb-4 text-[#082E6F] border-l-4 border-[#82C701] pl-3">
                  Hybrid 3kW Solar System Price in Pakistan
                </h1>
                <p className="text-gray-700 leading-relaxed">
                  A 3kW hybrid solar system is the most commonly used system in Pakistan...
                  <br />
                  <span className="font-semibold text-[#82C701]">GO GREEN POWER WITH SUN SOLAR</span> provides affordable and high-quality 3kW solar systems.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h1 className="text-2xl font-semibold text-[#082E6F] mb-3">Hybrid 3kW Solar System Price in Pakistan with Batteries</h1>
                <p className="text-gray-700">
                  • With Batteries: <span className="font-bold text-[#82C701]">Rs. 510,000 PKR</span><br />
                  • Without Batteries: <span className="font-bold text-[#082E6F]">Rs. 390,000 PKR</span>
                </p>
              </div>

              <div>
                <h1 className="text-2xl font-semibold text-[#082E6F] mb-3">Hybrid 3kw Solar System Price in Pakistan with Solarmax Falcon Inverter</h1>
                <p className="text-gray-700 leading-relaxed">
                  Solarmax Falcon inverters have gained a remarkable reputation...
                </p>
              </div>

              <div className="bg-[#f9f9f9] border-l-4 border-[#82C701] p-6 rounded-lg shadow-sm">
                <h1 className="text-2xl font-semibold text-[#082E6F] mb-3">Factors Affecting Price</h1>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Cost of solar panels</li>
                  <li>Cost of inverter</li>
                  <li>Cost of batteries</li>
                  <li>Installation charges</li>
                </ul>
              </div>

              <div>
                <h1 className="text-2xl font-semibold text-[#082E6F] mb-3">What Does A 3kW Solar System Consist Of?</h1>
                <p className="text-gray-700">
                  <span className="font-semibold text-[#82C701]">GO GREEN POWER WITH SUN SOLAR</span> always values product quality...
                </p>
              </div>

              <div>
                <h1 className="text-2xl font-semibold text-[#082E6F] mb-3">How Many Solar Panels Do I Need?</h1>
                <p className="text-gray-700">
                  In Pakistan, with 545-watt panels, you need only six panels to achieve 3kW...
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h1 className="text-2xl font-semibold text-[#082E6F] mb-3">List Of 3kW Hybrid Inverters</h1>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Solarmax</li>
                  <li>Inverex Nitrox</li>
                  <li>Max Power</li>
                  <li>Prime Max</li>
                  <li>Long Life Solar</li>
                </ul>
              </div>

              <div>
                <h1 className="text-2xl font-semibold text-[#082E6F] mb-3">What Appliances Can I Run?</h1>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Fans: 4</li>
                  <li>LED Bulbs: 15</li>
                  <li>Refrigerator: 1</li>
                  <li>LED TV: 2</li>
                  <li>Internet Device: 1</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-[#82C701] to-[#082E6F] text-white rounded-xl p-6 shadow-md">
                <h1 className="text-2xl font-bold mb-3">Free Consultation</h1>
                <p>
                  <span className="font-semibold">GO GREEN POWER WITH SUN SOLAR</span> offers the most affordable packages.
                  Contact us for consultation and quotations.
                </p>
              </div>
            </div>

            {/* Sidebar Form (Desktop Fixed) */}
            <div className="hidden lg:block w-96 sticky top-24 self-start bg-white shadow-lg rounded-xl p-6 border-t-4 border-[#82C701]">
              <AppointmentForm />
            </div>
          </div>

          {/* Mobile Form */}
          <div className="block lg:hidden px-4 sm:px-6 lg:px-8 py-8">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
