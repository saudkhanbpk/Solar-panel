'use client';
import { React, useState } from 'react';
import swal from 'sweetalert';

const AppointmentForm = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    interestedProduct: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };


  const validateForm = () => {
    let newErrors = {};

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // return true if no errors
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    try {
      const res = await fetch("http://localhost:3000/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        swal({
          title: "Good job!",
          text: "Pakage added successfully!",
          icon: "success",
          button: true,
          timer: 2000
        })
        setFormData({
          name: "",
          email: "",
          address: "",
          phone: "",
          interestedProduct: "",
          message: "",
        });
        setErrors({});
      } else {
        swal({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          button: true,
          timer: 2000
        });

      }
    } catch (error) {
      console.error("Error submitting quote:", error);
      alert("❌ Something went wrong. Please try again.");
    }
  };


  return (
    <div className="lg:sticky lg:top-24">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <h3 className="text-xl font-bold text-blue-900">Select Interested Products</h3>
        </div>

        <div className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

          </div>

          <div>
            <input
              type="address"
              name="address"
              placeholder="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}

          </div>

          <div>
            <input
              type="interestedProduct"
              name="interestedProduct"
              placeholder="interestedProduct"
              value={formData.interestedProduct}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none h-24"
            />
          </div>

          <button
            onClick={handleSubmit}
            type="button"
            className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300 uppercase tracking-wider"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;