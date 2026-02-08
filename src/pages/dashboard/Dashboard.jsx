import { useTranslation } from 'react-i18next'; 
import ProjectTimeline from './components/ProjectTimeline';
import ProgressStatus from './components/ProgressStatus';
import ComplianceScore from './components/ComplianceScore';
import TopPerformingLeaders from './components/TopPerformingLeaders';
import RecentActivities from './components/RecentActivities';
import YearlyPerformance from './components/YearlyPerformance';
import AuditReadiness from './components/AuditReadiness';

import OverallCompliance from './components/OverallCompliance';

const Dashboard = () => {
   const { t } = useTranslation();

   return (
      <div className="min-h-screen bg-[#F5F8FA]">

         <div className="container-custom">
            {/* Project Timeline Section */}
            <section aria-labelledby="timeline-heading" className="mb-4">
               <h2 id="timeline-heading" className="sr-only">
                  Project Timeline
               </h2>
               <ProjectTimeline />
            </section>

            {/* Overall Compliance Stats */}
            <section className="mb-4">
               <OverallCompliance />
            </section>

            {/* Progress Status Section */}
            <section aria-labelledby="status-heading" className=" bg-white mb-4">
               <h2 id="status-heading" className="sr-only">
                  Progress Status
               </h2>
               <ProgressStatus />
            </section>

            {/* New Stats Grid Section - Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
               <ComplianceScore />
               <TopPerformingLeaders />
               <RecentActivities />
            </div>

            {/* Performance and Audit Grid - Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
               <div className="md:col-span-2">
                  <YearlyPerformance />
               </div>
               <div className="md:col-span-1">
                  <AuditReadiness />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
