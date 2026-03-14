import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
    PlusCircle, Search, Edit3, Trash2, Copy, Check,
    ChevronRight, ChevronLeft, ExternalLink, Layers,
    FolderTree, Image as ImageIcon
} from "lucide-react";

const CategoriesListPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [copiedId, setCopiedId] = useState(null);

    const [categories] = useState([
        { id: 1, name: "Electronics", slug: "electronics", parent: "—", items: 450, status: "Active", icon: "https://images.unsplash.com/photo-1526733158272-60b741e7becb?q=80&w=100&auto=format&fit=crop" },
        { id: 2, name: "Smartphones", slug: "smartphones", parent: "Electronics", items: 120, status: "Active", icon: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=100&auto=format&fit=crop" },
        { id: 3, name: "Fashion", slug: "fashion-lifestyle", parent: "—", items: 890, status: "Active", icon: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=100&auto=format&fit=crop" },
        { id: 4, name: "Summer Collection", slug: "summer-24", parent: "Fashion", items: 45, status: "Inactive", icon: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=100&auto=format&fit=crop" },
    ]);

    const handleCopy = (slug, id) => {
        navigator.clipboard.writeText(slug);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="min-h-screen bg-[#f8f9fa] font-sans p-2 md:p-4">
            <div className="max-w-7xl mx-auto space-y-3">

                {/* Header Section */}
                <div className="bg-white rounded-xl border border-gray-200 px-4 py-3 md:px-5 md:py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
                    <div>
                        <nav className="flex items-center gap-1 text-[10px] text-gray-400 mb-0.5 uppercase font-bold tracking-widest">
                            <span>ishine</span>
                            <ChevronRight size={10} />
                            <span className="text-blue-600">Categories</span>
                        </nav>
                        <h1 className="text-base md:text-lg font-black text-gray-900 tracking-tight uppercase flex items-center gap-2">
                            <Layers size={18} className="text-blue-600" />
                            All Categories 
                        </h1>
                    </div>
                    <Link
                        to="/admin/categories/add"
                        className="w-full md:w-auto px-5 py-2.5 bg-blue-600 text-xs font-black text-white rounded-lg hover:bg-blue-700 shadow-md shadow-blue-100 flex items-center justify-center gap-2 transition-all active:scale-95 uppercase tracking-wider"
                    >
                        <PlusCircle size={16} />
                        Add New Category
                    </Link>
                </div>

                {/* Main Content Box */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

                    {/* Search & Filters */}
                    <div className="p-3 border-b border-gray-100 bg-gray-50/20">
                        <div className="relative max-w-xs">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                            <input
                                type="text"
                                placeholder="Search categories..."
                                className="w-full pl-9 pr-3 py-1.5 bg-white border border-gray-200 rounded-md text-xs outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50/50 border-b border-gray-100">
                                    <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">Category Detail</th>
                                    <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">Parent</th>
                                    <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">URL Slug</th>
                                    <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Products</th>
                                    <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Status</th>
                                    <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {categories.map((cat) => (
                                    <tr key={cat.id} className="hover:bg-blue-50/20 transition-all group">
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-lg border border-gray-100 bg-white p-0.5 overflow-hidden shadow-sm">
                                                    <img src={cat.icon} alt="" className="w-full h-full object-cover rounded-md" />
                                                </div>
                                                <span className="font-bold text-gray-800 text-xs tracking-tight">{cat.name}</span>
                                            </div>
                                        </td>

                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-1.5 text-gray-500">
                                                <FolderTree size={12} className={cat.parent !== '—' ? 'text-blue-400' : 'text-gray-300'} />
                                                <span className="text-[11px] font-medium">{cat.parent}</span>
                                            </div>
                                        </td>

                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-1.5 group/copy">
                                                <code className="text-[10px] font-bold text-blue-600 bg-blue-50/50 px-2 py-0.5 rounded">/{cat.slug}</code>
                                                <button
                                                    onClick={() => handleCopy(cat.slug, cat.id)}
                                                    className={`p-1 rounded transition-all ${copiedId === cat.id ? 'text-green-500' : 'text-gray-300 hover:text-blue-500 opacity-0 group-hover/copy:opacity-100'}`}
                                                >
                                                    {copiedId === cat.id ? <Check size={12} /> : <Copy size={12} />}
                                                </button>
                                            </div>
                                        </td>

                                        <td className="px-4 py-3 text-center">
                                            <span className="text-xs font-black text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">{cat.items}</span>
                                        </td>

                                        <td className="px-4 py-3 text-center">
                                            <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-tighter ${cat.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                                                }`}>
                                                {cat.status}
                                            </span>
                                        </td>

                                        <td className="px-4 py-3 text-right">
                                            <div className="flex items-center justify-end gap-1">
                                                <Link
                                                    to={`/admin/categories/edit`}
                                                    className="p-1.5 text-gray-400 hover:text-blue-600 transition-all"
                                                >
                                                    <Edit3 size={14} />
                                                </Link>
                                                <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-all" title="Delete"><Trash2 size={14} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="px-4 py-3 border-t border-gray-100 bg-gray-50/30 flex items-center justify-between">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Displaying {categories.length} Categories</p>
                        <div className="flex items-center gap-2">
                            <button className="p-1.5 text-gray-400 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 transition-all"><ChevronLeft size={16} /></button>
                            <div className="flex gap-1.5">
                                <button className="w-7 h-7 rounded-lg bg-blue-600 text-white text-[10px] font-black shadow-sm shadow-blue-200">1</button>
                                <button className="w-7 h-7 rounded-lg bg-white text-gray-500 text-[10px] font-black border border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all">2</button>
                            </div>
                            <button className="p-1.5 text-gray-400 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 transition-all"><ChevronRight size={16} /></button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CategoriesListPage;