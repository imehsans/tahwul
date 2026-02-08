import { useTranslation } from 'react-i18next'; // Since the project uses i18n
import { Link, useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { LogOut } from 'lucide-react';
import useAppStore from '../../store';

// Sidebar Icons
import HomeIcon from '../../assets/icons/sidebar-icons/home.svg';
import PerspectivesIcon from '../../assets/icons/sidebar-icons/perspective.svg';
import TasksIcon from '../../assets/icons/sidebar-icons/tasks.svg';
import DocumentsIcon from '../../assets/icons/sidebar-icons/documents.svg';
import ReportsIcon from '../../assets/icons/sidebar-icons/reports.svg';
import UsersIcon from '../../assets/icons/sidebar-icons/users-roles.svg';
import CollapseIcon from '../../assets/icons/sidebar-icons/sidebar-collapse-icon.svg';
import Logo from '../../assets/images/logo-img/logo.png';

const Sidebar = ({ isOpen, toggleSidebar, isDesktop }) => {
   const { t, i18n } = useTranslation();
   const location = useLocation();
   const navigate = useNavigate();
   const { logout } = useAppStore();
   const isRTL = i18n.dir() === 'rtl';

   const menuItems = [
      { name: t('nav.dashboard') || 'Dashboard', icon: HomeIcon, path: '/dashboard' },
      { name: t('nav.perspectives') || 'Perspectives', icon: PerspectivesIcon, path: '/perspectives' },
      { name: t('nav.tasks') || 'Tasks', icon: TasksIcon, path: '/tasks' },
      { name: t('nav.documents') || 'Documents', icon: DocumentsIcon, path: '/documents' },
      { name: t('nav.reports') || 'Reports', icon: ReportsIcon, path: '/reports' },
      { name: t('nav.usersRoles') || 'Users & Roles', icon: UsersIcon, path: '/users' },
   ];

   const handleLogout = () => {
      logout();
      navigate('/');
   };

   return (
      <>
         {/* Mobile Overlay */}
         <div
            className={clsx(
               "fixed inset-0 bg-black/50 z-40 transition-opacity lg:hidden",
               isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            )}
            onClick={toggleSidebar}
            aria-hidden="true"
         />

         {/* Sidebar Container */}
         <aside
            className={clsx(
               "fixed top-0 ltr:left-0 rtl:right-0  py-2.5 bg-primary-500 min-h-screen z-50 transition-all duration-300 ease-in-out ltr:border-r rtl:border-l border-primary-200 gap-2.5 flex flex-col",
               isOpen ? 'translate-x-0 w-64 px-6' : clsx('lg:translate-x-0 lg:w-20 px-4', isRTL ? 'translate-x-full' : '-translate-x-full')
            )}
         >
            {/* Desktop Collapse Toggle Button */}
            {/* Logo Section */}
            <div className={clsx(
               "flex items-center relative transition-all duration-300",
               !isOpen && 'lg:justify-center '
            )}>
               <button
                  onClick={toggleSidebar}
                  className={clsx("absolute hidden lg:flex items-center justify-center w-8 h-8 bg-white border border-gray-200 rounded-full text-gray-500 hover:text-primary-600 shadow-sm z-50 transition-colors ", isOpen ? 'ltr:-right-10 rtl:-left-10' : 'ltr:-right-8 rtl:-left-8')}
                  aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
               >
                  <img
                     src={CollapseIcon}
                     alt="Collapse"
                     className={clsx("w-4 h-4 transition-transform duration-300", (isRTL ? isOpen : !isOpen) ? "rotate-180" : "")}
                  />
               </button>
               <Link to="/dashboard" className="flex items-center gap-3 overflow-hidden">
                  <img
                     src={Logo}
                     alt="Tahwul Logo"
                     className={clsx(
                        "object-contain transition-all duration-300",
                        isOpen ? "max-w-[100px] max-h-[40px]" : "w-8 h-8"
                     )}
                  />
               </Link>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 overflow-y-hidden overflow-x-hidden py-4 space-y-2 scrollbar-hide">
               {menuItems.map((item) => {
                  const isActive = location.pathname.startsWith(item.path);

                  return (
                     <Link
                        key={item.path}
                        to={item.path}
                        className={clsx(
                           "group flex items-center gap-3 px-2.5 py-3 rounded-md transition-colors flex gap-2.5 relative font-arabic",
                           isOpen ? '' : 'flex',
                           isActive
                              ? "bg-[#294161] text-white shadow-sm"
                              : "text-[#7B9FC3] hover:bg-[#294161] hover:text-white"
                        )}
                        title={!isOpen ? item.name : ''}
                     >
                        <img
                           src={item.icon}
                           alt={item.name}
                           className={clsx(
                              "min-w-[1.25rem] transition-all duration-200",
                              isOpen ? "w-4 h-4" : "w-6 h-6",
                              isActive
                                 ? "brightness-0 invert"
                                 : "group-hover:brightness-0 group-hover:invert"
                           )}
                        />

                        <span className={clsx(
                           "whitespace-nowrap transition-all duration-300 origin-left",
                           !isOpen ? 'lg:scale-0 lg:w-0 lg:opacity-0 hidden' : 'w-auto opacity-100'
                        )}>
                           {item.name}
                        </span>

                        {/* Tooltip for collapsed state (Desktop) */}
                        {!isOpen && (
                           <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 hidden lg:block font-arabic shadow-lg">
                              {item.name}
                           </div>
                        )}
                     </Link>
                  );
               })}
            </nav>

            {/* User / Footer Section (Bottom branding or Logout) */}
            <div className="p-4 border-t border-primary-200">
               <button
                  className={clsx(
                     "w-full group flex items-center gap-2.5 px-2.5 py-3 rounded-md cursor-pointer transition-colors relative font-arabic",
                     isOpen ? '' : 'justify-center px-2.5',
                     "text-red-400  hover:text-white"
                  )}
                  title={!isOpen ? (t('auth.logout') || 'Logout') : ''}
                  onClick={handleLogout}
               >
                  <LogOut className={clsx("min-w-[1.25rem]", isOpen ? "w-4 h-4" : "w-6 h-6")} />

                  <span className={clsx(
                     "whitespace-nowrap transition-all duration-300 origin-left font-medium",
                     !isOpen ? 'hidden' : 'block'
                  )}>
                     {t('auth.logout') || 'Logout'}
                  </span>
               </button>
            </div>
         </aside>
      </>
   );
};

export default Sidebar;
