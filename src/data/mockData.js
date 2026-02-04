// Mock data for Rate Impact and Change Assistant

export const currentUser = {
  name: "Alex Rodriguez",
  role: "Senior Pricing Analyst",
  avatar: "AR",
  department: "Pricing & Product Management",
  email: "alex.rodriguez@company.com"
};

export const dashboardMetrics = {
  pendingRateChanges: 12,
  activeFilings: 8,
  avgImplementationTime: "4.2 weeks",
  filingApprovalRate: "92%",
  portfolioImpact: "$24.5M",
  statesAffected: 18
};

export const rateChanges = [
  {
    id: "RC-2024-00145",
    changeTitle: "Q1 2024 Workers Comp Loss Cost Update",
    source: "NCCI",
    effectiveDate: "2024-04-01",
    status: "Pending Approval",
    priority: "High",
    assignedTo: "Alex Rodriguez",
    createdDate: "2024-01-15",
    dueDate: "2024-02-28",
    lastUpdated: "2024-01-27 10:30 AM",
    description: "NCCI Q1 loss cost updates for 15 states",
    linesOfBusiness: ["Workers Compensation"],
    statesAffected: ["CA", "TX", "FL", "NY", "IL", "PA", "OH", "GA", "NC", "MI", "NJ", "VA", "WA", "AZ", "MA"],
    premiumImpact: "+$8.2M",
    policyCount: 12450,
    avgPremiumChange: "+4.2%"
  },
  {
    id: "RC-2024-00144",
    changeTitle: "Commercial Auto Rate Adjustment - California",
    source: "ALR",
    effectiveDate: "2024-03-15",
    status: "In Review",
    priority: "Urgent",
    assignedTo: "Alex Rodriguez",
    createdDate: "2024-01-20",
    dueDate: "2024-02-15",
    lastUpdated: "2024-01-27 09:15 AM",
    description: "ALR filing for commercial auto territorial rate adjustments in California",
    linesOfBusiness: ["Commercial Auto"],
    statesAffected: ["CA"],
    premiumImpact: "+$3.1M",
    policyCount: 4820,
    avgPremiumChange: "+6.8%"
  },
  {
    id: "RC-2024-00143",
    changeTitle: "General Liability Experience Mod Update",
    source: "ALR",
    effectiveDate: "2024-05-01",
    status: "Impact Analysis",
    priority: "Medium",
    assignedTo: "Sarah Chen",
    createdDate: "2024-01-18",
    dueDate: "2024-03-15",
    lastUpdated: "2024-01-26 03:45 PM",
    description: "Update to GL experience modification factors based on 2023 loss data",
    linesOfBusiness: ["General Liability"],
    statesAffected: ["TX", "FL", "GA", "NC", "TN", "SC"],
    premiumImpact: "+$2.8M",
    policyCount: 8920,
    avgPremiumChange: "+3.5%"
  },
  {
    id: "RC-2024-00142",
    changeTitle: "Property CAT Zone Reclassification",
    source: "Internal",
    effectiveDate: "2024-06-01",
    status: "Deployed",
    priority: "Low",
    assignedTo: "Michael Torres",
    createdDate: "2024-01-10",
    dueDate: "2024-01-31",
    lastUpdated: "2024-01-25 11:20 AM",
    description: "Updated CAT zone boundaries for property insurance based on new FEMA flood maps",
    linesOfBusiness: ["Commercial Property"],
    statesAffected: ["FL", "LA", "TX", "NC", "SC"],
    premiumImpact: "+$5.4M",
    policyCount: 6340,
    avgPremiumChange: "+8.9%"
  },
  {
    id: "RC-2024-00141",
    changeTitle: "Multi-State Package Policy Rate Revision",
    source: "ALR",
    effectiveDate: "2024-04-15",
    status: "Filing Submitted",
    priority: "High",
    assignedTo: "Alex Rodriguez",
    createdDate: "2024-01-12",
    dueDate: "2024-03-01",
    lastUpdated: "2024-01-27 08:00 AM",
    description: "Comprehensive rate revision for BOP and package policies across 12 states",
    linesOfBusiness: ["Business Owners Policy", "Package"],
    statesAffected: ["NY", "NJ", "PA", "MD", "VA", "DE", "CT", "RI", "MA", "NH", "VT", "ME"],
    premiumImpact: "+$4.9M",
    policyCount: 9650,
    avgPremiumChange: "+5.1%"
  },
  {
    id: "RC-2024-00140",
    changeTitle: "Cyber Insurance Base Rate Update",
    source: "Internal",
    effectiveDate: "2024-07-01",
    status: "Draft",
    priority: "Medium",
    assignedTo: "Sarah Chen",
    createdDate: "2024-01-22",
    dueDate: "2024-04-30",
    lastUpdated: "2024-01-26 02:10 PM",
    description: "New base rate structure for cyber liability based on updated loss experience",
    linesOfBusiness: ["Cyber Liability"],
    statesAffected: ["All States"],
    premiumImpact: "+$1.2M",
    policyCount: 2180,
    avgPremiumChange: "+12.4%"
  }
];

