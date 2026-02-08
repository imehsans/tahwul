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

export const mockProgressDetails = {
   "1-0": {
      id: "1-0",
      title: "Digital Transformation Strategic Planning",
      tag: "Strategy & Planning",
      description: "Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals",
      progress: 100,
      stats: {
         totalEvidence: 4,
         underReview: 3,
         inProgress: 2,
         completed: 1
      },
      objective: "Develop A Digital Transformation Strategy Aligned With The Organization's Strategy And The Objectives Of Saudi Vision 2030.",
      requirements: [
         "Prepare A Digital Transformation Strategy For The Transition To Electronic Government Transactions, Including The Following:",
         "A. The Organization's Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization's Overall Strategy.",
         "B. Strategic Initiatives, Programs, And Performance Indicators.",
         "C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy's Objectives.",
         "D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy's Objectives."
      ],
      evidenceDocuments: [
         { id: 1, name: "Strategy_Document_v1.pdf", status: "completed", date: "2024-01-15" },
         { id: 2, name: "Stakeholder_Analysis.xlsx", status: "underReview", date: "2024-01-20" }
      ],
      relatedRegulations: "Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).",
      scope: "All Government Entities.",
      leaders: [
         { name: "Ahmed Al-Ali", role: "Strategy Perspective", image: "https://ui-avatars.com/api/?name=Ahmed+Al-Ali&background=1D3557&color=fff" },
         { name: "Ahmed Al-Ali", role: "Strategy Perspective", image: "https://ui-avatars.com/api/?name=Ahmed+Al-Ali&background=1D3557&color=fff" }
      ],
      evidenceTable: [
         {
            documentNumber: "5.4.1.1",
            documentName: "Digital_Transformation_Plan.Pdf",
            documentLead: "Ahmed Khaled",
            documentPreparer: "Ahmed Khaled",
            date: "2025-08-01",
            dueDate: "2025-08-01",
            status: "Approved",
            statusColor: "bg-green-100 text-green-700"
         },
         {
            documentNumber: "5.4.1.2",
            documentName: "KPI_Framework.Xlsx",
            documentLead: "Mona Hamed",
            documentPreparer: "Mona Hamed",
            date: "2025-08-01",
            dueDate: "2025-08-01",
            status: "Pending Review",
            statusColor: "bg-yellow-50 text-yellow-600"
         },
         {
            documentNumber: "5.4.1.3",
            documentName: "Roadmap_Version1.Docx",
            documentLead: "Rami AlSharif",
            documentPreparer: "Rami AlSharif",
            date: "2025-08-01",
            dueDate: "2025-08-01",
            status: "Pending Review",
            statusColor: "bg-yellow-50 text-yellow-600"
         }
      ],
      comments: [
         {
            id: 1,
            user: "Sara Ibrahim",
            image: "https://ui-avatars.com/api/?name=Sara+Ibrahim&background=E5E7EB&color=374151",
            date: "2025-08-05",
            content: "Ensure The Plan Includes A Clear Governance Model."
         },
         {
            id: 2,
            user: "Mona Hamed",
            image: "https://ui-avatars.com/api/?name=Mona+Hamed&background=E5E7EB&color=374151",
            date: "2025-08-05",
            content: "Ensure The Plan Includes A Clear Governance Model."
         }
      ],
      recentActivities: [
         {
            id: 1,
            content: "Roadmap_Version1.Docx Uploaded By Rami AlSharif",
            time: "5 Mins Ago"
         },
         {
            id: 2,
            content: "KPI_Framework.Xlsx Uploaded By Mona Hamed",
            time: "20 Mins Ago"
         },
         {
            id: 3,
            content: "Digital_Transformation_Plan.Pdf Approved By Advisory Team",
            time: "1 Hour Ago"
         }
      ]
   }
};

export const getProgressDetails = async (id) => {
   // Simulate API delay
   await new Promise(resolve => setTimeout(resolve, 500));
   return mockProgressDetails[id] || mockProgressDetails["1-0"];
};

export const mockPerspectivesList = [
   { id: 1, title: 'Strategy And Planning', themes: 3, status: 'On Track', progress: 97.78 },
   { id: 2, title: 'Organization And Culture', themes: 3, status: 'On Track', progress: 70.83 },
   { id: 3, title: 'Operations And Execution', themes: 1, status: 'On Track', progress: 80.00 },
   { id: 4, title: 'Business Continuity', themes: 2, status: 'On Track', progress: 97.78 },
   { id: 5, title: 'Information Technology', themes: 3, status: 'On Track', progress: 70.83 },
   { id: 6, title: 'Comprehensive Governance', themes: 1, status: 'On Track', progress: 80.00 },
   { id: 7, title: 'Channels And Services', themes: 2, status: 'On Track', progress: 97.78 },
   { id: 8, title: 'Beneficiary Centralization', themes: 3, status: 'Not Started', progress: 0 },
   { id: 9, title: 'Government Data', themes: 3, status: 'On Track', progress: 80.00 },
   { id: 10, title: 'Research And Innovation', themes: 2, status: 'At Risk', progress: 20.78 }
];

export const getPerspectiveDetails = async (id) => {
   // Simulate API delay
   await new Promise(resolve => setTimeout(resolve, 500));
   const perspective = mockPerspectivesList.find(p => p.id === parseInt(id));

   // Mock detailed data structure matching the image
   const details = {
      ...perspective,
      themes: [
         {
            id: '5.1.1',
            title: '5.1.1 - Digital Transformation',
            standardsCount: 3,
            isOpen: true, // Default open for first item
            standards: [
               {
                  id: 1,
                  number: 1,
                  name: 'Strategic Planning For Digital Transformation',
                  status: 'Completed',
                  statusColor: 'text-green-500',
                  numberColor: 'bg-green-500',
                  link: '/details/1'
               },
               {
                  id: 2,
                  number: 2,
                  name: 'Executive Planning For Digital Transformation',
                  status: 'In Progress',
                  statusColor: 'text-orange-500',
                  numberColor: 'bg-orange-500',
                  link: '/details/2'
               },
               {
                  id: 3,
                  number: 3,
                  name: 'Establishing A Digital Transformation Project Management Unit',
                  status: 'Delayed',
                  statusColor: 'text-red-500',
                  numberColor: 'bg-red-500',
                  link: '/details/3'
               }
            ]
         },
         {
            id: '5.1.2',
            title: '5.1.2 - Digital Governance',
            standardsCount: 4,
            isOpen: false,
            standards: [] // Add mock standards if needed
         },
         {
            id: '5.1.4',
            title: '5.1.4 - Enterprise Architecture',
            standardsCount: 3,
            isOpen: false,
            standards: []
         }
      ]
   };

   return details;
};
