'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiHome, FiUsers, FiBox, FiPieChart, FiSettings, FiLogIn, FiLogOut, FiUserPlus } from 'react-icons/fi'

export default function Sidebar({ isOpen, onClose, isLoggedIn }) {
  const pathname = usePathname()
  
  const navItems = [
    { href: '/dashboard', icon: <FiHome />, label: 'Dashboard' },
    { href: '/users', icon: <FiUsers />, label: 'Users' },
    { href: '/products', icon: <FiBox />, label: 'Products' },
    { href: '/analytics', icon: <FiPieChart />, label: 'Analytics' },
    { href: '/settings', icon: <FiSettings />, label: 'Settings' },
  ]

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 z-50 w-64 h-[calc(100vh-2rem)] my-4 ml-4 transition-transform bg-[#1e293b] text-white rounded-xl
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 shadow-xl`}
      >
        <div className="h-full flex flex-col">
          {/* Logo/Brand */}
          <div className="p-6 border-b border-gray-700 flex items-center justify-center">
            <h1 className="text-2xl font-bold text-center">
              <span className="text-blue-400">Alpha</span>Solar
            </h1>
          </div>
          
          {/* Navigation - Centered vertically */}
          <div className="flex-1 flex flex-col justify-center">
            <nav className="p-4 overflow-y-auto">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center p-3 rounded-lg transition-colors
                      ${pathname === item.href 
                        ? 'bg-blue-600 text-white' 
                        : 'hover:bg-gray-700'}`}
                    >
                      <span className="text-lg mr-3">{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          {/* Auth Buttons */}
          <div className="p-4 border-t border-gray-700">
            {isLoggedIn ? (
              <button className="flex items-center w-full p-3 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors">
                <FiLogOut className="mr-3" />
                <span className="font-medium">Logout</span>
              </button>
            ) : (
              <div className="space-y-2">
                <Link
                  href="/login"
                  className="flex items-center w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                >
                  <FiLogIn className="mr-3" />
                  <span className="font-medium">Login</span>
                </Link>
                <Link
                  href="/signup"
                  className="flex items-center w-full p-3 rounded-lg border border-blue-400 text-blue-400 hover:bg-blue-900/30 transition-colors"
                >
                  <FiUserPlus className="mr-3" />
                  <span className="font-medium">Sign Up</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  )
}