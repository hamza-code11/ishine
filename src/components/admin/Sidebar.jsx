import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    ShoppingBag,
    Package,
    Users,
    ShoppingCart,
    BarChart3,
    Settings,
    LogOut,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    X,
    Tag,
    Truck,
    Percent,
    Star
} from "lucide-react";

const Sidebar = ({ isOpen, onClose, isCollapsed, onToggle }) => {
    const location = useLocation();
    const [expanded, setExpanded] = useState({
        Products: location.pathname.includes('/products') // Auto-expand if on products page
    });

    const menuItems = [
        {
            section: "Main",
            items: [
                { path: "/admin", name: "Dashboard", icon: LayoutDashboard, end: true },
                { path: "/admin/analytics", name: "Analytics", icon: BarChart3, badge: "New" },
            ]
        },
        {
            section: "Store",
            items: [
                {
                    name: "Products",
                    icon: ShoppingBag,
                    path: "/admin/products", // Add main path for products
                    submenu: [
                        { path: "admin/products", name: "All Products", icon: Package, end: true },
                        { path: "/admin/products/add", name: "Add Product", icon: Tag },
                        { path: "/admin/products/categories", name: "Categories", icon: Star },
                    ]
                },
                { path: "/admin/orders", name: "Orders", icon: ShoppingCart, badge: "12" },
                { path: "/admin/customers", name: "Customers", icon: Users },
            ]
        },
        {
            section: "Marketing",
            items: [
                { path: "/admin/coupons", name: "Coupons", icon: Percent },
                { path: "/admin/shipping", name: "Shipping", icon: Truck },
            ]
        },
        {
            section: "Settings",
            items: [
                { path: "/admin/settings", name: "Settings", icon: Settings },
            ]
        }
    ];

    const MenuItem = ({ item }) => {
        const location = useLocation();
        
        // Check if any submenu item is active
        const isSubmenuActive = item.submenu?.some(subItem => 
            location.pathname === subItem.path || location.pathname.startsWith(subItem.path + '/')
        );

        if (item.submenu) {
            return (
                <div className="mb-1">
                    <button
                        onClick={() => setExpanded(prev => ({ ...prev, [item.name]: !prev[item.name] }))}
                        className={`
                            w-full flex items-center rounded-lg hover:bg-gray-100 transition-all
                            ${isCollapsed ? 'justify-center p-2.5 mx-auto' : 'justify-between px-3 py-2.5'}
                            ${isSubmenuActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600'}
                        `}
                        title={isCollapsed ? item.name : ""}
                    >
                        <div className={`flex items-center ${isCollapsed ? '' : 'gap-3'}`}>
                            <item.icon size={20} className="flex-shrink-0" />
                            {!isCollapsed && (
                                <span className="text-sm font-medium">{item.name}</span>
                            )}
                        </div>
                        {!isCollapsed && (
                            <ChevronDown 
                                size={16} 
                                className={`transition-transform flex-shrink-0 ${expanded[item.name] ? 'rotate-180' : ''}`} 
                            />
                        )}
                    </button>

                    {expanded[item.name] && !isCollapsed && (
                        <div className="ml-4 pl-4 border-l border-gray-200 mt-1">
                            {item.submenu.map((subItem, idx) => (
                                <NavLink
                                    key={idx}
                                    to={subItem.path}
                                    onClick={onClose}
                                    end={subItem.end}
                                    className={({ isActive }) => `
                                        flex items-center gap-3 px-3 py-2 text-sm rounded-lg mb-1
                                        ${isActive 
                                            ? 'text-blue-600 bg-blue-50 font-medium' 
                                            : 'text-gray-500 hover:bg-gray-100'
                                        }
                                    `}
                                >
                                    <subItem.icon size={16} className="flex-shrink-0" />
                                    {subItem.name}
                                </NavLink>
                            ))}
                        </div>
                    )}
                </div>
            );
        }

        return (
            <NavLink
                to={item.path}
                onClick={onClose}
                end={item.end}
                className={({ isActive }) => `
                    flex items-center rounded-lg mb-1 transition-all
                    ${isCollapsed ? 'justify-center p-2.5 mx-auto w-10 h-10' : 'gap-3 px-3 py-2.5'}
                    ${isActive 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }
                `}
                title={isCollapsed ? item.name : ""}
            >
                <item.icon size={20} className="flex-shrink-0" />
                {!isCollapsed && (
                    <>
                        <span className="text-sm font-medium flex-1">{item.name}</span>
                        {item.badge && (
                            <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded-full flex-shrink-0">
                                {item.badge}
                            </span>
                        )}
                    </>
                )}
            </NavLink>
        );
    };

    return (
        <>
            {/* Mobile Sidebar */}
            <aside className={`
                fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl
                transform transition-transform duration-300 lg:hidden
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">S</span>
                        </div>
                        <span className="font-bold text-gray-800">StoreHub</span>
                    </div>
                    <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded flex-shrink-0">
                        <X size={20} />
                    </button>
                </div>

                <div className="p-3 overflow-y-auto h-[calc(100vh-64px)]">
                    {menuItems.map((section, idx) => (
                        <div key={idx} className="mb-4">
                            <p className="text-xs font-semibold text-gray-400 uppercase px-3 mb-2">
                                {section.section}
                            </p>
                            {section.items.map((item, index) => (
                                <MenuItem key={index} item={item} />
                            ))}
                        </div>
                    ))}

                    <button className="w-full flex items-center gap-3 px-3 py-2.5 text-red-500 hover:bg-red-50 rounded-lg mt-4">
                        <LogOut size={20} className="flex-shrink-0" />
                        <span className="text-sm font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Desktop Sidebar */}
            <aside className={`
                hidden lg:block fixed inset-y-0 left-0 z-40 bg-white border-r
                transition-all duration-300
                ${isCollapsed ? 'w-20' : 'w-64'}
            `}>
                <div className={`flex items-center h-16 px-4 border-b ${isCollapsed ? 'justify-center' : 'justify-between'}`}>
                    {!isCollapsed && (
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-bold text-lg">S</span>
                            </div>
                            <span className="font-bold text-gray-800">StoreHub</span>
                        </div>
                    )}
                    <button
                        onClick={onToggle}
                        className="p-1.5 hover:bg-gray-100 rounded-lg flex-shrink-0"
                    >
                        {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                    </button>
                </div>

                <div className="p-3 overflow-y-auto h-[calc(100vh-128px)]">
                    {menuItems.map((section, idx) => (
                        <div key={idx} className="mb-4">
                            {!isCollapsed && (
                                <p className="text-xs font-semibold text-gray-400 uppercase px-3 mb-2">
                                    {section.section}
                                </p>
                            )}
                            <div className="space-y-1">
                                {section.items.map((item, index) => (
                                    <MenuItem key={index} item={item} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 border-t">
                    <button className={`
                        w-full flex items-center rounded-lg transition-colors
                        ${isCollapsed
                            ? 'justify-center p-2.5 mx-auto w-10 h-10'
                            : 'gap-3 px-3 py-2.5'
                        }
                        text-red-500 hover:bg-red-50
                    `} title={isCollapsed ? "Logout" : ""}>
                        <LogOut size={20} className="flex-shrink-0" />
                        {!isCollapsed && <span className="text-sm font-medium">Logout</span>}
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;