import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    // Dynamic Links Arrays
    const quickLinks = [
        { name: 'Shop All', path: '/shop' },
        { name: 'Track Order', path: '/track-order' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Privacy Policy', path: '/PrivacyPolicy' },
        { name: 'Terms And Conditions', path: '/TermsAndConditions' }
    ];

    const categories = [
        { name: 'LCD Screens', path: '/category/lcd' },
        { name: 'Charging Ports', path: '/category/ports' },
        { name: 'Batteries', path: '/category/batteries' },
        { name: 'Small Parts', path: '/category/parts' },
        { name: 'Tools', path: '/category/tools' }
    ];

    return (
        <footer className="bg-[#0f172a] text-white pt-16 pb-8 border-t border-slate-800 font-sans">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* 1. Brand Info - Navbar Style Logo */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="bg-[#1D73BE] p-1.5 rounded-lg shadow-lg shadow-[#1D73BE]/20">
                                <span className="material-symbols-outlined text-white text-2xl">smartphone</span>
                            </div>
                            <span className="text-2xl font-black text-white tracking-tighter uppercase">
                                ISHINE<span className="text-[#1D73BE]">WIRELESS</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
                            Leading wholesale distributor of premium mobile repair parts.
                            OEM quality components for professional repair shops since 2020.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {[
                                { icon: <FaFacebookF />, name: 'facebook' },
                                { icon: <FaInstagram />, name: 'instagram' },
                                { icon: <FaXTwitter />, name: 'twitter' }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href="#"
                                    className="size-10 bg-slate-800 hover:bg-[#1D73BE] rounded-xl flex items-center justify-center transition-all border border-slate-700 group text-slate-400 hover:text-white text-lg"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. Quick Links */}
                    <div>
                        <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-[#1D73BE] mb-8">Explore</h4>
                        <ul className="space-y-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-slate-400 hover:text-white transition-colors text-sm font-bold flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 bg-slate-700 rounded-full group-hover:bg-[#1D73BE] transition-colors"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Categories */}
                    <div>
                        <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-[#1D73BE] mb-8">Categories</h4>
                        <ul className="space-y-4">
                            {categories.map((cat) => (
                                <li key={cat.name}>
                                    <Link to={cat.path} className="text-slate-400 hover:text-white transition-colors text-sm font-bold flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 bg-slate-700 rounded-full group-hover:bg-[#1D73BE] transition-colors"></span>
                                        {cat.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 4. Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-[12px] font-black uppercase tracking-[0.2em] text-[#1D73BE] mb-8">Contact Us</h4>
                        <ul className="space-y-5 text-sm">
                            <li className="flex items-start gap-4 text-slate-400 group">
                                <span className="material-symbols-outlined text-[#1D73BE] text-xl">location_on</span>
                                <span className="font-bold group-hover:text-white transition-colors">
                                    11311 Harry Hines Blvd #503, <br /> Dallas TX 75229
                                </span>
                            </li>
                            <li className="flex items-center gap-4 text-slate-400 group">
                                <span className="material-symbols-outlined text-[#1D73BE] text-xl">call</span>
                                <span className="font-bold group-hover:text-white transition-colors">(469) 260-2475</span>
                            </li>
                            <li className="flex items-center gap-4 text-slate-400 group">
                                <span className="material-symbols-outlined text-[#1D73BE] text-xl">mail</span>
                                <span className="font-bold group-hover:text-white transition-colors border-b border-transparent group-hover:border-[#1D73BE]">
                                    sales@ishinewireless.com
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-[10px] text-slate-500 font-black uppercase tracking-widest">
                        <p>© 2026 ISHINE WIRELESS. ALL RIGHTS RESERVED.</p>
                        <span className="hidden md:block opacity-20">|</span>
                        <p className="text-[#1D73BE]/60">Wholesale Mobile Parts Expert</p>
                    </div>

                    {/* Payment Icons with cleaner style */}
                    <div className="flex gap-3 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        {['payments', 'credit_card', 'account_balance_wallet', 'savings'].map((icon) => (
                            <div key={icon} className="px-3 py-1 bg-white/5 rounded-md border border-white/10 flex items-center justify-center">
                                <span className="material-symbols-outlined text-white text-xl">{icon}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}