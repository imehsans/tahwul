import { useTranslation } from 'react-i18next';
import Chart from 'react-apexcharts';

const YearlyPerformance = () => {
   const { t } = useTranslation();

   const chartOptions = {
      chart: {
         type: 'bar',
         height: 350,
         toolbar: {
            show: false
         }
      },
      plotOptions: {
         bar: {
            horizontal: false,
            columnWidth: '55%',
            borderRadius: 4,
            distributed: false, // Ensures consistent color
            colors: {
               ranges: [{
                  from: 0,
                  to: 100,
                  color: undefined
               }]
            },
         },
      },
      dataLabels: {
         enabled: false
      },
      grid: {
         show: true,
         borderColor: '#f1f1f1',
         strokeDashArray: 0,
         xaxis: {
            lines: {
               show: false
            }
         },
         yaxis: {
            lines: {
               show: true
            }
         },
      },
      xaxis: {
         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
         labels: {
            style: {
               colors: '#9CA3AF',
               fontSize: '12px'
            }
         },
         axisBorder: {
            show: false
         },
         axisTicks: {
            show: false
         }
      },
      yaxis: {
         max: 100,
         tickAmount: 5,
         labels: {
            style: {
               colors: '#9CA3AF',
               fontSize: '12px'
            },
         },
      },
      fill: {
         type: 'gradient',
         gradient: {
            shade: 'light',
            type: "vertical",
            shadeIntensity: 0.25,
            gradientToColors: undefined,  
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100]
         },
      },
      colors: ['#3B82F6'], // Base blue color
   };

   const series = [{
      name: 'Performance',
      data: [88, 76, 81, 42, 88, 79, 55, 88, 79, 55, 88, 79] // Mock data matching visual approximation
   }];

   return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 w-full h-full flex flex-col">
         <h3 className="text-lg font-bold text-[#1D3557] mb-6">
            {t('dashboard.12MonthPerformance') || '12-Month Performance'}
         </h3>

         <div className="flex-1 w-full charts-wrapper min-h-[300px]">
            <Chart
               options={chartOptions}
               series={series}
               type="bar"
               height="100%"
               width="100%"
            />
         </div>
      </div>
   );
};

export default YearlyPerformance;
