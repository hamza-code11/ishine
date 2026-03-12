import React from 'react';
import { Link } from 'react-router-dom';

import img1 from '../assets/products/01.webp';
import img2 from '../assets/products/02.webp';
import img3 from '../assets/products/03.webp';
import img4 from '../assets/products/04.webp';
import img5 from '../assets/products/05.webp';
import img6 from '../assets/products/06.webp';
import img7 from '../assets/products/07.webp';
import img8 from '../assets/products/08.webp';
import img9 from '../assets/products/09.webp';
import img10 from '../assets/products/10.webp';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
      {/* Image Container */}
      <div className="relative bg-gray-50 rounded-xl mb-5 overflow-hidden aspect-square flex items-center justify-center p-6">
        {product.badge && (
          <span className={`absolute top-3 left-3 text-[10px] font-black px-2 py-1 rounded shadow-sm uppercase z-10 ${product.badge.includes('%') ? 'bg-red-50 text-red-600' :
              product.badge === 'HOT' ? 'bg-orange-50 text-orange-600' :
                'bg-blue-50 text-blue-600'
            }`}>
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.title}
          className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-1">
        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.15em] mb-1">
          {product.category}
        </p>
        <h3 className="text-slate-800 text-[14px] font-black mb-3 line-clamp-2 min-h-[40px] group-hover:text-[#1D73BE] transition-colors leading-tight">
          {product.title}
        </h3>

        <div className="mt-auto">
          <div className="flex items-center gap-2 mb-5">
            <span className="text-slate-900 text-xl font-black tracking-tighter">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="text-slate-300 text-[13px] line-through font-bold">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button className="w-full mt-5 bg-white border-2 border-gray-100 text-slate-700 py-2.5 rounded-xl text-[12px] font-black uppercase tracking-tight hover:bg-[#1D73BE] hover:border-[#1D73BE] hover:text-white transition-all duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  const products = [
    { id: 1, category: "Apple Parts", title: "iPhone 13 Pro Max OLED", price: 85.00, oldPrice: 100.00, badge: "-15%", image: img1 },
    { id: 2, category: "Samsung Parts", title: "Galaxy S22 Ultra Screen", price: 145.00, image: img2 },
    { id: 3, category: "Batteries", title: "iPhone 11 Battery Cap", price: 12.50, image: img3 },
    { id: 4, category: "Tools", title: "Precision Screwdriver Set", price: 24.00, image: img4 },
    { id: 5, category: "Accessories", title: "20W PD Fast Charger", price: 8.99, image: img5 },
    { id: 6, category: "Apple Parts", title: "iPad Air 5 Digitizer", price: 45.00, oldPrice: 60.00, badge: "HOT", image: img6 },
    { id: 7, category: "Batteries", title: "MacBook Pro Battery", price: 75.00, image: img7 },
    { id: 8, category: "Accessories", title: "Thermal Silicone Pad", price: 4.50, image: img8 },
    { id: 9, category: "Tools", title: "Microscope Ring Light", price: 35.00, badge: "NEW", image: img9 },
    { id: 10, category: "Tools", title: "T7000 Glue", price: 6.99, image: img10 },
  ];

  return (
    <section className="bg-gray-50/50 py-16 px-4">
      <div className="container mx-auto">
        <div className="mb-10 border-b border-gray-100 pb-5">
          <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight uppercase">
            Latest <span className="text-[#1D73BE]">Arrivals</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;