"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: "Beranda", href: "#hero" },
    { name: "Produk", href: "#products" },
    { name: "Tentang", href: "#about" },
    { name: "Technology", href: "#teknologi" },
    { name: "Skema", href: "#schemes" },
    { name: "Testimoni", href: "#testimonials" },
    { name: "Kontak", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-md shadow-sm border-b border-gray-100"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12 md:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Syirkah Utama Nusantara"
                  width={140}
                  height={44}
                  className="h-8 md:h-10 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center"></span>
                </button>
              ))}
            </div>

            {/* Desktop Login Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/login"
                className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
              >
                Masuk
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 group"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-md border-b border-gray-100 transition-all duration-300 ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="space-y-1">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isOpen
                      ? "fadeInUp 0.3s ease-out forwards"
                      : "none",
                  }}
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile Login Button */}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <Link
                  href="/login"
                  className="block w-full px-4 py-3 text-center text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                >
                  Masuk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