export const linesOfBusiness = [
  { value: "workers_comp", label: "Workers Compensation" },
  { value: "commercial_auto", label: "Commercial Auto" },
  { value: "general_liability", label: "General Liability" },
  { value: "commercial_property", label: "Commercial Property" },
  { value: "bop", label: "Business Owners Policy" },
  { value: "package", label: "Package" },
  { value: "cyber", label: "Cyber Liability" },
  { value: "professional_liability", label: "Professional Liability" },
  { value: "umbrella", label: "Umbrella/Excess" }
];

export const rateTypes = [
  { value: "premium", label: "Premium" },
  { value: "cash_value", label: "Cash Value" },
  { value: "dividend", label: "Dividend" },
  { value: "pua_nsp", label: "PUA NSP" },
  { value: "rpu_nsp", label: "RPU NSP" },
  { value: "eti_mortality", label: "ETI Mortality" },
  { value: "eti_interest", label: "ETI Interest" },
  { value: "div_interest", label: "DIV Interest" }
];

export const states = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "LA", label: "Louisiana" },
  { value: "MA", label: "Massachusetts" },
  { value: "MD", label: "Maryland" },
  { value: "ME", label: "Maine" },
  { value: "MI", label: "Michigan" },
  { value: "NC", label: "North Carolina" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NY", label: "New York" },
  { value: "OH", label: "Ohio" },
  { value: "PA", label: "Pennsylvania" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "VA", label: "Virginia" },
  { value: "VT", label: "Vermont" },
  { value: "WA", label: "Washington" }
];

export const rateSources = [
  { value: "alr", label: "ALR - Advisory Loss Ratio" },
  { value: "ncci", label: "NCCI - National Council on Compensation Insurance" },
  { value: "internal", label: "Internal Analysis" },
  { value: "competitor", label: "Competitive Analysis" },
  { value: "regulatory", label: "Regulatory Directive" }
];

