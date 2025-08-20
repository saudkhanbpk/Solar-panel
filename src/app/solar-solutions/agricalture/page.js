import React from "react";
import Calltoexpert from "../../../Components/Calltoexpert";
import FAQ from "../../../Components/FAQ";
import Appointment from "../../../Components/domasticcards/Appointment";

const page = () => {
    return (
        <div>
            <div className="flex justify-center text-center items-center bg-[url(/Cover-Agriculture.png)] bg-cover bg-center h-64" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="py-8">
                    <h1 className="text-center text-3xl font-bold text-gray-800 mb-8 border-l-[5px] border-r-[5px] border-gray-800">
                        AGRICULTURE SOLAR SOLUTIONS
                    </h1>
                    <p className="mb-4">
                        Agriculture requires consistent and affordable energy for irrigation,
                        tube wells, water pumping, dairy farms, poultry houses, and cold storage.
                        Rising fuel and electricity costs make solar energy the most sustainable
                        solution for farmers across Pakistan.
                    </p>
                    <p>
                        Our solar tubewell solutions are designed for rural and semi-urban
                        areas where grid access is limited. These durable and weather-resistant
                        systems help farmers irrigate their land efficiently and reduce
                        operational costs while ensuring uninterrupted water pumping.
                    </p>
                </div>

                <div className="mb-8" >
                    <Calltoexpert />
                </div>


                {/* Section 1 */}
                <div className="flex flex-col lg:flex-row justify-center items-start gap-8 mb-8 ">
                    <div className="w-full lg:w-1/2">
                        <img
                            src="/reliablesolar.png"
                            alt="Agriculture Solar "
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl font-bold mb-4">
                            A reliable and sustainable Solar Tube Well System
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                Dealing with water scarcity and the sky-high prices of diesel and petrol for pumping water from the earth makes it a real challenge for farmers to keep their lands well-irrigated. But here at Alpha Solar, we have a team of experts who specialize in setting up customized solar tube well solutions. Our solar tube well systems come with 2 years of after-sales services and a whopping 25-year panel warranty. We aim to make sure our farming community keeps their lands lush and fruitful without the headache of crazy expensive electricity bills.
                            </p>
                            <p>
                                With solar solutions, farmers can grow crops all year round,
                                increase production, and ensure long-term savings on energy
                                expenses while protecting the environment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Solar Energy for a Greener Agriculture Sector
                        </h2>
                        <div className="space-y-4 text-gray-700">
                            <p>
                                By adopting solar-powered systems, farmers reduce dependency on
                                fossil fuels and contribute to a greener, cleaner environment.
                            </p>
                            <p>
                                Our agriculture solar solutions are customized for various
                                farming needs—whether it’s tube wells, poultry, dairy, or
                                cold storage. With 24/7 monitoring and reliable after-sales
                                service, we ensure farmers get maximum performance from their
                                investment.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img
                            src="/agrisolar-pv.png"
                            alt="Solar Energy for Agriculture"
                            className="w-full h-auto"
                        />
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

                {/* FAQ + Appointment */}
                <div className="py-12">
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-start w-full">
                        <div className="w-full md:w-1/2">
                            <FAQ category="agriculture" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <Appointment />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
