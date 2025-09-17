"use client";
import {React,useState} from "react";
import AppointmentForm from "../../Components/domasticcards/Appointment";

export default function Contact() {
   const [activeIndex, setActiveIndex] = useState(0);

   const faqs = [
    {
      question: "What solar solutions do you offer?",
      answer: "We provide residential, commercial, and industrial solar systems including panels, inverters, and battery storage solutions."
    },
    {
      question: "How long does installation take?",
      answer: "Most residential installations are completed within 2-3 days, while commercial projects may take 1-2 weeks depending on scale."
    },
    {
      question: "Do you offer maintenance services?",
      answer: "Yes, we provide comprehensive maintenance packages including system checks, cleaning, and performance optimization."
    },
    {
      question: "What warranties do you provide?",
      answer: "We offer 25-year performance warranties on panels, 10-year warranties on inverters, and 5-year workmanship warranties."
    }
  ];

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

       <div className="FAQ-content">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-10">
        
            <div className="w-full md:w-1/2 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`p-4 cursor-pointer rounded-md transition-all ${activeIndex === index
                      ? 'bg-[#82c701] text-white'
                      : 'bg-white dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
                      }`}
                  >
                    {faq.question}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block border-l border-gray-200 dark:border-gray-600"></div>
            <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-md min-h-[240px] flex items-center">
                <p className="text-gray-700 dark:text-gray-200 text-lg">
                  {faqs[activeIndex].answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
