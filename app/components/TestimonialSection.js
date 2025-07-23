// components/TestimonialsSection.jsx
"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // This state is not strictly needed for AOS, but kept if you have other visibility logic

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quart",
    });
    setIsVisible(true); // You can remove this line if 'isVisible' state is unused
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      position: "Plant Manager",
      company: "PT Indofood Sukses Makmur",
      image: "/testimonials/budi-santoso.jpg",
      rating: 5,
      quote:
        "Sejak menggunakan steam boiler dari perusahaan ini, efisiensi produksi kami meningkat 30%. Teknologi AI-powered control benar-benar mengoptimalkan konsumsi bahan bakar. ROI tercapai dalam 18 bulan!",
      results: [
        { metric: "Efficiency Increase", value: "30%" },
        { metric: "Fuel Savings", value: "25%" },
        { metric: "ROI Achievement", value: "18 months" },
      ],
      industry: "Food & Beverage",
    },
    {
      id: 2,
      name: "Sarah Wijaya",
      position: "Operations Director",
      company: "PT Kimia Farma",
      image: "/testimonials/sarah-wijaya.jpg",
      rating: 5,
      quote:
        "Sistem safety yang berlapis dan monitoring real-time memberikan peace of mind dalam operasional 24/7. Maintenance cost turun drastis berkat predictive maintenance system.",
      results: [
        { metric: "Safety Rating", value: "99.9%" },
        { metric: "Maintenance Cost", value: "-40%" },
        { metric: "Uptime", value: "99.5%" },
      ],
      industry: "Pharmaceutical",
    },
    {
      id: 3,
      name: "Ahmad Fauzi",
      position: "Technical Manager",
      company: "PT Pupuk Indonesia",
      image: "/testimonials/ahmad-fauzi.jpg",
      rating: 5,
      quote:
        "Implementasi energy recovery system sangat impressive. Waste heat yang sebelumnya terbuang sekarang dikonversi menjadi energi berguna. Sustainability goals kami tercapai lebih cepat.",
      results: [
        { metric: "Energy Recovery", value: "85%" },
        { metric: "Emission Reduction", value: "45%" },
        { metric: "Cost Savings", value: "35%" },
      ],
      industry: "Chemical",
    },
    {
      id: 4,
      name: "Maya Sari",
      position: "Facility Manager",
      company: "PT Unilever Indonesia",
      image: "/testimonials/maya-sari.jpg",
      rating: 5,
      quote:
        "Multi-fuel capability sangat membantu dalam supply chain flexibility. Bisa menggunakan gas, biomass, atau fuel oil sesuai ketersediaan dan harga pasar. Very cost effective!",
      results: [
        { metric: "Fuel Flexibility", value: "100%" },
        { metric: "Operational Cost", value: "-28%" },
        { metric: "Supply Security", value: "99%" },
      ],
      industry: "Consumer Goods",
    },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Modernisasi Steam Plant PT Indofood",
      subtitle: "From Legacy to Leading-Edge Technology",
      industry: "Food & Beverage Manufacturing",
      challenge:
        "PT Indofood menghadapi tantangan efisiensi energi rendah (78%) pada legacy steam system, high maintenance cost, dan tingginya emisi yang tidak sesuai dengan regulasi lingkungan terbaru.",
      solution:
        "Implementasi complete steam system upgrade dengan AI-powered control, high-efficiency combustion technology, dan comprehensive energy recovery system.",
      results: [
        {
          label: "Efficiency Improvement",
          before: "78%",
          after: "98.5%",
          improvement: "+20.5%",
        },
        {
          label: "Annual Fuel Cost",
          before: "Rp 12.5M",
          after: "Rp 8.2M",
          improvement: "-34%",
        },
        {
          label: "CO2 Emissions",
          before: "450 tons/year",
          after: "180 tons/year",
          improvement: "-60%",
        },
        {
          label: "Maintenance Cost",
          before: "Rp 2.1M/year",
          after: "Rp 0.9M/year",
          improvement: "-57%",
        },
      ],
      timeline: "6 months implementation",
      roi: "18 months payback",
      image: "/case-studies/case1.jpg",
      technologies: [
        "AI-Powered Control Systems",
        "High-Efficiency Combustion",
        "Energy Recovery Network",
        "Predictive Maintenance",
      ],
    },
    {
      id: 2,
      title: "Green Energy Initiative PT Pupuk Indonesia",
      subtitle: "Sustainable Steam Generation with Biomass",
      industry: "Chemical & Fertilizer",
      challenge:
        "Kebutuhan untuk mengurangi carbon footprint sambil menjaga reliability steam supply untuk proses produksi yang critical. Target pengurangan emisi 50% dalam 3 tahun.",
      solution:
        "Hybrid steam system dengan biomass-gas dual fuel capability, advanced emission control, dan waste heat recovery untuk maximum efficiency.",
      results: [
        {
          label: "Carbon Emissions",
          before: "820 tons/year",
          after: "295 tons/year",
          improvement: "-64%",
        },
        {
          label: "Renewable Energy Mix",
          before: "0%",
          after: "75%",
          improvement: "+75%",
        },
        {
          label: "Energy Cost",
          before: "Rp 18.7M/year",
          after: "Rp 11.2M/year",
          improvement: "-40%",
        },
        {
          label: "System Reliability",
          before: "94.2%",
          after: "99.8%",
          improvement: "+5.6%",
        },
      ],
      timeline: "8 months implementation",
      roi: "24 months payback",
      image: "/case-studies/case2.jpg",
      technologies: [
        "Multi-Fuel Combustion System",
        "Advanced Emission Control",
        "Waste Heat Recovery",
        "Smart Grid Integration",
      ],
    },
    {
      id: 3,
      title: "Digital Transformation PT Kimia Farma",
      subtitle: "Smart Steam Management for Pharma",
      industry: "Pharmaceutical Manufacturing",
      challenge:
        "Strict compliance requirements untuk pharmaceutical production, 24/7 reliability needs, dan real-time monitoring untuk quality assurance. Zero tolerance untuk system failure.",
      solution:
        "Complete digital steam management dengan IoT sensors, machine learning algorithms, redundant safety systems, dan real-time compliance monitoring.",
      results: [
        {
          label: "System Uptime",
          before: "96.8%",
          after: "99.95%",
          improvement: "+3.15%",
        },
        {
          label: "Compliance Score",
          before: "94%",
          after: "100%",
          improvement: "+6%",
        },
        {
          label: "Response Time",
          before: "5 minutes",
          after: "30 seconds",
          improvement: "-90%",
        },
        {
          label: "Operational Cost",
          before: "Rp 15.3M/year",
          after: "Rp 9.8M/year",
          improvement: "-36%",
        },
      ],
      timeline: "4 months implementation",
      roi: "15 months payback",
      image: "/case-studies/case3.jpg",
      technologies: [
        "IoT Sensor Network",
        "Machine Learning Analytics",
        "Redundant Safety Systems",
        "Compliance Monitoring",
      ],
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate case studies
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCaseStudy((prev) => (prev + 1) % caseStudies.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative py-20 lg:py-32 bg-gray-50 overflow-hidden"
      id="testimonials"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 lg:w-80 lg:h-80 bg-blue-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 lg:w-80 lg:h-80 bg-orange-100 rounded-full opacity-30"></div>

        {/* Testimonial Dots Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            style={{
              backgroundImage:
                "radial-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
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
            Social Proof & Success Stories
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Testimoni &
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              Case Studies
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dengarlah pengalaman nyata klien-klien kami dan pelajari bagaimana
            teknologi kami mentransformasi operasional mereka dengan hasil yang
            terukur
          </p>
        </div>

        {/* Success Stats */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-16 lg:mb-20"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 group-hover:scale-110 transition-transform duration-300">
              50+
            </div>
            <div className="text-gray-700 font-medium text-sm lg:text-base mt-2">
              Successful Projects
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="text-3xl lg:text-4xl font-bold text-green-600 group-hover:scale-110 transition-transform duration-300">
              98%
            </div>
            <div className="text-gray-700 font-medium text-sm lg:text-base mt-2">
              Client Satisfaction
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="text-3xl lg:text-4xl font-bold text-orange-600 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div className="text-gray-700 font-medium text-sm lg:text-base mt-2">
              System Uptime
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="text-3xl lg:text-4xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">
              35%
            </div>
            <div className="text-gray-700 font-medium text-sm lg:text-base mt-2">
              Avg. Cost Savings
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20 lg:mb-24" data-aos="fade-up" data-aos-delay="400">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Apa Kata{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                Klien Kami
              </span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Testimoni langsung dari para decision makers yang telah merasakan
              transformasi nyata
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Testimonial Navigation */}
            <div className="space-y-4">
              {testimonials.map((testimonial, idx) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-full text-left p-4 lg:p-6 rounded-xl transition-all duration-300 ${
                    activeTestimonial === idx
                      ? "bg-white shadow-lg border-2 border-blue-500 scale-105"
                      : "bg-white/70 border-2 border-transparent hover:bg-white hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div
                        className={`w-16 h-16 rounded-full ${
                          activeTestimonial === idx
                            ? "ring-4 ring-blue-200"
                            : ""
                        } overflow-hidden`}
                      >
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {activeTestimonial === idx && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <h4
                        className={`font-semibold lg:text-lg ${
                          activeTestimonial === idx
                            ? "text-gray-900"
                            : "text-gray-700"
                        }`}
                      >
                        {testimonial.name}
                      </h4>
                      <p
                        className={`text-sm ${
                          activeTestimonial === idx
                            ? "text-blue-600"
                            : "text-gray-500"
                        }`}
                      >
                        {testimonial.position}
                      </p>
                      <p className="text-xs text-gray-400">
                        {testimonial.company}
                      </p>
                    </div>

                    <div className="text-right">
                      <div
                        className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                          activeTestimonial === idx
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {testimonial.industry}
                      </div>
                      <div className="flex justify-end mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Active Testimonial Content */}
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 lg:p-10 relative">
              <div className="absolute top-4 left-4 text-6xl text-blue-200 opacity-50">
                "
              </div>

              <div className="relative z-10 space-y-6">
                <blockquote className="text-lg lg:text-xl text-gray-800 leading-relaxed italic">
                  {testimonials[activeTestimonial].quote}
                </blockquote>

                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-bold text-xl text-gray-900">
                        {testimonials[activeTestimonial].name}
                      </div>
                      <div className="text-blue-600 font-medium">
                        {testimonials[activeTestimonial].position}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {testimonials[activeTestimonial].company}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex justify-end mb-2">
                        {[...Array(testimonials[activeTestimonial].rating)].map(
                          (_, i) => (
                            <span key={i} className="text-yellow-400 text-xl">
                              ⭐
                            </span>
                          )
                        )}
                      </div>
                      <div className="text-sm text-gray-500">
                        Verified Review
                      </div>
                    </div>
                  </div>

                  {/* Results Metrics */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {testimonials[activeTestimonial].results.map(
                      (result, idx) => (
                        <div
                          key={idx}
                          className="text-center p-3 bg-white rounded-xl"
                        >
                          <div className="text-2xl font-bold text-green-600">
                            {result.value}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">
                            {result.metric}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div data-aos="fade-up" data-aos-delay="600">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                Case Studies
              </span>{" "}
              Terpilih
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Studi mendalam tentang implementasi dan hasil nyata yang dicapai
              klien-klien kami
            </p>
          </div>

          {/* Case Study Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-white rounded-xl p-2 shadow-lg">
              {caseStudies.map((study, idx) => (
                <button
                  key={study.id}
                  onClick={() => setActiveCaseStudy(idx)}
                  className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeCaseStudy === idx
                      ? "bg-gradient-to-r from-blue-500 to-orange-500 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  Case {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Active Case Study */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Case Study Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto">
                <img
                  src={caseStudies[activeCaseStudy].image}
                  alt={caseStudies[activeCaseStudy].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-orange-600/80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                      <div className="text-2xl">🏭</div>
                    </div>
                    <div className="text-sm font-medium opacity-90">
                      {caseStudies[activeCaseStudy].industry}
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study Content */}
              <div className="p-8 lg:p-12 space-y-8">
                {/* Header */}
                <div>
                  <h4 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {caseStudies[activeCaseStudy].title}
                  </h4>
                  <p className="text-blue-600 font-medium mb-4">
                    {caseStudies[activeCaseStudy].subtitle}
                  </p>

                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <span>⏱️</span>
                      <span>{caseStudies[activeCaseStudy].timeline}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>💰</span>
                      <span>{caseStudies[activeCaseStudy].roi}</span>
                    </div>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-6">
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 text-red-600 text-sm">
                        !
                      </span>
                      Challenge
                    </h5>
                    <p className="text-gray-700 leading-relaxed">
                      {caseStudies[activeCaseStudy].challenge}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 text-green-600 text-sm">
                        ✓
                      </span>
                      Solution
                    </h5>
                    <p className="text-gray-700 leading-relaxed">
                      {caseStudies[activeCaseStudy].solution}
                    </p>
                  </div>
                </div>

                {/* Technologies Used */}
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">
                    Technologies Implemented
                  </h5>
                  <div className="grid grid-cols-2 gap-3">
                    {caseStudies[activeCaseStudy].technologies.map(
                      (tech, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">{tech}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* The "Measurable Results & Impact" section has been removed from here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
