import { useTranslation } from 'react-i18next';
import useAppStore from '../../store';
import clsx from 'clsx';


const LanguageSwitcher = () => {
   const { setLanguage } = useAppStore();
   const { i18n } = useTranslation();
   const currentLang = i18n.language;

   const toggleLanguage = (lang) => {
      if (currentLang !== lang) {
         i18n.changeLanguage(lang);
         setLanguage(lang);
         // Adjust direction based on language
         document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
         document.documentElement.lang = lang;
      }
   };

   return (
      <div
         className="inline-flex items-center p-1 bg-background border border-border rounded-full"
         role="group"
         aria-label="Language switcher"
      >
         {/* English Option */}
         <button
            type="button"
            onClick={() => toggleLanguage('en')}
            className={clsx(
               'px-4 py-1.5 rounded-full text-base font-medium transition-all duration-200 font-ibm',
               currentLang === 'en'
                  ? 'bg-white text-primary-500 shadow-sm'
                  : 'text-secondary-500 hover:text-primary-500'
            )}
            aria-pressed={currentLang === 'en'}
         >
            English
         </button>

         {/* Separator Line (Visual Only) */}
         <div
            className="w-px h-4 bg-border mx-1"
            aria-hidden="true"
         />

         {/* Arabic Option */}
         <button
            type="button"
            onClick={() => toggleLanguage('ar')}
            className={clsx(
               'px-4 py-1.5 rounded-full text-base font-medium transition-all duration-200 font-ibm',
               currentLang === 'ar'
                  ? 'bg-white text-primary-500 shadow-sm'
                  : 'text-secondary-500 hover:text-primary-500'
            )}
            aria-pressed={currentLang === 'ar'}
         >
            عربي
         </button>
      </div>
   );
};

export default LanguageSwitcher;
