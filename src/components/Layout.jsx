import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useAppStore from '../store';
import LanguageSwitcher from './common/LanguageSwitcher';
import {
   LayoutDashboard,
   FolderKanban,
   FileText,
   Settings,
   Menu,
   X
} from 'lucide-react';
import clsx from 'clsx';

const Layout = ({ children }) => {
   const { t } = useTranslation();
   const location = useLocation();
   const { sidebarOpen, toggleSidebar } = useAppStore();

   // Navigation menu configuration
   const navigation = [
      {
         name: t('nav.dashboard'),
         href: '/dashboard',
         icon: LayoutDashboard,
         active: location.pathname === '/dashboard',
         ariaLabel: 'Navigate to Dashboard'
      },
      {
         name: t('nav.projects'),
         href: '/projects',
         icon: FolderKanban,
         active: location.pathname.startsWith('/project'),
         ariaLabel: 'Navigate to Projects'
      },
      {
         name: t('nav.reports'),
         href: '/reports',
         icon: FileText,
         active: location.pathname === '/reports',
         ariaLabel: 'Navigate to Reports'
      },
      {
         name: t('nav.settings'),
         href: '/settings',
         icon: Settings,
         active: location.pathname === '/settings',
         ariaLabel: 'Navigate to Settings'
      }
   ];

   return (
      <div className="min-h-screen bg-gray-50">
         {/* Sidebar Navigation */}
         <aside
            className={clsx(
               'fixed left-0 top-0 z-40 h-screen w-64 bg-white border-r border-gray-200 transition-transform',
               !sidebarOpen && '-translate-x-full lg:translate-x-0'
            )}
            role="complementary"
            aria-label="Sidebar navigation"
         >
            {/* Brand Header */}
            <header className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
               <div>
                  <h1 className="text-xl font-bold text-gradient-primary">
                     Tahwul
                  </h1>
                  <p className="text-xs text-gray-500">Compliance Platform</p>
               </div>
               <button
                  onClick={toggleSidebar}
                  className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Close sidebar"
                  type="button"
               >
                  <X className="w-5 h-5" aria-hidden="true" />
               </button>
            </header>

            {/* Primary Navigation */}
            <nav
               className="p-4 space-y-2"
               role="navigation"
               aria-label="Main navigation"
            >
               {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                     <Link
                        key={item.name}
                        to={item.href}
                        className={clsx(
                           'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
                           item.active
                              ? 'bg-primary-50 text-primary-700 font-semibold'
                              : 'text-gray-700 hover:bg-gray-100'
                        )}
                        aria-label={item.ariaLabel}
                        aria-current={item.active ? 'page' : undefined}
                     >
                        <Icon className="w-5 h-5" aria-hidden="true" />
                        <span>{item.name}</span>
                     </Link>
                  );
               })}
            </nav>

            {/* Sidebar Footer */}
            <footer className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
               <div className="flex items-center justify-center">
                  <LanguageSwitcher />
               </div>
            </footer>
         </aside>

         {/* Mobile Navigation Overlay */}
         {sidebarOpen && (
            <div
               className="fixed inset-0 bg-black/50 z-30 lg:hidden"
               onClick={toggleSidebar}
               role="button"
               tabIndex={0}
               aria-label="Close navigation"
               onKeyDown={(e) => e.key === 'Enter' && toggleSidebar()}
            />
         )}

         {/* Main Content Wrapper */}
         <div className={clsx(
            'transition-all duration-300',
            sidebarOpen ? 'lg:ml-64' : 'ml-0 lg:ml-64'
         )}>
            {/* Top Application Header */}
            <header className="sticky top-0 z-20 h-16 bg-white border-b border-gray-200 flex items-center px-4 lg:px-8">
               <button
                  onClick={toggleSidebar}
                  className="p-2 rounded-lg hover:bg-gray-100 lg:hidden transition-colors"
                  aria-label="Open navigation menu"
                  type="button"
               >
                  <Menu className="w-5 h-5" aria-hidden="true" />
               </button>
               <div className="flex-1" aria-hidden="true" />
               {/* Placeholder for user profile, notifications, etc */}
            </header>

            {/* Main Page Content */}
            <main role="main" id="main-content">
               {children}
            </main>
         </div>
      </div>
   );
};

Layout.propTypes = {
   children: PropTypes.node.isRequired
};

export default Layout;
