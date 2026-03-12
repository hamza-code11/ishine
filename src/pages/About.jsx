import { Link } from "react-router-dom";
import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function About() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
            <TopBar />
            <Navbar />

            {/* BREADCRUMB */}
            <nav className="max-w-6xl mx-auto w-full px-6 py-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                <Link to="/" className="hover:text-black">Home</Link>
                <span>/</span>
                <span className="text-black">About Us</span>
            </nav>

            <main className="flex-grow">
                {/* HERO SECTION */}
                <section className="max-w-6xl mx-auto px-6 py-16 border-b border-slate-100">
                    <h1 className="text-4xl md:text-5xl font-black text-[#1a3a5c] mb-6">
                        About iShine Wireless
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
                        Your one-stop shop for high-quality mobile accessories and replacement parts. 
                        We keep your devices powered and protected.
                    </p>
                </section>

                {/* STATS SECTION */}
                <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="space-y-1">
                        <h2 className="text-3xl font-black text-[#1a3a5c]">6,000+</h2>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Happy Clients</p>
                    </div>
                    <div className="space-y-1">
                        <h2 className="text-3xl font-black text-[#1a3a5c]">350+</h2>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Great Products</p>
                    </div>
                    <div className="space-y-1">
                        <h2 className="text-3xl font-black text-[#1a3a5c]">24/7</h2>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Support</p>
                    </div>
                    <div className="space-y-1">
                        <h2 className="text-3xl font-black text-[#1a3a5c]">100%</h2>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Secure Payments</p>
                    </div>
                </section>

                {/* MAIN CONTENT */}
                <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <h3 className="text-lg font-black uppercase tracking-tight text-[#1a3a5c]">Who We Are</h3>
                        <p className="text-slate-600 leading-relaxed">
                            iShine Wireless was founded with a mission to provide high-quality mobile accessories at affordable prices. 
                            We offer chargers, screen protectors, batteries, and more. Our commitment to reliability and innovation 
                            drives us to serve customers with top-tier products and exceptional service.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-lg font-black uppercase tracking-tight text-[#1a3a5c]">Our Mission</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Our goal is to enhance and extend the life of your devices. We are committed to offering reliable 
                            products at competitive prices while ensuring 100% customer satisfaction. We believe in quality 
                            that keeps you connected.
                        </p>
                    </div>
                </section>

                {/* SIMPLE FEATURES BAR */}
                <section className="bg-slate-50 py-10">
                    <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between gap-6">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#1a3a5c]">local_shipping</span>
                            <span className="text-xs font-black uppercase tracking-widest text-slate-700">Free Delivery</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#1a3a5c]">history</span>
                            <span className="text-xs font-black uppercase tracking-widest text-slate-700">7 Days Returns</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#1a3a5c]">verified_user</span>
                            <span className="text-xs font-black uppercase tracking-widest text-slate-700">Payment Security</span>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}