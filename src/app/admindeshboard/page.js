'use client';
import { useState } from 'react';

export default function DashboardPage() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    price: '',
    description: '',
    image: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Add product
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.category || !formData.name || !formData.price) {
      alert("Please fill required fields");
      return;
    }
    setProducts([...products, { ...formData, id: Date.now() }]);
    setFormData({ category: '', name: '', price: '', description: '', image: '' });
    console.log("Product added:", formData);
  };

  // Delete product
  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Solar Products Dashboard</h1>

      {/* Add Product Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Category *</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select category</option>
            <option value="Solar Panels">Solar Panels</option>
            <option value="Batteries">Batteries</option>
            <option value="Inverters">Inverters</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Product Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Price (PKR) *</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter product description"
            className="w-full border rounded px-3 py-2"
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Add Product
          </button>
        </div>
      </form>

      {/* Display Products */}
      <h2 className="text-2xl font-semibold mb-4">Products List</h2>
      {products.length === 0 ? (
        <p className="text-gray-500">No products added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded shadow p-4">
              {product.image && (
                <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded mb-3" />
              )}
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-green-600 font-bold mt-1">PKR {product.price}</p>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <button
                onClick={() => handleDelete(product.id)}
                className="mt-3 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
