export const mockProjects = [
   {
      id: 1,
      title: 'Strategic Planning Implementation',
      perspective: 'strategic',
      status: 'inProgress',
      progress: 65,
      startDate: '2024-01-15',
      endDate: '2024-06-30',
      owner: 'Ahmed Al-Rashid',
      team: ['Ahmed Al-Rashid', 'Sarah Johnson', 'Mohammed Al-Saud'],
      description: 'Implementing comprehensive strategic planning framework across the organization',
      objective: 'Establish a robust strategic planning process that aligns with organizational goals and regulatory requirements',
      requirements: [
         'Complete stakeholder analysis',
         'Define strategic objectives',
         'Develop implementation roadmap',
         'Establish KPIs and metrics'
      ],
      scope: 'Organization-wide strategic planning implementation including all departments and business units',
      evidence: {
         total: 45,
         inProgress: 15,
         underReview: 10,
         completed: 20
      },
      recentActivity: [
         {
            id: 1,
            user: 'Ahmed Al-Rashid',
            action: 'uploaded evidence document',
            timestamp: '2024-02-05T10:30:00',
            description: 'Strategic Planning Framework v2.0'
         },
         {
            id: 2,
            user: 'Sarah Johnson',
            action: 'completed review',
            timestamp: '2024-02-04T15:45:00',
            description: 'Stakeholder Analysis Report'
         }
      ]
   },
   {
      id: 2,
      title: 'Operational Excellence Program',
      perspective: 'operational',
      status: 'inProgress',
      progress: 48,
      startDate: '2024-02-01',
      endDate: '2024-07-31',
      owner: 'Fatima Al-Mansoori',
      team: ['Fatima Al-Mansoori', 'John Smith', 'Layla Hassan'],
      description: 'Enhancing operational processes and workflows for improved efficiency',
      objective: 'Achieve operational excellence through process optimization and digital transformation',
      requirements: [
         'Process mapping',
         'Identify bottlenecks',
         'Implement automation solutions',
         'Monitor performance metrics'
      ],
      scope: 'All operational departments including manufacturing, logistics, and customer service',
      evidence: {
         total: 38,
         inProgress: 12,
         underReview: 8,
         completed: 18
      },
      recentActivity: []
   },
   {
      id: 3,
      title: 'Financial Management System',
      perspective: 'financial',
      status: 'completed',
      progress: 100,
      startDate: '2023-09-01',
      endDate: '2024-01-31',
      owner: 'Khalid Bin Zayed',
      team: ['Khalid Bin Zayed', 'Emily Chen', 'Omar Abdullah'],
      description: 'Implementation of advanced financial management and reporting system',
      objective: 'Establish comprehensive financial controls and reporting mechanisms',
      requirements: [
         'Financial policy documentation',
         'Budget control procedures',
         'Audit trail implementation',
         'Compliance reporting'
      ],
      scope: 'Finance department including budgeting, accounting, and financial reporting',
      evidence: {
         total: 52,
         inProgress: 0,
         underReview: 0,
         completed: 52
      },
      recentActivity: []
   },
   {
      id: 4,
      title: 'Customer Experience Enhancement',
      perspective: 'customer',
      status: 'underReview',
      progress: 72,
      startDate: '2024-01-10',
      endDate: '2024-05-30',
      owner: 'Noor Al-Hashimi',
      team: ['Noor Al-Hashimi', 'David Martinez', 'Aisha Mohammed'],
      description: 'Improving customer satisfaction through enhanced service delivery',
      objective: 'Elevate customer experience to world-class standards',
      requirements: [
         'Customer journey mapping',
         'Touchpoint optimization',
         'Feedback mechanism implementation',
         'Service level agreements'
      ],
      scope: 'All customer-facing operations and support functions',
      evidence: {
         total: 41,
         inProgress: 5,
         underReview: 15,
         completed: 21
      },
      recentActivity: []
   },
   {
      id: 5,
      title: 'Learning & Development Initiative',
      perspective: 'learning',
      status: 'inProgress',
      progress: 35,
      startDate: '2024-02-15',
      endDate: '2024-08-31',
      owner: 'Rashed Al-Maktoum',
      team: ['Rashed Al-Maktoum', 'Lisa Anderson', 'Hamza Ibrahim'],
      description: 'Building organizational capability through structured learning programs',
      objective: 'Create a learning organization that promotes continuous improvement',
      requirements: [
         'Skills gap analysis',
         'Training program development',
         'E-learning platform implementation',
         'Performance tracking'
      ],
      scope: 'All employees across the organization',
      evidence: {
         total: 28,
         inProgress: 18,
         underReview: 5,
         completed: 5
      },
      recentActivity: []
   }
];

