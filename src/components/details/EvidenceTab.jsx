import PropTypes from 'prop-types';
import Badge from '../common/Badge';
import { FileText, Download, Eye } from 'lucide-react';

const EvidenceTab = ({ evidence }) => {
   // Mock evidence items for display
   const evidenceItems = [
      { id: 1, name: 'Strategic Framework Document', status: 'completed', date: '2024-02-05', size: '2.4 MB', type: 'PDF' },
      { id: 2, name: 'Stakeholder Analysis Report', status: 'completed', date: '2024-02-04', size: '1.8 MB', type: 'PDF' },
      { id: 3, name: 'Implementation Roadmap', status: 'underReview', date: '2024-02-03', size: '3.2 MB', type: 'XLSX' },
      { id: 4, name: 'KPI Metrics Dashboard', status: 'inProgress', date: '2024-02-02', size: '1.5 MB', type: 'PDF' },
      { id: 5, name: 'Quarterly Review Notes', status: 'inProgress', date: '2024-02-01', size: '890 KB', type: 'DOCX' },
      { id: 6, name: 'Budget Allocation Sheet', status: 'completed', date: '2024-01-30', size: '456 KB', type: 'XLSX' },
      { id: 7, name: 'Risk Assessment Matrix', status: 'underReview', date: '2024-01-28', size: '2.1 MB', type: 'PDF' },
      { id: 8, name: 'Team Performance Review', status: 'inProgress', date: '2024-01-25', size: '1.2 MB', type: 'PDF' },
   ];

   const getStatusBadgeVariant = (status) => {
      const variantMap = {
         completed: 'success',
         inProgress: 'warning',
         underReview: 'primary'
      };
      return variantMap[status] || 'gray';
   };

   const getFileTypeColor = (type) => {
      const colorMap = {
         PDF: 'bg-danger-100 text-danger-700',
         XLSX: 'bg-success-100 text-success-700',
         DOCX: 'bg-primary-100 text-primary-700'
      };
      return colorMap[type] || 'bg-gray-100 text-gray-700';
   };

   return (
      <div className="space-y-4">
         {/* Summary */}
         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
               <p className="text-2xl font-bold text-gray-900">{evidence.total}</p>
               <p className="text-xs text-gray-600 mt-1">Total</p>
            </div>
            <div className="text-center">
               <p className="text-2xl font-bold text-warning-600">{evidence.inProgress}</p>
               <p className="text-xs text-gray-600 mt-1">In Progress</p>
            </div>
            <div className="text-center">
               <p className="text-2xl font-bold text-primary-600">{evidence.underReview}</p>
               <p className="text-xs text-gray-600 mt-1">Under Review</p>
            </div>
            <div className="text-center">
               <p className="text-2xl font-bold text-success-600">{evidence.completed}</p>
               <p className="text-xs text-gray-600 mt-1">Completed</p>
            </div>
         </div>

         {/* Evidence Table */}
         <div className="overflow-x-auto">
            <table className="w-full">
               <thead>
                  <tr className="border-b border-gray-200">
                     <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Document</th>
                     <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Type</th>
                     <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                     <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                     <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Size</th>
                     <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {evidenceItems.map((item) => (
                     <tr
                        key={item.id}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                     >
                        <td className="py-4 px-4">
                           <div className="flex items-center gap-3">
                              <FileText className="w-5 h-5 text-gray-400 flex-shrink-0" />
                              <span className="text-sm font-medium text-gray-900">
                                 {item.name}
                              </span>
                           </div>
                        </td>
                        <td className="py-4 px-4">
                           <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getFileTypeColor(item.type)}`}>
                              {item.type}
                           </span>
                        </td>
                        <td className="py-4 px-4">
                           <Badge
                              variant={getStatusBadgeVariant(item.status)}
                              size="sm"
                              dot
                           >
                              {item.status === 'inProgress' ? 'In Progress' :
                                 item.status === 'underReview' ? 'Under Review' : 'Completed'}
                           </Badge>
                        </td>
                        <td className="py-4 px-4">
                           <span className="text-sm text-gray-600">
                              {new Date(item.date).toLocaleDateString()}
                           </span>
                        </td>
                        <td className="py-4 px-4">
                           <span className="text-sm text-gray-600">{item.size}</span>
                        </td>
                        <td className="py-4 px-4">
                           <div className="flex items-center justify-end gap-2">
                              <button
                                 className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                                 aria-label="View"
                              >
                                 <Eye className="w-4 h-4" />
                              </button>
                              <button
                                 className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                                 aria-label="Download"
                              >
                                 <Download className="w-4 h-4" />
                              </button>
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

EvidenceTab.propTypes = {
   evidence: PropTypes.shape({
      total: PropTypes.number.isRequired,
      inProgress: PropTypes.number.isRequired,
      underReview: PropTypes.number.isRequired,
      completed: PropTypes.number.isRequired
   }).isRequired
};

export default EvidenceTab;
