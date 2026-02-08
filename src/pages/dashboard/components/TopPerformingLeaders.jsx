import { useTranslation } from 'react-i18next';

const TopPerformingLeaders = () => {
   const { t } = useTranslation();

   const leaders = [
      {
         name: "Ahmed Al-Ali",
         role: t('dashboard.strategyPerspective') || "Strategy Perspective",
         score: 96,
         avatar: "https://ui-avatars.com/api/?name=Ahmed+Al-Ali&background=1D3557&color=fff"
      },
      {
         name: "Sarah Al-Khaled",
         role: t('dashboard.beneficiaryPerspective') || "Beneficiary Perspective",
         score: 94,
         avatar: "https://ui-avatars.com/api/?name=Sarah+Al-Khaled&background=059669&color=fff"
      },
      {
         name: "Mohammad Al-Mansour",
         role: t('dashboard.itPerspective') || "IT Perspective",
         score: 92,
         avatar: "https://ui-avatars.com/api/?name=Mohammad+Al-Mansour&background=4B5563&color=fff"
      }
   ];

   return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 w-full">
         <h3 className="text-lg font-bold text-[#1D3557] mb-6">
            {t('dashboard.topPerformingLeaders') || 'Top Performing Perspective Leaders'}
         </h3>

         <div className="space-y-6">
            {leaders.map((leader, index) => (
               <div key={index} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                     <img
                        src={leader.avatar}
                        alt={leader.name}
                        className="w-12 h-12 rounded-full object-cover"
                     />
                     <div>
                        <h4 className="font-bold text-[#1D3557] text-sm">
                           {leader.name}
                        </h4>
                        <p className="text-xs text-gray-400 mt-0.5">
                           {leader.role}
                        </p>
                     </div>
                  </div>
                  <span className="text-lg font-bold text-[#1D3557]">
                     {leader.score}%
                  </span>
               </div>
            ))}
         </div>
      </div>
   );
};

export default TopPerformingLeaders;
