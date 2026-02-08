import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import arTranslations from './locales/ar.json';

const resources = {
   en: {
      translation: enTranslations
   },
   ar: {
      translation: arTranslations
   }
};

i18n
   .use(initReactI18next)
   .init({
      resources,
      lng: localStorage.getItem('language') || 'en',
      fallbackLng: 'en',
      interpolation: {
         escapeValue: false
      },
      react: {
         useSuspense: false
      }
   });

// Update document direction based on language
i18n.on('languageChanged', (lng) => {
   document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
   document.documentElement.lang = lng;
   localStorage.setItem('language', lng);
});

// Set initial direction
document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = i18n.language;

export default i18n;
