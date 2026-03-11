import React from 'react';

// Images Import
import img1 from '../assets/products/04.webp';
import img2 from '../assets/products/05.webp';
import img3 from '../assets/products/08.webp';
import img4 from '../assets/products/10.webp';
import promoImg1 from '../assets/products/01-removebg-preview.png';
import promoImg2 from '../assets/products/03-removebg-preview.png';

const DiscountSection = () => {
    // 1. Left side ke Promo Cards ka data
    const promoCards = [
        {
            id: 1,
            title: <>Premium OLED<br/>Screens</>,
            tagline: "Starting from",
            price: "$65.00",
            bgColor: "bg-[#0f2a52]",
            image: promoImg1
        },
        {
            id: 2,
            title: <>High-Capacity<br/>Batteries</>,
            tagline: "Up to 30% Off",
            price: "$15.00",
            bgColor: "bg-[#2d3a4b]",
            image: promoImg2
        }
    ];

    // 2. Right side ke Discounted Products ka data
    const discountedProducts = [
        { id: 1, title: "iPhone 14 Pro Max Display", desc: "Original Pull | Fully Tested", price: 225.00, oldPrice: 299.99, discount: "25% Off", image: img1 },
        { id: 2, title: "iPad Air 5th Gen LCD", desc: "Grade A | Touch Digitizer", price: 90.00, oldPrice: 120.00, discount: "25% Off", image: img2 },
        { id: 3, title: "Samsung S23 Ultra Battery", desc: "5000mAh | Zero Cycle", price: 30.00, oldPrice: 45.00, discount: "25% Off", image: img3 },
        { id: 4, title: "iPhone 13 Pro Camera", desc: "Space Gray | Authentic", price: 110.00, oldPrice: 150.00, discount: "25% Off", image: img4 },
    ];

    return (
        <section className="bg-white py-12 px-4">
            <div className="container mx-auto">
                {/* Header */}
                <div className="flex justify-between items-end mb-8">
                    <h2 className="text-2xl font-black text-[#1a3356] tracking-tight">Products With Discounts</h2>
                    <a href="#" className="text-[#2ea4d5] font-black text-xs uppercase tracking-widest hover:underline">View All Offers</a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* LEFT COLUMN: Dynamic Promo Cards */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {promoCards.map((promo) => (
                            <div key={promo.id} className={`relative ${promo.bgColor} rounded-xl p-8 text-white h-[200px] flex flex-col justify-center overflow-hidden group`}>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-black mb-1">{promo.title}</h3>
                                    <p className="text-xs text-slate-300 mb-2">{promo.tagline}</p>
                                    <p className="text-3xl font-black text-[#ffb800] tracking-tighter">{promo.price}</p>
                                </div>
                                <img src={promo.image} className="absolute right-4 bottom-4 w-28 opacity-60 group-hover:scale-110 transition-transform" alt="Promo" />
                            </div>
                        ))}
                    </div>

                    {/* RIGHT COLUMN: Discounted Items Grid */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {discountedProducts.map((item) => (
                            <div key={item.id} className="bg-[#f8fafc] border border-slate-100 rounded-xl p-4 flex gap-4 items-center relative group hover:shadow-md transition-shadow">
                                <span className="absolute top-3 left-3 bg-[#0f2a52] text-white text-[9px] font-black px-1.5 py-0.5 rounded z-10">
                                    {item.discount}
                                </span>
                                
                                <div className="w-24 h-24 bg-white rounded-lg flex-shrink-0 flex items-center justify-center p-2 border border-slate-50">
                                    <img src={item.image} alt={item.title} className="max-w-full max-h-full object-contain" />
                                </div>

                                <div className="flex-1">
                                    <h4 className="text-sm font-black text-[#1a3356] leading-tight mb-1">{item.title}</h4>
                                    <p className="text-[10px] text-slate-400 font-bold mb-3">{item.desc}</p>
                                    
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <span className="text-lg font-black text-[#2ea4d5] leading-none">${item.price.toFixed(2)}</span>
                                            <span className="text-[10px] text-slate-300 line-through font-bold">${item.oldPrice.toFixed(2)}</span>
                                        </div>
                                        
                                        <div className="flex items-center gap-2">
                                            <input type="number" defaultValue="1" className="w-10 h-8 bg-white border border-slate-200 rounded text-center text-xs font-bold focus:outline-none" />
                                            <button className="bg-white border-2 border-slate-200 text-[#1a3356] w-8 h-8 rounded flex items-center justify-center hover:bg-[#1a3356] hover:text-white transition-colors">
                                                <span className="material-symbols-outlined text-sm">shopping_cart</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DiscountSection;