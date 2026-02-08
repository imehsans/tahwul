import PropTypes from 'prop-types';
import clsx from 'clsx';

const Button = ({
   children,
   variant = 'primary',
   size = 'md',
   onClick,
   disabled = false,
   loading = false,
   icon,
   iconPosition = 'left',
   fullWidth = false,
   className,
   type = 'button'
}) => {
   const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base'
   };

   const variantClasses = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      success: 'btn-success',
      danger: 'btn-danger',
      outline: 'btn-outline',
      ghost: 'btn-ghost'
   };

   return (
      <button
         type={type}
         onClick={onClick}
         disabled={disabled || loading}
         className={clsx(
            'btn',
            variantClasses[variant],
            sizeClasses[size],
            fullWidth && 'w-full',
            className
         )}
      >
         {loading ? (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
         ) : (
            <>
               {icon && iconPosition === 'left' && <span>{icon}</span>}
               {children}
               {icon && iconPosition === 'right' && <span>{icon}</span>}
            </>
         )}
      </button>
   );
};

Button.propTypes = {
   children: PropTypes.node,
   variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'outline', 'ghost']),
   size: PropTypes.oneOf(['sm', 'md', 'lg']),
   onClick: PropTypes.func,
   disabled: PropTypes.bool,
   loading: PropTypes.bool,
   icon: PropTypes.node,
   iconPosition: PropTypes.oneOf(['left', 'right']),
   fullWidth: PropTypes.bool,
   className: PropTypes.string,
   type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

export default Button;