export const mockDashboardStats = {
   totalProjects: 24,
   completed: 8,
   inProgress: 12,
   underReview: 4,
   overallProgress: 62
};

export const mockPerspectives = [
   {
      id: 'strategic',
      name: 'Strategic Planning',
      progress: 65,
      projects: 5,
      color: '#0ea5e9'
   },
   {
      id: 'operational',
      name: 'Operational Excellence',
      progress: 48,
      projects: 6,
      color: '#8b5cf6'
   },
   {
      id: 'financial',
      name: 'Financial Management',
      progress: 85,
      projects: 4,
      color: '#22c55e'
   },
   {
      id: 'customer',
      name: 'Customer Focus',
      progress: 72,
      projects: 5,
      color: '#f59e0b'
   },
   {
      id: 'learning',
      name: 'Learning & Growth',
      progress: 35,
      projects: 4,
      color: '#ef4444'
   }
];

export const mockRecentActivities = [
   {
      id: 1,
      project: 'Strategic Planning Implementation',
      user: 'Ahmed Al-Rashid',
      action: 'uploaded',
      item: 'Strategic Framework Document',
      timestamp: '2024-02-06T09:30:00',
      type: 'upload'
   },
   {
      id: 2,
      project: 'Customer Experience Enhancement',
      user: 'Noor Al-Hashimi',
      action: 'completed review',
      item: 'Customer Journey Map',
      timestamp: '2024-02-06T08:15:00',
      type: 'review'
   },
   {
      id: 3,
      project: 'Operational Excellence Program',
      user: 'Fatima Al-Mansoori',
      action: 'added comment',
      item: 'Process Optimization Plan',
      timestamp: '2024-02-05T16:45:00',
      type: 'comment'
   },
   {
      id: 4,
      project: 'Learning & Development Initiative',
      user: 'Rashed Al-Maktoum',
      action: 'created',
      item: 'Training Curriculum',
      timestamp: '2024-02-05T14:20:00',
      type: 'create'
   },
   {
      id: 5,
      project: 'Financial Management System',
      user: 'Khalid Bin Zayed',
      action: 'submitted for approval',
      item: 'Q1 Audit Report',
      timestamp: '2024-02-05T11:00:00',
      type: 'submit'
   }
];

export const mockTimeline = [
   {
      id: 1,
      month: 'Jan 2024',
      projects: [
         { name: 'Strategic Planning', status: 'inProgress', completion: 40 },
         { name: 'Customer Experience', status: 'inProgress', completion: 30 }
      ]
   },
   {
      id: 2,
      month: 'Feb 2024',
      projects: [
         { name: 'Strategic Planning', status: 'inProgress', completion: 65 },
         { name: 'Customer Experience', status: 'underReview', completion: 72 },
         { name: 'Learning & Development', status: 'inProgress', completion: 20 }
      ]
   },
   {
      id: 3,
      month: 'Mar 2024',
      projects: [
         { name: 'Strategic Planning', status: 'inProgress', completion: 80 },
         { name: 'Operational Excellence', status: 'inProgress', completion: 35 }
      ]
   }
];

export const mockAuditReadiness = {
   overall: 78,
   categories: [
      { name: 'Documentation', score: 85, status: 'good' },
      { name: 'Process Compliance', score: 72, status: 'medium' },
      { name: 'Evidence Collection', score: 90, status: 'excellent' },
      { name: 'Risk Management', score: 65, status: 'medium' },
      { name: 'Training Records', score: 58, status: 'needsImprovement' }
   ]
};
