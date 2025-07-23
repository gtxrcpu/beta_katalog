"use client";

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] text-[#333333] py-10 border-t border-gray-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between text-center md:text-left">
          {/* Logo and Description */}
          <div className="flex-1 mb-6 md:mb-0">
            <h1 className="text-3xl font-extrabold text-[#003366]">
              Dahana Rekayasa Nusantara
            </h1>
            <p className="text-lg mt-2">
              Sederhanakan proses produksi Anda <br />
              dengan mini boiler berkualitas <br />
              dari kami yang hemat energi dan berkualitas.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-[#003366] mb-2">
              Navigasi
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="#hero" className="hover:text-[#007BFF]">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#unggulan" className="hover:text-[#007BFF]">
                  Produk
                </a>
              </li>
              <li>
                <a href="#teknologi" className="hover:text-[#007BFF]">
                  Technology
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#007BFF]">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#007BFF]">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-[#003366] mb-2">
              Kontak
            </h3>
            <p>
              Lingkungan Industri Kecil/UPTD Logam Blok B2, Jl. Soekarno-Hatta,
              Mekar Mulya, Kec. Gedebage
            </p>
            <p>Kota Bandung, Jawa Barat, Indonesia</p>
            <p>
              <strong>+62 811 2121 511</strong>
            </p>
            <p>
              <a
                href="mailto:info@manufakturpro.co.id"
                className="hover:text-[#007BFF]"
              >
                www.bumibraja.co.id
              </a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-[#003366] mb-2 text-center">
              Sosial Media
            </h3>
            <div className="flex justify-center mt-2 space-x-4">
              <a href="#" className="hover:text-[#007BFF]">
                <FaFacebookF className="text-2xl" />
              </a>
              <a href="#" className="hover:text-[#007BFF]">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="hover:text-[#007BFF]">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="hover:text-[#007BFF]">
                <FaLinkedinIn className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-400 mt-6 pt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Dahana Rekayasa Nusantara. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
