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
            <a
              href="https://www.linkedin.com/company/105144331/admin/dashboard/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-[#82c701] rounded-full flex items-center justify-center hover:bg-[#6daa01] transition-colors"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zm-11.3 20.5H3.5V9h4.2v11.5zM5.6 7.5C4.3 7.5 3.2 6.4 3.2 5s1.1-2.5 2.4-2.5 2.4 1.1 2.4 2.5S6.9 7.5 5.6 7.5zM20.5 20.5h-4.2v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6h-4.2V9h4v1.6h.1c.6-1.1 2-2.3 4-2.3 4.3 0 5.1 2.8 5.1 6.3v5.9z" />
              </svg>
            </a>
            {/* Social icons here */}
            <a href="#" className="w-8 h-8 bg-[#82c701] rounded-full flex items-center justify-center hover:bg-[#6daa01] transition-colors">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392..." /></svg>
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
