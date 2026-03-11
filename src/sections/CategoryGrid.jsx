import React from 'react';

const BannerGrid = () => {
    const banners = {
        woman: {
            title: "Woman's Latest Collection",
            discount: "Get 30% off",
            image: "https://images.pexels.com/photos/157675/fashion-men-s-fashion-man-portrait-157675.jpeg?auto=compress&cs=tinysrgb&w=600",
            bgColor: "bg-[#f5e1d2]"
        },
        bag: {
            title: "Woman's Latest Bags",
            discount: "Get 40% off",
            image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=600",
            bgColor: "bg-[#e8dcd2]"
        },
        couple: {
            title: "Best Collection for Stylish Couple",
            discount: "Get 30% off",
            image: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600",
            bgColor: "bg-[#f5e1d2]"
        },
        man: {
            title: "Men's Latest Collection",
            discount: "Get 30% off",
            image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=600",
            bgColor: "bg-[#f5e1d2]"
        },
        shoes: {
            title: "Men's Latest Shoes",
            discount: "Get 30% off",
            image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600",
            bgColor: "bg-[#f0f0f0]"
        }
    };

    // Side Card Component (4 small cards)
    const SideCard = ({ data }) => (
        <div className={`relative ${data.bgColor} rounded-[2rem] overflow-hidden h-[300px] flex items-center p-8 group shadow-sm`}>
            <div className="z-10 w-full">
                <p className="text-red-600 font-bold text-sm mb-1">{data.discount}</p>
                <h3 className="text-[#1a3356] text-xl font-black leading-tight mb-4 drop-shadow-sm">
                    {data.title}
                </h3>
                <button className="bg-[#1D73BE] hover:bg-[#1a3356] text-white px-6 py-2 rounded-lg font-bold text-xs transition-all duration-300 transform active:scale-95 shadow-md">
                    Shop Now
                </button>
            </div>
            {/* Image logic: Full cover to fit perfectly */}
            <img 
                src={data.image} 
                alt={data.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90"
            />
            {/* Soft overlay to make text readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent pointer-events-none" />
        </div>
    );

    return (
        <section className="container mx-auto px-4 py-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* 1. Left Column (2 Cards) */}
                <div className="md:col-span-4 flex flex-col gap-6 order-2 md:order-1">
                    <SideCard data={banners.woman} />
                    <SideCard data={banners.bag} />
                </div>

                {/* 2. Middle Column (Tall Card - Center) */}
                <div className="md:col-span-4 order-1 md:order-2">
                    <div className={`relative ${banners.couple.bgColor} rounded-[2rem] md:rounded-[3rem] overflow-hidden h-full min-h-[500px] md:min-h-[624px] flex flex-col items-center pt-16 p-8 group shadow-lg`}>
                        <div className="z-10 text-center mb-6">
                            <p className="text-red-600 font-bold text-sm mb-2">{banners.couple.discount}</p>
                            <h3 className="text-[#1a3356] text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-6 max-w-[280px]">
                                {banners.couple.title}
                            </h3>
                            <button className="bg-[#2ea4d5] hover:bg-[#1a3356] text-white px-10 py-3 rounded-xl font-bold text-sm transition-all shadow-xl active:scale-95">
                                Shop Now
                            </button>
                        </div>
                        <img 
                            src={banners.couple.image} 
                            alt="Couple"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        {/* Shadow overlay for text clarity */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-black/10 pointer-events-none" />
                    </div>
                </div>

                {/* 3. Right Column (2 Cards) */}
                <div className="md:col-span-4 flex flex-col gap-6 order-3 md:order-3">
                    <SideCard data={banners.man} />
                    <SideCard data={banners.shoes} />
                </div>

            </div>
        </section>
    );
};

export default BannerGrid;