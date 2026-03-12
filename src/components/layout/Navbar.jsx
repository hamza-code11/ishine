// import { useState, useRef, useEffect, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthContext';

// const megaMenuData = {
//     apple: {
//         sidebar: ["iPhone", "iPad", "iWatch", "AirPods"],
//         content: {
//             "iPhone": ["iPhone 17 Pro Max", "iPhone 17 Pro", "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 14 Pro Max", "iPhone 14", "iPhone 13 Pro Max", "iPhone 13", "iPhone 12 Pro Max", "iPhone 12", "iPhone 11 Pro Max", "iPhone 11", "iPhone XR", "iPhone X", "iPhone 8 Plus", "iPhone 8", "iPhone 7"],
//             "iPad": ["iPad Pro 13\"", "iPad Pro 12.9\" 6th Gen", "iPad Pro 11\" 4th Gen", "iPad Air 5", "iPad Mini 7", "iPad Mini 6", "iPad 10", "iPad 9", "iPad 8"],
//             "iWatch": ["Series 10 46MM", "Series 10 42MM", "Series 9 45MM", "Series 9 41MM", "Series Ultra 2nd Gen", "Series 8 45MM", "Series 7 45MM", "Series SE 2nd Gen"],
//             "AirPods": ["AirPods Pro 2nd Gen", "AirPods Pro 1st Gen", "AirPods 3rd Gen", "AirPods 2nd Gen"]
//         }
//     },
//     samsung: {
//         sidebar: ["S Series", "A Series", "Note Series", "Z Series", "Tab Series"],
//         content: {
//             "S Series": ["Galaxy S25 Ultra 5G", "Galaxy S25 Plus", "Galaxy S25", "Galaxy S24 Ultra", "Galaxy S24 Plus", "Galaxy S24 FE", "Galaxy S23 Ultra", "Galaxy S23 Plus", "Galaxy S22 Ultra", "Galaxy S22", "Galaxy S21 Ultra", "Galaxy S21", "Galaxy S20 Ultra", "Galaxy S20"],
//             "A Series": ["A56", "A52", "A51", "A42", "A36", "A35", "A34", "A32", "A25", "A23", "A21s", "A15 5G", "A14", "A13", "A12", "A11", "A10", "A06", "A03S", "A02S", "A01"],
//             "Note Series": ["Note 20 Ultra 5G", "Note 20 5G", "Note 10 Plus", "Note 10", "Note 9", "Note 8", "Note 5", "Note 4", "Note 3", "Note 2"],
//             "Z Series": ["Flip 3", "Flip 4", "Flip 5"],
//             "Tab Series": ["Tab A9 Plus"]
//         }
//     },
//     motorola: {
//         sidebar: ["2026 Series", "2025 Series", "2024 Series", "2023 Series", "2022 Series", "2021 Series"],
//         content: {
//             "2026 Series": ["Moto Edge 60", "Moto G 2026"],
//             "2025 Series": ["Moto Edge 50", "Moto G Power 2025"],
//             "2024 Series": ["Moto G Stylus 2024", "Razr 2024"],
//             "2023 Series": ["Moto Edge+ 2023", "Moto G Play 2023"],
//             "2022 Series": ["Moto Edge 2022"],
//             "2021 Series": ["Moto G100"]
//         }
//     },
//     otherbrands: {
//         sidebar: ["Google", "LG", "OnePlus", "Sony"],
//         content: {
//             "Google": ["Pixel 9 Pro", "Pixel 8 Pro", "Pixel 7 Pro"],
//             "LG": ["V60 ThinQ", "Velvet"],
//             "OnePlus": ["12 Pro", "11 5G"],
//             "Sony": ["Xperia 1 V"]
//         }
//     },
//     wegacell: {
//         sidebar: ["Home Charger", "Car Charger", "Aux Cable", "Ear Phone", "Data Cable"],
//         content: {
//             "Home Charger": ["Wega Home 20W"],
//             "Car Charger": ["Wega Car 40W"],
//             "Aux Cable": ["Wega Braided Aux"],
//             "Ear Phone": ["Wega Wired Earphones"],
//             "Data Cable": ["Wega 3-in-1 Cable"]
//         }
//     },
//     ncc: {
//         sidebar: ["Wireless Earbuds", "Car Chargers", "Power Banks", "Cables", "Speakers"],
//         content: {
//             "Wireless Earbuds": ["NCC Sound 1", "NCC Sound Pro"],
//             "Car Chargers": ["NCC Rapid Charge"],
//             "Power Banks": ["NCC Power 10K"],
//             "Cables": ["NCC USB-C", "NCC Lightning"],
//             "Speakers": ["NCC Bluetooth Speaker"]
//         }
//     },
//     speakers: {
//         sidebar: ["Bluetooth Speakers", "Party Speakers", "Soundbars"],
//         content: {
//             "Bluetooth Speakers": ["Portable Mini", "Rugged Outdoor"],
//             "Party Speakers": ["Boombox RGB", "Tower Max"],
//             "Soundbars": ["Eco Sound 2.1"]
//         }
//     },
//     tools: {
//         sidebar: ["Repair Tools", "Opening Tools", "Soldering"],
//         content: {
//             "Repair Tools": ["Screwdrivers", "Tweezers"],
//             "Opening Tools": ["Spudgers", "Suction Cups"],
//             "Soldering": ["Soldering Iron", "Flux"]
//         }
//     },
//     gameaccessories: {
//         sidebar: ["Controllers", "Headsets", "Charging Stations"],
//         content: {
//             "Controllers": ["PS5 Custom", "Xbox Elite Pro"],
//             "Headsets": ["7.1 Surround", "Wireless Pro"],
//             "Charging Stations": ["Dual Dock", "Cooling Stand"]
//         }
//     }
// };

