import React from 'react';
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to="/ProductPage" className="block">
      <div className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer">

        {/* Image Container */}
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-50">
          <img
            src={product.image_url || 'https://via.placeholder.com/600x800'}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          {/* Subtle Overlay on Hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        </div>



        <div className="p-4 bg-white">
          <h3 className="text-sm md:text-base font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
            {product.name}
          </h3>
        </div>

      </div>
    </Link>
  );
};

export default ProductCard;