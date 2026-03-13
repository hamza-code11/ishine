import React, { useState } from "react";
import { 
  Package, 
  Image as ImageIcon, 
  Tag, 
  Hash, 
  Info, 
  Layers, 
  DollarSign, 
  Archive, 
  ChevronRight,
  PlusCircle,
  UploadCloud
} from "lucide-react";

const dummyBrands = ["Apple", "Samsung"];
const dummyCategories = {
    Apple: ["iPhone", "MacBook", "iPad"],
    Samsung: ["Galaxy Phone", "Galaxy Tab"],
};
const dummySubcategories = {
    iPhone: ["iPhone14", "iPhone15", "iPhone16", "iPhone17"],
    MacBook: ["MacBook Air", "MacBook Pro"],
    "Galaxy Phone": ["Galaxy S21", "Galaxy S22"],
};

const generateSlug = (text) => {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
};

const DummyProductForm = () => {
    // --- States ---
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [productModel, setProductModel] = useState("");
    const [productEdition, setProductEdition] = useState("");
    const [productName, setProductName] = useState("");
    const [slug, setSlug] = useState("");
    const [Regularprice, setRegularPrice] = useState("");
    const [Saleprice, setSalePrice] = useState("");
    const [stock, setStock] = useState("");
    const [badge, setBadge] = useState("");
    const [description, setDescription] = useState("");
    
    // File States
    const [productModelImage, setProductModelImage] = useState(null);
    const [image, setImage] = useState(null);

    // --- Styles ---
    const cardStyle = "bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6";
    const inputStyle = "w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-white hover:border-gray-400 disabled:bg-gray-50 disabled:cursor-not-allowed";
    const labelStyle = "block text-[11px] font-bold text-gray-500 mb-1.5 uppercase tracking-widest flex items-center gap-2";

    return (
        <div className="min-h-screen bg-[#f8f9fa] p-4 md:p-8 font-sans">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <nav className="flex items-center gap-2 text-xs text-gray-400 mb-1 uppercase tracking-tighter">
                        <span>Store</span>
                        <ChevronRight size={12} />
                        <span className="text-blue-600 font-bold">New Product</span>
                    </nav>
                    <h1 className="text-2xl font-black text-gray-900 tracking-tight">Add Product</h1>
                </div>
                <div className="flex gap-3">
                    <button className="px-5 py-2 text-sm font-bold text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
                        Discard
                    </button>
                    <button className="px-6 py-2 bg-blue-600 text-sm font-bold text-white rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-200 flex items-center gap-2 transition-all active:scale-95">
                        <PlusCircle size={16} />
                        Save Product
                    </button>
                </div>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Main Content (Left) */}
                <div className="lg:col-span-2 space-y-6">
                    
                    <div className={cardStyle}>
                        <div className="px-6 py-4 border-b border-gray-50">
                            <h2 className="text-sm font-bold text-gray-800">Product Details</h2>
                        </div>
                        <div className="p-6 space-y-5">
                            <div>
                                <label className={labelStyle}>Product Title</label>
                                <input 
                                    type="text" 
                                    className={inputStyle} 
                                    value={productName} 
                                    onChange={(e) => {
                                        setProductName(e.target.value);
                                        setSlug(generateSlug(e.target.value));
                                    }}
                                    placeholder="e.g. Samsung Galaxy S24 Ultra" 
                                />
                            </div>
                            
                            <div>
                                <label className={labelStyle}>URL Slug</label>
                                <input 
                                    type="text" 
                                    className={`${inputStyle} bg-gray-50 text-gray-400 font-mono text-[10px]`} 
                                    value={slug} 
                                    readOnly 
                                />
                            </div>

                            <div>
                                <label className={labelStyle}>Description</label>
                                <textarea 
                                    className={`${inputStyle} min-h-[120px] resize-none`} 
                                    value={description} 
                                    onChange={(e) => setDescription(e.target.value)}
                                    placeholder="Tell customers about this product..."
                                />
                            </div>
                        </div>
                    </div>

                    <div className={cardStyle}>
                        <div className="px-6 py-4 border-b border-gray-50">
                            <h2 className="text-sm font-bold text-gray-800">Media</h2>
                        </div>
                        <div className="p-6">
                            <label className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-all cursor-pointer group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform mb-3">
                                  <ImageIcon className="text-blue-600" size={24} />
                                </div>
                                <span className="text-xs font-bold text-gray-600">Upload Product Main Image</span>
                                <span className="text-[10px] text-gray-400 mt-1 uppercase">JPG, PNG or WebP</span>
                                <input type="file" className="hidden" onChange={(e) => setImage(e.target.files[0])} />
                            </label>
                        </div>
                    </div>

                    <div className={cardStyle}>
                        <div className="px-6 py-4 border-b border-gray-50">
                            <h2 className="text-sm font-bold text-gray-800">Inventory & Pricing</h2>
                        </div>
                        <div className="p-6 grid grid-cols-2 gap-6">
                            <div>
                                <label className={labelStyle}>Price ($)</label>
                                <input type="number" className={inputStyle} value={Regularprice} onChange={(e) => setRegularPrice(e.target.value)} />
                            </div>
                            <div>
                                <label className={labelStyle}>Sale Price ($)</label>
                                <input type="number" className={`${inputStyle} border-blue-100 bg-blue-50/20`} value={Saleprice} onChange={(e) => setSalePrice(e.target.value)} />
                            </div>
                            <div>
                                <label className={labelStyle}>In Stock</label>
                                <input type="number" className={inputStyle} value={stock} onChange={(e) => setStock(e.target.value)} />
                            </div>
                            <div>
                                <label className={labelStyle}>Badge</label>
                                <input type="text" className={inputStyle} value={badge} onChange={(e) => setBadge(e.target.value)} placeholder="New / Hot" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar (Right) */}
                <div className="space-y-6">
                    <div className={cardStyle}>
                        <div className="px-6 py-4 border-b border-gray-50">
                            <h2 className="text-sm font-bold text-gray-800">Categorization</h2>
                        </div>
                        <div className="p-6 space-y-5">
                            <div>
                                <label className={labelStyle}>Brand</label>
                                <select 
                                    className={inputStyle} 
                                    value={brand} 
                                    onChange={(e) => { 
                                        setBrand(e.target.value); 
                                        setCategory(""); 
                                        setSubcategory(""); 
                                    }}
                                >
                                    <option value="">Select Brand</option>
                                    {dummyBrands.map(b => <option key={b} value={b}>{b}</option>)}
                                </select>
                            </div>

                            <div>
                                <label className={labelStyle}>Category</label>
                                <select 
                                    className={inputStyle} 
                                    value={category} 
                                    onChange={(e) => { 
                                        setCategory(e.target.value); 
                                        setSubcategory(""); 
                                    }} 
                                    disabled={!brand}
                                >
                                    <option value="">Select Category</option>
                                    {brand && dummyCategories[brand]?.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>

                            <div>
                                <label className={labelStyle}>Subcategory</label>
                                <select 
                                    className={inputStyle} 
                                    value={subcategory} 
                                    onChange={(e) => setSubcategory(e.target.value)} 
                                    disabled={!category}
                                >
                                    <option value="">Select Subcategory</option>
                                    {category && dummySubcategories[category]?.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className={cardStyle}>
                        <div className="px-6 py-4 border-b border-gray-50">
                            <h2 className="text-sm font-bold text-gray-800">Specs & Model Image</h2>
                        </div>
                        <div className="p-6 space-y-5">
                            <div>
                                <label className={labelStyle}>Product Model</label>
                                <input type="text" className={inputStyle} value={productModel} onChange={(e) => setProductModel(e.target.value)} placeholder="e.g. S24-ULTRA" />
                            </div>
                            <div>
                                <label className={labelStyle}>Edition</label>
                                <input type="text" className={inputStyle} value={productEdition} onChange={(e) => setProductEdition(e.target.value)} placeholder="e.g. Global" />
                            </div>
                            
                            {/* Product Model Image Upload Option */}
                            <div className="pt-2">
                                <label className={labelStyle}>Model Specification Image</label>
                                <div className="mt-2 flex items-center justify-center w-full">
                                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-200 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <UploadCloud className="w-8 h-8 mb-2 text-gray-400" />
                                            <p className="text-[10px] text-gray-500 font-bold uppercase">
                                                {productModelImage ? productModelImage.name.substring(0, 20) + '...' : 'Upload Spec Image'}
                                            </p>
                                        </div>
                                        <input type="file" className="hidden" onChange={(e) => setProductModelImage(e.target.files[0])} />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DummyProductForm;