// components/AboutUs.jsx
"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("about");
  // const [visibleTimeline, setVisibleTimeline] = useState(0); // This state is not used, can be removed if not needed elsewhere

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quart",
    });
  }, []);

  const businessUnits = [
    {
      icon: "🏭",
      title: "Manufaktur Miniboiler",
      description:
        "Fokus produksi miniboiler dengan efisiensi 70%, berbahan bakar ramah lingkungan dan mudah dioperasikan",
    },
    {
      icon: "🔧",
      title: "Service & Spare Part",
      description:
        "Teknisi ahli dan layanan purna jual yang mendukung kegiatan produksi UMKM",
    },
    {
      icon: "🌱",
      title: "Renewable Energy",
      description:
        "Pembuatan dan penjualan bahan bakar ramah lingkungan Biomass",
    },
    {
      icon: "💡",
      title: "UKM Green Tech Solution",
      description:
        "Solusi bagi UMKM untuk menikmati teknologi miniboiler tanpa biaya besar",
    },
    {
      icon: "💻",
      title: "IT System",
      description:
        "Sentuhan teknologi digital berbasis website dan smartphone untuk kegiatan usaha",
    },
  ];

  const networkCompanies = [
    {
      name: "Ghava Shankara Nusantara",
      description:
        "Perusahaan induk yang bergerak di bidang manufaktur mesin industri dan solusi teknis.",
      tags: ["Manufaktur", "Teknologi"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "Dahana Rekayasa Nusantara",
      description:
        "Bergerak di bidang pemasaran boiler dan solusi energi untuk UMKM dan industri menengah.",
      tags: ["Pemasaran", "Energi"],
      color: "from-green-500 to-teal-600",
    },
    {
      name: "Syirkah Utama Nusantara",
      description:
        "Bergerak di bidang pengelolaan investasi mesin dengan prinsip kemitraan yang saling menguntungkan.",
      tags: ["Investasi", "Kemitraan"],
      color: "from-orange-500 to-red-600",
    },
  ];

  const timeline = [
    {
      year: "2007",
      title: "Awal Riset",
      description:
        "Tumbuh di lingkungan manufaktur permesinan, selama kuliah fokus pada riset miniboiler hemat energi. Setelah lulus mengembangkan produk berkualitas.",
    },
    {
      year: "2013",
      title: "Pendirian PT",
      description:
        "Berhasil membuat miniboiler hemat, ramah lingkungan, tangguh, dan portable. Mendirikan PT. Bumibraja Nusantara dengan legalisasi resmi.",
    },
    {
      year: "2014",
      title: "Penghargaan",
      description:
        "Juara 1 Kompetisi Hijau INOTEK • Juara 1 Mandiri Young Technopreneur",
    },
    {
      year: "2015",
      title: "Prestasi Nasional",
      description:
        "Penghargaan Gubernur Jawa Barat • Juara 1 Anugerah Inovasi Jawa Barat • Penghargaan dari Kepresidenan RI Joko Widodo • Meluncurkan UKM Green Tech Solution",
    },
    {
      year: "2016",
      title: "Pengakuan Energi",
      description:
        "Penghargaan Energi Pratama ESDM: Kategori Best of the Best • The Most Inspiring",
    },
    {
      year: "2020",
      title: "Ekspansi",
      description:
        "Lebih dari 400 pengguna miniboiler • 15 UMKM bergabung dalam Green Tech Solution",
    },
  ];

  const mediaFeatures = [
    { name: "BIG BANG SHOW", channel: "Metro TV", logo: "📺" },
    { name: "Laptop Si Unyil", channel: "Trans 7", logo: "📺" },
    { name: "Sang Kreator", channel: "TVRI", logo: "📺" },
    { name: "Majalah Listrik Indonesia", channel: "Print Media", logo: "📰" },
    { name: "Tabloid Kontan", channel: "Print Media", logo: "📰" },
  ];

  const handleLihatDiMapsClick = () => {
    window.open("https://g.co/kgs/VpNQFxw", "_blank");
  };

  return (
    <section
      className="relative py-20 lg:py-32 bg-gradient-to-b from-white via-slate-50/50 to-blue-50/30 overflow-hidden"
      id="about"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-slate-100 to-blue-100 rounded-full blur-3xl opacity-30"></div>

        {/* Geometric Patterns */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-blue-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-blue-100 rounded-full opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full mb-6">
            <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3 animate-pulse"></span>
            <span className="text-blue-700 font-semibold text-sm tracking-wide">
              TENTANG KAMI
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-700">
              Bumibraja
            </span>
            <span className="block text-slate-900">Nusantara</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Perusahaan manufaktur teknologi tepat guna{" "}
            <strong>&quot;Miniboiler&quot;</strong> dan{" "}
            <strong>&quot;biomass&quot;</strong> bahan bakar ramah lingkungan,
            yang fokus memenuhi kebutuhan teknologi UMKM dengan efisiensi hingga{" "}
            <strong>70%</strong>.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {[
            { id: "about", name: "Profil", icon: "🏢" },
            { id: "business", name: "Unit Bisnis", icon: "💼" },
            { id: "network", name: "Jaringan", icon: "🤝" },
            { id: "timeline", name: "Perjalanan", icon: "🚀" },
            { id: "media", name: "Media", icon: "📺" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`group flex items-center space-x-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg scale-105"
                  : "bg-white text-slate-600 border-2 border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md"
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.name}</span>
              {activeTab === tab.id && (
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
              )}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto">
          {/* About/Profile Section */}
          {activeTab === "about" && (
            <div className="space-y-12" data-aos="fade-up" data-aos-delay="300">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Vision & Mission */}
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white text-xl">🎯</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        Visi
                      </h3>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Menjadi perusahaan yang terpercaya dan memberikan solusi
                      teknologi berkualitas
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white text-xl">🌟</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        Misi
                      </h3>
                    </div>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      Meningkatkan kesejahteraan yang berkelanjutan bagi seluruh
                      pemangku kepentingan berdasarkan kepedulian dan tanggung
                      jawab sosial
                    </p>
                  </div>
                </div>

                {/* Location & Contact */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Lokasi Kami
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-slate-700 leading-relaxed">
                      Lingkungan Industri Kecil (LIK) No. B2-B5 BPI Logam,
                      <br />
                      Jl. Soekarno Hatta, KM 12,5 Gedebage Bandung 40296
                    </p>
                    <div className="flex items-center space-x-3 text-blue-600 font-semibold">
                      <span className="text-xl">📱</span>
                      <span className="text-lg">089699497272</span>
                    </div>
                    <button
                      onClick={handleLihatDiMapsClick} // Added onClick handler
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <span className="mr-2">🗺️</span>
                      Lihat di Maps
                    </button>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-slate-200">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⚡</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Hemat Energi
                  </h4>
                  <p className="text-slate-600">
                    Efisiensi hingga 70% dengan teknologi gasifikasi terdepan
                  </p>
                </div>
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-slate-200">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🌱</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Ramah Lingkungan
                  </h4>
                  <p className="text-slate-600">
                    Menggunakan bahan bakar biomass yang berkelanjutan
                  </p>
                </div>
                <div className="text-center p-8 bg-white rounded-2xl shadow-lg border border-slate-200">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">👥</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    User Friendly
                  </h4>
                  <p className="text-slate-600">
                    Mudah dioperasikan dan maintenance minimal
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Business Units */}
          {activeTab === "business" && (
            <div className="space-y-8" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Unit Bisnis Kami
                </h3>
                <p className="text-xl text-slate-600">
                  Solusi terintegrasi untuk kebutuhan teknologi UMKM
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {businessUnits.map((unit, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-6">
                      <span className="text-3xl">{unit.icon}</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4">
                      {unit.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {unit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Network Companies */}
          {activeTab === "network" && (
            <div className="space-y-8" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Jaringan Perusahaan
                </h3>
                <p className="text-xl text-slate-600">
                  Kami memiliki beberapa perusahaan yang berfokus pada bidang
                  spesifik untuk memberikan solusi terbaik
                </p>
              </div>

              <div className="space-y-6">
                {networkCompanies.map((company, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
                    data-aos="slide-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1 mb-6 lg:mb-0">
                        <div
                          className={`inline-block px-4 py-2 bg-gradient-to-r ${company.color} text-white rounded-full text-sm font-bold mb-4`}
                        >
                          Grup Perusahaan
                        </div>
                        <h4 className="text-2xl font-bold text-slate-900 mb-3">
                          {company.name}
                        </h4>
                        <p className="text-slate-600 leading-relaxed mb-4">
                          {company.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {company.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="lg:ml-8">
                        <div
                          className={`w-20 h-20 bg-gradient-to-r ${company.color} rounded-full flex items-center justify-center shadow-lg`}
                        >
                          <span className="text-white text-2xl font-bold">
                            {company.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Timeline */}
          {activeTab === "timeline" && (
            <div className="space-y-8" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Perjalanan Kami
                </h3>
                <p className="text-xl text-slate-600">
                  Sejarah perkembangan Bumibraja dari awal hingga kini
                </p>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500"></div>

                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      className="relative flex items-start"
                      data-aos="fade-right"
                      data-aos-delay={index * 100}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full border-4 border-white shadow-lg"></div>

                      {/* Content */}
                      <div className="ml-20 bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 w-full">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div
                            className={`inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-lg font-bold mb-2 md:mb-0`}
                          >
                            {item.year}
                          </div>
                          <h4 className="text-2xl font-bold text-slate-900">
                            {item.title}
                          </h4>
                        </div>
                        <p className="text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Media Features */}
          {activeTab === "media" && (
            <div className="space-y-8" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Fitur di Media
                </h3>
                <p className="text-xl text-slate-600">
                  Liputan dan pengakuan dari berbagai media nasional
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mediaFeatures.map((media, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">{media.logo}</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">
                      {media.name}
                    </h4>
                    <p className="text-slate-600 text-sm">{media.channel}</p>
                  </div>
                ))}
              </div>

              {/* Media Stats */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 mt-12">
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      400+
                    </div>
                    <div className="text-slate-600">Pengguna Miniboiler</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      15+
                    </div>
                    <div className="text-slate-600">UMKM Partner</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      70%
                    </div>
                    <div className="text-slate-600">Efisiensi Energi</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      17+
                    </div>
                    <div className="text-slate-600">Tahun Pengalaman</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Removed the "Siap Bergabung dengan Teknologi Masa Depan?" section as requested */}
      </div>
    </section>
  );
};

export default AboutUs;
