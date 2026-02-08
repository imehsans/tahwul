import React from 'react';
import { MoreHorizontal, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PerspectiveCard = ({ id, title, themes, status, progress }) => {
   const navigate = useNavigate();

   const getStatusParams = (status) => {
      switch (status) {
         case 'On Track':
            return { color: 'text-[#22C55E]', barColor: 'bg-[#22C55E]' };
         case 'At Risk':
            return { color: 'text-[#EF4444]', barColor: 'bg-[#EF4444]' };
         case 'Not Started':
            return { color: 'text-[#F59E0B]', barColor: 'bg-gray-200' };
         default:
            return { color: 'text-[#22C55E]', barColor: 'bg-[#22C55E]' };
      }
   };

   const { color, barColor } = getStatusParams(status);

   return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between h-full hover:shadow-md transition-shadow">

         {/* Header */}
         <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-900 font-bold text-base leading-snug w-10/12">
               {title}
            </h3>
            <button className="text-gray-400 hover:text-gray-600">
               <MoreHorizontal className="w-5 h-5" />
            </button>
         </div>

         {/* Stats Grid */}
         <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center text-sm">
               <span className="text-gray-500 font-medium">Themes</span>
               <span className="text-gray-900 font-bold">{themes}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
               <span className="text-gray-500 font-medium">Status</span>
               <span className={`font-bold ${color}`}>{status}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
               <span className="text-gray-500 font-medium">Progress Status</span>
               <span className="text-gray-900 font-bold">{progress}%</span>
            </div>
         </div>

         {/* Progress Bar */}
         <div className="w-full bg-gray-100 rounded-full h-3 mb-6 overflow-hidden">
            <div
               className={`h-full rounded-full ${barColor}`}
               style={{ width: `${progress}%` }}
            ></div>
         </div>

         {/* Footer Action */}
         <div>
            <button
               onClick={() => navigate(`/perspectives/${id}`)}
               className="flex items-center gap-1 text-primary-500 text-sm font-semibold hover:gap-2 transition-all group"
            >
               View Axes
               <ChevronRight className="w-4 h-4" />
            </button>
         </div>
      </div>
   );
};

export default PerspectiveCard;
