import React, { useState } from 'react';
import { X } from 'lucide-react';

export default function GetQuoteModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        interestedProduct: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
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
                alert("✅ " + data.message);
                setIsOpen(false);
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
                alert("❌ " + data.error);
            }
        } catch (error) {
            console.error("Error submitting quote:", error);
            alert("❌ Something went wrong. Please try again.");
        }
    };


    if (!isOpen) {
        return (
            <div className="flex items-center justify-center">
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Open Quote Form
                </button>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] lg:max-h-[93vh] lg:overflow-hidden  overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                    <h2 className="text-2xl font-bold text-blue-900">Get A Quote</h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Form */}
                <div className="p-6 space-y-4">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                    </div>

                    {/* Address and Phone Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                                Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                required
                                value={formData.address}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                             {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>
                    </div>

                    {/* Interested Product */}
                    <div>
                        <label htmlFor="interestedProduct" className="block text-sm font-medium text-gray-700 mb-1">
                            Interested Product <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="interestedProduct"
                            name="interestedProduct"
                            required
                            value={formData.interestedProduct}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="e.g.Solar pakages System"
                        />
                    </div>

                    {/* Your Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            placeholder="Please provide any additional details about your requirements..."
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            onClick={handleSubmit}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8  rounded-md transition-colors duration-200 uppercase tracking-wide"
                        >
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}