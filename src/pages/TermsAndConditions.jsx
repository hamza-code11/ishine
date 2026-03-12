import { Link } from "react-router-dom";
import TopBar from "../components/layout/TopBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function TermsAndConditions() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
            <TopBar />
            <Navbar />

            {/* BREADCRUMB */}
            <nav className="max-w-4xl mx-auto w-full px-6 py-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                <Link to="/" className="hover:text-black transition-colors">Home</Link>
                <span>/</span>
                <span className="text-black">Terms and Conditions</span>
            </nav>

            <main className="flex-grow pb-24">
                <div className="max-w-4xl mx-auto px-6">
                    
                    <h1 className="text-4xl font-black text-[#1a3a5c] mb-10 uppercase tracking-tight">Terms and Conditions</h1>

                    <div className="space-y-12">
                        {/* SECTION 1 */}
                        <div className="space-y-4">
                            <p className="font-bold text-slate-800">By using iShine Wireless, you agree to our Terms and Conditions:</p>
                            <ul className="space-y-4 text-sm text-slate-600 font-medium leading-relaxed">
                                <li className="flex gap-3">
                                    <span className="text-blue-500">•</span>
                                    We strive to provide accurate product details and competitive pricing, but we cannot guarantee all information is free from errors or omissions.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-500">•</span>
                                    Prices, availability, and product specifications may change without prior notice.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-500">•</span>
                                    We reserve the right to cancel or refuse any order at our discretion.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-500">•</span>
                                    All transactions are subject to approval.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-500">•</span>
                                    If there are any issues with your order, you will be notified promptly, and a refund will be issued if necessary.
                                </li>
                            </ul>
                        </div>

                        {/* SECTION 2 */}
                        <div className="space-y-4">
                            <p className="font-bold text-slate-800">We offer various secure payment methods:</p>
                            <ul className="space-y-4 text-sm text-slate-600 font-medium leading-relaxed">
                                <li className="flex gap-3">
                                    <span className="text-blue-500">•</span>
                                    Secure payment options include credit/debit cards, PayPal, and other online gateways.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-500">•</span>
                                    All payments are processed securely, ensuring the protection of your personal and financial information.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-500">•</span>
                                    Once your order is confirmed, we will make every effort to ship it promptly.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-500">•</span>
                                    Delivery times may vary depending on your location and the shipping method selected.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-500">•</span>
                                    We are not responsible for any delays caused by external factors such as shipping carriers, customs processing, or force majeure events.
                                </li>
                            </ul>
                        </div>

                        {/* SECTION 3 */}
                        <div className="space-y-4 mb-5">
                            <p className="font-bold text-slate-800">We accept returns on eligible items under the following conditions:</p>
                            <ul className="space-y-4 text-sm text-slate-600 font-medium leading-relaxed">
                                <li className="flex gap-3">
                                    <span className="text-blue-500">•</span>
                                    Products must be unused, in original packaging, and in resalable condition.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-500">•</span>
                                    Some items, such as batteries, screen protectors, and hygiene products, may not be eligible for returns due to safety and health regulations.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-500">•</span>
                                    Refunds will be processed once the returned product is inspected.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-500">•</span>
                                    Our liability is strictly limited to the value of the products purchased.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-500">•</span>
                                    We are not liable for any damages resulting from improper use, unauthorized modifications, or third-party repairs.
                                </li>
                                <li className="flex gap-3 italic font-semibold text-[#1a3a5c]">
                                    <span className="text-blue-500">•</span>
                                    If you have concerns regarding your purchase, feel free to contact us for assistance.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}