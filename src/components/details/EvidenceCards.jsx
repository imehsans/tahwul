import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import StatCard from '../dashboard/StatCard';
import { FileText, Clock, FileSearch, CheckCircle } from 'lucide-react';

const EvidenceCards = ({ evidence }) => {
   const { t } = useTranslation();

   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
         <StatCard
            title={t('evidence.total')}
            value={evidence.total}
            icon={<FileText className="w-6 h-6" />}
            iconBgColor="bg-gray-100"
            iconColor="text-gray-600"
         />
         <StatCard
            title={t('evidence.inProgress')}
            value={evidence.inProgress}
            icon={<Clock className="w-6 h-6" />}
            iconBgColor="bg-warning-100"
            iconColor="text-warning-600"
         />
         <StatCard
            title={t('evidence.underReview')}
            value={evidence.underReview}
            icon={<FileSearch className="w-6 h-6" />}
            iconBgColor="bg-primary-100"
            iconColor="text-primary-600"
         />
         <StatCard
            title={t('evidence.completed')}
            value={evidence.completed}
            icon={<CheckCircle className="w-6 h-6" />}
            iconBgColor="bg-success-100"
            iconColor="text-success-600"
         />
      </div>
   );
};

EvidenceCards.propTypes = {
   evidence: PropTypes.shape({
      total: PropTypes.number.isRequired,
      inProgress: PropTypes.number.isRequired,
      underReview: PropTypes.number.isRequired,
      completed: PropTypes.number.isRequired
   }).isRequired
};

export default EvidenceCards;
