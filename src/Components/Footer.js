import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-[#DCE1EA] text-#DEE3EB pt-12 pb-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Column 1 */}
                    <div className="space-y-4">
                        <h1 className='text-lg font-semibold'>SOLAR COMAPNY LOGO</h1>
                        <div>
                            <p className='text-left'>
                                Alpha Solar, One of Pakistan’s pioneers in solar energy, offers cost-effective and top-notch solar solutions to residential, commercial and agricultural entities.
                            </p>
                        </div>

                    </div>

                    {/* Column 2 */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2" type='disc'>
                            <li><a href="#" className="hover:text-gray-300 transition">On-Gride</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition">Hybride</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition">Net Metering</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition">Solar Panels</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition">Solar Inverter</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contact Us</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-300 transition">Help Center</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition">Community</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition">Tutorials</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition">Status</a></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Follow Us</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-300 transition">Privacy</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition">Terms</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition">Cookie Policy</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition">GDPR</a></li>
                        </ul>
                    </div>

                    {/* Column 5 */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Services</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-300 transition">Documentation</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition">Guides</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition">Webinars</a></li>
                            <li><a href="#" className="hover:text-gray-300 transition">Case Studies</a></li>
                        </ul>
                    </div>

                    {/* Column 6 */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Subscribe</h3>
                        <p className="text-gray-300">Get the latest news and updates</p>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-center items-center">
                    
                    <p className="mt-4 md:mt-0 text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;