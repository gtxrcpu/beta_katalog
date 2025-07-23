"use client";

import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaUser, FaLock } from "react-icons/fa";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/login`,
        formData
      );
      console.log(response.data);

      // Jika berhasil, simpan token di localStorage atau sessionStorage
      localStorage.setItem("user", JSON.stringify(response.data.user));

      // Redirect atau tindakan lain setelah login berhasil
      window.location.href = "/dashboard"; // Ganti dengan rute dashboard Anda
    } catch (err) {
      console.error(err);
      setError("Invalid credentials");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 bg-white shadow-2xl rounded-2xl p-10 bg-opacity-90"
      >
        <div className="text-center">
          <motion.h2
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-extrabold text-gray-800"
          >
            Welcome Back
          </motion.h2>
          <p className="mt-2 text-sm text-gray-600">Login to continue</p>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <input
                id="username"
                name="username"
                type="text"
                required
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 transition duration-300"
                placeholder="Username"
              />
              <FaUser className="absolute right-4 top-4 text-gray-500" />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border focus:ring-2 transition duration-300"
                placeholder="Password"
              />
              <FaLock className="absolute right-4 top-4 text-gray-500" />
            </div>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold uppercase tracking-wider transition duration-300"
            style={{
              background: `linear-gradient(to right, #3B82F6, #10B981)`,
            }}
          >
            Login
          </motion.button>
        </form>

        <div className="mt-6 text-center text-gray-600">
          <p>
            Forgot your password?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Reset it
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
