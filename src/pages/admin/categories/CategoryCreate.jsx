import React, { useState } from "react";
import { 
  PlusCircle, 
  ChevronRight, 
  Layers, 
  Link as LinkIcon, 
  Image as ImageIcon, 
  UploadCloud,
  X,
  List,
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

const AddCategoryPage = () => {
    const [categoryName, setCategoryName] = useState("");
    const [slug, setSlug] = useState("");
    const [parentCategory, setParentCategory] = useState("");
    const [imagePreview, setImagePreview] = useState(null);

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
                
                {/* Header Section */}
                <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 md:px-5 md:py-4 shadow-sm">
                    <div className="flex flex-row items-center justify-between gap-2">
                        <div className="flex flex-col min-w-0">
                            <nav className="flex items-center gap-1 text-[10px] text-gray-400 mb-0.5 uppercase font-bold tracking-widest">
                                <span className="hidden sm:inline">Inventory</span>
                                <ChevronRight size={10} className="hidden sm:inline" />
                                <span className="text-blue-600 truncate font-black">New Category</span>
                            </nav>
                            <h1 className="text-base md:text-lg font-black text-gray-900 tracking-tight uppercase flex items-center gap-2">
                                <Layers size={18} className="text-blue-600" />
                                Create Category Asset
                            </h1>
                        </div>
                        
                        <button className="flex-shrink-0 px-3 py-1.5 md:px-4 md:py-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg flex items-center gap-2 transition-all border border-blue-100">
                            <List size={14} />
                            <span className="hidden xs:inline">View All Categories</span>
                        </button>
                    </div>
                </div>

                {/* Form Box */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-12">
                        
                        {/* Left Side: Category Logic */}
                        <div className="md:col-span-7 p-5 md:p-8 space-y-6">
                            
                            {/* Category Name */}
                            <div>
                                <label className={labelStyle}><Type size={13} /> Category Title</label>
                                <input 
                                    type="text" 
                                    className={inputStyle} 
                                    placeholder="e.g. Smart Electronics"
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
                                    className={`${inputStyle} appearance-none cursor-pointer`}
                                    value={parentCategory}
                                    onChange={(e) => setParentCategory(e.target.value)}
                                >
                                    <option value="">None (Top Level)</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="home-living">Home & Living</option>
                                </select>
                                <p className="text-[9px] text-gray-400 mt-2 italic font-medium">Select "None" to make this a primary root category.</p>
                            </div>

                            {/* Slug */}
                            <div>
                                <label className={labelStyle}><LinkIcon size={13} /> Public URL Slug</label>
                                <div className="flex items-center">
                                    <span className="bg-gray-50 border border-r-0 border-gray-300 px-3 py-2 rounded-l-lg text-[10px] md:text-[11px] text-gray-400 font-bold font-mono">
                                        /cat/
                                    </span>
                                    <input 
                                        type="text" 
                                        className={`${inputStyle} rounded-l-none bg-gray-50/30 font-bold text-blue-600 text-xs md:text-sm`}
                                        value={slug}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Media/Thumbnail */}
                        <div className="md:col-span-5 p-5 md:p-8 bg-gray-50/30 border-t md:border-t-0 md:border-l border-gray-100 flex flex-col">
                            <label className={labelStyle}><ImageIcon size={13} /> Thumbnail / Icon</label>
                            <div className="flex-1 min-h-[160px] md:min-h-[140px]">
                                {!imagePreview ? (
                                    <label className="w-full h-full border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center bg-white hover:bg-blue-50 hover:border-blue-300 transition-all cursor-pointer group p-4 text-center">
                                        <div className="p-3 bg-gray-50 rounded-full group-hover:bg-blue-100 transition-colors mb-3">
                                            <UploadCloud className="text-gray-400 group-hover:text-blue-600" size={24} />
                                        </div>
                                        <p className="text-[10px] font-black text-gray-400 group-hover:text-blue-600 uppercase tracking-widest">Upload Asset</p>
                                        <p className="text-[9px] text-gray-300 mt-1">PNG, JPG up to 2MB</p>
                                        <input type="file" className="hidden" onChange={handleImageChange} accept="image/*" />
                                    </label>
                                ) : (
                                    <div className="relative w-full h-full border border-gray-200 rounded-xl bg-white p-6 flex items-center justify-center shadow-inner">
                                        <img src={imagePreview} alt="Preview" className="max-h-32 w-auto object-contain" />
                                        <button 
                                            onClick={() => setImagePreview(null)}
                                            className="absolute top-3 right-3 bg-white text-red-500 p-1.5 rounded-lg shadow-sm hover:bg-red-50 transition-all border border-red-100"
                                        >
                                            <X size={14} />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Action Footer */}
                    <div className="px-6 py-4 border-t border-gray-100 bg-white flex justify-end">
                        <button className="w-full md:w-auto px-10 py-3 bg-blue-600 text-sm font-black text-white rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-100 flex items-center justify-center gap-3 transition-all active:scale-95 uppercase tracking-widest">
                            <PlusCircle size={18} />
                            Create Category
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AddCategoryPage;