import React from 'react'
import Calltoexpert from '../../../Components/Calltoexpert'
import Image from 'next/image'

const page = () => {
  return (
    <div className="bg-gradient-to-b from-[#f9fdf6] to-white">
      {/* Banner Section */}
      <div className="flex justify-center text-center items-center bg-[url(/Cover-why-Solar-Energy.png)] bg-cover bg-center h-64 shadow-lg">
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Intro Section */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <h1 className='text-center text-3xl font-bold text-[#082E6F] mb-8 border-l-[5px] border-r-[5px] border-[#82C701] inline-block px-3'>
            Why Solar Energy?
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg text-center">
            If we closely examine our power sector, we can see that the power crisis has emerged as a major threat to the country’s economic stability in the last few decades. 
            We have to bear hours of load shedding and a constant increase in electricity prices. Relying too much on imported crude oil and fossil fuels makes the situation even worse. 
            We have witnessed hundreds of companies struggling to keep their operations running due to a power shortage and unavailability of electricity, which ultimately damages the entire economy. 
            Observing this, every individual in Pakistan wants to find a better way to keep themselves safe from continuously increasing electricity bills and the harmful environmental effects from conservative sources of electricity production. 
            The solution is in the sun’s rays, one can call it solar energy. It’s easy to get, not too expensive and has the capacity to produce enough electricity for every sector from domestic to businesses, industries and agriculture departments. 
            And <span className="text-[#82C701] font-semibold">GO GREEN SOLAR</span> is here to help you get the best solar energy system at an affordable cost.
          </p>
        </div>

        {/* Call to Action */}
        <Calltoexpert />

        {/* Section 1 */}
        <div className='flex flex-col md:flex-row m-8 gap-8'>
          <div className='md:w-1/2'>
            <h2 className='text-2xl font-bold text-[#082E6F] mb-4'>
              Solar Energy – The Best Alternate Energy Solution for Pakistan
            </h2>
            <p className='text-base leading-relaxed text-gray-700'>
              The sun’s energy is free and keeps shining all the time. It can be used on every roof and is the best way to solve our electricity problems, no matter the reasons. 
              Solar energy is cheap, affordable and if solar panels are installed by professionals, they could reduce your electricity bill to zero. 
              Get this opportunity now by just filling out our quotation form or by just leaving us a message.
            </p>
          </div>
          <div className='md:w-1/2'>
            <img
              src="/SOLAR-ENERGY.png"
              alt="Bifacial solar panels"
              className='w-full h-full object-cover rounded-2xl shadow-lg'
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className='flex flex-col md:flex-row m-8 gap-8'>
          <div className='md:w-1/2'>
            <img
              src="/HOW-SOLAR-WORKS.png"
              alt="How solar works"
              className='w-full h-full object-cover rounded-2xl shadow-lg'
            />
          </div>
          <div className='md:w-1/2'>
            <h2 className='text-2xl font-bold text-[#082E6F] mb-4'>How Does Solar Panel Works?</h2>
            <p className='text-base leading-relaxed text-gray-700'>
              Solar panels are made of photovoltaic cells that capture sunlight and convert it into electricity for homes and businesses. 
              Photovoltaic cells are constructed from silicon, one of the most abundant materials on Earth. 
              When sunlight hits these silicon layers with different electronic properties, they get energize and cells generate electricity by establishing an electric field between a positive charge on one side and a negative charge on the other. 
              This process, known as the photoelectric effect, produces the current needed for electricity generation.
              <br /><br />
              Photovoltaic cells are grouped together to form PV panels, generating electricity that can power everything from home appliances to heavy machinery in industries. 
              The arrangement of solar panels is known as solar arrays. As the number of panels increases, the more energy you can generate.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-3xl font-bold text-[#082E6F] mb-6 border-l-[5px] border-r-[5px] border-[#82C701] inline-block px-3">
            Benefits of Solar Energy
          </h1>
          <p className="text-lg leading-relaxed text-gray-700 text-center max-w-4xl mx-auto mb-6">
            Solar energy is getting cheaper with every passing day. People are realizing
            that fossil fuel harms the environment, so they’re looking at solar power,
            which is cleaner and smarter, to cut down on pollution.
          </p>
          <figure className="w-[80vw] bg-white shadow-2xl mx-auto my-6 rounded-2xl overflow-hidden">
            <Image
              src="/why-solar-energy.png"
              alt="Our project workflow diagram"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover rounded"
              priority
            />
          </figure>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold text-[#082E6F] mb-2">Everywhere Gets Sunlight</h3>
            <p className="text-gray-700">
              There is no doubt regarding the availability of sunlight in every single area of the Earth. Its intensity may vary from one place to another, but it still shines everywhere...
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold text-[#082E6F] mb-2">A Renewable and Unending Source of Energy</h3>
            <p className="text-gray-700">
              The sun will remain an unchangeable and inexhaustible source of power forever. The energy that comes with sun rays...
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold text-[#082E6F] mb-2">Start Saving from Day One</h3>
            <p className="text-gray-700">
              Every other investment takes some time to yield returns. However, solar energy starts saving money for you immediately...
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold text-[#082E6F] mb-2">Everywhere Gets Sunlight</h3>
            <p className="text-gray-700">
              There is no doubt regarding the availability of sunlight in every single area of the Earth...
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold text-[#082E6F] mb-2">Minimal Maintenance Required</h3>
            <p className="text-gray-700">
              Once you set up solar panels, you don’t have to fuss much about fixing them—they pretty much take care of themselves...
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition">
            <h3 className="text-xl font-bold text-[#082E6F] mb-2">Solar Energy in Pakistan and the Role of GO GREEN SOLAR</h3>
            <p className="text-gray-700">
              With its array of benefits, opportunities and challenges, GO GREEN SOLAR has experienced both good and bad times...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
