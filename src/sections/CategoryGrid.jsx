import React from 'react';

import img from '../assets/category/480PX BY 300PX.jpg.jpeg';

const categories = [
    { id: 1, img: img },
    { id: 2, img: img },
    { id: 3, img: img },
    { id: 4, img: img },
    { id: 5, img: img },
    { id: 6, img: img },
];

const PopularCategories = () => {
    return (
        <section className="max-w-7xl mx-auto px-1 py-12">
            {/* Header Section */}
            <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-4">
                <h2 className="text-2xl font-black text-[#1e3a5f] tracking-tight uppercase">
                    Popular Categories
                </h2>
                <a href="#" className="text-blue-600 font-bold text-sm hover:underline transition-all">
                    Browse All
                </a>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categories.map((cat) => (
                    <div
                        key={cat.id}
                        className="group relative h-[150px] w-full bg-[#f8f9fa] rounded-1xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-md"
                    >
                        {/* Full Card Image */}
                        <img
                            src={cat.img}
                            alt=""
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularCategories;