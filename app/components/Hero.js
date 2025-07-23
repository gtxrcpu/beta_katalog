// components/HeroSection.jsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quart",
    });

    setIsVisible(true);
  }, []);

  const handleProgressHover = () => {
    setProgressWidth(100);
  };

  const handleProgressLeave = () => {
    setProgressWidth(0);
  };

  const openWhatsApp = (message) => {
    const phoneNumber = "6287722322221"; // Nomor WhatsApp yang digunakan
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    // Section utama, tinggi diatur lebih kompak
    <section className="relative min-h-[75vh] md:min-h-[85vh] bg-gradient-to-br from-gray-50 to-white overflow-hidden pt-16 pb-8 md:pt-20">
      {/* Background Elements - Responsive (opacity dikurangi biar tidak terlalu mencolok) */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-20 md:top-40 -right-20 md:-right-40 w-48 h-48 md:w-96 md:h-96 bg-blue-50 rounded-full opacity-20"></div>
        <div className="absolute -bottom-20 md:-bottom-40 -left-20 md:-left-40 w-48 h-48 md:w-96 md:h-96 bg-gray-100 rounded-full opacity-20"></div>{" "}
        {/* Warna background diubah lebih kalem */}
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Mobile Layout (Stack) - Padding vertikal disesuaikan */}
        <div className="block lg:hidden py-8">
          {" "}
          {/* Mengurangi py */}
          {/* Mobile Image First - Hero Style */}
          <div className="relative mb-6" data-aos="fade-up">
            {" "}
            {/* Mengurangi mb */}
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/arjuna.jpg" // Ganti dengan gambar yang relevan
                alt="Mini Boiler dan Briket Serbuk Kayu Dahana Rekayasa Nusantara"
                fill
                className="object-cover"
                priority
              />

              {/* Mobile Overlay with Key Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

              {/* Mobile Content Overlay */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">
                    Solusi UMKM Efisien & Ramah Lingkungan
                  </span>
                </div>

                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  Dahana Rekayasa Nusantara:
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-200">
                    {" "}
                    {/* Gradasi lebih kalem */}
                    Mini Boiler & Briket
                  </span>
                </h1>

                {/* Mobile Quick Stats */}
                <div className="flex space-x-5 mt-3">
                  <div className="text-center">
                    <div className="text-lg font-bold">30%+</div>
                    <div className="text-xs opacity-80">Hemat Biaya</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">50+</div>
                    <div className="text-xs opacity-80">UMKM Partner</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold">24/7</div>
                    <div className="text-xs opacity-80">Dukungan Teknis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Content */}
          <div className="space-y-6 text-center">
            {/* Mobile Description */}
            <p
              className="text-base text-gray-600 leading-relaxed max-w-md mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Menyediakan mini boiler dan briket serbuk kayu berkualitas, solusi
              hemat energi untuk produktivitas UMKM Anda.
            </p>

            {/* Mobile Features - Horizontal Scroll */}
            <div
              className="flex space-x-4 overflow-x-auto pb-3 px-4 -mx-4 scrollbar-hide"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {[
                { text: "Hemat Energi" },
                { text: "Ramah Lingkungan" },
                { text: "Mudah Perawatan" },
                { text: "Kualitas Terjamin" },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 bg-white rounded-lg p-3 shadow-sm border border-gray-100 text-center min-w-[110px]"
                >
                  <div className="text-sm font-medium text-gray-700">
                    {feature.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile CTA Buttons - Stacked (Animasi dipertahankan) */}
            <div
              className="space-y-3 px-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {/* Primary CTA - Full Width */}
              <a
                href="#products"
                className="relative w-full inline-flex items-center justify-center py-3 overflow-hidden font-semibold text-blue-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-lg group hover:shadow-xl"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Lihat Produk Kami
                </span>
                <span className="relative invisible">Lihat Produk Kami</span>
              </a>

              {/* Secondary CTA */}
              <button
                className="relative w-full py-3 font-semibold text-gray-700 bg-transparent border-2 border-gray-300 rounded-full transition-all duration-300 hover:border-gray-900 hover:text-gray-900 overflow-hidden group"
                onMouseEnter={handleProgressHover}
                onMouseLeave={handleProgressLeave}
                onClick={() =>
                  openWhatsApp(
                    "Halo, saya ingin berkonsultasi mengenai solusi mini boiler dan briket kayu untuk UMKM saya. Bisakah Anda memberikan informasi lebih lanjut?"
                  )
                }
              >
                <div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-gray-400 transition-all duration-500 ease-out" // Gradasi lebih kalem
                  style={{ width: `${progressWidth}%` }}
                ></div>

                <span className="relative z-10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                  Konsultasi Gratis
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout (Side by Side) - Padding vertikal disesuaikan */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-10 items-center py-12">
          {" "}
          {/* Mengurangi py */}
          {/* Desktop Left Content */}
          <div className="space-y-6 lg:pr-6">
            {/* Badge */}
            <div data-aos="fade-up">
              <span className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                Solusi Terdepan untuk UMKM Indonesia
              </span>
            </div>

            {/* Headline (Ukuran & Garis Bawah Disesuaikan) */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Dahana Rekayasa Nusantara:
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-gray-500 relative pb-2">
                  {" "}
                  {/* **PERUBAHAN DISINI: Tambah pb-2** */}
                  Mini Boiler & Briket Kayu
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-gray-400 transition-all duration-1000 ${
                      isVisible ? "w-full" : "w-0"
                    }`}
                  ></div>
                </span>
              </h1>
            </div>

            {/* Description (Ukuran Disesuaikan) */}
            <p
              className="text-base text-gray-600 leading-relaxed max-w-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Kami menyediakan solusi mini boiler dan pasokan briket serbuk kayu
              berkualitas tinggi, dirancang khusus untuk meningkatkan efisiensi
              dan keberlanjutan operasional UMKM Anda.
            </p>

            {/* Desktop Features (Spacing Disesuaikan) */}
            <div
              className="grid grid-cols-2 gap-3"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {[
                { text: "Efisiensi Energi Unggul" },
                { text: "Bahan Bakar Terbarukan" },
                { text: "Pemasangan Cepat" },
                { text: "Dukungan Teknis Penuh" },
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2 group">
                  <span className="text-blue-500 text-lg group-hover:scale-110 transition-transform duration-200">
                    &#10003;
                  </span>{" "}
                  {/* Checkmark icon for clean look */}
                  <span className="text-gray-700 text-sm font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Desktop CTA Buttons (Animasi dipertahankan, Spacing Disesuaikan) */}
            <div
              className="flex flex-wrap gap-4 pt-3"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {/* Get Started Button */}
              <a
                href="#products"
                className="relative inline-flex items-center justify-center p-4 px-8 py-4 overflow-hidden font-semibold text-blue-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-lg group hover:shadow-xl"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Lihat Solusi
                </span>
                <span className="relative invisible">Lihat Solusi</span>
              </a>

              {/* Progress Bar Button */}
              <button
                className="relative px-8 py-4 font-semibold text-gray-700 bg-transparent border-2 border-gray-300 rounded-full transition-all duration-300 hover:border-gray-900 hover:text-gray-900 overflow-hidden group"
                onMouseEnter={handleProgressHover}
                onMouseLeave={handleProgressLeave}
                onClick={() =>
                  openWhatsApp(
                    "Halo, saya tertarik dengan penawaran mini boiler dan briket kayu dari Dahana Rekayasa Nusantara. Mohon informasinya lebih lanjut."
                  )
                }
              >
                <div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-gray-400 transition-all duration-500 ease-out" // Gradasi lebih kalem
                  style={{ width: `${progressWidth}%` }}
                ></div>

                <span className="relative z-10 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                  Dapatkan Penawaran
                </span>
              </button>
            </div>
          </div>
          {/* Desktop Right Visual */}
          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            {/* Main Image Container */}
            <div className="relative group">
              {/* Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <Image
                  src="/arjuna.jpg" // Ganti dengan gambar yang relevan
                  alt="Mini Boiler Dahana untuk Industri UMKM"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating Info Card */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl border border-gray-100 p-4 backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Instalasi
                    </div>
                    <div className="text-xs text-gray-500">
                      Lingkungan Industri Kecil Bandung
                    </div>
                  </div>
                </div>
              </div>

              {/* Specs Card */}
              <div className="absolute -top-5 -right-5 bg-white rounded-xl shadow-xl border border-gray-100 p-4 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">95%+</div>
                  <div className="text-xs text-gray-500">
                    Efisiensi Bahan Bakar
                  </div>
                </div>
              </div>

              {/* Background Accent (warna lebih kalem) */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-gray-100 rounded-3xl -z-10 opacity-50"></div>
            </div>
            {/* Subtle Decorative Elements (warna lebih kalem) */}
            <div className="absolute top-8 -left-4 w-16 h-16 border-2 border-blue-200 rounded-full opacity-30"></div>
            <div className="absolute bottom-8 -right-4 w-14 h-14 border-2 border-gray-200 rounded-full opacity-30"></div>{" "}
            {/* Warna diubah jadi gray */}
          </div>
        </div>

        {/* Trust Indicators - Responsive (Spacing Disesuaikan) */}
        <div
          className="border-t border-gray-200 pt-6 pb-6 lg:pt-10 lg:pb-10 mt-6 lg:mt-0"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="grid grid-cols-3 gap-4 lg:gap-8 text-center">
            <div>
              <div className="text-xl lg:text-2xl font-bold text-gray-900">
                15+
              </div>
              <div className="text-gray-600 text-xs lg:text-sm">
                Tahun Pengalaman
              </div>
            </div>
            <div>
              <div className="text-xl lg:text-2xl font-bold text-gray-900">
                500+
              </div>
              <div className="text-gray-600 text-xs lg:text-sm">
                Proyek Terpasang
              </div>
            </div>
            <div>
              <div className="text-xl lg:text-2xl font-bold text-gray-900">
                Kualitas
              </div>
              <div className="text-gray-600 text-xs lg:text-sm">
                Teruji & Terpercaya
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
