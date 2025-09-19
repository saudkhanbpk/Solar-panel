'use client';
import Calltoexpert from '../Components/Calltoexpert';
import CustomSlider from '../Components/Slider';
import { mainSliderSettings, gridSliderSettings } from '../Config/Sliderconfig';
import React from 'react';
import Image from 'next/image';
import { mainlogo } from '../Components/statis';
import { images } from '../Components/statis';
import StatsSection from '../Components/State-Section';
import { useRouter } from "next/navigation";
import GetQuoteModal from '../Components/Get-quote';

const HomePage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2 p-1">

      <section className="relative w-screen h-[70vh] overflow-hidden">
        {/* Background image */}
        <Image
          src="/homecover.png"
          alt="Solar energy solutions"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Centered content */}
        <div className="absolute inset-0 flex justify-center">
          <div className="text-center max-w-2xl w-full mx-auto 
                    p-6 lg:p-8">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold px-2 
                   bg-gradient-to-r from-[#82c701] to-emerald-800 
                   dark:from-green-400 dark:to-green-200
                   bg-clip-text text-transparent"
            >
              Power Up <span className='text-green-600'>With Sun</span>
            </h1>

            <p className="mt-4 text-gray-100 dark:text-gray-300 text-lg md:text-xl leading-relaxed px-2">
              <b className="text-[#82c701]">GO GREEN</b> One of the-trusted Brand across Pakistan for solar excellence — offers smart,
              affordable, and complete solar solutions designed to power every need.
            </p>
          </div>
        </div>
      </section>




      <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        {/* Centered Heading */}
        <hr className="border-t border-gray-300" />
        <div className='text-center mb-8'>
          <h1 className='text-3xl md:text-4xl text-[#82c701] font-black mt-4 '>We Offer Customized Solar Energy Solutions</h1>
        </div>

        {/* Centered Cards Grid */}
        <div className='flex justify-center'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-8 w-full max-w-7xl">
            {/* Card 1 */}
            <div className="card bg-base-100 mx-auto w-64">
              <img src="/domlogo.png" alt="Domestic" className='h-40 w-full  object-contain mx-auto' />
              <div className="card-body p-5">
                <h2 className="text-base text-center font-semibold">DOMESTIC</h2>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-base-100 mx-auto w-64">
              <img src="/commerlogo.png" alt="commercial" className='h-44 w-full object-contain mx-auto' />
              <div className="card-body p-5">
                <h2 className="text-base text-center font-semibold">COMMERCIAL</h2>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-base-100 mx-auto w-64">
              <img src="/industlogo.png" alt="Industrial" className='h-44 w-full object-contain mx-auto' />
              <div className="card-body p-5">
                <h2 className="text-base text-center font-semibold">INDUSTRIAL</h2>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card bg-base-100 mx-auto w-64">
              <img src="/agrilogo.png" alt="agriculture" className='h-44 w-full object-contain mx-auto' />
              <div className="card-body p-5">
                <h2 className="text-base text-center font-semibold">AGRICULTURE</h2>
              </div>
            </div>

            {/* Card 5 */}
            <div className="card bg-base-100 mx-auto w-64">
              <img src="/serlogo.png" alt="services" className='h-40 w-full object-contain mx-auto' />
              <div className="card-body p-5">
                <h2 className="text-base text-center font-semibold">SERVICES</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-300" />
      <div className="solution">
        <h1 className='text-center text-3xl md:text-3xl lg:text-4xl font-black text-[#82c701] dark:text-white px-2 mb-10'>SOLAR SOLUTION</h1>
        <div className='card'>
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Hybrid Solution Card */}
              <div className="card bg-white shadow-lg h-96 rounded-lg overflow-hidden border border-[#82c701] flex flex-col">
                {/* Image section */}
                <div className="flex-none h-1/2 bg-gray-100 flex items-center justify-center">
                  <img
                    src="/hylogo.png"
                    alt="Hybrid Solution"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Content section */}
                <div className="card-body flex-1 flex flex-col justify-between px-4 py-3">
                  <div>
                    <h3 className="text-xl font-bold text-center text-gray-800">
                      Hybrid Solution
                    </h3>
                    <p className="text-gray-600 text-center mt-3 text-lg">
                      Combines solar with battery storage and grid connection for maximum
                      efficiency and backup power.
                    </p>
                  </div>
                  <div className="mt-1 text-center">
                    <button
                      onClick={() => router.push("/products/solar-hybrid")}
                      className="bg-[#82c701] hover:bg-[#6daa01] text-white font-medium py-2 px-6 rounded-lg transition-all"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>



              <div className="card bg-white shadow-lg h-96 rounded-lg overflow-hidden border border-[#82c701] flex flex-col">
                {/* Image section */}
                <div className="flex-none h-1/2 bg-gray-100 flex items-center justify-center">
                  <img
                    src="/ongride.png"
                    alt="ON-GRID SOLAR"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Content section */}
                <div className="card-body flex-1 flex flex-col justify-between px-4 py-3">
                  <div>
                    <h3 className="text-xl font-bold text-center text-gray-800">
                      ON-GRID SOLAR
                    </h3>
                    <p className="text-gray-600 text-center mt-3 text-lg">
                      Reduce Your Electricity Bills with GO GREEN On-Grid System Packages
                    </p>
                  </div>
                  <div className="mt-4 text-center">
                    <button
                      onClick={() => router.push("/products/solar-ongrid")}
                      className="bg-[#82c701] hover:bg-[#6daa01] text-white font-medium py-2 px-6 rounded-lg transition-all"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>



              <div className="card bg-white shadow-lg h-96 rounded-lg overflow-hidden border border-[#82c701]">
                 <img
                    src="/meter.png"
                    alt="net metering Solution"
                    className="max-h-full max-w-full object-contain"
                  />
                <div className="card-body">
                  <h3 className="text-xl font-bold text-center text-gray-800">NET-METERING</h3>
                  <p className="text-gray-600 text-center mt-3 text-lg">
                    Net Metering in Pakistan
                  </p>
                  <div className="mt-6 text-center">
                    <button onClick={() => router.push("/services/net-metering")}
                      className="bg-[#82c701] hover:bg-[#6daa01] text-white font-medium py-3 px-8 rounded-lg transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              <div className="card bg-white shadow-lg rounded-lg overflow-hidden border border-[#82c701] max-w-sm mx-auto">
                {/* Top Icon / Image */}
                <figure className="h-40 bg-gray-100 flex items-center justify-center">
                  {/* Replace this SVG with your icon */}
                  <img src="/consultancy.png" alt="" />
                </figure>

                {/* Content */}
                <div className="card-body ">
                  <h3 className="text-xl font-bold text-center text-gray-800">
                    Solar System Consultancy
                  </h3>
                  <p className="text-gray-600 text-center  text-lg">
                    We provide expert consultancy to help you choose the best solar system according to your energy needs and budget.
                  </p>
                  <p className="text-gray-600 text-center  text-lg">
                    Our guidance ensures maximum efficiency and long-term savings on your investment in renewable energy.
                  </p>

                  <div className=" text-center">
                    <button
                      onClick={() => router.push("/services/#consultancy")}
                      className="bg-[#82c701] hover:bg-[#6daa01] text-white font-medium py-3 px-8 rounded-lg transition-all"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              <div className="card bg-white shadow-lg rounded-lg overflow-hidden border border-[#82c701] max-w-sm mx-auto">
                {/* Top Icon / Image */}
                <figure className="h-40 bg-gray-100 flex items-center justify-center">
                  <img src="/maintanance.png" alt="" />
                </figure>

                {/* Content */}
                <div className="card-body">
                  <h3 className="text-xl font-bold text-center text-gray-800">
                    Solar System Maintenance
                  </h3>
                  <p className="text-gray-600 text-center  text-lg">
                    Regular maintenance helps keep your solar system running at its best,
                    ensuring consistent performance.
                  </p>
                  <p className="text-gray-600 text-center  text-lg">
                    We provide scheduled checkups, repairs, and upgrades to extend the lifespan
                    of your solar equipment.
                  </p>

                  <div className=" text-center">
                    <button
                      onClick={() => router.push("/services/#maintenance")}
                      className="bg-[#82c701] hover:bg-[#6daa01] text-white font-medium py-3 px-8 rounded-lg transition-all"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              <div className="card bg-white shadow-lg rounded-lg overflow-hidden border border-[#82c701] max-w-sm mx-auto">
                {/* Top Icon / Image */}
                <figure className="h-40 bg-gray-100 flex items-center justify-center">
                  {/* Replace the SVG below with an icon that represents wheeling/grid transfer */}
                  <img src="/wheel.png" alt="solar wheel" />
                </figure>

                {/* Content */}
                <div className="card-body ">
                  <h3 className="text-xl font-bold text-center text-gray-800">
                    Solar Wheeling Services
                  </h3>

                  <p className="text-gray-600 text-center text-lg">
                    Our <b>wheeling solutions</b> let you produce solar power at one site and use it at another through the national grid.
                    We handle all the steps so you can transfer energy easily, cut costs and get the most from your investment.
                  </p>
                  <div className=" text-center">
                    <button
                      onClick={() => router.push("/services/#solar-wheeling")}
                      className="bg-[#82c701] hover:bg-[#6daa01] text-white font-medium py-3 px-8 rounded-lg transition-all"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <hr className="border-t border-gray-300" />
      <div className="my-10">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#82c701] dark:text-white mb-4">
          Our Project Work Flow Process
        </h2>
        <p className="text-[#82c701] dark:text-white font-bold text-xl md:text-2xl mb-8 text-center">
          How We Work
        </p>

        <figure className="w-[75vw] bg-[#FFFFFF] shadow-2xl mx-auto">
          <Image
            src="/flow.png"
            alt="Our project workflow diagram"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover rounded-lg"
            priority
          />
        </figure>
      </div>
       <hr className="border-t border-gray-300" />
      <div className="brand text-center mt-2">
        <h1 className=' text-3xl font-extrabold text-[#82c701] dark:text-white mb-8 border-l-[6px] border-r-[6px] border-[#82C701] inline-block px-4 py-2 rounded-lg shadow-lg'>
          Our Business Partners
        </h1>
        <div className="trustedbrand">
          <div className="w-full  bg-white dark:bg-gray-800 ">
            <CustomSlider settings={gridSliderSettings}>
              {images.map((item) => (
                <div key={`grid-${item}`} className="px-2 mt-2 mb-2">
                  <div className="h-40 flex items-center justify-center">
                    <img
                      src={item}
                      alt="Logo"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </CustomSlider>
          </div>
        </div>
      </div>

      {/* <div className="text-center  md:py-16 lg:py-20 bg-white shadow-md rounded-xl max-w-7xl mx-auto ">
        <div className="mx-auto">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-gray-800 mb-6 md:mb-8">
            Meet Our Clients
          </h1>
          <p className="text-xl md:text-xl lg:text-xl text-gray-600 mt-8 px-6 sm:px-10 md:px-16 leading-relaxed">
            GO GREEN, with its professional and highly experienced team, provides full-fledged consultancy services to entities, which include the government, investors, project developers, organizations, for solar energy projects; the services start from project conception all the way to successful project commissioning. We facilitate the development of solar projects and ensure that the overall process is completely in line with the documentation, policies, framework, and regulatory requirements.
          </p>
        </div>
      </div> */}

      {/* <div className="w-full p-6 bg-white rounded-xl shadow-sm ">
        <CustomSlider settings={mainSliderSettings}>
          {mainlogo.map((item) => (
            <div key={`main-${item}`} className="px-2">
              <div className="h-40 flex items-center justify-center">
                <img
                  src={item}
                  alt="Logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </CustomSlider>
      </div> */}
    {/* <hr className="border-t border-gray-300" /> */}
      <div className="mt-10">
        <hr className="border-t border-gray-300" />
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center dark:text-white text-[#82c701] mb-4 mt-4'>Clients' Reviews</h1>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 
                     transform transition-all duration-300 ease-in-out 
                     hover:shadow-xl hover:scale-[1.02] hover:border-[#82c701]">
              <div className="p-6">
                <p className="text-gray-600 text-lg">I reached out to GO GREEN POWER WITH SUN through their social media platform just for information, but their professional behavior, guidance, and command of their skills and experience in dealing with customers was phenomenal. It made me not look anywhere else for my solar panel installation. The system they installed is working perfectly and producing the exact amount they promised it would. GO GREEN POWER WITH SUN is the best, and I'm very pleased with their work.</p>
                <h4 className="text-xl font-semibold text-gray-800 mt-4">Olympia Mills</h4>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 
                     transform transition-all duration-300 ease-in-out 
                     hover:shadow-xl hover:scale-[1.02] hover:border-[#82c701]">
              <div className="p-6">
                <p className="text-gray-600 text-lg">I had a great experience working with GO GREEN POWER WITH SUN. They're a very professional and honest team. They gave me really good advice right from the beginning, which made the whole process really easy. They also paid attention to what I wanted and made sure the installation was done well and on time. I'm really happy with everything they did for me and I would definitely recommend them to anyone who wants a reliable and professional solar solution.</p>
                <h4 className="text-xl font-semibold text-gray-800 mt-4">Legend Hotels</h4>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 
                     transform transition-all duration-300 ease-in-out 
                     hover:shadow-xl hover:scale-[1.02] hover:border-[#82c701]">
              <div className="p-6">
                <p className="text-gray-600 text-lg">GO GREEN POWER WITH SUN answered all my questions about solar panel installation, product brands, and quality. They even provided detailed guidance on how the system works and its long-term benefits. Their knowledgeable, professional, and educated team did a great job with my installation. GO GREEN POWER WITH SUN offers fair prices for their products and installation, and the system has helped me save on my monthly bills. I highly recommend GO GREEN POWER WITH SUN for their excellent service.</p>
                <h4 className="text-xl font-semibold text-gray-800 mt-4">Col Qasim</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ApplicationForm /> */}
      <StatsSection />
      <GetQuoteModal />
      <Calltoexpert />
    </div >
  );
};

export default HomePage;