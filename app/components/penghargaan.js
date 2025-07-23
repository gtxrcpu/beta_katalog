"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutPenghargaan = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">
        Penghargaan Kami
      </h1>
      <p className="text-lg text-gray-600 mb-10 text-center">
        Kami bangga telah menerima berbagai penghargaan atas dedikasi dan
        layanan kami. Berikut adalah pencapaian-pencapaian yang kami raih.
      </p>

      <div className="flex flex-row space-x-8 overflow-hidden">
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src="/done.gif" // Ganti dengan path gambar piala
              alt="Trophy"
              className="w-24 h-32 mb-4"
            />
            <h2 className="text-2xl font-semibold">Juara {index + 1}</h2>
            <p className="text-gray-600">Tahun {2023 - index}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutPenghargaan;
