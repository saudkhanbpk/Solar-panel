"use client";
import React from "react";
import AppointmentForm from "../../Components/domasticcards/Appointment";

export default function Contact() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-green-50 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-[#082E6F] mb-12">
          Contact <span className="text-[#82C701]">Us</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info - Left Side */}
          <div className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-[#82C701] flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-[#082E6F] mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Have questions about solar solutions? Our team is here to help you
              with <b className="text-[#82C701]">domestic, commercial, industrial, and agricultural</b> solar projects. 
              Reach out today and take the first step toward a cleaner, brighter future.
            </p>

            <div className="space-y-4 text-gray-700">
              <p>
                📍 <span className="font-semibold">Address:</span> Islamabad, Pakistan
              </p>
              <p>
                📞 <span className="font-semibold">Phone:</span> 03322332249
              </p>
              <p>
                📧 <span className="font-semibold">Email:</span> info@gogreen.com
              </p>
            </div>
          </div>

          {/* Appointment Form - Right Side */}
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
}