// const navItems = [
//     { label: "Apple", key: "apple" },
//     { label: "Samsung", key: "samsung" },
//     { label: "Motorola", key: "motorola" },
//     { label: "Other Brands", key: "otherbrands", badge: "NEW" },
//     { label: "WEGA CELL", key: "wegacell" },
//     { label: "NCC", key: "ncc" },
//     { label: "Speakers", key: "speakers" },
//     { label: "Tools", key: "tools", badge: "NEW" },
//     { label: "Game Accessories", key: "gameaccessories", badge: "NEW" },
// ];

// export default function Navbar({ categoryMenuOpen, onToggleCategory }) {
//     const { user } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const [activeTab, setActiveTab] = useState(null);
//     const [activeSub, setActiveSub] = useState("");
//     const [searchQuery, setSearchQuery] = useState("");
//     const [wishlistCount, setWishlistCount] = useState(0);
//     const [cartCount, setCartCount] = useState(0);

//     const menuRef = useRef(null);

//     useEffect(() => {
//         const updateCounts = () => {
//             const wishlist = JSON.parse(localStorage.getItem('ishine_wishlist') || '[]');
//             const cart = JSON.parse(localStorage.getItem('ishine_cart') || '[]');
//             setWishlistCount(wishlist.length);
//             // Sum quantities for cart
//             const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
//             setCartCount(totalItems);
//         };

//         updateCounts();

//         // Listen for storage changes (for other tabs) or custom events
//         window.addEventListener('storage', updateCounts);
//         window.addEventListener('wishlistUpdate', updateCounts);
//         return () => {
//             window.removeEventListener('storage', updateCounts);
//             window.removeEventListener('wishlistUpdate', updateCounts);
//         };
//     }, []);

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (menuRef.current && !menuRef.current.contains(event.target)) {
//                 setActiveTab(null);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     const handleTabClick = (tab) => {
//         if (activeTab === tab) {
//             setActiveTab(null);
//         } else {
//             setActiveTab(tab);
//             if (megaMenuData[tab]?.sidebar) {
//                 setActiveSub(megaMenuData[tab].sidebar[0]);
//             }
//         }
//     };

//     const closeMenu = () => setActiveTab(null);

//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (searchQuery.trim()) {
//             navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
//             closeMenu();
//         }
//     };

//     return (
//         <header className="bg-white sticky top-0 z-50 transition-all duration-300 shadow-sm" ref={menuRef}>
//             {/* Top Bar */}
//             <div className="border-b border-border-light">
//                 <div className="container mx-auto px-4 py-4">
//                     <div className="flex items-center justify-between gap-8">
//                         {/* Logo */}
//                         <Link
//                             className="flex items-center gap-2 text-[#1D73BE] hover:opacity-90 transition-all min-w-max group"
//                             to="/"
//                             onClick={closeMenu}
//                         >
//                             <div className="size-10 bg-[#1D73BE] group-hover:bg-slate-900 rounded-xl flex items-center justify-center text-white transition-colors">
//                                 <span className="material-symbols-outlined text-2xl">smartphone</span>
//                             </div>
//                             <h1 className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-[#1D73BE] transition-colors">
//                                 iShine Wireless
//                             </h1>
//                         </Link>
//                         {/* Search Bar */}
//                         <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-2xl group">
//                             <div className="w-full flex border-2 border-slate-100 rounded-2xl overflow-hidden transition-all focus-within:border-[#1D73BE] bg-slate-50">
//                                 <input
//                                     className="flex-1 bg-transparent py-3 px-6 text-sm outline-none border-none placeholder:text-slate-400 font-medium"
//                                     placeholder="Search repair parts, tools, brands..."
//                                     type="text"
//                                     value={searchQuery}
//                                     onChange={(e) => setSearchQuery(e.target.value)}
//                                 />
//                                 <button type="submit" className="bg-slate-900 hover:bg-[#1D73BE] text-white px-10 py-3 font-black uppercase text-xs transition-all tracking-widest active:scale-95">
//                                     SEARCH
//                                 </button>
//                             </div>
//                         </form>
//                         {/* User Actions */}
//                         <div className="flex items-center gap-6 text-slate-700">
//                             <Link className="flex flex-col items-center gap-1 hover:text-[#1D73BE] transition-all group" to={user ? '/account' : '/login'} onClick={closeMenu}>
//                                 <div className="size-10 rounded-xl flex items-center justify-center group-hover:bg-slate-50 transition-colors">
//                                     <span className="material-symbols-outlined text-2xl group-hover:fill-current">person</span>
//                                 </div>
//                                 <span className="text-[10px] font-black uppercase tracking-widest hidden lg:block">{user ? 'Account' : 'Login'}</span>
//                             </Link>
//                             <Link className="flex flex-col items-center gap-1 hover:text-[#1D73BE] transition-all group relative" to="/wishlist" onClick={closeMenu}>
//                                 <div className="size-10 rounded-xl flex items-center justify-center group-hover:bg-slate-50 transition-colors">
//                                     <span className="material-symbols-outlined text-2xl group-hover:fill-current">favorite</span>
//                                 </div>
//                                 <span className="text-[10px] font-black uppercase tracking-widest hidden lg:block">Wishlist</span>
//                                 {wishlistCount > 0 && (
//                                     <span className="absolute top-0 right-0 size-5 bg-[#1D73BE] text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-lg animate-in zoom-in duration-300">
//                                         {wishlistCount}
//                                     </span>
//                                 )}
//                             </Link>
//                             <Link className="flex flex-col items-center gap-1 hover:text-[#1D73BE] transition-all group relative" to="/cart" onClick={closeMenu}>
//                                 <div className="size-10 rounded-xl flex items-center justify-center group-hover:bg-slate-50 transition-colors">
//                                     <span className="material-symbols-outlined text-2xl group-hover:fill-current">shopping_cart</span>
//                                 </div>
//                                 <span className="text-[10px] font-black uppercase tracking-widest hidden lg:block">Cart</span>
//                                 {cartCount > 0 && (
//                                     <span className="absolute top-0 right-0 size-5 bg-secondary text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-lg animate-in zoom-in duration-300">
//                                         {cartCount}
//                                     </span>
//                                 )}
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom Nav + Mega Menu */}
//             <div className="bg-white border-b border-border-light hidden md:block relative">
//                 <div className="container mx-auto px-4">
//                     <nav className="flex items-center h-14">
//                         <button
//                             onClick={onToggleCategory}
//                             className={`flex items-center gap-2 font-black uppercase tracking-widest text-xs transition-all mr-12 group ${categoryMenuOpen ? "text-[#1D73BE]" : "text-slate-800 hover:text-[#1D73BE]"}`}
//                         >
//                             <div className={`size-8 rounded-lg flex items-center justify-center transition-colors ${categoryMenuOpen ? 'bg-[#1D73BE] text-white' : 'bg-slate-50 group-hover:bg-[#1D73BE] group-hover:text-white'}`}>
//                                 <span className="material-symbols-outlined text-lg">{categoryMenuOpen ? 'close' : 'menu'}</span>
//                             </div>
//                             Browse Categories
//                         </button>

