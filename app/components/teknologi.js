// components/TechnologyAdvantagesSection.jsx
"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TechnologyAdvantagesSection = () => {
  const [activeAdvantage, setActiveAdvantage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    efficiency: 0,
    reduction: 0,
    uptime: 0,
    savings: 0,
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quart",
    });
    setIsVisible(true);
  }, []);

  // Counter animation
  useEffect(() => {
    const targets = {
      efficiency: 98.5,
      reduction: 45,
      uptime: 99.9,
      savings: 35,
    };

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const intervals = Object.keys(targets).map((key) => {
      let current = 0;
      const increment = targets[key] / steps;

      return setInterval(() => {
        current += increment;
        if (current >= targets[key]) {
          current = targets[key];
          clearInterval(intervals.find((interval) => interval === this));
        }
        setCounters((prev) => ({ ...prev, [key]: current }));
      }, stepTime);
    });

    return () => intervals.forEach(clearInterval);
  }, [isVisible]);

  const technologyAdvantages = [
    {
      id: 1,
      title: "Advanced Control Systems",
      subtitle: "Intelligent Automation",
      description:
        "Sistem kontrol otomatis berbasis AI yang mengoptimalkan performa boiler secara real-time, mengurangi konsumsi bahan bakar hingga 25% dan memastikan operasional yang stabil.",
      icon: "🎛️",
      color: "blue",
      features: [
        "AI-Powered Optimization",
        "Real-time Monitoring",
        "Predictive Maintenance",
        "Remote Control Access",
        "Auto Safety Shutdown",
      ],
      benefits: [
        { label: "Fuel Savings", value: "25%", color: "green" },
        { label: "Efficiency Boost", value: "+15%", color: "blue" },
        { label: "Downtime Reduction", value: "90%", color: "orange" },
      ],
      keyPoints: [
        "Machine learning algorithms mengoptimalkan pembakaran secara otomatis",
        "Sensor network memberikan data real-time untuk kontrol presisi",
        "Predictive maintenance mencegah kerusakan sebelum terjadi",
        "Remote monitoring memungkinkan kontrol dari mana saja",
      ],
    },
    {
      id: 2,
      title: "High-Efficiency Combustion",
      subtitle: "Clean Burn Technology",
      description:
        "Teknologi pembakaran bersih dengan design burner terdepan yang menghasilkan pembakaran sempurna, mengurangi emisi dan meningkatkan efisiensi thermal.",
      icon: "🔥",
      color: "orange",
      features: [
        "Ultra-Low NOx Emission",
        "Complete Combustion",
        "Multi-Fuel Compatibility",
        "Flame Monitoring",
        "Precision Air Control",
      ],
      benefits: [
        { label: "Emission Reduction", value: "65%", color: "green" },
        { label: "Thermal Efficiency", value: "98.5%", color: "blue" },
        { label: "Fuel Flexibility", value: "100%", color: "orange" },
      ],
      keyPoints: [
        "Advanced burner design mencapai pembakaran sempurna",
        "Multi-stage air injection mengoptimalkan mixing fuel-udara",
        "Flame monitoring system memastikan kondisi pembakaran optimal",
        "Fleksibilitas bahan bakar dari gas hingga biomass",
      ],
    },
    {
      id: 3,
      title: "Smart Safety Systems",
      subtitle: "Zero-Failure Protection",
      description:
        "Sistem keamanan berlapis dengan sensor IoT dan algoritma machine learning untuk deteksi dini masalah, memastikan operasional yang aman 24/7.",
      icon: "🛡️",
      color: "blue",
      features: [
        "Multi-Layer Protection",
        "IoT Sensor Network",
        "Emergency Response",
        "Compliance Monitoring",
        "Risk Assessment AI",
      ],
      benefits: [
        { label: "Safety Rating", value: "99.9%", color: "green" },
        { label: "Response Time", value: "<1s", color: "blue" },
        { label: "Incident Prevention", value: "95%", color: "orange" },
      ],
      keyPoints: [
        "Triple redundancy safety system untuk proteksi maksimal",
        "AI-powered risk assessment untuk deteksi dini",
        "Automated emergency response dalam hitungan detik",
        "Compliance monitoring sesuai standar internasional",
      ],
    },
    {
      id: 4,
      title: "Energy Recovery Systems",
      subtitle: "Waste Heat Utilization",
      description:
        "Sistem recovery panas buang yang mengkonversi waste heat menjadi energi berguna, meningkatkan efisiensi keseluruhan sistem hingga 15%.",
      icon: "♻️",
      color: "orange",
      features: [
        "Heat Exchanger Network",
        "Steam Condensate Recovery",
        "Flue Gas Heat Recovery",
        "Thermal Energy Storage",
        "Waste Heat Boiler",
      ],
      benefits: [
        { label: "Energy Recovery", value: "85%", color: "green" },
        { label: "Overall Efficiency", value: "+15%", color: "blue" },
        { label: "Cost Reduction", value: "30%", color: "orange" },
      ],
      keyPoints: [
        "Heat recovery dari flue gas meningkatkan efisiensi total",
        "Condensate recovery system menghemat air dan energi",
        "Thermal storage untuk optimasi beban operasional",
        "Waste heat boiler menghasilkan steam tambahan",
      ],
    },
  ];

  // Auto-rotate advantages
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAdvantage((prev) => (prev + 1) % technologyAdvantages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative py-20 lg:py-32 bg-white overflow-hidden"
      id="technology"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-40 h-40 lg:w-96 lg:h-96 bg-blue-50 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 -right-20 w-40 h-40 lg:w-96 lg:h-96 bg-orange-50 rounded-full opacity-20"></div>

        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            style={{
              backgroundImage: `  
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),  
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)  
            `,
              backgroundSize: "60px 60px",
            }}
            className="w-full h-full"
          ></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20" data-aos="fade-up">
          <span className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Technology Excellence
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Keunggulan
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              Teknologi Kami
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Inovasi terdepan dalam steam engineering yang menghadirkan efisiensi
            maksimal, keamanan terjamin, dan performa yang dapat diandalkan
          </p>
        </div>

        {/* Performance Stats */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-16 lg:mb-20"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
              {counters.efficiency.toFixed(1)}%
            </div>
            <div className="text-blue-700 font-medium text-sm lg:text-base mt-2">
              Peak Efficiency
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300">
            <div className="text-3xl lg:text-4xl font-bold text-green-600 group-hover:scale-110 transition-transform duration-300">
              {Math.round(counters.reduction)}%
            </div>
            <div className="text-green-700 font-medium text-sm lg:text-base mt-2">
              Emission Cut
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300">
            <div className="text-3xl lg:text-4xl font-bold text-orange-600 group-hover:scale-110 transition-transform duration-300">
              {counters.uptime.toFixed(1)}%
            </div>
            <div className="text-orange-700 font-medium text-sm lg:text-base mt-2">
              System Uptime
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center group hover:shadow-lg transition-all duration-300">
            <div className="text-3xl lg:text-4xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">
              {Math.round(counters.savings)}%
            </div>
            <div className="text-purple-700 font-medium text-sm lg:text-base mt-2">
              Cost Savings
            </div>
          </div>
        </div>

        {/* Main Technology Features */}
        <div
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* Technology Navigation & Active Content */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              Mengapa Teknologi Kami Lebih Unggul?
            </h3>

            {/* Technology Tabs */}
            <div className="space-y-3">
              {technologyAdvantages.map((advantage, idx) => (
                <button
                  key={advantage.id}
                  onClick={() => setActiveAdvantage(idx)}
                  className={`w-full text-left p-4 lg:p-5 rounded-xl transition-all duration-300 group ${
                    activeAdvantage === idx
                      ? `${
                          advantage.color === "blue"
                            ? "bg-blue-50 border-2 border-blue-500"
                            : "bg-orange-50 border-2 border-orange-500"
                        } shadow-lg`
                      : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl ${
                        activeAdvantage === idx
                          ? advantage.color === "blue"
                            ? "bg-blue-500"
                            : "bg-orange-500"
                          : "bg-gray-300 group-hover:bg-gray-400"
                      } flex items-center justify-center text-2xl lg:text-3xl transition-colors duration-300`}
                    >
                      {activeAdvantage === idx ? "⚡" : advantage.icon}
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`font-semibold lg:text-lg ${
                          activeAdvantage === idx
                            ? "text-gray-900"
                            : "text-gray-700"
                        }`}
                      >
                        {advantage.title}
                      </h4>
                      <p
                        className={`text-sm lg:text-base ${
                          activeAdvantage === idx
                            ? advantage.color === "blue"
                              ? "text-blue-600"
                              : "text-orange-600"
                            : "text-gray-500"
                        }`}
                      >
                        {advantage.subtitle}
                      </p>
                    </div>
                    <div
                      className={`w-3 h-3 rounded-full ${
                        activeAdvantage === idx
                          ? advantage.color === "blue"
                            ? "bg-blue-500"
                            : "bg-orange-500"
                          : "bg-gray-300"
                      } ${activeAdvantage === idx ? "animate-pulse" : ""}`}
                    ></div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Technology Details */}
          <div className="space-y-8">
            {/* Technology Header */}
            <div
              className={`bg-gradient-to-r ${
                technologyAdvantages[activeAdvantage].color === "blue"
                  ? "from-blue-50 to-blue-100"
                  : "from-orange-50 to-orange-100"
              } rounded-2xl p-6 lg:p-8`}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div
                  className={`w-16 h-16 ${
                    technologyAdvantages[activeAdvantage].color === "blue"
                      ? "bg-blue-500"
                      : "bg-orange-500"
                  } rounded-xl flex items-center justify-center text-3xl`}
                >
                  {technologyAdvantages[activeAdvantage].icon}
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">
                    {technologyAdvantages[activeAdvantage].title}
                  </h4>
                  <p
                    className={`${
                      technologyAdvantages[activeAdvantage].color === "blue"
                        ? "text-blue-600"
                        : "text-orange-600"
                    } font-medium`}
                  >
                    {technologyAdvantages[activeAdvantage].subtitle}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {technologyAdvantages[activeAdvantage].description}
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-3 gap-4">
              {technologyAdvantages[activeAdvantage].benefits.map(
                (benefit, idx) => (
                  <div
                    key={idx}
                    className={`bg-gradient-to-br ${
                      benefit.color === "green"
                        ? "from-green-50 to-green-100"
                        : benefit.color === "blue"
                        ? "from-blue-50 to-blue-100"
                        : "from-orange-50 to-orange-100"
                    } rounded-xl p-4 text-center group hover:shadow-lg transition-all duration-300`}
                  >
                    <div
                      className={`text-2xl lg:text-3xl font-bold ${
                        benefit.color === "green"
                          ? "text-green-600"
                          : benefit.color === "blue"
                          ? "text-blue-600"
                          : "text-orange-600"
                      } group-hover:scale-110 transition-transform duration-300`}
                    >
                      {benefit.value}
                    </div>
                    <div
                      className={`text-xs lg:text-sm font-medium ${
                        benefit.color === "green"
                          ? "text-green-700"
                          : benefit.color === "blue"
                          ? "text-blue-700"
                          : "text-orange-700"
                      } mt-1`}
                    >
                      {benefit.label}
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              <h5 className="text-lg font-semibold text-gray-900">
                Keunggulan Utama:
              </h5>
              <div className="space-y-3">
                {technologyAdvantages[activeAdvantage].keyPoints.map(
                  (point, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-full ${
                          technologyAdvantages[activeAdvantage].color === "blue"
                            ? "bg-blue-500"
                            : "bg-orange-500"
                        } flex items-center justify-center mt-0.5`}
                      >
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{point}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Technology Comparison */}
        <div className="mt-16 lg:mt-20" data-aos="fade-up" data-aos-delay="600">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our Technology?
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Perbandingan teknologi kami dengan solusi konvensional
                menunjukkan keunggulan signifikan
              </p>
            </div>

            {/* Comparison Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Conventional */}
              <div className="bg-white rounded-xl p-6 lg:p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4">
                    🏭
                  </div>
                  <h4 className="text-xl font-semibold text-gray-700">
                    Conventional Systems
                  </h4>
                  <p className="text-sm text-gray-500 mt-2">
                    Traditional approach
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Efficiency</span>
                    <span className="font-medium text-gray-700">85-90%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Maintenance</span>
                    <span className="font-medium text-red-600">High Cost</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Control</span>
                    <span className="font-medium text-gray-700">Manual</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Emissions</span>
                    <span className="font-medium text-red-600">High</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monitoring</span>
                    <span className="font-medium text-gray-700">Limited</span>
                  </div>
                </div>
              </div>

              {/* VS */}
              <div className="flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                  VS
                </div>
              </div>

              {/* Our Technology */}
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl p-6 lg:p-8 border-2 border-blue-200 relative overflow-hidden">
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-orange-500 text-white rounded-full text-xs font-bold">
                  ADVANCED
                </div>

                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl flex items-center justify-center text-3xl mx-auto mb-4 text-white">
                    🚀
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Our Technology
                  </h4>
                  <p className="text-sm text-blue-600 mt-2">
                    Next-gen innovation
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Efficiency</span>
                    <span className="font-bold text-green-600">98.5%+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Maintenance</span>
                    <span className="font-bold text-green-600">Low Cost</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Control</span>
                    <span className="font-bold text-blue-600">AI-Powered</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Emissions</span>
                    <span className="font-bold text-green-600">Ultra-Low</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monitoring</span>
                    <span className="font-bold text-blue-600">Real-time</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl mx-auto mb-3">
                  💰
                </div>
                <h5 className="font-semibold text-gray-900 mb-2">
                  Cost Effective
                </h5>
                <p className="text-sm text-gray-600">ROI dalam 18-24 bulan</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mx-auto mb-3">
                  🌱
                </div>
                <h5 className="font-semibold text-gray-900 mb-2">
                  Eco-Friendly
                </h5>
                <p className="text-sm text-gray-600">
                  Emisi rendah & sustainable
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl mx-auto mb-3">
                  ⚡
                </div>
                <h5 className="font-semibold text-gray-900 mb-2">
                  High Performance
                </h5>
                <p className="text-sm text-gray-600">Performa optimal 24/7</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl mx-auto mb-3">
                  🔧
                </div>
                <h5 className="font-semibold text-gray-900 mb-2">
                  Easy Maintenance
                </h5>
                <p className="text-sm text-gray-600">
                  Maintenance minimal & mudah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyAdvantagesSection;
