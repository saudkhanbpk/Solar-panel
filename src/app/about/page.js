import React from 'react'
import Image from 'next/image'
import CoreValues from '../../Components/core-value'
const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] ">
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
              <b className='text-[#82c701]'>GO GREEN</b> was established in 2020 with a vision to revolutionize solar energy in Pakistan by offering top-notch, technologically advanced, and affordable solar solutions to individuals and organizations. With passion, hard work, dedication, commitment, advanced resources, continuous learning, customer-centric approach and our dedication to staying up-to-date with the latest solar technologies, we've been successfully pursuing our vision.
              <br /><br />
              Pakistan's heavy reliance on imported fossil fuels for electricity production not only makes electricity expensive but also contributes to the pollution of an already devastated climate. GO GREEN  has always been curious about finding ways to save both money and the environment. Our solar solutions are the answer, as they not only enhance the air quality of cities like Lahore and Karachi but also enable you to generate your own electricity and save thousands of rupees every month.
              <br /><br />
              We are dedicated to delivering excellent customer service. Our team is available to address your enquiries and assist you in selecting the appropriate solar solution for your requirements.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div id="mission" className=" scroll-mt-24 flex flex-col md:flex-row gap-8 items-center mb-16">
          <div className="md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-xl border-2 border-[#82C701]">
              <img
                src="/our-mission.png"
                alt="mission"
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

        {/*our vision */}
        <div id="vision" className="scroll-mt-24 flex flex-col md:flex-row gap-8 items-center mb-16">
          <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-md border-t-4 border-[#082E6F]">
            <h2 className="text-2xl font-bold text-[#082E6F] mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              To promote the adoption of solar energy as a sustainable solution for reducing energy costs, combating global warming, and mitigating climate change caused by fossil fuel dependency. We strive to increase the share of solar energy in Pakistan’s energy mix by driving innovation and growth in the sector. Our commitment is to make solar adoption simple and convenient, enabling customers to pay less for their energy needs while ensuring high satisfaction. At the same time, we aim to give back to the community and contribute to a cleaner, brighter future for Pakistan
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="  ">
              <img
                src="/our-vission.png"
                alt="vision"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        <div id='team' className="scroll-mt-24 text-center mb-12">
          <h2 className="text-3xl font-bold text-[#082E6F] mb-4">Our Team</h2>
          <div className="w-24 h-1 bg-[#82C701] mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12 px-6 bg-gradient-to-b from-blue-50 to-green-50">
          {/* Team Member */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 p-4 text-center">
            <img
              src="/saud.png"
              alt="CEO"
              className="w-40 h-40 mx-auto object-cover rounded-full border-4 border-[#82C701] shadow-md"
            />
            <h3 className="mt-4 text-xl font-bold text-[#082E6F]">Saud Khan</h3>
            <p className="text-sm text-gray-600 font-semibold">Chief Executive Officer</p>
          </div>

          {/* Team Member */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 p-4 text-center">
            <img
              src="/abbas.png"
              alt="HR"
              className="w-40 h-40 mx-auto object-contain rounded-full border-4 border-[#82C701] shadow-md"
            />
            <h3 className="mt-4 text-xl font-bold text-[#082E6F]">Abbas Khan</h3>
            <p className="text-sm text-gray-600 font-semibold">HR Manager</p>
          </div>

          {/* Example placeholder */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 p-4 text-center">
            <img
              src="/fahree.png"
              alt="Team Member"
              className="w-40 h-40 mx-auto object-cover bg-white rounded-full border-4 border-[#82C701] shadow-md"
            />
            <h3 className="mt-4 text-xl font-bold text-[#082E6F]">Fahre-Alam</h3>
            <p className="text-sm text-gray-600 font-semibold">CEO</p>
          </div>

          {/* Example placeholder */}
          <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 p-4 text-center">
            <img
              src="/abbas.png"
              alt="Team Member"
              className="w-40 h-40 mx-auto object-contain rounded-full border-4 border-[#82C701] shadow-md"
            />
            <h3 className="mt-4 text-xl font-bold text-[#082E6F]">Bilal Ahmed</h3>
            <p className="text-sm text-gray-600 font-semibold">Engineer</p>
          </div>
        </div>


        <div id="our-goals" className=" scroll-mt-24 flex flex-col md:flex-row gap-8 items-center mb-16">
          <div className="md:w-1/2 pt-4">
            <div className=" rounded-xl overflow-hidden shadow-xl border-2 border-[#82C701]">
              <img
                src="/our-goals.png"
                alt="mission"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-md border-t-4 border-[#082E6F]">
            <h2 className="text-2xl font-bold text-[#082E6F] mb-4">Our Goals</h2>

            <ul className='list-decimal'>
              <li>Provide affordable, cost-efficient, high-quality solar home solutions to the masses in Pakistan.</li>
              <li>Grow into a successful utility-scale EPC company delivering commercial and industrial solar solutions.</li>
              <li>Become a leading knowledge center for solar energy in Pakistan.</li>
              <li>Contribute to national efforts to reduce greenhouse gas (GHG) emissions in Pakistan.</li>
            </ul>
          </div>
        </div>

      </div>

      <div className='scroll-mt-24'>
        <CoreValues />
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
