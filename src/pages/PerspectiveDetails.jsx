import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getPerspectiveDetails } from '../data/mockData';
import { ArrowLeft, ChevronDown, ChevronUp, ArrowRight, Search } from 'lucide-react';

const PerspectiveDetails = () => {
   const { id } = useParams();
   const navigate = useNavigate();

   const { data: perspective, isLoading } = useQuery({
      queryKey: ['perspectiveDetails', id],
      queryFn: () => getPerspectiveDetails(id)
   });

   // Local state to manage expanded accordions
   const [openSections, setOpenSections] = useState({});

   // Sync mock data default open state
   useEffect(() => {
      if (perspective?.themes) {
         const defaults = {};
         perspective.themes.forEach(t => {
            if (t.isOpen) defaults[t.id] = true;
         });
         setOpenSections(defaults);
      }
   }, [perspective]);

   const toggleSection = (sectionId) => {
      setOpenSections(prev => ({
         ...prev,
         [sectionId]: !prev[sectionId]
      }));
   };

   if (isLoading) {
      return (
         <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
         </div>
      );
   }

   if (!perspective) return <div>Not found</div>;

   return (
      <div className="container-custom space-y-6">
         {/* Top Navigation */}
         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-2 cursor-pointer w-fit group" onClick={() => navigate(-1)}>
               <ArrowLeft className="w-5 h-5 text-[#1D3557] group-hover:-translate-x-1 transition-transform" />
               <h1 className="text-sm font-bold text-[#1D3557]">Back To Perspectives</h1>
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
               />
            </div>
         </div>

         {/* Main Status Card */}
         <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-4">
               <h2 className="text-xl font-bold text-[#1D3557]">{perspective.title}</h2>
               <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold">
                  {perspective.status || 'On Track'}
               </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-100 rounded-full h-3 mb-2">
               <div
                  className="bg-green-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${perspective.progress}%` }}
               ></div>
            </div>

            <div className="flex justify-between text-xs text-gray-500 font-medium">
               <span>Overall Progress</span>
               <span className="text-[#1D3557] font-bold">{perspective.progress}%</span>
            </div>
         </div>

         {/* Accordion List */}
         <div className="space-y-4">
            {perspective.themes?.map((theme) => (
               <div key={theme.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  {/* Accordion Header */}
                  <div
                     onClick={() => toggleSection(theme.id)}
                     className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                     <div className="flex items-center gap-3">
                        <h3 className="text-[#1D3557] font-bold text-base">{theme.title}</h3>
                        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                           Standards : {theme.standardsCount}
                        </span>
                     </div>
                     {openSections[theme.id] ?
                        <ChevronUp className="w-5 h-5 text-gray-400" /> :
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                     }
                  </div>

                  {/* Accordion Content */}
                  {openSections[theme.id] && (
                     <div className="border-t border-gray-100">
                        {theme.standards?.length > 0 ? (
                           <div className="divide-y divide-gray-100">
                              {theme.standards.map((std) => (
                                 <div key={std.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                       {/* Number Circle */}
                                       <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5 ${std.status === 'Completed' ? 'bg-green-500' :
                                          std.status === 'In Progress' ? 'bg-orange-500' : 'bg-red-500'
                                          }`}>
                                          {std.number}
                                       </div>

                                       <div>
                                          <h4 className="text-[#1D3557] font-medium text-sm mb-1">
                                             {std.name}
                                          </h4>
                                          <p className={`text-xs font-semibold ${std.status === 'Completed' ? 'text-green-500' :
                                             std.status === 'In Progress' ? 'text-orange-500' : 'text-red-500'
                                             }`}>
                                             {std.status}
                                          </p>
                                       </div>
                                    </div>

                                    <button className="flex items-center gap-2 text-primary-500 text-xs font-semibold group whitespace-nowrap self-end md:self-auto">
                                       View Details
                                       <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                 </div>
                              ))}
                           </div>
                        ) : (
                           <div className="p-8 text-center text-gray-400 text-sm">
                              No standards available for this theme.
                           </div>
                        )}
                     </div>
                  )}
               </div>
            ))}
         </div>
      </div>
   );
};

export default PerspectiveDetails;
