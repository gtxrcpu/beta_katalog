// pages/benefits.js

"use client";

import React from "react";
import Link from "next/link";

const Benefits = () => {
  const benefitsData = [
    {
      icon: "/syariah.png",
      title: "Berbasis Syariah",
      description:
        "Seluruh produk dan layanan kami dikembangkan dengan prinsip syariah yang kuat dan transparan.",
    },
    {
      icon: "/team.png",
      title: "Tim Profesional",
      description:
        "Didukung oleh tim ahli berpengalaman di bidangnya masing-masing untuk memberikan solusi terbaik.",
    },
    {
      icon: "/teruji.png",
      title: "Produk Teruji",
      description:
        "Semua produk melalui proses pengujian ketat untuk memastikan kualitas dan keandalan.",
    },
    {
      icon: "/garansi.png",
      title: "Garansi & Layanan Purna Jual",
      description:
        "Kami memberikan garansi produk dan layanan purna jual yang lengkap untuk kepuasan pelanggan.",
    },
    {
      icon: "/fasilitas.png",
      title: "Fasilitas Modern",
      description:
        "Didukung oleh fasilitas produksi modern dengan teknologi terkini untuk menjamin kualitas produk.",
    },
    {
      icon: "/echo.png",
      title: "Ramah Lingkungan",
      description:
        "Proses produksi yang ramah lingkungan dengan efisiensi energi dan pengelolaan limbah yang bertanggung jawab.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Kenapa Kami?</h2>
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl p-10">
          <p className="text-xl text-gray-600 mb-6">
            Kami berkomitmen untuk memberikan kualitas yang tiada tanding dan
            layanan luar biasa yang disesuaikan dengan kebutuhan Anda.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg border border-blue-500 p-4 shadow-md transition-transform transform hover:scale-105 text-center"
              >
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="h-20 mb-6"
                />
                <h3 className="font-semibold text-lg">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="#product">
              {" "}
              {/* Ganti button menjadi Link */}
              <button className="bg-purple-600 text-white rounded-md px-6 py-3 text-lg font-semibold transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                Mulai Sekarang
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
