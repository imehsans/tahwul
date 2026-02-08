import PropTypes from 'prop-types';
import clsx from 'clsx';

const ProgressBar = ({
   value,
   max = 100,
   size = 'md',
   variant = 'primary',
   showLabel = false,
   className
}) => {
   const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

   const sizeClasses = {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3'
   };

   const variantClasses = {
      primary: 'bg-primary-600',
      success: 'bg-success-600',
      warning: 'bg-warning-600',
      danger: 'bg-danger-600'
   };

   return (
      <div className={className}>
         {showLabel && (
            <div className="flex justify-between items-center mb-1">
               <span className="text-sm text-gray-600">{`${Math.round(percentage)}%`}</span>
            </div>
         )}
         <div className={clsx('progress-bar', sizeClasses[size])}>
            <div
               className={clsx('progress-fill', variantClasses[variant])}
               style={{ width: `${percentage}%` }}
               role="progressbar"
               aria-valuenow={value}
               aria-valuemin="0"
               aria-valuemax={max}
            />
         </div>
      </div>
   );
};

ProgressBar.propTypes = {
   value: PropTypes.number.isRequired,
   max: PropTypes.number,
   size: PropTypes.oneOf(['sm', 'md', 'lg']),
   variant: PropTypes.oneOf(['primary', 'success', 'warning', 'danger']),
   showLabel: PropTypes.bool,
   className: PropTypes.string
};

export default ProgressBar;
