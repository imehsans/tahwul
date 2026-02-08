import { useTranslation } from 'react-i18next';
import Card from '../common/Card';
import { mockAuditReadiness } from '../../data/mockData';
import {
   RadarChart,
   PolarGrid,
   PolarAngleAxis,
   PolarRadiusAxis,
   Radar,
   ResponsiveContainer,
   Legend
} from 'recharts';
import { Shield, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

const AuditReadiness = () => {
   const { t } = useTranslation();

   const chartData = mockAuditReadiness.categories.map(cat => ({
      category: cat.name,
      score: cat.score,
      fullMark: 100
   }));

   const getStatusIcon = (status) => {
      switch (status) {
         case 'excellent':
            return <CheckCircle className="w-4 h-4 text-success-600" />;
         case 'good':
            return <CheckCircle className="w-4 h-4 text-primary-600" />;
         case 'medium':
            return <AlertCircle className="w-4 h-4 text-warning-600" />;
         case 'needsImprovement':
            return <XCircle className="w-4 h-4 text-danger-600" />;
         default:
            return null;
      }
   };

   const getScoreColor = (score) => {
      if (score >= 80) return 'text-success-600';
      if (score >= 65) return 'text-primary-600';
      if (score >= 50) return 'text-warning-600';
      return 'text-danger-600';
   };

   return (
      <Card
         header={
            <div className="flex items-center justify-between">
               <h3 className="text-lg font-semibold text-gray-900">
                  {t('dashboard.auditReadiness')}
               </h3>
               <Shield className="w-5 h-5 text-primary-600" />
            </div>
         }
         className="h-full"
      >
         <div className="space-y-6">
            {/* Overall Score */}
            <div className="text-center p-6 bg-gradient-primary rounded-xl text-white">
               <p className="text-sm font-medium opacity-90 mb-2">Overall Readiness</p>
               <p className="text-5xl font-bold">{mockAuditReadiness.overall}%</p>
            </div>

            {/* Radar Chart */}
            <div className="h-64">
               <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={chartData}>
                     <PolarGrid stroke="#e5e7eb" />
                     <PolarAngleAxis
                        dataKey="category"
                        tick={{ fill: '#6b7280', fontSize: 11 }}
                     />
                     <PolarRadiusAxis
                        angle={90}
                        domain={[0, 100]}
                        tick={{ fill: '#6b7280', fontSize: 10 }}
                     />
                     <Radar
                        name="Score"
                        dataKey="score"
                        stroke="#0ea5e9"
                        fill="#0ea5e9"
                        fillOpacity={0.6}
                     />
                     <Legend />
                  </RadarChart>
               </ResponsiveContainer>
            </div>

            {/* Categories List */}
            <div className="space-y-3">
               {mockAuditReadiness.categories.map((category, index) => (
                  <div
                     key={index}
                     className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                     <div className="flex items-center gap-2">
                        {getStatusIcon(category.status)}
                        <span className="text-sm font-medium text-gray-700">
                           {category.name}
                        </span>
                     </div>
                     <span className={`text-sm font-bold ${getScoreColor(category.score)}`}>
                        {category.score}%
                     </span>
                  </div>
               ))}
            </div>
         </div>
      </Card>
   );
};

export default AuditReadiness;
