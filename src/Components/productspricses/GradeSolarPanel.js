'use client'
import { useState } from 'react';

const SolarPanel = () => {
  // Define brands and their data dynamically
  const solarBrands = [
    {
      id: 'jinko',
      name: 'Jinko Solar',
      logo: '/api/placeholder/80/80',
      products: [
        { 
          model: 'Jinko Tiger Neo 54HL4', 
          panelSize: '410W', 
          pricePerWatt: 'PKR 69.5',
          pricePerPlate: 'PKR 28,500', 
          warranty: '12 Years',
          status: 'In Stock'
        },
        { 
          model: 'Jinko Tiger Neo 54HL4', 
          panelSize: '420W', 
          pricePerWatt: 'PKR 69.5',
          pricePerPlate: 'PKR 29,200', 
          warranty: '12 Years',
          status: 'In Stock'
        },
        { 
          model: 'Jinko Tiger Neo 54HL4', 
          panelSize: '430W', 
          pricePerWatt: 'PKR 69.8',
          pricePerPlate: 'PKR 30,000', 
          warranty: '12 Years',
          status: 'Out of Stock'
        },
        { 
          model: 'Jinko Tiger Neo 54HL4', 
          panelSize: '440W', 
          pricePerWatt: 'PKR 71.6',
          pricePerPlate: 'PKR 31,500', 
          warranty: '12 Years',
          status: 'In Stock'
        },
      ]
    },
    {
      id: 'trina',
      name: 'Trina Solar',
      logo: '/api/placeholder/80/80',
      products: [
        { 
          model: 'Trina Vertex S', 
          panelSize: '400W', 
          pricePerWatt: 'PKR 67.0',
          pricePerPlate: 'PKR 26,800', 
          warranty: '10 Years',
          status: 'In Stock'
        },
        { 
          model: 'Trina Vertex S', 
          panelSize: '410W', 
          pricePerWatt: 'PKR 67.1',
          pricePerPlate: 'PKR 27,500', 
          warranty: '10 Years',
          status: 'In Stock'
        },
        { 
          model: 'Trina Vertex S', 
          panelSize: '420W', 
          pricePerWatt: 'PKR 67.1',
          pricePerPlate: 'PKR 28,200', 
          warranty: '10 Years',
          status: 'Out of Stock'
        },
      ]
    },
    {
      id: 'longi',
      name: 'Longi Solar',
      logo: '/api/placeholder/80/80',
      products: [
        { 
          model: 'Longi Hi-MO 5', 
          panelSize: '450W', 
          pricePerWatt: 'PKR 67.8',
          pricePerPlate: 'PKR 30,500', 
          warranty: '12 Years',
          status: 'In Stock'
        },
        { 
          model: 'Longi Hi-MO 5', 
          panelSize: '460W', 
          pricePerWatt: 'PKR 69.1',
          pricePerPlate: 'PKR 31,800', 
          warranty: '12 Years',
          status: 'In Stock'
        },
        { 
          model: 'Longi Hi-MO 5', 
          panelSize: '470W', 
          pricePerWatt: 'PKR 69.1',
          pricePerPlate: 'PKR 32,500', 
          warranty: '12 Years',
          status: 'Out of Stock'
        },
      ]
    },
    {
      id: 'canadian',
      name: 'Canadian Solar',
      logo: '/api/placeholder/80/80',
      products: [
        { 
          model: 'Canadian Solar HiKu', 
          panelSize: '405W', 
          pricePerWatt: 'PKR 66.7',
          pricePerPlate: 'PKR 27,000', 
          warranty: '10 Years',
          status: 'In Stock'
        },
        { 
          model: 'Canadian Solar HiKu', 
          panelSize: '415W', 
          pricePerWatt: 'PKR 67.5',
          pricePerPlate: 'PKR 28,000', 
          warranty: '10 Years',
          status: 'In Stock'
        },
      ]
    },
    {
      id: 'ja',
      name: 'JA Solar',
      logo: '/api/placeholder/80/80',
      products: [
        { 
          model: 'JA Solar JAM72S30', 
          panelSize: '445W', 
          pricePerWatt: 'PKR 68.5',
          pricePerPlate: 'PKR 30,500', 
          warranty: '12 Years',
          status: 'In Stock'
        },
        { 
          model: 'JA Solar JAM72S30', 
          panelSize: '450W', 
          pricePerWatt: 'PKR 69.0',
          pricePerPlate: 'PKR 31,000', 
          warranty: '12 Years',
          status: 'Limited Stock'
        },
      ]
    },
    {
      id: 'risen',
      name: 'Risen Energy',
      logo: '/api/placeholder/80/80',
      products: [
        { 
          model: 'Risen Energy Titan S', 
          panelSize: '400W', 
          pricePerWatt: 'PKR 65.5',
          pricePerPlate: 'PKR 26,200', 
          warranty: '10 Years',
          status: 'In Stock'
        },
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(solarBrands[0].id);

  const activeBrand = solarBrands.find(brand => brand.id === activeTab);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-white">
      {/* Header */}
      <h1 className="text-xl sm:text-2xl font-bold text-center text-blue-900 mb-6 sm:mb-8">
        Solar Panels
      </h1>

      {/* Dynamic Tabs */}
      <div className="flex flex-wrap justify-center border-b border-gray-200 mb-4 sm:mb-6 overflow-x-auto">
        {solarBrands.map((brand) => (
          <button
            key={brand.id}
            onClick={() => setActiveTab(brand.id)}
            className={`px-3 sm:px-4 py-2 sm:py-3 font-medium whitespace-nowrap transition-colors text-sm sm:text-base ${
              activeTab === brand.id
                ? 'text-white bg-[#8BC34A] rounded-t-lg'
                : 'text-gray-600 hover:text-[#8BC34A]'
            }`}
          >
            {brand.name}
          </button>
        ))}
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
        {/* Desktop View */}
        <div className="hidden lg:flex">
          {/* Brand Logo Section */}
          <div className="w-48 p-6 border-r border-gray-200 flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-[#8BC34A] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {activeBrand.name.charAt(0)}
                </span>
              </div>
            </div>
            <h3 className="font-bold text-lg text-gray-800">{activeBrand.name}</h3>
          </div>

          {/* Products Table */}
          <div className="flex-1 overflow-x-auto">
            {/* Table Header */}
            <div className="bg-[#8BC34A] text-white">
              <div className="grid grid-cols-6 gap-4 p-4 font-semibold">
                <div>Model</div>
                <div>Panel Size</div>
                <div>Price per Watt</div>
                <div>Price per Plate</div>
                <div>Warranty</div>
                <div>Status</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200">
              {activeBrand.products.map((panel, index) => (
                <div key={index} className="grid grid-cols-6 gap-4 p-4 hover:bg-gray-50">
                  <div className="text-sm text-gray-800 font-medium">
                    {panel.model}
                  </div>
                  <div className="text-sm font-semibold text-blue-600">
                    {panel.panelSize}
                  </div>
                  <div className="text-sm font-medium text-orange-600">
                    {panel.pricePerWatt}
                  </div>
                  <div className="text-sm font-bold text-[#8BC34A]">
                    {panel.pricePerPlate}
                  </div>
                  <div className="text-sm text-gray-600">
                    {panel.warranty}
                  </div>
                  <div className={`text-sm font-medium ${
                    panel.status === 'In Stock' 
                      ? 'text-green-600' 
                      : panel.status === 'Limited Stock'
                      ? 'text-orange-600'
                      : 'text-red-600'
                  }`}>
                    {panel.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet View */}
        <div className="lg:hidden">
          {/* Brand Header */}
          <div className="bg-[#8BC34A] text-white p-4 text-center">
            <div className="inline-flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">
                  {activeBrand.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-bold text-lg">{activeBrand.name}</h3>
            </div>
          </div>

          {/* Products Cards */}
          <div className="divide-y divide-gray-200">
            {activeBrand.products.map((panel, index) => (
              <div key={index} className="p-4 hover:bg-gray-50">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-gray-800 text-sm flex-1 pr-2">
                      {panel.model}
                    </h4>
                    <div className={`text-sm font-medium ${
                      panel.status === 'In Stock' 
                        ? 'text-green-600' 
                        : panel.status === 'Limited Stock'
                        ? 'text-orange-600'
                        : 'text-red-600'
                    }`}>
                      {panel.status}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Panel Size:</span>
                      <span className="ml-1 font-semibold text-blue-600">{panel.panelSize}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Warranty:</span>
                      <span className="ml-1">{panel.warranty}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Per Watt:</span>
                      <span className="ml-1 font-medium text-orange-600">{panel.pricePerWatt}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Per Plate:</span>
                      <span className="ml-1 font-bold text-[#8BC34A]">{panel.pricePerPlate}</span>
                    </div>
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

export default SolarPanel;