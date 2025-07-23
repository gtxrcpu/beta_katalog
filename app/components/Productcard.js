// components/MiniBoilerSection.jsx
"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MiniBoilerSection = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quart",
    });
  }, []);

  const miniBoilers = [
    {
      id: 1,
      name: "Compact Steam 500",
      image: "/api/placeholder/600/400",
      capacity: "500 kg/hr",
      pressure: "8 bar",
      efficiency: "88%",
      category: "compact",
      applications: ["Small Restaurant", "Laundry Service", "Food Processing"],
      features: [
        "Plug & Play Installation",
        "Automatic Water Level Control",
        "Compact Footprint Design",
        "Energy Efficient Operation",
        "Low Maintenance Required",
      ],
      specifications: {
        dimensions: "1.2m x 0.8m x 1.5m",
        weight: "450 kg",
        fuel: "Gas/Electric",
        startup: "15 minutes",
      },
      badge: "Best Seller",
      popular: true,
    },
    {
      id: 2,
      name: "Mobile Steam Unit",
      image: "/api/placeholder/600/400",
      capacity: "1 Ton/hr",
      pressure: "10 bar",
      efficiency: "85%",
      category: "mobile",
      applications: ["Mobile Kitchen", "Event Catering", "Construction Site"],
      features: [
        "Portable Design with Wheels",
        "Quick Setup & Breakdown",
        "Fuel Efficient Operation",
        "Weather Resistant Housing",
        "Remote Monitoring Available",
      ],
      specifications: {
        dimensions: "2.0m x 1.2m x 1.8m",
        weight: "750 kg",
        fuel: "Diesel/Gas",
        startup: "20 minutes",
      },
      badge: "Mobile",
      popular: false,
    },
    {
      id: 3,
      name: "Mini Industrial 2T",
      image: "/api/placeholder/600/400",
      capacity: "2 Ton/hr",
      pressure: "12 bar",
      efficiency: "90%",
      category: "industrial",
      applications: [
        "Small Manufacturing",
        "Hospital Sterilization",
        "Lab Research",
      ],
      features: [
        "Industrial Grade Components",
        "Advanced Safety Systems",
        "Easy Maintenance Access",
        "Digital Control Panel",
        "Automated Blowdown System",
      ],
      specifications: {
        dimensions: "2.5m x 1.5m x 2.2m",
        weight: "1200 kg",
        fuel: "Gas/Biomass",
        startup: "25 minutes",
      },
      badge: "Industrial",
      popular: true,
    },
    {
      id: 4,
      name: "Electric Steam Pro",
      image: "/api/placeholder/600/400",
      capacity: "800 kg/hr",
      pressure: "8 bar",
      efficiency: "95%",
      category: "electric",
      applications: ["Laboratory", "Clean Room", "Medical Facility"],
      features: [
        "Zero Emission Operation",
        "Silent Running Technology",
        "Precise Digital Control",
        "Stainless Steel Construction",
        "Smart Monitoring System",
      ],
      specifications: {
        dimensions: "1.5m x 1.0m x 1.8m",
        weight: "650 kg",
        fuel: "Electric Only",
        startup: "10 minutes",
      },
      badge: "Eco-Friendly",
      popular: false,
    },
    {
      id: 5,
      name: "Biomass Mini 1.5T",
      image: "/api/placeholder/600/400",
      capacity: "1.5 Ton/hr",
      pressure: "10 bar",
      efficiency: "87%",
      category: "biomass",
      applications: [
        "Palm Oil Mill",
        "Wood Processing",
        "Agricultural Industry",
      ],
      features: [
        "Renewable Energy Source",
        "Low Operating Cost",
        "Automated Fuel Feeding",
        "Emission Control System",
        "Ash Removal System",
      ],
      specifications: {
        dimensions: "3.0m x 1.8m x 2.5m",
        weight: "1500 kg",
        fuel: "Wood Pellets/Biomass",
        startup: "30 minutes",
      },
      badge: "Green Tech",
      popular: true,
    },
  ];

  const categories = [
    { id: "all", name: "All Products", icon: "🔧" },
    { id: "compact", name: "Compact", icon: "📦" },
    { id: "mobile", name: "Mobile", icon: "🚚" },
    { id: "industrial", name: "Industrial", icon: "🏭" },
    { id: "electric", name: "Electric", icon: "⚡" },
    { id: "biomass", name: "Biomass", icon: "🌱" },
  ];

  const filteredProducts =
    activeFilter === "all"
      ? miniBoilers
      : miniBoilers.filter((product) => product.category === activeFilter);

  const handleProductClick = (productId) => {
    // Navigate to product detail page
    window.location.href = `/products/mini-boiler/${productId}`;
  };

  return (
    <section
      className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white overflow-hidden"
      id="mini-boiler"
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
              MINI BOILER SERIES
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Solusi Steam
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-700">
              Kapasitas Kecil
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Teknologi compact dengan performa maksimal. Pilihan tepat untuk
            industri kecil hingga menengah yang mengutamakan efisiensi dan
            kemudahan operasional.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12 lg:mb-16"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`group flex items-center space-x-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg scale-105"
                  : "bg-white text-slate-600 border-2 border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-md"
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
              {activeFilter === category.id && (
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
              )}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => handleProductClick(product.id)}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Product Badge */}
              <div className="absolute top-6 left-6 z-20">
                <div
                  className={`px-4 py-2 rounded-full text-sm font-bold text-white shadow-lg ${
                    product.badge === "Best Seller"
                      ? "bg-gradient-to-r from-orange-400 to-red-500"
                      : product.badge === "Eco-Friendly"
                      ? "bg-gradient-to-r from-green-400 to-emerald-500"
                      : product.badge === "Green Tech"
                      ? "bg-gradient-to-r from-green-500 to-teal-500"
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
                  alt={product.name}
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
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {product.name}
                  </h3>

                  {/* Key Specifications */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
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
                    {product.applications.slice(0, 2).map((app, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs rounded-full font-medium"
                      >
                        {app}
                      </span>
                    ))}
                    {product.applications.length > 2 && (
                      <span className="px-3 py-1.5 bg-blue-50 text-blue-600 text-xs rounded-full font-medium">
                        +{product.applications.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-8">
                  <div className="text-sm text-slate-500 mb-3 font-medium">
                    Key Features:
                  </div>
                  <div className="space-y-2">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <span className="text-sm text-slate-600 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-slate-500">
                    Click to view details
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">→</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-300 rounded-3xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>

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
              Tim engineer kami siap membantu memilih mini boiler yang tepat
              untuk kebutuhan spesifik Anda. Dapatkan rekomendasi professional
              dan penawaran terbaik.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="flex items-center justify-center">
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

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 mt-8 text-slate-500 text-sm">
              <div className="flex items-center space-x-2">
                <span>✓</span>
                <span>Free Engineering Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✓</span>
                <span>Custom Solution Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✓</span>
                <span>Nationwide Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiniBoilerSection;