//                         <div className="flex items-center gap-2 h-full">
//                             {navItems.map((item) => (
//                                 <button
//                                     key={item.key}
//                                     onClick={() => handleTabClick(item.key)}
//                                     className={`relative flex items-center px-5 h-full text-[11px] font-black uppercase tracking-widest transition-all border-b-2 whitespace-nowrap ${activeTab === item.key ? "text-[#1D73BE] border-[#1D73BE] bg-slate-50" : "text-slate-600 border-transparent hover:text-[#1D73BE] hover:bg-slate-50"}`}
//                                 >
//                                     {item.badge && (
//                                         <span className="absolute top-2 right-1 bg-green-500 text-white text-[8px] font-black px-1.5 py-0.5 rounded-full z-10 shadow-sm">
//                                             {item.badge}
//                                         </span>
//                                     )}
//                                     {item.label}
//                                 </button>
//                             ))}
//                         </div>
//                     </nav>
//                 </div>

//                 {/* Mega Dropdown Panel */}
//                 <div className={`absolute left-0 w-full bg-white shadow-2xl overflow-hidden transition-all duration-300 ease-in-out border-b border-slate-100 z-50 ${activeTab ? "max-height-[600px] border-t border-slate-100 opacity-100" : "max-height-0 opacity-0 pointer-events-none"}`} style={{ maxHeight: activeTab ? "600px" : "0" }}>
//                     <div className="container mx-auto h-[450px] flex">
//                         {activeTab && (
//                             <>
//                                 {/* Sidebar */}
//                                 <div className="w-[240px] bg-slate-50 border-r border-slate-100 py-8 overflow-y-auto">
//                                     {megaMenuData[activeTab]?.sidebar?.map((sub) => (
//                                         <button
//                                             key={sub}
//                                             onClick={() => setActiveSub(sub)}
//                                             className={`w-full text-left px-8 py-4 text-[11px] font-black uppercase tracking-widest transition-all ${activeSub === sub ? "bg-white text-[#1D73BE] border-r-4 border-[#1D73BE] shadow-sm" : "text-slate-500 hover:bg-white/50"}`}
//                                         >
//                                             {sub}
//                                         </button>
//                                     ))}
//                                 </div>

//                                 {/* Content Grid */}
//                                 <div className="flex-1 p-12 overflow-y-auto bg-white">
//                                     <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-50">
//                                         <div className="size-12 bg-[#1D73BE]/10 rounded-2xl flex items-center justify-center text-[#1D73BE]">
//                                             <span className="material-symbols-outlined text-3xl">build_circle</span>
//                                         </div>
//                                         <div>
//                                             <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
//                                                 {activeSub} Parts
//                                             </h3>
//                                             <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Found in {megaMenuData[activeTab].sidebar?.length} Categories</p>
//                                         </div>
//                                     </div>
//                                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-6">
//                                         {megaMenuData[activeTab]?.content[activeSub]?.map((item) => (
//                                             <Link
//                                                 key={item}
//                                                 to={`/shop?brand=${activeTab}&model=${item}`}
//                                                 onClick={closeMenu}
//                                                 className="text-[13px] text-slate-500 hover:text-[#1D73BE] transition-all font-bold uppercase tracking-tight flex items-center gap-2 group"
//                                             >
//                                                 <span className="size-1.5 bg-slate-200 group-hover:bg-[#1D73BE] group-hover:scale-150 rounded-full transition-all"></span>
//                                                 {item}
//                                             </Link>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Search Bar */}
//             <form onSubmit={handleSearch} className="md:hidden p-4 bg-white border-b border-border-light">
//                 <div className="relative w-full group">
//                     <input
//                         className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl py-2.5 px-4 pr-12 text-sm focus:border-[#1D73BE] outline-none transition-all font-medium"
//                         placeholder="Search products..."
//                         type="text"
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                     />
//                     <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 size-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
//                         <span className="material-symbols-outlined text-sm">search</span>
//                     </button>
//                 </div>
//             </form>
//         </header>
//     );
// }









