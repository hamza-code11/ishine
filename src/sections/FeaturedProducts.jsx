import React from 'react';

import img1 from '../assets/products/01.webp';
import img2 from '../assets/products/02.webp';
import img3 from '../assets/products/03.webp';
import img4 from '../assets/products/04.webp';
import img5 from '../assets/products/05.webp';

const premiumProducts = [
    { id: 1, brand: "Apple Parts", title: "iPhone 12 LCD Incell", price: "28.00", img: img1 },
    { id: 2, brand: "Apple Parts", title: "iPhone 11 Pro Screen", price: "35.00", img: img2 },
    { id: 3, brand: "Samsung Parts", title: "A12 LCD Framework", price: "16.00", img: img3 },
    { id: 4, brand: "Apple Parts", title: "iPhone X Soft OLED", price: "22.00", img: img4 },
    { id: 5, brand: "Samsung Parts", title: "S20 FE Service Pack", price: "95.00", img: img5 },
];

export default function FeaturedProducts() {
    return (
        <section className="py-12 bg-gray-50/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-10 flex items-center justify-between border-b border-gray-100 pb-5">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
                        Wholesale <span className="text-primary">LCDs & Screens</span>
                    </h2>
                    {/* Right corner options removed as requested */}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {premiumProducts.map((product) => (
                        <div key={product.id} className="bg-white group rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            
                            {/* Image Container */}
                            <div className="bg-gray-50 rounded-xl overflow-hidden mb-5 aspect-square flex items-center justify-center relative">
                                <img 
                                    src={product.img} 
                                    alt={product.title}
                                    className="object-contain w-3/4 h-3/4 group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Quick Badge (Optional) */}
                                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-black uppercase tracking-tighter text-slate-500">
                                    New
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="space-y-1 px-1">
                                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider uppercase">
                                    {product.brand}
                                </p>
                                <h3 className="text-[14px] font-black text-slate-800 line-clamp-1 group-hover:text-primary transition-colors">
                                    {product.title}
                                </h3>
                                <div className="pt-2 flex items-center justify-between">
                                    <span className="text-xl font-black text-slate-900 tracking-tighter">
                                        ${product.price}
                                    </span>
                                </div>
                            </div>

                            {/* Add to Cart Button */}
                            <button className="w-full mt-5 bg-white border-2 border-gray-100 text-slate-700 py-2.5 rounded-xl text-[12px] font-black uppercase tracking-tight hover:bg-primary hover:border-primary hover:text-white transition-all duration-200">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}