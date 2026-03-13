// import React, { useState, useEffect } from "react";
// import Sidebar from "../../components/admin/Sidebar";
// import Header from "../../components/admin/Header";

// const AdminLayout = ({ children }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
//     return localStorage.getItem('sidebarCollapsed') === 'true';
//   });

//   useEffect(() => {
//     localStorage.setItem('sidebarCollapsed', sidebarCollapsed);
//   }, [sidebarCollapsed]);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Sidebar 
//         isOpen={sidebarOpen}
//         onClose={() => setSidebarOpen(false)}
//         isCollapsed={sidebarCollapsed}
//         onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
//       />
      
//       <div className={`transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
//         <Header 
//           onMenuClick={() => setSidebarOpen(true)}
//           onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
//           isCollapsed={sidebarCollapsed}
//         />
        
//         <main className="p-4 md:p-6">
//           <div className="max-w-7xl mx-auto">
//             {children}
//           </div>
//         </main>
//       </div>

//       {sidebarOpen && (
//         <div 
//           className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default AdminLayout;












import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom"; // Yahan import karein
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";

const AdminLayout = () => { // Remove {children} prop
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    return localStorage.getItem('sidebarCollapsed') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', sidebarCollapsed);
  }, [sidebarCollapsed]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      
      <div className={`transition-all duration-300 ${sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64'}`}>
        <Header 
          onMenuClick={() => setSidebarOpen(true)}
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          isCollapsed={sidebarCollapsed}
        />
        
        <main className="p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet /> {/* Yahan Outlet use karein children ki jagah */}
          </div>
        </main>
      </div>

      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;