// import { useState, useRef, useEffect, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthContext';

// const megaMenuData = {
//     apple: {
//         sidebar: ["Overview", "iPhone", "iPad", "iWatch", "AirPods"],
//         content: {
//             "Overview": [
//                 { title: "iPhone", items: ["iPhone 17 Pro Max", "iPhone 16 Pro", "iPhone 15", "iPhone 14"] },
//                 { title: "iPad", items: ["iPad Pro 13\"", "iPad Air 5"] },
//                 { title: "Watch", items: ["Series 10", "Ultra 2"] },
//                 { title: "Audio", items: ["AirPods Pro 2"] }
//             ],
//             "iPhone": ["iPhone 17 Pro Max", "iPhone 17 Pro", "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 14 Pro Max", "iPhone 14", "iPhone 13", "iPhone 12"],
//             "iPad": ["iPad Pro 13\"", "iPad Pro 12.9\"", "iPad Air 5", "iPad Mini 7", "iPad 10"],
//             "iWatch": ["Series 10 46MM", "Series 9 45MM", "Series Ultra 2nd Gen", "Series 8"],
//             "AirPods": ["AirPods Pro 2nd Gen", "AirPods Pro 1st Gen", "AirPods 3rd Gen"]
//         }
//     },
//     samsung: {
//         sidebar: ["Overview", "S Series", "A Series", "Note Series", "Z Series"],
//         content: {
//             "Overview": [
//                 { title: "S Series", items: ["S25 Ultra", "S24 Ultra", "S23", "S22"] },
//                 { title: "Z Series", items: ["Flip 5", "Fold 5"] },
//                 { title: "A Series", items: ["A56", "A35"] }
//             ],
//             "S Series": ["Galaxy S25 Ultra 5G", "Galaxy S25 Plus", "Galaxy S24 Ultra", "Galaxy S23 Ultra", "Galaxy S22 Ultra", "Galaxy S21 Ultra"],
//             "A Series": ["A56", "A52", "A51", "A36", "A35", "A34", "A25"],
//             "Note Series": ["Note 20 Ultra 5G", "Note 20 5G", "Note 10 Plus"],
//             "Z Series": ["Flip 5", "Flip 4", "Flip 3"],
//         }
//     },
//     google: {
//         sidebar: ["Overview", "Pixel Phones", "Pixel Watch", "Pixel Buds"],
//         content: {
//             "Overview": [
//                 { title: "Pixel Phones", items: ["Pixel 9 Pro XL", "Pixel 9 Pro", "Pixel 9", "Pixel 8"] },
//                 { title: "Wearables", items: ["Pixel Watch 3", "Pixel Buds Pro 2"] }
//             ],
//             "Pixel Phones": ["Pixel 9 Pro XL", "Pixel 9 Pro", "Pixel 9", "Pixel 8 Pro", "Pixel 8", "Pixel 7 Pro", "Pixel 7"],
//             "Pixel Watch": ["Pixel Watch 3", "Pixel Watch 2", "Pixel Watch (1st Gen)"],
//             "Pixel Buds": ["Pixel Buds Pro 2", "Pixel Buds Pro", "Pixel Buds A-Series"]
//         }
//     }
// };

// const navItems = [
//     { label: "Apple", key: "apple" },
//     { label: "Samsung", key: "samsung" },
//     { label: "Google", key: "google" },
//     { label: "Motorola", key: "motorola" },
// ];

// export default function Navbar({ onToggleCategory }) {
//     const { user } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const [activeTab, setActiveTab] = useState(null);
//     const [activeSub, setActiveSub] = useState("Overview");
//     const menuRef = useRef(null);

//     const handleTabHover = (key) => {
//         if (megaMenuData[key]) {
//             setActiveTab(key);
//             setActiveSub("Overview");
//         } else {
//             setActiveTab(null);
//         }
//     };

//     const closeMenu = () => {
//         setActiveTab(null);
//         setActiveSub("Overview");
//     };

//     const handleViewAllClick = (categoryTitle) => {
//         const foundCategory = megaMenuData[activeTab].sidebar.find(
//             s => s.toLowerCase() === categoryTitle.toLowerCase() || categoryTitle.includes(s)
//         );
//         if (foundCategory) setActiveSub(foundCategory);
//     };

