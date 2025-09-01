"use client";
import { useEffect, useState } from "react";

const Chevron = ({ open }) => (
  <svg
    className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
    viewBox="0 0 20 20" fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 11.085l3.71-3.856a.75.75 0 111.08 1.04l-4.24 4.41a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

export default function FAQ({ category }) {

  const [faqs, setFaqs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    async function fetchFAQs() {
      try {
        const res = await fetch('http://localhost:3000/api/faq');
        const data = await res.json();

        if (data.success) {
          let faq = Array.isArray(data.faq) ? data.faq : [];
          // const Faqs = faq.filter((item) => item.isPublished);
          setFaqs(faq);
        }

      } catch (err) {
        console.error("Error loading FAQs:", err);
      }
    }
    if (category) fetchFAQs();
  }, [category]);

  const filteredFaqs = faqs.filter((faq) => faq.category === category);

  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <h2 className="mb-6 text-3xl font-bold text-gray-900 text-center">FAQs</h2>

      <div className="rounded-2xl border border-gray-200 bg-white">
        {filteredFaqs.map((faq, index) => {
          const open = activeIndex === index;
          return (
            <div
              key={faq._id}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() =>
                  setActiveIndex(open ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-4 text-left"
              >
                <span
                  className={`font-medium ${open ? "text-lime-600" : "text-gray-900"
                    }`}
                >
                  {faq.question}
                </span>
                <Chevron open={open} />
              </button>

              <div
                className={`overflow-hidden px-6 transition-all ${open ? "max-h-96 pb-4" : "max-h-0"
                  }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
