import PropTypes from 'prop-types';
import clsx from 'clsx';

const Badge = ({
   children,
   variant = 'primary',
   size = 'md',
   className,
   icon,
   dot = false
}) => {
   const sizeClasses = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-0.5 text-xs',
      lg: 'px-3 py-1 text-sm'
   };

   const variantClasses = {
      primary: 'badge-primary',
      success: 'badge-success',
      warning: 'badge-warning',
      danger: 'badge-danger',
      gray: 'badge-gray'
   };

   return (
      <span
         className={clsx(
            'badge',
            variantClasses[variant],
            sizeClasses[size],
            className
         )}
      >
         {dot && (
            <span className={clsx(
               'status-dot inline-block mr-1',
               variant === 'success' && 'status-dot-success',
               variant === 'warning' && 'status-dot-warning',
               variant === 'danger' && 'status-dot-danger',
               variant === 'gray' && 'status-dot-gray'
            )} />
         )}
         {icon && <span className="mr-1">{icon}</span>}
         {children}
      </span>
   );
};

Badge.propTypes = {
   children: PropTypes.node.isRequired,
   variant: PropTypes.oneOf(['primary', 'success', 'warning', 'danger', 'gray']),
   size: PropTypes.oneOf(['sm', 'md', 'lg']),
   className: PropTypes.string,
   icon: PropTypes.node,
   dot: PropTypes.bool
};

export default Badge;
