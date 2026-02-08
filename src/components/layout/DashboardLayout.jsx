import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const DashboardLayout = () => {
   // Sidebar state
   const [sidebarOpen, setSidebarOpen] = useState(true);
   const [isMobile, setIsMobile] = useState(false);

   // Handle responsive behavior
   useEffect(() => {
      const handleResize = () => {
         const mobile = window.innerWidth < 1024; // lg breakpoint
         setIsMobile(mobile);
         if (mobile) {
            setSidebarOpen(false); // Default to closed on mobile
         } else {
            setSidebarOpen(true); // Default to open on desktop
         }
      };

      // Initial check
      handleResize();

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

   return (
      <div className="min-h-screen bg-gray-50 flex font-sans">
         {/* Sidebar Component */}
         <Sidebar
            isOpen={sidebarOpen}
            toggleSidebar={toggleSidebar}
            isDesktop={!isMobile}
         />

         {/* Main Content Wrapper */}
         <div
            className={`flex-1 flex flex-col transition-all duration-300 ease-in-out
          ${sidebarOpen && !isMobile ? 'ltr:lg:ml-64 rtl:lg:mr-64' : 'ltr:lg:ml-20 rtl:lg:mr-20'}
        `}
         >
            {/* Navbar */}
            <Navbar
               toggleSidebar={toggleSidebar}
               isSidebarOpen={sidebarOpen}
            />

            {/* Main Page Content */}
            <main className="flex-1 overflow-x-hidden overflow-y-auto w-full p-4 sm:p-6 lg:p-8">
               {/* Renders the child route element */}
               <Outlet />
            </main>
         </div>
      </div>
   );
};

export default DashboardLayout;
