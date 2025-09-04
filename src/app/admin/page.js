// Dashboard.jsx
'use client';
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import SolarSystemForm from '../../Components/admin/pakagesform'
import { Trash2 } from "lucide-react";
import { calculateOrdersGrowth } from "../../Components/calculatordergrowth";
import AdminFaqs from "../../Components/admin/insertfaq"


const Page = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ordersError, setOrdersError] = useState("");
  const [save, setsave] = useState("");
  const router = useRouter();

  const { percent, current, last } = calculateOrdersGrowth(quotes);
  // Check screen size on mount and resize
  useEffect(() => {

    fetchQuotes();

    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    setsave(email);
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

  const fetchQuotes = async () => {
    setLoading(true);
    setOrdersError("");
    try {
      const res = await fetch("/api/quote");
      const data = await res.json();
      if (data.success) {
        setQuotes(data.data);
      } else {
        setOrdersError(data.error || "Failed to fetch orders");
      }
    } catch (error) {
      console.error("Error fetching quotes:", error);
      setOrdersError("Something went wrong while fetching orders.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    // if (!confirm("Are you sure you want to delete this order?")) return;

    try {
      const res = await fetch(`/api/quote/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.success) {
        // ✅ remove from local state without refresh
        setQuotes((prev) => prev.filter((q) => q._id !== id));
      } else {
        alert(data.error || "Failed to delete order");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Something went wrong while deleting the order.");
    }
  };

  const updateOrderStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/quote/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Status updated successfully ✅");
        setQuotes((prev) =>
          prev.map((q) => (q._id === id ? { ...q, status: newStatus } : q))
        );
      } else {
        alert("Failed to update status ❌");
      }
    } catch (error) {
      console.error("Frontend update error:", error);
      alert("Something went wrong");
    }
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
        className={`${isSidebarOpen ? 'block' : 'hidden'} md:block fixed md:relative inset-0 z-50 md:z-auto w-64 bg-gradient-to-br from-[#82c701] via-[#6AAF02] to-[#4d8f00] text-white md:translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto shadow-2xl`}
        style={{ height: isMobile ? '100vh' : 'auto' }}
      >
        <div className="p-6 border-b border-white/20 hidden md:block backdrop-blur-sm bg-white/5">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-[#82c701]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white drop-shadow-sm">GO GREEN</h1>
              <p className="text-green-100 text-sm">Dashboard</p>
            </div>
          </div>
        </div>

        <nav className="p-6">
          <ul className="space-y-3">
            <li>
              <button
                onClick={() => handleTabChange('dashboard')}
                className={`w-full text-left p-4 rounded-xl font-medium transition-all duration-200 flex items-center space-x-3 group relative overflow-hidden ${activeTab === 'dashboard'
                  ? 'bg-white text-[#82c701] shadow-lg transform scale-105'
                  : 'hover:bg-white/10 hover:translate-x-2 hover:shadow-md'
                  }`}
              >
                <div className={`p-2 rounded-lg transition-colors ${activeTab === 'dashboard' ? 'bg-[#82c701]/10' : 'group-hover:bg-white/10'
                  }`}>
                  <i className="fas fa-tachometer-alt text-lg"></i>
                </div>
                <span>Dashboard</span>
                {activeTab === 'dashboard' && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#82c701] rounded-r-full"></div>
                )}
              </button>
            </li>

            <li>
              <button
                onClick={() => handleTabChange('packages')}
                className={`w-full text-left p-4 rounded-xl font-medium transition-all duration-200 flex items-center space-x-3 group relative overflow-hidden ${activeTab === 'packages'
                  ? 'bg-white text-[#82c701] shadow-lg transform scale-105'
                  : 'hover:bg-white/10 hover:translate-x-2 hover:shadow-md'
                  }`}
              >
                <div className={`p-2 rounded-lg transition-colors ${activeTab === 'packages' ? 'bg-[#82c701]/10' : 'group-hover:bg-white/10'
                  }`}>
                  <i className="fas fa-box text-lg"></i>
                </div>
                <span>Packages</span>
                <span className={`ml-auto px-2 py-1 text-xs rounded-full font-semibold ${activeTab === 'packages'
                  ? 'bg-[#82c701] text-white'
                  : 'bg-white/20 text-white'
                  }`}>
                  New
                </span>
                {activeTab === 'packages' && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#82c701] rounded-r-full"></div>
                )}
              </button>
            </li>

            <li>
              <button
                onClick={() => handleTabChange('orders')}
                className={`w-full text-left p-4 rounded-xl font-medium transition-all duration-200 flex items-center space-x-3 group relative overflow-hidden ${activeTab === 'orders'
                  ? 'bg-white text-[#82c701] shadow-lg transform scale-105'
                  : 'hover:bg-white/10 hover:translate-x-2 hover:shadow-md'
                  }`}
              >
                <div className={`p-2 rounded-lg transition-colors ${activeTab === 'orders' ? 'bg-[#82c701]/10' : 'group-hover:bg-white/10'
                  }`}>
                  <i className="fas fa-shopping-cart text-lg"></i>
                </div>
                <span>Orders</span>
                {activeTab === 'orders' && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#82c701] rounded-r-full"></div>
                )}
              </button>
            </li>

            <li>
              <button
                onClick={() => handleTabChange('FAQ')}
                className={`w-full text-left p-4 rounded-xl font-medium transition-all duration-200 flex items-center space-x-3 group relative overflow-hidden ${activeTab === 'FAQ'
                  ? 'bg-white text-[#82c701] shadow-lg transform scale-105'
                  : 'hover:bg-white/10 hover:translate-x-2 hover:shadow-md'
                  }`}
              >
                <div className={`p-2 rounded-lg transition-colors ${activeTab === 'FAQ' ? 'bg-[#82c701]/10' : 'group-hover:bg-white/10'
                  }`}>
                  <i className="fas fa-users text-lg"></i>
                </div>
                <span>FAQS</span>
                {activeTab === 'FAQ' && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#82c701] rounded-r-full"></div>
                )}
              </button>
            </li>
          </ul>
        </nav>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-6 w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-6 w-12 h-12 bg-white/5 rounded-full blur-lg"></div>

        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#4d8f00]/20 to-transparent pointer-events-none"></div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">

        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold capitalize">{activeTab}</h2>
          <div className="flex items-center space-x-4">
            {/* <button
              onClick={() => handleTabChange('packages')}
              className="bg-green-600 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg hover:bg-green-700 text-sm md:text-base"
            >
              <i className="fas fa-plus mr-2"></i> Add New
            </button> */}

            <div className="relative">
              {/* Profile Button */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 "
              >
                {/* User Avatar */}
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  AA
                </div>
                <svg
                  className={`w-4 h-4 text-white transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  {/* User Info Section */}
                  <div className="px-4 py-3 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900"></p>
                        <p className="text-sm text-gray-600">{save}</p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2">
                    <button
                      onClick={() => {
                        router.push("/change-password");
                        setIsDropdownOpen(false);
                      }}
                      className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m0 0a2 2 0 01-2 2m2-2h3m-3 0h-3m-3-2a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V9a2 2 0 00-2-2H9z" />
                      </svg>
                      Change Password
                    </button>

                    <button
                      onClick={() => {
                        handleLogout();
                        setIsDropdownOpen(false);
                      }}
                      className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-4 h-4 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
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
                  <p className="text-green-600 mt-2 text-xs md:text-sm"><i className="fas fa-arrow-up"></i>{percent}% since last month</p>
                </div>

                <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm md:text-base">Orders</p>
                      <p className="text-xl md:text-2xl font-bold">{quotes.length}</p>
                    </div>
                    <div className="bg-blue-100 p-2 md:p-3 rounded-full">
                      <i className="fas fa-shopping-cart text-blue-600 text-sm md:text-base"></i>
                    </div>
                  </div>
                  <p className="text-green-600 mt-2 text-xs md:text-sm"><i className="fas fa-arrow-up"></i>{percent}% since last month</p>
                </div>

                <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm md:text-base">Products</p>
                      <p className="text-xl md:text-2xl font-bold">{quotes.length}</p>
                    </div>
                    <div className="bg-yellow-100 p-2 md:p-3 rounded-full">
                      <i className="fas fa-solar-panel text-yellow-600 text-sm md:text-base"></i>
                    </div>
                  </div>
                  <p className="text-green-600 mt-2 text-xs md:text-sm"><i className="fas fa-arrow-up"></i>{percent}% since last month</p>
                </div>

                <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500 text-sm md:text-base">Customers</p>
                      <p className="text-xl md:text-2xl font-bold">{quotes.length}</p>
                    </div>
                    <div className="bg-purple-100 p-2 md:p-3 rounded-full">
                      <i className="fas fa-users text-purple-600 text-sm md:text-base"></i>
                    </div>
                  </div>
                  <p className="text-green-600 mt-2 text-xs md:text-sm"><i className="fas fa-arrow-up"></i>{percent}% since last month</p>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs sm:text-sm md:text-base">
                    <thead>
                      <tr className="text-left text-gray-500">
                        <th className="pb-2 px-2 sm:px-4">Order ID</th>
                        <th className="pb-2 px-2 sm:px-4">Customer</th>
                        <th className="pb-2 px-2 sm:px-4">Email</th>
                        <th className="pb-2 px-2 sm:px-4">Date</th>
                        <th className="pb-2 px-2 sm:px-4">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quotes
                        .slice()
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                        .slice(0, 5)
                        .map((order, idx) => (
                          <tr key={order._id || idx} className="border-b">
                            <td className="py-3 px-2 sm:px-4">#{order._id.slice(-6)}</td>
                            <td className="py-3 px-2 sm:px-4">{order.name}</td>
                            <td className="py-3 px-2 sm:px-4">{order.email || "-"}</td>
                            <td className="py-3 px-2 sm:px-4">
                              {new Date(order.createdAt).toLocaleDateString()}
                            </td>
                            <td className="py-3 px-2 sm:px-4">
                              <select
                                value={order.status}
                                onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                                className="border rounded px-2 py-1 text-xs sm:text-sm"
                              >
                                <option value="Processing">Processing</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Delivered">Delivered</option>
                              </select>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

              </div>

            </div>
          )}

          {activeTab === 'packages' && (
            <div >
              <SolarSystemForm />
            </div>
          )}



          {activeTab === 'orders' && (
            <div className="bg-white p-4 md:p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Order Management</h3>
                <button
                  onClick={fetchQuotes}
                  disabled={loading}
                  className={`bg-[#82c701] hover:bg-[#6daa01] text-white px-4 py-2 rounded-lg transition-all ${loading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                >
                  {loading ? "Refreshing..." : "🔄 Refresh"}
                </button>
              </div>

              {/* Loading */}
              {loading && <p className="text-center py-10">Loading orders...</p>}

              {/* Error */}
              {ordersError && (
                <p className="text-center text-red-500 py-10">{ordersError}</p>
              )}

              {/* Empty */}
              {!loading && !ordersError && quotes.length === 0 && (
                <p className="text-center py-10">No orders found.</p>
              )}

              {/* Orders Table */}
              {!loading && !ordersError && quotes.length > 0 && (
                <div className="overflow-x-auto shadow-md rounded-lg">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-100 text-left">
                      <tr>
                        <th className="py-3 px-4 border-b">Name</th>
                        <th className="py-3 px-4 border-b">Email</th>
                        <th className="py-3 px-4 border-b">Phone</th>
                        <th className="py-3 px-4 border-b">Address</th>
                        <th className="py-3 px-4 border-b">Interested Product</th>
                        <th className="py-3 px-4 border-b">Message</th>
                        <th className="py-3 px-4 border-b">Date</th>
                        <th className="py-3 px-4 border-b text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quotes.map((quote) => (
                        <tr key={quote._id} className="hover:bg-gray-50 text-sm">
                          <td className="py-2 px-4 border-b">{quote.name}</td>
                          <td className="py-2 px-4 border-b">{quote.email || "-"}</td>
                          <td className="py-2 px-4 border-b">{quote.phone}</td>
                          <td className="py-2 px-4 border-b">{quote.address}</td>
                          <td className="py-2 px-4 border-b">{quote.interestedProduct}</td>
                          <td className="py-2 px-4 border-b">{quote.message || "-"}</td>
                          <td className="py-2 px-4 border-b">
                            {new Date(quote.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-2 px-4 border-b text-center">
                            <button
                              onClick={() => handleDelete(quote._id)}
                              className="text-red-500 hover:text-red-700 transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === 'FAQ' && (
            <div className="bg-white p-4 md:p-6 rounded-lg shadow">
              <AdminFaqs />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Page;