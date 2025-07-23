// components/FeaturedProductsSection.jsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedProductsSection = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quart",
    });
  }, []);

  // Auto-slide functionality (paused on hover)
  useEffect(() => {
    if (!isHovering && !showModal) {
      const interval = setInterval(() => {
        setActiveProduct((prev) => (prev + 1) % featuredProducts.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovering, showModal]);

  const featuredProducts = [
    {
      id: 1,
      name: "Mesin Boiler Arjuna",
      category: "Mesin Boiler",
      description:
        "Boiler uap industri dengan kapasitas 500 kg/jam, dilengkapi sistem kontrol otomatis dan teknologi efisiensi tinggi untuk industri manufaktur.",
      detailedDescription:
        "Mesin Boiler Arjuna adalah solusi industri terdepan yang dirancang khusus untuk memenuhi kebutuhan steam berkualitas tinggi. Dengan teknologi pembakaran yang efisien dan sistem kontrol otomatis, boiler ini menjamin operasional yang stabil dan aman. Dilengkapi dengan heat exchanger berlapis dan insulation premium untuk meminimalkan heat loss.",
      image: "/arjuna.jpg",
      specs: {
        capacity: "500 kg/hr",
        pressure: "8 Bar",
        efficiency: "98.5%",
        fuel: "Gas/Oil",
      },
      detailedSpecs: {
        "Steam Capacity": "500 kg/hr",
        "Working Pressure": "8 Bar",
        Efficiency: "98.5%",
        "Fuel Type": "Natural Gas / Diesel Oil",
        "Power Consumption": "15 kW",
        "Water Treatment": "Automatic",
        "Safety Features": "Multiple Protection System",
        Warranty: "2 Years Full Service",
      },
      features: [
        "Automatic Control System",
        "High Efficiency Burner",
        "Safety Monitoring",
        "Remote Monitoring",
      ],
      applications: ["Textile Industry", "Food Processing", "Chemical Plant"],
      color: "blue",
      badge: "Best Seller",
      installationTime: "5-7 Hari Kerja",
    },
    {
      id: 2,
      name: "Mesin Penggorengan",
      category: "Steam Generator",
      description:
        "Generator uap kompak ideal untuk UMKM dan industri kecil. Desain space-saving dengan performa maksimal dan operasional yang mudah.",
      detailedDescription:
        "Mesin Penggorengan dengan sistem steam generator terintegrasi, memberikan hasil gorengan yang konsisten dan berkualitas. Desain compact yang cocok untuk UMKM kuliner dengan kapasitas produksi menengah. Dilengkapi dengan temperature control digital dan safety system untuk operasional yang aman.",
      image: "/mesin.png",
      specs: {
        capacity: "200 kg/hr",
        pressure: "6 Bar",
        efficiency: "96.8%",
        fuel: "Electric/Gas",
      },
      detailedSpecs: {
        "Production Capacity": "200 kg/hr",
        "Steam Pressure": "6 Bar",
        "Energy Efficiency": "96.8%",
        "Power Source": "Electric 380V / Gas LPG",
        "Oil Capacity": "50 Liter",
        "Temperature Range": "150-200°C",
        Material: "Stainless Steel 304",
        Warranty: "1 Year Full Service",
      },
      features: [
        "Compact Design",
        "Easy Installation",
        "Low Maintenance",
        "Energy Efficient",
      ],
      applications: ["Laundry Business", "Small Manufacturing", "Restaurant"],
      color: "orange",
      badge: "Most Popular",
      installationTime: "2-3 Hari Kerja",
    },
    {
      id: 3,
      name: "Aplikasi ERP",
      category: "Software",
      description: "Software untuk industri yang mempermudah segalanyaaa.",
      detailedDescription:
        "Sistem ERP terintegrasi khusus untuk industri manufaktur dan UMKM. Mengelola inventory, production planning, quality control, dan financial reporting dalam satu platform. Cloud-based system dengan akses multi-device dan real-time monitoring dashboard.",
      image: "/erp.png",
      specs: {
        capacity: "750 kg/hr",
        pressure: "10 Bar",
        efficiency: "99.2%",
        fuel: "Biomass/Gas",
      },
      detailedSpecs: {
        "Processing Power": "750 transactions/hr",
        "Database Security": "10 Bar Encryption",
        "System Efficiency": "99.2% Uptime",
        Platform: "Cloud/On-Premise",
        "User Capacity": "Unlimited",
        Storage: "1TB Initial",
        Support: "24/7 Technical Support",
        License: "Annual Subscription",
      },
      features: [
        "Low Emission Technology",
        "Biomass Compatible",
        "Smart Controls",
        "Carbon Footprint Reduction",
      ],
      applications: ["Paper Industry", "Palm Oil Mill", "Power Plant"],
      color: "blue",
      badge: "Eco Innovation",
      installationTime: "1-2 Minggu",
    },
  ];

  // Handle View Details
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  // Handle Close Modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
    document.body.style.overflow = "unset"; // Restore scrolling
  };

  // Handle Get Quote (WhatsApp)
  const handleGetQuote = (product) => {
    const phoneNumber = "6287722322221"; // Ganti dengan nomor WhatsApp bisnis Anda

    const message = `PERMINTAAN PENAWARAN PRODUK  

Produk : ${product.name}  
Kategori : ${product.category}  
Harga : ${product.price}  

Spesifikasi Utama :
• Kapasitas : ${product.specs.capacity}  
• Tekanan : ${product.specs.pressure}  
• Efisiensi : ${product.specs.efficiency}  
• Bahan Bakar : ${product.specs.fuel}  

Waktu Instalasi : ${product.installationTime}  

Deskripsi :  
${product.description}  

---  
Jika ada pertanyaan boleh isi :  


Terima kasih! 🙏`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <section
        className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden"
        id="products"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-40 -right-40 w-96 h-96 bg-blue-50 rounded-full opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gray-100 rounded-full opacity-20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20" data-aos="fade-up">
            <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100 mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Featured Products
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Produk
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-gray-500">
                Unggulan Kami
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our premium steam solutions designed to meet diverse
              industrial needs with cutting-edge technology and unmatched
              reliability
            </p>
          </div>

          {/* Mobile Layout */}
          <div className="block lg:hidden space-y-8">
            {/* Mobile Product Cards */}
            <div className="space-y-8" data-aos="fade-up">
              {featuredProducts.map((product, idx) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                >
                  {/* Mobile Image */}
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                    {/* Mobile Badge */}
                    <div
                      className={`absolute top-4 left-4 px-3 py-1 ${
                        product.color === "blue"
                          ? "bg-blue-500"
                          : "bg-orange-500"
                      } text-white rounded-full text-sm font-medium`}
                    >
                      {product.badge}
                    </div>

                    {/* Mobile Quick Specs */}
                    <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md rounded-lg p-3">
                      <div className="text-white text-center">
                        <div className="text-lg font-bold">
                          {product.specs.capacity}
                        </div>
                        <div className="text-xs opacity-90">Capacity</div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="text-sm text-gray-500 font-medium">
                        {product.category}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mt-1">
                        {product.name}
                      </h3>
                      <div className="text-lg font-bold text-blue-600 mt-1">
                        {product.price}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {product.description}
                    </p>

                    {/* Mobile Specs Grid */}
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      <div className="text-center bg-gray-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-gray-900">
                          {product.specs.pressure}
                        </div>
                        <div className="text-xs text-gray-500">Pressure</div>
                      </div>
                      <div className="text-center bg-gray-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-gray-900">
                          {product.specs.efficiency}
                        </div>
                        <div className="text-xs text-gray-500">Efficiency</div>
                      </div>
                    </div>

                    {/* Mobile Features */}
                    <div className="flex flex-wrap gap-2">
                      {product.features
                        .slice(0, 3)
                        .map((feature, featureIdx) => (
                          <span
                            key={featureIdx}
                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                    </div>

                    {/* Mobile CTA Buttons */}
                    <div className="pt-4 space-y-3">
                      <button
                        onClick={() => handleViewDetails(product)}
                        className="w-full relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-semibold text-blue-600 transition duration-300 ease-out border-2 border-blue-500 rounded-xl group"
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
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            ></path>
                          </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                          Lihat Detail
                        </span>
                        <span className="relative invisible">Lihat Detail</span>
                      </button>

                      <button
                        onClick={() => handleGetQuote(product)}
                        className="w-full px-6 py-3 font-semibold text-white bg-green-500 border-2 border-green-500 rounded-xl transition-all duration-300 hover:bg-green-600 hover:border-green-600"
                      >
                        <svg
                          className="w-5 h-5 inline mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                        Pesan Sekarang
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
            {/* Desktop Product Showcase */}
            <div
              className="relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Main Product Display */}
              <div
                className="grid lg:grid-cols-5 gap-8 items-center"
                data-aos="fade-up"
              >
                {/* Product Image - Takes 3 columns */}
                <div className="lg:col-span-3 relative group">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                    <Image
                      src={featuredProducts[activeProduct].image}
                      alt={featuredProducts[activeProduct].name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Badge */}
                    <div
                      className={`absolute top-6 left-6 px-4 py-2 ${
                        featuredProducts[activeProduct].color === "blue"
                          ? "bg-blue-500"
                          : "bg-orange-500"
                      } text-white rounded-full font-medium shadow-lg`}
                    >
                      {featuredProducts[activeProduct].badge}
                    </div>

                    {/* Floating Specs Card */}
                    <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md rounded-xl p-4 text-white">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-xl font-bold">
                            {featuredProducts[activeProduct].specs.capacity}
                          </div>
                          <div className="text-xs opacity-90">Capacity</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold">
                            {featuredProducts[activeProduct].specs.efficiency}
                          </div>
                          <div className="text-xs opacity-90">Efficiency</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Navigation Dots */}
                  <div className="flex justify-center space-x-2 mt-6">
                    {featuredProducts.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveProduct(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeProduct === idx
                            ? "bg-blue-500 w-8"
                            : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Product Details - Takes 2 columns */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Product Info */}
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500 font-medium">
                        {featuredProducts[activeProduct].category}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mt-1">
                        {featuredProducts[activeProduct].name}
                      </h3>
                      <div className="text-2xl font-bold text-blue-600 mt-2">
                        {featuredProducts[activeProduct].price}
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 leading-relaxed">
                      {featuredProducts[activeProduct].description}
                    </p>
                  </div>

                  {/* Specifications */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Key Specifications
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(
                        featuredProducts[activeProduct].specs
                      ).map(([key, value]) => (
                        <div
                          key={key}
                          className="bg-gray-50 rounded-xl p-4 text-center hover:shadow-md transition-shadow duration-300"
                        >
                          <div className="text-xl font-bold text-gray-900">
                            {value}
                          </div>
                          <div className="text-sm text-gray-500 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Key Features
                    </h4>
                    <div className="space-y-3">
                      {featuredProducts[activeProduct].features.map(
                        (feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-3 group"
                          >
                            <div
                              className={`w-2 h-2 ${
                                featuredProducts[activeProduct].color === "blue"
                                  ? "bg-blue-500"
                                  : "bg-orange-500"
                              } rounded-full group-hover:scale-125 transition-transform duration-200`}
                            ></div>
                            <span className="text-gray-700 font-medium">
                              {feature}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Applications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProducts[activeProduct].applications.map(
                        (app, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-2 bg-gradient-to-r from-blue-50 to-gray-100 text-gray-700 rounded-lg text-sm font-medium border border-gray-200"
                          >
                            {app}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button
                      onClick={() =>
                        handleViewDetails(featuredProducts[activeProduct])
                      }
                      className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-blue-600 transition duration-300 ease-out border-2 border-blue-500 rounded-xl shadow-lg group hover:shadow-xl"
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
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          ></path>
                        </svg>
                      </span>
                      <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                        Lihat Detail
                      </span>
                      <span className="relative invisible">Lihat Detail</span>
                    </button>

                    <button
                      onClick={() =>
                        handleGetQuote(featuredProducts[activeProduct])
                      }
                      className="px-8 py-4 font-semibold text-white bg-green-500 border-2 border-green-500 rounded-xl transition-all duration-300 hover:bg-green-600 hover:border-green-600 inline-flex items-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                      Pesan Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Thumbnails */}
            <div className="mt-16" data-aos="fade-up" data-aos-delay="200">
              <div className="grid grid-cols-3 gap-6">
                {featuredProducts.map((product, idx) => (
                  <div
                    key={product.id}
                    onClick={() => setActiveProduct(idx)}
                    className={`cursor-pointer bg-white rounded-xl border-2 transition-all duration-300 overflow-hidden group ${
                      activeProduct === idx
                        ? "border-blue-500 shadow-xl"
                        : "border-gray-200 hover:border-gray-300 hover:shadow-lg"
                    }`}
                  >
                    <div className="aspect-[16/10] relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div
                        className={`absolute inset-0 ${
                          activeProduct === idx
                            ? "bg-blue-500/20"
                            : "bg-black/0 group-hover:bg-black/10"
                        } transition-colors duration-300`}
                      ></div>
                    </div>

                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {product.name}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {product.category}
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs font-medium text-blue-600">
                          {product.specs.capacity}
                        </span>
                        <span
                          className={`w-2 h-2 ${
                            product.color === "blue"
                              ? "bg-blue-500"
                              : "bg-orange-500"
                          } rounded-full ${
                            activeProduct === idx ? "animate-pulse" : ""
                          }`}
                        ></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className="text-center mt-16 lg:mt-20"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Tim engineering kami siap merancang solusi boiler yang
                disesuaikan dengan kebutuhan spesifik industri Anda
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-semibold text-blue-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-lg group hover:shadow-xl"
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
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                    Konsultasi Custom
                  </span>
                  <span className="relative invisible">Konsultasi Custom</span>
                </a>

                <a
                  href="#product"
                  className="px-8 py-4 font-semibold text-gray-700 bg-transparent border-2 border-gray-300 rounded-full transition-all duration-300 hover:border-gray-900 hover:text-gray-900"
                >
                  Lihat Semua Produk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-2xl">
              <h3 className="text-2xl font-bold text-gray-900">
                Detail Produk
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Product Image and Basic Info */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 ${
                      selectedProduct.color === "blue"
                        ? "bg-blue-500"
                        : "bg-orange-500"
                    } text-white rounded-full text-sm font-medium`}
                  >
                    {selectedProduct.badge}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 font-medium">
                      {selectedProduct.category}
                    </div>
                    <h4 className="text-3xl font-bold text-gray-900 mt-1">
                      {selectedProduct.name}
                    </h4>
                    <div className="text-2xl font-bold text-blue-600 mt-2">
                      {selectedProduct.price}
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      ⏱️ Waktu Instalasi: {selectedProduct.installationTime}
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {selectedProduct.detailedDescription}
                  </p>

                  {/* Key Features */}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">
                      Keunggulan Utama:
                    </h5>
                    <div className="space-y-2">
                      {selectedProduct.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div
                            className={`w-2 h-2 ${
                              selectedProduct.color === "blue"
                                ? "bg-blue-500"
                                : "bg-orange-500"
                            } rounded-full`}
                          ></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Specifications */}
              <div className="mb-8">
                <h5 className="text-xl font-semibold text-gray-900 mb-4">
                  Spesifikasi Lengkap
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.entries(selectedProduct.detailedSpecs).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="bg-gray-50 rounded-lg p-4 text-center"
                      >
                        <div className="text-lg font-bold text-gray-900">
                          {value}
                        </div>
                        <div className="text-sm text-gray-500">{key}</div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-8">
                <h5 className="text-xl font-semibold text-gray-900 mb-4">
                  Aplikasi Industri
                </h5>
                <div className="flex flex-wrap gap-3">
                  {selectedProduct.applications.map((app, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-gray-100 text-gray-700 rounded-lg font-medium border border-gray-200"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <button
                  onClick={() => handleGetQuote(selectedProduct)}
                  className="flex-1 px-6 py-4 font-semibold text-white bg-green-500 border-2 border-green-500 rounded-xl transition-all duration-300 hover:bg-green-600 hover:border-green-600 inline-flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  Pesan via WhatsApp
                </button>
                <button
                  onClick={handleCloseModal}
                  className="px-6 py-4 font-semibold text-gray-700 bg-transparent border-2 border-gray-300 rounded-xl transition-all duration-300 hover:border-gray-900 hover:text-gray-900"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturedProductsSection;
