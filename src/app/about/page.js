import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[500px] lg:h-[700px]">
        <Image
          src="/About.png"
          alt="About"
          fill
          className="object-cover"
        />
        </div>
        {/* About Us Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#082E6F] mb-6 text-center border-l-[5px] border-r-[5px] border-[#82C701] inline-block px-4">
              ABOUT US
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#82C701]">
              <p className="text-gray-700 leading-relaxed text-lg">
                <b className='text-[#82c701]'>GO GREEN</b> was established in 2022 with a vision to revolutionize solar energy in Pakistan by offering top-notch, technologically advanced, and affordable solar solutions to individuals and organizations. With passion, hard work, dedication, commitment, advanced resources, continuous learning, customer-centric approach and our dedication to staying up-to-date with the latest solar technologies, we've been successfully pursuing our vision for over 10 years.
                <br /><br />
                Pakistan's heavy reliance on imported fossil fuels for electricity production not only makes electricity expensive but also contributes to the pollution of an already devastated climate. Alpha Solar has always been curious about finding ways to save both money and the environment. Our solar solutions are the answer, as they not only enhance the air quality of cities like Lahore and Karachi but also enable you to generate your own electricity and save thousands of rupees every month.
                <br /><br />
                We are dedicated to delivering excellent customer service. Our team is available to address your enquiries and assist you in selecting the appropriate solar solution for your requirements.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
            <div className="md:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-xl border-2 border-[#82C701]">
                <img
                  src="/solar.jpg"
                  alt="Solar Installation"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-md border-t-4 border-[#082E6F]">
              <h2 className="text-2xl font-bold text-[#082E6F] mb-4">Our Mission Statement</h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is clear: to illuminate Pakistan through the power of the sun. With a deep-rooted understanding of the energy challenges faced by our nation, we are committed to making solar energy available to all by offering budget-friendly and technologically advanced solar solutions. Our team of experts tirelessly works to bridge the gap between energy demand and supply while reducing our carbon footprint.
              </p>
            </div>
          </div>
        </div>

        {/* Signature Services */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#082E6F] mb-4">Our Signature Services</h2>
            <div className="w-24 h-1 bg-[#82C701] mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Domestic Solar Solutions", desc: "Complete solar solutions for homes with net metering to eliminate your electricity bills." },
              { title: "Commercial Solar Systems", desc: "Customized solar solutions for businesses to reduce operational costs significantly." },
              { title: "Industrial Solar Plants", desc: "Large-scale solar solutions for industries with high energy demands and 24/7 operations." },
              { title: "Solar Tube Wells", desc: "Agricultural solar solutions for farmers to power their tube wells with clean energy." },
              { title: "Net Metering Solutions", desc: "Connect your solar system to the grid and sell excess electricity back to the utility company." },
              { title: "Bank Financing", desc: "Easy financing options through partner banks to make solar affordable for everyone." },
              { title: "Solar Solution Audit", desc: "Professional auditing services to evaluate the performance, efficiency, and reliability of your existing solar system." },
              { title: "Overseas Solar Solution Consultation", desc: "Expert consultation services for international clients to design and implement solar projects tailored to overseas markets." }
            ]
              .map((service, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300 border-b-4 border-[#82C701]">
                  <div className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#082E6F] to-[#82C701] rounded-full flex items-center justify-center text-white shadow-lg">
                        <span className="text-2xl font-bold">{i + 1}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[#082E6F] mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-center text-3xl font-bold text-[#082E6F] mb-10">Why Choose <b className='text-[#82c701]'>GO GREEN</b> </h2>
          <figure className="w-[80vw] bg-white shadow-2xl mx-auto rounded-xl overflow-hidden border-4 border-[#82C701]">
            <Image
              src="/choosealpa.jpg"
              alt="Our project workflow diagram"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
              priority
            />
          </figure>
        </div>

        {/* Features */}
        {[
          { title: "Expertise", desc: "With over a decade of experience, we are at the forefront of solar technology. Our team of experts has extensive experience in system design, installation, maintenance, and after-sales services." },
          { title: "Quality", desc: "We prioritize top-tier solar panels, inverters, and mounting structures alongside impeccable workmanship. Our installations are designed to stand the test of time, ensuring your investment in solar energy pays off for years to come." },
          { title: "Affordability", desc: "We believe sustainability should be accessible. Our competitive pricing ensures you receive value without compromise." },
          { title: "Reputation", desc: "Our track record speaks for itself. We’ve successfully illuminated homes, businesses, and organizations, earning the trust of our satisfied clientele." },
          { title: "Innovation", desc: "We continually stay updated with the latest solar technology trends to bring you cutting-edge solutions that maximize efficiency and performance." }
        ].map((item, i) => (
          <div key={i} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h2 className="text-3xl font-bold text-[#082E6F] mb-4">{item.title}</h2>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
      )
}

      export default About
