'use client'
import { useState } from 'react';

const SolarStructure = () => {
  // Solar structure data
  const structures = [
    {
      type: 'L3 Standard Structure',
      material: 'Galvanized Iron 14 Gauge with SS Nut Bolt',
      price: '8,800',
      status: 'In stock'
    },
    {
      type: 'L3 Standard Structure',
      material: 'Galvanized Iron 14 Gauge with GI Nut Bolt',
      price: '7,000',
      status: 'In stock'
    },
    {
      type: 'L4 Standard Structure',
      material: 'Galvanized Iron 14 Gauge with SS Nut Bolt',
      price: '13,500',
      status: 'In stock'
    },
    {
      type: 'L4 Standard Structure',
      material: 'Galvanized Iron 14 Gauge with GI Nut Bolt',
      price: '11,500',
      status: 'In stock'
    },
    {
      type: 'Customized Fabricated Structure',
      material: 'H-Beam 1.5kg/ft or C-Channel 1kg/feet including Civil works',
      price: '12,000',
      status: 'In stock'
    },
    {
      type: 'Customized Fabricated Structure',
      material: 'Pipe 1.2kg/ft or C-Channel 1kg/feet including Civil works',
      price: '10,000',
      status: 'In stock'
    },
    {
      type: 'Customized Fabricated Structure',
      material: 'Square or Round pipes 14/16 gauge including Civil works',
      price: '9,000',
      status: 'In stock'
    },
    {
      type: 'Aluminium L2 Standard Structure',
      material: '1.5mm or 2mm thickness with SS Nut Bolt',
      price: '7,500',
      status: 'In stock'
    },
    {
      type: 'Aluminium L3 Standard Structure',
      material: '1.5mm or 2mm thickness with SS Nut Bolt',
      price: '9,500',
      status: 'In stock'
    },
    {
      type: 'Aluminium P1 Potrait Structure',
      material: '1.5mm or 2mm thickness with SS Nut Bolt',
      price: '2,800',
      status: 'In stock'
    },
    {
      type: 'Ground Mount',
      material: 'Hot Dip Galvanized Piling Structure',
      price: '28,000',
      status: 'In stock'
    }
  ];

  // Filter state
  const [filter, setFilter] = useState('all');

  // Filter structures
  const filteredStructures = filter === 'all' 
    ? structures 
    : structures.filter(item => item.type.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Solar Structure Prices in Pakistan
      </h1>

      {/* Simple filter */}
      <div className="mb-4 flex justify-center">
        <select 
          className="p-2 border rounded-md"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        >
          <option value="all">All Structures</option>
          <option value="L3">L3 Structures</option>
          <option value="L4">L4 Structures</option>
          <option value="Customized">Customized</option>
          <option value="Aluminium">Aluminium</option>
          <option value="Ground">Ground Mount</option>
        </select>
      </div>

      {/* Price Table */}
      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Structure Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Material Specification
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price (PKR)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStructures.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {item.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.material}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                  {item.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden mt-4 space-y-4">
        {filteredStructures.map((item, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex justify-between">
              <h3 className="font-medium text-gray-900">{item.type}</h3>
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {item.status}
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-1">{item.material}</p>
            <p className="text-lg font-semibold text-green-600 mt-2">{item.price} PKR</p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md">
          Contact for Installation
        </button>
      </div>
    </div>
  );
};

export default SolarStructure;