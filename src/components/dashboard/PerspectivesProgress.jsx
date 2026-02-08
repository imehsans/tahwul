import { useTranslation } from 'react-i18next';
import Card from '../common/Card';
import ProgressBar from '../common/ProgressBar';
import { mockPerspectives } from '../../data/mockData';

const PerspectivesProgress = () => {
   const { t } = useTranslation();

   const getProgressVariant = (progress) => {
      if (progress >= 80) return 'success';
      if (progress >= 50) return 'primary';
      if (progress >= 30) return 'warning';
      return 'danger';
   };

   return (
      <Card
         header={
            <h3 className="text-lg font-semibold text-gray-900">
               {t('dashboard.progressByPerspective')}
            </h3>
         }
         className="h-full"
      >
         <div className="space-y-6">
            {mockPerspectives.map((perspective) => (
               <div key={perspective.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div
                           className="w-3 h-3 rounded-full"
                           style={{ backgroundColor: perspective.color }}
                        />
                        <span className="text-sm font-medium text-gray-700">
                           {perspective.name}
                        </span>
                     </div>
                     <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500">
                           {perspective.projects} {t('nav.projects').toLowerCase()}
                        </span>
                        <span className="text-sm font-semibold text-gray-900">
                           {perspective.progress}%
                        </span>
                     </div>
                  </div>
                  <ProgressBar
                     value={perspective.progress}
                     variant={getProgressVariant(perspective.progress)}
                     size="md"
                  />
               </div>
            ))}
         </div>
      </Card>
   );
};

export default PerspectivesProgress;
