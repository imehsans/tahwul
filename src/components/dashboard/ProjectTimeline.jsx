import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Card from '../common/Card';
import Badge from '../common/Badge';
import ProgressBar from '../common/ProgressBar';
import { mockProjects } from '../../data/mockData';
import { Calendar, Users } from 'lucide-react';

const ProjectTimeline = () => {
   const { t } = useTranslation();
   const navigate = useNavigate();

   const getStatusBadgeVariant = (status) => {
      const variantMap = {
         completed: 'success',
         inProgress: 'primary',
         underReview: 'warning',
         notStarted: 'gray'
      };
      return variantMap[status] || 'gray';
   };

   const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
   };

   return (
      <Card
         header={
            <div className="flex items-center justify-between">
               <h3 className="text-lg font-semibold text-gray-900">
                  {t('dashboard.projectTimeline')}
               </h3>
               <Calendar className="w-5 h-5 text-gray-400" />
            </div>
         }
         className="h-full"
      >
         <div className="space-y-4">
            {mockProjects.slice(0, 4).map((project) => (
               <div
                  key={project.id}
                  className="p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50/30 transition-all cursor-pointer"
                  onClick={() => navigate(`/project/${project.id}`)}
               >
                  <div className="flex items-start justify-between mb-3">
                     <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">
                           {project.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                           <Calendar className="w-3 h-3" />
                           <span>{formatDate(project.startDate)} - {formatDate(project.endDate)}</span>
                        </div>
                     </div>
                     <Badge
                        variant={getStatusBadgeVariant(project.status)}
                        size="sm"
                        dot
                     >
                        {t(`status.${project.status}`)}
                     </Badge>
                  </div>

                  <ProgressBar
                     value={project.progress}
                     size="sm"
                     showLabel
                     className="mb-3"
                  />

                  <div className="flex items-center justify-between text-xs">
                     <div className="flex items-center gap-1 text-gray-600">
                        <Users className="w-3 h-3" />
                        <span>{project.team.length} members</span>
                     </div>
                     <span className="text-gray-500">
                        {project.evidence.completed}/{project.evidence.total} evidence
                     </span>
                  </div>
               </div>
            ))}
         </div>
      </Card>
   );
};

export default ProjectTimeline;
