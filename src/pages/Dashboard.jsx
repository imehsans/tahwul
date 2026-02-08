import { useTranslation } from 'react-i18next';
import StatCard from '../components/dashboard/StatCard';
import ProjectTimeline from '../components/dashboard/ProjectTimeline';
import PerspectivesProgress from '../components/dashboard/PerspectivesProgress';
import RecentActivities from '../components/dashboard/RecentActivities';
import AuditReadiness from '../components/dashboard/AuditReadiness';
import { mockDashboardStats } from '../data/mockData';
import {
   FolderKanban,
   CheckCircle,
   Clock,
   FileSearch,
   TrendingUp
} from 'lucide-react';

/**
 * Dashboard Page Component
 * 
 * Main dashboard view displaying:
 * - Key performance statistics
 * - Overall progress tracking
 * - Project timeline
 * - Business perspectives progress
 * - Recent activity feed
 * - Audit readiness monitoring
 * 
 * Uses semantic HTML structure for accessibility and SEO
 * @component
 */
const Dashboard = () => {
   const { t } = useTranslation();

   return (
      <div className="min-h-screen bg-gray-50 py-8">
         <div className="container-custom">
            {/* Page Header */}
            <header className="mb-8">
               <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {t('dashboard.title')}
               </h1>
               <p className="text-gray-600">
                  {t('dashboard.welcome')}
               </p>
            </header>

            {/* Key Metrics Section */}
            <section aria-labelledby="stats-heading" className="mb-8">
               <h2 id="stats-heading" className="sr-only">
                  Dashboard Statistics
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <StatCard
                     title={t('stats.totalProjects')}
                     value={mockDashboardStats.totalProjects}
                     icon={<FolderKanban className="w-6 h-6" />}
                     iconBgColor="bg-primary-100"
                     iconColor="text-primary-600"
                     trend="up"
                     trendValue="+12%"
                  />
                  <StatCard
                     title={t('stats.completed')}
                     value={mockDashboardStats.completed}
                     icon={<CheckCircle className="w-6 h-6" />}
                     iconBgColor="bg-success-100"
                     iconColor="text-success-600"
                     trend="up"
                     trendValue="+8%"
                  />
                  <StatCard
                     title={t('stats.inProgress')}
                     value={mockDashboardStats.inProgress}
                     icon={<Clock className="w-6 h-6" />}
                     iconBgColor="bg-warning-100"
                     iconColor="text-warning-600"
                  />
                  <StatCard
                     title={t('stats.underReview')}
                     value={mockDashboardStats.underReview}
                     icon={<FileSearch className="w-6 h-6" />}
                     iconBgColor="bg-secondary-100"
                     iconColor="text-secondary-600"
                  />
               </div>
            </section>

            {/* Overall Progress Section */}
            <section aria-labelledby="progress-heading" className="mb-8">
               <h2 id="progress-heading" className="sr-only">
                  Overall Progress
               </h2>
               <div className="card p-6">
                  <div className="flex items-center justify-between mb-4">
                     <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                           {t('stats.overallProgress')}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                           Across all projects and perspectives
                        </p>
                     </div>
                     <div className="flex items-center gap-2 text-success-600">
                        <TrendingUp className="w-5 h-5" aria-hidden="true" />
                        <span className="text-2xl font-bold">
                           {mockDashboardStats.overallProgress}%
                        </span>
                     </div>
                  </div>
                  <div className="progress-bar h-3" role="progressbar" aria-valuenow={mockDashboardStats.overallProgress} aria-valuemin="0" aria-valuemax="100" aria-label="Overall progress">
                     <div
                        className="progress-fill bg-gradient-primary"
                        style={{ width: `${mockDashboardStats.overallProgress}%` }}
                     />
                  </div>
               </div>
            </section>

            {/* Projects and Perspectives Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
               {/* Project Timeline Section - Spans 2 columns */}
               <section aria-labelledby="timeline-heading" className="lg:col-span-2">
                  <h2 id="timeline-heading" className="sr-only">
                     Project Timeline
                  </h2>
                  <ProjectTimeline />
               </section>

               {/* Business Perspectives Section */}
               <section aria-labelledby="perspectives-heading">
                  <h2 id="perspectives-heading" className="sr-only">
                     Business Perspectives
                  </h2>
                  <PerspectivesProgress />
               </section>
            </div>

            {/* Activity and Audit Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               {/* Recent Activities Section */}
               <section aria-labelledby="activities-heading">
                  <h2 id="activities-heading" className="sr-only">
                     Recent Activities
                  </h2>
                  <RecentActivities />
               </section>

               {/* Audit Readiness Section */}
               <section aria-labelledby="audit-heading">
                  <h2 id="audit-heading" className="sr-only">
                     Audit Readiness
                  </h2>
                  <AuditReadiness />
               </section>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
