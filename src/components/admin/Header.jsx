import React, { useState, useRef, useEffect } from "react";
import { 
  Menu, 
  Search, 
  Bell, 
  ChevronDown,
  LogOut,
  User,
  Settings,
  HelpCircle,
  PanelLeft
} from "lucide-react";

const Header = ({ onMenuClick, onToggleSidebar, isCollapsed }) => {
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfile(false);
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-white border-b">
      <div className="px-4 h-16 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-2">
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
          >
            <Menu size={22} />
          </button>
          
          <button
            onClick={onToggleSidebar}
            className="hidden lg:block p-2 hover:bg-gray-100 rounded-lg"
          >
            <PanelLeft size={20} className={`transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
          </button>

          {/* Search */}
          <div className="hidden md:block ml-2">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products, orders..."
                className="w-80 pl-10 pr-4 py-2 bg-gray-50 border rounded-lg text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2" ref={profileRef}>
          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 hover:bg-gray-100 rounded-lg relative"
            >
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border py-2">
                <div className="px-4 py-2 border-b">
                  <h3 className="font-semibold">Notifications</h3>
                </div>
                <div className="max-h-96">
                  {[1,2,3].map(i => (
                    <div key={i} className="px-4 py-3 hover:bg-gray-50 cursor-pointer">
                      <p className="text-sm">New order #00{i} received</p>
                      <p className="text-xs text-gray-400 mt-1">5 min ago</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="flex items-center gap-2 p-1.5 hover:bg-gray-100 rounded-lg"
            >
              <img
                src="https://ui-avatars.com/api/?name=Admin&background=2563eb&color=fff"
                className="w-8 h-8 rounded-lg"
                alt="Profile"
              />
              <div className="hidden md:block text-left">
                <p className="text-sm font-semibold">Admin</p>
                <p className="text-xs text-gray-400">Store Owner</p>
              </div>
              <ChevronDown size={16} className={`hidden md:block transition-transform ${showProfile ? 'rotate-180' : ''}`} />
            </button>

            {showProfile && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-1">
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50">
                  <User size={16} /> Profile
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50">
                  <Settings size={16} /> Settings
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50">
                  <HelpCircle size={16} /> Help
                </button>
                <div className="border-t my-1" />
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50">
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;