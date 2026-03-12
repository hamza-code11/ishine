    import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Payment() {
    const location = useLocation();
    const navigate = useNavigate();
    
    // Order data normally context ya location state se aayega
    const orderData = location.state?.order || { id: "ISH-882391", total: 189.00 };
    
    const [paymentMethod, setPaymentMethod] = useState("card"); // card or wire
    const [loading, setLoading] = useState(false);

    const handlePayNow = (e) => {
        e.preventDefault();
        setLoading(true);
        // Payment processing simulation
        setTimeout(() => {
            setLoading(false);
            alert("Payment Successful! Your order is now being processed.");
            navigate("/track-order");
        }, 2000);
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#f8fafc] font-sans antialiased text-slate-900">
            <TopBar />
            <Navbar />

            <main className="flex-grow py-12 px-4">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* LEFT: PAYMENT METHODS */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8">
                            <h2 className="text-2xl font-black text-[#1a3a5c] mb-8 uppercase tracking-tight">Select Payment Method</h2>
                            
                            <div className="space-y-4">
                                {/* Credit/Debit Card Option */}
                                <div 
                                    onClick={() => setPaymentMethod("card")}
                                    className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${paymentMethod === 'card' ? 'border-[#1a3a5c] bg-blue-50/30' : 'border-slate-100'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`size-6 rounded-full border-4 flex items-center justify-center ${paymentMethod === 'card' ? 'border-[#1a3a5c]' : 'border-slate-300'}`}>
                                            {paymentMethod === 'card' && <div className="size-2 bg-[#1a3a5c] rounded-full"></div>}
                                        </div>
                                        <span className="font-bold">Credit / Debit Card</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="w-10 h-6 bg-slate-100 rounded border border-slate-200"></div>
                                        <div className="w-10 h-6 bg-slate-100 rounded border border-slate-200"></div>
                                    </div>
                                </div>

                                {/* Bank Wire Option */}
                                <div 
                                    onClick={() => setPaymentMethod("wire")}
                                    className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-center justify-between ${paymentMethod === 'wire' ? 'border-[#1a3a5c] bg-blue-50/30' : 'border-slate-100'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`size-6 rounded-full border-4 flex items-center justify-center ${paymentMethod === 'wire' ? 'border-[#1a3a5c]' : 'border-slate-300'}`}>
                                            {paymentMethod === 'wire' && <div className="size-2 bg-[#1a3a5c] rounded-full"></div>}
                                        </div>
                                        <span className="font-bold">Bank Wire Transfer</span>
                                    </div>
                                    <span className="material-symbols-outlined text-slate-400">account_balance</span>
                                </div>
                            </div>

                            {/* FORM AREA */}
                            <form onSubmit={handlePayNow} className="mt-10 space-y-6">
                                {paymentMethod === "card" ? (
                                    <div className="space-y-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Card Number</label>
                                            <input required type="text" placeholder="**** **** **** 1234" className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none font-mono" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Expiry Date</label>
                                                <input required type="text" placeholder="MM / YY" className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">CVV</label>
                                                <input required type="password" placeholder="***" className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none" />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-dashed border-slate-200 space-y-2">
                                        <p className="text-sm font-bold text-slate-600 italic">Please transfer the total amount to the following business account:</p>
                                        <div className="text-xs font-mono space-y-1 pt-2">
                                            <p>Bank: Global Business Bank</p>
                                            <p>A/C: 1234-5678-9012</p>
                                            <p>Swift: GBBXXXX</p>
                                        </div>
                                    </div>
                                )}

                                <button 
                                    disabled={loading}
                                    className="w-full bg-[#1a3a5c] text-white font-black py-5 rounded-2xl text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-900/20 transition-all active:scale-[0.98] disabled:opacity-50"
                                >
                                    {loading ? "Processing..." : `Pay $${orderData.total.toFixed(2)} Now`}
                                </button>
                                
                                <div className="flex items-center justify-center gap-2 text-[10px] font-black text-slate-400 uppercase">
                                    <span className="material-symbols-outlined text-[16px]">lock</span>
                                    Your payment data is encrypted and secure
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* RIGHT: ORDER SUMMARY */}
                    <div className="lg:col-span-5">
                        <div className="bg-[#1a3a5c] rounded-[2.5rem] p-8 text-white sticky top-10">
                            <h3 className="text-lg font-black uppercase tracking-tight mb-6">Order Summary</h3>
                            
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-sm opacity-80">
                                    <span>Order ID</span>
                                    <span className="font-mono">#{orderData.id}</span>
                                </div>
                                <div className="flex justify-between text-sm opacity-80">
                                    <span>Items Subtotal</span>
                                    <span>$174.00</span>
                                </div>
                                <div className="flex justify-between text-sm opacity-80">
                                    <span>Shipping Fee</span>
                                    <span>$15.00</span>
                                </div>
                            </div>

                            <div className="border-t border-white/10 pt-6 flex justify-between items-end">
                                <div>
                                    <p className="text-[10px] font-black text-blue-300 uppercase tracking-widest">Total Amount</p>
                                    <h2 className="text-3xl font-black">${orderData.total.toFixed(2)}</h2>
                                </div>
                                <div className="text-right text-[10px] font-bold text-green-400 bg-green-400/10 px-3 py-1 rounded-full uppercase">
                                    Approved
                                </div>
                            </div>

                            <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10">
                                <p className="text-xs font-medium leading-relaxed opacity-70">
                                    By completing this payment, you agree to our wholesale terms of service and refund policy for bulk electronics.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}