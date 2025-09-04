'use client'
import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import swal from 'sweetalert';


const SolarSystemForm = () => {
  const [formData, setFormData] = useState({
    capacity: "",
    category: "",
    model: "",
    solarModules: "",
    inverter: "",
    batteries: "",
    mountingStructure: "",
    wiringComponents: "",
    services: "",
    batteryNote: "",
    priceFrom: "",
    priceTo: ""
  });
  const [packages, setPackages] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [reload, setReload] = useState(false)
  // Handle text inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = (id) => {
    const pkg = packages.find((p) => p._id === id);
    setEditingId(id);
    setFormData(pkg); // pre-fill with existing values
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/pakages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        swal({
          title: "Good job!",
          text: "Pakage added successfully!",
          icon: "success",
          button: true,
          timer: 2000
        })
        setFormData({
          capacity: "",
          category: "",
          model: "",
          solarModules: "",
          inverter: "",
          batteries: "",
          mountingStructure: "",
          wiringComponents: "",
          services: "",
          batteryNote: "",
          priceFrom: "",
          priceTo: ""
        });
        fetchPackages();

      } else {
        const error = await res.json();
        console.log({ error: error.message })
      }
    } catch (error) {
      console.log(error)
    }
  };

  const fetchPackages = async () => {
    try {
      const res = await fetch("/api/pakages")
      const data = await res.json();
      setPackages(data);
    } catch (error) {
      console.log({ error: error.message });
    }
  }

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/pakages/${id}`,
        { method: 'DELETE' });

      if (!res.ok) {
        throw new Error("failed to delete");
      }
      const data = await res.json();
      setReload(true)
      swal({
        title: "Good job!",
        text: "Pakage deleted successfully!",
        icon: "success",
        button: true,
        timer: 2000
      })

    } catch (error) {
      console.error("error deleting", error);
    }
  }

  const handleUpdate = async (id, updatedData) => {
    try {
      const res = await fetch(`/api/pakages/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (!res.ok) throw new Error("Failed to update");
      const data = await res.json();

      swal({
        title: "Good job!",
        text: "Pakage updated successfully!",
        icon: "success",
        button: true,
        timer: 2000
      })

      setEditingId(null);
      setFormData({
        capacity: "",
        category: "",
        model: "",
        solarModules: "",
        inverter: "",
        batteries: "",
        mountingStructure: "",
        wiringComponents: "",
        services: "",
        batteryNote: "",
        priceFrom: "",
        priceTo: ""
      });
      fetchPackages();
      // optionally refresh UI here
    } catch (error) {
      console.error("Error updating:", error);
    }
  }

  useEffect(() => {
    fetchPackages();
    setReload(false)
  }, [reload]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-gray-100 py-8 px-4">
      <form onSubmit={editingId ? (e) => { e.preventDefault(); handleUpdate(editingId, formData); } : handleSubmit} className="max-w-2xl mx-auto p-6 bg-white shadow-xl rounded-lg space-y-6">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">Solar System Package Form</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">System Capacity</label>
            <input
              type="text"
              name="capacity"
              placeholder="e.g. 3kW"
              value={formData.capacity}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              System Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="">Select a system</option>
              <option value="Solar Hybrid System">Solar Hybrid System</option>
              <option value="Solar Off-Grid System">Solar Off-Grid System</option>
              <option value="Solar On-Grid System">Solar On-Grid System</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
          <input
            type="text"
            name="model"
            placeholder="e.g. 3kW SolarMax"
            value={formData.model}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Solar Modules</label>
          <input
            type="text"
            name="solarModules"
            placeholder="e.g. 6 x 575-585W Tier 1 Solar Modules"
            value={formData.solarModules}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Inverter</label>
          <input
            type="text"
            name="inverter"
            placeholder="e.g. 1x3kW Solarmax/Primax Inverter 24v"
            value={formData.inverter}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Batteries</label>
          <input
            type="text"
            name="batteries"
            placeholder="e.g. 2x185AH (12v) Tubular Batteries"
            value={formData.batteries}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mounting Structure</label>
          <input
            type="text"
            name="mountingStructure"
            placeholder="e.g. Mounting Structure G.I Sheet 14 Gage"
            value={formData.mountingStructure}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Wiring & Components</label>
          <input
            type="text"
            name="wiringComponents"
            placeholder="e.g. DC Wire, AC & DC Breakers, Box etc."
            value={formData.wiringComponents}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Services</label>
          <input
            type="text"
            name="services"
            placeholder="e.g. Installation and 02 Years Free After Sales Services"
            value={formData.services}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Battery Note</label>
          <input
            type="text"
            name="batteryNote"
            placeholder="e.g. Battery Prices are not Included"
            value={formData.batteryNote}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price From</label>
            <input
              type="text"
              name="priceFrom"
              placeholder="e.g. Rs. 330,000/-"
              value={formData.priceFrom}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price To</label>
            <input
              type="text"
              name="priceTo"
              placeholder="e.g. Rs. 351,000/-"
              value={formData.priceTo}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition-colors text-lg font-semibold mt-4"
        >
          {editingId ? "Update Package" : "Save Package"}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
        {packages?.map((pkg) => (
          <div
            key={pkg._id}
            className="relative flex flex-col bg-white rounded-2xl overflow-hidden hover:shadow-lg transition duration-300"
          >
            {/* Action Icons */}
            <div className="absolute top-3 right-3 flex gap-3 z-10">
              <button
                onClick={() => handleEdit(pkg._id)}
                className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600"
              >
                <FaEdit size={16} className="bg-white" />
              </button>
              <button
                onClick={() => handleDelete(pkg._id)}
                className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-600"
              >
                <FaTrash size={16} className="bg-white" />
              </button>
            </div>

            {/* Header Section */}
            <div className="bg-gradient-to-r from-[#83C700] to-[#6C9E33] text-white text-center py-4 px-6">
              <h2 className="text-2xl font-bold">
                {pkg.capacity} {pkg.category} Price in Pakistan
              </h2>
            </div>

            {/* Main Content Section */}
            <div className="flex flex-col md:flex-row">
              {/* Left Side - Image and System Info */}
              <div className="w-full md:w-[60%] bg-[#6C9E33] p-6 flex flex-col">
                {/* System Title */}
                <div className="text-white mb-4">
                  <h3 className="text-4xl font-bold text-white">
                    {pkg.capacity}
                  </h3>
                  <h4 className="text-xl font-medium">
                    Solar Hybrid System
                  </h4>
                </div>

                {/* Image Container */}
                <div className="flex-1 flex items-center justify-center">
                  <img
                    src="/cardpic.png"
                    alt="Solar Package"
                    className="w-full h-auto object-contain max-h-64"
                  />
                </div>

                {/* Additional branding space if needed */}
                <div className="mt-4 text-center">
                  <p className="text-white text-sm opacity-75">{pkg.model}</p>
                </div>
              </div>

              {/* Right Side - System Details */}
              <div className="w-full md:w-[40%] p-6 bg-white">
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">System Details</h3>

                {/* Details List */}
                <ul className="text-gray-700 text-sm space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#6C9E33] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{pkg.solarModules}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#6C9E33] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{pkg.inverter}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#6C9E33] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{pkg.batteries}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#6C9E33] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{pkg.mountingStructure}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#6C9E33] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{pkg.wiringComponents}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#6C9E33] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{pkg.services}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="font-medium text-red-600">{pkg.batteryNote}</span>
                  </li>
                </ul>

                {/* Price Section */}
                <div className="bg-[#83C700] text-white text-center py-4 px-3 rounded-lg font-bold">
                  <div className="text-lg">
                    FROM RS {pkg.priceFrom}/-
                  </div>
                  <div className="text-lg">
                    TO RS {pkg.priceTo}/-
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>






    </div>
  );
};

export default SolarSystemForm;