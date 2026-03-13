import React, { useState } from "react";
import { 
  PlusCircle, Search, Edit3, Trash2, Copy, Check, 
  ChevronRight, ChevronLeft, ExternalLink, Layers, GitMerge, ImageIcon
} from "lucide-react";

const SubCategoriesListPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [copiedId, setCopiedId] = useState(null);

    const [subCategories] = useState([
        { id: 1, name: "Wireless Earbuds", parent: "Electronics", slug: "wireless-earbuds", products: 84, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=100&auto=format&fit=crop" },
        { id: 2, name: "Smart Watches", parent: "Electronics", slug: "smart-watches", products: 56, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=100&auto=format&fit=crop" },
        { id: 3, name: "Running Shoes", parent: "Fashion", slug: "running-shoes", products: 215, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=100&auto=format&fit=crop" },
        { id: 4, name: "Formal Shirts", parent: "Fashion", slug: "formal-shirts", products: 110, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=100&auto=format&fit=crop" },
    ]);

    const handleCopy = (slug, id) => {
        navigator.clipboard.writeText(slug);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="min-h-screen bg-[#f8f9fa] font-sans p-2 md:p-4">
            <div className="max-w-7xl mx-auto space-y-3">
                
                {/* Header */}
                <div className="bg-white rounded-xl border border-gray-200 px-4 py-3 md:px-5 md:py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
                    <div>
                        <nav className="flex items-center gap-1 text-[10px] text-gray-400 mb-0.5 uppercase font-bold tracking-widest">
                            <span>Inventory</span>
                            <ChevronRight size={10} />
                            <span className="text-blue-600">Sub-Categories</span>
                        </nav>
                        <h1 className="text-base md:text-lg font-black text-gray-900 tracking-tight uppercase flex items-center gap-2">
                           <GitMerge size={18} className="text-blue-600 rotate-90" />
                           Sub-Category Directory
                        </h1>
                    </div>
                    <button className="w-full md:w-auto px-5 py-2.5 bg-blue-600 text-xs font-black text-white rounded-lg hover:bg-blue-700 shadow-md shadow-blue-100 flex items-center justify-center gap-2 transition-all active:scale-95 uppercase tracking-wider">
                        <PlusCircle size={16} />
                        Add New Sub-Category
                    </button>
                </div>

                {/* Table Box */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    
                    {/* Compact Search */}
                    <div className="p-3 border-b border-gray-100">
                        <div className="relative max-w-xs">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                            <input 
                                type="text"
                                placeholder="Filter sub-categories..."
                                className="w-full pl-9 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-xs outline-none focus:border-blue-500 transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50/50">
                                <tr className="border-b border-gray-100">
                                    <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">Image</th>
                                    <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">Sub-Category Name</th>
                                    <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">Parent Category</th>
                                    <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">Slug</th>
                                    <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Items</th>
                                    <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {subCategories.map((sub) => (
                                    <tr key={sub.id} className="hover:bg-blue-50/10 transition-all group">
                                        {/* Image Column */}
                                        <td className="px-4 py-2.5">
                                            <div className="w-10 h-10 rounded-lg border border-gray-100 bg-white overflow-hidden flex items-center justify-center shadow-sm">
                                                {sub.image ? (
                                                    <img src={sub.image} alt="" className="w-full h-full object-cover" />
                                                ) : (
                                                    <ImageIcon size={16} className="text-gray-200" />
                                                )}
                                            </div>
                                        </td>

                                        <td className="px-4 py-2.5">
                                            <span className="font-bold text-gray-800 text-xs tracking-tight">{sub.name}</span>
                                        </td>

                                        <td className="px-4 py-2.5">
                                            <div className="flex items-center gap-1.5">
                                                <Layers size={12} className="text-gray-400" />
                                                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-tighter italic">{sub.parent}</span>
                                            </div>
                                        </td>

                                        <td className="px-4 py-2.5">
                                            <div className="flex items-center gap-1.5 group/copy">
                                                <span className="text-[11px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded italic">/{sub.slug}</span>
                                                <button 
                                                    onClick={() => handleCopy(sub.slug, sub.id)}
                                                    className={`p-1 rounded transition-all ${copiedId === sub.id ? 'text-green-500' : 'text-gray-300 hover:text-blue-500'}`}
                                                >
                                                    {copiedId === sub.id ? <Check size={12} /> : <Copy size={12} />}
                                                </button>
                                            </div>
                                        </td>

                                        <td className="px-4 py-2.5 text-center text-xs font-bold text-gray-600">{sub.products}</td>

                                        <td className="px-4 py-2.5 text-right">
                                            <div className="flex items-center justify-end gap-0.5">
                                                <button className="p-1.5 text-gray-400 hover:text-blue-600 transition-all"><Edit3 size={14} /></button>
                                                <button className="p-1.5 text-gray-400 hover:text-blue-600 transition-all"><ExternalLink size={14} /></button>
                                                <button className="p-1.5 text-gray-400 hover:text-red-500 transition-all"><Trash2 size={14} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer / Pagination */}
                    <div className="px-4 py-3 border-t border-gray-100 bg-gray-50/30 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic tracking-tighter">Total Sub-Categories: {subCategories.length}</span>
                        <div className="flex items-center gap-1">
                            <button className="p-1 text-gray-400 hover:bg-white rounded border border-transparent hover:border-gray-200"><ChevronLeft size={16} /></button>
                            <div className="flex gap-1">
                                <button className="w-6 h-6 rounded bg-blue-600 text-white text-[10px] font-bold">1</button>
                                <button className="w-6 h-6 rounded text-gray-500 text-[10px] font-bold hover:bg-white border border-transparent">2</button>
                            </div>
                            <button className="p-1 text-gray-400 hover:bg-white rounded border border-transparent hover:border-gray-200"><ChevronRight size={16} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubCategoriesListPage;