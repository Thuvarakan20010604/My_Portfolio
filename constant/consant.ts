// constant/consant.ts

// ===================== TYPES =====================
export type NavLink = {
  id: number;
  url: string;
  label: string;
};

export type ServiceItem = {
  id: number;
  icon: string;
  name: string;
  description: string;
};

export type ResumeItem = {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
};

export type ProjectItem = {
  id: number;
  image: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
};

export type SkillItem = {
  id: number;
  name: string;
  level: number;
};

// ===================== NEW TYPES =====================
export type CertificateItem = {
  id: number;
  image: string; // e.g. "images/certificates/c1.jpg"
  title: string;
  issuer: string; // e.g. "Coursera"
  date: string; // e.g. "2025"
  credentialUrl?: string;
};

export type AwardItem = {
  id: number;
  image: string; // e.g. "images/awards/a1.jpg"
  title: string;
  organization: string;
  date: string;
  description: string;
};

export type VolunteerItem = {
  id: number;
  role: string;
  organization: string;
  period: string;
  location?: string;
  highlights: string[];
  image?: string; // optional (photo)
};

export type FutureProjectItem = {
  id: number;
  title: string;
  description: string;
  plannedStack: string[];
  status: "Planned" | "In Progress" | "Researching";
  eta?: string;
};

export type LanguageItem = {
  id: number;
  name: string;
  level: "Native" | "Fluent" | "Professional" | "Intermediate" | "Basic";
  note?: string;
};

// ===================== NAV LINKS =====================
export const NavLinks: NavLink[] = [
  { id: 1, url: "#home", label: "Home" },
  { id: 2, url: "#services", label: "Focus" },
  { id: 3, url: "#resume", label: "Resume" },
  { id: 4, url: "#projects", label: "Projects" },
  { id: 5, url: "#skills", label: "Skills" },

  // ✅ NEW SECTIONS
  { id: 6, url: "#certificates", label: "Certificates" },
  { id: 7, url: "#awards", label: "Awards" },
  { id: 8, url: "#volunteering", label: "Volunteering" },
  { id: 9, url: "#future", label: "Future" },
  { id: 10, url: "#languages", label: "Languages" },

  { id: 11, url: "#contact", label: "Contact" },
];

// ===================== SERVICES =====================
export const servicesData: ServiceItem[] = [
  {
    id: 1,
    icon: "images/s2.png",
    name: "Full-Stack Web Development",
    description:
      "Next.js + TypeScript apps with clean UI, reliable APIs, and scalable database design.",
  },
  {
    id: 2,
    icon: "images/s1.png",
    name: "Mobile Apps",
    description:
      "Flutter applications with modern UI, local persistence, and maintainable architecture.",
  },
  {
    id: 3,
    icon: "images/s3.png",
    name: "Secure Systems & Testing",
    description:
      "Security-minded engineering with validation, safe flows, and API testing (Postman).",
  },
  {
    id: 4,
    icon: "images/s4.png",
    name: "Blockchain & Research Prototyping",
    description:
      "Permissioned blockchain designs, PBFT concepts, and tamper-evident data workflows.",
  },
];

// ===================== EXPERIENCE =====================
export const experienceData: ResumeItem[] = [
  {
    id: 1,
    title: "Team Leader & Full-Stack Developer",
    organization: "Olir-Studios (Team Project)",
    period: "Jan 2025 – Nov 2025",
    description:
      "Built a Next.js + MongoDB system with Clerk authentication, modern UI (shadcn/ui), APIs, testing, and ClickUp-based coordination.",
  },
  {
    id: 2,
    title: "Science Union Secretary",
    organization: "Faculty of Science, University of Jaffna",
    period: "Jan 2025 – Jan 2026",
    description:
      "Coordinated faculty activities, student engagement programmes, internal communications, and event documentation.",
  },
  {
    id: 3,
    title: "Leo Club Leadership (Multiple Roles)",
    organization: "Leo Club of Nallur, Leo District 306 D12",
    period: "Jun 2021 – Present",
    description:
      "Led club operations across roles (President, Vice President, Treasurer, Regional Chairperson) and delivered community projects.",
  },
  {
    id: 4,
    title: "Editorial Commitee Member",
    organization: "IEEE, University of Jaffna",
    period: "Jan 2023 – Jan 2024",
    description:
      "Create Posters and Flyers for Special Events",
  },
];

// ===================== EDUCATION =====================
export const educationData: ResumeItem[] = [
  {
    id: 1,
    title: "BSc (Hons) in Computer Science — CGPA 3.7/4.0",
    organization: "University of Jaffna",
    period: "Jun 2022 – Present",
    description:
      "Undergraduate study focused on full-stack development, mobile engineering, secure systems, and project delivery.",
  },
  {
    id: 2,
    title: "G.C.E. Advanced Level (Mathematics Stream)",
    organization: "Jaffna Hindu College, Jaffna",
    period: "2020",
    description: "Results: 1A, 2B — Z-score: 1.301.",
  },
];

