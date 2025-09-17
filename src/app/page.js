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
      {/* <div className="flex flex-col items-center justify-center text-center ">
        <h1 className="text-3xl font-extrabold text-[#082E6F] border-l-[6px] border-r-[6px] border-[#82C701] inline-block px-4 py-2 rounded-lg shadow-lg ">
          <b className="text-[#82c701] font-heading">GO GREEN</b> – Your Reliable Partner for Solar Solutions
        </h1>
      </div> */}

      {/* <div className="card lg:card-side bg-[#EBF9EA] shadow-sm min-h-[200px] rounded-xl overflow-hidden">
  
        <div className="card-body flex flex-col items-center justify-center text-center p-6 lg:p-8 w-full lg:w-1/2">
          <div className="max-w-md mx-auto space-y-4 p-6 
                  bg-white/10 dark:bg-gray-900/60 
                  backdrop-blur-sm 
                  rounded-xl 
                  border border-gray-200/50 dark:border-gray-700/50">
            <h1
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold px-2 
             bg-gradient-to-r from-[#82c701] to-emerald-800 
             dark:from-green-400 dark:to-green-200
             bg-clip-text text-transparent"
            >
              Power Up With The Sun
            </h1>


            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed px-2">
              <b className="text-[#82c701]">GO GREEN</b>, Among Pakistan’s most respected solar energy companies, offers
              <span className="font-medium text-emerald-700 dark:text-emerald-400"> cost-effective </span>
              and
              <span className="font-medium text-emerald-700 dark:text-emerald-400"> complete solar solutions  </span>
              to meet every requirement
            </p>
          </div>
        </div>
        <figure className="lg:w-1/2 h-[220px] sm:h-[280px] md:h-[340px] lg:h-[380px] xl:h-[440px] flex items-center justify-center bg-gray-100 rounded-r-xl border-l-2 border-[#82c701] relative">
          <Image
            src="/solarpanel.jpg"
            alt="Solar energy solutions"
            className="object-cover"
            priority
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </figure>
      </div> */}

      <section className="relative w-screen h-[70vh] overflow-hidden">
        {/* Background image */}
        <Image
          src="/solarpanel.jpg"
          alt="Solar energy solutions"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Centered content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-2xl w-full mx-auto 
                    bg-white/10 dark:bg-gray-900/60 
                    backdrop-blur-sm 
                    rounded-xl 
                    border border-gray-200/50 dark:border-gray-700/50 
                    p-6 lg:p-8">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold px-2 
                   bg-gradient-to-r from-[#82c701] to-emerald-800 
                   dark:from-green-400 dark:to-green-200
                   bg-clip-text text-transparent"
            >
              Power Up With The Sun
            </h1>

            <p className="mt-4 text-gray-100 dark:text-gray-300 text-lg md:text-xl leading-relaxed px-2">
              <b className="text-[#82c701]">GO GREEN</b>, Among Pakistan’s most respected solar energy companies, offers
              <span className="font-medium text-emerald-200 dark:text-emerald-400"> cost-effective </span>
              and
              <span className="font-medium text-emerald-200 dark:text-emerald-400"> complete solar solutions </span>
              to meet every requirement
            </p>
          </div>
        </div>
      </section>




      <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Centered Heading */}
        <div className='text-center mb-16'>
          <h1 className='text-3xl md:text-4xl font-black mb-8'>We Offer Customized Solar Energy Solutions</h1>
        </div>

        {/* Centered Cards Grid */}
        <div className='flex justify-center'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-8 w-full max-w-7xl">
            {/* Card 1 */}
            <div className="card bg-base-100 mx-auto w-64">
              <img src="/Domestic.png" alt="Domestic" className='h-44 w-full object-contain mx-auto' />
              <div className="card-body p-5">
                <h2 className="text-base text-center font-semibold">DOMESTIC</h2>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-base-100 mx-auto w-64">
              <img src="/Commercial.png" alt="commercial" className='h-44 w-full object-contain mx-auto' />
              <div className="card-body p-5">
                <h2 className="text-base text-center font-semibold">COMMERCIAL</h2>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-base-100 mx-auto w-64">
              <img src="/Industrial.png" alt="Industrial" className='h-44 w-full object-contain mx-auto' />
              <div className="card-body p-5">
                <h2 className="text-base text-center font-semibold">INDUSTRIAL</h2>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card bg-base-100 mx-auto w-64">
              <img src="/Agriculture.png" alt="agriculture" className='h-44 w-full object-contain mx-auto' />
              <div className="card-body p-5">
                <h2 className="text-base text-center font-semibold">AGRICULTURE</h2>
              </div>
            </div>

            {/* Card 5 */}
            <div className="card bg-base-100 mx-auto w-64">
              <img src="/Services.png" alt="services" className='h-44 w-full object-contain mx-auto' />
              <div className="card-body p-5">
                <h2 className="text-base text-center font-semibold">SERVICES</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-300" />
      <div className="solution">
        <h1 className='text-center text-3xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white px-2 mb-10'>SOLAR SOLUTION</h1>
        <div className='card'>
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Hybrid Solution Card */}
              <div className="card bg-white shadow-lg rounded-lg overflow-hidden border border-[#82c701]">
                <figure className=" h-40 bg-gray-100 flex items-center justify-center">
                  {/* <img src="/hybri.png" alt="" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20 text-[#82c701]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v9m0 0l-3-3m3 3l3-3m-6 6h6a9 9 0 100-18 9 9 0 000 18z"
                    />
                  </svg>
                </figure>
                <div className="card-body ">
                  <h3 className="text-xl font-bold text-center text-gray-800">Hybrid Solution</h3>
                  <p className="text-gray-600 text-center mt-3 text-lg">
                    Combines solar with battery storage and grid connection for maximum efficiency and backup power.
                  </p>
                  <div className="mt-6 text-center">
                    <button onClick={() => router.push("/products/solar-hybrid")}
                      className="bg-[#82c701] hover:bg-[#6daa01] text-white font-medium py-3 px-8 rounded-lg transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Parallel Solution Card */}
              <div className="card bg-white shadow-lg rounded-lg overflow-hidden border border-[#82c701]">
                <figure className="h-40 bg-gray-100 flex items-center justify-center">
                  <svg className="w-24 h-24 text-[#82c701]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </figure>
                <div className="card-body ">
                  <h3 className="text-xl font-bold text-center text-gray-800">ON-GRID SOLAR</h3>
                  <p className="text-gray-600 text-center mt-3 text-lg">
                    Reduce Your Electricity Bills with GO GREEN On-Grid System Packages
                  </p>
                  <div className="mt-6 text-center">
                    <button onClick={() => router.push("/products/solar-ongrid")}
                      className="bg-[#82c701] hover:bg-[#6daa01] text-white font-medium py-3 px-8 rounded-lg transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Series Solution Card */}
              <div className="card bg-white shadow-lg rounded-lg overflow-hidden border border-[#82c701]">
                <figure className="h-40 bg-gray-100 flex items-center justify-center">
                  <svg className="w-24 h-24 text-[#82c701]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6L9 17l-5-5" />
                  </svg>
                </figure>
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
                  <svg className="w-24 h-24 text-[#82c701]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m9-9H3" />
                  </svg>
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
                  {/* Replace the SVG below with an appropriate maintenance/repair icon */}
                  <svg
                    className="w-24 h-24 text-[#82c701]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h11M9 21V9m0 0V3l6 6H9z"
                    />
                  </svg>
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
                  <svg
                    className="w-24 h-24 text-[#82c701]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12h3m12 0h3M12 3v18m-6-6l6 6 6-6"
                    />
                  </svg>
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
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Our Project Work Flow Process
        </h2>
        <p className="text-gray-600 dark:text-white font-bold text-xl md:text-2xl mb-8 text-center">
          How We Work
        </p>

        <figure className="w-[85vw] bg-[#FFFFFF] shadow-2xl mx-auto">
          <Image
            src="/our-Expertise.png"
            alt="Our project workflow diagram"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover rounded-lg"
            priority
          />
        </figure>
      </div>

      <div className="brand text-center">
        <h1 className=' text-3xl font-extrabold text-[#082E6F] mb-8 border-l-[6px] border-r-[6px] border-[#82C701] inline-block px-4 py-2 rounded-lg shadow-lg'>
          Top Brands We Trust for Your Solar System Needs
        </h1>
        <div className="trustedbrand">
          <div className="w-full  bg-white dark:bg-gray-800 rounded-xl shadow-sm ">
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
      {/* <hr className="border-t border-gray-300" /> */}


      {/* <div className="">
        <div className="max-w-5xl mx-auto px-4 py-8 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 
             transform transition-all duration-300 ease-in-out 
             hover:shadow-xl hover:scale-[1.02] hover:border-[#82c701] flex flex-col">
              <div className="p-8 text-center flex-grow">
                <h4 className="text-2xl font-semibold text-gray-800 mb-6">Bank Financing</h4>
                <p className="text-gray-600 mb-8 mx-auto max-w-prose text-lg">
                  GO GREEN is proud to announce that we are affiliated with all commercial banks listed under the State Bank of Pakistan's solar panel installation financing scheme. This means that regardless of your bank affiliation for solar financing, GO GREEN will be at your doorstep for solar panel installation. We install solar panel systems in accordance with the policies and financing schemes of your chosen bank. The system could be installed from 5 KW for homes to 100 KW for businesses. The panels we use for installation under the State Bank of Pakistan financing scheme are durable and highly efficient and can last for more than 25 years.
                </p>
              </div>
              <div className="px-8 pb-6">
                <ul className="space-y-4 text-center">
                  <li className="flex items-center justify-center gap-3 text-lg dark:text-gray-200">
                    <svg className="w-6 h-6 text-[#82c701]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Hassle-Free Process
                  </li>
                  <li className="flex items-center justify-center gap-3 text-lg dark:text-gray-200">
                    <svg className="w-6 h-6 text-[#82c701]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Fast Application Approvals
                  </li>
                  <li className="flex items-center justify-center gap-3 text-lg dark:text-gray-200">
                    <svg className="w-6 h-6 text-[#82c701]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    High Quality & Efficient Panels
                  </li>
                </ul>
              </div>
              <div className="text-center pb-8">
                <button className="bg-[#82c701] hover:bg-[#6daa01] text-white font-medium py-3 px-8 rounded-lg transition-all">
                  More Details
                </button>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 
             transform transition-all duration-300 ease-in-out 
             hover:shadow-xl hover:scale-[1.02] hover:border-[#82c701] flex flex-col">
              <div className="p-8 text-center flex-grow">
                <h4 className="text-2xl font-semibold text-gray-800 mb-6">EMI Plan</h4>
                <p className="text-gray-600 mb-8 mx-auto max-w-prose text-lg">
                  GO GREEN is proud to announce that we are affiliated with all commercial banks listed under the State Bank of Pakistan's solar panel installation financing scheme. This means that regardless of your bank affiliation for solar financing, GO GREEN will be at your doorstep for solar panel installation. We install solar panel systems in accordance with the policies and financing schemes of your chosen bank. The system could be installed from 5 KW for homes to 100 KW for businesses. The panels we use for installation under the State Bank of Pakistan financing scheme are durable and highly efficient and can last for more than 25 years.
                </p>
              </div>
              <div className="px-8 pb-6">
                <ul className="space-y-4 text-center">
                  <li className="flex items-center justify-center gap-3 text-lg dark:text-gray-200">
                    <svg className="w-6 h-6 text-[#82c701]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    0% Mark-Up Rate
                  </li>
                  <li className="flex items-center justify-center gap-3 text-lg dark:text-gray-200">
                    <svg className="w-6 h-6 text-[#82c701]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    EMI Plan 6 months to 1 year
                  </li>
                  <li className="flex items-center justify-center gap-3 text-lg dark:text-gray-200">
                    <svg className="w-6 h-6 text-[#82c701]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    No Bank Partnership Required
                  </li>
                </ul>
              </div>
              <div className="text-center pb-8">
                <button className="bg-[#82c701] hover:bg-[#6daa01] text-white font-medium py-3 px-8 rounded-lg transition-all">
                  APPLY HERE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      <div className="text-center  md:py-16 lg:py-20 bg-white shadow-md rounded-xl max-w-7xl mx-auto ">
        <div className="mx-auto">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-gray-800 mb-6 md:mb-8">
            Meet Our Clients
          </h1>
          <p className="text-xl md:text-xl lg:text-xl text-gray-600 mt-8 px-6 sm:px-10 md:px-16 leading-relaxed">
            GO GREEN, with its professional and highly experienced team, provides full-fledged consultancy services to entities, which include the government, investors, project developers, organizations, for solar energy projects; the services start from project conception all the way to successful project commissioning. We facilitate the development of solar projects and ensure that the overall process is completely in line with the documentation, policies, framework, and regulatory requirements.
          </p>
        </div>
      </div>

      <div className="w-full p-6 bg-white rounded-xl shadow-sm ">
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
      </div>

      <div className="">
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center dark:text-white text-gray-800 mb-8'>Clients' Reviews</h1>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 
                     transform transition-all duration-300 ease-in-out 
                     hover:shadow-xl hover:scale-[1.02] hover:border-[#82c701]">
              <div className="p-6">
                <p className="text-gray-600 text-lg">I reached out to GO GREEN POWER WITH SUN through their social media platform just for information, but their professional behavior, guidance, and command of their skills and experience in dealing with customers was phenomenal. It made me not look anywhere else for my solar panel installation. The system they installed is working perfectly and producing the exact amount they promised it would. GO GREEN POWER WITH SUN is the best, and I'm very pleased with their work.</p>
                <h4 className="text-xl font-semibold text-gray-800 mt-4">Forward Sports</h4>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 
                     transform transition-all duration-300 ease-in-out 
                     hover:shadow-xl hover:scale-[1.02] hover:border-[#82c701]">
              <div className="p-6">
                <p className="text-gray-600 text-lg">I had a great experience working with GO GREEN POWER WITH SUN. They're a very professional and honest team. They gave me really good advice right from the beginning, which made the whole process really easy. They also paid attention to what I wanted and made sure the installation was done well and on time. I'm really happy with everything they did for me and I would definitely recommend them to anyone who wants a reliable and professional solar solution.</p>
                <h4 className="text-xl font-semibold text-gray-800 mt-4">RAJCO Industries</h4>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 
                     transform transition-all duration-300 ease-in-out 
                     hover:shadow-xl hover:scale-[1.02] hover:border-[#82c701]">
              <div className="p-6">
                <p className="text-gray-600 text-lg">GO GREEN POWER WITH SUN answered all my questions about solar panel installation, product brands, and quality. They even provided detailed guidance on how the system works and its long-term benefits. Their knowledgeable, professional, and educated team did a great job with my installation. GO GREEN POWER WITH SUN offers fair prices for their products and installation, and the system has helped me save on my monthly bills. I highly recommend GO GREEN POWER WITH SUN for their excellent service.</p>
                <h4 className="text-xl font-semibold text-gray-800 mt-4">Lahore School of Economics</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ApplicationForm /> */}
      <GetQuoteModal />
      <StatsSection />

      <Calltoexpert />
    </div >
  );
};

export default HomePage;