import React, { useState } from "react";
import { 
  PlusCircle, ChevronRight, Layers, Link as LinkIcon, 
  Image as ImageIcon, UploadCloud, X, List, GitGraph, Type
} from "lucide-react";

const AddSubCategoryPage = () => {
    const [name, setName] = useState("");
    const [slug, setSlug] = useState("");
    const [parent, setParent] = useState("");

    const inputStyle = "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none bg-white";
    const labelStyle = "block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider flex items-center gap-2";

    return (
        <div className="min-h-screen bg-[#f8f9fa] p-2 md:p-4 font-sans">
            <div className="max-w-7xl mx-auto space-y-4">
                {/* Header */}
                <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm flex justify-between items-center">
                    <div>
                        <nav className="flex items-center gap-1 text-[10px] text-gray-400 mb-0.5 uppercase font-bold tracking-widest">
                            <span>Categories</span>
                            <ChevronRight size={10} />
                            <span className="text-blue-600">New Sub-Category</span>
                        </nav>
                        <h1 className="text-lg font-black text-gray-900 uppercase flex items-center gap-2">
                            <GitGraph size={20} className="text-blue-600" />
                            Create Sub-Asset
                        </h1>
                    </div>
                    <button className="px-4 py-2 text-xs font-bold text-blue-600 bg-blue-50 rounded-lg flex items-center gap-2 border border-blue-100">
                        <List size={14} /> <span className="hidden sm:inline">View Tree</span>
                    </button>
                </div>

                {/* Form */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm grid grid-cols-1 md:grid-cols-12 overflow-hidden">
                    <div className="md:col-span-7 p-6 space-y-5">
                        <div>
                            <label className={labelStyle}><Layers size={13} /> Parent Category</label>
                            <select className={inputStyle} value={parent} onChange={(e) => setParent(e.target.value)}>
                                <option value="">Select Primary Category...</option>
                                <option value="1">Electronics</option>
                                <option value="2">Fashion</option>
                            </select>
                        </div>
                        <div>
                            <label className={labelStyle}><Type size={13} /> Sub-Category Name</label>
                            <input type="text" className={inputStyle} placeholder="e.g. Wireless Earbuds" value={name} onChange={(e) => {setName(e.target.value); setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))}} />
                        </div>
                        <div>
                            <label className={labelStyle}><LinkIcon size={13} /> Sub-URL Slug</label>
                            <div className="flex">
                                <span className="bg-gray-100 border border-r-0 border-gray-300 px-3 py-2 rounded-l-lg text-[10px] text-gray-400 font-bold">/sub/</span>
                                <input type="text" className={`${inputStyle} rounded-l-none font-medium text-blue-600`} value={slug} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-5 p-6 bg-gray-50/30 border-l border-gray-100 flex flex-col items-center justify-center border-t md:border-t-0">
                        <label className={`${labelStyle} self-start w-full`}><ImageIcon size={13} /> Banner / Icon</label>
                        <div className="w-full h-40 border-2 border-dashed border-gray-200 rounded-xl bg-white flex flex-col items-center justify-center group cursor-pointer hover:border-blue-300 transition-all">
                            <UploadCloud className="text-gray-300 group-hover:text-blue-500 mb-2" size={30} />
                            <p className="text-[10px] font-black text-gray-400 uppercase">Upload Sub-Asset</p>
                        </div>
                    </div>
                    <div className="md:col-span-12 px-6 py-4 border-t border-gray-100 bg-white flex justify-end">
                        <button className="px-8 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-lg flex items-center gap-2 shadow-lg shadow-blue-100">
                            <PlusCircle size={18} /> Save Sub-Category
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddSubCategoryPage;