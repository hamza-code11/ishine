import { Link } from "react-router-dom";
import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
            <TopBar />
            <Navbar />

            {/* BREADCRUMB */}
            <nav className="max-w-4xl mx-auto w-full px-6 py-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                <Link to="/" className="hover:text-black transition-colors">Home</Link>
                <span className="text-slate-300">/</span>
                <span className="text-black">Privacy Policy</span>
            </nav>

            <main className="flex-grow pb-20">
                {/* HEADER SECTION */}
                <header className="max-w-4xl mx-auto px-6 mb-12">
                    <h1 className="text-4xl font-black text-[#1a3a5c] mb-6 uppercase tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        At iShine Wireless, we value your privacy and are committed to protecting your personal information. 
                        This policy outlines how we collect, use, and safeguard your data.
                    </p>
                    <div className="mt-6 h-1 w-20 bg-blue-600 rounded-full"></div>
                </header>

                {/* CONTENT SECTION */}
                <div className="max-w-4xl mx-auto px-6 space-y-12">
                    
                    {/* 1. Information Collection */}
                    <section className="space-y-4">
                        <h3 className="text-xl font-black text-[#1a3a5c] uppercase tracking-tight">Information We Collect</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h4 className="font-black text-xs uppercase text-blue-600 mb-2">Personal Data</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">Name, email address, mailing address, phone number, and payment details for order processing.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h4 className="font-black text-xs uppercase text-blue-600 mb-2">Non-Personal Data</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">IP address, browser type, and usage data collected through secure cookies.</p>
                            </div>
                        </div>
                    </section>

                    {/* 2. Usage */}
                    <section className="space-y-4">
                        <h3 className="text-xl font-black text-[#1a3a5c] uppercase tracking-tight">How We Use Your Information</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                                "To process and complete your orders.",
                                "To communicate promotions and offers.",
                                "To analyze and improve our services.",
                                "To protect against unauthorized transactions."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium italic">
                                    <span className="material-symbols-outlined text-blue-500 text-sm mt-1">check_circle</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* 3. Protection */}
                    <section className="space-y-4 bg-[#1a3a5c] p-8 rounded-[2rem] text-white">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="material-symbols-outlined text-blue-400">shield_lock</span>
                            <h3 className="text-xl font-black uppercase tracking-tight">How We Protect Your Data</h3>
                        </div>
                        <p className="text-blue-100/80 text-sm leading-relaxed">
                            We implement encryption, secure payment gateways, and regular security audits. 
                            Your payment information is processed through secure, third-party processors 
                            and is <strong>never stored on our servers</strong>.
                        </p>
                    </section>

                    {/* 4. Sharing & Cookies */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <section className="space-y-4">
                            <h3 className="text-lg font-black text-[#1a3a5c] uppercase">Sharing Information</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                We do not sell or trade your information. We only share data with trusted 
                                partners who assist in our operations under strict confidentiality.
                            </p>
                        </section>
                        <section className="space-y-4">
                            <h3 className="text-lg font-black text-[#1a3a5c] uppercase">Cookies Policy</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                We use cookies to track preferences and improve your experience. You can 
                                disable cookies in your browser, though it may limit site functionality.
                            </p>
                        </section>
                    </div>

                    {/* 5. Final Rights */}
                    <section className="pt-8 border-t border-slate-100">
                        <div className="bg-slate-50 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6">
                            <div>
                                <h3 className="font-black text-[#1a3a5c] uppercase text-sm">Your Rights & Contact</h3>
                                <p className="text-xs text-slate-500 font-medium">Access, correct, or delete your information anytime.</p>
                            </div>
                            <Link to="/contact" className="bg-[#1a3a5c] text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-800 transition-all">
                                Contact Support
                            </Link>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}