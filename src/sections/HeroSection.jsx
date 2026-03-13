import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// API import hata di gayi hai
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

// Static Categories Data
const staticCategories = [
    { id: 1, name: 'Cables', slug: 'cables' },
    { id: 2, name: 'Car Chargers', slug: 'car-chargers' },
    { id: 3, name: 'Power Banks', slug: 'power-banks' },
    { id: 4, name: 'Wireless Earbuds', slug: 'wireless-earbuds' },
    { id: 5, name: 'Screens', slug: 'screens' },
    { id: 6, name: 'Batteries', slug: 'batteries' },
    { id: 7, name: 'Tools', slug: 'tools' },
    { id: 8, name: 'Accessories', slug: 'accessories' },
];

// Static Banners Data
const staticBanners = [
    { id: 1, image: banner1, title: 'Premium Display Components', subtitle: 'Engineered for perfection', link: '/shop' },
    { id: 2, image: banner2, title: 'High Capacity Batteries', subtitle: 'Long lasting power', link: '/shop' },
    { id: 3, image: banner3, title: 'Advanced Repair Tools', subtitle: 'Precision in every move', link: '/shop' },
];

const HeroSection = ({ categoryMenuOpen }) => {
    // Ab hum directly static data use karenge
    const [currentBanner, setCurrentBanner] = useState(0);

    // Auto-slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBanner(prev => (prev + 1) % staticBanners.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row gap-6">
                
                {/* 1. Left Category Menu (Static) */}
                <div
                    style={{ overflow: "hidden" }}
                    className={`hidden lg:block bg-white rounded-2xl border border-slate-100 shadow-sm h-full transition-all duration-500 ease-in-out flex-shrink-0 ${categoryMenuOpen ? "w-64 opacity-100" : "w-0 opacity-0 pointer-events-none border-none"}`}
                >
                    <div className="p-4 bg-slate-900 border-b border-slate-700">
                        <h3 className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">menu</span>
                            Categories
                        </h3>
                    </div>
                    <ul className="divide-y divide-slate-50 min-w-[256px]">
                        {staticCategories.map((cat) => (
                            <li key={cat.id}>
                                <Link
                                    className="flex items-center justify-between px-5 py-3.5 hover:bg-slate-50 hover:text-primary transition-all text-[13px] font-bold text-slate-700 group uppercase tracking-tight"
                                    to={`/shop?category=${cat.slug}`}
                                >
                                    <span>{cat.name}</span>
                                    <span className="material-symbols-outlined text-[16px] text-slate-300 group-hover:text-primary transition-colors">
                                        chevron_right
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="p-4 bg-slate-50 min-w-[256px] border-t border-slate-100">
                        <Link
                            className="text-primary text-[13px] font-black flex items-center gap-1 uppercase tracking-widest hover:gap-3 transition-all"
                            to="/shop"
                        >
                            View All{" "}
                            <span className="material-symbols-outlined text-sm">
                                arrow_forward
                            </span>
                        </Link>
                    </div>
                </div>

                {/* 2. Main Slider (Static) */}
                <div className="flex-1 relative rounded-2xl overflow-hidden min-h-[460px] flex items-center bg-slate-100 shadow-sm">
                    {/* Background Images */}
                    <div className="absolute inset-0">
                        {staticBanners.map((banner, i) => (
                            <div
                                key={i}
                                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                                style={{
                                    backgroundImage: `url(${banner.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    opacity: currentBanner === i ? 1 : 0,
                                }}
                            />
                        ))}
                    </div>

                    {/* Content Overlay */}
                    <div className="relative z-10 flex items-end h-full min-h-[460px] px-8 md:px-14 pb-16 md:pb-20">
                        <div className="max-w-[450px]">
                            {/* {staticBanners[currentBanner].title && (
                                <h2
                                    className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tighter mb-6 transition-all duration-700 transform"
                                    style={{
                                        color: '#1a3356',
                                        textShadow: '0 2px 20px rgba(255,255,255,0.8)'
                                    }}
                                >
                                    {staticBanners[currentBanner].title}
                                </h2>
                            )} */}

                            <Link
                                to={staticBanners[currentBanner].link}
                                className="inline-flex items-center gap-2 px-8 py-3.5 text-white font-black rounded-full text-xs uppercase tracking-[0.2em] transition-all active:scale-95 shadow-xl hover:bg-[#1a3356]"
                                style={{ background: '#1D73BE' }}
                            >
                                Shop Now
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                        {staticBanners.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentBanner(i)}
                                className={`h-2 rounded-full transition-all ${currentBanner === i ? "w-8 bg-[#1a3356]" : "w-2 bg-slate-300 hover:bg-slate-400"}`}
                            />
                        ))}
                    </div>

                    {/* Arrows */}
                    <button
                        onClick={() => setCurrentBanner(prev => (prev - 1 + staticBanners.length) % staticBanners.length)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg hover:bg-white transition-all group"
                    >
                        <span className="material-symbols-outlined text-slate-800">chevron_left</span>
                    </button>
                    <button
                        onClick={() => setCurrentBanner(prev => (prev + 1) % staticBanners.length)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg hover:bg-white transition-all group"
                    >
                        <span className="material-symbols-outlined text-slate-800">chevron_right</span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;