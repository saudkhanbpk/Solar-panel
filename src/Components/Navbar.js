'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { PhoneIcon, ChevronDownIcon, XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';
import path from 'path';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '', path: '/' },
    { name: 'About Us', path: '/about',
      submenu:[
        {name:'Mission', path:'/about#mission'},
        {name:'Vision', path:'/about#vision'},
        {name:'Team', path:'/about#team'},
      ]
     },
   
    {
      name: 'Products',
      path: '#',
      submenu: [
        { name: 'Solar Panels', path: '/products/solar-panels' },
        { name: 'Solar Inverters', path: '/products/inverters' },
        { name: 'Solar Batteries', path: '/products/batteries' },
        { name: 'Solar Hybrid', path: '/products/solar-hybrid' },
        { name: 'Solar On-Grid System', path: '/products/solar-ongrid' },
        { name: 'Solar OFF-Grid System', path: '/products/solar-offgrid' },
      ],
    },
    // {
    //   name: 'Solar Solutions',
    //   path: '#',
    //   submenu: [
    //     { name: 'Why Solar Energy?', path: '/solar-solutions/why-solar-solution' },
    //     {
    //       name: 'Domestic',
    //       path: '#',
    //       submenu: [
    //         { name: '3kW Solar System', path: '/solar-solutions/domestic/3kwsolar-system' },
    //         { name: '5kW Solar System', path: '/solar-solutions/domestic/5kwsolar-system' },
    //         { name: '10kW Solar System', path: '/solar-solutions/domestic/10kwsolar-system' },
    //       ],
    //     },
    //     { name: 'Industrial ', path: '/solar-solutions/industrial' },
    //     { name: 'Commercial ', path: '/solar-solutions/commercial' },
    //     { name: 'Agricalture', path: '/solar-solutions/agricalture' },
        
    //   ],
    // },
    {name:'Services',
      path:'/services',
      submenu: [
         { name: 'EPC', path: '/services#epc' },
        { name: 'Solar Consultancy', path: '/services#solar-consultancy' },  
        { name: 'Solar Maintenance', path: '/services#solar-maintenance' },
        { name: 'Solar Wheeling Services', path: '/services#solar-wheeling' },
        { name: 'Net Metering', path: '/services/net-metering' },
        
      ],
    },
    { name: 'Projects', path: '/projects' },
    {
      name:'Contact Us', path:'/contact-us'},
  ];

  return (
    <>
    
      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img src="/companylogo.png" alt="Solar Company Logo" className="h-48 bg-none" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.filter(item => item.name !== 'Deshboard').map(item => (
                <div key={item.name} className="relative group">
                  <Link href={item.path} className={`flex items-center px-4 py-2 font-medium ${scrolled ? 'text-gray-800 hover:text-green-600' : 'text-gray-800 hover:text-green-600'} transition-colors`}>
                    {item.name}
                    {item.submenu && <ChevronDownIcon className="h-4 w-4 ml-1" />}
                  </Link>

                  {/* First level submenu */}
                  {item.submenu && (
                    <div className="absolute left-0 mt-0 w-56 origin-top-left scale-95 opacity-0 invisible group-hover:scale-100 group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="mt-2 bg-white shadow-lg rounded-md p-2 border border-gray-100">
                        {item.submenu.map(subItem => (
                          <div key={subItem.name} className="relative group/sub">
                            <Link href={subItem.path} className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded transition-colors">
                              {subItem.name}
                              {subItem.submenu && <ChevronDownIcon className="h-4 w-4 ml-1 inline-block" />}
                            </Link>

                            {/* Second level submenu (like Domestic → 3kW) */}
                            {subItem.submenu && (
                              <div className="absolute left-full top-0 mt-0 w-56 origin-top-left scale-95 opacity-0 invisible group-hover/sub:scale-100 group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                                <div className="bg-white shadow-lg rounded-md p-2 border border-gray-100">
                                  {subItem.submenu.map(thirdItem => (
                                    <Link key={thirdItem.name} href={thirdItem.path} className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded transition-colors">
                                      {thirdItem.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-gray-700" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white shadow-lg">
            <div className="container mx-auto px-4 py-2">
              {navItems.map(item => (
                <div key={item.name} className="border-b border-gray-100">
                  {item.submenu ? (
                    <details className="group">
                      <summary className="flex items-center justify-between py-3 px-2 font-medium text-gray-800 cursor-pointer list-none">
                        {item.name}
                        <ChevronDownIcon className="h-4 w-4 ml-1 transform group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="pl-4 pb-2">
                        {item.submenu.map(subItem => (
                          subItem.submenu ? (
                            <details className="group">
                              <summary className="flex items-center justify-between py-2 px-2 text-gray-600 cursor-pointer list-none">
                                {subItem.name}
                                <ChevronDownIcon className="h-4 w-4 ml-1 transform group-open:rotate-180 transition-transform" />
                              </summary>
                              <div className="pl-4 pb-2">
                                {subItem.submenu.map(thirdItem => (
                                  <Link key={thirdItem.name} href={thirdItem.path} className="block py-2 px-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded transition-colors" onClick={() => setIsOpen(false)}>
                                    {thirdItem.name}
                                  </Link>
                                ))}
                              </div>
                            </details>
                          ) : (
                            <Link key={subItem.name} href={subItem.path} className="block py-2 px-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded transition-colors" onClick={() => setIsOpen(false)}>
                              {subItem.name}
                            </Link>
                          )
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link href={item.path} className="block py-3 px-2 font-medium text-gray-800 hover:text-green-600 transition-colors" onClick={() => setIsOpen(false)}>
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}