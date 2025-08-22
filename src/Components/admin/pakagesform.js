'use client'
import React, { useState } from "react";

const SolarSystemForm = () => {
  const [input , setinput]= useState();
  const [formData, setFormData] = useState({
    id: "",
    capacity: "",
    name: "",
    model: "",
    // details: [],
    batteryNote: "",
    priceFrom: "",
    priceTo: ""
  });

  // handle text inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle details array
  const handleDetailChange = (index, value) => {
    const newDetails = [...formData.details];
    newDetails[index] = value;
    setFormData({ ...formData, details: newDetails });
  };

  // add new detail field
  const addDetail = () => {
    setFormData({ ...formData, details: [...formData.details, ""] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
    id: "",
    capacity: "",
    name: "",
    model: "",
    batteryNote: "",
    priceFrom: "",
    priceTo: ""
  });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg space-y-4">
      <h2 className="text-2xl font-bold text-center mb-4">Solar System Form</h2>

      <input
        type="number"
        name="id"
        placeholder="ID"
        value={formData.id}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="capacity"
        placeholder="Capacity (e.g. 3kW)"
        value={formData.capacity}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="name"
        placeholder="System Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="model"
        placeholder="Model"
        value={formData.model}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      {/* <div>
        <label className="font-semibold">Details:</label>
        {formData.details.map((detail, index) => (
          <input
            key={index}
            type="text"
            value={detail}
            placeholder={`Detail ${index + 1}`}
            onChange={(e) => handleDetailChange(index, e.target.value)}
            className="w-full border p-2 rounded my-1"
          />
        ))}
        <button
          type="button"
          onClick={addDetail}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          + Add Detail
        </button>
      </div> */}

      <input
        type="text"
        name="batteryNote"
        placeholder="Battery Note"
        value={formData.batteryNote}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="priceFrom"
        placeholder="Price From"
        value={formData.priceFrom}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        type="text"
        name="priceTo"
        placeholder="Price To"
        value={formData.priceTo}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
      >
        Save
      </button>
    </form>
  );
};

export default SolarSystemForm;
