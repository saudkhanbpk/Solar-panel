'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { PhoneIcon, ChevronDownIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import path from 'path';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        {
            path: '/',
        },
        {
            name: 'About Us',
            path: '/about',
            // submenu: [
            //     { name: 'Company Profile', path: '/about/companyprofile' },
            //     { name: 'Our Team', path: '/about-us/team' },
            //     { name: 'Certifications', path: '/about-us/certifications' },
            // ],
        },
        {
            name: 'Solar Packages',
            path: '#',
            submenu: [
                { name: 'solar-hybrid', path: '/solar-packages/solar-hybrid' },
                { name: 'Solar on-Gride system', path: '/solar-packages/solar' },
                { name: 'solar Hybriad system with fox Ess', path: '/solar-packages/solar-foxEss' },
            ],
        },
        {
            name: 'Products',
            path: '#',
            submenu: [
                { name: 'Solar Panels', path: '/products/solar-panels' },
                { name: 'Solar Inverters', path: '/products/inverters' },
                { name: 'Solar Batteries', path: '/products/batteries' },
                { name: 'Solar Water Heater', path: '/products/heater' },
                { name: 'Solar Street Light', path: '/products/lights' },
                {name:'Solar Charge Controller',path:'/products/charge'},
                {name:'DC Home System',path:'/products/dc'},
                {name:'Solar Panel Price In Pakistan|Daliy Updates',path:'/products/price'} 
            ],
        },
        {
            name: 'Solar Solutions',
            path: '/solar-solutions',
            submenu: [
                { name: 'Residential Solutions', path: '/solar-solutions/residential' },
                { name: 'Commercial Solutions', path: '/solar-solutions/commercial' },
                { name: 'Industrial Solutions', path: '/solar-solutions/industrial' },
                { name: 'Solar Water Pumps', path: '/solar-solutions/water-pumps' },
                { name: 'Off-Grid Solutions', path: '/solar-solutions/off-grid' },
            ],
        },
        {
            name: 'Projects',
            path: '/projects',
        },
        {
            name: 'Blog',
            path: '/blog',
        },
        {
            name: 'Contact Us',
            path: '/contact',
        },
        {
            name:'Deshboard',
            path: '/admindeshboard',
        },
    ];

    return (
        <>
            {/* Top Contact Bar */}
            <div className="bg-#D7D6D6 text-#3F94DA text-sm py-4 px-4  border-t-3 border-t-green-500 border-b border-b-gray-100">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <a href="tel:+923001234567" className="flex items-center hover:text-green-200">
                            <PhoneIcon className="h-4 w-4 mr-1" />
                            +92 545584977 2
                        </a>
                        <a href="mailto:info@yoursolar.com" className="hover:text-green-200">
                            solarpanel.com
                        </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="hover:text-green-200"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                        </svg>
                        </a>
                        <a href="#" className="hover:text-green-200"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                        </svg>
                        </a>
                        <a href="#" className="hover:text-green-200"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                            <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
            <br className='bg-' />
            {/* Main Navigation */}
            <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'}`}>
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <img
                                src="/images/logo.png"
                                alt="Solar Company Logo"
                                className="h-12"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-1  border-b-gray-100">
                            {navItems.filter(item => item.name !== 'Deshboard')
                            .map((item) => (
                                <div key={item.name} className="relative group">
                                    <Link
                                        aria-disabled={item.path ?? "/solar-package"}
                                        href={item?.path}
                                        className={`flex items-center px-4 py-2 font-medium ${scrolled ? 'text-gray-800 hover:text-green-600' : 'text-gray-800 hover:text-green-600'} transition-colors`}
                                    >
                                        {item.name}
                                        {item.submenu && (
                                            <ChevronDownIcon className="h-4 w-4 ml-1" />
                                        )}
                                    </Link>

                                    {item.submenu && (
                                        <div className="absolute left-0 mt-0 w-56 origin-top-left scale-95 opacity-0 invisible group-hover:scale-100 group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                            <div className="mt-2 bg-white shadow-lg rounded-md p-2 border border-gray-100">
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.path}
                                                        className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded transition-colors"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 text-gray-700"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? (
                                <XMarkIcon className="h-6 w-6" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" />
                            )}
                        </button>

                        {/* Desktop CTA Button */}
                        {/* <div className="hidden lg:block">
              <Link
                href="/get-quote"
                className="ml-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Get Quote
              </Link>
            </div> */}
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden bg-white shadow-lg">
                        <div className="container mx-auto px-4 py-2">
                            {navItems.map((item) => (
                                <div key={item.name} className="border-b border-gray-100">
                                    {item.submenu ? (
                                        <details className="group">
                                            <summary className="flex items-center justify-between py-3 px-2 font-medium text-gray-800 cursor-pointer list-none">
                                                <span>{item.name}</span>
                                                <ChevronDownIcon className="h-4 w-4 ml-1 transform group-open:rotate-180 transition-transform" />
                                            </summary>
                                            <div className="pl-4 pb-2">
                                                {item.submenu.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.path}
                                                        className="block py-2 px-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded transition-colors"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </details>
                                    ) : (
                                        <Link
                                            href={item.path}
                                            className="block py-3 px-2 font-medium text-gray-800 hover:text-green-600 transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <div className="mt-4 pb-4">
                                <Link
                                    href="/get-quote"
                                    className="block w-full text-center bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Get Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}
