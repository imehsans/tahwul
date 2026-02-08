import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import clsx from 'clsx';
 
const Input = forwardRef(({
   label,
   type = 'text',
   name,
   value,
   onChange,
   onBlur,
   placeholder,
   error,
   required = false,
   disabled = false,
   className = '',
   ...props
}, ref) => {
   const [showPassword, setShowPassword] = useState(false);
   const [isFocused, setIsFocused] = useState(false);

   const isPasswordType = type === 'password';
   const inputType = isPasswordType && showPassword ? 'text' : type;

   const handleFocus = () => setIsFocused(true);
   const handleBlur = (e) => {
      setIsFocused(false);
      if (onBlur) onBlur(e);
   };

   return (
      <div className={clsx('w-full', className)}>
         {/* Label */}
         {label && (
            <label
               htmlFor={name}
               className="block text-sm font-normal text-primary-500 mb-2 font-arabic"
            >
               {label}
               {required && <span className="text-danger-500 ml-1">*</span>}
            </label>
         )}

         {/* Input Container */}
         <div className="relative">
            <input
               ref={ref}
               id={name}
               name={name}
               type={inputType}
               value={value}
               onChange={onChange}
               onFocus={handleFocus}
               onBlur={handleBlur}
               placeholder={placeholder}
               disabled={disabled}
               required={required}
               className={clsx(
                  'w-full px-4 py-3 rounded-lg font-arabic text-sm',
                  'bg-white border transition-all duration-200',
                  'placeholder:text-secondary-500 text-gray-900',
                  'focus:outline-none',
                  // Border and shadow states
                  error
                     ? 'border-danger-500 focus:border-danger-500 focus:shadow-[0px_0px_0px_2px_rgba(239,68,68,0.1)]'
                     : isFocused
                        ? 'border-info-500 shadow-input-focus'
                        : 'border-border hover:border-gray-300',
                  // Disabled state
                  disabled && 'bg-gray-100 cursor-not-allowed opacity-60',
                  // Password padding for icon
                  isPasswordType && 'pr-12'
               )}
               aria-invalid={error ? 'true' : 'false'}
               aria-describedby={error ? `${name}-error` : undefined}
               {...props}
            />

            {/* Password Toggle Button */}
            {isPasswordType && (
               <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-500 hover:text-gray-700 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  tabIndex={-1}
               >
                  {showPassword ? (
                     <EyeOff className="w-4 h-4" aria-hidden="true" />
                  ) : (
                     <Eye className="w-4 h-4" aria-hidden="true" />
                  )}
               </button>
            )}
         </div>

         {/* Error Message */}
         {error && (
            <p
               id={`${name}-error`}
               className="mt-2 text-sm text-danger-500 font-arabic"
               role="alert"
            >
               {error}
            </p>
         )}
      </div>
   );
});

Input.displayName = 'Input';

Input.propTypes = {
   label: PropTypes.string,
   type: PropTypes.oneOf(['text', 'email', 'password', 'number', 'tel']),
   name: PropTypes.string.isRequired,
   value: PropTypes.string,
   onChange: PropTypes.func,
   onBlur: PropTypes.func,
   placeholder: PropTypes.string,
   error: PropTypes.string,
   required: PropTypes.bool,
   disabled: PropTypes.bool,
   className: PropTypes.string,
};

export default Input;
