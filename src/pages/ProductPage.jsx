import React, { useState } from 'react';
import { Link } from "react-router-dom";

import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import img4 from '../assets/products/01.webp';

const ProductPage = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Dummy Data
    const allProducts = Array.from({ length: 24 }).map((_, index) => ({
        id: index + 1,
        name: `Galaxy S25 Ultra ${index % 2 === 0 ? 'LCD with Frame' : 'Battery Pack'}`,
        price: (Math.random() * 200 + 10).toFixed(2),
        image: img4
    }));

    const productsPerPage = 12;
    const currentProducts = allProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

    return (
        <div className="bg-white min-h-screen">
            <TopBar />
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-gray-100 pb-6">
                    <div>
                        <h1 className="text-2xl font-black text-[#1a3356] tracking-tight uppercase">
                            Galaxy S25 Ultra 5G
                        </h1>
                        <p className="text-[11px] text-gray-400 mt-1 uppercase tracking-widest font-bold">
                            Total {allProducts.length} items found
                        </p>
                    </div>

                    {/* Top Right Sort */}
                    <div className="flex items-center gap-3">
                        <span className="text-[11px] font-black text-gray-400 uppercase tracking-tighter">Sort By:</span>
                        <select className="border border-gray-100 rounded-lg px-4 py-2 text-sm font-bold text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer bg-slate-50 transition-all">
                            <option>Default</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Product Grid */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {currentProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer"
                        >
                            {/* Image Container */}
                            <Link to="/ProductDetailPage" className="block">
                                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-50">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

                                    {/* New Tag (Optionally kept for style) */}
                                    <span className="absolute top-4 left-4 bg-blue-600 text-white text-[9px] font-black px-2 py-1 rounded uppercase tracking-widest shadow-sm">
                                        In Stock
                                    </span>
                                </div>
                            </Link>

                            {/* Product Details */}
                            <div className="p-5 bg-white flex flex-col flex-1">
                                <h3 className="text-sm md:text-base font-semibold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                                    {product.name}
                                </h3>

                                <p className="text-lg font-black text-gray-900 mb-4">
                                    ${product.price}
                                </p>

                                {/* Har Card par sirf Add to Cart Button */}
                                <button className="mt-auto w-full border-2 border-gray-100 py-2.5 rounded-xl text-[11px] text-slate-700 font-black uppercase tracking-widest hover:bg-[#1D73BE] hover:border-[#1D73BE] hover:text-white transition-all duration-200">
                                    Add to Cart
                                </button>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center mt-20 gap-3">
                    {[1, 2].map(n => (
                        <button
                            key={n}
                            onClick={() => {
                                setCurrentPage(n);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className={`w-12 h-12 rounded-xl text-sm font-black transition-all ${currentPage === n
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                : 'bg-white border border-gray-100 text-gray-400 hover:text-blue-600 hover:border-blue-200'
                                }`}
                        >
                            {n}
                        </button>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductPage;