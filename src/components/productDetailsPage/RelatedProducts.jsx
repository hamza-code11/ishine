import React from 'react';
import { Link } from 'react-router-dom';


// Note: Ensure your asset imports match your project structure
import img1 from '../../assets/products/01.webp';
import img2 from '../../assets/products/02.webp';
import img3 from '../../assets/products/03.webp';
import img4 from '../../assets/products/04.webp';

const RelatedProducts = () => {
    const products = [
        { id: 1, category: "Apple Parts", title: "iPhone 13 Pro Max OLED", price: 85.00, oldPrice: 100.00, badge: "-15%", image: img1 },
        { id: 2, category: "Samsung Parts", title: "Galaxy S22 Ultra Screen", price: 145.00, image: img2 },
        { id: 3, category: "Batteries", title: "iPhone 11 Battery Cap", price: 12.50, image: img3 },
        { id: 4, category: "Tools", title: "Precision Screwdriver Set", price: 24.00, image: img4 },
    ];

    return (
        <section className="border-t border-gray-100 pt-16 mt-16">
            <div className="mb-10 border-b border-gray-100 pb-5">
                <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight uppercase">
                    Related <span className="text-[#1D73BE]">Products</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full group cursor-pointer">

                        {/* Image Container */}
                        <Link to="/ProductDetailPage" className="block">
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
                        </Link>

                        {/* Content */}
                        <div className="flex flex-col flex-1 px-1">
                            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.15em] mb-1">
                                {product.category}
                            </p>
                            <h3 className="text-slate-800 text-[14px] font-black mb-3 line-clamp-2 min-h-[40px] group-hover:text-[#1D73BE] transition-colors leading-tight">
                                {product.title}
                            </h3>

                            <div className="mt-auto">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-slate-900 text-xl font-black tracking-tighter">
                                        ${product.price.toFixed(2)}
                                    </span>
                                    {product.oldPrice && (
                                        <span className="text-slate-300 text-[13px] line-through font-bold">
                                            ${product.oldPrice.toFixed(2)}
                                        </span>
                                    )}
                                </div>

                                <button className="w-full mt-4 bg-white border-2 border-gray-100 text-slate-700 py-2.5 rounded-xl text-[12px] font-black uppercase tracking-tight hover:bg-[#1D73BE] hover:border-[#1D73BE] hover:text-white transition-all duration-200">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RelatedProducts;