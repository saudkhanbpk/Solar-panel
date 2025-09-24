'use client';
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#DCE1EA] dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-start">
              <img
                src="/companylogo.png"
                alt="Solar Company Logo"
                className="h-16 w-auto object-contain"
              />
            </div>

            <div className="space-y-3">
              <h2 className="text-[#82c701] font-bold text-lg">GO GREEN</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm max-w-sm">
                One of Pakistan's trusted in solar energy, offering cost-effective and top-notch
                solar solutions to residential, commercial and agricultural entities.
              </p>
            </div>

            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>+92 332 233 2249</p>
              <p>Pakistan</p>
            </div>
          </div>

          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white border-b-2 border-[#82c701] pb-1 inline-block">
              About Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about#mission" className="hover:text-[#82c701]">Mission</Link></li>
              <li><Link href="/about#vision" className="hover:text-[#82c701]">Vision</Link></li>
              <li><Link href="/about#team" className="hover:text-[#82c701]">Team</Link></li>
              <li><Link href="/about#our-goals" className="hover:text-[#82c701]">Our Goals</Link></li>
              <li><Link href="/about#Core-value" className="hover:text-[#82c701]">Core Values</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white border-b-2 border-[#82c701] pb-1 inline-block">
              Products
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products/solar-panels" className="hover:text-[#82c701]">Solar Panels</Link></li>
              <li><Link href="/products/inverters" className="hover:text-[#82c701]">Solar Inverters</Link></li>
              <li><Link href="/products/batteries" className="hover:text-[#82c701]">Solar Batteries</Link></li>
              <li><Link href="/products/solar-hybrid" className="hover:text-[#82c701]">Solar Hybrid</Link></li>
              <li><Link href="/products/solar-ongrid" className="hover:text-[#82c701]">On-Grid System</Link></li>
              <li><Link href="/products/solar-offgrid" className="hover:text-[#82c701]">Off-Grid System</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white border-b-2 border-[#82c701] pb-1 inline-block">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#epc" className="hover:text-[#82c701]">EPC</Link></li>
              <li><Link href="/services#solar-consultancy" className="hover:text-[#82c701]">Solar Consultancy / Audits</Link></li>
              <li><Link href="/services#solar-maintenance" className="hover:text-[#82c701]">Solar Maintenance</Link></li>
              <li><Link href="/services#solar-wheeling" className="hover:text-[#82c701]">Solar Wheeling Services</Link></li>
              <li><Link href="/services/net-metering" className="hover:text-[#82c701]">Net Metering</Link></li>
            </ul>
          </div>

          {/* Projects / Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white border-b-2 border-[#82c701] pb-1 inline-block">
              Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/projects" className="hover:text-[#82c701]">Projects</Link></li>
              <li><Link href="/contact-us" className="hover:text-[#82c701]">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} <span className="font-medium text-[#82c701]">GO GREEN</span>. All rights reserved.
          </p>

          <div className="flex space-x-3">
            {/* Social icons here */}
            <a href="#" className="w-8 h-8 bg-[#82c701] rounded-full flex items-center justify-center hover:bg-[#6daa01] transition-colors">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392..."/></svg>
            </a>
            {/* Add other icons */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
