import React from "react";
import Calltoexpert from "../../../Components/Calltoexpert";
import FAQ from "../../../Components/FAQ";
import Appointment from "../../../Components/domasticcards/Appointment";

const page = () => {
    return (
        <div>
            {/* Hero */}
            <div className="flex justify-center text-center items-center bg-[url(/Cover-Gas-station.png)] bg-cover bg-center h-64" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Intro */}
                <div className="py-8">
                    <h1 className="text-center text-3xl font-bold text-[#082E6F] mb-8 border-l-[5px] border-r-[5px] border-[#82C701] inline-block px-6 py-2 rounded-lg shadow-md bg-white">
                        FILLING STATION SOLAR SOLUTIONS
                    </h1>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                        Filling stations run 24/7 and consume massive amounts of electricity 
                        for lighting, fuel dispensers, cooling systems, and security. 
                        With rising energy prices, solar energy offers an ideal solution 
                        to cut costs while keeping operations smooth and reliable.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Our filling station solar systems ensure continuous power supply, 
                        reduce dependency on the grid, and help station owners save 
                        significantly on monthly bills. Built with durability and efficiency 
                        in mind, they provide long-term financial benefits and 
                        enhance sustainability.
                    </p>
                </div>

                {/* Call To Expert */}
                <div className="mb-8">
                    <Calltoexpert />
                </div>

                {/* Section 1 */}
                <div className="flex flex-col lg:flex-row justify-center items-start gap-8 mb-12">
                    <div className="w-full lg:w-1/2">
                        <img
                            src="/fillingenergy.png"
                            alt="Filling Station Solar"
                            className="w-full h-auto rounded-xl shadow-lg"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl font-bold text-[#082E6F] mb-4">
                            Reliable and Cost-Effective Solar Power for Stations
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Filling stations often face the challenge of high 
                                operational costs due to constant electricity usage. 
                                Switching to solar not only lowers these costs but 
                                also guarantees reliable energy without interruptions.
                            </p>
                            <p>
                                At <span className="text-[#82C701] font-semibold">GO GREEN POWER WITH SUN SOLAR</span>, we design customized solutions for 
                                filling stations that come with <span className="text-[#082E6F] font-medium">2 years of after-sales service</span> 
                                and a <span className="text-[#082E6F] font-medium">25-year warranty</span> on solar panels. 
                                This ensures long-term savings while maintaining 
                                uninterrupted operations.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#082E6F] mb-6">
                            Power Your Filling Station with Clean, Affordable Energy
                        </h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                By going solar, filling stations cut electricity costs, 
                                ensure 24/7 lighting and fuel dispensing, and contribute 
                                to a greener environment at the same time.
                            </p>
                            <p>
                                Our solar solutions are built to handle the 
                                round-the-clock demand of filling stations. 
                                With monitoring systems and professional support, 
                                we make sure your investment keeps delivering 
                                results for decades.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img
                            src="/savemoney-solar.png"
                            alt="Solar Energy for Filling Stations"
                            className="w-full h-auto rounded-xl shadow-lg"
                        />
                    </div>
                </div>

                {/* Workflow */}
                <div>
                    <h1 className="text-center text-3xl font-bold text-[#082E6F] mb-10 border-l-[5px] border-r-[5px] border-[#82C701] inline-block px-6 py-2 bg-white rounded-lg shadow-md">
                        OUR PROJECT WORKFLOW PROCESS
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300 border-t-4 border-[#82C701]">
                            <h2 className="flex items-center gap-2 text-xl font-semibold text-[#082E6F] mb-4">
                                <img src="/fast-forward.png" alt="forward arrow" className="h-6 ml-2" />
                                Site Assessment and Designing
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                Our workflow starts with a face-to-face consultation and site assessment to evaluate feasibility, followed by a CAD drawing tailored to your location and conditions. Design approval by you kicks off installation.
                            </p>
                        </div>

                        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300 border-t-4 border-[#082E6F]">
                            <h2 className="flex items-center gap-2 text-xl font-semibold text-[#082E6F] mb-4">
                                <img src="/fast-forward.png" alt="forward arrow" className="h-6 ml-2" />
                                System Installation
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                Installations are carried out by certified professionals in four stages:
                            </p>
                            <ul className="list-decimal pl-5 text-gray-700 leading-relaxed text-sm md:text-base">
                                <li>Fasten structure to the roof</li>
                                <li>Secure panels to the structure</li>
                                <li>Complete external wiring to inverter</li>
                                <li>Connect inverter to facility's power supply</li>
                            </ul>
                        </div>

                        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300 border-t-4 border-[#82C701]">
                            <h2 className="flex items-center gap-2 text-xl font-semibold text-[#082E6F] mb-4">
                                <img src="/fast-forward.png" alt="forward arrow" className="h-6 ml-2" />
                                After Sale Services
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                Post-installation, our 2-year after-sales package includes online system monitoring and maintenance to keep your system performing reliably over time.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FAQ + Appointment */}
                <div className="py-12">
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-start w-full">
                        <div className="w-full md:w-1/2">
                            <FAQ category="fillingstation" />
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