//     return (
//         <header className="bg-white sticky top-0 z-50 shadow-sm font-sans" ref={menuRef} onMouseLeave={closeMenu}>
//             {/* Top Bar */}
//             <div className="border-b border-gray-100">
//                 <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-8">
//                     <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
//                         <div className="bg-[#1D73BE] p-1.5 rounded-lg shadow-sm">
//                             <span className="material-symbols-outlined text-white text-3xl">smartphone</span>
//                         </div>
//                         <span className="text-2xl font-black text-slate-800 tracking-tighter uppercase">
//                             ISHINE<span className="text-[#1D73BE]">WIRELESS</span>
//                         </span>
//                     </Link>
//                     <div className="hidden md:flex flex-1 max-w-2xl relative">
//                         <input className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 px-6 text-sm outline-none focus:border-[#1D73BE]" placeholder="Search models..." />
//                     </div>
//                     {/* <div className="flex gap-5">
//                         <span className="material-symbols-outlined text-slate-600 cursor-pointer">person</span>
//                         <span className="material-symbols-outlined text-slate-600 cursor-pointer">favorite</span>
//                         <span className="material-symbols-outlined text-slate-600 cursor-pointer">shopping_cart</span>
//                     </div> */}
//                     <div className="flex items-center gap-2">
//                         {/* User Account Section */}
//                         <Link
//                             to={user ? "/profile" : "/login"}
//                             className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-gray-50 transition-all duration-200 group"
//                         >
//                             <div className="hidden lg:flex flex-col items-right text-right">
//                                 <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">
//                                     Account
//                                 </span>
//                                 <span className="text-[12px] text-slate-900 font-black tracking-tight leading-none uppercase">
//                                     {user ? user.name.split(' ')[0] : 'Sign In'}
//                                 </span>
//                             </div>
//                             <div className="relative">
//                                 <span className="material-symbols-outlined text-[24px] text-slate-800 group-hover:text-[#1D73BE] transition-colors">
//                                     person
//                                 </span>
//                             </div>
//                         </Link>

//                         {/* Vertical Divider */}
//                         <div className="w-[1px] h-6 bg-gray-200 mx-1"></div>

//                         {/* Action Icons (Wishlist & Cart) */}
//                         <div className="flex items-center gap-1">
//                             {/* Wishlist */}
//                             <Link
//                                 to="/wishlist"
//                                 className="p-2.5 rounded-xl hover:bg-gray-50 transition-all group relative"
//                             >
//                                 <span className="material-symbols-outlined text-[24px] text-slate-800 group-hover:text-[#1D73BE] transition-colors">
//                                     favorite
//                                 </span>
//                                 <span className="absolute top-1.5 right-1.5 bg-[#1D73BE] text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full ring-2 ring-white">
//                                     0
//                                 </span>
//                             </Link>

//                             {/* Cart */}
//                             <Link
//                                 to="/cart"
//                                 className="p-2.5 rounded-xl hover:bg-gray-50 transition-all group relative"
//                             >
//                                 <span className="material-symbols-outlined text-[24px] text-slate-800 group-hover:text-[#1D73BE] transition-colors">
//                                     shopping_cart
//                                 </span>
//                                 <span className="absolute top-1.5 right-1.5 bg-slate-900 text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full ring-2 ring-white">
//                                     2
//                                 </span>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Navigation Bar */}
//             <div className="bg-white border-b border-gray-100 hidden md:block">
//                 <div className="container mx-auto px-4 flex items-center h-12">
//                     <button onClick={onToggleCategory} className="flex items-center gap-2 bg-slate-900 text-white px-5 h-full text-[12px] font-bold uppercase mr-6">
//                         <span className="material-symbols-outlined text-lg">menu</span> accessories
//                     </button>
//                     <nav className="flex items-center h-full flex-1">
//                         {navItems.map((item) => (
//                             <button
//                                 key={item.key}
//                                 onMouseEnter={() => handleTabHover(item.key)}
//                                 className={`px-4 h-full text-[12px] font-black uppercase transition-colors relative ${activeTab === item.key ? "text-[#1D73BE]" : "text-slate-800 hover:text-[#1D73BE]"}`}
//                             >
//                                 {item.label}
//                                 <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1D73BE] transition-transform duration-300 ${activeTab === item.key ? 'scale-x-100' : 'scale-x-0'}`}></span>
//                             </button>
//                         ))}
//                     </nav>
//                 </div>
//             </div>

//             {/* MEGA MENU PANEL */}
//             <div className={`absolute left-0 w-full bg-white shadow-2xl transition-all duration-300 z-50 border-b border-gray-200 ${activeTab ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
//                 {activeTab && megaMenuData[activeTab] && (
//                     <div className="container mx-auto flex min-h-[450px]">

//                         {/* Left Sidebar */}
//                         <div className="w-1/4 bg-gray-50/50 py-6 border-r border-gray-100">
//                             {megaMenuData[activeTab].sidebar.map((sub) => (
//                                 <div
//                                     key={sub}
//                                     onMouseEnter={() => setActiveSub(sub)}
//                                     className={`px-8 py-3 text-[13px] font-black cursor-pointer flex items-center justify-between transition-all ${activeSub === sub ? "text-[#1D73BE] bg-white border-l-4 border-[#1D73BE] shadow-sm" : "text-slate-700 hover:text-[#1D73BE]"}`}
//                                 >
//                                     {sub}
//                                     <span className="material-symbols-outlined text-sm">chevron_right</span>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Right Content */}
//                         <div className="w-3/4 p-10 bg-white">
//                             <div className="mb-8 border-b border-gray-100 pb-4">
//                                 <h4 className="text-xl font-black text-slate-900 uppercase italic tracking-tighter">
//                                     {activeSub === "Overview" ? `${activeTab} Category Overview` : `Shop ${activeSub} Parts`}
//                                 </h4>
//                             </div>

