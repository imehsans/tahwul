import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';

const AuditReadiness = () => {
   const { t } = useTranslation();

   const chartOptions = {
      chart: {
         type: 'radialBar',
         sparkline: {
            enabled: true
         }
      },
      stroke: {
         lineCap: 'round'
      },
      plotOptions: {
         radialBar: {
            startAngle: -90,
            endAngle: 90,
            hollow: {
               size: '65%'
            },
            track: {
               background: "#F3F4F6",
               strokeWidth: '100%',
               margin: 5,
            },
            dataLabels: {
               name: {
                  show: true,
                  offsetY: 24,
                  color: '#9CA3AF',
                  fontSize: '13px',
                  fontWeight: '500'
               },
               value: {
                  offsetY: -8,
                  fontSize: '42px',
                  fontWeight: '700',
                  color: '#1D3557',
                  formatter: function (val) {
                     return val + "%";
                  }
               }
            }
         }
      },
      fill: {
         colors: ['#22C55E']
      },
      labels: [t('dashboard.readinessLevel') || 'Readiness Level'],
   };

   const series = [80];

   return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 w-full h-full flex flex-col justify-between">
         <h3 className="text-lg font-bold text-[#1D3557] mb-2">
            {t('dashboard.auditReadiness') || 'Audit Readiness'}
         </h3>

         <div className="relative w-full flex-1 flex flex-col items-center justify-center">
            <Chart
               options={chartOptions}
               series={series}
               type="radialBar"
               height={300}
            />
         </div>

         <div className="grid grid-cols-2 text-center mt-4 pt-6 border-t border-gray-100">
            <div>
               <h4 className="text-3xl font-bold text-[#1D3557]">12</h4>
               <p className="text-xs text-gray-500 mt-1">
                  {t('dashboard.overdueStds') || 'Overdue Stds'}
               </p>
            </div>
            <div>
               <h4 className="text-3xl font-bold text-[#1D3557]">5</h4>
               <p className="text-xs text-gray-500 mt-1">
                  {t('dashboard.missingEvidence') || 'Missing Evidence'}
               </p>
            </div>
         </div>
      </div>
   );
};

export default AuditReadiness;
