// import React from 'react';

// import img1 from '../assets/products/01.webp';
// import img2 from '../assets/products/02.webp';
// import img3 from '../assets/products/03.webp';
// import img4 from '../assets/products/04.webp';
// import img5 from '../assets/products/05.webp';

// const premiumProducts = [
//     { id: 1, brand: "Apple Parts", title: "iPhone 12 LCD Incell", price: "28.00", img: img1 },
//     { id: 2, brand: "Apple Parts", title: "iPhone 11 Pro Screen", price: "35.00", img: img2 },
//     { id: 3, brand: "Samsung Parts", title: "A12 LCD Framework", price: "16.00", img: img3 },
//     { id: 4, brand: "Apple Parts", title: "iPhone X Soft OLED", price: "22.00", img: img4 },
//     { id: 5, brand: "Samsung Parts", title: "S20 FE Service Pack", price: "95.00", img: img5 },
// ];

// export default function FeaturedProducts() {
//     return (
//         <section className="py-12 bg-gray-50/30">
//             <div className="container mx-auto px-4">
//                 {/* Section Header */}
//                 <div className="mb-10 flex items-center justify-between border-b border-gray-100 pb-5">
//                     <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
//                         Wholesale <span className="text-[#1D73BE]">LCDs & Screens</span>
//                     </h2>
//                     {/* Right corner options removed as requested */}
//                 </div>

//                 {/* Products Grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//                     {premiumProducts.map((product) => (
//                         <div key={product.id} className="bg-white group rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">

//                             {/* Image Container */}
//                             <div className="bg-gray-50 rounded-xl overflow-hidden mb-5 aspect-square flex items-center justify-center relative">
//                                 <img
//                                     src={product.img}
//                                     alt={product.title}
//                                     className="object-contain w-3/4 h-3/4 group-hover:scale-110 transition-transform duration-500"
//                                 />
//                                 {/* Quick Badge (Optional) */}
//                                 <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-black uppercase tracking-tighter text-slate-500">
//                                     New
//                                 </div>
//                             </div>

//                             {/* Product Info */}
//                             <div className="space-y-1 px-1">
//                                 <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider uppercase">
//                                     {product.brand}
//                                 </p>
//                                 <h3 className="text-[14px] font-black text-slate-800 line-clamp-1 group-hover:text-[#1D73BE] transition-colors">
//                                     {product.title}
//                                 </h3>
//                                 <div className="pt-2 flex items-center justify-between">
//                                     <span className="text-xl font-black text-slate-900 tracking-tighter">
//                                         ${product.price}
//                                     </span>
//                                 </div>
//                             </div>

//                             {/* Add to Cart Button */}
//                             <button className="w-full mt-5 bg-white border-2 border-gray-100 text-slate-700 py-2.5 rounded-xl text-[12px] font-black uppercase tracking-tight hover:bg-[#1D73BE] hover:border-[#1D73BE] hover:text-white transition-all duration-200">
//                                 Add to Cart
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }












import React from 'react';

const testimonials = [
    { id: 1, name: "Ali Khan",  text: "Best quality iPhone screens I've ever used. Highly recommended!", rating: 5 },
    { id: 2, name: "Sara Ahmed",  text: "The Samsung service packs are genuine and fit perfectly.", rating: 5 },
    { id: 3, name: "John Doe",  text: "Fast shipping and great wholesale prices. 10/10 service.", rating: 4 },
    { id: 4, name: "Bilal Raza",  text: "The Incell displays have amazing brightness and colors.", rating: 5 },
    { id: 5, name: "Hamza Sheikh",  text: "Consistent quality every time I order. My customers are happy.", rating: 5 },
];

export default function FeaturedProducts() {
    return (
        <section className="py-16 bg-gray-50/50 overflow-hidden">
            <div className="container mx-auto px-4 mb-10 text-center">
                <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight mb-2">
                    What Our <span className="text-[#1D73BE]">Clients Say</span>
                </h2>
                <p className='text-slate-400 text-sm md:text-base leading-relaxed'>Real experiences from customers who trust our quality, service, and fast delivery.</p>
            </div>

            {/* Scrolling Wrapper */}
            <div className="flex overflow-hidden group">
                {/* animate-marquee: Aapki custom animation class
                    hover:[animation-play-state:paused]: Hover karne par animation ruk jayegi
                */}
                <div className="flex whitespace-nowrap animate-marquee w-max hover:[animation-play-state:paused] cursor-default py-4">
                    {[...Array(3)].map((_, groupIndex) => (
                        <div key={groupIndex} className="flex items-center gap-6 px-3">
                            {testimonials.map((item, i) => (
                                <div 
                                    key={`${groupIndex}-${i}`} 
                                    className="w-[300px] md:w-[400px] bg-white rounded-2xl p-6 shadow-sm border border-gray-100 shrink-0 whitespace-normal inline-block align-top hover:shadow-lg transition-shadow duration-300"
                                >
                                    {/* Stars */}
                                    <div className="flex mb-4 gap-0.5">
                                        {[...Array(item.rating)].map((_, starIndex) => (
                                            <svg key={starIndex} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Comment */}
                                    <p className="text-slate-600 text-sm md:text-base mb-6 leading-relaxed">
                                        "{item.text}"
                                    </p>

                                    {/* User Info */}
                                    <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
                                        <div className="h-10 w-10 rounded-full bg-[#1D73BE] flex items-center justify-center text-white font-bold text-sm">
                                            {item.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-black text-slate-800 text-sm leading-none">{item.name}</h4>
                                             {/* <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mt-1">{item.role}</p> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}