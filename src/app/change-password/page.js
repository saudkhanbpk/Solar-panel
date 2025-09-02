"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const router =useRouter();

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const email = localStorage.getItem("email");

      const res = await axios.post(
        `/api/change-password?email=${email}`,
        {
          oldPassword,
          newPassword,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setMessage(res.data.message);
    
    if(res.status===200){
      router.push("/admin");
    }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || "Error updating password");
      } else {
        setMessage("Something went wrong!");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 mb-8 p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Change Password</h2>
      <form onSubmit={handleChangePassword} className="space-y-4">
        <div>
          <label className="block mb-1">Old Password</label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block mb-1">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Update Password
        </button>
      </form>

      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
    </div>
  );
}
