'use client'
import { useState } from 'react';

const TubularBattery = () => {
  // Define brands and their data dynamically
  const batteryBrands = [
    {
      id: 'byd',
      name: 'BYD',
      logo: '/api/placeholder/80/80',
      products: [
        {
          name: 'BYD (100Ah 48v BYD LV Flex Lite 5KW)',
          capacity: '100AH',
          price: '410,000',
          warranty: '10 Year',
          status: 'In stock'
        },
        {
          name: 'BYD (100Ah 48v BYD LV 5.0)',
          capacity: '100AH',
          price: '340,000',
          warranty: '07 Year',
          status: 'In stock'
        }
      ]
    },
    {
      id: 'maxpower',
      name: 'Maxpower',
      logo: '/api/placeholder/80/80',
      products: [
        {
          name: 'Maxpower Lithium 100Ah 48V',
          capacity: '100AH',
          price: '295,000',
          warranty: '05 Year',
          status: 'In stock'
        },
        {
          name: 'Maxpower Pro Series 200Ah',
          capacity: '200AH',
          price: '550,000',
          warranty: '07 Year',
          status: 'Limited stock'
        }
      ]
    },
    {
      id: 'pylontech',
      name: 'Pylontech',
      logo: '/api/placeholder/80/80',
      products: [
        {
          name: 'Pylontech US3000C 3.5kWh',
          capacity: '74AH',
          price: '385,000',
          warranty: '10 Year',
          status: 'In stock'
        },
        {
          name: 'Pylontech US5000 4.8kWh',
          capacity: '100AH',
          price: '485,000',
          warranty: '10 Year',
          status: 'In stock'
        }
      ]
    },
    {
      id: 'narada',
      name: 'Narada',
      logo: '/api/placeholder/80/80',
      products: [
        {
          name: 'Narada 48V 100Ah REXC',
          capacity: '100AH',
          price: '320,000',
          warranty: '05 Year',
          status: 'In stock'
        }
      ]
    },
    {
      id: 'foxess',
      name: 'Fox Ess',
      logo: '/api/placeholder/80/80',
      products: [
        {
          name: 'FoxESS ECS4100 4.1kWh',
          capacity: '85AH',
          price: '420,000',
          warranty: '10 Year',
          status: 'In stock'
        }
      ]
    },
    {
      id: 'sacredsun',
      name: 'Sacred Sun',
      logo: '/api/placeholder/80/80',
      products: [
        {
          name: 'Sacred Sun LFP-4850 48V 50Ah',
          capacity: '50AH',
          price: '195,000',
          warranty: '05 Year',
          status: 'In stock'
        }
      ]
    },
    {
      id: 'dyness',
      name: 'Dyness',
      logo: '/api/placeholder/80/80',
      products: [
        {
          name: 'Dyness PowerBox Pro B4850',
          capacity: '100AH',
          price: '365,000',
          warranty: '10 Year',
          status: 'In stock'
        }
      ]
    },
    {
      id: 'ses',
      name: 'SES',
      logo: '/api/placeholder/80/80',
      products: [
        {
          name: 'SES Lithium 48V 100Ah',
          capacity: '100AH',
          price: '275,000',
          warranty: '05 Year',
          status: 'In stock'
        }
      ]
    },
    {
      id: 'revolt',
      name: 'Revolt',
      logo: '/api/placeholder/80/80',
      products: [
        {
          name: 'Revolt Energy 48V 100Ah',
          capacity: '100AH',
          price: '310,000',
          warranty: '07 Year',
          status: 'In stock'
        }
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(batteryBrands[0].id);

  const activeBrand = batteryBrands.find(brand => brand.id === activeTab);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header */}
      <h1 className="text-2xl font-bold text-center text-blue-900 mb-8">
        Lithiumion Batteries
      </h1>

      {/* Dynamic Tabs */}
      <div className="flex flex-wrap justify-center border-b border-gray-200 mb-6 overflow-x-auto">
        {batteryBrands.map((brand) => (
          <button
            key={brand.id}
            onClick={() => setActiveTab(brand.id)}
            className={`px-4 py-3 font-medium whitespace-nowrap transition-colors ${
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
        <div className="flex">
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
          <div className="flex-1">
            {/* Table Header */}
            <div className="bg-[#8BC34A] text-white">
              <div className="grid grid-cols-5 gap-4 p-4 font-semibold">
                <div>Battery Size</div>
                <div>Battery Capacity</div>
                <div>Price</div>
                <div>Warranty</div>
                <div>Status</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200">
              {activeBrand.products.map((product, index) => (
                <div key={index} className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50">
                  <div className="text-sm text-gray-800 font-medium">
                    {product.name}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {product.capacity}
                  </div>
                  <div className="text-sm text-gray-800 font-semibold">
                    {product.price}
                  </div>
                  <div className="text-sm text-gray-600">
                    {product.warranty}
                  </div>
                  <div className={`text-sm font-medium ${
                    product.status === 'In stock' 
                      ? 'text-green-600' 
                      : product.status === 'Limited stock'
                      ? 'text-orange-600'
                      : 'text-red-600'
                  }`}>
                    {product.status}
                  </div>
                </div>
              ))}
            </div>
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

export default TubularBattery;