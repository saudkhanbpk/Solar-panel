// Dashboard.jsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import SolarSystemForm from '../../Components/admin/pakagesform'

const page = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [products, setProducts] = useState([
    { id: 1, name: 'Solar Panel 300W', category: 'Panels', price: 250, stock: 45 },
    { id: 2, name: 'Lithium Battery 5kWh', category: 'Batteries', price: 1200, stock: 12 },
    { id: 3, name: 'Hybrid Inverter 5kW', category: 'Inverters', price: 1800, stock: 8 }
  ]);
  const [packages, setPackages] = useState([
    { id: 1, name: 'Home Basic Kit', products: ['Solar Panel 300W', 'Inverter 3kW'], price: 3500 },
    { id: 2, name: 'Home Premium Kit', products: ['Solar Panel 400W', 'Inverter 5kW', 'Battery 10kWh'], price: 7500 }
  ]);
  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '', stock: '' });
  const [newPackage, setNewPackage] = useState({ name: '', products: [], price: '' });

 

 

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-green-800 text-white">
        <div className="p-4 border-b border-green-700">
          <h1 className="text-xl font-bold">Solar Admin</h1>
          <p className="text-green-200 text-sm">Dashboard</p>
        </div>
        <nav className="p-4">
          <ul>
            <li className="mb-2">
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`w-full text-left p-2 rounded ${activeTab === 'dashboard' ? 'bg-green-700' : 'hover:bg-green-700'}`}
              >
                <i className="fas fa-tachometer-alt mr-2"></i> Dashboard
              </button>
            </li>
            <li className="mb-2">
              <button 
                onClick={() => setActiveTab('products')}
                className={`w-full text-left p-2 rounded ${activeTab === 'products' ? 'bg-green-700' : 'hover:bg-green-700'}`}
              >
                <i className="fas fa-solar-panel mr-2"></i> Products
              </button>
            </li>
            <li className="mb-2">
              <button 
                onClick={() => setActiveTab('packages')}
                className={`w-full text-left p-2 rounded ${activeTab === 'packages' ? 'bg-green-700' : 'hover:bg-green-700'}`}
              >
                <i className="fas fa-box mr-2"></i> Packages
              </button>
            </li>
            <li className="mb-2">
              <button 
                onClick={() => setActiveTab('orders')}
                className={`w-full text-left p-2 rounded ${activeTab === 'orders' ? 'bg-green-700' : 'hover:bg-green-700'}`}
              >
                <i className="fas fa-shopping-cart mr-2"></i> Orders
              </button>
            </li>
            <li className="mb-2">
              <button 
                onClick={() => setActiveTab('customers')}
                className={`w-full text-left p-2 rounded ${activeTab === 'customers' ? 'bg-green-700' : 'hover:bg-green-700'}`}
              >
                <i className="fas fa-users mr-2"></i> Customers
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold capitalize">{activeTab}</h2>
          <div className="flex items-center space-x-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              <i className="fas fa-plus mr-2"></i> Add New
            </button>
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center">
                <span className="font-bold text-green-800">A</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {activeTab === 'dashboard' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500">Total Revenue</p>
                      <p className="text-2xl font-bold">$24,563</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      <i className="fas fa-dollar-sign text-green-600"></i>
                    </div>
                  </div>
                  <p className="text-green-600 mt-2"><i className="fas fa-arrow-up"></i> 12.5% since last month</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500">Orders</p>
                      <p className="text-2xl font-bold">1,258</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full">
                      <i className="fas fa-shopping-cart text-blue-600"></i>
                    </div>
                  </div>
                  <p className="text-green-600 mt-2"><i className="fas fa-arrow-up"></i> 8.2% since last month</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500">Products</p>
                      <p className="text-2xl font-bold">56</p>
                    </div>
                    <div className="bg-yellow-100 p-3 rounded-full">
                      <i className="fas fa-solar-panel text-yellow-600"></i>
                    </div>
                  </div>
                  <p className="text-green-600 mt-2"><i className="fas fa-arrow-up"></i> 3.1% since last month</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-500">Customers</p>
                      <p className="text-2xl font-bold">895</p>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-full">
                      <i className="fas fa-users text-purple-600"></i>
                    </div>
                  </div>
                  <p className="text-green-600 mt-2"><i className="fas fa-arrow-up"></i> 5.7% since last month</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="text-left text-gray-500">
                          <th className="pb-2">Order ID</th>
                          <th className="pb-2">Customer</th>
                          <th className="pb-2">Amount</th>
                          <th className="pb-2">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3">#ORD-7562</td>
                          <td className="py-3">John Smith</td>
                          <td className="py-3">$3,500.00</td>
                          <td className="py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Delivered</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3">#ORD-7561</td>
                          <td className="py-3">Emma Johnson</td>
                          <td className="py-3">$7,200.00</td>
                          <td className="py-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Processing</span></td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3">#ORD-7560</td>
                          <td className="py-3">Michael Brown</td>
                          <td className="py-3">$2,800.00</td>
                          <td className="py-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">Shipped</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4">Top Selling Products</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-green-100 rounded flex items-center justify-center mr-3">
                          <i className="fas fa-solar-panel text-green-600"></i>
                        </div>
                        <div>
                          <p className="font-medium">Solar Panel 400W</p>
                          <p className="text-gray-500 text-sm">Panels</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$12,540</p>
                        <p className="text-green-600 text-sm">+15.3%</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center mr-3">
                          <i className="fas fa-battery-full text-blue-600"></i>
                        </div>
                        <div>
                          <p className="font-medium">Lithium Battery 5kWh</p>
                          <p className="text-gray-500 text-sm">Batteries</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$8,640</p>
                        <p className="text-green-600 text-sm">+9.2%</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-yellow-100 rounded flex items-center justify-center mr-3">
                          <i className="fas fa-bolt text-yellow-600"></i>
                        </div>
                        <div>
                          <p className="font-medium">Hybrid Inverter 5kW</p>
                          <p className="text-gray-500 text-sm">Inverters</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$7,200</p>
                        <p className="text-green-600 text-sm">+7.8%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div>
              <div className="bg-white p-6 rounded-lg shadow mb-6">
                <h3 className="text-lg font-semibold mb-4">Add New Product</h3>
                <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select 
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={newProduct.category}
                      onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="Panels">Solar Panels</option>
                      <option value="Inverters">Inverters</option>
                      <option value="Batteries">Batteries</option>
                      <option value="Accessories">Accessories</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                    <input 
                      type="number" 
                      step="0.01"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      value={newProduct.stock}
                      onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                      Add Product
                    </button>
                  </div>
                </form>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Product List</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="text-left text-gray-500">
                        <th className="pb-2">Product</th>
                        <th className="pb-2">Category</th>
                        <th className="pb-2">Price</th>
                        <th className="pb-2">Stock</th>
                        <th className="pb-2">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map(product => (
                        <tr key={product.id} className="border-b">
                          <td className="py-3">{product.name}</td>
                          <td className="py-3">{product.category}</td>
                          <td className="py-3">${product.price.toFixed(2)}</td>
                          <td className="py-3">{product.stock}</td>
                          <td className="py-3">
                            <button className="text-blue-600 hover:text-blue-800 mr-2">
                              <i className="fas fa-edit"></i>
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              <i className="fas fa-trash"></i>
                            </button>
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
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Order Management</h3>
              <p className="text-gray-500">Order management functionality will be implemented here.</p>
            </div>
          )}

          {activeTab === 'customers' && (
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Customer Management</h3>
              <p className="text-gray-500">Customer management functionality will be implemented here.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default page;