'use client';
import Calltoexpert from '../Components/Calltoexpert';
import ApplicationForm from '../Components/Form'
import CustomSlider from '../Components/Slider';
import { mainSliderSettings, gridSliderSettings } from '../Config/Sliderconfig';
import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';


const HomePage = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [systemsInstalled, setSystemsInstalled] = useState(0);
  const [megawatts, setMegawatts] = useState(0);
  const [customers, setCustomers] = useState(0);

  useEffect(() => {
    const duration = 3000; // Animation duration in ms
    const startTime = Date.now();

    const animateValue = (start, end, setValue) => {
      const range = end - start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range));

      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(start + progress * range);

        setValue(value);

        if (progress === 1) {
          clearInterval(timer);
        }
      }, 16);
    };

    animateValue(0, 1250, setSystemsInstalled);
    animateValue(0, 25.5, setMegawatts);
    animateValue(0, 950, setCustomers);

    return () => {
      clearInterval();
    };
  }, []);




  const faqs = [
    {
      question: "What solar solutions do you offer?",
      answer: "We provide residential, commercial, and industrial solar systems including panels, inverters, and battery storage solutions."
    },
    {
      question: "How long does installation take?",
      answer: "Most residential installations are completed within 2-3 days, while commercial projects may take 1-2 weeks depending on scale."
    },
    {
      question: "Do you offer maintenance services?",
      answer: "Yes, we provide comprehensive maintenance packages including system checks, cleaning, and performance optimization."
    },
    {
      question: "What warranties do you provide?",
      answer: "We offer 25-year performance warranties on panels, 10-year warranties on inverters, and 5-year workmanship warranties."
    }
  ];


  return (
    <div className="flex flex-col gap-6 p-4">

      <div className="card lg:card-side bg-[#EBF9EA] shadow-sm min-h-[180px] rounded-xl overflow-hidden">
        {/* Content Section */}
        <div className="card-body flex flex-col items-center justify-center text-center p-4 lg:p-6 w-full lg:w-1/2">
          <div className="max-w-md mx-auto space-y-2">
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-gray-800 px-2">
              Powering Tomorrow's World
            </h1>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed line-clamp-2 px-2">
              Alpha Solar, One of Pakistan's pioneers in solar energy, offers cost-effective and top-notch solar solutions to residential, commercial and agricultural entities.
            </p>
            <div className="pt-2 md:pt-3">
              <button className="bg-[#5AA86C] hover:bg-[#4a8a5a] text-white font-lg py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <figure className="lg:w-1/2 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] flex items-center justify-center bg-gray-100 rounded-r-xl border-l-2 border-[#5AA86C] relative">
          <Image
            src="/solarpanel.jpg"
            alt="Solar energy solutions"
            className="object-cover"
            priority
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </figure>
      </div>


      <div className="w-full p-4 bg-white rounded-xl shadow-sm mt-4">

        <CustomSlider settings={mainSliderSettings}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={`main-${item}`} className="px-2 ">
              <div className="bg-[#EBF9EA] h-40 flex items-center justify-center rounded-xl border-2 border-[#5AA86C]">
                <h3 className='text-2xl font-bold text-[#5AA86C]'> {item}</h3>
              </div>
            </div>
          ))}
        </CustomSlider>
      </div>

      <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Centered Heading */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-black mb-6'>We Offer Customized Solar Energy Solutions</h1>
        </div>

        {/* Centered Cards Grid */}
        <div className='flex justify-center'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full max-w-7xl">
            {/* Card 1 (duplicate as needed) */}
            <div className="card bg-base-100 shadow-sm mx-auto w-full max-w-xs">
              <figure>
                <svg class="w-2xl h-2xl text-[#5AA86C] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="180" height="180" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd" />
                </svg>
              </figure>
              <div className="card-body p-4">
                <h2 className="text-sm text-center">DOMESTIC</h2>
              </div>
            </div>



            {/* Card 3 */}
            <div className="card bg-base-100 shadow-sm mx-auto w-full max-w-xs">
              <figure>
                <svg class="w-2xl h-2xl text-[#5AA86C] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="180" height="180" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd" />
                </svg>

              </figure>
              <div className="card-body p-4">
                <h2 className="text-sm text-center">COMMERCIAL</h2>
              </div>
            </div>

            {/* Card 4 */}
            <div className="card bg-base-100 shadow-sm mx-auto w-full max-w-xs">
              <figure>
                <svg class="w-2xl h-2xl text-[#5AA86C] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="180" height="180" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd" />
                </svg>
              </figure>
              <div className="card-body p-4">
                <h2 className="text-sm text-center">INDUSTRIAL</h2>
              </div>
            </div>

            {/* Card 5 */}
            <div className="card bg-base-100 shadow-sm mx-auto w-full max-w-xs">
              <figure>
                <svg class="w-2xl h-2xl text-[#5AA86C] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="180" height="180" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd" />
                </svg>
              </figure>
              <div className="card-body p-4">
                <h2 className="text-sm text-center">AGRICULTURE</h2>
              </div>
            </div>

            {/* Card 6 */}
            <div className="card bg-base-100 shadow-sm mx-auto w-full max-w-xs">
              <figure>
                <svg class="w-2xl h-2xl text-[#5AA86C] dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="180" height="180" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd" />
                </svg>
              </figure>
              <div className="card-body p-4">
                <h2 clasSName="text-sm text-center">SERVICES</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="FAQ">
        <div className="flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-800 px-2">
            Alpha Solar – Your Reliable Partner for Solar Solutions
          </h1>
          <p className="mt-2 text-sm md:text-base lg:text-lg text-gray-600">
            Leading the Way – A Pioneer in Pakistan’s Solar Industry
          </p>
        </div>
        <div className="FAQ-content">
          <div className="max-w-6xl mx-auto px-4 py-12">

            <div className="flex flex-col md:flex-row gap-8">
              {/* Questions Box */}
              <div className="w-full md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-sm">

                <div className="space-y-2">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`p-3 cursor-pointer rounded-md transition-all ${activeIndex === index ? 'bg-[#5AA86C] text-white' : 'bg-white hover:bg-gray-100'}`}
                    >
                      {faq.question}
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider - Hidden on mobile */}
              <div className="hidden md:block border-l border-gray-200"></div>

              {/* Answers Box */}
              <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-sm border border-gray-200">

                <div className="p-4 bg-gray-50 rounded-md min-h-[200px] flex items-center">
                  <p className="text-gray-700">{faqs[activeIndex].answer}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="brand">
        <h1 className='text-center text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-800 px-2'>Top Brands We Trust for Your Solar System Needs</h1>
        <div className="trustedbrand">
          <div className="w-full p-4 bg-white rounded-xl shadow-sm mt-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Our Services Grid</h2>

            <CustomSlider settings={gridSliderSettings}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3, 4, 5, 6, 7, 2, 3].map((item) => (
                <div key={`grid-${item}`} className="px-2 mt-1.5 mb-1.5">
                  <div className="bg-[#EBF9EA] h-40 flex items-center justify-center rounded-xl border-2 border-[#5AA86C]">
                    <h3 className='text-2xl font-bold text-[#5AA86C]'> {item}</h3>
                  </div>
                </div>
              ))}
            </CustomSlider>
          </div>
        </div>
      </div>

      <div className="solution">
        <h1 className='text-center text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-800 px-2'>SOLAR SOLUTION</h1>
        <div className='card'>
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Hybrid Solution Card */}
              <div className="card bg-white shadow-lg rounded-lg overflow-hidden border border-[#5AA86C]">
                <figure className="h-48 bg-gray-100 flex items-center justify-center">
                  <svg className="w-24 h-24 text-[#5AA86C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </figure>
                <div className="card-body p-6">
                  <h3 className="text-xl font-bold text-center text-gray-800">Hybrid Solution</h3>
                  <p className="text-gray-600 text-center mt-2">
                    Combines solar with battery storage and grid connection for maximum efficiency and backup power.
                  </p>
                  <div className="mt-4 text-center">
                    <button className="bg-[#5AA86C] hover:bg-[#4a8a5a] text-white font-medium py-2 px-6 rounded-lg transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Parallel Solution Card */}
              <div className="card bg-white shadow-lg rounded-lg overflow-hidden border border-[#5AA86C]">
                <figure className="h-48 bg-gray-100 flex items-center justify-center">
                  <svg className="w-24 h-24 text-[#5AA86C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </figure>
                <div className="card-body p-6">
                  <h3 className="text-xl font-bold text-center text-gray-800">ON-GRID SOLAR</h3>
                  <p className="text-gray-600 text-center mt-2">
                    Reduce Your Electricity Bills with Alpha Solar On-Grid System Packages
                  </p>
                  <div className="mt-4 text-center">
                    <button className="bg-[#5AA86C] hover:bg-[#4a8a5a] text-white font-medium py-2 px-6 rounded-lg transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Series Solution Card */}
              <div className="card bg-white shadow-lg rounded-lg overflow-hidden border border-[#5AA86C]">
                <figure className="h-48 bg-gray-100 flex items-center justify-center">
                  <svg className="w-24 h-24 text-[#5AA86C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6L9 17l-5-5" />
                  </svg>
                </figure>
                <div className="card-body p-6">
                  <h3 className="text-xl font-bold text-center text-gray-800">NET-METERING</h3>
                  <p className="text-gray-600 text-center mt-2">
                    Net Metering in Pakistan
                  </p>
                  <div className="mt-4 text-center">
                    <button className="bg-[#5AA86C] hover:bg-[#4a8a5a] text-white font-medium py-2 px-6 rounded-lg transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Calltoexpert />

      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Total Systems Installed */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center border-t-4 border-[#5AA86C]">
              <div className="text-4xl md:text-5xl font-bold text-[#5AA86C] mb-2">{systemsInstalled.toLocaleString()}+</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Systems Installed</h3>
              <p className="text-gray-600">Reliable solar solutions delivered across Pakistan</p>
              <div className="mt-4">
                <div className="w-16 h-1 bg-[#5AA86C] mx-auto"></div>
              </div>
            </div>

            {/* Total Megawatts */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center border-t-4 border-[#5AA86C]">
              <div className="text-4xl md:text-5xl font-bold text-[#5AA86C] mb-2">{megawatts.toFixed(1)} MW</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Megawatts</h3>
              <p className="text-gray-600">Clean energy generated for homes and businesses</p>
              <div className="mt-4">
                <div className="w-16 h-1 bg-[#5AA86C] mx-auto"></div>
              </div>
            </div>

            {/* Total Customers */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center border-t-4 border-[#5AA86C]">
              <div className="text-4xl md:text-5xl font-bold text-[#5AA86C] mb-2">{customers.toLocaleString()}+</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Satisfied Customers</h3>
              <p className="text-gray-600">Trusting us for their solar energy needs</p>
              <div className="mt-4">
                <div className="w-16 h-1 bg-[#5AA86C] mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className=" text-center text-[16px] md:text-xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-2">
          Our Project Work Flow Process
        </h2>
        <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-6 text-center">
          How We Work
        </p>

        <figure className=" w-[80vw] bg-[#FFFFFF] shadow-2xl mx-auto m-[5px]">
          <Image
            src="/Our-expertise.jpg"
            alt="Our project workflow diagram"
            width={1920} // set a large width for full-width image
            height={1080}
            className="w-full h-auto object-cover rounded"
            priority
          />
        </figure>
      </div>

      <div>
        <h1 className='text-xl font-bold text-center text-gray-800 mb-2 md:text-xl lg:text-3xl xl:text-4xl'>Clients’ Reviews</h1>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 
                     transform transition-all duration-300 ease-in-out 
                     hover:shadow-xl hover:scale-[1.02] hover:border-[#5AA86C]">
              <div className="p-6">
                <p className="text-gray-600">I reached out to Alpha Solar through their social media platform just for information, but their professional behavior, guidance, and command of their skills and experience in dealing with customers was phenomenal. It made me not look anywhere else for my solar panel installation. The system they installed is working perfectly and producing the exact amount they promised it would. Alpha Solar is the best, and I’m very pleased with their work.</p>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Forward Sports</h4>

              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 
                     transform transition-all duration-300 ease-in-out 
                     hover:shadow-xl hover:scale-[1.02] hover:border-[#5AA86C]">
              <div className="p-6">
                <p className="text-gray-600">I had a great experience working with Alpha Solar. They’re a very professional and honest team. They gave me really good advice right from the beginning, which made the whole process really easy. They also paid attention to what I wanted and made sure the installation was done well and on time. I’m really happy with everything they did for me and I would definitely recommend them to anyone who wants a reliable and professional solar solution.</p>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">RAJCO Industries</h4>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 
                     transform transition-all duration-300 ease-in-out 
                     hover:shadow-xl hover:scale-[1.02] hover:border-[#5AA86C]">
              <div className="p-6">
                <p className="text-gray-600">Alpha Solar answered all my questions about solar panel installation, product brands, and quality. They even provided detailed guidance on how the system works and its long-term benefits. Their knowledgeable, professional, and educated team did a great job with my installation. Alpha Solar offers fair prices for their products and installation, and the system has helped me save on my monthly bills. I highly recommend Alpha Solar for their excellent service.</p>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Lahore School of Economics</h4>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-5xl mx-auto px-4  py-12 gap-2.5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-4xl shadow-md overflow-hidden border border-gray-100 
             transform transition-all duration-300 ease-in-out 
             hover:shadow-xl hover:scale-[1.02] hover:border-[#5AA86C] flex flex-col">
              <div className="p-6 text-center flex-grow">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Bank Financing</h4>
                <p className="text-gray-600 mb-6 mx-auto max-w-prose">
                  Alpha Solar is proud to announce that we are affiliated with all commercial banks listed under the State Bank of Pakistan’s solar panel installation financing scheme. This means that regardless of your bank affiliation for solar financing, Alpha Solar will be at your doorstep for solar panel installation. We install solar panel systems in accordance with the policies and financing schemes of your chosen bank. The system could be installed from 5 KW for homes to 100 KW for businesses. The panels we use for installation under the State Bank of Pakistan financing scheme are durable and highly efficient and can last for more than 25 years.                </p>
              </div>
              <div className="px-6 pb-4">
                <ul className="space-y-3 text-center">
                  <li className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 text-[#5AA86C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Hassle-Free Process
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 text-[#5AA86C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Fast Application Approvals
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 text-[#5AA86C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    High Quality & Efficient Panels
                  </li>
                </ul>
              </div>
              <div className="text-center pb-6">
                <button className="bg-[#5AA86C] hover:bg-[#4a8a5a] text-white font-medium py-2 px-6 rounded-lg transition-all">
                  More Details
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-4xl shadow-md overflow-hidden border border-gray-100 
             transform transition-all duration-300 ease-in-out 
             hover:shadow-xl hover:scale-[1.02] hover:border-[#5AA86C] flex flex-col">
              <div className="p-6 text-center flex-grow">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">EMI Plan</h4>
                <p className="text-gray-600 mb-6 mx-auto max-w-prose">
                  Alpha Solar is proud to announce that we are affiliated with all commercial banks listed under the State Bank of Pakistan’s solar panel installation financing scheme. This means that regardless of your bank affiliation for solar financing, Alpha Solar will be at your doorstep for solar panel installation. We install solar panel systems in accordance with the policies and financing schemes of your chosen bank. The system could be installed from 5 KW for homes to 100 KW for businesses. The panels we use for installation under the State Bank of Pakistan financing scheme are durable and highly efficient and can last for more than 25 years.                </p>
              </div>
              <div className="px-6 pb-4">
                <ul className="space-y-3 text-center">
                  <li className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 text-[#5AA86C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    0% Mark-Up Rate
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 text-[#5AA86C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    EMI Plan 6 months to 1 year
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 text-[#5AA86C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    No Bank Partnership Required
                  </li>
                </ul>
              </div>
              <div className="text-center pb-6">
                <button className="bg-[#5AA86C] hover:bg-[#4a8a5a] text-white font-medium py-2 px-6 rounded-lg transition-all">
                  APPLY HERE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ApplicationForm />

      <div className="text-center px-4 py-8 md:py-12 lg:py-16 bg-white shadow-md rounded-lg max-w-7xl mx-auto my-6 md:my-10">
        <div className=" mx-auto">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-[3rem] text-gray-800 mb-4 md:mb-6">
            Meet Our Clients
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 mt-6 px-4 sm:px-8 md:px-12 leading-relaxed">
            Alpha Solar, with its professional and highly experienced team, provides full-fledged consultancy services to entities, which include the government, investors, project developers, organizations, for solar energy projects; the services start from project conception all the way to successful project commissioning. We facilitate the development of solar projects and ensure that the overall process is completely in line with the documentation, policies, framework, and regulatory requirements.
          </p>
        </div>
      </div>
      
         <div className="w-full p-4 bg-white rounded-xl shadow-sm mt-4">

        <CustomSlider settings={mainSliderSettings}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={`main-${item}`} className="px-2 ">
              <div className="bg-[#EBF9EA] h-40 flex items-center justify-center rounded-xl border-2 border-[#5AA86C]">
                <h3 className='text-2xl font-bold text-[#5AA86C]'> {item}</h3>
              </div>
            </div>
          ))}
        </CustomSlider>
      </div>
    
    </div>
  );
};

export default HomePage;