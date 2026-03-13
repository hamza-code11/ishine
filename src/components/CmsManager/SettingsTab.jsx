import React from "react";
import { Save } from "lucide-react";

const SettingsTab = () => {
    return (
        <div className="p-6">
            <h2 className="text-sm font-black text-gray-900 mb-4">Banner Display Settings</h2>
            <div className="space-y-4 max-w-2xl">
                <div>
                    <label className="block text-[11px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Auto-rotate interval</label>
                    <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500">
                        <option>3 seconds</option>
                        <option>5 seconds</option>
                        <option>10 seconds</option>
                    </select>
                </div>
                <div>
                    <label className="block text-[11px] font-bold text-gray-500 mb-1 uppercase tracking-wider">Maximum banners per page</label>
                    <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500" defaultValue="5" />
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="autoplay" className="rounded text-blue-600" defaultChecked />
                    <label htmlFor="autoplay" className="text-xs font-medium text-gray-700">Enable autoplay</label>
                </div>
                <button className="px-6 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 flex items-center gap-2 transition-all">
                    <Save size={14} />
                    Save Settings
                </button>
            </div>
        </div>
    );
};

export default SettingsTab;