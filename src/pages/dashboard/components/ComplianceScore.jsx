import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';

const ComplianceScore = () => {
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
               margin: 0,
               size: '75%'
            },
            track: {
               background: "#F3F4F6",
               strokeWidth: '100%',
               margin: 5,
            },
            dataLabels: {
               name: {
                  show: true,
                  offsetY: 25,
                  color: '#9CA3AF',
                  fontSize: '12px',
                  fontWeight: '500'
               },
               value: {
                  offsetY: -10,
                  fontSize: '36px',
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
         colors: ['#DC2626']
      },
      labels: [t('dashboard.basicStandards') || 'Basic Standards 2025'],
   };

   const series = [65];

   return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 w-full h-full flex flex-col">
         <h3 className="text-lg font-bold text-[#1D3557] mb-2">
            {t('dashboard.complianceScore') || 'Overall Compliance Score'}
         </h3>

         <div className="flex-1 flex items-center justify-center">
            <Chart
               options={chartOptions}
               series={series}
               type="radialBar"
               height={280}
            />
         </div>
      </div>
   );
};

export default ComplianceScore;
