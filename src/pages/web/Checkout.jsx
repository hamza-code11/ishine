import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Redirect ke liye
import TopBar from "../../components/layout/TopBar";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function Checkout() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        businessName: "", fullName: "", email: "", address: "",
        city: "", state: "", zip: "", note: "", taxId: "" // Tax ID added
    });

    const cartItems = [
        { id: 1, name: "iPhone 13 Pro Max OLED Screen", qty: 1, price: 145.00 },
        { id: 2, name: "Premium Li-Ion Battery for iPhone 12", qty: 2, price: 22.00 }
    ];
    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const shipping = 15.00;
    const total = subtotal + shipping;

    const handleInput = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        if (!formData.taxId || !formData.fullName || !formData.address) {
            alert("Please fill all required fields including Reseller / Tax ID");
            return;
        }
        // Order details ko state ya localstorage mein save kar ke redirect karein
        navigate("/track-order", { state: { orderDetails: formData, total, cartItems } });
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#f8fafc] font-sans text-slate-900">
            <TopBar />
            <Navbar />
            <main className="flex-grow max-w-7xl mx-auto px-6 py-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-7">
                        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                            <h2 className="text-xl font-black text-[#1a3a5c] uppercase tracking-tight">Business Checkout</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input name="businessName" onChange={handleInput} placeholder="Business Name *" className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#1a3a5c] outline-none" />
                                <input name="taxId" onChange={handleInput} placeholder="Reseller / Tax ID *" className="w-full p-3 rounded-xl border border-blue-200 bg-blue-50/30 text-sm focus:border-[#1a3a5c] outline-none font-bold" />
                                <input name="fullName" onChange={handleInput} placeholder="Full Name *" className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#1a3a5c] outline-none" />
                                <input name="email" onChange={handleInput} placeholder="Email Address *" className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#1a3a5c] outline-none" />
                                <input name="address" onChange={handleInput} placeholder="Street Address *" className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#1a3a5c] outline-none md:col-span-2" />
                                <input name="city" onChange={handleInput} placeholder="City *" className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#1a3a5c] outline-none" />
                                <div className="grid grid-cols-2 gap-2">
                                    <input name="state" onChange={handleInput} placeholder="State *" className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#1a3a5c] outline-none" />
                                    <input name="zip" onChange={handleInput} placeholder="Zip Code *" className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#1a3a5c] outline-none" />
                                </div>
                                <textarea name="note" onChange={handleInput} placeholder="Order Note (Optional)" rows="3" className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:border-[#1a3a5c] outline-none md:col-span-2 resize-none" />
                            </div>
                            <button onClick={handlePlaceOrder} className="w-full bg-[#1a3a5c] text-white font-black py-4 rounded-xl text-xs uppercase tracking-[0.2em] shadow-lg shadow-blue-900/20">Place Order</button>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sticky top-4">
                            <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Order Summary</h2>
                            {cartItems.map(item => (
                                <div key={item.id} className="flex justify-between mb-4 text-sm">
                                    <span className="font-bold">{item.name} (x{item.qty})</span>
                                    <span className="font-black text-[#1a3a5c]">${(item.price * item.qty).toFixed(2)}</span>
                                </div>
                            ))}
                            <div className="border-t pt-4 font-black text-lg text-[#1a3a5c] flex justify-between">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}