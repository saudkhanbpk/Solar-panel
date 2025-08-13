'use client';
import { React,useState } from 'react';

const SolarPanelPriceTable = () => {
  const [activeTab, setActiveTab] = useState('jinko');

  const panelData = {
    jinko: [
      { model: 'Jinko Tiger Neo 54HL4', size: '410W', price: 'PKR 28,500', warranty: '12 Years' },
      { model: 'Jinko Tiger Neo 54HL4', size: '420W', price: 'PKR 29,200', warranty: '12 Years' },
      { model: 'Jinko Tiger Neo 54HL4', size: '430W', price: 'PKR 30,000', warranty: '12 Years' },
      { model: 'Jinko Tiger Neo 54HL4', size: '440W', price: 'PKR 31,500', warranty: '12 Years' },
    ],
    trina: [
      { model: 'Trina Vertex S', size: '400W', price: 'PKR 26,800', warranty: '10 Years' },
      { model: 'Trina Vertex S', size: '410W', price: 'PKR 27,500', warranty: '10 Years' },
      { model: 'Trina Vertex S', size: '420W', price: 'PKR 28,200', warranty: '10 Years' },
    ],
    longi: [
      { model: 'Longi Hi-MO 5', size: '450W', price: 'PKR 30,500', warranty: '12 Years' },
      { model: 'Longi Hi-MO 5', size: '460W', price: 'PKR 31,800', warranty: '12 Years' },
      { model: 'Longi Hi-MO 5', size: '470W', price: 'PKR 32,500', warranty: '12 Years' },
    ],
    canadian: [
      { model: 'Canadian Solar HiKu', size: '405W', price: 'PKR 27,000', warranty: '10 Years' },
      { model: 'Canadian Solar HiKu', size: '415W', price: 'PKR 28,000', warranty: '10 Years' },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Solar Panel Price in Pakistan (July 2024)
      </h1>

      {/* Company Tabs */}
      <div className="flex overflow-x-auto mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('jinko')}
          className={`px-6 py-3 font-medium whitespace-nowrap ${activeTab === 'jinko' ? 'text-[#5AA86C] border-b-2 border-[#5AA86C]' : 'text-gray-500'}`}
        >
          Jinko Solar
        </button>
        <button
          onClick={() => setActiveTab('trina')}
          className={`px-6 py-3 font-medium whitespace-nowrap ${activeTab === 'trina' ? 'text-[#5AA86C] border-b-2 border-[#5AA86C]' : 'text-gray-500'}`}
        >
          Trina Solar
        </button>
        <button
          onClick={() => setActiveTab('longi')}
          className={`px-6 py-3 font-medium whitespace-nowrap ${activeTab === 'longi' ? 'text-[#5AA86C] border-b-2 border-[#5AA86C]' : 'text-gray-500'}`}
        >
          Longi Solar
        </button>
        <button
          onClick={() => setActiveTab('canadian')}
          className={`px-6 py-3 font-medium whitespace-nowrap ${activeTab === 'canadian' ? 'text-[#5AA86C] border-b-2 border-[#5AA86C]' : 'text-gray-500'}`}
        >
          Canadian Solar
        </button>
      </div>

      {/* Price Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#5AA86C] text-white">
              <th className="p-4 text-left">Model</th>
              <th className="p-4 text-center">Size (Watt)</th>
              <th className="p-4 text-center">Price (PKR)</th>
              <th className="p-4 text-right">Warranty</th>
            </tr>
          </thead>
          <tbody>
            {panelData[activeTab].map((panel, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium">{panel.model}</td>
                <td className="p-4 text-center">{panel.size}</td>
                <td className="p-4 text-center font-bold text-[#5AA86C]">{panel.price}</td>
                <td className="p-4 text-right">{panel.warranty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              Prices are inclusive of 17% GST. Installation charges not included.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="bg-[#5AA86C] hover:bg-[#4a8a5a] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all hover:scale-105">
          Contact for Bulk Order Discount
        </button>
      </div>
    </div>
  );
};

export default SolarPanelPriceTable;