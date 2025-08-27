// Dashboard.jsx
'use client';
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import SolarSystemForm from '../../Components/admin/pakagesform'


const Page = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const router = useRouter();

  // Check screen size on mount and resize
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }


    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [router]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/login";
    localStorage.removeItem("token");

  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Mobile Header */}
      <header className="bg-green-800 text-white p-4 flex justify-between items-center md:hidden">
        <h1 className="text-xl font-bold text-[#82c701]">GO GREEN</h1>
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none"
        >
          {isSidebarOpen ? (
            <i className="fas fa-times text-xl"></i>

          ) : (
            <i className="fas fa-bars text-xl"> <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg></i>
          )}
        </button>
      </header>

      {/* Sidebar */}
      <div
        className={`${isSidebarOpen ? 'block' : 'hidden'} md:block fixed md:relative inset-0 z-50 md:z-auto w-64 bg-[#6AAF02] text-white md:translate-x-0 transition-transform duration-300 ease-in-out`}
        style={{ height: isMobile ? '100vh' : 'auto' }}
      >
        <div className="p-4 border-b border-green-700 hidden md:block">
          <h1 className="text-xl font-bold text-green-700 ">GO GREEN </h1>
          <p className=" text-sm">Dashboard</p>
        </div>
        <nav className="p-4">
          <ul>
            <li className="mb-2">
              <button
                onClick={() => handleTabChange('dashboard')}
                className={`w-full text-left p-2 rounded ${activeTab === 'dashboard' ? 'bg-[#4D8F00]' : 'hover:bg-green-700'}`}
              >
                <i className="fas fa-tachometer-alt mr-2"></i> Dashboard
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => handleTabChange('packages')}
                className={`w-full text-left p-2 rounded ${activeTab === 'packages' ? 'bg-[#4D8F00]' : 'hover:bg-green-700'}`}
              >
                <i className="fas fa-box mr-2"></i> Packages
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => handleTabChange('orders')}
                className={`w-full text-left p-2 rounded ${activeTab === 'orders' ? 'bg-[#4D8F00]' : 'hover:bg-green-700'}`}
              >
                <i className="fas fa-shopping-cart mr-2"></i> Orders
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => handleTabChange('customers')}
                className={`w-full text-left p-2 rounded ${activeTab === 'customers' ? 'bg-[#4D8F00]' : 'hover:bg-green-700'}`}
              >
                <i className="fas fa-users mr-2"></i> Customers
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold capitalize">{activeTab}</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleTabChange('packages')}
              className="bg-green-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-green-700 text-sm md:text-base"
            >
              <i className="fas fa-plus mr-2"></i> Add New
            </button>

            <div className="relative">
              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center focus:outline-none"
                >
                  <img
                    src="https://ui-avatars.com/api/?name=Admin&background=6AAF02&color=fff"
                    alt="Profile"
                    className="w-10 h-10 rounded-full border-2 border-green-600"
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                    <button  onClick={() => router.push("/profile")} className='block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-500'>
                    Your Profile</button>
                    <button
                      onClick={() => router.push("/change-password")}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-500"
                    >
                      Change Password
                    </button>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-500"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 md:p-6">
          {activeTab === 'dashboard' && (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm md:text-base">Total Revenue</p>
                      <p className="text-xl md:text-2xl font-bold">$24,563</p>
                    </div>
                    <div className="bg-green-100 p-2 md:p-3 rounded-full">
                      <i className="fas fa-dollar-sign text-green-600 text-sm md:text-base"></i>
                    </div>
                  </div>
                  <p className="text-green-600 mt-2 text-xs md:text-sm"><i className="fas fa-arrow-up"></i> 12.5% since last month</p>
                </div>

                <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm md:text-base">Orders</p>
                      <p className="text-xl md:text-2xl font-bold">1,258</p>
                    </div>
                    <div className="bg-blue-100 p-2 md:p-3 rounded-full">
                      <i className="fas fa-shopping-cart text-blue-600 text-sm md:text-base"></i>
                    </div>
                  </div>
                  <p className="text-green-600 mt-2 text-xs md:text-sm"><i className="fas fa-arrow-up"></i> 8.2% since last month</p>
                </div>

                <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm md:text-base">Products</p>
                      <p className="text-xl md:text-2xl font-bold">56</p>
                    </div>
                    <div className="bg-yellow-100 p-2 md:p-3 rounded-full">
                      <i className="fas fa-solar-panel text-yellow-600 text-sm md:text-base"></i>
                    </div>
                  </div>
                  <p className="text-green-600 mt-2 text-xs md:text-sm"><i className="fas fa-arrow-up"></i> 3.1% since last month</p>
                </div>

                <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm md:text-base">Customers</p>
                      <p className="text-xl md:text-2xl font-bold">895</p>
                    </div>
                    <div className="bg-purple-100 p-2 md:p-3 rounded-full">
                      <i className="fas fa-users text-purple-600 text-sm md:text-base"></i>
                    </div>
                  </div>
                  <p className="text-green-600 mt-2 text-xs md:text-sm"><i className="fas fa-arrow-up"></i> 5.7% since last month</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="text-left text-gray-500">
                          <th className="pb-2 text-sm md:text-base">Order ID</th>
                          <th className="pb-2 text-sm md:text-base">Customer</th>
                          <th className="pb-2 text-sm md:text-base">Amount</th>
                          <th className="pb-2 text-sm md:text-base">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 text-sm md:text-base">#ORD-7562</td>
                          <td className="py-3 text-sm md:text-base">John Smith</td>
                          <td className="py-3 text-sm md:text-base">$3,500.00</td>
                          <td className="py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Delivered</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 text-sm md:text-base">#ORD-7561</td>
                          <td className="py-3 text-sm md:text-base">Emma Johnson</td>
                          <td className="py-3 text-sm md:text-base">$7,200.00</td>
                          <td className="py-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Processing</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 text-sm md:text-base">#ORD-7560</td>
                          <td className="py-3 text-sm md:text-base">Michael Brown</td>
                          <td className="py-3 text-sm md:text-base">$2,800.00</td>
                          <td className="py-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Shipped</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4">Top Selling Products</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded flex items-center justify-center mr-3">
                          <i className="fas fa-solar-panel text-green-600 text-sm md:text-base"></i>
                        </div>
                        <div>
                          <p className="font-medium text-sm md:text-base">Solar Panel 400W</p>
                          <p className="text-gray-500 text-xs md:text-sm">Panels</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm md:text-base">$12,540</p>
                        <p className="text-green-600 text-xs md:text-sm">+15.3%</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded flex items-center justify-center mr-3">
                          <i className="fas fa-battery-full text-blue-600 text-sm md:text-base"></i>
                        </div>
                        <div>
                          <p className="font-medium text-sm md:text-base">Lithium Battery 5kWh</p>
                          <p className="text-gray-500 text-xs md:text-sm">Batteries</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm md:text-base">$8,640</p>
                        <p className="text-green-600 text-xs md:text-sm">+9.2%</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-100 rounded flex items-center justify-center mr-3">
                          <i className="fas fa-bolt text-yellow-600 text-sm md:text-base"></i>
                        </div>
                        <div>
                          <p className="font-medium text-sm md:text-base">Hybrid Inverter 5kW</p>
                          <p className="text-gray-500 text-xs md:text-sm">Inverters</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm md:text-base">$7,200</p>
                        <p className="text-green-600 text-xs md:text-sm">+7.8%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'packages' && (
            <div>
              <SolarSystemForm />
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="bg-white p-4 md:p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Order Management</h3>
              <p className="text-gray-500">Order management functionality will be implemented here.</p>
            </div>
          )}

          {activeTab === 'customers' && (
            <div className="bg-white p-4 md:p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Customer Management</h3>
              <p className="text-gray-500">Customer management functionality will be implemented here.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Page;