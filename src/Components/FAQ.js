"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const FAQ = ({ category }) => {
  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/faqs/${category}`);
        setFaqs(res.data);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    if (category) fetchFAQs();
  }, [category]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq._id}
            className="border border-gray-200 rounded-2xl shadow-sm"
          >
            <button
              className="flex justify-between items-center w-full p-4 text-left font-semibold text-gray-800"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="ml-4 text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="p-4 border-t text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
