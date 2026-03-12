import { useState } from "react";
import { Link } from "react-router-dom";
import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        subject: "General Inquiry",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sending message...", formData);
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans antialiased text-slate-900">
            <TopBar />
            <Navbar />

            {/* MAIN CONTENT AREA */}
            <main className="flex-grow max-w-7xl mx-auto px-4 py-20 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* LEFT SIDE: Contact Info (Content) */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-black text-[#1a3a5c]">Get In Touch</h2>
                            <p className="text-slate-500 font-medium leading-relaxed">
                                Questions about wholesale pricing? Ready to open an account? Our team of experts is ready to help you grow your profit margins.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: "location_on", label: "Our Warehouse", value: "11311 Harry Hines Blvd #503, Dallas, TX 75229" },
                                { icon: "phone", label: "Call Us", value: "(469) 260-2475" },
                                { icon: "email", label: "Sales & Support", value: "sales@ishinewireless.com" },
                                { icon: "schedule", label: "Business Hours", value: "Mon-Fri 8:00 AM - 7:00 PM CST" },
                            ].map((info) => (
                                <div key={info.label} className="flex gap-5 p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
                                    <div className="size-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#1a3a5c] group-hover:bg-[#1a3a5c] group-hover:text-white transition-all">
                                        <span className="material-symbols-outlined">{info.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{info.label}</h4>
                                        <p className="font-bold text-slate-900 leading-tight">{info.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE: Contact Form */}
                    <div className="lg:col-span-7">
                        {submitted ? (
                            <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/60 border border-slate-100 p-12 lg:p-20 text-center space-y-6 animate-in zoom-in duration-500">
                                <div className="size-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="material-symbols-outlined text-[40px] font-bold">check</span>
                                </div>
                                <h2 className="text-3xl font-black text-[#1a3a5c]">Message Sent!</h2>
                                <p className="text-slate-500 text-lg">
                                    Thank you for reaching out. We'll reply within <span className="font-bold text-slate-900">24 hours</span>.
                                </p>
                                <button onClick={() => setSubmitted(false)} className="text-[#1a3a5c] font-bold hover:underline">
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/60 border border-slate-100 p-8 lg:p-12">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Name</label>
                                        <input required name="Name" value={formData.Name} onChange={handleInputChange} className="w-full px-4 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-500 outline-none transition-all" placeholder="Jane" />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                                        <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-500 outline-none transition-all" placeholder="jane@company.com" />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                                        <input required type="Subject" name="Subject" value={formData.Subject} onChange={handleInputChange} className="w-full px-4 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-500 outline-none transition-all" placeholder="Subject" />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-1">Message</label>
                                        <textarea required name="message" value={formData.message} onChange={handleInputChange} rows="5" className="w-full px-4 py-4 rounded-2xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:border-blue-500 outline-none transition-all resize-none" placeholder="How can we help you?" />
                                    </div>

                                    <button type="submit" className="w-full bg-[#1a3a5c] hover:bg-[#122b46] text-white font-black py-5 rounded-3xl shadow-xl shadow-blue-900/20 transition-all active:scale-[0.98] uppercase tracking-[0.1em]">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* 2. FOOTER */}
            <Footer />
        </div>
    );
}