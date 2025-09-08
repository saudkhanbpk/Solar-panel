"use client";
import React from "react";
import { FaHandsHelping, FaUsers, FaSmile, FaBriefcase, FaShieldAlt, FaComments, FaLightbulb, FaPeopleCarry, FaTools, FaUserCheck } from "react-icons/fa";

const coreValues = [
  { id: 1, icon: <FaUserCheck />, title: "We aspire and pledge to be the best", color: "bg-red-500" },
  { id: 2, icon: <FaUsers />, title: "We are respectful and kind", color: "bg-blue-500" },
  { id: 3, icon: <FaSmile />, title: "We have fun", color: "bg-blue-400" },
  { id: 4, icon: <FaBriefcase />, title: "We are professional in all we do", color: "bg-green-500" },
  { id: 5, icon: <FaShieldAlt />, title: "We have integrity and keep our commitments", color: "bg-green-600" },
  { id: 6, icon: <FaComments />, title: "We listen to learn and communicate effectively", color: "bg-green-400" },
  { id: 7, icon: <FaLightbulb />, title: "We are world-class innovators", color: "bg-lime-500" },
  { id: 8, icon: <FaPeopleCarry />, title: "We celebrate the successes of one another", color: "bg-yellow-500" },
  { id: 9, icon: <FaTools />, title: "We take pride in our workmanship", color: "bg-yellow-600" },
  { id: 10, icon: <FaHandsHelping />, title: "We take personal ownership and responsibility", color: "bg-orange-500" },
];

export default function CoreValues() {
  return (
    <div id='Core-value'className=" py-16 pt-24 bg-gradient-to-b from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-[#082E6F] mb-12">
          Our <span className="text-[#82C701]">Core Values</span>
        </h1>

        {/* Circle Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-white">
          {coreValues.map((value) => (
            <div
              key={value.id}
              className={`flex flex-col items-center justify-center text-center p-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 ${value.color}`}
            >
              <div className="text-3xl mb-3">{value.icon}</div>
              <h3 className="font-semibold text-lg">{value.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
