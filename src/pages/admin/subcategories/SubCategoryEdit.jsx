import React, { useState } from "react";
import { 
  Save, 
  ChevronRight, 
  Tag, 
  Link as LinkIcon, 
  Image as ImageIcon, 
  UploadCloud,
  X,
  List,
  RefreshCcw,
  Layers,
  GitMerge
} from "lucide-react";

const generateSlug = (text) => {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
};

const EditSubCategoryPage = () => {
    // Dummy Data
    const [name, setName] = useState("Wireless Earbuds");
    const [slug, setSlug] = useState("wireless-earbuds");
    const [parent, setParent] = useState("Electronics");
    const [bannerPreview, setBannerPreview] = useState("https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=300&auto=format&fit=crop");

    const inputStyle = "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-white hover:border-gray-400";
    const labelStyle = "block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider flex items-center gap-2";

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setBannerPreview(URL.createObjectURL(file));
        }
    };

    return (
        <div className="min-h-screen bg-[#f8f9fa] font-sans p-2 md:p-4">
            <div className="max-w-7xl mx-auto space-y-4">
                
                {/* Header Area */}
                <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 md:px-5 md:py-4 shadow-sm">
                    <div className="flex flex-row items-center justify-between gap-2">
                        <div className="flex flex-col min-w-0">
                            <nav className="flex items-center gap-1 text-[10px] text-gray-400 mb-0.5 uppercase font-bold tracking-widest overflow-hidden whitespace-nowrap">
                                <span className="hidden sm:inline">Categories</span>
                                <ChevronRight size={10} className="hidden sm:inline" />
                                <span className="hidden sm:inline">{parent}</span>
                                <ChevronRight size={10} className="hidden sm:inline" />
                                <span className="text-blue-600 truncate">Modify Sub-Asset</span>
                            </nav>
                            <h1 className="text-base md:text-lg font-black text-gray-900 tracking-tight uppercase truncate flex items-center gap-2">
                                <GitMerge size={18} className="text-blue-500 rotate-90" />
                                Update Sub-Category
                            </h1>
                        </div>
                        
                        <button className="flex-shrink-0 px-3 py-1.5 md:px-4 md:py-1.5 text-xs font-bold text-gray-600 bg-gray-50 hover:bg-gray-100 rounded-lg flex items-center gap-2 transition-all border border-gray-200">
                            <List size={14} />
                            <span className="hidden xs:inline">Back to Index</span>
                        </button>
                    </div>
                </div>

                {/* Form Box */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-12">
                        
                        {/* Left Side: Sub-Category Details */}
                        <div className="md:col-span-7 p-5 md:p-6 space-y-5">
                            <div>
                                <label className={labelStyle}><Layers size={13} /> Parent Category</label>
                                <select 
                                    className={inputStyle}
                                    value={parent}
                                    onChange={(e) => setParent(e.target.value)}
                                >
                                    <option value="Electronics">Electronics</option>
                                    <option value="Fashion">Fashion</option>
                                    <option value="Home Decor">Home Decor</option>
                                </select>
                            </div>

                            <div>
                                <label className={labelStyle}><Tag size={13} /> Sub-Category Name</label>
                                <input 
                                    type="text" 
                                    className={inputStyle} 
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        setSlug(generateSlug(e.target.value));
                                    }}
                                />
                            </div>

                            <div>
                                <label className={labelStyle}><LinkIcon size={13} /> Sub-URL Slug</label>
                                <div className="flex items-center">
                                    <span className="bg-gray-50 border border-r-0 border-gray-300 px-2 md:px-3 py-2 rounded-l-lg text-[10px] md:text-[11px] text-gray-400 font-medium font-mono">
                                        /{parent.toLowerCase()}/
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
                            <label className={labelStyle}><ImageIcon size={13} /> Thumbnail / Banner</label>
                            <div className="flex-1 min-h-[160px]">
                                {!bannerPreview ? (
                                    <label className="w-full h-full border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center bg-white hover:bg-blue-50 hover:border-blue-300 transition-all cursor-pointer group p-4 text-center">
                                        <UploadCloud className="text-gray-300 group-hover:text-blue-500 mb-2" size={24} />
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Update Graphic</p>
                                        <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
                                    </label>
                                ) : (
                                    <div className="relative w-full h-full border border-gray-200 rounded-xl bg-white p-2 flex items-center justify-center group overflow-hidden shadow-inner">
                                        <img src={bannerPreview} alt="Preview" className="max-h-32 w-full object-cover rounded-lg transition-opacity group-hover:opacity-40" />
                                        
                                        <label className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer">
                                            <div className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                                <RefreshCcw size={12} /> Replace
                                            </div>
                                            <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
                                        </label>

                                        <button 
                                            onClick={() => setBannerPreview(null)}
                                            className="absolute top-2 right-2 bg-white/90 text-red-500 p-1 rounded-md shadow-sm hover:bg-red-50 transition-all border border-red-100 z-10"
                                        >
                                            <X size={12} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Action Footer */}
                    <div className="px-5 py-4 border-t border-gray-100 bg-white flex flex-col sm:flex-row justify-end items-center gap-3">

                        <button className="w-full sm:w-auto px-10 py-2.5 bg-blue-600 text-sm font-bold text-white rounded-lg hover:bg-blue-700 shadow-md shadow-blue-100 flex items-center justify-center gap-2 transition-all active:scale-95">
                            <Save size={16} />
                            Save Sub-Category
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default EditSubCategoryPage;