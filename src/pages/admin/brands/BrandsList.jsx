import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
    PlusCircle, Search, Edit3, Trash2, Copy, Check,
    ChevronRight, ChevronLeft, ExternalLink, Store
} from "lucide-react";

const BrandsListPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [copiedId, setCopiedId] = useState(null);

    const [brands] = useState([
        { id: 1, name: "Apple", slug: "apple-inc", products: 142, status: "Active", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
        { id: 2, name: "Samsung", slug: "samsung-global", products: 89, status: "Active", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
        { id: 3, name: "Nike", slug: "nike-official", products: 215, status: "Active", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" },
        { id: 4, name: "Adidas", slug: "adidas-originals", products: 110, status: "Inactive", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
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
                <div className="bg-white rounded-xl border border-gray-200 px-4 py-3 md:px-5 md:py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <nav className="flex items-center gap-1 text-[10px] text-gray-400 mb-0.5 uppercase font-bold tracking-widest">
                            <span>ishine</span>
                            <ChevronRight size={10} />
                            <span className="text-blue-600">Brands List</span>
                        </nav>
                        <h1 className="text-base md:text-lg font-black text-gray-900 tracking-tight uppercase">All Brands</h1>
                    </div>
                    <Link to="/admin/brands/add">
                        <button className="w-full md:w-auto px-5 py-2.5 bg-blue-600 text-xs font-black text-white rounded-lg hover:bg-blue-700 shadow-md shadow-blue-100 flex items-center justify-center gap-2 transition-all active:scale-95 uppercase tracking-wider">
                            <PlusCircle size={16} />
                            Add New Brand
                        </button>
                    </Link>
                </div>

                {/* Table Box */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

                    {/* Compact Search */}
                    <div className="p-3 border-b border-gray-100">
                        <div className="relative max-w-xs">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                            <input
                                type="text"
                                placeholder="Search..."
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
                                    <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">Brand Detail</th>
                                    <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">Slug</th>
                                    <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Items</th>
                                    <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Status</th>
                                    <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {brands.map((brand) => (
                                    <tr key={brand.id} className="hover:bg-blue-50/10 transition-all group">
                                        <td className="px-4 py-2.5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded border border-gray-100 bg-white p-1 flex items-center justify-center">
                                                    <img src={brand.logo} alt="" className="max-h-full max-w-full object-contain" />
                                                </div>
                                                <span className="font-bold text-gray-800 text-xs tracking-tight">{brand.name}</span>
                                            </div>
                                        </td>

                                        <td className="px-4 py-2.5">
                                            <div className="flex items-center gap-1.5 group/copy">
                                                <span className="text-[11px] font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded italic">/{brand.slug}</span>
                                                <button
                                                    onClick={() => handleCopy(brand.slug, brand.id)}
                                                    className={`p-1 rounded transition-all ${copiedId === brand.id ? 'text-green-500' : 'text-gray-300 hover:text-blue-500'}`}
                                                >
                                                    {copiedId === brand.id ? <Check size={12} /> : <Copy size={12} />}
                                                </button>
                                            </div>
                                        </td>

                                        <td className="px-4 py-2.5 text-center text-xs font-bold text-gray-600">{brand.products}</td>

                                        <td className="px-4 py-2.5 text-center">
                                            <span className={`px-2 py-0.5 rounded-md text-[9px] font-black uppercase ${brand.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-400'
                                                }`}>
                                                {brand.status}
                                            </span>
                                        </td>

                                        <td className="px-4 py-2.5 text-right">
                                            <div className="flex items-center justify-end gap-0.5">
                                                <Link
                                                    to="/admin/brands/edit"
                                                    className="p-1.5 text-gray-400 hover:text-blue-600 transition-all"
                                                >
                                                    <Edit3 size={14} />
                                                </Link>
                                                <button className="p-1.5 text-gray-400 hover:text-red-500 transition-all"><Trash2 size={14} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Compact Pagination */}
                    <div className="px-4 py-3 border-t border-gray-100 bg-gray-50/30 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-gray-400 uppercase">1-4 of 24</span>
                        <div className="flex items-center gap-1">
                            <button className="p-1 text-gray-400 hover:bg-white rounded border border-transparent hover:border-gray-200"><ChevronLeft size={16} /></button>
                            <div className="flex gap-1">
                                <button className="w-6 h-6 rounded bg-blue-600 text-white text-[10px] font-bold">1</button>
                                <button className="w-6 h-6 rounded text-gray-500 text-[10px] font-bold hover:bg-white">2</button>
                            </div>
                            <button className="p-1 text-gray-400 hover:bg-white rounded border border-transparent hover:border-gray-200"><ChevronRight size={16} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandsListPage;