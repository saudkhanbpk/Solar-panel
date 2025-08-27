"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaUserCircle } from "react-icons/fa";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    axios.get("/api/profile").then((res) => {
      setProfile(res.data);
      setFormData(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    const res = await axios.put("/api/profile", formData);
    setProfile(res.data);
    setIsEditing(false);
  };

  if (!profile) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6">
      {/* Profile header */}
      <div className="flex flex-col items-center space-y-3">
        {profile.profileImage ? (
          <img
            src={profile.profileImage}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border"
          />
        ) : (
          <FaUserCircle className="w-28 h-28 text-gray-400" />
        )}

        <h2 className="text-xl font-bold">{profile.name}</h2>
        <p className="text-gray-500">{profile.role}</p>
        <p className="text-sm text-gray-600">{profile.email}</p>
      </div>

      {/* Profile details */}
      <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="block font-medium">Phone</span>
          {isEditing ? (
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border px-2 py-1 rounded-lg"
            />
          ) : (
            <p>{profile.phone}</p>
          )}
        </div>

        <div>
          <span className="block font-medium">Location</span>
          {isEditing ? (
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border px-2 py-1 rounded-lg"
            />
          ) : (
            <p>{profile.location}</p>
          )}
        </div>

        <div>
          <span className="block font-medium">Join Date</span>
          <p>{new Date(profile.joinDate).toLocaleDateString()}</p>
        </div>

        <div>
          <span className="block font-medium">Role</span>
          {isEditing ? (
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border px-2 py-1 rounded-lg"
            />
          ) : (
            <p>{profile.role}</p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-end space-x-4">
        {isEditing ? (
          <>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 border rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-600 text-white rounded-lg"
            >
              Save
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}
