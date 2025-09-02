import React from 'react'
import Calltoexpert from '../../../Components/Calltoexpert'
import Appointment from '../../../Components/domasticcards/Appointment'
import FAQ from '../../../Components/FAQ'

const page = () => {
    return (
        <div className="bg-gray-50">
            {/* Cover Section */}
            <div className="flex justify-center text-center items-center bg-[url(/Cover-Industrial.png)] bg-cover bg-center h-64">
            </div>

            {/* Intro Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-center text-3xl md:text-4xl font-bold text-[#082E6F] mb-8 border-l-[6px] border-r-[6px] border-[#82C701] inline-block px-6">
                    INDUSTRIAL SOLAR SOLUTION
                </h1>
                <p className="text-gray-700 leading-relaxed mb-4">
                    In Pakistan, the industrial sector faces significant power challenges, including frequent energy shortages, limited electricity and gas availability and high power tariff rates. This whole situation significantly impacts overall production, affects the country's economy and, to some extent, the brand reputation both nationally and internationally.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                    GO GREEN has come up with a solution that's reliable, cost-effective and a sustainable source of energy production for industries which help them to save up to 75% on their electricity cost. We offer industrial solar solutions to a variety of sectors, including textiles, sports, cement, engineering, automobile, food processing and so on. Our turnkey solution covers everything from consultation and project management to designing, performance evaluation, efficiency optimization and system installation.
                </p>

                <p className="text-gray-700 leading-relaxed">
                    Expertise in industrial projects is a hallmark at GO GREEN . We've successfully guided both national and multinational industries through the transition to solar renewable energy, managing projects ranging from 100 kW to 2 MW.
                </p>
            </div>

            <Calltoexpert />

            {/* Expert Consultation Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-3xl md:text-4xl font-bold text-[#082E6F] mb-6">
                            Expert Consultation and Design Services for Industries
                        </h1>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Before finalizing a solution, we offer a free in-depth consultation to our industrial clients to understand their energy needs and recommend the perfect system size. This ultimately enhances the chances of achieving maximum ROI in the minimum payback period. A team of experts visit your site for a thorough assessment to determine the best solution for your unique situation.
                            </p>
                            <p>
                                Many industrial sites have limited space, but don't worry! Our experienced engineers will maximize your solar power potential even with those constraints. Using cutting-edge technology, we design a customized system and provide a clear picture of its benefits and potential savings. We consider your location, energy consumption and desired savings to craft the most efficient industrial solar solution for your business.
                            </p>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <img
                            src="/EXPERT.png"
                            alt="Industrial energy experts"
                            className="w-full h-auto rounded-xl shadow-md"
                        />
                    </div>
                </div>

                {/* Why Solar PV Section */}
                <div className="flex flex-col lg:flex-row justify-center items-start gap-8 mb-12">
                    <div className="w-full lg:w-1/2">
                        <img src="/solar-pv.png" alt="solar pv" className="w-full h-auto rounded-xl shadow-md" />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-3xl font-bold text-[#082E6F] mb-4">
                            Why Solar PV System is Best Energy Solution for Your Industry?
                        </h1>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                The constant rise in electricity prices, frequent hours-long load shedding and unreliable power supply create a major challenge for the industrial sector. This opens the door for more cost-effective power solutions. This compels industrialists to make the switch to solar solutions for the continuity of their production houses and save hundreds of thousands of rupees on utility expenses.
                            </p>
                            <p>
                                Furthermore, industrial solar solutions provide a more sustainable option, decreasing your reliance on fossil fuels. This leads to a significantly reduced carbon footprint, contributing to the fight against climate change and enhancing your commercial image as an environmentally conscious organization.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Best Industrial Solar Section */}
                <div className="flex flex-col lg:flex-row justify-center items-start gap-8 mb-12">
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-3xl font-bold text-[#082E6F] mb-4">
                            We Provide the Best Industrial Solar Solutions and Services
                        </h1>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Our in-house technical specialists and installers bring years of experience dealing with a diverse range of installations, collaborating with various businesses to implement large-scale industrial solar energy systems. We ensure to choose only the finest models from the most reputable manufacturers in the industry, and we handle all aspects of the job, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>Reviewing your past energy consumption history</li>
                                <li>Conducting audits of structural and electrical infrastructure</li>
                                <li>Determining and recommending the best industrial solar panels</li>
                                <li>Providing end-to-end project management, from procurement to installation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img src="/sevicesprovider.png" alt="services providers" className="w-full h-auto rounded-xl shadow-md" />
                    </div>
                </div>

                {/* Workflow Section */}
                <div>
                    <h1 className="text-center text-3xl font-bold text-[#082E6F] mb-10 border-l-[6px] border-r-[6px] border-[#82C701] inline-block px-6">
                        OUR PROJECT WORKFLOW PROCESS
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300 border-t-4 border-[#82C701]">
                            <h2 className="flex items-center gap-2 text-xl font-semibold text-[#082E6F] mb-4">
                                <img src="/fast-forward.png" alt="forward arrow" className="h-6" />
                                Site Assessment and Designing
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                Our workflow starts with a face-to-face consultation with the client, followed by a site assessment to determine whether your property is suitable for solar panel installation. Then, our team provides you with a detailed CAD drawing of your system. Our expert designer creates a design with your location and weather conditions in mind. The design is then approved by the client before the actual installation process begins.
                            </p>
                        </div>

                        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300 border-t-4 border-[#82C701]">
                            <h2 className="flex items-center gap-2 text-xl font-semibold text-[#082E6F] mb-4">
                                <img src="/fast-forward.png" alt="forward arrow" className="h-6" />
                                System Installation
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                Every installation, regardless of the system size, big or small, is carried out by our certified and professional installers. Our solar system installation occurs in four separate stages:
                            </p>
                            <ul className="list-decimal pl-6 text-gray-600 mt-2 space-y-1">
                                <li>Fasten structure to the roof</li>
                                <li>Secure panels to the structure</li>
                                <li>Complete external wiring to connect panels to the inverter</li>
                                <li>Wire the inverter to the home's power supply</li>
                            </ul>
                        </div>

                        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300 border-t-4 border-[#82C701]">
                            <h2 className="flex items-center gap-2 text-xl font-semibold text-[#082E6F] mb-4">
                                <img src="/fast-forward.png" alt="forward arrow" className="h-6" />
                                After Sale Services
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                After we've set up your system, we don't just leave you hanging. Our installation services include a 2-year after-sales package. This covers online system monitoring and maintenance in case you encounter any issues. It's all part of our commitment to keeping you satisfied and making sure your solar system keeps performing well for the long haul.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ + Appointment Section */}
            <div className="flex flex-col md:flex-row gap-10 justify-center items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="w-full md:w-1/2">
                    <FAQ category="industrial" />
                </div>
                <div className="w-full md:w-1/2">
                    <Appointment />
                </div>
            </div>
        </div>
    )
}

export default page
