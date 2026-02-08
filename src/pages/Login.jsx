import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useAppStore from '../store';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import LanguageSwitcher from '../components/common/LanguageSwitcher';

const Login = () => {
   const { t } = useTranslation();
   const navigate = useNavigate();
   const login = useAppStore((state) => state.login);

   const [formData, setFormData] = useState({
      email: 'admin',
      password: 'password'
   });

   const [errors, setErrors] = useState({});
   const [isSubmitting, setIsSubmitting] = useState(false);

   // ... handleChange ...
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
         ...prev,
         [name]: value
      }));
      if (errors[name]) {
         setErrors(prev => ({
            ...prev,
            [name]: ''
         }));
      }
   };

   // ... validateForm ... 
   const validateForm = () => {
      const newErrors = {};

      // Allow both username and email (check if not empty)
      if (!formData.email.trim()) {
         newErrors.email = t('login.errors.emailRequired');
      }

      if (!formData.password) newErrors.password = t('login.errors.passwordRequired');
      return newErrors;
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      const newErrors = validateForm();
      if (Object.keys(newErrors).length > 0) {
         setErrors(newErrors);
         return;
      }

      setIsSubmitting(true);

      try {
         // Simulate API delay
         await new Promise(resolve => setTimeout(resolve, 800));

         const result = login(formData.email, formData.password);

         if (result.success) {
            navigate('/dashboard');
         } else {
            setErrors({ submit: result.error || t('login.errors.loginFailed') });
         }
      } catch (error) {
         setErrors({ submit: t('login.errors.loginFailed') });
      } finally {
         setIsSubmitting(false);
      }
   };
 
   const handleNafathLogin = () => {
      // TODO: Implement Nafath authentication
      console.log('Nafath login initiated');
   };

   return (
      <div className="min-h-screen relative flex items-center justify-center bg-primary-500 overflow-hidden">
         {/* Background Pattern */}
         <div
            className="w-full  h-full absolute inset-0 opacity-30"
            style={{
               backgroundImage: "url('/login_background_img.png')",
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat'
            }}
         />

         {/* Login Card Container */}
         <div className="relative z-10 w-full max-w-xl mx-4 sm:mx-6 md:mx-8 animate-fade-in">
            {/* White Card */}
            <div className="bg-white rounded-3xl shadow-strong px-6 sm:px-10 md:px-12 py-8 sm:py-10 md:py-12">

               {/* Language Switcher */}
               <div className="flex justify-center mb-6">
                  <LanguageSwitcher />
               </div>

               {/* Logo */}
               <div className="flex justify-center mb-8">
                  <img
                     src="/Tahwul_01@3x.png"
                     alt="Tahwul Logo"
                     className="h-16 sm:h-20 w-auto"
                     onError={(e) => {
                        // Fallback to text logo if image fails
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                     }}
                  />
                  <div className="hidden">
                     <h1 className="text-3xl font-bold text-primary-500 font-arabic">
                        Tahwul
                     </h1>
                  </div>
               </div>

               {/* Welcome Heading */}
               <header className="text-center mb-8">
                  <h1 className="text-xl sm:text-2xl font-bold text-primary-500 font-arabic leading-relaxed">
                     {t('login.welcome')}
                  </h1>
               </header>

               {/* Login Form */}
               <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email/Username Input */}
                  <Input
                     label={t('login.emailLabel')}
                     type="text"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     placeholder={t('login.emailPlaceholder')}
                     error={errors.email}
                     required
                     autoComplete="username"
                  />

                  {/* Password Input */}
                  <Input
                     label={t('login.passwordLabel')}
                     type="password"
                     name="password"
                     value={formData.password}
                     onChange={handleChange}
                     placeholder={t('login.passwordPlaceholder')}
                     error={errors.password}
                     required
                     autoComplete="current-password"
                  />

                  {/* Forgot Password Link */}
                  <div className="flex justify-end">
                     <a
                        href="/forgot-password"
                        className="text-sm font-medium text-info-500 hover:text-info-600 transition-colors font-arabic"
                     >
                        {t('login.forgotPassword')}
                     </a>
                  </div>

                  {/* Submit Error */}
                  {errors.submit && (
                     <div
                        className="p-3 bg-danger-50 border border-danger-200 rounded-lg text-sm text-danger-700 font-arabic"
                        role="alert"
                     >
                        {errors.submit}
                     </div>
                  )}

                  {/* Login Button */}
                  <Button
                     type="submit"
                     variant="primary"
                     fullWidth
                     disabled={isSubmitting}
                     className="!bg-primary-500 hover:!bg-primary-600 !py-3.5"
                  >
                     {isSubmitting ? t('login.loggingIn') : t('login.loginButton')}
                  </Button>
               </form>

               {/* Divider */}
               <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                     <div className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center">
                     <span className="px-4 bg-white text-sm text-secondary-500 font-ibm">
                        {t('login.orEnterVia')}
                     </span>
                  </div>
               </div>

               {/* Nafath Login Button */}
               <Button
                  type="button"
                  onClick={handleNafathLogin}
                  variant="outline"
                  fullWidth
                  className="!bg-white !border-2 !border-accent-500 group hover:!bg-accent-50"
               >
                  <div className="flex items-center gap-3">
                     <img
                        src="/Nafath_logo.svg.png"
                        alt="Nafath"
                        className="h-5 w-auto"
                        onError={(e) => e.target.style.display = 'none'}
                     />
                     <span className="text-base font-medium text-accent-500 group-hover:text-accent-600 font-arabic">
                        {t('login.nafathLogin')}
                     </span>
                  </div>
               </Button>
            </div>

            {/* Footer Copyright */}
            <footer className="text-center mt-8">
               <p className="text-sm text-white/80 font-ibm">
                  {t('login.copyright')}
               </p>
            </footer>
         </div>
      </div>
   );
};

export default Login;
