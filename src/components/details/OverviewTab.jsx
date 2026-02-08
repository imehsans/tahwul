import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Target, ListChecks, Layers, Users } from 'lucide-react';

const OverviewTab = ({ project }) => {
   const { t } = useTranslation();

   return (
      <div className="space-y-8">
         {/* Description */}
         <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
               Description
            </h3>
            <p className="text-gray-700 leading-relaxed">
               {project.description}
            </p>
         </div>

         {/* Objective */}
         <div>
            <div className="flex items-center gap-2 mb-3">
               <Target className="w-5 h-5 text-primary-600" />
               <h3 className="text-lg font-semibold text-gray-900">
                  {t('details.objective')}
               </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
               {project.objective}
            </p>
         </div>

         {/* Requirements */}
         <div>
            <div className="flex items-center gap-2 mb-3">
               <ListChecks className="w-5 h-5 text-primary-600" />
               <h3 className="text-lg font-semibold text-gray-900">
                  {t('details.requirements')}
               </h3>
            </div>
            <ul className="space-y-2">
               {project.requirements.map((req, index) => (
                  <li
                     key={index}
                     className="flex items-start gap-3 text-gray-700"
                  >
                     <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                        {index + 1}
                     </span>
                     <span className="flex-1">{req}</span>
                  </li>
               ))}
            </ul>
         </div>

         {/* Scope */}
         <div>
            <div className="flex items-center gap-2 mb-3">
               <Layers className="w-5 h-5 text-primary-600" />
               <h3 className="text-lg font-semibold text-gray-900">
                  {t('details.scope')}
               </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
               {project.scope}
            </p>
         </div>

         {/* Leaders & Owners */}
         <div>
            <div className="flex items-center gap-2 mb-4">
               <Users className="w-5 h-5 text-primary-600" />
               <h3 className="text-lg font-semibold text-gray-900">
                  {t('details.leaders')} & {t('details.owners')}
               </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
               {/* Project Owner */}
               <div className="p-4 rounded-lg border-2 border-primary-200 bg-primary-50">
                  <p className="text-xs text-primary-600 font-semibold mb-1">Project Owner</p>
                  <p className="text-sm font-semibold text-gray-900">{project.owner}</p>
               </div>

               {/* Team Members */}
               {project.team.slice(1).map((member, index) => (
                  <div
                     key={index}
                     className="p-4 rounded-lg border border-gray-200 bg-white hover:border-primary-300 hover:bg-primary-50/30 transition-all"
                  >
                     <p className="text-xs text-gray-500 font-medium mb-1">Team Member</p>
                     <p className="text-sm font-semibold text-gray-900">{member}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

OverviewTab.propTypes = {
   project: PropTypes.shape({
      description: PropTypes.string.isRequired,
      objective: PropTypes.string.isRequired,
      requirements: PropTypes.arrayOf(PropTypes.string).isRequired,
      scope: PropTypes.string.isRequired,
      owner: PropTypes.string.isRequired,
      team: PropTypes.arrayOf(PropTypes.string).isRequired
   }).isRequired
};

export default OverviewTab;
