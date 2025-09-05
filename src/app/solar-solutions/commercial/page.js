import React from 'react'
import Calltoexpert from '../../../Components/Calltoexpert'
import Appointment from '../../../Components/domasticcards/Appointment'
import FAQ from '../../../Components/FAQ'
import Image from 'next/image'


const page = () => {
    return (
        <div className="bg-gray-50">

            {/* Hero Section */}
                 <div className="flex justify-center items-center w-full h-64 text-center relative">
                           {/* Mobile Image */}
                           <Image
                             src="/Cover-Commercial-Solar-mob.png"
                             alt="commercial Mobile"
                             fill
                             priority
                             className="object-cover object-left-top md:hidden"
                           />
                     
                           {/* Desktop / Tablet Image */}
                           <Image
                             src="/covercommercial.png"
                             alt="commercial Desktop"
                             fill
                             priority
                             className="object-cover object-center hidden md:block"
                           />
                         </div>

            {/* Intro */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-center text-3xl font-bold text-[#082E6F] mb-8 border-l-[6px] border-r-[6px] border-[#82C701] inline-block px-6">
                    GO GREEN 
                </h1>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p>
                        <b className='text-[#82C701]'>GO GREEN </b> understands that every business has its own unique energy requirements. We offer customized and comprehensive commercial solar solutions tailored to your energy needs—helping businesses reduce energy costs by up to 75%, minimize carbon footprints, and enhance their market reputation.
                    </p>
                    <p>
                        Whether you’re a small or medium-sized business or a large enterprise, our highly efficient, cutting-edge commercial solar systems ensure energy security and financial success.
                    </p>
                    <p>
                        By adopting our commercial solar solutions, your business will not only benefit from long-term savings, smoother operations during load shedding, and reduced reliance on the grid—but also stand out as an environmentally conscious organization.
                    </p>
                </div>
            </div>

            <Calltoexpert />

            {/* Content Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

                {/* Section 1 */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-3xl md:text-4xl font-bold text-[#082E6F] mb-6">
                            Powering Your Business with Clean, Affordable Energy
                        </h1>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                Businesses can contribute to a healthier environment and cut down energy expenses at the same time. Our commercial solar solutions empower businesses to adopt sustainable energy options that are clean, green, and cost-effective.
                            </p>
                            <p>
                                Our state-of-the-art systems are designed to deliver strong financial benefits while balancing environmental responsibility. With after-sales services and online monitoring, we provide full visibility into your solar system’s performance.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img src="/powering.png" alt="Commercial energy experts" className="w-full h-auto rounded-2xl shadow-lg" />
                    </div>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
                    <div className="w-full lg:w-1/2">
                        <img src="/webdesign.png" alt="webdesign" className="w-full h-auto rounded-2xl shadow-lg" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-3xl font-bold text-[#082E6F] mb-6">
                            Benefits of Commercial Solar Systems for Your Business
                        </h1>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                Installing a solar PV system for your business means generating electricity from sunlight—a free source of energy. This reduces your dependence on the grid, lowers energy costs, and strengthens your environmental responsibility.
                            </p>
                            <p>
                                These systems offer uninterrupted power supply, produce a high return on investment, improve your brand image, and foster energy independence—all while cutting your carbon footprint.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-3xl font-bold text-[#082E6F] mb-6">
                            Tailored Commercial Solar Services & Assurance
                        </h1>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                Whether operating during peak sunlight hours or around-the-clock, your business deserves a system optimized for your unique operations. We offer both on-grid and hybrid systems—with net-metering options that can help achieve nearly zero electricity bills depending on system size.
                            </p>
                            <p>Our all-inclusive service includes:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Custom system design matched to your business’ energy profile</li>
                                <li>Expert installation executed by certified professionals</li>
                                <li>Robust online performance monitoring and after-sales support</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img src="/commercialpic.png" alt="commercial services" className="w-full h-auto rounded-2xl shadow-lg" />
                    </div>
                </div>

                {/* Section 4 */}
                <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
                    <div className="w-full lg:w-1/2">
                        <img src="/netmettering.png" alt="net mettering" className="w-full h-auto rounded-2xl shadow-lg" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-3xl font-bold text-[#082E6F] mb-6">
                            Benefits of Commercial Solar Systems for Your Business
                        </h1>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                Installing a solar PV system for your business means generating electricity from sunlight—a free source of energy. This reduces your dependence on the grid, lowers energy costs, and strengthens your environmental responsibility.
                            </p>
                            <p>
                                These systems offer uninterrupted power supply, produce a high return on investment, improve your brand image, and foster energy independence—all while cutting your carbon footprint.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Workflow Section */}
                <div>
                    <h1 className="text-center text-3xl font-bold text-[#082E6F] mb-8 border-l-[6px] border-r-[6px] border-[#82C701] inline-block px-6">
                        OUR PROJECT WORKFLOW PROCESS
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300 border-t-4 border-[#82C701]">
                            <h2 className="flex items-center gap-2 text-xl font-semibold text-[#082E6F] mb-4">
                                <img src="/fast-forward.png" alt="forward arrow" className="h-6" />
                                Site Assessment and Designing
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                Our workflow starts with a face-to-face consultation and site assessment to evaluate feasibility, followed by a CAD drawing tailored to your location and conditions. Design approval by you kicks off installation.
                            </p>
                        </div>

                        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300 border-t-4 border-[#082E6F]">
                            <h2 className="flex items-center gap-2 text-xl font-semibold text-[#082E6F] mb-4">
                                <img src="/fast-forward.png" alt="forward arrow" className="h-6" />
                                System Installation
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                Installations are carried out by certified professionals in four stages:
                            </p>
                            <ul className="list-decimal pl-6 text-gray-600 leading-relaxed text-sm md:text-base">
                                <li>Fasten structure to the roof</li>
                                <li>Secure panels to the structure</li>
                                <li>Complete external wiring to inverter</li>
                                <li>Connect inverter to facility's power supply</li>
                            </ul>
                        </div>

                        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300 border-t-4 border-[#82C701]">
                            <h2 className="flex items-center gap-2 text-xl font-semibold text-[#082E6F] mb-4">
                                <img src="/fast-forward.png" alt="forward arrow" className="h-6" />
                                After Sale Services
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                Post-installation, our 2-year after-sales package includes online system monitoring and maintenance to keep your system performing reliably over time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ + Appointment */}
            <div className="flex flex-col md:flex-row gap-8 justify-center items-start w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="w-full md:w-1/2">
                    <FAQ category="commercial" />
                </div>
                <div className="w-full md:w-1/2">
                    <Appointment />
                </div>
            </div>
        </div>
    )
}

export default page
