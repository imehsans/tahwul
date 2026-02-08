import React from 'react';
import { useTranslation } from 'react-i18next';

// Import Dashboard Icons
import OverallProgressIcon from '../../../assets/icons/dashboard-icon/overall-progress.svg';
import TotalCriteriaIcon from '../../../assets/icons/dashboard-icon/total-creteria.svg';
import CompletedCriteriaIcon from '../../../assets/icons/dashboard-icon/completed-creteria.svg';
import EvidenceDocIcon from '../../../assets/icons/dashboard-icon/evedance-doc.svg';
import EvidenceCompletedIcon from '../../../assets/icons/dashboard-icon/evedance-completed.svg';
import UploadToDgaIcon from '../../../assets/icons/dashboard-icon/upload-to-dga.svg';

const OverallCompliance = () => {
   // Translation hook
   const { t } = useTranslation();

   // Data structure for the cards
   const stats = [
      {
         id: 1,
         value: '78.65%',
         labelKey: 'dashboard.overallCompliance.title',
         icon: OverallProgressIcon,
      },
      {
         id: 2,
         value: '95',
         labelKey: 'dashboard.overallCompliance.totalCriteria',
         icon: TotalCriteriaIcon,
      },
      {
         id: 3,
         value: '52',
         labelKey: 'dashboard.overallCompliance.completedCriteria',
         icon: CompletedCriteriaIcon,
      },
      {
         id: 4,
         value: '386',
         labelKey: 'dashboard.overallCompliance.evidenceDocuments',
         icon: EvidenceDocIcon,
      },
      {
         id: 5,
         value: '302',
         labelKey: 'dashboard.overallCompliance.evidenceCompleted',
         icon: EvidenceCompletedIcon,
      },
      {
         id: 6,
         value: '258',
         labelKey: 'dashboard.overallCompliance.uploadedToDGA',
         icon: UploadToDgaIcon,
      }
   ];

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
         {stats.map(({ id, value, labelKey, icon }) => (
            <div
               key={id}
               className="bg-white rounded-lg border border-[#E0E8ED] p-4 flex flex-col justify-between gap-3 group relative overflow-hidden hover:shadow-md transition-all"
            >
               <div className="flex justify-between items-center w-full">
                  <h3 className="text-2xl font-bold text-[#1D3557] tracking-tight">{value}</h3>
                  <img src={icon} alt="" className="w-6 h-6" />
               </div>

               <p className="text-gray-400 text-md mt-auto">
                  {t(labelKey)}
               </p>
            </div>
         ))}
      </div>
   );
};

export default OverallCompliance;
