import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TopBar from "../../components/layout/TopBar";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function TrackOrder() {
    const [searchTerm, setSearchTerm] = useState("");

    // Status mapping for the progress bar
    const statusLevels = {
        "Pending": 1,
        "Processing": 2,
        "Shipped": 3,
        "Delivered": 4,
        "Cancelled": 0
    };

    const [orders] = useState([
        {
            id: "ISH-882391",
            date: "March 10, 2026",
            business: "Global Fix Electronics",
            taxId: "TX-9920-A1",
            total: 189.00,
            isVerified: true,
            status: "Processing", // Status add kiya gaya
            products: ["iPhone 13 Pro Max OLED Screen x1", "Premium Li-Ion Battery x2"]
        },
        {
            id: "ISH-445210",
            date: "March 12, 2026",
            business: "Global Fix Electronics",
            taxId: "TX-9920-A1",
            total: 350.00,
            isVerified: false,
            status: "Pending", // Status add kiya gaya
            products: ["MacBook Pro Keyboard Replacement x1"]
        }
    ]);

    const filteredOrders = orders.filter(order =>
        order.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col min-h-screen bg-[#f8fafc] font-sans antialiased text-slate-900">
            <TopBar />
            <Navbar />

            <main className="flex-grow py-12">
                <div className="max-w-[950px] mx-auto px-4 space-y-10">

                    {/* SEARCH & HEADER */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                        <div className="text-left">
                            <h1 className="text-2xl font-black text-[#1a3a5c] uppercase tracking-tight">Order History</h1>
                            <p className="text-xs text-slate-500 font-bold">Track your inventory status and shipments</p>
                        </div>
                        <div className="relative w-full md:w-96">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                            <input
                                type="text"
                                placeholder="Search by Order ID..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all font-bold text-sm"
                            />
                        </div>
                    </div>

                    {/* ORDERS LIST */}
                    <div className="space-y-8">
                        {filteredOrders.length > 0 ? (
                            filteredOrders.map((order) => {
                                const currentLevel = statusLevels[order.status];

                                return (
                                    <div key={order.id} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">

                                        {/* Top Bar: Order ID & Amount */}
                                        <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-slate-50/50 border-b border-slate-100">
                                            <div className="flex items-center gap-4">
                                                <div className="size-10 rounded-xl bg-[#1a3a5c] text-white flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-sm">package_2</span>
                                                </div>
                                                <div>
                                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Order ID</p>
                                                    <h3 className="text-md font-black text-[#1a3a5c]">#{order.id}</h3>
                                                </div>
                                            </div>

                                            {/* Status Badge */}
                                            <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${order.status === 'Cancelled' ? 'bg-red-100 text-red-600' :
                                                order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                                }`}>
                                                {order.status}
                                            </div>
                                        </div>

                                        {/* Status Stepper (New Section) */}
                                        <div className="px-8 pt-8">
                                            <div className="flex justify-between items-center relative">
                                                {/* Connecting Line */}
                                                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
                                                <div
                                                    className="absolute top-1/2 left-0 h-0.5 bg-[#1a3a5c] -translate-y-1/2 z-0 transition-all duration-1000"
                                                    style={{ width: `${order.status === 'Cancelled' ? 0 : (currentLevel - 1) * 33.33}%` }}
                                                ></div>

                                                {['Pending', 'Processing', 'Shipped', 'Delivered'].map((step, index) => (
                                                    <div key={step} className="relative z-10 flex flex-col items-center gap-2 bg-white px-2">
                                                        <div className={`size-4 rounded-full border-2 transition-colors duration-500 ${currentLevel > index ? 'bg-[#1a3a5c] border-[#1a3a5c]' : 'bg-white border-slate-200'
                                                            }`}></div>
                                                        <span className={`text-[9px] font-black uppercase tracking-tighter ${currentLevel > index ? 'text-[#1a3a5c]' : 'text-slate-400'}`}>
                                                            {step}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Content Body */}
                                        <div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                                            <div className="md:col-span-7 space-y-4">
                                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Order Items</p>
                                                <div className="space-y-2">
                                                    {order.products.map((product, index) => (
                                                        <div key={index} className="flex items-center gap-3 text-xs font-bold text-slate-600 bg-slate-50/50 p-3 rounded-xl">
                                                            <div className="size-1.5 bg-blue-400 rounded-full"></div>
                                                            {product}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 md:pl-8 flex flex-col justify-center">
                                                <div className="space-y-4">
                                                    <div className="flex justify-between items-end">
                                                        <div>
                                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Payable</p>
                                                            <p className="text-2xl font-black text-[#1a3a5c]">${order.total.toFixed(2)}</p>
                                                        </div>
                                                    </div>

                                                    {!order.isVerified ? (
                                                        <div className="bg-amber-50 border-2 border-amber-200 p-5 rounded-[2rem] flex flex-col gap-3 relative overflow-hidden animate-pulse">
                                                            {/* Subtle Background Icon */}
                                                            <span className="material-symbols-outlined absolute -right-2 -bottom-2 text-amber-200/40 text-6xl rotate-12 pointer-events-none">
                                                                gavel
                                                            </span>

                                                            <div className="flex items-center gap-3 relative z-10">
                                                                <div className="size-8 rounded-full bg-amber-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
                                                                    <span className="material-symbols-outlined text-sm font-bold">priority_high</span>
                                                                </div>
                                                                <h4 className="text-[11px] font-black text-amber-900 uppercase tracking-widest">Action Required: Admin Verification</h4>
                                                            </div>

                                                            <p className="text-[11px] text-amber-800 font-bold leading-relaxed relative z-10">
                                                                Our team is currently <span className="underline decoration-amber-500/50 underline-offset-2">verifying your Reseller / Tax ID</span>. The payment button will be enabled once the administrator grants approval.
                                                            </p>

                                                            <div className="flex items-center gap-2 text-[9px] font-black text-amber-600/70 uppercase tracking-tighter relative z-10">
                                                                <span className="size-1.5 bg-amber-500 rounded-full animate-ping"></span>
                                                                Status: Reviewing Credentials
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <Link
                                                            to="/Payment"
                                                            state={{ order }}
                                                            className="w-full bg-[#1a3a5c] hover:bg-[#0f253d] text-white font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2"
                                                        >
                                                            <span className="material-symbols-outlined text-sm">payment</span>
                                                            Proceed to Checkout
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="text-center py-20 bg-white rounded-[32px] border border-dashed border-slate-300">
                                <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">inventory</span>
                                <h3 className="text-xl font-bold text-slate-400">No matching orders found</h3>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}