import { useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "../../components/layout/TopBar";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function Wishlist() {
    // Dummy Data with Quantity
    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            name: "iPhone 13 Pro Max OLED Screen",
            sku: "LCD-IP13PM-PR",
            price: 145.00,
            qty: 1,
            stock: "In Stock",
            image: "https://via.placeholder.com/60" 
        },
        {
            id: 2,
            name: "Samsung S22 Ultra Charging Port",
            sku: "CP-S22U-ORG",
            price: 12.50,
            qty: 1,
            stock: "Low Stock",
            image: "https://via.placeholder.com/60"
        }
    ]);

    // Quantity Handlers
    const updateQty = (id, delta) => {
        setWishlistItems(prev => prev.map(item => 
            item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
        ));
    };

    const removeItem = (id) => {
        setWishlistItems(wishlistItems.filter(item => item.id !== id));
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#f8fafc] font-sans antialiased text-slate-900">
            <TopBar />
            <Navbar />

            {/* BREADCRUMBS & TITLE */}
            <div className="bg-white border-b border-slate-200 py-4">
                <div className="max-w-6xl mx-auto px-6">
                    <nav className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        <Link to="/" className="hover:text-[#1a3a5c] transition-colors">Home</Link>
                        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                        <span className="text-[#1a3a5c]">Wishlist</span>
                    </nav>
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-black text-[#1a3a5c] flex items-center gap-2">
                            My Wishlist <span className="text-sm font-medium text-slate-400">({wishlistItems.length})</span>
                        </h1>
                        {wishlistItems.length > 0 && (
                             <button className="text-[11px] font-black uppercase tracking-widest text-red-500 hover:text-red-600">
                                Clear All
                             </button>
                        )}
                    </div>
                </div>
            </div>

            <main className="flex-grow max-w-6xl mx-auto px-6 py-8 w-full">
                {wishlistItems.length > 0 ? (
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                        {/* Table Header */}
                        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-slate-50 border-b border-slate-200 text-[10px] font-black text-slate-400 uppercase tracking-[0.15em]">
                            <div className="col-span-5">Product</div>
                            <div className="col-span-2 text-center">Price</div>
                            <div className="col-span-2 text-center">Quantity</div>
                            <div className="col-span-3 text-right">Action</div>
                        </div>

                        {/* Items */}
                        <div className="divide-y divide-slate-100">
                            {wishlistItems.map((item) => (
                                <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-4 items-center">
                                    
                                    {/* Product */}
                                    <div className="col-span-5 flex items-center gap-4">
                                        <img src={item.image} alt="" className="size-14 rounded-lg bg-slate-100 border border-slate-100 object-cover" />
                                        <div>
                                            <h3 className="text-sm font-bold text-slate-800 leading-tight">{item.name}</h3>
                                            <div className="flex items-center gap-3 mt-1">
                                                <span className="text-[10px] font-bold text-slate-400 uppercase">SKU: {item.sku}</span>
                                                <span className={`text-[9px] font-black uppercase px-1.5 py-0.5 rounded ${item.stock === 'In Stock' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'}`}>
                                                    {item.stock}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="col-span-2 text-center">
                                        <p className="text-sm font-black text-[#1a3a5c]">${item.price.toFixed(2)}</p>
                                    </div>

                                    {/* QUANTITY SELECTOR */}
                                    <div className="col-span-2 flex justify-center">
                                        <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden h-9">
                                            <button onClick={() => updateQty(item.id, -1)} className="px-2 hover:bg-slate-50 text-slate-500 transition-colors">-</button>
                                            <span className="w-8 text-center text-xs font-bold border-x border-slate-200">{item.qty}</span>
                                            <button onClick={() => updateQty(item.id, 1)} className="px-2 hover:bg-slate-50 text-slate-500 transition-colors">+</button>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="col-span-3 flex justify-end items-center gap-2">
                                        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#1a3a5c] hover:bg-[#122b46] text-white px-4 py-2 rounded-lg text-[11px] font-bold transition-all">
                                            <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                                            <span className="md:hidden lg:inline">Add to Cart</span>
                                        </button>
                                        <button 
                                            onClick={() => removeItem(item.id)}
                                            className="size-9 flex items-center justify-center text-slate-300 hover:text-red-500 border border-slate-100 rounded-lg transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-[20px]">delete</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Summary Footer */}
                        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end items-center gap-6">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                                Estimated Total: <span className="text-base font-black text-[#1a3a5c] ml-2">
                                    ${wishlistItems.reduce((acc, item) => acc + (item.price * item.qty), 0).toFixed(2)}
                                </span>
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-200">
                        <span className="material-symbols-outlined text-slate-200 text-5xl mb-3">heart_plus</span>
                        <h2 className="text-lg font-bold text-slate-400">Your wishlist is empty</h2>
                        <Link to="/" className="inline-block mt-4 bg-[#1a3a5c] text-white px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-widest">
                            Continue Shopping
                        </Link>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}