//                             {/* Right Content Section - Overview View with Boxes */}
//                             {activeSub === "Overview" ? (
//                                 <div className="grid grid-cols-3 gap-6">
//                                     {megaMenuData[activeTab].content["Overview"].map((section) => (
//                                         <div
//                                             key={section.title}
//                                             className="bg-gray-50/50 border border-gray-100 rounded-2xl p-5 hover:border-[#1D73BE]/30 hover:shadow-md transition-all duration-300"
//                                         >
//                                             <h5 className="font-black text-slate-900 text-[14px] mb-4 border-l-4 border-[#1D73BE] pl-3 uppercase tracking-tight">
//                                                 {section.title}
//                                             </h5>
//                                             <ul className="space-y-3">
//                                                 {section.items.slice(0, 3).map(item => (
//                                                     <li key={item} className="text-[13px] text-slate-500 hover:text-[#1D73BE] cursor-pointer transition-all flex items-center gap-2 group">
//                                                         <span className="w-1 h-1 bg-slate-300 rounded-full group-hover:bg-[#1D73BE] transition-colors"></span>
//                                                         {item}
//                                                     </li>
//                                                 ))}
//                                             </ul>

//                                             {section.items.length > 3 && (
//                                                 <button
//                                                     onClick={() => handleViewAllClick(section.title)}
//                                                     className="w-full mt-4 pt-3 border-t border-gray-100 text-left text-[11px] font-black text-[#1D73BE] hover:text-slate-900 uppercase flex items-center justify-between group"
//                                                 >
//                                                     View All Models
//                                                     <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
//                                                 </button>
//                                             )}
//                                         </div>
//                                     ))}
//                                 </div>
//                             ) : (
//                                 // Specific Category View (Wahi bullet style jo pehle tha)
//                                 <div className="col-span-3 grid grid-cols-3 gap-x-10 gap-y-6">
//                                     {megaMenuData[activeTab].content[activeSub]?.map((item) => (
//                                         <Link
//                                             key={item}
//                                             to={`/shop?brand=${activeTab}&model=${item}`}
//                                             onClick={closeMenu}
//                                             className="text-[13px] text-slate-500 hover:text-[#1D73BE] font-bold transition-all flex items-center gap-2 group"
//                                         >
//                                             <span className="w-1.5 h-1.5 bg-slate-300 rounded-full group-hover:bg-[#1D73BE] transition-colors"></span>
//                                             {item}
//                                         </Link>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </header>
//     );
// }

























import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const megaMenuData = {
    apple: {
        sidebar: ["Overview", "iPhone", "iPad", "iWatch", "AirPods"],
        content: {
            "Overview": [
                { title: "iPhone", items: [{ name: "iPhone 17 Pro Max", isNew: true }, { name: "iPhone 17 Pro", isNew: true }, "iPhone 16 Pro Max", "iPhone 16 Pro"] },
                { title: "iPad", items: [{ name: "iPad Pro M4", isNew: true }, "iPad Air 6", "iPad Mini 7", "iPad 10th Gen"] },
                { title: "Watch", items: [{ name: "Series 10", isNew: true }, "Ultra 2", "SE 2024"] }
            ],
            "iPhone": [{ name: "iPhone 17 Pro Max", isNew: true }, { name: "iPhone 17 Pro", isNew: true }, "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16", "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15", "iPhone 14 Plus", "iPhone 14", "iPhone 13", "iPhone 12", "iPhone SE"],
            "iPad": [{ name: "iPad Pro 13\" (M4)", isNew: true }, { name: "iPad Air 13\"", isNew: true }, "iPad Pro 12.9\"", "iPad Pro 11\"", "iPad Air 5", "iPad Mini 7", "iPad 10", "iPad 9th Gen"],
            "iWatch": [{ name: "Series 10 46MM", isNew: true }, { name: "Series 10 42MM", isNew: true }, "Series Ultra 2", "Series 9 45MM", "Series 9 41MM", "Series 8", "Watch SE 2"],
            "AirPods": [{ name: "AirPods Pro 3rd Gen", isNew: true }, "AirPods Pro 2nd Gen", "AirPods 4th Gen", "AirPods 3rd Gen", "AirPods Max 2"]
        }
    },
    samsung: {
        sidebar: ["Overview", "S Series", "A Series", "Note Series", "Z Series"],
        content: {
            "Overview": [
                { title: "S Series", items: [{ name: "S26 Ultra", isNew: true }, "S25 Ultra", "S24 Ultra", "S23 FE"] },
                { title: "Z Series", items: [{ name: "Fold 7", isNew: true }, { name: "Flip 7", isNew: true }, "Fold 6"] },
                { title: "A Series", items: [{ name: "A56 5G", isNew: true }, "A36", "A55"] }
            ],
            "S Series": [{ name: "Galaxy S26 Ultra", isNew: true }, { name: "Galaxy S26 Plus", isNew: true }, "Galaxy S25 Ultra", "Galaxy S25 Plus", "Galaxy S24 Ultra", "Galaxy S24 FE", "Galaxy S23 Ultra", "Galaxy S23 FE", "Galaxy S22 Ultra", "Galaxy S21 FE"],
            "A Series": [{ name: "Galaxy A56 5G", isNew: true }, { name: "Galaxy A36", isNew: true }, "Galaxy A55", "Galaxy A54", "Galaxy A53", "Galaxy A35", "Galaxy A34", "Galaxy A25", "Galaxy A15", "Galaxy A05s"],
            "Note Series": ["Note 20 Ultra 5G", "Note 20 5G", "Note 10 Plus", "Note 10 Lite", "Note 9"],
            "Z Series": [{ name: "Galaxy Z Fold 7", isNew: true }, { name: "Galaxy Z Flip 7", isNew: true }, "Galaxy Z Fold 6", "Galaxy Z Flip 6", "Galaxy Z Fold 5", "Galaxy Z Flip 5"],
        }
    },
    google: {
        sidebar: ["Overview", "Pixel Phones", "Pixel Watch", "Pixel Buds"],
        content: {
            "Overview": [
                { title: "Pixel Phones", items: [{ name: "Pixel 10 Pro", isNew: true }, "Pixel 9 Pro XL", "Pixel 9", "Pixel 8a"] },
                { title: "Wearables", items: [{ name: "Pixel Watch 4", isNew: true }, "Pixel Watch 3", "Buds Pro 2"] }
            ],
            "Pixel Phones": [{ name: "Pixel 10 Pro XL", isNew: true }, { name: "Pixel 10 Pro", isNew: true }, { name: "Pixel 9 Pro XL", isNew: true }, "Pixel 9 Pro", "Pixel 9", "Pixel 8 Pro", "Pixel 8", "Pixel 8a", "Pixel 7 Pro", "Pixel 7", "Pixel 7a", "Pixel 6 Pro"],
            "Pixel Watch": [{ name: "Pixel Watch 4", isNew: true }, "Pixel Watch 3", "Pixel Watch 2", "Pixel Watch (1st Gen)"],
            "Pixel Buds": [{ name: "Pixel Buds Pro 2", isNew: true }, "Pixel Buds Pro", "Pixel Buds A-Series"]
        }
    },
    motorola: {
        sidebar: ["Overview", "Razr Series", "Edge Series", "Moto G Series"],
        content: {
            "Overview": [
                { title: "Razr", items: [{ name: "Razr 60 Ultra", isNew: true }, "Razr 50", "Razr 40"] },
                { title: "Edge", items: [{ name: "Edge 60 Pro", isNew: true }, "Edge 50 Fusion", "Edge 40"] }
            ],
            "Razr Series": [{ name: "Moto Razr 60 Ultra", isNew: true }, { name: "Moto Razr 60", isNew: true }, "Moto Razr 50 Ultra", "Moto Razr 50", "Moto Razr 40 Ultra"],
            "Edge Series": [{ name: "Moto Edge 60 Pro", isNew: true }, { name: "Moto Edge 50 Ultra", isNew: true }, "Moto Edge 50 Pro", "Moto Edge 50 Fusion", "Moto Edge 40 Pro", "Moto Edge 40 Neo"],
            "Moto G Series": [{ name: "Moto G85 5G", isNew: true }, "Moto G64", "Moto G54", "Moto G84", "Moto G73", "Moto G14"]
        }
    }
};