// ===================== PROJECTS =====================
export const projectsData: ProjectItem[] = [
  {
    id: 1,
    image: "images/p1.jpg",
    title: "Blockchain-Based Secure Election System",
    description:
      "Permissioned blockchain voting design with PBFT concepts and TECV to detect manipulation, with biometric authentication and audit-friendly vote storage.",
    tags: ["Blockchain", "PBFT", "CouchDB", "Security"],
    liveUrl:
      "https://github.com/Thuvarakan20010604/Advanced_Election_System.git",
    codeUrl:
      "https://github.com/Thuvarakan20010604/Advanced_Election_System.git",
  },
  {
    id: 2,
    image: "images/p2.jpg",
    title: "Company Management System (Olir-Studios)",
    description:
      "Full-stack system with Clerk auth, modern UI components, APIs, database integration, and end-to-end testing. Includes real-time chat support.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Clerk"],
    liveUrl: "#",
    codeUrl: "https://github.com/ShiyamalanK/olir-suite.git",
  },
  {
    id: 3,
    image: "images/p3.jpg",
    title: "Efficient OGPA Calculator",
    description:
      "Flutter app to calculate SGPA/OGPA using credit-weighted formula with semester tracking, grade-to-point conversion, validation, and local persistence.",
    tags: ["Flutter", "Dart", "Local Storage", "UI"],
    liveUrl:
      "https://www.linkedin.com/posts/lingam-thuvarakan-226b37292_flutter-mobiledevelopment-uiux-activity-7420811866727276544-ow7Z?utm_source=share&utm_medium=member_android&rcm=ACoAAEcAx34BLVYHTAFixA0dJM_aS2d4YkeYbM8",
    codeUrl: "https://github.com/Thuvarakan20010604/OGPA_Calculator.git",
  },
  {
    id: 4,
    image: "images/p4.jpg",
    title: "Vaultora — Offline Digital Wallet",
    description:
      "Personal finance tracker with Hive storage, CRUD income/expense, 7-day cashflow chart, savings pots with goal tracking, and bank account management.",
    tags: ["Flutter", "Hive", "Analytics", "Finance"],
    liveUrl:
      "https://www.linkedin.com/posts/lingam-thuvarakan-226b37292_excited-to-announce-the-launch-of-vaultora-activity-7431394776631005184-UsY2?utm_source=share&utm_medium=member_android&rcm=ACoAAEcAx34BLVYHTAFixA0dJM_aS2d4YkeYbM8",
    codeUrl:
      "https://github.com/Thuvarakan20010604/My_Digital_Wallet.git",
  },
  {
    id: 5,
    image: "images/p5.jpg",
    title: "Personal AI Desktop Assistant (Jarvis-Inspired)",
    description:
      "Windows voice assistant running as a background service with wake-word detection, speech recognition, safe command handling, and modular skills.",
    tags: ["Python", "Windows Service", "Speech", "Automation"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 6,
    image: "images/p6.jpg",
    title: "Restaurant POS System (JeyaFood)",
    description:
      "Next.js + MongoDB POS supporting dine-in and cash-on-delivery workflows, role-based access, receipts, daily reporting, and audit logging.",
    tags: ["Next.js", "MongoDB", "RBAC", "POS"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 7,
    image: "images/p7.png",
    title: "Cheat-Shield (Online Exams Fraud Prevention System)",
    description:
      "Online-exam fraud prevention platform with Next.js admin portal, MongoDB, and Python client/service modules.",
    tags: ["Next.js", "MongoDB", "Python"],
    liveUrl: "#",
    codeUrl: "#",
  },
];

// ===================== SKILLS =====================
export const skillsData: SkillItem[] = [
  { id: 1, name: "Next.js / React", level: 90 },
  { id: 2, name: "TypeScript / JavaScript", level: 88 },
  { id: 3, name: "Flutter / Dart", level: 90 },
  { id: 4, name: "MongoDB / MySQL", level: 82 },
  { id: 5, name: "Java / Python", level: 78 },
  { id: 6, name: "Postman / API Testing", level: 80 },
  { id: 7, name: "Git / GitHub", level: 85 },
  { id: 8, name: "Docker / Linux", level: 70 },
];

// ===================== CERTIFICATES =====================
export const certificatesData: CertificateItem[] = [
  {
    id: 1,
    image: "images/c1.png",
    title: "Leadership Training Programme",
    issuer: "Leo Club of Nallur",
    date: "2024",
    credentialUrl: "https://www.linkedin.com/posts/lingam-thuvarakan-226b37292_experience-opportunities-timetolead-activity-7245854370003595264-v3VO?utm_source=share&utm_medium=member_android&rcm=ACoAAEcAx34BLVYHTAFixA0dJM_aS2d4YkeYbM8",
  },
  {
    id: 2,
    image: "images/c1.png",
    title: "Java Programming",
    issuer: "Alison",
    date: "2024",
    credentialUrl: "https://alison.com/certification/check/2y10INgwjdo1DqG13bxbAmlbIObnlDivzdPp9qhJEWmA32JTGT2fUhBsq",
  },
  {
    id: 3,
    image: "images/c1.png",
    title: "Python Basics for Data Science",
    issuer: "edX",
    date: "2024",
    credentialUrl: "https://courses.edx.org/certificates/297de8b6d1b543b1923c192ab72faacc",
  },
  {
    id: 4,
    image: "images/c1.png",
    title: "Puthon Programming Level 1",
    issuer: "University of Moratuwa",
    date: "2023",
    credentialUrl: "https://open.uom.lk/verify",
  },
  {
    id: 5,
    image: "images/c1.png",
    title: "Diploma in Digital Forensic Investigation",
    issuer: "Alison",
    date: "2023",
    credentialUrl: "https://alison.com/certification/check/2y10VbLI0stSuOyUUQxcEDmecuDGp9VppTy8XXTJBeOaNG5tySTBPC8a",
  },
];

// ===================== AWARDS =====================
export const awardsData: AwardItem[] = [
  {
    id: 1,
    image: "images/a1.jpg",
    title: "Volleyball - 2nd Runners-up",
    organization: " SLUG",
    date: "2022",
    description: "We git a place for the firsttime in SLUG",
  },
  {
    id: 2,
    image: "images/a2.jpg",
    title: "Top 10 Leos Awards - Leo District 306 B1 (District Conference 2022)",
    organization: "Leo District 306 B1",
    date: "2022",
    description: "In our Leo District 306 B1 gave this awards for outstanding performance in district level",
  },
  {
    id: 3,
    image: "images/a3.jpg",
    title: "Most Outstanding Vice-President - Leo District 306 B1 - 2nd Runner-up (District Conference 2023) )",
    organization: "Leo District 306 B1",
    date: "2023",
    description: "In our Leo District 306 B1 gave this awards for outstanding performance in our Leo club of Nallur",
  },
  {
    id: 4,
    image: "images/a4.jpg",
    title: "Provincial Weightlifting Competiton - Under 17 - Runner-up",
    organization: "Northern Province",
    date: "2017",
    description: "School Level U-17 Competition",
  },
  {
    id: 5,
    image: "images/a5.jpg",
    title: "IEEE Xtreme Programming Competition Participation",
    organization: "IEEE",
    date: "2023",
    description: "This for the participation",
  },
];

// ===================== VOLUNTEERING =====================
export const volunteeringData: VolunteerItem[] = [
  {
    id: 1,
    role: "President / Vice President / Treasurer / Regional Chairperson",
    organization: "Leo Club of Nallur (Leo District 306 D12)",
    period: "Jun 2021 – Present",
    location: "Sri Lanka",
    highlights: [
      "Led community service initiatives and coordinated events.",
      "Managed funds, reporting, and stakeholder communication.",
      "Organized volunteer teams and delivered community projects.",
    ],
    image: "images/v1.jpg",
  },
  {
    id: 2,
    role: "Leo- Lion Member",
    organization: "Leo Club of Nallur (Leo District 306 D12)",
    period: "December 2025 – Present",
    location: "Sri Lanka",
    highlights: [
      "Led community service initiatives and coordinated events.",
      "Managed funds, reporting, and stakeholder communication.",
      "Organized volunteer teams and delivered community projects.",
    ],
    image: "images/v2.jpg",
  },


];

// ===================== FUTURE PROJECTS =====================
export const futureProjectsData: FutureProjectItem[] = [
  {
    id: 1,
    title: "Automated QA Testing Platform (VS Code Integrated",
    description:
      "Designing an intelligent QA platform integrated with Visual Studio Code that detects forms/inputs and auto-generates validation test cases.",
    plannedStack: ["Python"],
    status: "Planned",
    eta: "2026",
  },
  {
    id: 2,
    title: " ServiceHub– Location-Based Multi-Vendor Services Marketplace",
    description:
      "Designing a location-based marketplace enabling customers to request services and receive structured quotations from multiple providers.",
    plannedStack: ["Next.js", "MongoDB", "Clerk"],
    status: "Researching",
    eta: "2026",
  },
];

// ===================== LANGUAGES =====================
export const languagesData: LanguageItem[] = [
  { id: 1, name: "Tamil", level: "Native", note: "Comfortable in interviews, presentations & documentation", },
  {
    id: 2,
    name: "English",
    level: "Professional",
    note: "Comfortable in interviews, presentations & documentation",
  },
  
];