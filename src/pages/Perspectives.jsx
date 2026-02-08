import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';
import { mockPerspectivesList } from '../data/mockData';
import PerspectiveCard from './perspectives/components/PerspectiveCard';

const Perspectives = () => {
   const { t } = useTranslation();
   const [searchTerm, setSearchTerm] = useState('');

   const filteredPerspectives = mockPerspectivesList.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
   );

   return (
      <div className="container-custom">
         {/* Header Section */}
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
               <h1 className="text-2xl font-bold text-[#1D3557] mb-1">
                  {t('nav.perspectives') || 'Perspectives'}
               </h1>
               <p className="text-sm text-gray-500">
                  Overview Of All Perspectives, Themes, And Standards With Progress Status.
               </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-80">
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
               </div>
               <input
                  type="text"
                  className="block w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-300 transition-all font-sans"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
               />
            </div>
         </div>

         {/* Grid Content */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPerspectives.map((perspective) => (
               <PerspectiveCard
                  key={perspective.id}
                  {...perspective}
               />
            ))}
         </div>

         {filteredPerspectives.length === 0 && (
            <div className="text-center py-12 text-gray-500">
               No perspectives found matching "{searchTerm}"
            </div>
         )}
      </div>
   );
};

export default Perspectives;
