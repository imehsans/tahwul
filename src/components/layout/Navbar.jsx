import { useState, useRef, useEffect } from 'react';
import { Menu, Bell, Search, LogOut, ChevronDown, User, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import useAppStore from '../../store';
import LanguageSwitcher from '../common/LanguageSwitcher';

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
   const { t } = useTranslation();
   const navigate = useNavigate();
   const { logout, user } = useAppStore();

   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const dropdownRef = useRef(null);

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
         }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
   }, []);

   const handleLogout = () => {
      logout();
      navigate('/');
   };

   return (
      <header className="sticky py-3.5 top-0 z-30 bg-white border-b border-[#E0E8ED]">
         <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">

            {/* Left Side: Toggle & Search */}
            <div className="flex items-center gap-4 flex-1">
               {/* Mobile Menu Toggle */}
               <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 lg:hidden"
                  aria-label="Open sidebar"
               >
                  <Menu className="w-6 h-6" />
               </button>

               {/* Search Bar */}
               <div className="relative hidden sm:block max-w-md w-full ml-4">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <Search className="h-4 w-4 text-[#8597A8]" />
                  </div>
                  <input
                     type="text"
                     className="block w-full text-black pl-8 pr-4 py-2 border border-[#E0E8ED] ring-0 rounded-lg leading-5 bg-[#F5F8FA] placeholder-[#8597A8] focus:outline-none focus:bg-white focus:ring-0 focus:ring-primary-300 focus:border-primary-500 sm:text-sm transition duration-150 ease-in-out font-arabic"
                     placeholder={t('nav.search') || "Search..."}
                  />
               </div>
            </div>

            {/* Right Side: Notifications & User Profile */}
            <div className="flex items-center gap-4">
               {/* Language Switcher */}
               <div className="hidden sm:block">
                  <LanguageSwitcher />
               </div>

               {/* Notification Bell */}
               <button className="relative p-2 cursor-pointer rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors">
                  <span className="sr-only">View notifications</span>
                  <Bell className="h-6 w-6" />
                  {/* Notification Dot */}
                  <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
               </button>

               {/* User Profile Dropdown */}
               <div className="relative" ref={dropdownRef}>
                  <div
                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                     className="flex items-center gap-3 cursor-pointer p-1 pr-2 rounded-full bg-[#F9FAFA] px-1.5 hover:bg-gray-50 transition-colors select-none"
                  >
                     <div className="h-6 w-6 rounded-full overflow-hidden shadow-sm">
                        <img src="https://ui-avatars.com/api/?name=Mohamed&background=random" alt="User avatar" className="h-full w-full object-cover" />
                     </div>
                     <span className="text-sm font-medium text-gray-900 font-arabic hidden md:block">{user?.name || 'Mohamed'}</span>
                     <ChevronDown className={`w-4 h-4 text-gray-500 hidden md:block transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                     <div className="absolute end-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <Link
                           to="/profile"
                           className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors font-arabic"
                           onClick={() => setIsDropdownOpen(false)}
                        >
                           <User className="w-4 h-4" />
                           {t('nav.profile') || 'Profile'}
                        </Link>
                        <Link
                           to="/settings"
                           className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors font-arabic"
                           onClick={() => setIsDropdownOpen(false)}
                        >
                           <Settings className="w-4 h-4" />
                           {t('nav.settings') || 'Settings'}
                        </Link>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </header>
   );
};

export default Navbar;
