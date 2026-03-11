import React from 'react';

import img from '../assets/products/00.avif';

const FullWidthHero = () => {
  // 1. Dynamic Data Object
  const heroData = {
    tagline: "IPHONE 15 PRO",
    title: "Pro. Beyond.",
    description: "The most powerful display components and internal parts engineered for perfection.",
    buttonText: "Shop Now",
    imageSrc: img, 
    accentColor: "#2ea4d5"
  };

  return (
    <section className="w-full bg-[#030712] text-white py-18 px-4 md:py-20 overflow-hidden relative">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[#0f2a52]/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Dynamic Text */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            <p className="text-[#2ea4d5] font-bold text-xs md:text-sm uppercase tracking-[0.3em] mb-4">
              {heroData.tagline}
            </p>

            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-[1000] tracking-tighter leading-[0.9] mb-6">
              {heroData.title}
            </h1>

            <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed max-w-[500px] mb-10">
              {heroData.description}
            </p>

            <button className="bg-[#2ea4d5] text-white px-10 py-4 rounded-xl font-black text-xs md:text-sm uppercase tracking-widest transition-all duration-300 transform active:scale-95 shadow-lg shadow-blue-700/30">
              {heroData.buttonText}
            </button>
          </div>

          {/* RIGHT COLUMN: Dynamic Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end z-10">
            <div className="relative group">
              <div className="">
                <img 
                  src={heroData.imageSrc} 
                  alt={heroData.title}
                  className="w-full  rounded-3xl h-auto max-w-[500px] object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#2ea4d5]/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#2ea4d5]/20 transition-all duration-700" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FullWidthHero;