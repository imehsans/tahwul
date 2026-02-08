import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProgressStatus = () => {
   const { t } = useTranslation();
   const navigate = useNavigate();

   const statusColors = {
      not_started: 'bg-gray-400',
      in_progress: 'bg-[#F59E0B]',
      completed: 'bg-[#22C55E]',
      partially_uploaded: 'bg-[#475569]',
      fully_uploaded: 'bg-[#3B82F6]',
      delayed: 'bg-[#EF4444]',
   };

   const legendItems = [
      { label: 'notStarted', color: statusColors.not_started },
      { label: 'inProgress', color: statusColors.in_progress },
      { label: 'completed', color: statusColors.completed },
      { label: 'partiallyUploaded', color: statusColors.partially_uploaded },
      { label: 'fullyUploaded', color: statusColors.fully_uploaded },
      { label: 'delayed', color: statusColors.delayed },
   ];

   // Mock Data matching the image structure
   const data = [
      {
         id: 1,
         title: 'Strategy And Planning',
         percentage: '97.78%',
         subItems: [
            { title: 'Digital Transformation', steps: [{ n: 1, s: 'completed' }, { n: 2, s: 'completed' }, { n: 3, s: 'completed' }] },
            { title: 'Digital Governance', steps: [{ n: 1, s: 'completed' }, { n: 2, s: 'completed' }, { n: 3, s: 'in_progress' }] },
            { title: 'Enterprise Architecture', steps: [{ n: 1, s: 'completed' }, { n: 2, s: 'completed' }, { n: 3, s: 'completed' }, { n: 4, s: 'completed' }] },
         ]
      },
      {
         id: 2,
         title: 'Organization And Culture',
         percentage: '70.83%',
         subItems: [
            { title: 'Digital Culture And Environment', steps: [{ n: 1, s: 'completed' }, { n: 2, s: 'in_progress' }, { n: 3, s: 'completed' }] },
            { title: 'Leadership Development', steps: [{ n: 1, s: 'completed' }, { n: 2, s: 'completed' }, { n: 3, s: 'completed' }, { n: 4, s: 'completed' }] },
            { title: 'Skills & Capacity Building', steps: [{ n: 1, s: 'in_progress' }, { n: 2, s: 'in_progress' }, { n: 3, s: 'in_progress' }] },
         ]
      },
      {
         id: 3,
         title: 'Operations And Execution',
         percentage: '80.00%',
         subItems: [
            { title: 'Business Processes', steps: [{ n: 1, s: 'completed' }, { n: 2, s: 'in_progress' }, { n: 3, s: 'in_progress' }, { n: 4, s: 'completed' }] },
         ]
      },
      {
         id: 4,
         title: 'Business Continuity',
         percentage: '90.59%',
         subItems: [
            { title: 'Risk Management', steps: [{ n: 1, s: 'completed' }, { n: 2, s: 'completed' }, { n: 3, s: 'completed' }, { n: 4, s: 'completed' }, { n: 5, s: 'completed' }] },
            { title: 'Business Continuity', steps: [{ n: 1, s: 'completed' }, { n: 2, s: 'partially_uploaded' }, { n: 3, s: 'partially_uploaded' }, { n: 4, s: 'completed' }, { n: 5, s: 'completed' }, { n: 6, s: 'partially_uploaded' }, { n: 7, s: 'completed' }] },
         ]
      },
      {
         id: 5,
         title: 'Information Technology',
         percentage: '75.00%',
         subItems: [
            { title: 'Support Systems', steps: [{ n: 1, s: 'fully_uploaded' }, { n: 2, s: 'completed' }, { n: 3, s: 'completed' }, { n: 4, s: 'completed' }, { n: 5, s: 'completed' }] },
            { title: 'IT Infrastructure', steps: [{ n: 1, s: 'completed' }, { n: 2, s: 'completed' }, { n: 3, s: 'completed' }, { n: 4, s: 'completed' }, { n: 5, s: 'fully_uploaded' }, { n: 6, s: 'completed' }, { n: 7, s: 'completed' }] },
            { title: 'Cloud Infrastructure', steps: [{ n: 1, s: 'completed' }, { n: 2, s: 'completed' }, { n: 3, s: 'fully_uploaded' }] },
         ]
      },
      {
         id: 6,
         title: 'Comprehensive Governance',
         percentage: '64.44%',
         subItems: [
            { title: 'Governance Platforms', steps: [{ n: 1, s: 'completed' }, { n: 2, s: 'completed' }, { n: 3, s: 'completed' }, { n: 4, s: 'partially_uploaded' }, { n: 5, s: 'completed' }, { n: 6, s: 'completed' }, { n: 7, s: 'completed' }, { n: 8, s: 'completed' }, { n: 9, s: 'completed' }] },
         ]
      },
      {
         id: 7,
         title: 'Channels And Services',
         percentage: '100%',
         subItems: [
            { title: 'Service Quality', steps: [{ n: 1, s: 'completed' }, { n: 2, s: 'completed' }, { n: 3, s: 'completed' }] },
            { title: 'Digital Channels', steps: [{ n: 1, s: 'completed' }, { n: 2, s: 'completed' }, { n: 3, s: 'completed' }, { n: 4, s: 'completed' }] },

         ]
      },
      {
         id: 8,
         title: 'Beneficiary Centralization',
         percentage: '60.00%',
         subItems: [
            { title: 'User Engagement', steps: [{ n: 1, s: 'completed' }, { n: 2, s: 'in_progress' }, { n: 3, s: 'in_progress' }, { n: 4, s: 'in_progress' }] },
            { title: 'User Relationship', steps: [{ n: 1, s: 'completed' }, { n: 2, s: 'in_progress' }, { n: 3, s: 'in_progress' }] },
            { title: 'User Experience', steps: [{ n: 1, s: 'completed' }, { n: 2, s: 'in_progress' }, { n: 3, s: 'completed' }, { n: 4, s: 'in_progress' }, { n: 5, s: 'completed' }] },
         ]
      },
      {
         id: 9,
         title: 'Government Data',
         percentage: '87.50%',
         subItems: [
            { title: 'Data Governance', steps: [{ n: 1, s: 'completed' }, { n: 2, s: 'in_progress' }, { n: 3, s: 'in_progress' }] },
            { title: 'Data Usage & Availability', steps: [{ n: 1, s: 'completed' }, { n: 2, s: 'in_progress' }, { n: 3, s: 'in_progress' }] },
            { title: 'Open Data', steps: [{ n: 1, s: 'completed' }, { n: 2, s: 'completed' }, { n: 3, s: 'in_progress' }] },

         ]
      },
      {
         id: 10,
         title: 'Research And Innovation',
         percentage: '17.65%',
         subItems: [
            { title: 'Innovation', steps: [{ n: 1, s: 'delayed' }, { n: 2, s: 'delayed' }, { n: 3, s: 'delayed' }, { n: 4, s: 'delayed' }] },
            { title: 'Creative Solutions', steps: [{ n: 1, s: 'in_progress' }, { n: 2, s: 'delayed' }] },
         ]
      },
   ];

   return (
      <div className="bg-white rounded-lg shadow-sm border border-[#E0E8ED] py-6 px-4 w-full">
         {/* Top Header */}
         <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <h3 className="text-xl font-bold text-[#1D3557]">
               {t('progressStatus.title') || 'Progress Status'}
            </h3>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-2 text-md">
               {legendItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5">
                     <span className={`w-2.5 h-2.5 rounded-full ${item.color}`}></span>
                     <span className="text-gray-600 text-md ">{t(`status.${item.label}`) || item.label}</span>
                  </div>
               ))}
            </div>
         </div>

         {/* Grid Container */}
         <div className="pb-4">
            <div className="gap-4 grid grid-cols-10">
               {data.map((column) => (
                  <div key={column.id} className="col-span-1 flex flex-col gap-3">
                     {/* Column Header */}
                     <div className="bg-[#1D3557] text-white rounded-lg px-1.5 py-4 text-center h-32 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-md pb-2 font-semibold leading-tight line-clamp-3">
                           {t(`progressStatus.${column.title}`) || column.title}
                        </h4>
                        <span className="text-md w-fit mx-auto rounded-full bg-[#344968] font-bold block px-2.5 py-1">
                           {column.percentage}
                        </span>
                     </div>

                     {/* Sub Items */}
                     <div className="flex flex-col h-full gap-3">
                        {column.subItems.map((item, idx) => (
                           <div
                              key={idx}
                              onClick={() => navigate(`/dashboard/progress/${column.id}-${idx}`)}
                              className="bg-gray-50  rounded-lg p-3 bg-[#F5F8FB] border border-[#E0E8ED] h-full  transition-all duration-200 flex flex-col h-full cursor-pointer hover:shadow-md"
                           >
                              <p className="text-xs text-center text-[#1D3557] font-medium mb-3  flex items-center justify-center leading-tight">
                                 {t(`progressStatus.subTitles.${item.title}`) || item.title}
                              </p>
                              <div className=" flex flex-col justify-center items-center flex-2 flex-wrap  gap-1.5">
                                 <div className="flex flex-wrap justify-center gap-4">
                                    {item.steps.map((step, stepIdx) => (
                                       <div
                                          key={stepIdx}
                                          className={`w-6 h-6 rounded-full ${statusColors[step.s] || 'bg-gray-300'} text-white text-sm font-semibold flex items-center justify-center shadow-sm`}
                                       >
                                          {step.n}
                                       </div>
                                    ))}

                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default ProgressStatus;
