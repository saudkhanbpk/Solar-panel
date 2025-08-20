import React from 'react'
import Calltoexpert from '../../../Components/Calltoexpert'
import Appointment from '../../../Components/domasticcards/Appointment'
import FAQ from '../../../Components/FAQ'

const page = () => {
    return (
        <div>
            <div className="flex justify-center text-center items-center bg-[url(/covercommercial.png)] bg-cover bg-center h-64">
            </div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                <h1 className='text-center text-3xl font-bold text-gray-800 mb-8 border-l-[5px] border-r-[5px] border-gray-800'>
                    COMMERCIAL SOLAR SOLUTIONS
                </h1>
                <p>
                    <b className='text-green-700'>GO GREEN</b> Solar understands that every business has its own unique energy requirements. We offer customized and comprehensive commercial solar solutions tailored to your energy needs—helping businesses reduce energy costs by up to 75%, minimize carbon footprints, and enhance their market reputation.
                </p>
                <p>
                    Whether you’re a small or medium-sized business or a large enterprise, our highly efficient, cutting-edge commercial solar systems ensure energy security and financial success.
                </p>
                <p>
                    By adopting our commercial solar solutions, your business will not only benefit from long-term savings, smoother operations during load shedding, and reduced reliance on the grid—but also stand out as an environmentally conscious organization.
                </p>
            </div>
            <Calltoexpert />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8">
                    {/* Text Content - Left */}
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
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

                    {/* Image - Right */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src="/powering.png"
                            alt="Commercial energy experts"
                            className="w-full h-auto items-center"
                        />
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-center items-start gap-8 mb-8'>
                    <div className='w-full lg:w-1/2'>
                        <img src="/webdesign.png" alt="webdesign.png" className='w-full h-auto items-center' />
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <h1 className='text-3xl font-bold'>
                            Benefits of Commercial Solar Systems for Your Business
                        </h1>
                        <div className='space-y-4 text-gray-700'>
                            <p>
                                Installing a solar PV system for your business means generating electricity from sunlight—a free source of energy. This reduces your dependence on the grid, lowers energy costs, and strengthens your environmental responsibility.
                            </p>
                            <p>
                                These systems offer uninterrupted power supply, produce a high return on investment, improve your brand image, and foster energy independence—all while cutting your carbon footprint.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-center items-start gap-8 mb-8'>
                    <div className='w-full lg:w-1/2'>
                        <h1 className='text-3xl font-bold'>
                            Tailored Commercial Solar Services & Assurance
                        </h1>
                        <div className='space-y-4 text-gray-700'>
                            <p>
                                Whether operating during peak sunlight hours or around-the-clock, your business deserves a system optimized for your unique operations. We offer both on-grid and hybrid systems—with net-metering options that can help achieve nearly zero electricity bills depending on system size.
                            </p>
                            <p>Our all-inclusive service includes:</p>
                            <ul className='list-disc pl-5 space-y-2'>
                                <li>Custom system design matched to your business’ energy profile</li>
                                <li>Expert installation executed by certified professionals</li>
                                <li>Robust online performance monitoring and after-sales support</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <img src="/commercialpic.png" alt="commercial services" className='w-full h-auto items-center' />
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-center items-start gap-8 mb-8'>
                    <div className='w-full lg:w-1/2'>
                        <img src="/netmettering.png" alt="netmettering" className='w-full h-auto items-center' />
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <h1 className='text-3xl font-bold'>
                            Benefits of Commercial Solar Systems for Your Business
                        </h1>
                        <div className='space-y-4 text-gray-700'>
                            <p>
                                Installing a solar PV system for your business means generating electricity from sunlight—a free source of energy. This reduces your dependence on the grid, lowers energy costs, and strengthens your environmental responsibility.
                            </p>
                            <p>
                                These systems offer uninterrupted power supply, produce a high return on investment, improve your brand image, and foster energy independence—all while cutting your carbon footprint.
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='text-center text-3xl font-bold text-gray-800 mb-8 border-l-[5px] border-r-[5px] border-gray-800'>
                        OUR PROJECT WORKFLOW PROCESS
                    </h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300">
                            <h2 className="flex items-center gap-2 lg:gap-0 md:gap-2 text-xl font-semibold text-gray-800 mb-4">
                                <img src="/fast-forward.png" alt="forward arrow" className="h-6 ml-2" />
                                Site Assessment and Designing
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                Our workflow starts with a face-to-face consultation and site assessment to evaluate feasibility, followed by a CAD drawing tailored to your location and conditions. Design approval by you kicks off installation.
                            </p>
                        </div>

                        <div className='bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300'>
                            <h2 className='flex gap-2 text-xl font-semibold text-gray-800 mb-4'>
                                <img src="/fast-forward.png" alt="forward arrow" className="h-6 ml-2" />
                                System Installation
                            </h2>
                            <p className='text-gray-600 leading-relaxed text-sm md:text-base'>
                                Installations are carried out by certified professionals in four stages:
                            </p>
                            <ul className='list-decimal pl-5 text-gray-600 leading-relaxed text-sm md:text-base'>
                                <li>Fasten structure to the roof</li>
                                <li>Secure panels to the structure</li>
                                <li>Complete external wiring to inverter</li>
                                <li>Connect inverter to facility's power supply</li>
                            </ul>
                        </div>

                        <div className='bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300'>
                            <h2 className='text-xl font-semibold text-gray-800 mb-4 gap-2 flex'>
                                <img src="/fast-forward.png" alt="forward arrow" className="h-6 ml-2" />
                                After Sale Services
                            </h2>
                            <p className='text-gray-600 leading-relaxed text-sm md:text-base'>
                                Post-installation, our 2-year after-sales package includes online system monitoring and maintenance to keep your system performing reliably over time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-start w-full">
                {/* FAQ Section */}
                <div className="w-full md:w-1/2">
                    <FAQ category="commercial" />
                </div>

                {/* Appointment Section */}
                <div className="w-full md:w-1/2">
                    <Appointment />
                </div>
            </div>


        </div>
    )
}

export default page
