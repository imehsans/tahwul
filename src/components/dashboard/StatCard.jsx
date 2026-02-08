import PropTypes from 'prop-types';
import clsx from 'clsx';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({
   title,
   value,
   icon,
   iconBgColor = 'bg-primary-100',
   iconColor = 'text-primary-600',
   trend,
   trendValue,
   className
}) => {
   const isPositiveTrend = trend === 'up';

   return (
      <div className={clsx('stat-card', className)}>
         <div className="flex items-start justify-between">
            <div className="flex-1">
               <p className="stat-label">{title}</p>
               <p className="stat-value">{value}</p>

               {trend && trendValue && (
                  <div className={clsx(
                     'flex items-center gap-1 mt-2 text-sm',
                     isPositiveTrend ? 'text-success-600' : 'text-danger-600'
                  )}>
                     {isPositiveTrend ? (
                        <TrendingUp className="w-4 h-4" />
                     ) : (
                        <TrendingDown className="w-4 h-4" />
                     )}
                     <span className="font-medium">{trendValue}</span>
                  </div>
               )}
            </div>

            {icon && (
               <div className={clsx('stat-icon', iconBgColor, iconColor)}>
                  {icon}
               </div>
            )}
         </div>
      </div>
   );
};

StatCard.propTypes = {
   title: PropTypes.string.isRequired,
   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
   icon: PropTypes.node,
   iconBgColor: PropTypes.string,
   iconColor: PropTypes.string,
   trend: PropTypes.oneOf(['up', 'down']),
   trendValue: PropTypes.string,
   className: PropTypes.string
};

export default StatCard;
