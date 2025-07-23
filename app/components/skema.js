// components/FlexibilitySchemeSection.jsx
"use client";

import { useState } from "react";

const FlexibilitySchemeSection = () => {
  const [activeScheme, setActiveScheme] = useState(0);

  const schemes = [
    {
      id: 1,
      title: "Skema SEBO",
      subtitle: "Sewa Boiler Operasional",
      icon: "⚡",
      bgColor: "bg-blue-50",
      iconColor: "bg-blue-500",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      description: "Sewa boiler dengan pembayaran bulanan yang fleksibel.",
      benefits: [
        { label: "Modal Awal", value: "Minimal", color: "text-green-600" },
        { label: "Cash Flow", value: "Stabil", color: "text-blue-600" },
        { label: "Risk", value: "Low", color: "text-green-600" },
      ],
    },
    {
      id: 2,
      title: "Deposit Mesin",
      subtitle: "Boiler + Briket Package",
      icon: "🤝",
      bgColor: "bg-gray-50",
      iconColor: "bg-orange-100",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
      description: "Gunakan mesin kami dengan komitmen pembelian briket.",
      benefits: [
        { label: "Fuel Cost", value: "Stabil", color: "text-blue-600" },
        { label: "Quality", value: "Terjamin", color: "text-green-600" },
        { label: "Supply", value: "Aman", color: "text-green-600" },
      ],
    },
    {
      id: 3,
      title: "Jual Putus",
      subtitle: "Full Ownership",
      icon: "🏆",
      bgColor: "bg-purple-50",
      iconColor: "bg-purple-100",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
      description: "Kepemilikan penuh mesin dengan pembayaran satu kali.",
      benefits: [
        { label: "Ownership", value: "100%", color: "text-green-600" },
        { label: "Fleksibilitas", value: "Maksimal", color: "text-blue-600" },
        { label: "ROI", value: "Tinggi", color: "text-green-600" },
      ],
    },
  ];

  const openWhatsApp = (scheme, action) => {
    let message;

    if (action === "pilih") {
      message = `Halo Syirkah Utama Nusantara,

Saya tertarik untuk memilih paket ${scheme.title} (${scheme.subtitle}).

Mohon informasi lebih lanjut mengenai:
• Persyaratan dan ketentuan
• Proses aplikasi dan timeline
• Detail harga dan pembayaran
• Jadwal instalasi

Data Perusahaan:
Nama: [Isi nama Anda]
Perusahaan: [Isi nama perusahaan]  
Lokasi: [Isi lokasi]
Kebutuhan kapasitas: [Isi kebutuhan steam]
Waktu operasi: [Isi jam operasi per hari]

Terima kasih.`;
    } else {
      message = `Halo Syirkah Utama Nusantara,

Saya ingin berkonsultasi mengenai skema pembiayaan ${scheme.title} yang sesuai dengan kondisi bisnis saya.

Mohon bantuan untuk:
• Analisis kebutuhan steam boiler
• Rekomendasi skema pembiayaan terbaik  
• Penjelasan detail setiap skema
• Proposal penawaran

Data Perusahaan:
Nama: [Isi nama Anda]
Perusahaan: [Isi nama perusahaan]
Lokasi: [Isi lokasi]  
Jenis industri: [Isi jenis usaha]
Kebutuhan steam: [Isi estimasi kebutuhan]

Terima kasih.`;
    }

    const whatsappLink = `https://api.whatsapp.com/send?phone=6289699497272&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  const openGeneralConsultation = () => {
    const message = `Halo Syirkah Utama Nusantara,

Saya ingin berkonsultasi gratis mengenai pemilihan skema pembiayaan yang tepat untuk kebutuhan steam boiler perusahaan saya.

Mohon bantuan untuk:
• Analisis kondisi bisnis dan kebutuhan
• Rekomendasi skema pembiayaan optimal
• Perbandingan SEBO, Deposit Mesin, dan Jual Putus
• Proposal penawaran terbaik

Data Perusahaan:
Nama: [Isi nama Anda]
Perusahaan: [Isi nama perusahaan]
Lokasi: [Isi lokasi]
Jenis industri: [Isi jenis usaha]
Kebutuhan steam: [Isi estimasi kebutuhan]
Budget range: [Isi range budget]

Terima kasih.`;

    const whatsappLink = `https://api.whatsapp.com/send?phone=6289699497272&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="relative py-20 lg:py-32 bg-white" id="schemes">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Flexible Payment Options
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Fleksibilitas
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              Skema Pembiayaan
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pilih skema pembiayaan yang sesuai dengan kebutuhan dan kondisi
            finansial perusahaan Anda.
          </p>
        </div>

        {/* Schemes Grid - Fixed text overflow */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {schemes.map((scheme, idx) => (
            <div
              key={scheme.id}
              className={`${
                scheme.bgColor
              } rounded-3xl p-6 text-center border-2 ${
                activeScheme === idx ? "border-blue-400" : "border-transparent"
              } cursor-pointer`}
              onClick={() => setActiveScheme(idx)}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 ${scheme.iconColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}
              >
                <span className="text-2xl">{scheme.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {scheme.title}
              </h3>
              <p className="text-blue-600 text-sm font-medium mb-4">
                {scheme.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 px-2">
                {scheme.description}
              </p>

              {/* Benefits Grid - Fixed sizing */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {scheme.benefits.map((benefit, benefitIdx) => (
                  <div
                    key={benefitIdx}
                    className="bg-white rounded-lg p-3 text-center min-h-[70px] flex flex-col justify-center"
                  >
                    <div
                      className={`text-sm font-bold ${benefit.color} mb-1 leading-tight`}
                    >
                      {benefit.value}
                    </div>
                    <div className="text-xs text-gray-600 leading-tight">
                      {benefit.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openWhatsApp(scheme, "pilih");
                  }}
                  className={`w-full ${scheme.buttonColor} text-white py-3 px-4 rounded-xl font-semibold text-sm`}
                >
                  Pilih Paket
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openWhatsApp(scheme, "konsultasi");
                  }}
                  className="w-full bg-white text-gray-700 py-3 px-4 rounded-xl font-medium text-sm border border-gray-200 hover:bg-gray-50"
                >
                  Konsultasi
                </button>
              </div>

              {/* Active Indicator Circle */}
              {activeScheme === idx && (
                <div className="flex justify-center mt-4">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl p-8 lg:p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Tidak Yakin Skema Mana yang Tepat?
            </h3>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Konsultasi gratis dengan tim ahli kami untuk mendapatkan
              rekomendasi skema pembiayaan yang paling sesuai.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openGeneralConsultation}
                className="bg-white text-gray-900 py-4 px-8 rounded-xl font-semibold text-lg hover:bg-gray-100"
              >
                <span className="flex items-center justify-center">
                  Konsultasi Gratis
                  <span className="ml-2">💬</span>
                </span>
              </button>

              <button
                onClick={() => {
                  const whatsappLink = `https://api.whatsapp.com/send?phone=6289699497272&text=${encodeURIComponent(
                    "Halo Syirkah Utama Nusantara, saya ingin mengetahui lebih lanjut tentang produk dan layanan Anda. Terima kasih."
                  )}`;
                  window.open(whatsappLink, "_blank");
                }}
                className="border-2 border-white text-white py-4 px-8 rounded-xl font-semibold text-lg hover:bg-white/10"
              >
                <span className="flex items-center justify-center">
                  WhatsApp Kami
                  <span className="ml-2">📱</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexibilitySchemeSection;
