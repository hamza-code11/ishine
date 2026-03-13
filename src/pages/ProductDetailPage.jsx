import React, { useState } from 'react';
import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProductTabs from "../components/productDetailsPage/ProductTabs";
import RelatedProducts from "../components/productDetailsPage/RelatedProducts";

import img1 from '../assets/products/01.webp';

const ProductDetailPage = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('Titanium Black');
    const [isWishlisted, setIsWishlisted] = useState(false); // Wishlist state

    const product = {
        name: "Galaxy S25 Ultra LCD with Frame",
        category: "Galaxy S25 Ultra 5G, OLED, RO",
        price: "198.00",
        sku: "N/A",
        features: ["9H Anti-Scratch", "Easy To Touch", "Easy to Fit"],
        colors: [
            { name: 'Titanium Black', hex: '#212121' },
            { name: 'Titanium Grey', hex: '#A5A5A5' },
            { name: 'Titanium Silver', hex: '#E0E0E0' },
            { name: 'Titanium Blue', hex: '#2E4B6E' },
        ]
    };

    return (
        <div className="bg-white min-h-screen font-sans text-gray-900">
            <TopBar />
            <Navbar />

            {/* Breadcrumbs Section */}
            <div className="bg-gray-50 border-b border-gray-100">
                <nav className="max-w-7xl mx-auto px-6 py-3 text-[11px] text-gray-500">
                    Home / Mobile / Samsung / S Series / Galaxy S25 Ultra 5G / <span className="text-black font-medium">{product.name}</span>
                </nav>
            </div>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Side: Image Gallery */}
                    <div className="relative group">
                        <div className="aspect-square bg-white border border-gray-50 rounded-lg overflow-hidden flex items-center justify-center p-4">
                            <img
                                src={img1}
                                alt="Main Product"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Right Side: Product Details */}
                    <div className="flex flex-col">
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-2">
                            {product.category}
                        </p>
                        <h1 className="text-3xl font-bold text-gray-800 mb-3 leading-tight">
                            {product.name}
                        </h1>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="flex text-yellow-400 text-xs">★★★★★</div>
                            <span className="text-xs text-gray-400 uppercase font-bold tracking-tighter"> Reviews</span>
                            <span className="text-[10px] bg-green-50 text-green-600 border border-green-100 px-2 py-0.5 rounded font-bold uppercase">
                                In Stock
                            </span>
                        </div>

                        <div className="text-4xl font-black text-[#1D73BE] mb-8">
                            ${product.price}
                        </div>

                        {/* Features List */}
                        <ul className="space-y-1 mb-8">
                            {product.features.map((f, i) => (
                                <li key={i} className="text-sm text-gray-500 font-medium">{f}</li>
                            ))}
                        </ul>
                        {/* Color Selector */}
                        <div className="mb-8">
                            <p className="text-sm font-bold mb-3 uppercase">
                                Color: <span className="text-[#1D73BE]">{selectedColor}</span>
                            </p>
                            <div className="flex gap-3">
                                {product.colors.map((color, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedColor(color.name)}
                                        title={color.name}
                                        className={`group relative w-8 h-8 rounded-full transition-all duration-300 ${selectedColor === color.name
                                            ? 'ring-2 ring-offset-2 ring-[#1D73BE]'
                                            : 'ring-1 ring-gray-200'
                                            }`}
                                    >
                                        {/* Actual Color Circle */}
                                        <div
                                            className="w-full h-full rounded-full border border-black/5 shadow-inner"
                                            style={{ backgroundColor: color.hex }}
                                        ></div>

                                        {/* Tooltip on Hover (Optional) */}
                                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                            {color.name}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Action Section */}
                        <div className="flex flex-wrap items-center gap-3 mb-10">
                            {/* Quantity Selector */}
                            <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1">
                                <button onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)} className="p-2 text-xl font-bold text-gray-400 hover:text-black">-</button>
                                <input type="number" value={quantity} readOnly className="w-12 bg-transparent text-center font-bold text-sm border-none focus:ring-0" />
                                <button onClick={() => setQuantity(q => q + 1)} className="p-2 text-xl font-bold text-gray-400 hover:text-black">+</button>
                            </div>

                            {/* Add to Cart Button */}
                            <button className="flex-1 bg-[#1D73BE] text-white py-4 rounded-lg font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                                Add to Cart
                            </button>

                            {/* Wishlist Button */}
                            <button
                                onClick={() => setIsWishlisted(!isWishlisted)}
                                className={`p-4 border-2 rounded-lg transition-all duration-300 ${isWishlisted
                                    ? 'bg-red-50 border-red-500 text-red-500'
                                    : 'border-gray-100 text-gray-400 hover:border-red-500 hover:text-red-500'
                                    }`}
                                title="Add to Wishlist"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill={isWishlisted ? "currentColor" : "none"}
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Modular Components */}
                <ProductTabs />
                <RelatedProducts />
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetailPage;