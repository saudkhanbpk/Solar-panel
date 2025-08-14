'use client'
import { useState } from 'react';

const BalanceOfSystem = () => {
  const [activeTab, setActiveTab] = useState('ongrid');

  const systemData = {
    ongrid: [
      {
        systemSize: '3kW',
        description: 'AC/DC Wire, AC/DC Breakers, SPD\'s, DB Box, PVC Conduits etc, Small installation Accessories',
        price: '45000'
      },
      {
        systemSize: '6kW',
        description: 'AC/DC Wire, AC/DC Breakers, SPD\'s, DB Box, PVC Conduits etc, Small installation Accessories',
        price: '70000'
      },
      {
        systemSize: '10kW',
        description: 'AC/DC Wire, AC/DC Breakers, SPD\'s, DB Box, PVC Conduits etc, Small installation Accessories',
        price: '105000'
      },
      {
        systemSize: '15kW',
        description: 'AC/DC Wire, AC/DC Breakers, SPD\'s, DB Box, PVC Conduits etc, Small installation Accessories',
        price: '115000'
      },
      {
        systemSize: '20kW',
        description: 'AC/DC Wire, AC/DC Breakers, SPD\'s, DB Box, PVC Conduits etc, Small installation Accessories',
        price: '135000'
      }
    ],
    hybrid: [
      {
        systemSize: '3kW',
        description: 'AC/DC Wire, AC/DC Breakers, SPD\'s, DB Box, PVC Conduits, Battery Cables, Fuses etc, Installation Accessories',
        price: '55000'
      },
      {
        systemSize: '5kW',
        description: 'AC/DC Wire, AC/DC Breakers, SPD\'s, DB Box, PVC Conduits, Battery Cables, Fuses etc, Installation Accessories',
        price: '75000'
      },
      {
        systemSize: '8kW',
        description: 'AC/DC Wire, AC/DC Breakers, SPD\'s, DB Box, PVC Conduits, Battery Cables, Fuses etc, Installation Accessories',
        price: '95000'
      },
      {
        systemSize: '10kW',
        description: 'AC/DC Wire, AC/DC Breakers, SPD\'s, DB Box, PVC Conduits, Battery Cables, Fuses etc, Installation Accessories',
        price: '115000'
      },
      {
        systemSize: '15kW',
        description: 'AC/DC Wire, AC/DC Breakers, SPD\'s, DB Box, PVC Conduits, Battery Cables, Fuses etc, Installation Accessories',
        price: '145000'
      }
    ]
  };

  const activeData = systemData[activeTab];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-white">
      {/* Header */}
      <h1 className="text-xl sm:text-2xl font-bold text-center text-blue-900 mb-6 sm:mb-8">
        BALANCE OF SYSTEM (ACCESSORIES)
      </h1>

      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <div className="flex rounded-lg overflow-hidden border border-gray-200">
          <button
            onClick={() => setActiveTab('ongrid')}
            className={`px-6 sm:px-8 py-3 font-medium transition-colors ${
              activeTab === 'ongrid'
                ? 'bg-[#8BC34A] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            On Grid
          </button>
          <button
            onClick={() => setActiveTab('hybrid')}
            className={`px-6 sm:px-8 py-3 font-medium transition-colors ${
              activeTab === 'hybrid'
                ? 'bg-[#8BC34A] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Hybrid
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
        {/* Desktop View */}
        <div className="hidden md:block">
          {/* Table Header */}
          <div className="bg-[#8BC34A] text-white">
            <div className="grid grid-cols-3 gap-4 p-4 font-semibold">
              <div>System Size</div>
              <div>Description</div>
              <div className="text-center">Price</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {activeData.map((item, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 p-4 hover:bg-gray-50">
                <div className="text-sm font-medium text-gray-800">
                  {item.systemSize}
                </div>
                <div className="text-sm text-gray-600">
                  {item.description}
                </div>
                <div className="text-sm font-bold text-[#8BC34A] text-center">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden">
          {/* Mobile Header */}
          <div className="bg-[#8BC34A] text-white p-4 text-center">
            <h3 className="font-bold text-lg">
              {activeTab === 'ongrid' ? 'On Grid' : 'Hybrid'} System Accessories
            </h3>
          </div>

          {/* Mobile Cards */}
          <div className="divide-y divide-gray-200">
            {activeData.map((item, index) => (
              <div key={index} className="p-4 hover:bg-gray-50">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-gray-800">
                      {item.systemSize}
                    </h4>
                    <div className="text-lg font-bold text-[#8BC34A]">
                      {item.price}
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <span className="text-gray-500">Description:</span>
                    <p className="mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Request Call Button */}
      <div className="text-center mt-8">
        <button className="bg-[#8BC34A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#7CB342] transition-colors">
          REQUEST A CALL
        </button>
      </div>
    </div>
  );
};

export default BalanceOfSystem;