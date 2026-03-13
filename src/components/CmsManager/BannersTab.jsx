import React, { useState } from "react";
import {
    UploadCloud, RefreshCw, Image as ImageIcon,
    Trash2, PlusCircle, AlertCircle, Link, Type
} from "lucide-react";

const BannersTab = () => {
    const [banners, setBanners] = useState([
        {
            id: 1,
            title: "Summer Collection",
            image: "http://localhost:5173/src/assets/banner3.jpg",
            btnText: "Shop Now",
            link: "/category/summer"
        },
    ]);

    // Handle Add New Empty Banner Slot
    const addNewSlot = () => {
        const newId = banners.length > 0 ? Math.max(...banners.map(b => b.id)) + 1 : 1;
        setBanners([...banners, { id: newId, title: `Banner ${newId}`, image: "", btnText: "", link: "" }]);
    };

    // Handle Delete
    const deleteBanner = (id) => {
        if (window.confirm("Delete this banner?")) {
            setBanners(banners.filter(b => b.id !== id));
        }
    };

    // Handle Text Changes (Link & Button Text)
    const handleInputChange = (id, field, value) => {
        setBanners(banners.map(b => b.id === id ? { ...b, [field]: value } : b));
    };

    // Handle File Selection
    const handleFileChange = (e, id) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setBanners(banners.map(b => b.id === id ? { ...b, image: imageUrl } : b));
        }
    };

    return (
        <div className="p-6 space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                    <h2 className="text-sm font-black text-gray-900 uppercase tracking-tight">Banner Stack Management</h2>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest italic">Define visuals, buttons, and destinations</p>
                </div>
                <button
                    onClick={addNewSlot}
                    className="px-4 py-2 bg-blue-600 text-white text-[10px] font-black rounded-lg hover:bg-blue-700 flex items-center gap-2 shadow-md shadow-blue-100 uppercase tracking-widest transition-all active:scale-95"
                >
                    <PlusCircle size={14} />
                    Add New Banner Slot
                </button>
            </div>

            {/* Banners List */}
            <div className="space-y-12">
                {banners.length === 0 ? (
                    <div className="py-20 text-center border-2 border-dashed border-gray-100 rounded-2xl bg-gray-50/50">
                        <AlertCircle className="mx-auto text-gray-300 mb-2" size={32} />
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">No slots available</p>
                    </div>
                ) : (
                    banners.map((banner) => (
                        <div key={banner.id} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm space-y-4">

                            {/* Top Bar: Title & Delete */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 bg-blue-600 text-white text-[10px] font-black rounded flex items-center justify-center">
                                        {banner.id}
                                    </div>
                                    <input
                                        type="text"
                                        value={banner.title}
                                        onChange={(e) => handleInputChange(banner.id, 'title', e.target.value)}
                                        className="text-[11px] font-black text-gray-700 uppercase tracking-widest bg-transparent border-none focus:ring-0 w-48"
                                    />
                                </div>
                                <button
                                    onClick={() => deleteBanner(banner.id)}
                                    className="p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Left: Banner Preview */}
                                <div className="relative rounded-xl border-2 border-dashed border-gray-100 overflow-hidden h-48 bg-gray-50 group">
                                    <input
                                        type="file"
                                        id={`file-${banner.id}`}
                                        className="hidden"
                                        accept="image/*"
                                        onChange={(e) => handleFileChange(e, banner.id)}
                                    />
                                    {banner.image ? (
                                        <>
                                            <img src={banner.image} alt="" className="w-full h-full object-cover group-hover:blur-[1px] transition-all" />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                                                <label htmlFor={`file-${banner.id}`} className="cursor-pointer px-4 py-2 bg-white text-gray-900 rounded-lg font-black text-[10px] uppercase flex items-center gap-2 shadow-xl hover:bg-blue-600 hover:text-white transition-all">
                                                    <RefreshCw size={14} /> Replace
                                                </label>
                                            </div>
                                        </>
                                    ) : (
                                        <label htmlFor={`file-${banner.id}`} className="w-full h-full flex flex-col items-center justify-center gap-2 cursor-pointer">
                                            <UploadCloud size={24} className="text-gray-300" />
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Upload Banner</span>
                                        </label>
                                    )}
                                </div>

                                {/* Right: Controls */}
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Button Text Input */}
                                        <div className="space-y-1">
                                            <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                                                <Type size={12} className="text-blue-500" /> Button Text
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g. Shop Now"
                                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-bold focus:border-blue-500 focus:bg-white outline-none transition-all"
                                                value={banner.btnText}
                                                onChange={(e) => handleInputChange(banner.id, 'btnText', e.target.value)}
                                            />
                                        </div>

                                        {/* Link URL Input */}
                                        <div className="space-y-1">
                                            <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                                                <Link size={12} className="text-blue-500" /> Redirect Link
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g. /products/new"
                                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-bold focus:border-blue-500 focus:bg-white outline-none transition-all"
                                                value={banner.link}
                                                onChange={(e) => handleInputChange(banner.id, 'link', e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    {/* Preview Badge */}
                                    <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100 flex items-center justify-between">
                                        <span className="text-[10px] font-bold text-blue-700 uppercase tracking-tight">Active Link:</span>
                                        <span className="text-[10px] font-medium text-blue-500 truncate max-w-[150px] italic">
                                            {banner.link || "no-link-set"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Final Save Button */}
            {banners.length > 0 && (
                <div className="pt-4 flex justify-end">
                    <button className="px-8 py-3 bg-gray-900 text-white text-xs font-black rounded-xl hover:bg-black transition-all shadow-lg active:scale-95 uppercase tracking-widest">
                        Publish Changes
                    </button>
                </div>
            )}
        </div>
    );
};

export default BannersTab;