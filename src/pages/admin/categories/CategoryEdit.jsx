import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
    Save,
    ChevronRight,
    Layers,
    Link as LinkIcon,
    Image as ImageIcon,
    UploadCloud,
    X,
    List,
    RefreshCcw,
    FolderTree,
    Type
} from "lucide-react";

const generateSlug = (text) => {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
};

const EditCategoryPage = () => {
    // Dummy initial data
    const [categoryName, setCategoryName] = useState("Smart Electronics");
    const [slug, setSlug] = useState("smart-electronics");
    const [parentCategory, setParentCategory] = useState("electronics");
    const [imagePreview, setImagePreview] = useState("https://images.unsplash.com/photo-1526733158272-60b741e7becb?q=80&w=200&auto=format&fit=crop");

    const inputStyle = "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-white hover:border-gray-400";
    const labelStyle = "block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider flex items-center gap-2";

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="min-h-screen bg-[#f8f9fa] font-sans p-2 md:p-4">
            <div className="max-w-7xl mx-auto space-y-4">

                {/* Responsive Header Area */}
                <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 md:px-5 md:py-4 shadow-sm">
                    <div className="flex flex-row items-center justify-between gap-2">
                        <div className="flex flex-col min-w-0">
                            {/* Breadcrumbs */}
                            <nav className="flex items-center gap-1 text-[10px] text-gray-400 mb-0.5 uppercase font-bold tracking-widest overflow-hidden whitespace-nowrap">
                                <span className="hidden sm:inline">Categories</span>
                                <ChevronRight size={10} className="hidden sm:inline" />
                                <span className="text-blue-600 truncate">Edit Asset</span>
                            </nav>
                            <h1 className="text-base md:text-lg font-black text-gray-900 tracking-tight uppercase truncate flex items-center gap-2">
                                <RefreshCcw size={18} className="text-blue-500" />
                                Update Category
                            </h1>
                        </div>

                        <Link
                            to="/admin/categories"
                            className="flex-shrink-0 px-3 py-1.5 md:px-4 md:py-1.5 text-xs font-bold text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg flex items-center gap-2 transition-all border border-gray-200"
                        >
                            <List size={14} />
                            <span className="hidden xs:inline">Show All</span>
                        </Link>
                    </div>
                </div>

                {/* Form Box */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-12">

                        {/* Left Side: Category Details */}
                        <div className="md:col-span-7 p-5 md:p-6 space-y-5">
                            {/* Category Name */}
                            <div>
                                <label className={labelStyle}><Type size={13} /> Category Name</label>
                                <input
                                    type="text"
                                    className={inputStyle}
                                    value={categoryName}
                                    onChange={(e) => {
                                        setCategoryName(e.target.value);
                                        setSlug(generateSlug(e.target.value));
                                    }}
                                />
                            </div>

                            {/* Parent Category Selection */}
                            <div>
                                <label className={labelStyle}><FolderTree size={13} /> Parent Category</label>
                                <select
                                    className={`${inputStyle} appearance-none cursor-pointer font-medium`}
                                    value={parentCategory}
                                    onChange={(e) => setParentCategory(e.target.value)}
                                >
                                    <option value="">None (Top Level)</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="home-living">Home & Living</option>
                                </select>
                            </div>

                            {/* Slug Index */}
                            <div>
                                <label className={labelStyle}><LinkIcon size={13} /> Public URL Slug</label>
                                <div className="flex items-center">
                                    <span className="bg-gray-50 border border-r-0 border-gray-300 px-2 md:px-3 py-2 rounded-l-lg text-[10px] md:text-[11px] text-gray-400 font-bold font-mono">
                                        /cat/
                                    </span>
                                    <input
                                        type="text"
                                        className={`${inputStyle} rounded-l-none bg-gray-50/30 font-medium text-blue-600 text-xs md:text-sm`}
                                        value={slug}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Media Modify */}
                        <div className="md:col-span-5 p-5 md:p-6 bg-gray-50/30 border-t md:border-t-0 md:border-l border-gray-100 flex flex-col">
                            <label className={labelStyle}><ImageIcon size={13} /> Category Thumbnail</label>
                            <div className="flex-1 min-h-[140px] md:min-h-[120px]">
                                {!imagePreview ? (
                                    <label className="w-full h-full border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center bg-white hover:bg-blue-50 hover:border-blue-300 transition-all cursor-pointer group p-4">
                                        <UploadCloud className="text-gray-300 group-hover:text-blue-500 mb-2" size={20} />
                                        <p className="text-[10px] font-bold text-gray-400 group-hover:text-blue-600 uppercase">Replace Image</p>
                                        <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
                                    </label>
                                ) : (
                                    <div className="relative w-full h-full border border-gray-200 rounded-xl bg-white p-4 flex items-center justify-center group shadow-sm">
                                        <img src={imagePreview} alt="Preview" className="max-h-28 w-auto object-contain transition-opacity group-hover:opacity-40" />

                                        {/* Edit Overlay */}
                                        <label className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer">
                                            <div className="bg-blue-600 text-white p-2.5 rounded-full shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                                                <UploadCloud size={18} />
                                            </div>
                                            <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
                                        </label>

                                        <button
                                            onClick={() => setImagePreview(null)}
                                            className="absolute top-2 right-2 bg-white text-red-500 p-1.5 rounded-md shadow-sm hover:bg-red-50 transition-all border border-red-100 z-10"
                                        >
                                            <X size={12} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="px-6 py-4 border-t border-gray-100 bg-white flex justify-end">
                        <button className="w-full sm:w-auto px-10 py-2.5 bg-blue-600 text-sm font-bold text-white rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-100 flex items-center justify-center gap-2 transition-all active:scale-95 uppercase tracking-wide">
                            <Save size={16} />
                            Update Category
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default EditCategoryPage;