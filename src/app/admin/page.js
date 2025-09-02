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
  const router = useRouter();

  const { percent, current, last } = calculateOrdersGrowth(quotes);
  // Check screen size on mount and resize
  useEffect(() => {

    fetchQuotes();

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
        className={`${isSidebarOpen ? 'block' : 'hidden'} md:block fixed md:relative inset-0 z-50 md:z-auto w-64 bg-[#6AAF02] text-white md:translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto`}
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
                onClick={() => handleTabChange('FAQ')}
                className={`w-full text-left p-2 rounded ${activeTab === 'FAQ' ? 'bg-[#4D8F00]' : 'hover:bg-green-700'}`}
              >
                <i className="fas fa-users mr-2"></i> FAQS
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
      <div className="flex-1 overflow-y-auto">

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
                    <button onClick={() => router.push("/profile")} className='block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-500'>
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
            <div>
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