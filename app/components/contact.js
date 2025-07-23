// components/ContactCTA.jsx
"use client";

import { useState } from "react";

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    location: "",
    needs: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Template otomatis seperti product section
    const message = `Halo Syirkah Utama Nusantara,

Saya tertarik dengan produk dan layanan yang Anda tawarkan melalui website.

📋 DATA PERUSAHAAN:
👤 Nama: ${formData.name || "[Belum diisi]"}
🏢 Perusahaan: ${formData.company || "[Belum diisi]"}
📱 No. Telepon: ${formData.phone || "[Belum diisi]"}
📍 Lokasi: ${formData.location || "[Belum diisi]"}
⚙️ Kebutuhan: ${formData.needs || "[Belum diisi]"}

🔥 MOHON INFORMASI:
✅ Konsultasi gratis kebutuhan steam boiler
✅ Rekomendasi produk miniboiler yang sesuai
✅ Pilihan skema pembiayaan (SEBO/Deposit/Jual Putus)
✅ Proposal penawaran dan timeline
✅ Jadwal kunjungan/survey lokasi

Saya siap untuk melanjutkan diskusi lebih lanjut. Terima kasih atas respon cepatnya!

Salam,
${formData.name || "[Nama Anda]"}
${formData.company || "[Nama Perusahaan]"}`;

    const whatsappLink = `https://api.whatsapp.com/send?phone=6289699497272&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");

    // Reset form after submit
    setFormData({
      name: "",
      company: "",
      phone: "",
      location: "",
      needs: "",
    });
  };

  const handleDirectWhatsApp = () => {
    const message = `Halo Syirkah Utama Nusantara,

Saya ingin mengetahui lebih lanjut tentang produk dan layanan yang Anda tawarkan.

🔥 YANG SAYA BUTUHKAN:
✅ Informasi lengkap miniboiler Syirkah Utama
✅ Konsultasi gratis kebutuhan steam boiler
✅ Pilihan skema pembiayaan yang fleksibel
✅ Penjelasan program UKM Green Tech Solution
✅ Proposal penawaran terbaik

Mohon dibantu untuk konsultasi lebih lanjut.

Terima kasih!`;

    const whatsappLink = `https://api.whatsapp.com/send?phone=6289699497272&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <section
      className="relative py-20 bg-gradient-to-br from-slate-900 to-blue-900 overflow-hidden"
      id="contact"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          className="w-full h-full"
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Hubungi Kami
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              Konsultasi gratis untuk kebutuhan steam boiler perusahaan Anda
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Form Konsultasi
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:bg-white/30"
                    placeholder="Masukkan nama lengkap Anda"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Nama Perusahaan *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:bg-white/30"
                    placeholder="Masukkan nama perusahaan"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    No. Telepon/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:bg-white/30"
                    placeholder="Contoh: 081234567890"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Lokasi *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:bg-white/30"
                    placeholder="Kota/Kabupaten"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Kebutuhan & Detail Usaha *
                  </label>
                  <textarea
                    name="needs"
                    value={formData.needs}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-blue-400 focus:bg-white/30 resize-none"
                    placeholder="Jelaskan jenis usaha dan kebutuhan steam boiler Anda (contoh: industri tahu, kapasitas produksi, jam operasi, dll)"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-xl text-lg font-bold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 hover:from-green-600 hover:to-emerald-700"
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-3 text-xl">💬</span>
                    Kirim ke WhatsApp
                  </span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Informasi Kontak
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Alamat Workshop
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Lingkungan Industri Kecil (LIK) No. B2-B5 BPI Logam
                        <br />
                        Jl. Soekarno Hatta KM 12,5, Gedebage
                        <br />
                        Bandung 40296, Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📱</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        WhatsApp
                      </h4>
                      <p className="text-slate-300 text-sm">089699497272</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Email</h4>
                      <p className="text-slate-300 text-sm">
                        syirkahutamanusantara@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Button */}
                <div className="mt-8">
                  <button
                    onClick={handleDirectWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300"
                  >
                    <span className="flex items-center justify-center">
                      <span className="mr-2">💬</span>
                      Chat Langsung di WhatsApp
                    </span>
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Mengapa Pilih Kami?
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">400+</div>
                    <div className="text-slate-400 text-sm">Pengguna Aktif</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">70%</div>
                    <div className="text-slate-400 text-sm">
                      Efisiensi Energi
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">17+</div>
                    <div className="text-slate-400 text-sm">
                      Tahun Pengalaman
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-slate-400 text-sm">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
