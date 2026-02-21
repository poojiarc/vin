export interface ServiceData {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  subServices: string[];
  icon: string;
}

export interface IndustryData {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  challenges: string[];
  solutions: string[];
  icon: string;
}

export const services: ServiceData[] = [
  {
    slug: "it-staffing-solutions",
    title: "IT Staffing Solutions",
    shortDescription: "Connect with top-tier IT talent for your technology needs.",
    description: "We provide comprehensive IT staffing solutions to help organizations find the right technology professionals. From contract positions to permanent placements, we source candidates with expertise in the latest technologies.",
    subServices: ["Contract / C2C / W2 Hiring", "Permanent Placements", "Niche & Emerging Technologies", "End-to-End Recruitment Support", "Cloud & DevOps Staffing", "Cybersecurity Talent Acquisition"],
    icon: "Monitor",
  },
  {
    slug: "non-it-corporate-staffing",
    title: "Non-IT & Corporate Staffing",
    shortDescription: "Professional staffing for corporate and non-technical roles.",
    description: "Our non-IT staffing solutions cover a wide range of corporate positions including finance, HR, marketing, operations, and administrative roles. We find professionals who drive business excellence.",
    subServices: ["Finance & Accounting", "Human Resources", "Marketing & Sales", "Administrative Support", "Operations Management", "Executive Search"],
    icon: "Building2",
  },
  {
    slug: "healthcare-staffing",
    title: "Healthcare Staffing",
    shortDescription: "Specialized staffing for the healthcare industry.",
    description: "We connect healthcare facilities with qualified medical professionals. Our healthcare staffing solutions ensure compliance, quality, and reliability for hospitals, clinics, and healthcare organizations.",
    subServices: ["Registered Nurses (RN)", "Licensed Practical Nurses (LPN)", "Medical Technologists", "Pharmacy Staff", "Healthcare IT Specialists", "Medical Administrative Staff"],
    icon: "Heart",
  },
  {
    slug: "mechanical-engineering-staffing",
    title: "Mechanical & Engineering Staffing",
    shortDescription: "Engineering talent for manufacturing and industrial sectors.",
    description: "We source skilled mechanical and engineering professionals for manufacturing, construction, and industrial projects. Our candidates bring hands-on experience and technical expertise.",
    subServices: ["Mechanical Engineers", "Civil Engineers", "Electrical Engineers", "CAD/CAM Specialists", "Quality Control Engineers", "Project Managers"],
    icon: "Wrench",
  },
  {
    slug: "pharmaceutical-life-sciences",
    title: "Pharmaceutical & Life Sciences Staffing",
    shortDescription: "Talent solutions for pharma, biotech, and life sciences.",
    description: "We serve the pharmaceutical and life sciences industries with highly specialized talent. From R&D scientists to regulatory affairs professionals, we understand the unique requirements of this sector.",
    subServices: ["Research Scientists", "Clinical Research Associates", "Regulatory Affairs Specialists", "Quality Assurance", "Pharmacovigilance", "Medical Writers"],
    icon: "FlaskConical",
  },
  {
    slug: "aerospace-specialized-hiring",
    title: "Aerospace & Specialized Hiring",
    shortDescription: "Expert staffing for aerospace and defense industries.",
    description: "Our aerospace staffing solutions provide cleared and specialized professionals for defense contractors, aerospace manufacturers, and government agencies.",
    subServices: ["Aerospace Engineers", "Avionics Technicians", "Quality Inspectors", "Program Managers", "Systems Engineers", "Defense Cleared Personnel"],
    icon: "Plane",
  },
  {
    slug: "federal-government-staffing",
    title: "Federal & Government Staffing (US)",
    shortDescription: "Compliant staffing solutions for US federal agencies.",
    description: "We provide staffing solutions for US federal agencies and government contractors, ensuring compliance with all regulatory requirements including security clearances and certifications.",
    subServices: ["Cleared IT Professionals", "Administrative Support", "Program & Project Management", "Cybersecurity Specialists", "Data Analytics", "Compliance Officers"],
    icon: "Landmark",
  },
  {
    slug: "payroll-workforce-management",
    title: "Payroll & Workforce Management",
    shortDescription: "Comprehensive payroll and workforce management services.",
    description: "Streamline your workforce operations with our payroll management services. We handle everything from payroll processing to compliance, benefits administration, and workforce analytics.",
    subServices: ["Payroll Processing", "Tax Compliance", "Benefits Administration", "Time & Attendance", "Workforce Analytics", "Vendor Management"],
    icon: "Calculator",
  },
  {
    slug: "contractor-c2c-services",
    title: "Contractor & C2C Services",
    shortDescription: "Flexible contractor and Corp-to-Corp engagement models.",
    description: "We facilitate seamless contractor and C2C engagements, managing all aspects from contract negotiations to compliance, enabling businesses to scale their workforce efficiently.",
    subServices: ["C2C Placements", "1099 Contractor Management", "W2 Contract Staffing", "Contract Negotiations", "Compliance Management", "Vendor Partnerships"],
    icon: "Handshake",
  },
  {
    slug: "bench-sales-candidate-marketing",
    title: "Bench Sales & Candidate Marketing",
    shortDescription: "Marketing and placement of bench consultants.",
    description: "Our bench sales team actively markets your consultants to potential clients, ensuring maximum utilization and revenue. We leverage our extensive network to find the best opportunities.",
    subServices: ["Consultant Marketing", "Client Relationship Management", "Rate Negotiations", "Interview Coordination", "Placement Support", "Market Analysis"],
    icon: "TrendingUp",
  },
  {
    slug: "onboarding-documentation",
    title: "Onboarding & Documentation",
    shortDescription: "Seamless onboarding and documentation management.",
    description: "We streamline the onboarding process with comprehensive documentation management, background verification, and compliance checks to ensure a smooth start for every hire.",
    subServices: ["Background Verification", "I-9 & E-Verify", "Drug Screening Coordination", "Benefits Enrollment", "IT Setup Coordination", "Orientation Programs"],
    icon: "FileCheck",
  },
  {
    slug: "exit-full-final-services",
    title: "Exit & Full-and-Final Services",
    shortDescription: "Complete exit management and settlement services.",
    description: "Our exit management services ensure a smooth separation process, including final settlements, asset recovery, knowledge transfer, and compliance with all regulatory requirements.",
    subServices: ["Final Settlement Processing", "Asset Recovery", "Knowledge Transfer", "Exit Interviews", "Compliance Documentation", "Benefits Continuation (COBRA)"],
    icon: "LogOut",
  },
];

