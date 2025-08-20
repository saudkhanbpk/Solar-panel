import React from 'react'
import Calltoexpert from '../../../Components/Calltoexpert'
import Appointment from '../../../Components/domasticcards/Appointment'
import FAQ from '../../../Components/FAQ'


const page = () => {
    return (
        <div>
            <div className="flex justify-center text-center items-center bg-[url(/Cover-Industrial.png)]  bg-cover bg-center h-64 ">
            </div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                <h1 className='text-center text-3xl font-bold text-gray-800 mb-8 border-l-[5px] border-r-[5px] border-gray-800'>INDUSTRIAL SOLAR SOLUTION</h1>
                <p>   In Pakistan, the industrial sector faces significant power challenges, including frequent energy shortages, limited electricity and gas availability and high power tariff rates. This whole situation significantly impacts overall production, affects the country's economy and, to some extent, the brand reputation both nationally and internationally.
                </p>

                <p>    GO GREEN SOALE has come up with a solution that's reliable,  cost-effective and a sustainable source of energy production for industries which help them to save up to 75% on their electricity cost. We offer industrial solar solutions to a variety of sectors, including textiles, sports, cement, engineering, automobile, food processing and so on. Our turnkey solution covers everything from consultation and project management to designing, performance evaluation, efficiency optimization and system installation.
                </p>

                <p>    Expertise in industrial projects is a hallmark at GO GREEN Solar. We've successfully guided both national and multinational industries through the transition to solar renewable energy, managing projects ranging from 100 kW to 2 MW. </p>
            </div>
            <Calltoexpert />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-4">
                    {/* Text Content - Left Side */}
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Expert Consultation and Design Services for Industries
                        </h1>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                Before finalizing a solution, we offer a free in-depth consultation to our industrial clients to understand their energy needs and recommend the perfect system size. This ultimately enhances the chances of achieving maximum ROI in the minimum payback period. A team of experts visit your site for a thorough assessment to determine the best solution for your unique situation.
                            </p>
                            <p>
                                Many industrial sites have limited space, but don't worry! Our experienced engineers will maximize your solar power potential even with those constraints. Using cutting-edge technology, we design a customized system and provide a clear picture of its benefits and potential savings. We consider your location, energy consumption and desired savings to craft the most efficient industrial solar solution for your business.
                            </p>
                        </div>
                    </div>

                    {/* Image - Right Side */}
                    <div className="w-full lg:w-1/2">
                        <img
                            src="/EXPERT.png"
                            alt="Industrial energy experts"
                            className="w-full h-auto items-center"
                        />
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-center items-start gap-8 mb-4'>
                    <div className=' w-full lg:w-1/2'>
                        <img src="/solar-pv.png" alt="solar pv" className='w-full h-auto items-center' />
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <h1 className='text-3xl font-bold'>Why Solar PV System is best Energy Solution for your Industry?</h1>
                        <div className='space-y-4 text-gray-700'>
                            <p>The constant rise in electricity prices, frequent hours-long load shedding and unreliable power supply create a major challenge for the industrial sector. This opens the door for more cost-effective power solutions. This compels industrialists to make the switch to solar solutions for the continuity of their production houses and save hundreds of thousands of rupees on utility expenses.</p>
                            <p>Furthermore, industrial solar solutions provide a more sustainable option, decreasing your reliance on fossil fuels. This leads to a significantly reduced carbon footprint, contributing to the fight against climate change and enhancing your commercial image as an environmentally conscious organization</p>
                        </div>

                    </div>
                </div>

                <div className=' flex flex-col lg:flex-row justify-center items-start gap-8 mb-4'>
                    <div className='w-full lg:w-1/2'>
                        <h1 className='text-3xl font-bold'>We Provide the Best Industrial solar solutions and services </h1>
                        <div className='space-y-4 text-gray-700'>
                            <p>Our in-house technical specialists and installers bring years of experience dealing with a diverse range of installations, collaborating with various businesses to implement large-scale industrial solar energy systems. We ensure to choose only the finest models from the most reputable manufacturers in the industry, and we handle all aspects of the job, including:</p>
                            <ul className='list-disc pl-5 space-y-2'>
                                <li>Reviewing your past energy consumption history</li>
                                <li>Conducting audits of structural and electrical infrastructure</li>
                                <li>Determining and recommending the best industrial solar panels</li>
                                <li>Providing end-to-end project management, from procurement to installation</li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <img src="/sevicesprovider.png" alt="services providers" className='w-full h-auto items-center' />
                    </div>
                </div>

                <div>
                    <h1 className='text-center text-3xl font-bold text-gray-800 mb-8 border-l-[5px] border-r-[5px] border-gray-800'>OUR PROJECT WORKFLOW PROCESS</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300">
                            {/* Heading */}
                            <h2 className="flex items-center gap-2 lg:gap-0 md:gap-2 text-xl font-semibold text-gray-800 mb-4">
                                <img
                                    src="/fast-forward.png"
                                    alt="forward arrow"
                                    className="h-6 ml-2"
                                />
                                Site Assessment and Designing
                            </h2>

                            {/* Paragraph */}
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                Our workflow starts with a face-to-face consultation with the client,
                                followed by a site assessment to determine whether your property is suitable
                                for solar panel installation. Then, our team provides you with a detailed CAD
                                drawing of your system. Our expert designer creates a design with your location
                                and weather conditions in mind. The design is then approved by the client before
                                the actual installation process begins.
                            </p>
                        </div>

                        <div className='bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300'>
                            <h2 className=' flex gap-2 text-xl font-semibold text-gray-800 mb-4'>
                                <img
                                    src="/fast-forward.png"
                                    alt="forward arrow"
                                    className="h-6 ml-2"
                                />
                                System Installation
                            </h2>
                            <p className='text-gray-600 leading-relaxed text-sm md:text-base'>Every installation, regardless of the system size, big or small, is carried out by our certified and professional installers. Our solar system installation occurs in four separate stages:</p>
                            <ul className='list-decimal pl-5  text-gray-600 leading-relaxed text-sm md:text-base'>
                                <li>Fasten structure to the roof</li>
                                <li>Secure panels to the structure</li>
                                <li>Complete external wiring to connect panels to the inverter</li>
                                <li>Wire the inverter to the home's power supply</li>
                            </ul>
                        </div>
                        <div className='bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300'>
                            <h2 className='text-xl font-semibold text-gray-800 mb-4 gap-2 flex'>
                                <img
                                    src="/fast-forward.png"
                                    alt="forward arrow"
                                    className="h-6 ml-2"
                                />
                                After Sale Services</h2>
                            <p className='text-gray-600 leading-relaxed text-sm md:text-base'>After we've set up your system, we don't just leave you hanging. Our installation services include a 2-year after-sales package. This covers online system monitoring and maintenance in case you encounter any issues. It's all part of our commitment to keeping you satisfied and making sure your solar system keeps performing well for the long haul.</p>
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
