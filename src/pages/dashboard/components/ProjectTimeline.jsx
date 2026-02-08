import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const ProjectTimeline = () => {
   const { t } = useTranslation();
   const [year, setYear] = useState(2026);
   const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);
   const dropdownRef = useRef(null);

   const currentYear = new Date().getFullYear();
   // Generate next 30 years
   const years = Array.from({ length: 30 }, (_, i) => currentYear + i);

   // Handle click outside to close dropdown
   useEffect(() => {
      const handleClickOutside = (event) => {
         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsYearDropdownOpen(false);
         }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
   }, []);

   // Dynamic milestones data based on year
   const getMilestones = (selectedYear) => {
      // Base milestones structure
      const baseMilestones = [
         { id: 1, title: t('timeline.kickoffWorkshop'), date: t('dates.mar17'), position: '5%' },
         { id: 2, title: t('timeline.dataCollection'), date: t('dates.march18'), position: '25%' },
         { id: 3, title: t('timeline.initialPhase'), date: t('dates.may8'), position: '42%' },
         { id: 4, title: t('timeline.verification'), date: t('dates.may9july12'), position: '60%' },
         { id: 5, title: t('timeline.completionReviews'), date: t('dates.july13'), position: '78%' },
         { id: 6, title: t('timeline.cycleConclusion'), date: t('dates.august21'), position: '95%' },
      ];

      // Logic to determine status based on "simulation" of time
      // For 2026 (Demo Year): Specific mixed status
      if (selectedYear === 2026) {
         return baseMilestones.map((m, index) => ({
            ...m,
            status: index < 2 ? 'completed' : 'upcoming'
         }));
      }

      // For past years: All completed
      if (selectedYear < 2026) {
         return baseMilestones.map(m => ({ ...m, status: 'completed' }));
      }

      // For future years: All upcoming
      return baseMilestones.map(m => ({ ...m, status: 'upcoming' }));
   };

   const milestones = getMilestones(year);

   // Calculate progress percentage
   const completedCount = milestones.filter(m => m.status === 'completed').length;

   // Adjust progress bar width visually to align with milestone positions
   let visualProgress = 0;
   if (completedCount > 0) {
      const lastCompleted = milestones[completedCount - 1];
      // Convert "25%" string to number 25
      visualProgress = parseFloat(lastCompleted.position) + 2; // +2 for slight overlap
   }

   return (
      <div className="bg-white rounded-xl shadow-sm border border-[#E0E8ED] p-4 w-full">
         <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-[#1D3557]">
               {t('dashboard.projectTimeline') || 'Project Timeline'}
            </h3>

            <div className="relative" ref={dropdownRef}>
               <button
                  onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
               >
                  <span>{year}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isYearDropdownOpen ? 'rotate-180' : ''}`} />
               </button>

               {isYearDropdownOpen && (
                  <div className="absolute right-0 top-full mt-1 w-24 max-h-60 overflow-y-auto bg-white border border-gray-100 rounded-lg shadow-lg z-20">
                     {years.map((y) => (
                        <button
                           key={y}
                           onClick={() => {
                              setYear(y);
                              setIsYearDropdownOpen(false);
                           }}
                           className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${year === y ? 'text-primary-600 bg-primary-50 font-medium' : 'text-gray-700'
                              }`}
                        >
                           {y}
                        </button>
                     ))}
                  </div>
               )}
            </div>
         </div>

         <div className="relative px-2  pb-16 mb-8">
            {/* Timeline Track */}
            <div className="absolute top-0 left-0 w-full h-4 bg-gray-50 rounded-full overflow-hidden">
               <div className="w-full h-full bg-gray-50"></div>
            </div>

            {/* Progress Bar (Green) */}
            <div
               className="absolute top-0 left-0 h-4 bg-success-500 rounded-full transition-all duration-1000 ease-out z-0"
               style={{ width: `${visualProgress}%` }}
            ></div>

            {/* Milestones */}
            <div className="relative h-4   w-full">
               {milestones.map((milestone) => (
                  <div
                     key={milestone.id}
                     className="absolute top-0 -ml-1.5 flex flex-col items-center group cursor-pointer"
                     style={{ left: milestone.position }}
                  >
                     {/* The Dot */}
                     <div className="h-4 flex items-center justify-center mb-3">
                        <div className={`w-3 h-3 rounded-full z-10 shadow-sm border-2 transition-colors duration-300 ${milestone.status === 'completed'
                           ? 'bg-white border-transparent'
                           : 'bg-[#DC2626] border-white'
                           }`}></div>
                     </div>

                     {/* Text Labels */}
                     <div className="absolute top-6 py-4 w-32 text-center flex flex-col items-center">
                        <span className="text-md text-[#8597A8] mb-1 font-medium whitespace-nowrap">
                           {milestone.date}
                        </span>
                        <span className={`text-md md:whitespace-nowrap font-[500] leading-tight transition-colors duration-300 ${milestone.status === 'completed' ? 'text-[#1D3557]' : 'text-[#566679]'
                           }`}>
                           {milestone.title}
                        </span>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default ProjectTimeline;
