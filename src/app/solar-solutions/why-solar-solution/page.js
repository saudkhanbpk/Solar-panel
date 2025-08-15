import React from 'react'
import Calltoexpert from '../../../Components/Calltoexpert'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className="flex justify-center text-center items-center bg-[url(/solar.jpg)]  bg-cover bg-center h-64 ">
        <h1 className='text-6xl font-extrabold text-[#082E6F]'>SOLAR BATTERIES</h1>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
          <h1 className='text-center text-3xl font-bold text-gray-800 mb-8 border-l-[5px] border-r-[5px] border-gray-800'> Why Solar Energy? </h1>
          <p>If we closely examine our power sector, we can see that the power crisis has emerged as a major threat to the country’s economic stability in the last few decades. We have to bear hours of load shedding and a constant increase in electricity prices. Relying too much on imported crude oil and fossil fuels makes the situation even worse. We have witnessed hundreds of companies struggling to keep their operations running due to a power shortage and unavailability of electricity, which ultimately damages the entire economy. Observing this, every individual in Pakistan wants to find a better way to keep themselves safe from continuously increasing electricity bills and the harmful environmental effects from conservative sources of electricity production. The solution is in the sun’s rays, one can call it solar energy. It’s easy to get, not too expensive and has the capacity to produce enough electricity for every sector from domestic to businesses, industries and agriculture departments. And Alpha Solar is here to help you get the best solar energy system at an affordable cost.</p>
        </div>

        <Calltoexpert />

        <div className='flex flex-col md:flex-row m-8 gap-8'>
          {/* Left side - Text content */}
          <div className='md:w-1/2'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>Solar Energy – The Best alternate energy solution for Pakistan</h2>
            <p className='text-base leading-relaxed'>
              The sun’s energy is free and keeps shining all the time. It can be used on every roof and is the best way to solve our electricity problems, no matter the reasons. Solar energy is cheap, affordable and if solar panels are installed by professionals, they could reduce your electricity bill to zero. Get this opportunity now by just filling out our quotation form or by just leaving us a message.            </p>
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

        <div className='flex flex-col md:flex-row m-8 gap-8'>

          <div className='md:w-1/2 shadow-md border-2'>
            {/* Replace this with your actual image */}
            <img
              src="/path-to-your-image.jpg"
              alt="Bifacial solar panels"
              className='w-full h-full object-cover'
            />
          </div>

          <div className='md:w-1/2'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>How Does Solar Panel Works?</h2>
            <p className='text-base leading-relaxed'>
              Solar panels are made of photovoltaic cells that capture sunlight and convert it into electricity for homes and businesses. Photovoltaic cells are constructed from silicon, one of the most abundant materials on Earth. When sunlight hits these silicon layers with different electronic properties, they get energize and cells generate electricity by establishing an electric field between a positive charge on one side and a negative charge on the other. This process, known as the photoelectric effect, produces the current needed for electricity generation.

              Photovoltaic cells are grouped together to form PV panels, generating electricity that can power everything from home appliances to heavy machinery in industries. The arrangement of solar panels is known as solar arrays. As the number of panels increases, the more energy you can generate.</p>
          </div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 border-l-[3px] sm:border-l-[4px] md:border-l-[5px] border-r-[3px] sm:border-r-[4px] md:border-r-[5px] border-gray-800">
            Benefits of Solar Energy
          </h1>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 max-w-6xl mx-auto ">
            Solar energy is getting cheaper with every passing day. People are realizing
            that fossil fuel harms the environment, so they’re looking at solar power,
            which is cleaner and smarter, to cut down on pollution.
          </p>
          <figure className=" w-[80vw] bg-[#FFFFFF] shadow-2xl mx-auto m-[5px]">
            <Image
              src="/path-to-your-image.jpg"
              alt="Our project workflow diagram"
              width={1920} // set a large width for full-width image
              height={1080}
              className="w-full h-auto object-cover rounded"
              priority
            />
          </figure>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {/* Card 1 */}
          <div className="overflow-hidden transition-transform hover:scale-105  p-4">
            <h3 className="text-xl font-bold mb-2">Everywhere Gets Sunlight</h3>
            <p className="text-gray-700">
              There is no doubt regarding the availability of sunlight in every single area of the Earth. Its intensity may vary from one place to another, but it still shines everywhere...
            </p>
          </div>

          {/* Card 2 */}
          <div className="overflow-hidden transition-transform hover:scale-105 p-4">
            <h3 className="text-xl font-bold mb-2">A Renewable and Unending Source of Energy</h3>
            <p className="text-gray-700">
              The sun will remain an unchangeable and inexhaustible source of power forever. The energy that comes with sun rays...
            </p>
          </div>

          {/* Card 3 */}
          <div className="overflow-hidden transition-transform hover:scale-105 p-4">
            <h3 className="text-xl font-bold mb-2">Start Saving from Day One</h3>
            <p className="text-gray-700">
              Every other investment takes some time to yield returns. However, solar energy starts saving money for you immediately...
            </p>
          </div>

          {/* Card 4 */}
          <div className="overflow-hidden transition-transform hover:scale-105  p-4">
            <h3 className="text-xl font-bold mb-2">Everywhere Gets Sunlight</h3>
            <p className="">
              There is no doubt regarding the availability of sunlight in every single area of the Earth...
            </p>
          </div>

          {/* Card 5 */}
          <div className="overflow-hidden transition-transform hover:scale-105  p-4">
            <h3 className="text-xl font-bold mb-2">Minimal Maintenance Required</h3>
            <p className="">
              Once you set up solar panels, you don’t have to fuss much about fixing them—they pretty much take care of themselves...
            </p>
          </div>

          {/* Card 6 */}
          <div className="overflow-hidden transition-transform hover:scale-105  p-4">
            <h3 className="text-xl font-bold mb-2">Solar Energy in Pakistan and the Role of Alpha Solar</h3>
            <p className="">
              With its array of benefits, opportunities and challenges, Alpha Solar has experienced both good and bad times...
            </p>
          </div>
        </div>


      </div>
    </div>
  )
};

export default page;
