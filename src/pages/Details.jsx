import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import ProgressBar from '../components/common/ProgressBar';
import EvidenceCards from '../components/details/EvidenceCards';
import OverviewTab from '../components/details/OverviewTab';
import EvidenceTab from '../components/details/EvidenceTab';
import { mockProjects } from '../data/mockData';
import {
   ArrowLeft,
   Users,
   Calendar,
   Download,
   Share2
} from 'lucide-react';

const Details = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const { t } = useTranslation();
   const [activeTab, setActiveTab] = useState('overview');

   // Get project data from mock data or default to first project
   const project = mockProjects.find(p => p.id === parseInt(id)) || mockProjects[0];

   const getStatusBadgeVariant = (status) => {
      const variantMap = {
         completed: 'success',
         inProgress: 'primary',
         underReview: 'warning',
         notStarted: 'gray'
      };
      return variantMap[status] || 'gray';
   };

   const getPerspectiveBadgeVariant = (perspective) => {
      const variantMap = {
         strategic: 'primary',
         operational: 'secondary',
         financial: 'success',
         customer: 'warning',
         learning: 'danger'
      };
      return variantMap[perspective] || 'gray';
   };

   return (
      <div className="min-h-screen bg-gray-50 py-8">
         <div className="container-custom">
            {/* Navigation Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
               <Button
                  variant="ghost"
                  icon={<ArrowLeft className="w-4 h-4" />}
                  onClick={() => navigate('/')}
                  aria-label="Back to Dashboard"
               >
                  Back to Dashboard
               </Button>
            </nav>

            {/* Project Header Section */}
            <header className="card p-6 mb-6">
               <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                     {/* Project Title and Status */}
                     <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                           {project.title}
                        </h1>
                        <Badge
                           variant={getStatusBadgeVariant(project.status)}
                           size="lg"
                           dot
                           aria-label={`Project status: ${t(`status.${project.status}`)}`}
                        >
                           {t(`status.${project.status}`)}
                        </Badge>
                     </div>

                     {/* Project Metadata */}
                     <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <Badge
                           variant={getPerspectiveBadgeVariant(project.perspective)}
                           size="md"
                           aria-label={`Business perspective: ${t(`perspectives.${project.perspective}`)}`}
                        >
                           {t(`perspectives.${project.perspective}`)}
                        </Badge>

                        <div className="flex items-center gap-1">
                           <Calendar className="w-4 h-4" aria-hidden="true" />
                           <time dateTime={project.startDate}>
                              {new Date(project.startDate).toLocaleDateString()}
                           </time>
                           <span>-</span>
                           <time dateTime={project.endDate}>
                              {new Date(project.endDate).toLocaleDateString()}
                           </time>
                        </div>

                        <div className="flex items-center gap-1">
                           <Users className="w-4 h-4" aria-hidden="true" />
                           <span>{project.team.length} team members</span>
                        </div>
                     </div>

                     {/* Progress Indicator */}
                     <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                           <span className="text-sm font-medium text-gray-700">Progress</span>
                           <span className="text-sm font-bold text-primary-600">{project.progress}%</span>
                        </div>
                        <ProgressBar
                           value={project.progress}
                           size="lg"
                           aria-label={`Project progress: ${project.progress}%`}
                        />
                     </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                     <Button
                        variant="outline"
                        icon={<Share2 className="w-4 h-4" />}
                        aria-label="Share project"
                     >
                        Share
                     </Button>
                     <Button
                        variant="primary"
                        icon={<Download className="w-4 h-4" />}
                        aria-label="Download project report"
                     >
                        {t('common.downloadReport')}
                     </Button>
                  </div>
               </div>
            </header>

            {/* Evidence Summary Section */}
            <section aria-labelledby="evidence-stats-heading">
               <h2 id="evidence-stats-heading" className="sr-only">
                  Evidence Statistics
               </h2>
               <EvidenceCards evidence={project.evidence} />
            </section>

            {/* Project Details Tabs */}
            <Card className="mb-6">
               {/* Tab Navigation */}
               <nav
                  className="tab-list px-6"
                  role="tablist"
                  aria-label="Project details sections"
               >
                  <button
                     className={`tab ${activeTab === 'overview' ? 'tab-active' : ''}`}
                     onClick={() => setActiveTab('overview')}
                     role="tab"
                     aria-selected={activeTab === 'overview'}
                     aria-controls="overview-panel"
                     id="overview-tab"
                  >
                     {t('details.overview')}
                  </button>
                  <button
                     className={`tab ${activeTab === 'evidence' ? 'tab-active' : ''}`}
                     onClick={() => setActiveTab('evidence')}
                     role="tab"
                     aria-selected={activeTab === 'evidence'}
                     aria-controls="evidence-panel"
                     id="evidence-tab"
                  >
                     {t('details.evidence')}
                  </button>
               </nav>

               {/* Tab Content */}
               <div className="p-6">
                  {activeTab === 'overview' && (
                     <article
                        role="tabpanel"
                        aria-labelledby="overview-tab"
                        id="overview-panel"
                        tabIndex={0}
                     >
                        <OverviewTab project={project} />
                     </article>
                  )}
                  {activeTab === 'evidence' && (
                     <article
                        role="tabpanel"
                        aria-labelledby="evidence-tab"
                        id="evidence-panel"
                        tabIndex={0}
                     >
                        <EvidenceTab evidence={project.evidence} />
                     </article>
                  )}
               </div>
            </Card>
         </div>
      </div>
   );
};

export default Details;
