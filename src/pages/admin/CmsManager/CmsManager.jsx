import React, { useState } from "react";
import { Image, ChevronRight, Settings, Globe, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BannersTab from "../../../components/CmsManager/BannersTab"; // Ensure path is correct
import SettingsTab from "../../../components/CmsManager/SettingsTab"; // Ensure path is correct

const CmsManager = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState("banners");

    const sections = [
        { id: "banners", name: "Brand Banners", icon: Image },
        { id: "settings", name: "Banner Settings", icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-[#f8f9fa] p-2 md:p-4">
            <div className="max-w-7xl mx-auto space-y-4">
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                    {/* Header */}
                    <div className="px-6 pt-5 pb-3">
                        <nav className="flex items-center gap-1 text-[10px] text-gray-400 mb-2 uppercase font-bold tracking-widest">
                            <span className="cursor-pointer hover:text-blue-600" onClick={() => navigate("/cms")}>CMS Manager</span>
                            <ChevronRight size={10} />
                            <span className="text-blue-600">Brand Banners</span>
                        </nav>
                        <h1 className="text-xl font-black text-gray-900 tracking-tight uppercase flex items-center gap-2">
                            <Image size={20} className="text-blue-500" />
                            CMS & Banner Hub
                        </h1>
                    </div>

                    {/* Navigation Tabs */}
                    <div className="border-b border-gray-100 px-6 flex gap-6 overflow-x-auto">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`pb-3 px-1 flex items-center gap-2 text-xs font-bold uppercase whitespace-nowrap border-b-2 transition-all ${
                                    activeSection === section.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600'
                                }`}
                            >
                                <section.icon size={14} />
                                {section.name}
                            </button>
                        ))}
                    </div>

                    {/* Conditional Component Rendering */}
                    {activeSection === "banners" && <BannersTab />}
                    {activeSection === "settings" && <SettingsTab />}
                    
                    {/* Placeholder for other tabs */}
                    {(activeSection === "seo" || activeSection === "products") && (
                        <div className="p-20 text-center text-gray-400 font-bold uppercase text-xs tracking-widest">
                            Coming Soon: {activeSection} Module
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CmsManager;