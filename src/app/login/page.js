"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import swal from 'sweetalert';


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();


      if (res.ok && data.token) {
        // ✅ Save token to localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
        swal({
          title: "Good job!",
          text: "Login successfully!",
          icon: "success",
          button: false,   
          timer: 2000      
        }).then(() => {
          router.push("/admin"); 
        });
      } else {
        setError(data?.message || "Login failed");
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md border border-gray-200">

        {/* Logo or Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          GO GREEN
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Sign in to continue
        </p>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
                         focus:ring-2 focus:ring-green-600 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md 
                         focus:ring-2 focus:ring-green-600 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white 
                       py-2 px-4 rounded-md font-semibold transition duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
