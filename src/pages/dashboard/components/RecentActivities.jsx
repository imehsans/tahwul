import { useTranslation } from 'react-i18next';

const RecentActivities = () => {
   const { t } = useTranslation();

   const activities = [
      {
         id: 1,
         action: "Document",
         description: `"Strategy_Review.Pdf" Was Uploaded By Ahmed Khaled`,
         time: "5 Mins Ago"
      },
      {
         id: 2,
         action: "Task",
         description: `"Review Compliance Files" Was Assigned To Mona Hamed`,
         time: "20 Mins Ago"
      },
      {
         id: 3,
         action: "New Criterion",
         description: `"5.3 Digital Identity" Was Created By Admin`,
         time: "1 Hour Ago"
      }
   ];

   return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 w-full">
         <h3 className="text-lg font-bold text-[#1D3557] mb-6">
            {t('dashboard.recentActivities')}
         </h3>

         <div className="space-y-6">
            {activities.map((activity) => (
               <div key={activity.id} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#DC2626] mt-1.5 flex-shrink-0"></span>
                  <div>
                     <p className="text-sm font-medium text-[#1D3557] leading-tight mb-0.5">
                        {activity.description}
                     </p>
                     <span className="text-xs text-gray-400">
                        {activity.time}
                     </span>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default RecentActivities;
