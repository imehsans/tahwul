import { useTranslation } from 'react-i18next';
import Card from '../common/Card';
import { mockRecentActivities } from '../../data/mockData';
import {
   Upload,
   CheckCircle,
   MessageSquare,
   FileText,
   Send
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { ar, enUS } from 'date-fns/locale';
import useAppStore from '../../store';

const activityIcons = {
   upload: Upload,
   review: CheckCircle,
   comment: MessageSquare,
   create: FileText,
   submit: Send
};

const activityColors = {
   upload: 'text-primary-600 bg-primary-100',
   review: 'text-success-600 bg-success-100',
   comment: 'text-warning-600 bg-warning-100',
   create: 'text-secondary-600 bg-secondary-100',
   submit: 'text-gray-600 bg-gray-100'
};

const RecentActivities = () => {
   const { t } = useTranslation();
   const { language } = useAppStore();
   const locale = language === 'ar' ? ar : enUS;

   return (
      <Card
         header={
            <h3 className="text-lg font-semibold text-gray-900">
               {t('dashboard.recentActivities')}
            </h3>
         }
         className="h-full"
      >
         <div className="space-y-4">
            {mockRecentActivities.map((activity) => {
               const Icon = activityIcons[activity.type];
               const colorClass = activityColors[activity.type];

               return (
                  <div
                     key={activity.id}
                     className="flex gap-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                  >
                     <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${colorClass}`}>
                        <Icon className="w-5 h-5" />
                     </div>

                     <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">
                           <span className="font-semibold">{activity.user}</span>
                           {' '}
                           <span className="text-gray-600">{activity.action}</span>
                        </p>
                        <p className="text-sm text-gray-800 font-medium mt-0.5 truncate">
                           {activity.item}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                           <span className="text-xs text-gray-500">
                              {activity.project}
                           </span>
                           <span className="text-xs text-gray-400">•</span>
                           <span className="text-xs text-gray-500">
                              {formatDistanceToNow(new Date(activity.timestamp), {
                                 addSuffix: true,
                                 locale
                              })}
                           </span>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </Card>
   );
};

export default RecentActivities;
