import React from 'react'
import Image from 'next/image'
import SolarSystemCard from '../Components/SolarSystemCard'

const About = () => {
  return (
    <div>
      <div className="flex justify-center text-center items-center bg-[url(/solar.jpg)]  bg-cover bg-center h-64 ">
        <h1 className='text-6xl font-extrabold text-[#082E6F] '>ABOUT US</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#082E6F] mb-6 text-center">ABOUT US</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 leading-relaxed text-lg">
              Alpha Solar was established in 2012 with a vision to revolutionize solar energy in Pakistan by offering top-notch, technologically advanced, and affordable solar solutions to individuals and organizations. With passion, hard work, dedication, commitment, advanced resources, continuous learning, customer-centric approach and our dedication to staying up-to-date with the latest solar technologies, we've been successfully pursuing our vision for over 10 years.
              <br /><br />
              With thousands of installations across various sectors, including both local and multinational organizations such as UNOPS, USAID, SIALKOT INTERNATIONAL AIRPORT, RAJCO, ZTBL, UMT, FORWARD, JDW Group and FFC, the trust of such reputable multinational organizations is evidence that Alpha Solar is trustworthy and committed to promoting solar solutions not only locally but also at the multinational level.
              <br /><br />
              Pakistan's heavy reliance on imported fossil fuels for electricity production not only makes electricity expensive but also contributes to the pollution of an already devastated climate. Alpha Solar has always been curious about finding ways to save both money and the environment. Our solar solutions are the answer, as they not only enhance the air quality of cities like Lahore and Karachi but also enable you to generate your own electricity and save thousands of rupees every month.
              <br /><br />
              We are dedicated to delivering excellent customer service. Our team is available to address your enquiries and assist you in selecting the appropriate solar solution for your requirements.
            </p>
          </div>
        </div>

        {/* Mission Statement Section */}
        <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/solar.jpg"
                alt="Solar Installation"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 bg-white  p-8 rounded-lg ">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission Statement</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is clear: to illuminate Pakistan through the power of the sun. With a deep-rooted understanding of the energy challenges faced by our nation, we are committed to making solar energy available to all by offering budget-friendly and technologically advanced solar solutions. Our team of experts tirelessly works to bridge the gap between energy demand and supply while reducing our carbon footprint.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Signature Services Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Signature Services</h2>
          <div className="w-24 h-1 bg-[#82C701] mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Domestic Solar */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#82C701]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Domestic Solar Solutions</h3>
              <p className="text-gray-600">Complete solar solutions for homes with net metering to eliminate your electricity bills.</p>
            </div>
          </div>

          {/* Card 2 - Commercial Solar */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#82C701]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Commercial Solar Systems</h3>
              <p className="text-gray-600">Customized solar solutions for businesses to reduce operational costs significantly.</p>
            </div>
          </div>

          {/* Card 3 - Industrial Solar */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#82C701]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Industrial Solar Plants</h3>
              <p className="text-gray-600">Large-scale solar solutions for industries with high energy demands and 24/7 operations.</p>
            </div>
          </div>

          {/* Card 4 - Solar Tube Well */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#82C701]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Solar Tube Wells</h3>
              <p className="text-gray-600">Agricultural solar solutions for farmers to power their tube wells with clean energy.</p>
            </div>
          </div>

          {/* Card 5 - Net Metering */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#82C701]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Net Metering Solutions</h3>
              <p className="text-gray-600">Connect your solar system to the grid and sell excess electricity back to the utility company.</p>
            </div>
          </div>

          {/* Card 6 - Bank Financing */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-[#82C701]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Bank Financing</h3>
              <p className="text-gray-600">Easy financing options through partner banks to make solar affordable for everyone.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Join Us in Redefining Energy</h2>
        <p>We invite you to join us on our journey towards a greener, energy-efficient, climate-resilient, and progressive Pakistan. Whether you are a homeowner, a business owner, or an organization seeking sustainable energy solutions, Alpha Solar is here to guide you every step of the way. Let’s collaborate to create a brighter, more sustainable tomorrow for generations to come.</p>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h2 className='text-center text-3xl font-bold text-gray-800 mb-10'>Why Choose Alpha Solar</h2>
        <figure className=" w-[80vw] bg-[#FFFFFF] shadow-2xl mx-auto m-[5px]">
          <Image
            src="/choosealpa.jpg"
            alt="Our project workflow diagram"
            width={1920} // set a large width for full-width image
            height={1080}
            className="w-full h-auto object-cover rounded"
            priority
          />
        </figure>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Expertise</h2>
        <p>With over a decade of experience, we are at the forefront of solar technology. Our team of experts has extensive experience in system design, installation, maintenance, and after-sales services.</p>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Quality</h2>
        <p>We prioritize top-tier solar panels, inverters, and mounting structures alongside impeccable workmanship. Our installations are designed to stand the test of time, ensuring your investment in solar energy pays off for years to come.</p>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Affordability</h2>
        <p>We believe sustainability should be accessible. Our competitive pricing ensures you receive value without compromise.</p>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Reputation</h2>
        <p>Our track record speaks for itself. We’ve successfully illuminated homes, businesses, and organizations, earning the trust of our satisfied clientele.</p>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        <h2 className='text-3xl font-bold text-gray-800 mb-4'>Innovation</h2>
        <p>We continually stay updated with the latest solar technology trends to bring you cutting-edge solutions that maximize efficiency and performance.</p>
      </div>
      <SolarSystemCard/>
    </div>
  )
}

export default About
