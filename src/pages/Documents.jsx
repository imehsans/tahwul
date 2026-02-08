import { useTranslation } from 'react-i18next';

const Documents = () => {
   const { t } = useTranslation();

   return (
      <div className="container-custom">
         <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
               {t('nav.documents') || 'Documents'}
            </h1>
            <p className="text-gray-600">
               Centralized document repository.
            </p>
         </header>

         <div className="card p-8 text-center text-gray-500">
            <p>Document library goes here.</p>
         </div>
      </div>
   );
};

export default Documents;
