import { useTranslation } from 'react-i18next';

const Perspectives = () => {
   const { t } = useTranslation();

   return (
      <div className="container-custom">
         <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
               {t('nav.perspectives') || 'Perspectives'}
            </h1>
            <p className="text-gray-600">
               Manage and view business perspectives and strategic goals.
            </p>
         </header>

         <div className="card p-8 text-center text-gray-500">
            <p>Perspectives content goes here.</p>
         </div>
      </div>
   );
};

export default Perspectives;
