import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#DCE1EA] dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12 px-6 sm:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Column 1 - Company Info (spans 2 columns on large screens) */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-start">
                            <img 
                                src="/companylogo.png" 
                                alt="GO GREEN Solar Company Logo" 
                                className='h-16 w-auto object-contain'
                            />
                        </div>
                        
                        <div className="space-y-3">
                            <h2 className='text-[#82c701] font-bold text-lg'>GO GREEN</h2>
                            <p className='text-gray-600 dark:text-gray-400 leading-relaxed text-sm max-w-sm'>
                                One of Pakistan's pioneers in solar energy, offering cost-effective and top-notch solar solutions to residential, commercial and agricultural entities.
                            </p>
                        </div>
                        
                        {/* Contact Info */}
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
                                <svg className="w-4 h-4 text-[#82c701] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+92 332 233 2249</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
                                <svg className="w-4 h-4 text-[#82c701] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Pakistan</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white border-b-2 border-[#82c701] pb-1 inline-block">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#82c701] transition-colors duration-200 flex items-center group">
                                <span className="w-1 h-1 bg-[#82c701] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                About Us
                            </Link></li>
                            <li><Link href="/solar-packages/solar-hybrid" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#82c701] transition-colors duration-200 flex items-center group">
                                <span className="w-1 h-1 bg-[#82c701] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                Solar Hybrid
                            </Link></li>
                            <li><Link href="/solar-packages/solar-ongrid" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#82c701] transition-colors duration-200 flex items-center group">
                                <span className="w-1 h-1 bg-[#82c701] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                On-Grid System
                            </Link></li>
                            <li><Link href="/solar-packages/solar-offgrid" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#82c701] transition-colors duration-200 flex items-center group">
                                <span className="w-1 h-1 bg-[#82c701] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                Off-Grid System
                            </Link></li>
                            <li><Link href="/services/net-metering" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#82c701] transition-colors duration-200 flex items-center group">
                                <span className="w-1 h-1 bg-[#82c701] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                Net Metering
                            </Link></li>
                            <li><Link href="/products/solar-panels" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#82c701] transition-colors duration-200 flex items-center group">
                                <span className="w-1 h-1 bg-[#82c701] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                Solar Panels
                            </Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white border-b-2 border-[#82c701] pb-1 inline-block">Products</h3>
                        <ul className="space-y-2">
                            <li><Link href="/products/inverters" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#82c701] transition-colors duration-200 flex items-center group">
                                <span className="w-1 h-1 bg-[#82c701] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                Solar Inverters
                            </Link></li>
                            <li><Link href="/products/batteries" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#82c701] transition-colors duration-200 flex items-center group">
                                <span className="w-1 h-1 bg-[#82c701] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                Solar Batteries
                            </Link></li>
                            <li><Link href="/solar-solutions/domestic/3kwsolar-system" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#82c701] transition-colors duration-200 flex items-center group">
                                <span className="w-1 h-1 bg-[#82c701] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                3kW System
                            </Link></li>
                            <li><Link href="/solar-solutions/domestic/5kwsolar-system" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#82c701] transition-colors duration-200 flex items-center group">
                                <span className="w-1 h-1 bg-[#82c701] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                5kW System
                            </Link></li>
                            <li><Link href="/solar-solutions/domestic/10kwsolar-system" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#82c701] transition-colors duration-200 flex items-center group">
                                <span className="w-1 h-1 bg-[#82c701] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                10kW System
                            </Link></li>
                            <li><Link href="/projects" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#82c701] transition-colors duration-200 flex items-center group">
                                <span className="w-1 h-1 bg-[#82c701] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                Our Projects
                            </Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white border-b-2 border-[#82c701] pb-1 inline-block">Services</h3>
                        <ul className="space-y-2">
                            <li><Link href="/services#epc" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#82c701] transition-colors duration-200 flex items-center group">
                                <span className="w-1 h-1 bg-[#82c701] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                EPC Services
                            </Link></li>
                            <li><Link href="/services#solar-consultancy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#82c701] transition-colors duration-200 flex items-center group">
                                <span className="w-1 h-1 bg-[#82c701] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                Solar Consultancy
                            </Link></li>
                            <li><Link href="/services#solar-maintenance" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#82c701] transition-colors duration-200 flex items-center group">
                                <span className="w-1 h-1 bg-[#82c701] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                Solar Maintenance
                            </Link></li>
                            <li><Link href="/services#solar-cleaning" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#82c701] transition-colors duration-200 flex items-center group">
                                <span className="w-1 h-1 bg-[#82c701] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                System Cleaning
                            </Link></li>
                            <li><Link href="/solar-solutions/why-solar-solution" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#82c701] transition-colors duration-200 flex items-center group">
                                <span className="w-1 h-1 bg-[#82c701] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                Why Solar Energy?
                            </Link></li>
                            <li><Link href="/admin" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#82c701] transition-colors duration-200 flex items-center group">
                                <span className="w-1 h-1 bg-[#82c701] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                                Admin Dashboard
                            </Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
                        <p className="text-gray-500 dark:text-gray-400 text-sm text-center sm:text-left">
                            &copy; {new Date().getFullYear()} <span className="font-medium text-[#82c701]">GO GREEN</span>. All rights reserved.
                        </p>
                        
                        {/* Social Media Icons */}
                        <div className="flex space-x-3">
                            <a href="#" className="w-8 h-8 bg-[#82c701] rounded-full flex items-center justify-center hover:bg-[#6daa01] transition-colors duration-200 group">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a href="#" className="w-8 h-8 bg-[#82c701] rounded-full flex items-center justify-center hover:bg-[#6daa01] transition-colors duration-200 group">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a href="#" className="w-8 h-8 bg-[#82c701] rounded-full flex items-center justify-center hover:bg-[#6daa01] transition-colors duration-200 group">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.119.112.225.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;