const navItems = [
    { label: "Apple", key: "apple" },
    { label: "Samsung", key: "samsung" },
    { label: "Google", key: "google" },
    { label: "Motorola", key: "motorola" },
];

export default function Navbar({ onToggleCategory }) {
    const { user } = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState(null);
    const [activeSub, setActiveSub] = useState("Overview");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMenu = () => { 
        setActiveTab(null); 
        setActiveSub("Overview"); 
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="bg-white sticky top-0 z-50 shadow-sm font-sans" onMouseLeave={closeMenu}>
            {/* TOP BAR */}
            <div className="border-b border-gray-100">
                <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between gap-4">
                    
                    {/* Logo Section */}
                    <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
                        <div className="bg-[#1D73BE] p-1.5 rounded-lg shadow-sm shrink-0">
                            <span className="material-symbols-outlined text-white text-2xl md:text-3xl">smartphone</span>
                        </div>
                        {/* Hidden on small screens as requested */}
                        <span className="hidden sm:block text-xl md:text-2xl font-black text-slate-800  uppercase">
                            ISHINE<span className="text-[#1D73BE]"> WIRELESS</span>
                        </span>
                    </Link>

                    {/* Search - Hidden on small screens */}
                    <div className="hidden md:flex flex-1 max-w-2xl relative mx-4">
                        <input className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 px-6 text-sm outline-none focus:border-[#1D73BE]" placeholder="Search models (e.g. iPhone 16 Pro)..." />
                    </div>

                    {/* Action Icons */}
                    <div className="flex items-center gap-1 md:gap-2">
                        {/* Account */}
                        <Link to={user ? "/profile" : "/login"} className="flex items-center gap-2 md:gap-3 px-2 md:px-3 py-2 rounded-xl hover:bg-gray-50 transition-all group">
                            <div className="hidden lg:flex flex-col items-end text-right">
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none mb-1">Account</span>
                                <span className="text-[12px] text-slate-900 font-black tracking-tight leading-none uppercase">{user ? user.name.split(' ')[0] : 'Sign In'}</span>
                            </div>
                            <span className="material-symbols-outlined text-[24px] text-slate-800 group-hover:text-[#1D73BE] transition-colors">person</span>
                        </Link>

                        <div className="hidden md:block w-[1px] h-6 bg-gray-200 mx-1"></div>

                        {/* Wishlist - Hidden on small screens */}
                        <Link to="/wishlist" className="hidden md:flex p-2.5 rounded-xl hover:bg-gray-50 group relative">
                            <span className="material-symbols-outlined text-[24px] text-slate-800 group-hover:text-[#1D73BE]">favorite</span>
                            <span className="absolute top-1.5 right-1.5 bg-[#1D73BE] text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full ring-2 ring-white">0</span>
                        </Link>

                        {/* Cart */}
                        <Link to="/cart" className="p-2.5 rounded-xl hover:bg-gray-50 group relative">
                            <span className="material-symbols-outlined text-[24px] text-slate-800 group-hover:text-[#1D73BE]">shopping_cart</span>
                            <span className="absolute top-1.5 right-1.5 bg-slate-900 text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full ring-2 ring-white">2</span>
                        </Link>

                        {/* Mobile Menu Toggle (Only on small screens) */}
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-slate-800">
                            <span className="material-symbols-outlined text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* NAV BAR: Main Brands (Desktop) */}
            <div className="bg-white border-b border-gray-100 hidden md:block">
                <div className="container mx-auto px-4 flex items-center h-12">
                    <button onClick={onToggleCategory} className="flex items-center gap-2 bg-slate-900 text-white px-5 h-full text-[12px] font-bold uppercase mr-6 hover:bg-[#1D73BE] transition-colors">
                        <span className="material-symbols-outlined text-lg">menu</span> accessories
                    </button>
                    <nav className="flex items-center h-full flex-1">
                        {navItems.map((item) => (
                            <button
                                key={item.key}
                                onMouseEnter={() => { setActiveTab(item.key); setActiveSub("Overview"); }}
                                className={`px-4 h-full text-[12px] font-black uppercase transition-colors relative ${activeTab === item.key ? "text-[#1D73BE]" : "text-slate-800 hover:text-[#1D73BE]"}`}
                            >
                                {item.label}
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1D73BE] transition-transform duration-300 ${activeTab === item.key ? 'scale-x-100' : 'scale-x-0'}`}></span>
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* MEGA MENU PANEL (Desktop Only) */}
            <div className={`absolute left-0 w-full bg-white shadow-2xl transition-all duration-300 z-50 border-b border-gray-200 hidden md:block ${activeTab ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                {activeTab && megaMenuData[activeTab] && (
                    <div className="container mx-auto flex min-h-[480px]">
                        {/* Sidebar */}
                        <div className="w-1/4 bg-gray-50/50 py-6 border-r border-gray-100">
                            {megaMenuData[activeTab].sidebar.map((sub) => (
                                <div
                                    key={sub}
                                    onMouseEnter={() => setActiveSub(sub)}
                                    className={`px-8 py-3 text-[13px] font-black cursor-pointer flex items-center justify-between transition-all ${activeSub === sub ? "text-[#1D73BE] bg-white border-l-4 border-[#1D73BE] shadow-sm" : "text-slate-700 hover:text-[#1D73BE]"}`}
                                >
                                    {sub} <span className="material-symbols-outlined text-sm">chevron_right</span>
                                </div>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="w-3/4 p-10 bg-white">
                            <div className="mb-8 border-b border-gray-100 pb-4 flex justify-between items-end">
                                <h4 className="text-xl font-black text-slate-900 uppercase">
                                    {activeSub === "Overview" ? `${activeTab} Category Overview` : `Shop ${activeSub}`}
                                </h4>
                            </div>

                            {activeSub === "Overview" ? (
                                <div className="grid grid-cols-3 gap-6">
                                    {megaMenuData[activeTab].content["Overview"].map((section) => (
                                        <div key={section.title} className="bg-gray-50/50 border border-gray-100 rounded-2xl p-5 hover:border-[#1D73BE]/30 transition-all">
                                            <h5 className="font-black text-slate-900 text-[14px] mb-4 border-l-4 border-[#1D73BE] pl-3 uppercase">{section.title}</h5>
                                            <ul className="space-y-3">
                                                {section.items.map((item, idx) => {
                                                    const name = typeof item === 'object' ? item.name : item;
                                                    const isNew = typeof item === 'object' && item.isNew;
                                                    return (
                                                        <Link key={idx} to={`/shop?model=${name}`} onClick={closeMenu} className="text-[12px] text-slate-500 hover:text-[#1D73BE] cursor-pointer flex items-center justify-between group">
                                                            <span className="flex items-center gap-2">
                                                                <span className="w-1 h-1 bg-slate-300 font-extrabold rounded-full group-hover:bg-[#000]"></span>
                                                                  <span className="text-slate-500 font-bold text-[#111827]">{name}</span>
                                                            </span> 
                                                            {isNew && <span className="text-[8px] bg-[#1D73BE] text-white px-1 rounded font-bold animate-pulse">NEW</span>}
                                                        </Link>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="grid grid-cols-3 gap-x-10 gap-y-5">
                                    {megaMenuData[activeTab].content[activeSub]?.map((item, idx) => {
                                        const name = typeof item === 'object' ? item.name : item;
                                        const isNew = typeof item === 'object' && item.isNew;
                                        return (
                                            <Link key={idx} to={`/shop?model=${name}`} onClick={closeMenu} className="text-[13px] text-slate-500 hover:text-[#1D73BE] font-bold flex items-center justify-between group">
                                                <span className="flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 bg-slate-300 font-bold rounded-full group-hover:bg-[#000000]"></span>
                                                    <span className="text-slate-500 font-bold text-[#111827]">{name}</span>
                                                </span>  
                                                {isNew && <span className="bg-[#1D73BE] text-white text-[9px] px-1.5 py-0.5 rounded font-black animate-pulse">NEW</span>}
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* MOBILE MENU (Small Screens Only) */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 z-40 max-h-screen overflow-y-auto">
                    <div className="p-4 space-y-2">
                        {navItems.map((item) => (
                            <Link 
                                key={item.key} 
                                to={`/shop/${item.key}`} 
                                onClick={closeMenu}
                                className="block py-3 px-4 text-slate-800 font-black uppercase text-sm border-b border-gray-50"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <button onClick={onToggleCategory} className="w-full text-left py-3 px-4 text-[#1D73BE] font-black uppercase text-sm">
                            Accessories
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}