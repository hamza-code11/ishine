import React, { useState } from 'react';

const ProductTabs = () => {
    const [activeTab, setActiveTab] = useState('description');
    const [userRating, setUserRating] = useState(0); // For the review form
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div className="mb-24">
            {/* Tab Headers */}
            <div className="flex gap-8 border-b border-gray-100 mb-8">
                {['description', 'reviews'].map((tab) => (
                    <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-4 text-sm font-black uppercase tracking-widest transition-all ${
                            activeTab === tab ? 'border-b-2 border-[#1D73BE] text-[#1D73BE]' : 'text-gray-400'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[200px]">
                {activeTab === 'description' ? (
                    <div className="prose max-w-none text-gray-600 leading-relaxed">
                        <p>This premium replacement part ensures original-like quality and performance. Built with high-grade materials to match professional standards.</p>
                        <ul className="mt-4 list-disc pl-5 space-y-2">
                            <li>High Durability and Precision Fit</li>
                            <li>Tested for quality assurance</li>
                            <li>Professional grade materials</li>
                        </ul>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Review List */}
                        <div className="space-y-6">
                            <h4 className="font-bold text-gray-800">Customer Reviews (1)</h4>
                            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                                <div className="flex justify-between mb-2">
                                    <span className="font-bold text-sm text-gray-700">Verified User</span>
                                    {/* Displaying stars in review list */}
                                    <div className="flex text-yellow-400 text-[10px]">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i}>{i < 5 ? '★' : '☆'}</span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 italic">"The quality is amazing, exactly what I needed for my S25 Ultra!"</p>
                            </div>
                        </div>

                        {/* Review Form with Rating */}
                        <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                            <h4 className="font-bold mb-4 text-gray-800">Write a Review</h4>
                            
                            {/* Interactive Star Rating */}
                            <div className="mb-5">
                                <p className="text-[11px] font-bold text-gray-400 uppercase mb-2 tracking-tight">Your Rating:</p>
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            className={`text-2xl transition-colors ${
                                                (hoverRating || userRating) >= star ? 'text-yellow-400' : 'text-gray-200'
                                            }`}
                                            onMouseEnter={() => setHoverRating(star)}
                                            onMouseLeave={() => setHoverRating(0)}
                                            onClick={() => setUserRating(star)}
                                        >
                                            ★
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <textarea 
                                    className="w-full border border-gray-100 bg-gray-50 rounded-xl p-4 text-sm outline-none focus:ring-1 focus:ring-[#1D73BE] transition-all" 
                                    rows="4" 
                                    placeholder="Share your thoughts about this product..."
                                ></textarea>
                                <button className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-bold text-[11px] uppercase tracking-widest hover:bg-[#1D73BE] transition-all shadow-lg shadow-gray-100">
                                    Submit Review
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductTabs;