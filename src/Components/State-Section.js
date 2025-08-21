"use client";
import React, { useState, useEffect } from "react";

const StatsSection = () => {
  const [systemsInstalled, setSystemsInstalled] = useState(0);
  const [megawatts, setMegawatts] = useState(0);
  const [customers, setCustomers] = useState(0);

  useEffect(() => {
    const duration = 3000; // animation duration
    const startTime = Date.now();

    const animateValue = (start, end, setValue) => {
      const range = end - start;

      const timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = start + progress * range;

        setValue(value);

        if (progress === 1) {
          clearInterval(timer);
        }
      }, 16);
    };

    animateValue(0, 1250, setSystemsInstalled);
    animateValue(0, 25.5, setMegawatts);
    animateValue(0, 950, setCustomers);
  }, []);

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Total Systems Installed */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center border-t-4 border-[#5AA86C]">
            <div className="text-4xl md:text-5xl font-bold text-[#5AA86C] mb-2">
              {systemsInstalled.toLocaleString()}+
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Total Systems Installed
            </h3>
            <p className="text-gray-600">
              Reliable solar solutions delivered across Pakistan
            </p>
            <div className="mt-4">
              <div className="w-16 h-1 bg-[#5AA86C] mx-auto"></div>
            </div>
          </div>

          {/* Total Megawatts */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center border-t-4 border-[#5AA86C]">
            <div className="text-4xl md:text-5xl font-bold text-[#5AA86C] mb-2">
              {megawatts.toFixed(1)} MW
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Total Megawatts
            </h3>
            <p className="text-gray-600">
              Clean energy generated for homes and businesses
            </p>
            <div className="mt-4">
              <div className="w-16 h-1 bg-[#5AA86C] mx-auto"></div>
            </div>
          </div>

          {/* Total Customers */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center border-t-4 border-[#5AA86C]">
            <div className="text-4xl md:text-5xl font-bold text-[#5AA86C] mb-2">
              {customers.toLocaleString()}+
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Satisfied Customers
            </h3>
            <p className="text-gray-600">
              Trusting us for their solar energy needs
            </p>
            <div className="mt-4">
              <div className="w-16 h-1 bg-[#5AA86C] mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
