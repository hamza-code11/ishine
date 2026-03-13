import React, { useState } from "react";
import { 
  PlusCircle, Search, Edit3, Trash2, ChevronRight, 
  ChevronLeft, User, Mail, ShieldCheck, Calendar, Filter
} from "lucide-react";

const CustomerListPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const [customers] = useState([
        { id: 1, name: "Admin", email: "admin@example.com", role: "Admin", joinDate: "12 Oct 2025" },
        { id: 2, name: "Sara Khan", email: "sara.k@example.com", role: "User", joinDate: "05 Nov 2025" },
        { id: 3, name: "Ahmed Raza", email: "ahmed.admin@example.com", role: "User", joinDate: "20 Dec 2025" },
        { id: 4, name: "Maria Jan", email: "maria@example.com", role: "User", joinDate: "02 Jan 2026" },
    ]);

    const getRoleStyle = (role) => {
        switch (role) {
            case 'VIP': return 'bg-purple-50 text-purple-600 border-purple-100';
            case 'Premium': return 'bg-blue-50 text-blue-600 border-blue-100';
            default: return 'bg-gray-50 text-gray-500 border-gray-100';
        }
    };

    return (
        <div className="min-h-screen bg-[#f8f9fa] font-sans p-2 md:p-4">
            <div className="max-w-7xl mx-auto space-y-3">
                
                {/* Header */}
                <div className="bg-white rounded-xl border border-gray-200 px-4 py-3 md:px-5 md:py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
                    <div>
                        <nav className="flex items-center gap-1 text-[10px] text-gray-400 mb-0.5 uppercase font-bold tracking-widest">
                            <span>Users</span>
                            <ChevronRight size={10} />
                            <span className="text-blue-600">Customer Directory</span>
                        </nav>
                        <h1 className="text-base md:text-lg font-black text-gray-900 tracking-tight uppercase flex items-center gap-2">
                           <User size={18} className="text-blue-600" />
                           Accounts Management
                        </h1>
                    </div>
                </div>

                {/* Table Box */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    
                    {/* Compact Search & Filter */}
                    <div className="p-3 border-b border-gray-100 flex items-center justify-between">
                        <div className="relative max-w-xs w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                            <input 
                                type="text"
                                placeholder="Search by name or email..."
                                className="w-full pl-9 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-xs outline-none focus:border-blue-500 transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <button className="p-1.5 text-gray-400 hover:bg-gray-50 rounded-md border border-gray-100 transition-all">
                            <Filter size={16} />
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50/50">
                                <tr className="border-b border-gray-100">
                                    <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest">User Details</th>
                                    <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Account Role</th>
                                    <th className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Registered On</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {customers.map((user) => (
                                    <tr key={user.id} className="hover:bg-blue-50/10 transition-all group">
                                        
                                        {/* User Name & Email */}
                                        <td className="px-4 py-2.5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs shadow-inner">
                                                    {user.name.charAt(0)}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-gray-800 text-xs tracking-tight">{user.name}</span>
                                                    <span className="text-[10px] text-gray-400 flex items-center gap-1 font-medium italic">
                                                        <Mail size={10} /> {user.email}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Role Badge */}
                                        <td className="px-4 py-2.5 text-center">
                                            <span className={`px-2.5 py-1 rounded-md text-[9px] font-black uppercase border ${getRoleStyle(user.role)}`}>
                                                <div className="flex items-center justify-center gap-1">
                                                    <ShieldCheck size={10} />
                                                    {user.role}
                                                </div>
                                            </span>
                                        </td>

                                        {/* Join Date */}
                                        <td className="px-4 py-2.5 text-center">
                                            <div className="flex flex-col items-center">
                                                <span className="text-xs font-bold text-gray-600">{user.joinDate}</span>
                                                <span className="text-[9px] text-gray-400 flex items-center gap-1 uppercase tracking-tighter">
                                                    <Calendar size={10} /> Sync Date
                                                </span>
                                            </div>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer */}
                    <div className="px-4 py-3 border-t border-gray-100 bg-gray-50/30 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic tracking-tighter">Total Active Users: {customers.length}</span>
                        <div className="flex items-center gap-1">
                            <button className="p-1 text-gray-400 hover:bg-white rounded border border-transparent hover:border-gray-200"><ChevronLeft size={16} /></button>
                            <div className="flex gap-1">
                                <button className="w-6 h-6 rounded bg-blue-600 text-white text-[10px] font-bold shadow-sm">1</button>
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

export default CustomerListPage;