export const industries: IndustryData[] = [
  {
    slug: "information-technology",
    title: "Information Technology",
    shortDescription: "Digital transformation and IT staffing solutions.",
    description: "We help IT companies find top talent for software development, cloud computing, cybersecurity, data science, and emerging technologies.",
    challenges: ["Rapid technology evolution", "Talent shortage in emerging tech", "High turnover rates", "Need for specialized skills"],
    solutions: ["Access to pre-vetted IT professionals", "Quick turnaround on critical positions", "Expertise in niche technologies", "Scalable team augmentation"],
    icon: "Code",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    shortDescription: "Medical and healthcare workforce solutions.",
    description: "Supporting hospitals, clinics, and healthcare organizations with qualified medical professionals and administrative staff.",
    challenges: ["Staff shortages", "Regulatory compliance", "24/7 staffing needs", "Specialized certifications required"],
    solutions: ["Credentialed healthcare professionals", "Compliance-ready placements", "Flexible shift staffing", "Rapid response to urgent needs"],
    icon: "Heart",
  },
  {
    slug: "banking-financial-services",
    title: "Banking & Financial Services",
    shortDescription: "Talent for banking, insurance, and fintech.",
    description: "We provide skilled professionals for the banking and financial services industry, from analysts to compliance officers.",
    challenges: ["Regulatory complexity", "Digital transformation", "Risk management needs", "Customer experience demands"],
    solutions: ["Compliance-aware professionals", "Fintech-ready talent", "Risk & audit specialists", "Customer-facing staff"],
    icon: "Landmark",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    shortDescription: "Skilled workforce for manufacturing operations.",
    description: "From production floor to C-suite, we staff manufacturing facilities with skilled workers, engineers, and managers.",
    challenges: ["Skills gap in workforce", "Automation transitions", "Quality control demands", "Supply chain complexity"],
    solutions: ["Skilled production workers", "Engineering professionals", "Quality assurance experts", "Supply chain specialists"],
    icon: "Factory",
  },
  {
    slug: "energy-utilities",
    title: "Energy & Utilities",
    shortDescription: "Staffing for energy, oil & gas, and utilities.",
    description: "We serve the energy sector with experienced professionals in oil & gas, renewables, power generation, and utility operations.",
    challenges: ["Energy transition workforce needs", "Safety compliance", "Remote location staffing", "Aging workforce"],
    solutions: ["Renewable energy specialists", "Safety-certified workers", "Remote site staffing", "Knowledge transfer programs"],
    icon: "Zap",
  },
  {
    slug: "retail-ecommerce",
    title: "Retail & E-Commerce",
    shortDescription: "Workforce solutions for retail and digital commerce.",
    description: "Supporting retail and e-commerce businesses with talent for operations, logistics, digital marketing, and customer service.",
    challenges: ["Seasonal demand fluctuations", "Digital transformation", "Supply chain optimization", "Customer experience"],
    solutions: ["Flexible seasonal staffing", "Digital commerce talent", "Logistics professionals", "Customer service teams"],
    icon: "ShoppingCart",
  },
  {
    slug: "telecommunications",
    title: "Telecommunications",
    shortDescription: "Talent for telecom and network infrastructure.",
    description: "We provide skilled professionals for telecommunications companies, from network engineers to customer support specialists.",
    challenges: ["5G rollout workforce", "Network security", "Customer retention", "Infrastructure expansion"],
    solutions: ["Network engineering talent", "Cybersecurity specialists", "Customer experience teams", "Field technicians"],
    icon: "Wifi",
  },
  {
    slug: "aerospace-defense",
    title: "Aerospace & Defense",
    shortDescription: "Cleared professionals for aerospace and defense.",
    description: "Specialized staffing for aerospace manufacturers and defense contractors with security-cleared professionals.",
    challenges: ["Security clearance requirements", "Specialized skill sets", "Regulatory compliance", "Project-based demands"],
    solutions: ["Cleared professionals", "Specialized engineers", "Compliance experts", "Scalable project teams"],
    icon: "Plane",
  },
];
