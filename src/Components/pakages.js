'use client';

import { useState, useEffect } from 'react';

const SolarSystemCard = ({ system }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your API
    alert(`Thank you ${formData.name}! We will contact you shortly with a quote.`);
    setIsExpanded(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 p-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-1">{system.capacity}</h2>
        <p className="text-lg opacity-90">{system.name}</p>
      </div>

      {/* System Details */}
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">System Details</h3>
        
        <div className="mb-4">
          <h4 className="font-medium text-emerald-700 mb-2">{system.model}</h4>
          <ul className="space-y-2 text-gray-600">
            {system.details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <span className="text-emerald-500 mr-2">•</span>
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Note about batteries */}
        <p className="text-sm text-gray-500 italic mb-6">
          {system.batteryNote}
        </p>

        {/* Pricing */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">From</span>
            <span className="text-lg font-bold text-emerald-700">{system.priceFrom}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">To</span>
            <span className="text-lg font-bold text-emerald-700">{system.priceTo}</span>
          </div>
        </div>
      </div>

      {/* Get Quote Button */}
      <div className="p-6 pt-0">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
        >
          {isExpanded ? 'CLOSE FORM' : 'GET A QUOTE'}
        </button>

        {/* Expanded Form (appears when button is clicked) */}
        {isExpanded && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200 animate-fadeIn">
            <h4 className="font-medium text-gray-800 mb-3 text-center">Request Quote for {system.capacity} System</h4>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder="Full Name" 
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number" 
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
              <textarea
                name="message"
                placeholder="Additional information or questions"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button 
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Submit Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

// Loading skeleton component
const CardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col animate-pulse">
      <div className="bg-gray-300 p-6 h-24"></div>
      <div className="p-6 flex-grow space-y-4">
        <div className="h-6 bg-gray-300 rounded"></div>
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="h-4 bg-gray-300 rounded"></div>
          ))}
        </div>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="space-y-2 pt-4">
          <div className="h-5 bg-gray-300 rounded w-1/2"></div>
          <div className="h-5 bg-gray-300 rounded w-2/3"></div>
        </div>
      </div>
      <div className="p-6 pt-0">
        <div className="h-12 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

// Parent component that fetches and displays the cards
const SolarSystemsShowcase = () => {
  const [systems, setSystems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:571/carddata');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setSystems(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching solar system data:', err);
        
        // Fallback data in case API is not available
        setSystems([
          {
            id: 1,
            capacity: "3kW",
            name: "Solar Hybrid System",
            model: "3kW SolarMax",
            details: [
              "575-585W Tier I Solar Modules",
              "1 x 3kW Solarmax/Primax Inverter (24v)",
              "2 x 185AH (12v) Tubular Batteries",
              "Mounting Structure G.I Sheet 14 Gage",
              "DC Wire, AC & DC Breakers, Box etc.",
              "Installation and 02 Years Free After Sales Services"
            ],
            batteryNote: "Battery Prices are not Included.",
            priceFrom: "Rs. 330,000/-",
            priceTo: "Rs. 351,000/-"
          },
          {
            id: 2,
            capacity: "5kW",
            name: "Solar Hybrid System",
            model: "5kW SolarMax",
            details: [
              "575-585W Tier I Solar Modules",
              "1 x 5kW Solarmax/Primax Inverter (48v)",
              "4 x 185AH (12v) Tubular Batteries",
              "Mounting Structure G.I Sheet 14 Gage",
              "DC Wire, AC & DC Breakers, Box etc.",
              "Installation and 02 Years Free After Sales Services"
            ],
            batteryNote: "Battery Prices are not Included.",
            priceFrom: "Rs. 480,000/-",
            priceTo: "Rs. 510,000/-"
          },
          {
            id: 3,
            capacity: "10kW",
            name: "Commercial Solar System",
            model: "10kW SolarMax Pro",
            details: [
              "600W Tier I Solar Modules",
              "1 x 10kW Solarmax/Primax Inverter (96v)",
              "8 x 185AH (12v) Tubular Batteries",
              "Heavy Duty Mounting Structure",
              "DC Wire, AC & DC Breakers, Box etc.",
              "Installation and 05 Years Free After Sales Services"
            ],
            batteryNote: "Battery Prices are not Included.",
            priceFrom: "Rs. 920,000/-",
            priceTo: "Rs. 980,000/-"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-12 px-4 flex items-center justify-center">
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Connection Error</h2>
          <p className="text-gray-600 mb-4">Could not connect to the server at localhost:571</p>
          <p className="text-sm text-gray-500">Using demo data instead</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Solar System Packages</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our range of high-quality solar solutions designed for different energy needs. 
            All systems come with professional installation and after-sales support.
          </p>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <CardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {systems.map(system => (
              <SolarSystemCard key={system.id} system={system} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SolarSystemsShowcase;