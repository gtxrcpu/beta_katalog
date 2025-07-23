// components/product.js
"use client";

import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Product = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isExpanded, setIsExpanded] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Tambahkan useRef untuk referensi dropdown
  const dropdownRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quart",
    });
  }, []);

  // Efek untuk mendeteksi klik di luar dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    // Tambahkan event listener saat komponen mount
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Bersihkan event listener saat komponen unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]); // Bergantung pada isDropdownOpen untuk re-render event listener

  const products = [
    // BOILER PRODUCTS
    {
      id: 1,
      title: "GATOT KACA",
      detail: "300 kg uap/jam",
      image: "/boiler.jpg",
      capacity: "300 kg/hr",
      pressure: "1.5-2.0 bar",
      efficiency: "85%",
      category: "boiler",
      price: "Rp 145.000.000",
      applications: ["Small Industry", "Food Processing", "Steam Cleaning"],
      specifications: [
        "Kapasitas boiler: 300 kg uap/jam",
        "Sistem boiler: Downdraft Gassification",
        "Dimensi: Panjang total: ±3000 mm, Lebar total: ±2100 mm, Tinggi total: ±2300 mm",
        "Berat total: 1.300 kg",
        "Kapasitas air: 450 liter",
        "Tekanan Operasi: 1.5 - 2.0 bar",
        "Bahan Bakar: Briket kayu, briket batubara, batu bara, kayu, cangkang sawit",
        "Konsumsi Bahan Bakar: 40-60 kg/jam briket kayu",
        "Blower: Intermediate Turbo Blower 3 phase 3000 Watt",
        "Pompa: Multistage Pump 600 Watt",
        "Shell: Plat Stainless 304 tebal 6 mm",
        "Tube: Pipa Stainless sch 304 sch 10",
        "Insulation: Glasswool 40 mm; Stainless 1,5 mm mirror",
      ],
      perks: [
        { description: "Economizer (Stainless)", enabled: true },
        { description: "Panel Box (Stainless)", enabled: true },
        { description: "Garansi 2 Tahun", enabled: true },
      ],
      badge: "Best Seller",
      popular: true,
    },
    {
      id: 2,
      title: "BIMA",
      detail: "500 kg uap/jam",
      image: "/bima.jpg",
      capacity: "500 kg/hr",
      pressure: "1.5-2.0 bar",
      efficiency: "88%",
      category: "boiler",
      price: "Rp 235.000.000",
      applications: ["Medium Industry", "Palm Oil Mill", "Manufacturing"],
      specifications: [
        "Kapasitas boiler: 500 kg uap/jam",
        "Sistem boiler: Downdraft Gassification",
        "Dimensi: Panjang total: ±4000 mm, Lebar total: ±2500 mm, Tinggi total: ±2500 mm",
        "Berat total: 2400 kg",
        "Kapasitas air: 900 liter",
        "Tekanan Operasi: 1.5 - 2.0 bar",
        "Bahan Bakar: Briket kayu, briket batubara, batu bara, kayu, cangkang sawit",
        "Konsumsi Bahan Bakar: 70-90 kg/jam briket kayu",
        "Blower: Centrifugal Backward 3 phase 7.5 HP",
        "Pompa: Multistage Pump 1200 Watt",
        "Shell: Plat Stainless 304 tebal 8 mm",
        "Tube: Pipa Stainless sch 304 sch 10",
        "Insulation: Glasswool 50 mm; Stainless 1,5 mm mirror",
      ],
      perks: [
        { description: "Economizer (Stainless)", enabled: true },
        { description: "Panel Box (Stainless)", enabled: true },
        { description: "Fully Automatic Feeding Water", enabled: true },
        { description: "Garansi 2 Tahun", enabled: true },
      ],
      badge: "Industrial",
      popular: true,
    },

    // BRIKET CENGKEH PRODUCTS
    {
      id: 3,
      title: "Briket Cengkeh Premium",
      detail: "Kualitas Super untuk Rokok Kretek",
      image: "/briket-cengkeh.jpg",
      capacity: "20 kg/pack",
      pressure: "High Density",
      efficiency: "95%",
      category: "briket-cengkeh",
      price: "Rp 125.000/pack",
      applications: ["Industri Rokok", "Pabrik Kretek", "Distributor Tembakau"],
      specifications: [
        "Bahan Baku: 100% Cengkeh Pilihan",
        "Kadar Air: Maksimal 8%",
        "Density: 1.2-1.4 g/cm³",
        "Ash Content: <2%",
        "Caloric Value: 4.500-4.800 kcal/kg",
        "Ukuran: 5x5x2 cm",
        "Kemasan: Karung Goni 20 kg",
        "Daya Tahan: 2 tahun dalam kondisi kering",
        "Tidak menggunakan bahan kimia berbahaya",
        "Proses produksi higienis dan modern",
        "Sertifikat BPOM dan Halal MUI",
      ],
      perks: [
        { description: "Aroma Cengkeh Natural", enabled: true },
        { description: "Pembakaran Merata", enabled: true },
        { description: "Tanpa Bahan Kimia", enabled: true },
        { description: "Sertifikat Halal", enabled: true },
      ],
      badge: "Premium Quality",
      popular: true,
    },
    {
      id: 4,
      title: "Briket Cengkeh Ekonomis",
      detail: "Solusi Hemat untuk Produksi Massal",
      image: "/briket-cengkeh-ekonomis.jpg",
      capacity: "25 kg/pack",
      pressure: "Standard Density",
      efficiency: "90%",
      category: "briket-cengkeh",
      price: "Rp 95.000/pack",
      applications: ["UMKM Rokok", "Home Industry", "Pedagang Eceran"],
      specifications: [
        "Bahan Baku: Cengkeh Grade B",
        "Kadar Air: Maksimal 10%",
        "Density: 1.0-1.2 g/cm³",
        "Ash Content: <3%",
        "Caloric Value: 4.200-4.500 kcal/kg",
        "Ukuran: 4x4x2 cm",
        "Kemasan: Karung Plastik 25 kg",
        "Daya Tahan: 18 bulan dalam kondisi kering",
        "Proses kompresi otomatis",
        "Quality control ketat",
      ],
      perks: [
        { description: "Harga Terjangkau", enabled: true },
        { description: "Kualitas Stabil", enabled: true },
        { description: "Kemasan Praktis", enabled: true },
        { description: "Ready Stock", enabled: true },
      ],
      badge: "Best Value",
      popular: false,
    },

    // ELEKTRONIK PRODUCTS
    {
      id: 5,
      title: "Panel Kontrol Otomatis",
      detail: "Sistem Kontrol Cerdas untuk Boiler",
      image: "/panel-kontrol.jpg",
      capacity: "Multi Unit",
      pressure: "Auto Control",
      efficiency: "99%",
      category: "elektronik",
      price: "Rp 25.000.000",
      applications: [
        "Boiler Control",
        "Industrial Automation",
        "Process Control",
      ],
      specifications: [
        "Display: HMI Touch Screen 10 inch",
        "Processor: Industrial PLC Siemens/Schneider",
        "Input: 16 Digital + 8 Analog",
        "Output: 12 Relay + 4 Analog",
        "Communication: Modbus RTU/TCP, Ethernet",
        "Power Supply: 24VDC, 5A dengan backup battery",
        "Enclosure: IP65 Stainless Steel 304",
        "Temperature Range: -10°C to +60°C",
        "Alarm System: Audio + Visual + SMS Alert",
        "Data Logging: 1 tahun history dengan USB export",
        "Remote Monitoring: Web-based dashboard",
        "Programming: Ladder Logic + Function Block",
      ],
      perks: [
        { description: "Remote Monitoring", enabled: true },
        { description: "Auto Safety Shutdown", enabled: true },
        { description: "Data Logging", enabled: true },
        { description: "SMS Alert System", enabled: true },
        { description: "Training Gratis", enabled: true },
      ],
      badge: "Smart Technology",
      popular: true,
    },
    {
      id: 6,
      title: "Sensor Package Premium",
      detail: "Set Lengkap Sensor untuk Monitoring",
      image: "/sensor-package.jpg",
      capacity: "Complete Set",
      pressure: "Multi Range",
      efficiency: "98%",
      category: "elektronik",
      price: "Rp 15.000.000",
      applications: [
        "Temperature Monitoring",
        "Pressure Control",
        "Safety System",
      ],
      specifications: [
        "Temperature Sensor: RTD PT100 Class A",
        "Pressure Transmitter: 4-20mA, 0-10 Bar",
        "Level Sensor: Ultrasonic + Float Switch",
        "Flow Meter: Electromagnetic type",
        "Vibration Sensor: Accelerometer + Proximity",
        "Gas Detector: CO, CO2, O2 multi-gas",
        "Cable: Armored + Heat Resistant",
        "Junction Box: Explosion Proof IP67",
        "Accuracy: ±0.25% Full Scale",
        "Response Time: <100ms",
        "Calibration: Factory calibrated + Certificate",
        "Warranty: 3 tahun full replacement",
      ],
      perks: [
        { description: "Akurasi Tinggi", enabled: true },
        { description: "Explosion Proof", enabled: true },
        { description: "Kalibrasi Bersertifikat", enabled: true },
        { description: "Support 24/7", enabled: true },
      ],
      badge: "Complete Solution",
      popular: false,
    },

    // BRIKET KAYU PRODUCTS
    {
      id: 7,
      title: "Briket Kayu Jati Super",
      detail: "Briket Premium untuk Boiler Industri",
      image: "/briket-jati.jpg",
      capacity: "40 kg/pack",
      pressure: "Ultra High Density",
      efficiency: "92%",
      category: "briket-kayu",
      price: "Rp 85.000/pack",
      applications: ["Steam Boiler", "Industrial Heating", "Power Generation"],
      specifications: [
        "Bahan Baku: 100% Serbuk Kayu Jati",
        "Kadar Air: Maksimal 6%",
        "Density: 1.3-1.5 g/cm³",
        "Ash Content: <1%",
        "Caloric Value: 4.800-5.200 kcal/kg",
        "Ukuran: Silinder diameter 5cm, panjang 20cm",
        "Kemasan: Karung Anyaman PP 40 kg",
        "Daya Tahan: 3 tahun dalam kondisi kering",
        "Tanpa bahan perekat kimia",
        "Proses pengeringan natural + oven",
        "Sertifikat FSC untuk sustainability",
        "Low smoke emission",
      ],
      perks: [
        { description: "Kalori Tinggi", enabled: true },
        { description: "Pembakaran Bersih", enabled: true },
        { description: "Rendah Abu", enabled: true },
        { description: "Ramah Lingkungan", enabled: true },
        { description: "Sertifikat FSC", enabled: true },
      ],
      badge: "Premium Wood",
      popular: true,
    },
    {
      id: 8,
      title: "Briket Kayu Campuran",
      detail: "Mix Wood Berkualitas Harga Ekonomis",
      image: "/briket-campuran.jpg",
      capacity: "50 kg/pack",
      pressure: "High Density",
      efficiency: "88%",
      category: "briket-kayu",
      price: "Rp 65.000/pack",
      applications: ["UMKM Heating", "Small Boiler", "Cooking Fuel"],
      specifications: [
        "Bahan Baku: Mix Kayu Keras (Mahoni, Sengon, Akasia)",
        "Kadar Air: Maksimal 8%",
        "Density: 1.1-1.3 g/cm³",
        "Ash Content: <2%",
        "Caloric Value: 4.400-4.700 kcal/kg",
        "Ukuran: Hexagonal 4cm, panjang 15cm",
        "Kemasan: Karung Goni 50 kg",
        "Daya Tahan: 2 tahun dalam kondisi kering",
        "Binder: Natural lignin dari kayu",
        "Proses: Steam pressure molding",
        "Quality Control: Random sampling test",
      ],
      perks: [
        { description: "Harga Kompetitif", enabled: true },
        { description: "Stok Melimpah", enabled: true },
        { description: "Kualitas Konsisten", enabled: true },
        { description: "Pengiriman Cepat", enabled: true },
      ],
      badge: "Best Value",
      popular: false,
    },
  ];

  const categories = [
    { id: "all", name: "Semua Produk", icon: "🔧", count: products.length },
    {
      id: "boiler",
      name: "Steam Boiler",
      icon: "🔥",
      count: products.filter((p) => p.category === "boiler").length,
    },
    {
      id: "briket-cengkeh",
      name: "Briket Cengkeh",
      icon: "🌿",
      count: products.filter((p) => p.category === "briket-cengkeh").length,
    },
    {
      id: "elektronik",
      name: "Sistem Elektronik",
      icon: "⚡",
      count: products.filter((p) => p.category === "elektronik").length,
    },
    {
      id: "briket-kayu",
      name: "Briket Kayu",
      icon: "🪵",
      count: products.filter((p) => p.category === "briket-kayu").length,
    },
  ];

  // Filter products based on category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeFilter === "all" || product.category === activeFilter;
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.detail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.applications.some((app) =>
        app.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const toggleSpecifications = (e, productId) => {
    e.stopPropagation();
    setIsExpanded((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const openWhatsApp = (e, product) => {
    e.stopPropagation();
    const phoneNumber = "6287722322221"; // Ganti dengan nomor WhatsApp Anda

    const message = `🔥 *INQUIRY PRODUK DAHANA REKAYASA*

📦 *Produk:* ${product.title}
📂 *Kategori:* ${categories.find((cat) => cat.id === product.category)?.name}
💰 *Harga:* ${product.price}

📋 *Spesifikasi Utama:*
• Kapasitas: ${product.capacity}
• Tekanan: ${product.pressure}
• Efisiensi: ${product.efficiency}

📝 *Detail:* ${product.detail}

---
*INFORMASI UMKM/PERUSAHAAN:*
Nama UMKM/Perusahaan: [Mohon diisi]
Lokasi: [Mohon diisi]
Quantity yang dibutuhkan: [Mohon diisi]
Kebutuhan khusus: [Mohon diisi]

---
Mohon informasi lebih lanjut mengenai:
□ Harga final dan diskon volume
□ Jadwal pengiriman
□ Garansi dan after sales service
□ Cara pembayaran dan kredit
□ Pelatihan operasional

Terima kasih! 🙏`;

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <section
      className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white overflow-hidden"
      id="products"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-slate-100 to-blue-100 rounded-full blur-3xl opacity-40"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            style={{
              backgroundImage:
                "linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
            className="w-full h-full"
          ></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full mb-6">
            <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3 animate-pulse"></span>
            <span className="text-blue-700 font-semibold text-sm tracking-wide">
              PRODUK UNGGULAN
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Pilih Produk
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-700">
              Yang Diinginkan
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Steam boiler, briket premium, dan sistem elektronik berkualitas
            tinggi. Solusi terpercaya untuk kebutuhan industri Anda.
          </p>
        </div>

        {/* Search and Filter Section - Diberi z-index tinggi */}
        <div
          className="mb-12 lg:mb-16 relative z-40"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="h-6 w-6 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Cari produk berdasarkan nama, deskripsi, atau aplikasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 text-lg border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300 bg-white shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              )}
            </div>

            {/* Category Dropdown - Tambahkan ref={dropdownRef} dan z-50 */}
            <div className="relative z-50" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full md:w-auto min-w-[300px] mx-auto md:mx-0 flex items-center justify-between px-6 py-4 bg-white border-2 border-slate-200 rounded-2xl shadow-sm hover:border-blue-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">
                    {categories.find((cat) => cat.id === activeFilter)?.icon}
                  </span>
                  <span className="font-semibold text-slate-700">
                    {categories.find((cat) => cat.id === activeFilter)?.name}
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                    {categories.find((cat) => cat.id === activeFilter)?.count}
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {/* Dropdown Menu - z-index paling tinggi */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-slate-200 rounded-2xl shadow-xl z-[100] overflow-hidden">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveFilter(category.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-6 py-4 hover:bg-slate-50 transition-colors duration-200 ${
                        activeFilter === category.id
                          ? "bg-blue-50 border-l-4 border-blue-500"
                          : ""
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{category.icon}</span>
                        <span className="font-medium text-slate-700">
                          {category.name}
                        </span>
                      </div>
                      <span
                        className={`px-2 py-1 text-sm rounded-full font-medium ${
                          activeFilter === category.id
                            ? "bg-blue-100 text-blue-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Active Filters Display */}
            {(searchQuery || activeFilter !== "all") && (
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-slate-600 font-medium">
                  Filter aktif:
                </span>
                {activeFilter !== "all" && (
                  <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {categories.find((cat) => cat.id === activeFilter)?.icon}{" "}
                    {categories.find((cat) => cat.id === activeFilter)?.name}
                    <button
                      onClick={() => setActiveFilter("all")}
                      className="ml-2 text-blue-500 hover:text-blue-700"
                    >
                      ×
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                    🔍 &quot;{searchQuery}&quot;
                    <button
                      onClick={clearSearch}
                      className="ml-2 text-slate-500 hover:text-slate-700"
                    >
                      ×
                    </button>
                  </span>
                )}
                <span className="text-sm text-slate-500">
                  {filteredProducts.length} produk ditemukan
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Products Grid - Tanpa z-index yang tinggi */}
        {filteredProducts.length > 0 ? (
          <div
            className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group relative bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                {/* Product Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <div
                    className={`px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg ${
                      product.badge === "Best Seller"
                        ? "bg-gradient-to-r from-orange-400 to-red-500"
                        : product.badge === "Premium Quality"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500"
                        : product.badge === "Smart Technology"
                        ? "bg-gradient-to-r from-green-500 to-teal-500"
                        : product.badge === "Premium Wood"
                        ? "bg-gradient-to-r from-amber-500 to-orange-500"
                        : "bg-gradient-to-r from-blue-500 to-indigo-500"
                    }`}
                  >
                    {product.badge}
                  </div>
                </div>

                {/* Popular Badge */}
                {product.popular && (
                  <div className="absolute top-6 right-6 z-20 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-lg">⭐</span>
                  </div>
                )}

                {/* View Detail Indicator */}
                {hoveredProduct === product.id && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                      <span className="text-white text-2xl">👁️</span>
                    </div>
                  </div>
                )}

                {/* Product Image */}
                <div className="relative h-64 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 ${
                      hoveredProduct === product.id ? "opacity-100" : ""
                    }`}
                  ></div>

                  {/* Quick Specs Overlay */}
                  {hoveredProduct === product.id && (
                    <div className="absolute bottom-4 left-4 right-4 text-white space-y-2">
                      <div className="flex items-center justify-between text-sm font-medium">
                        <span className="flex items-center space-x-2">
                          <span>⚡</span>
                          <span>{product.capacity}</span>
                        </span>
                        <span className="flex items-center space-x-2">
                          <span>🎯</span>
                          <span>{product.efficiency}</span>
                        </span>
                      </div>
                      <div className="text-lg font-bold">{product.price}</div>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-lg text-slate-600 mb-2">
                      {product.detail}
                    </p>
                    <p className="text-xl font-bold text-blue-600">
                      {product.price}
                    </p>

                    {/* Key Specifications */}
                    <div className="grid grid-cols-3 gap-4 mb-4 mt-4">
                      <div className="text-center">
                        <div className="text-xs text-slate-500 mb-1">
                          Capacity
                        </div>
                        <div className="font-bold text-slate-900">
                          {product.capacity}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-slate-500 mb-1">
                          Pressure
                        </div>
                        <div className="font-bold text-slate-900">
                          {product.pressure}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-slate-500 mb-1">
                          Efficiency
                        </div>
                        <div className="font-bold text-green-600">
                          {product.efficiency}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="mb-6">
                    <div className="text-sm text-slate-500 mb-3 font-medium">
                      Perfect For:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.slice(0, 3).map((app, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs rounded-full font-medium"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Kelengkapan/Perks */}
                  <div className="mb-6">
                    <h3 className="font-bold text-lg text-slate-900 mb-3">
                      Keunggulan
                    </h3>
                    {Array.isArray(product.perks) ? (
                      product.perks.slice(0, 4).map((perk, idx) => (
                        <div key={idx} className="flex items-center mb-2">
                          <svg
                            className="w-4 h-4 text-green-500 mr-3 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <path
                              d="M9 12l2 2l4-4"
                              stroke="white"
                              strokeWidth="2"
                            />
                          </svg>
                          <span className="text-sm text-slate-600">
                            {perk.description}
                          </span>
                        </div>
                      ))
                    ) : (
                      <div className="flex items-center mb-2">
                        <svg
                          className="w-4 h-4 text-green-500 mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path
                            d="M9 12l2 2l4-4"
                            stroke="white"
                            strokeWidth="2"
                          />
                        </svg>
                        <span className="text-sm text-slate-600">
                          {product.perks}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Expandable Specifications Section */}
                  <button
                    onClick={(e) => toggleSpecifications(e, product.id)}
                    className="w-full mb-4 flex items-center justify-between transition duration-300 py-4 px-4 rounded-xl hover:bg-blue-50 border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                    type="button"
                  >
                    <h3 className="font-bold text-lg text-slate-900">
                      Spesifikasi Lengkap
                    </h3>
                    <span
                      className={`text-blue-500 text-xl transition-transform duration-300 ${
                        isExpanded[product.id] ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {/* Specifications with Smooth Animation */}
                  <div
                    className={`mb-6 transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpanded[product.id]
                        ? "max-h-[2000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-slate-50 rounded-xl p-4 space-y-3 max-h-64 overflow-y-auto">
                      {product.specifications.map((spec, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">
                            •
                          </span>
                          <span className="text-sm text-slate-700 leading-relaxed">
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={(e) => openWhatsApp(e, product)}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-green-300"
                    type="button"
                  >
                    <span className="flex items-center justify-center">
                      <svg
                        className="w-6 h-6 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                      Pesan via WhatsApp
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </span>
                  </button>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-300 rounded-3xl transition-colors duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        ) : (
          // No Products Found State
          <div className="text-center py-20" data-aos="fade-up">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Produk Tidak Ditemukan
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              Maaf, tidak ada produk yang sesuai dengan pencarian &quot;
              {searchQuery}&quot; di kategori{" "}
              {categories.find((cat) => cat.id === activeFilter)?.name}.
            </p>
            <div className="space-x-4">
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter("all");
                }}
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Lihat Semua Produk
              </button>
              <button
                onClick={clearSearch}
                className="border-2 border-blue-500 text-blue-600 py-3 px-6 rounded-xl font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Hapus Pencarian
              </button>
            </div>
          </div>
        )}

        {/* Bottom CTA Section */}
        <div
          className="text-center mt-16 lg:mt-20"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 lg:p-12 border border-slate-200">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Butuh Konsultasi Produk?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Tim engineer kami siap membantu memilih produk yang tepat untuk
              kebutuhan spesifik Anda. Dapatkan rekomendasi professional dan
              penawaran terbaik.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const phoneNumber = "6287722322221";
                  const message = `Halo! Saya tertarik untuk konsultasi mengenai produk Dahana Rekayasa Nusantara. Mohon bantuan untuk rekomendasi produk yang sesuai dengan kebutuhan saya.`;
                  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                    message
                  )}`;
                  window.open(whatsappLink, "_blank");
                }}
                className="group bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  Konsultasi Gratis
                  <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">
                    💬
                  </span>
                </span>
              </button>

              <button className="group border-2 border-blue-500 text-blue-600 py-4 px-8 rounded-xl font-semibold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300">
                <span className="flex items-center justify-center">
                  Download Catalog
                  <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">
                    📋
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Hapus bagian ini karena sudah digantikan oleh useEffect dan useRef */}
        {/* {isDropdownOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsDropdownOpen(false)}
          ></div>
        )} */}
      </div>
    </section>
  );
};

export default Product;