export const rateChangeDetails = {
  "RC-2024-00145": {
    id: "RC-2024-00145",
    changeTitle: "Q1 2024 Workers Comp Loss Cost Update",
    source: "NCCI",
    status: "Pending Approval",
    effectiveDate: "2024-04-01",
    filingDeadline: "2024-02-28",
    createdBy: "Alex Rodriguez",
    createdDate: "2024-01-15",
    description: "NCCI Q1 2024 loss cost updates affecting 15 states. Overall increase of 4.2% driven by medical cost inflation and loss development patterns.",

    businessImpact: {
      totalPremiumImpact: "$8,245,000",
      percentageChange: "+4.2%",
      affectedPolicyCount: 12450,
      renewalCount: 3890,
      newBusinessImpact: "+5.1%"
    },

    stateBreakdown: [
      { state: "CA", classCodesAffected: 245, avgChange: "+5.2%", premiumImpact: "$2.1M", policyCount: 2840 },
      { state: "TX", classCodesAffected: 198, avgChange: "+4.8%", premiumImpact: "$1.8M", policyCount: 2450 },
      { state: "FL", classCodesAffected: 212, avgChange: "+3.9%", premiumImpact: "$1.2M", policyCount: 1920 },
      { state: "NY", classCodesAffected: 176, avgChange: "+4.5%", premiumImpact: "$980K", policyCount: 1450 },
      { state: "IL", classCodesAffected: 154, avgChange: "+3.7%", premiumImpact: "$740K", policyCount: 1180 }
    ],

    hazardGroupImpact: [
      { group: "Manufacturing", avgChange: "+6.2%", policyCount: 3240, premiumImpact: "$3.1M" },
      { group: "Construction", avgChange: "+5.8%", policyCount: 2890, premiumImpact: "$2.8M" },
      { group: "Healthcare", avgChange: "+3.9%", policyCount: 2120, premiumImpact: "$1.4M" },
      { group: "Retail", avgChange: "+2.8%", policyCount: 1890, premiumImpact: "$620K" },
      { group: "Services", avgChange: "+3.2%", policyCount: 2310, premiumImpact: "$340K" }
    ],

    timeline: [
      { date: "2024-01-15", action: "Rate Change Initiated", user: "Alex Rodriguez", details: "NCCI circular received and imported" },
      { date: "2024-01-18", action: "Impact Analysis Started", user: "System", details: "Portfolio analysis initiated across 15 states" },
      { date: "2024-01-22", action: "Pricing Review Completed", user: "Alex Rodriguez", details: "Business impact assessment completed" },
      { date: "2024-01-25", action: "Compliance Check", user: "Lisa Park", details: "State filing requirements verified" },
      { date: "2024-01-27", action: "Pending Approval", user: "Alex Rodriguez", details: "Submitted for executive review" }
    ],

    documents: [
      { name: "NCCI Loss Cost Circular 2024-Q1", date: "2024-01-15", type: "PDF", size: "2.4 MB" },
      { name: "Portfolio Impact Analysis", date: "2024-01-22", type: "XLSX", size: "8.7 MB" },
      { name: "State Filing Summary", date: "2024-01-25", type: "PDF", size: "1.2 MB" },
      { name: "Approval Memo Draft", date: "2024-01-27", type: "DOCX", size: "340 KB" }
    ],

    approvals: [
      { role: "Pricing Manager", name: "Sarah Chen", status: "Approved", date: "2024-01-24", notes: "Impact acceptable, proceed with filing" },
      { role: "Actuary", name: "David Kim", status: "Approved", date: "2024-01-25", notes: "Loss projections validated" },
      { role: "Compliance Officer", name: "Lisa Park", status: "Approved", date: "2024-01-25", notes: "Filing requirements confirmed" },
      { role: "CFO", name: "Michael Stevens", status: "Pending", date: null, notes: null },
      { role: "Chief Underwriting Officer", name: "Jennifer Martinez", status: "Pending", date: null, notes: null }
    ],

    checklist: [
      { id: 1, label: "Import NCCI loss cost updates", status: "completed", assignedTo: "Alex Rodriguez" },
      { id: 2, label: "Map class codes to internal structure", status: "completed", assignedTo: "System" },
      { id: 3, label: "Run portfolio impact analysis", status: "completed", assignedTo: "Alex Rodriguez" },
      { id: 4, label: "Validate state-specific requirements", status: "completed", assignedTo: "Lisa Park" },
      { id: 5, label: "Generate filing documentation", status: "in_progress", assignedTo: "Alex Rodriguez" },
      { id: 6, label: "Obtain executive approvals", status: "in_progress", assignedTo: "Alex Rodriguez" },
      { id: 7, label: "Submit regulatory filings", status: "pending", assignedTo: "Lisa Park" },
      { id: 8, label: "Configure rating engine updates", status: "pending", assignedTo: "IT Team" },
      { id: 9, label: "Deploy to production", status: "pending", assignedTo: "IT Team" },
      { id: 10, label: "Notify underwriting teams", status: "pending", assignedTo: "Alex Rodriguez" }
    ]
  }
};
