'use client'
import { useState } from 'react';

const HybridInverters = () => {
  // Define inverter brands and their data dynamically
  const inverterBrands = [
    {
      id: 'huawei',
      name: 'Huawei',
      logo: '/api/placeholder/80/80',
      products: [
        {
          name: 'Huawei SUN2000-5KTL-M1',
          size: '5KW',
          price: '185,000',
          warranty: '10 Year',
          status: 'In stock',
          features: 'MPPT, WiFi, Smart Grid Ready'
        },
        {
          name: 'Huawei SUN2000-10KTL-M1',
          size: '10KW',
          price: '295,000',
          warranty: '10 Year',
          status: 'In stock',
          features: 'Dual MPPT, Smart O&M, High Efficiency'
        },
        {
          name: 'Huawei SUN2000-20KTL-M2',
          size: '20KW',
          price: '485,000',
          warranty: '10 Year',
          status: 'Limited stock',
          features: '4 MPPT, IP65, Remote Monitoring'
        }
      ]
    },
    {
      id: 'growatt',
      name: 'Growatt',
      logo: '/api/placeholder/80/80',
      products: [
        {
          name: 'Growatt MIN 3000TL-XE',
          size: '3KW',
          price: '125,000',
          warranty: '10 Year',
          status: 'In stock',
          features: 'Single Phase, MPPT, WiFi Ready'
        },
        {
          name: 'Growatt MID 15KTL3-X',
          size: '15KW',
          price: '385,000',
          warranty: '10 Year',
          status: 'In stock',
          features: 'Three Phase, 2 MPPT, Smart Monitoring'
        },
        {
          name: 'Growatt MAX 50KTL3 LV',
          size: '50KW',
          price: '895,000',
          warranty: '10 Year',
          status: 'In stock',
          features: '4 MPPT, Commercial Grade, High Efficiency'
        }
      ]
    },
    {
      id: 'solis',
      name: 'Solis',
      logo: '/api/placeholder/80/80',
      products: [
        {
          name: 'Solis-1P3K-4G',
          size: '3KW',
          price: '135,000',
          warranty: '10 Year',
          status: 'In stock',
          features: 'Single Phase, 2 MPPT, WiFi Stick'
        },
        {
          name: 'Solis-3P6K-4G',
          size: '6KW',
          price: '195,000',
          warranty: '10 Year',
          status: 'In stock',
          features: 'Three Phase, Dual MPPT, Smart Display'
        },
        {
          name: 'Solis-3P10K-4G',
          size: '10KW',
          price: '275,000',
          warranty: '10 Year',
          status: 'In stock',
          features: 'Three Phase, 2 MPPT, Arc Fault Detection'
        }
      ]
    },
    {
      id: 'goodwe',
      name: 'GoodWe',
      logo: '/api/placeholder/80/80',
      products: [
        {
          name: 'GoodWe GW3000-NS',
          size: '3KW',
          price: '128,000',
          warranty: '10 Year',
          status: 'In stock',
          features: 'Single Phase, 1 MPPT, WiFi Module'
        },
        {
          name: 'GoodWe GW5000-EH',
          size: '5KW',
          price: '175,000',
          warranty: '10 Year',
          status: 'In stock',
          features: 'Hybrid Ready, 2 MPPT, Smart Grid'
        },
        {
          name: 'GoodWe GW25K-MT',
          size: '25KW',
          price: '525,000',
          warranty: '10 Year',
          status: 'Limited stock',
          features: 'Three Phase, 3 MPPT, Commercial Grade'
        }
      ]
    },
    {
      id: 'fronius',
      name: 'Fronius',
      logo: '/api/placeholder/80/80',
      products: [
        {
          name: 'Fronius Primo 3.0-1',
          size: '3KW',
          price: '195,000',
          warranty: '15 Year',
          status: 'In stock',
          features: 'Single Phase, SnapINverter, WiFi Ready'
        },
        {
          name: 'Fronius Symo 10.0-3-M',
          size: '10KW',
          price: '385,000',
          warranty: '15 Year',
          status: 'In stock',
          features: 'Three Phase, 2 MPPT, Smart Grid Ready'
        }
      ]
    },
    {
      id: 'sma',
      name: 'SMA',
      logo: '/api/placeholder/80/80',
      products: [
        {
          name: 'SMA Sunny Boy 3.0',
          size: '3KW',
          price: '215,000',
          warranty: '10 Year',
          status: 'In stock',
          features: 'Single Phase, OptiTrac, Webconnect'
        },
        {
          name: 'SMA Sunny Tripower 8.0',
          size: '8KW',
          price: '295,000',
          warranty: '10 Year',
          status: 'In stock',
          features: 'Three Phase, 2 MPPT, Smart Connected'
        }
      ]
    },
    {
      id: 'solax',
      name: 'SolaX',
      logo: '/api/placeholder/80/80',
      products: [
        {
          name: 'SolaX X1-3.0-S',
          size: '3KW',
          price: '142,000',
          warranty: '10 Year',
          status: 'In stock',
          features: 'Single Phase, 1 MPPT, WiFi Ready'
        },
        {
          name: 'SolaX X3-15.0-D',
          size: '15KW',
          price: '395,000',
          warranty: '10 Year',
          status: 'In stock',
          features: 'Three Phase, 2 MPPT, Smart Monitoring'
        }
      ]
    },
    {
      id: 'ginlong',
      name: 'Ginlong',
      logo: '/api/placeholder/80/80',
      products: [
        {
          name: 'Ginlong Solis-1P5K-4G',
          size: '5KW',
          price: '158,000',
          warranty: '10 Year',
          status: 'In stock',
          features: 'Single Phase, 2 MPPT, LCD Display'
        }
      ]
    }
  ];

  const [activeTab, setActiveTab] = useState(inverterBrands[0].id);

  const activeBrand = inverterBrands.find(brand => brand.id === activeTab);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 bg-white">
      {/* Header */}
      <h1 className="text-xl sm:text-2xl font-bold text-center text-blue-900 mb-6 sm:mb-8">
        Hybraid Inverters
      </h1>

      {/* Dynamic Tabs */}
      <div className="flex flex-wrap justify-center border-b border-gray-200 mb-4 sm:mb-6 overflow-x-auto">
        {inverterBrands.map((brand) => (
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
              <div className="grid grid-cols-5 gap-4 p-4 font-semibold">
                <div>Inverter Size</div>
                <div>Price</div>
                <div>Warranty</div>
                <div>Status</div>
                <div>Features</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200">
              {activeBrand.products.map((product, index) => (
                <div key={index} className="grid grid-cols-5 gap-4 p-4 hover:bg-gray-50">
                  <div className="text-sm text-gray-800 font-medium">
                    {product.name} ({product.size})
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
                  <div className="text-sm text-gray-600">
                    {product.features}
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
            {activeBrand.products.map((product, index) => (
              <div key={index} className="p-4 hover:bg-gray-50">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-gray-800 text-sm flex-1 pr-2">
                      {product.name}
                    </h4>
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
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Size:</span>
                      <span className="ml-1 font-medium">{product.size}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Price:</span>
                      <span className="ml-1 font-semibold text-gray-800">{product.price}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div>
                      <span className="text-gray-500">Warranty:</span>
                      <span className="ml-1">{product.warranty}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Features:</span>
                      <span className="ml-1 text-gray-600">{product.features}</span>
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

export default HybridInverters;