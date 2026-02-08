import { useTranslation } from 'react-i18next';

const Tasks = () => {
   const { t } = useTranslation();

   return (
      <div className="container-custom">
         <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
               {t('nav.tasks') || 'Tasks'}
            </h1>
            <p className="text-gray-600">
               Track project tasks and deliverables.
            </p>
         </header>

         <div className="card p-8 text-center text-gray-500">
            <p>Task management interface goes here.</p>
         </div>
      </div>
   );
};

export default Tasks;
