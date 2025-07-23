// Card.js
import React, { useState } from "react";

const Card = ({ product, onSelect }) => {
  const [expanded, setExpanded] = useState(false); // Local state for expansion

  const toggleSpecifications = () => {
    setExpanded((prev) => !prev); // Toggle the current expansion state
  };

  return (
    <div className="bg-white bg-opacity-70 rounded-lg shadow-lg md:w-1/3 m-4 flex flex-col transition hover:shadow-xl hover:bg-opacity-90">
      {/* Product Title */}
      <div className="p-4">
        <h3 className="font-bold text-xl">{product.title}</h3>
        <p className="text-lg text-gray-700">{product.detail}</p>
      </div>

      {/* Image Section */}
      <div className="h-60 bg-gray-200 rounded-t-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Button Section */}
      <div className="p-4 flex flex-col flex-grow">
        <button
          className="bg-purple-600 text-white rounded-md px-4 py-2 w-full mt-auto hover:bg-purple-700 transition"
          onClick={onSelect}
        >
          Pilih paket
        </button>
        <hr className="border-t border-gray-300 my-2" />

        {/* Perks Section */}
        <div className="mb-4">
          <h3 className="font-bold text-lg">Keuntungan</h3>
          <div className="flex items-center mb-1">
            <svg
              className="w-4 h-4 text-green-500 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path
                d="M9 12l2 2l4-4"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <span>{product.perks}</span>
          </div>
        </div>

        {/* Expandable Specifications Section */}
        <div
          onClick={toggleSpecifications}
          className="cursor-pointer mb-2 flex items-center justify-between"
        >
          <h3 className="font-bold text-lg">Spesifikasi Mesin</h3>
          <span className="text-gray-600">{expanded ? "▲" : "▼"}</span>
        </div>

        {expanded && (
          <div className="mb-4">
            {product.specifications.map((spec, index) => (
              <div key={index} className="flex items-center mb-1">
                <span className="text-green-500 mr-2">-</span>
                <span>{spec}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
