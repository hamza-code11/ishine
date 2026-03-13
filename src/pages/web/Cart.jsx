import { useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "../../components/layout/TopBar";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function Cart() {
  // Dummy Cart Data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "iPhone 13 Pro Max OLED Screen",
      sku: "LCD-IP13PM-PR",
      price: 145.0,
      qty: 1,
      image: "https://via.placeholder.com/60",
    },
    {
      id: 2,
      name: "Premium Li-Ion Battery for iPhone 12",
      sku: "BAT-IP12-PRM",
      price: 22.0,
      qty: 2,
      image: "https://via.placeholder.com/60",
    },
  ]);

  const updateQty = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = 15.0; // Flat rate dummy

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc] font-sans antialiased text-slate-900">
      <TopBar />
      <Navbar />

      {/* BREADCRUMBS */}
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.1em] text-slate-400 mb-1">
            <Link to="/" className="hover:text-[#1a3a5c]">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-[#1a3a5c]">Shopping Cart</span>
          </nav>
          <h1 className="text-xl font-black text-[#1a3a5c]">Your Cart</h1>
        </div>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-6 py-10 w-full">
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT: Cart Items List */}
            <div className="lg:col-span-8 space-y-4">
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-slate-50 border-b border-slate-200 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Total</div>
                </div>

                <div className="divide-y divide-slate-100">
                  {cartItems.map((item) => (
                    <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-5 items-center">
                      <div className="col-span-6 flex items-center gap-4">
                        <img src={item.image} alt="" className="size-14 rounded-lg bg-slate-50 border border-slate-100" />
                        <div>
                          <h3 className="text-sm font-bold text-slate-800 leading-tight">{item.name}</h3>
                          <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase">SKU: {item.sku}</p>
                          <button onClick={() => removeItem(item.id)} className="text-[10px] font-bold text-red-500 uppercase mt-2 hover:underline">
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="col-span-2 text-center">
                        <p className="text-sm font-bold text-slate-600">${item.price.toFixed(2)}</p>
                      </div>

                      <div className="col-span-2 flex justify-center">
                        <div className="flex items-center border border-slate-200 rounded-lg h-8">
                          <button onClick={() => updateQty(item.id, -1)} className="px-2 text-slate-400 hover:text-[#1a3a5c]">-</button>
                          <span className="w-8 text-center text-xs font-bold">{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="px-2 text-slate-400 hover:text-[#1a3a5c]">+</button>
                        </div>
                      </div>

                      <div className="col-span-2 text-right">
                        <p className="text-sm font-black text-[#1a3a5c]">${(item.price * item.qty).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/shop" className="inline-flex items-center gap-2 text-xs font-bold text-[#1a3a5c] hover:underline">
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Continue Shopping
              </Link>
            </div>

            {/* RIGHT: Order Summary */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
                <h2 className="text-sm font-black text-[#1a3a5c] uppercase tracking-widest border-b border-slate-100 pb-3">Order Summary</h2>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">Subtotal</span>
                    <span className="font-bold text-slate-800">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">Shipping (Flat Rate)</span>
                    <span className="font-bold text-slate-800">${shipping.toFixed(2)}</span>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex justify-between">
                    <span className="text-base font-black text-[#1a3a5c]">Total</span>
                    <span className="text-base font-black text-[#1a3a5c]">${(subtotal + shipping).toFixed(2)}</span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="block w-full bg-[#1a3a5c] hover:bg-[#122b46] text-white font-black py-4 rounded-xl shadow-lg shadow-blue-900/10 transition-all uppercase tracking-widest text-xs text-center"
                >
                  Proceed to Checkout
                </Link>

                <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                  <span className="material-symbols-outlined text-[14px]">lock</span>
                  Secure Checkout
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-2xl border border-dashed border-slate-200">
            <span className="material-symbols-outlined text-slate-200 text-6xl mb-4">shopping_basket</span>
            <h2 className="text-xl font-bold text-slate-400">Your cart is currently empty.</h2>
            <Link to="/shop" className="inline-block mt-6 bg-[#1a3a5c] text-white px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest">
              Start Shopping
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}