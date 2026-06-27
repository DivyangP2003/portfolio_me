export type ProjectCategory = "all" | "fullstack" | "ai" | "data" | "civil" | "research";

export interface Project {
  name: string;
  description: string;
  stack: string[];
  category: ProjectCategory;
  featured: boolean;
  tier?: string;
  github?: string;
  demo?: string;
  image?: string;
  images?: string[];
  overview?: string;
  highlights?: string[];
}

export interface EducationEntry {
  degree: string;
  field?: string;
  institute: string;
  period: string;
  cgpa?: string;
  rank?: string;
  coursework?: string[];
  sortYear: number;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location?: string;
  highlights: string[];
  tags: string[];
  sortYear: number;
  report?: string;
}

/** WordPress mshots — free webpage thumbnails for live demos */
export function demoScreenshotUrl(demo: string): string {
  const url = demo.startsWith("http") ? demo : `https://${demo}`;
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1200`;
}

export function getProjectImage(project: Project): string {
  if (project.image) return project.image;
  if (project.demo) return demoScreenshotUrl(project.demo);
  const fallbacks: Partial<Record<ProjectCategory, string>> = {
    fullstack: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    data: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    civil: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
    research: "/thesis/figures/fig_p18_0.png",
  };
  return fallbacks[project.category] ?? fallbacks.fullstack!;
}

// ─────────────────────────────────────────────────────────────
// PROFILE
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Divyang Deepak Palshetkar",
  shortName: "Divyang Palshetkar",

  // Shown under the name in the hero — one tight line
  title: "Environmental Engineer · Full-Stack Developer · Climate Modeller",

  // Hero body copy — replaces the old vague one-liner
  tagline:
    "I simulate wildfires at 1 km resolution and ship production AI applications. Research-grade atmospheric science meets full-stack engineering.",

  location: "IIT Jodhpur, Rajasthan, India",
  email: "palshetkardivyang@gmail.com",
  academicEmail: "palshetkar.1@iitj.ac.in",
  phone: "+91-9359849585",
  github: "https://github.com/DivyangP2003",
  linkedin: "https://www.linkedin.com/in/divyang-palshetkar23",
  image: "/images/profile.jpeg",
  imageCutout: "/images/Divyang_withoutbg.png",

  // Used in About section highlights / sidebar
  highlights: [
    "Dept. Rank 1 — B.Tech–M.Tech Dual Degree, IIT Jodhpur",
    "M.Tech CGPA 9.5 / 10 · B.Tech CGPA 8.3 / 10",
    "First high-resolution WRF-Chem-Fire simulation of a major Indian Himalayan wildfire",
    "7+ deployed full-stack and AI applications on Vercel & Streamlit",
  ],

  // About section — three paragraphs replacing the old casual copy
  about: [
    "I'm a dual-degree engineer from IIT Jodhpur (Dept. Rank 1, Civil & Environmental Engineering). My research operates at the intersection of atmospheric science and geospatial intelligence — my M.Tech thesis delivers the first high-resolution coupled WRF-Chem-Fire simulation of the April 2024 Champawat–Purnagiri wildfire, executed on HPC infrastructure at 1 km resolution.",
    "Alongside research, I design and ship full-stack AI applications — a telemedicine platform, a personal finance tool with receipt OCR, a multi-agent financial analytics system, and more. All are deployed and publicly accessible.",
    "I have worked across government research and industry: AICOE (Ministry of Education), Jal Jeevan Mission (Ministry of Jal Shakti), and EEKI Foods. I am actively seeking roles in climate risk modelling, environmental data science, geospatial analytics, or full-stack AI engineering.",
  ],

  // Status pill shown in hero / about — update when no longer current
  status: "Completing M.Tech thesis · Available June 2026",
};

// ─────────────────────────────────────────────────────────────
// METRICS (About section stat pills)
// ─────────────────────────────────────────────────────────────

export const metrics = [
  { value: "1 km", label: "Wildfire simulation resolution" },
  { value: "470 km²", label: "Simulated burnt area" },
  { value: "500+", label: "Tickers in AI finance platform" },
  { value: "150+ hr", label: "Traffic footage analysed (AICOE)" },
  { value: "Rank 1", label: "Dept., B.Tech–M.Tech — IIT Jodhpur" },
  { value: "9.5 / 8.3", label: "M.Tech · B.Tech CGPA" },
];

// ─────────────────────────────────────────────────────────────
// FILTERS
// ─────────────────────────────────────────────────────────────

export const categoryFilters: { key: ProjectCategory; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "fullstack", label: "Full Stack" },
  { key: "ai", label: "AI / ML" },
  { key: "data", label: "Data Engineering" },
  { key: "civil", label: "Civil / GIS" },
  { key: "research", label: "Research" },
];

// ─────────────────────────────────────────────────────────────
// EDUCATION
// ─────────────────────────────────────────────────────────────

export const education: EducationEntry[] = [
  {
    degree: "M.Tech",
    field: "Environmental Engineering",
    institute: "Indian Institute of Technology Jodhpur",
    period: "2025 – 2026",
    cgpa: "CGPA 9.5 / 10",
    rank: "Department Rank 1",
    sortYear: 2026,
    coursework: [
      "Air Pollution & Control",
      "Climate Change & Impact",
      "WRF-Chem-Fire Modelling",
    ],
  },
  {
    degree: "B.Tech",
    field: "Civil & Infrastructure Engineering",
    institute: "Indian Institute of Technology Jodhpur",
    // Corrected: dual degree runs 2021–2026, not 2021–2025
    period: "2021 – 2026",
    cgpa: "CGPA 8.3 / 10",
    rank: "Department Rank 1",
    sortYear: 2025,
    coursework: [
      "Geo-informatics / GIS",
      "AI/ML in Infrastructure Engineering",
      "Water Resources Engineering",
      "Environmental Engineering",
    ],
  },
  {
    degree: "Senior Secondary (Class XII)",
    field: "Science Stream · CBSE",
    institute: "Jaipuriar School, Navi Mumbai",
    period: "2020",
    cgpa: "94.6%",
    sortYear: 2020,
  },
  {
    degree: "Secondary (Class X)",
    field: "CBSE",
    institute: "Jindal Vidya Mandir Salav",
    period: "2018",
    cgpa: "97.4%",
    sortYear: 2018,
  },
];

// ─────────────────────────────────────────────────────────────
// EXPERIENCE
// All bullets rewritten: active voice, specific outcomes,
// no unexplained jargon, no vague "improving efficiency" endings.
// ─────────────────────────────────────────────────────────────

export const experience: ExperienceEntry[] = [
  {
    role: "Civil Engineer",
    company: "EEKI Foods",
    period: "Mar 2025 – May 2025",
    sortYear: 2025,
    location: "Nashik, India",
    highlights: [
      "Led GIS-based flood risk assessment combining hydraulic modelling and spatial exposure analysis, reducing mapped hazard zones by 32% through improved exposure delineation.",
      "Produced terrain models, grading plans, and stormwater drainage designs in Civil 3D and ArcGIS, supporting infrastructure adaptation planning decisions.",
      "Ensured regulatory compliance across drainage and conveyance system design; documented technical outputs clearly for both engineering and management stakeholders.",
    ],
    tags: ["GIS", "Civil 3D", "ArcGIS", "Flood Risk", "HEC-RAS"],
  },
  {
    role: "AI Research & Data Analysis Intern",
    company: "AICOE Project, Ministry of Education",
    period: "May 2024 – Jul 2024",
    sortYear: 2024,
    location: "IIT Jodhpur",
    highlights: [
      "Built a large-scale analytics and computer vision pipeline processing 150+ hours of traffic footage from 16 smart-city locations, automatically extracting vehicle counts, speeds, and congestion patterns.",
      "Applied statistical modelling, clustering, and anomaly detection to identify urban traffic behaviour patterns, supporting data-driven mobility planning across multiple sites.",
      "Explored generative AI and agent-based digital twin approaches to simulate traffic flow for predictive infrastructure planning.",
    ],
    tags: ["Computer Vision", "Python", "Statistical Modelling", "Generative AI"],
  },
  {
    role: "Engineering Intern",
    company: "Jal Jeevan Mission, Ministry of Jal Shakti",
    period: "May 2024 – Jul 2024",
    sortYear: 2024,
    location: "Rajasthan",
    highlights: [
      "Conducted GPS/QGIS-based geospatial field mapping across 40+ dry borewell sites in multiple districts of Rajasthan, delineating watershed catchment areas using SRTM DEM data.",
      "Designed 3D filtration models (vertical and horizontal recharge structures) for artificial groundwater replenishment, improving recharge efficiency by 24.6%.",
      "Developed REST APIs integrating GPS-collected field data with an analytics dashboard; prepared a structured technical report submitted for government review.",
    ],
    tags: ["QGIS", "GPS", "Watershed Delineation", "REST API", "Water Resources"],
    report: "/resumes/JJM_Internship_Report.pdf",
  },
];

// ─────────────────────────────────────────────────────────────
// CIVIL / GIS / RESEARCH PROJECTS
// Descriptions: active voice, specific outcomes, no unexplained acronyms.
// ─────────────────────────────────────────────────────────────

export const civilProjects: Project[] = [
  {
    name: "Urban Flood & Drainage Modelling",
    description:
      "HEC-RAS hydraulic modelling and GIS spatial analysis for urban stormwater systems — improved drainage capacity by 27% and reduced construction earthwork by 19% through optimised conveyance design.",
    overview:
      "A civil design study for urban stormwater management. HEC-RAS hydraulic modelling paired with GIS terrain data to size drainage channels, optimise conveyance capacity, and reduce earthwork volumes on a real site layout.",
    highlights: [
      "27% improvement in drainage capacity through conveyance redesign",
      "19% reduction in earthwork via terrain-aware grading",
      "Integrated HEC-RAS, Civil 3D, and ArcGIS workflow",
    ],
    stack: ["HEC-RAS", "AutoCAD", "Civil 3D", "ArcGIS"],
    category: "civil",
    featured: true,
    image: "/thesis/figures/fig_p46_0.png",
    images: ["/thesis/figures/fig_p46_0.png", "/thesis/figures/fig_p50_0.png"],
  },
  {
    name: "Wildfire Risk Mapping & Fire Weather Analysis",
    description:
      "Automated Python pipelines for ERA5 climate data ingestion, fire weather index computation, MODIS land cover integration, and spatially explicit fire hazard exposure mapping in ArcGIS/QGIS.",
    overview:
      "Pre-thesis GIS work that fed directly into the WRF-Chem-Fire research — pulling ERA5 reanalysis, computing fire weather indices, and mapping hazard exposure across complex Himalayan terrain in ArcGIS/QGIS.",
    highlights: [
      "Automated ERA5 NetCDF ingestion and fire weather index derivation",
      "Spatially explicit hazard exposure maps stratified by fuel type and terrain gradient",
      "MODIS land cover integration validated against NASA FIRMS satellite data",
    ],
    stack: ["Python", "ArcGIS", "QGIS", "ERA5", "NetCDF", "Remote Sensing"],
    category: "research",
    featured: true,
    image: "/thesis/figures/fig_p18_0.png",
    images: ["/thesis/figures/fig_p18_0.png", "/thesis/figures/fig_p60_0.png"],
  },
  {
    name: "Construction Project Monitoring System",
    description:
      "Multi-sheet Excel-based project management system integrating daily progress reports, work breakdown structure, manpower, materials, QC, safety, and Earned Value Analysis — with automated dashboards for planned vs. actual variance.",
    overview:
      "A practical site-management workbook for tracking daily progress, manpower, materials, QC, and safety alongside Earned Value metrics — the kind of integrated system used by site engineers every morning.",
    highlights: [
      "Integrated DPR, WBS, and Earned Value Analysis across linked sheets",
      "Automated dashboards for planned vs. actual progress and cost variance",
      "QC and safety incident logging with consolidated summary roll-ups",
    ],
    stack: ["Advanced Excel", "Earned Value Management", "Project Management"],
    category: "civil",
    featured: true,
    image: "/projects/construction-monitoring.png",
    images: ["/projects/construction-monitoring.png"],
  },
  {
    name: "Residential Building Design (G+1)",
    description:
      "Complete architectural design package — floor plans, elevations, and sectional drawings — with an accurate 3D model built in AutoCAD 3D.",
    overview:
      "End-to-end G+1 residential design: floor plans, elevations, sections, and a detailed 3D AutoCAD model. Full drawing set documented and published on GitHub.",
    highlights: [
      "Complete architectural drawing set: plan, elevation, and section views",
      "Accurate 3D model constructed in AutoCAD 3D",
      "GitHub repository with full design documentation",
    ],
    stack: ["AutoCAD 3D", "Architectural Design"],
    category: "civil",
    github: "https://github.com/DivyangP2003/Residential-Building-Design-using-AutoCAD-3D",
    featured: true,
    image: "/projects/residential-building.png",
    images: ["/projects/residential-building.png"],
  },
  {
    name: "VastuShastra-Compliant Bungalow (3D)",
    description:
      "Ground floor plan designed in AutoCAD Civil 3D following VastuShastra spatial principles, then converted to a detailed textured 3D model in SketchUp Pro.",
    overview:
      "A Vastu-compliant bungalow design — Civil 3D for floor planning with traditional layout rules, then a fully textured SketchUp Pro 3D model for spatial visualisation. Published on GitHub.",
    highlights: [
      "VastuShastra spatial compliance integrated into Civil 3D layout",
      "Realistic textured 3D model produced in SketchUp Pro",
      "Full design documentation on GitHub",
    ],
    stack: ["AutoCAD Civil 3D", "SketchUp Pro"],
    category: "civil",
    github: "https://github.com/DivyangP2003/VastuShastra-Compliant-Residential-Bungalow-Design-in-3D",
    featured: true,
    image: "/projects/vastu-bungalow.png",
    images: ["/projects/vastu-bungalow.png"],
  },
  {
    name: "Building Energy Efficiency & Fire Safety Audit",
    description:
      "HVAC thermal load estimation using degree-day analysis and a fire safety compliance audit across G+3 academic facilities benchmarked against NBC 2016 standards.",
    overview:
      "Energy and life-safety audit for G+3 academic buildings — HDD/CDD-based HVAC load estimation alongside NBC 2016 fire safety compliance review covering egress, detection, and suppression systems.",
    highlights: [
      "Heating and cooling degree-day based HVAC thermal load estimation",
      "NBC 2016 fire safety compliance audit across egress, detection, and suppression",
      "G+3 academic facility case study with documented findings",
    ],
    stack: ["Energy Audit", "NBC 2016", "HVAC Analysis", "Fire Safety"],
    category: "civil",
    featured: true,
    image: "/projects/energy-audit.png",
    images: ["/projects/energy-audit.png"],
  },
];

// ─────────────────────────────────────────────────────────────
// DEV / AI / DATA PROJECTS
// Descriptions: lead with what it does, follow with what makes it interesting.
// Overviews: first person, direct — as if explaining to a technical interviewer.
// ─────────────────────────────────────────────────────────────

export const devProjects: Project[] = [
  {
    name: "AI Finance Agent LLM",
    description:
      "Multi-agent financial analysis platform — 6 specialised AI agents across 500+ tickers, delivering VaR/CVaR risk metrics, stress testing, and 5,000+ Efficient Frontier simulations with automated narrative reports.",
    overview:
      "Six LangChain agents orchestrated around a Streamlit interface — market, sentiment, fundamentals, risk, portfolio, and an orchestrator — analysing 500+ tickers with VaR/CVaR, stress tests, and Efficient Frontier plots. Gemini 2.0 drives chart explanation and narrative generation.",
    highlights: [
      "6 specialised AI agents with orchestrated multi-step workflows",
      "500+ tickers — VaR, CVaR, drawdowns, beta, stress testing, Efficient Frontier",
      "LLM-generated chart explanations and automated analytical reports",
      "Live on Streamlit with Gemini 2.0 + Plotly interactive dashboards",
    ],
    stack: ["Python", "Streamlit", "LangChain", "Gemini 2.0", "Plotly", "Statsmodels"],
    category: "ai",
    tier: "Production-ready",
    github: "https://github.com/DivyangP2003/ai_finance_agent_llm",
    demo: "https://aifinanceagentllm.streamlit.app/",
    featured: true,
    image: "/projects/ai-finance-dashboard.png",
    images: ["/projects/ai-finance-dashboard.png", "/projects/ai-finance-overview.png"],
  },
  {
    name: "ExpensIQ",
    description:
      "Full-stack AI personal finance platform — Gemini-powered receipt OCR, multi-account budgeting, recurring transaction automation, and real-time budget alerts via Inngest.",
    overview:
      "Personal finance app built for real use — track income and expenses across multiple accounts, scan receipts with Gemini AI OCR for automatic transaction entry, configure recurring rules, and receive budget alerts before overspending. Deployed on Vercel with Prisma + Supabase.",
    highlights: [
      "Gemini AI receipt OCR for automatic transaction categorisation",
      "Multi-account budgeting with daily and monthly views",
      "Recurring transaction automation and real-time budget alerts via Inngest + Resend",
      "Clerk authentication, Arcjet bot protection, deployed on Vercel",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "Inngest", "Arcjet", "Gemini AI"],
    category: "fullstack",
    tier: "Production-ready",
    github: "https://github.com/DivyangP2003/expensiq",
    demo: "https://expensiq.vercel.app",
    featured: true,
    image: "/projects/expensiq-landing.png",
    images: ["/projects/expensiq-landing.png", "/projects/expensiq-dashboard.png", "/projects/expensiq-budget.png"],
  },
  {
    name: "PulseMeet",
    description:
      "End-to-end telemedicine platform — secure Vonage video consultations, real-time appointment scheduling, Stripe credit subscriptions, and role-separated flows for patients, doctors, and admins.",
    overview:
      "Doctors set availability, patients book slots and pay via Stripe credit plans, then join secure 1:1 Vonage encrypted video sessions. Separate admin flows handle doctor verification and payout management. Clerk authentication throughout.",
    highlights: [
      "Encrypted 1:1 Vonage video consultations",
      "Real-time appointment scheduling with doctor availability management",
      "Stripe credit-based subscription plans and doctor payout system",
      "Role-based access: Patients, Doctors, Admins — Clerk authentication",
    ],
    stack: ["Next.js", "Prisma", "Vonage Video API", "PostgreSQL", "Clerk", "Stripe"],
    category: "fullstack",
    tier: "Production-ready",
    github: "https://github.com/DivyangP2003/pulsemeet",
    demo: "https://pulsemeet.vercel.app",
    featured: true,
    image: "/projects/pulsemeet-landing.png",
    images: ["/projects/pulsemeet-landing.png", "/projects/pulsemeet-appointments.png"],
  },
  {
    name: "CookSmartAI",
    description:
      "AI culinary platform — recipe generation from available ingredients, custom weekly meal planning, nutritional analysis, AI-generated dish images, and exportable shopping lists.",
    overview:
      "One of my more feature-complete Next.js builds — generate recipes from whatever ingredients you have, construct weekly meal plans, calculate nutrition, produce dish images via Hugging Face and Pollination AI, and export shopping lists. Global recipe hub with favourites and sharing.",
    highlights: [
      "AI recipe generation from ingredients + custom weekly meal planning",
      "Nutritional analysis with exportable PDF summaries",
      "AI-generated dish images via Hugging Face and Pollination AI",
      "Global recipe hub with advanced filters, favourites, and sharing",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "Gemini AI", "Hugging Face"],
    category: "fullstack",
    tier: "Production-ready",
    github: "https://github.com/DivyangP2003/CookSmartAI",
    demo: "https://cook-smart-ai.vercel.app",
    featured: true,
    image: "/projects/cooksmart-1.png",
    images: [
      "/projects/cooksmart-1.png",
      "/projects/cooksmart-ai_recipegenerated.png",
      "/projects/cooksmart-generatedmealplan.png",
      "/projects/cooksmart-toprecipes_homepage.png",
    ],
  },
  {
    name: "DrawAI (iPad Math Clone)",
    description:
      "Browser-based interactive canvas for mathematical note-taking — freehand drawing, shape tools, grid/ruler system, TensorFlow.js equation recognition, and Gemini AI step-by-step analysis.",
    overview:
      "An iPad-style math canvas running entirely in the browser. Draw equations freehand, use shape tools and grids, get TensorFlow.js handwriting recognition, then ask Gemini to walk through the mathematical steps. Includes an analytics dashboard for session review.",
    highlights: [
      "Freehand canvas with grid, ruler, shape tools, and stroke tracking",
      "TensorFlow.js real-time mathematical expression recognition",
      "Gemini AI step-by-step problem analysis",
      "Analytics dashboard for session history — similar to a lightweight Power BI view",
    ],
    stack: ["React", "Next.js", "HTML Canvas", "TensorFlow.js", "Math.js", "Gemini AI"],
    category: "ai",
    tier: "Production-ready",
    github: "https://github.com/DivyangP2003/draw-ai",
    demo: "https://draw-ai-ecru.vercel.app",
    featured: true,
    image: "/projects/draw-ai.png",
    images: ["/projects/draw-ai.png"],
  },
  {
    name: "KonkanBhatkanti",
    description:
      "Regional tourism platform for Maharashtra's Konkan coast — beaches, forts, cuisine, and travel routes presented through a component-driven Next.js and TypeScript frontend.",
    overview:
      "A Konkan coast travel guide built with Next.js and TypeScript — beaches, heritage forts, local cuisine, and travel routes in a clean, responsive component-driven layout. Focused on content architecture and mobile-first UI.",
    highlights: [
      "Content-rich Konkan travel guide with structured destination pages",
      "Component-driven architecture in Next.js + TypeScript + Tailwind CSS",
      "Responsive design optimised for mobile travellers",
    ],
    stack: ["TypeScript", "Next.js", "Tailwind CSS"],
    category: "fullstack",
    tier: "Featured",
    github: "https://github.com/DivyangP2003/KonkanBhatkanti",
    featured: true,
    image: "/projects/konkan-bhatkanti.png",
    images: ["/projects/konkan-bhatkanti.png"],
  },
  {
    name: "SQL Data Warehouse",
    description:
      "End-to-end data warehousing solution using Medallion Architecture — Bronze ingestion, Silver cleansing, Gold star-schema models — with T-SQL ETL pipelines and BI-ready analytical outputs.",
    overview:
      "A full Medallion Architecture pipeline in SQL Server — raw ERP and CRM data lands in Bronze, gets cleansed and standardised in Silver, then modelled into a star schema in Gold. T-SQL ETL throughout, with BI-ready outputs and architecture documented in the repo.",
    highlights: [
      "Bronze → Silver → Gold Medallion Architecture in SQL Server",
      "T-SQL ETL pipelines automating extraction, cleansing, and integration",
      "Star schema fact and dimension tables optimised for BI query performance",
    ],
    stack: ["MS SQL Server", "T-SQL", "ETL", "Star Schema", "Medallion Architecture"],
    category: "data",
    tier: "Featured",
    github: "https://github.com/DivyangP2003/sql-data-warehouse",
    featured: true,
    image: "/projects/sql-warehouse-arch.png",
    images: ["/projects/sql-warehouse-arch.png"],
  },
  {
    name: "RBAC System",
    description:
      "Scalable Role-Based Access Control interface with dynamic user and role management, fine-grained permissions, and a three-tier hierarchy: Admin, Moderator, and User.",
    overview:
      "Admin interface for managing users, roles, and permissions — three-tier hierarchy (Admin, Moderator, User) with granular access rules and real-time permission updates. React + TypeScript frontend, Express API, MongoDB backend.",
    highlights: [
      "Dynamic user and role management with fine-grained permission controls",
      "Three-tier role hierarchy with real-time permission updates",
      "React + TypeScript frontend backed by Express.js and MongoDB",
    ],
    stack: ["React", "TypeScript", "Express.js", "MongoDB", "React Router"],
    category: "fullstack",
    tier: "Featured",
    github: "https://github.com/DivyangP2003/Role-Based-Access-Control-RBAC-",
    featured: true,
    image: "/projects/rbac-system.png",
    images: ["/projects/rbac-system.png"],
  },
  {
    name: "AI Travel Planning Agent",
    description:
      "Multimodal AI agent generating personalised day-wise travel itineraries using LangChain, Groq Llama 3.3, geospatial mapping, and live weather data.",
    overview:
      "Tell it your destination and trip duration — it returns a day-wise itinerary with interactive Folium maps, weather context, and activity suggestions. LangChain orchestrates the reasoning pipeline; Groq Llama 3.3 provides fast inference.",
    highlights: [
      "Day-wise personalised itineraries with LangChain orchestration",
      "Groq Llama 3.3 for low-latency inference",
      "Interactive Folium geospatial maps and live weather integration",
    ],
    stack: ["Python", "LangChain", "Groq Llama 3.3", "Geopy", "Folium"],
    category: "ai",
    tier: "Featured",
    github: "https://github.com/DivyangP2003/ai-agent-travel-planner",
    featured: true,
    image: "/projects/travel-planner.png",
    images: ["/projects/travel-planner.png"],
  },
  {
    name: "Fake News Detection",
    description:
      "LSTM-based text classifier achieving ~94% accuracy in distinguishing real from fake news — built with TensorFlow/Keras and a full NLP preprocessing pipeline.",
    overview:
      "A rigorous NLP classification project — complete preprocessing pipeline (tokenisation, padding, embedding), LSTM architecture trained on labelled news data, achieving ~94% test accuracy with proper evaluation metrics and EDA.",
    highlights: [
      "~94% classification accuracy on held-out test set",
      "LSTM neural network architecture in TensorFlow/Keras",
      "Full NLP pipeline: tokenisation, embedding, preprocessing, and evaluation",
    ],
    stack: ["Python", "TensorFlow", "Keras", "NLP", "LSTM"],
    category: "ai",
    tier: "Featured",
    github: "https://github.com/DivyangP2003/Fake-News-Detection-with-TensorFlow",
    featured: true,
    image: "/projects/fake-news.png",
    images: ["/projects/fake-news.png"],
  },
  {
    name: "Goa Tourism",
    description:
      "Tourism website for Goa featuring beaches, heritage sites, and local culture — built with Next.js and Tailwind CSS, deployed live on Vercel.",
    overview:
      "A Goa travel guide covering beaches, heritage sites, cuisine, and cultural spots — Next.js + Tailwind CSS frontend deployed on Vercel.",
    highlights: [
      "Destination and heritage content across beaches, forts, and cuisine",
      "Modern Next.js + Tailwind CSS UI",
      "Deployed on Vercel",
    ],
    stack: ["Next.js", "JavaScript", "Tailwind CSS"],
    category: "fullstack",
    tier: "Deployed",
    github: "https://github.com/DivyangP2003/GoaTourism",
    demo: "https://goa-tourism.vercel.app",
    featured: true,
    image: "/projects/goa-1.jpg",
    images: ["/projects/goa-1.jpg"],
  },
  {
    name: "Inventory Optimisation (Slooze)",
    description:
      "Supply chain analytics pipeline — demand forecasting, Economic Order Quantity optimisation, reorder point calculation, and ABC inventory classification using Python time-series methods.",
    overview:
      "End-to-end supply chain analytics: forecast demand with time-series methods, compute EOQ and reorder points, run ABC classification, and visualise inventory health. Built as a structured take-home challenge with documented methodology.",
    highlights: [
      "Time-series demand forecasting with Python and Pandas",
      "EOQ and reorder point optimisation for inventory efficiency",
      "ABC classification to prioritise inventory management effort",
    ],
    stack: ["Python", "Pandas", "Time-Series Analysis", "Data Visualisation"],
    category: "data",
    tier: "Analytics",
    featured: true,
    image: "/projects/inventory-optimization.png",
    images: ["/projects/inventory-optimization.png"],
  },
];

// ─────────────────────────────────────────────────────────────
// MARQUEE (hero ticker)
// ─────────────────────────────────────────────────────────────

export const marqueeSkills = [
  "WRF-Chem-Fire",
  "Next.js",
  "Python",
  "ArcGIS",
  "LangChain",
  "NetCDF",
  "TypeScript",
  "MOZCART",
  "Prisma",
  "HEC-RAS",
  "Streamlit",
  "QGIS",
  "TensorFlow",
  "ERA5",
  "PostgreSQL",
  "Fire Weather Indices",
];

// ─────────────────────────────────────────────────────────────
// THESIS
// Conclusions rewritten with full quantitative context so they
// read as findings, not headings.
// ─────────────────────────────────────────────────────────────

export const thesis = {
  title:
    "Simulation of the 2024 Wildfire Event over Champawat–Purnagiri Region (Uttarakhand)",
  subtitle: "Using the Coupled WRF-Chem-Fire Modeling System",
  meta: {
    degree: "M.Tech Project Report",
    institute: "IIT Jodhpur · Civil & Infrastructure Engineering",
    supervisor: "Dr. Amit Sharma",
    period: "April 2026",
    pages: 98,
  },
  pdf: "/thesis/Divyang_MTech_Thesis.pdf",
  simulationVideo: "/thesis/wrf_chem_fire_simulation.mp4",
  simulationCaption:
    "WRF-Chem-Fire simulation — fire spread dynamics over the Champawat–Purnagiri region (FEMISS run). ~470 km² burnt area · Phase 4 results.",

  // Abstract — unchanged (academically accurate, appropriate for research section)
  abstract:
    "This thesis delivers the first high-resolution coupled atmosphere–fire–chemistry simulation of a major Indian Himalayan wildfire, bridging research-grade atmospheric science with practical catastrophe risk frameworks. The Indian Himalayan region experiences recurrent pre-monsoon wildfires driven by dry biomass, low humidity, strong westerly winds, and complex terrain. This study presents a process-based simulation of the 15–20 April 2024 wildfire episode in the Champawat–Purnagiri region using coupled WRF-Chem-Fire with nested domains (3 km outer, 1 km inner), ERA5 meteorology, CAM-Chem chemistry, MODIS/Bhuvan land use, EDGAR-HTAP emissions, and FINN fire inventories with three FIRMS-derived ignition points.",

  keyMetrics: [
    { value: "1 km", label: "Inner domain resolution", icon: "grid" },
    { value: "470 km²", label: "Simulated burnt area (~92 hr)", icon: "fire" },
    { value: "+6.4%", label: "PM₂.₅ NMB with fire emissions", icon: "air" },
    { value: "~6 m/s", label: "Peak rate of spread (ROS)", icon: "wind" },
    { value: "7", label: "Controlled simulation scenarios", icon: "lab" },
    { value: "~14%", label: "Burnt area overestimate vs FIRMS (~414 km²)", icon: "satellite" },
  ],

  phases: [
    {
      id: "phase1",
      phase: "Phase 1",
      title: "Grid-FDDA Nudging Evaluation",
      chapter: "Chapter 5",
      description:
        "Evaluated meteorological fidelity with ERA5 nudging (G = 3×10⁻⁴ s⁻¹). Wind speed NMB reduced by 29% at Kashipur and 38% at Rishikesh; IOA improved 40–44% over free-running WRF. Nudging is essential for accurate pre-monsoon Himalayan fire simulations.",
    },
    {
      id: "phase2",
      phase: "Phase 2",
      title: "WRF-Chem-Fire vs CPCB Validation",
      chapter: "Chapter 6",
      description:
        "Compared 1 km vs 3 km nested domains against CPCB CAQMS ground observations. The fire-enabled simulation (C2) improved PM₂.₅ NMB from −19.2% (C1, no fire) to +6.4%, confirming wildfire emissions account for ~25% of observed PM₂.₅ loading.",
    },
    {
      id: "phase3a",
      phase: "Phase 3A",
      title: "Fire Emission Impacts (C2 vs C1)",
      chapter: "Chapter 7",
      description:
        "Fire emissions increased PM₂.₅ by ~33 µg/m³ and PM₁₀ by ~84 µg/m³, with dramatic aerosol enhancement: BC ↑9×, OC ↑10×, NO₂ ↑2.5×. Shortwave downwelling radiation decreased 10–12 W/m² and PBLH shifted ±20–40 m during the active episode.",
    },
    {
      id: "phase3b",
      phase: "Phase 3B",
      title: "Aerosol Radiative Feedback (C2 vs C3)",
      chapter: "Chapter 8",
      description:
        "Aerosol radiative feedback reduced shortwave radiation by 15–25 W/m², suppressed planetary boundary layer height by 20–50 m, enhanced near-surface PM₂.₅ by 5–12 µg/m³ (self-amplifying ~7%), and depleted surface O₃ by 1–3 ppbv — yet fire spread changed by less than 1.3%.",
    },
    {
      id: "phase4",
      phase: "Phase 4",
      title: "Wildfire Spread Dynamics",
      chapter: "Chapter 9",
      description:
        "Two distinct peak spread periods (18 & 19 April): spread rate exceeded 1.5 km²/hr with peak ROS ~6 m/s. Fire behaviour was governed by wind speed, slope aspect, and topographic channelling, with strong diurnal PBL-driven pulsing.",
    },
  ],

  scenarios: [
    { id: "N1", name: "N1", description: "No nudging, no fire" },
    { id: "N2", name: "N2", description: "With nudging, no fire" },
    { id: "W1", name: "W1", description: "No nudging, with fire" },
    { id: "W2", name: "W2", description: "With nudging, with fire" },
    { id: "C1", name: "C1", description: "Chemistry only — no fire emissions" },
    { id: "C2", name: "C2", description: "Full coupled fire + chemistry (FEMISS)" },
    { id: "C3", name: "C3", description: "C2 without aerosol radiative feedback" },
  ],

  datasets: [
    { name: "ERA5", use: "Meteorological initial/boundary conditions and nudging" },
    { name: "NASA FIRMS", use: "Ignition points and burn scar validation" },
    { name: "MODIS / Bhuvan", use: "Land use and land cover classification" },
    { name: "EDGAR-HTAP", use: "Anthropogenic emission inventories" },
    { name: "FINN v2.5", use: "Fire emission inventories" },
    { name: "CAM-Chem", use: "Chemical boundary conditions" },
    { name: "CPCB CAQMS", use: "PM₂.₅, O₃, and meteorological ground validation" },
  ],

  // Conclusions — rewritten with full quantitative context
  conclusions: [
    "Grid-FDDA meteorological nudging with ERA5 is critical for accuracy in Himalayan terrain — reducing wind speed NMB by 29–38% and improving Index of Agreement by 40–44% over free-running WRF.",
    "Fire emissions account for ~25% of observed PM₂.₅, improving model bias from NMB −19.2% to +6.4% when activated.",
    "Fire emissions drive dramatic aerosol enhancement — BC ↑9×, OC ↑10×, NO₂ ↑2.5× — creating compound PM₂.₅ and O₃ air quality events across the active burn zone.",
    "Aerosol radiative feedback significantly modifies boundary layer dynamics (PBLH suppressed 20–50 m, SWDOWN reduced 15–25 W/m²) but has negligible effect on fire spread itself — less than 1.3% burnt area change.",
    "Wildfire spread is primarily wind- and terrain-controlled, exhibiting strong diurnal PBL-driven pulsing — ~470 km² burnt in ~92 hours across two distinct peak spread periods.",
  ],

  figures: [
    {
      src: "/thesis/figures/fig_p18_0.png",
      caption: "Active fire detections — NASA FIRMS (15–20 April 2024)",
      category: "context",
    },
    {
      src: "/thesis/figures/fig_p35_0.png",
      caption: "WRF-Chem-Fire coupled modelling system schematic",
      category: "methodology",
    },
    {
      src: "/thesis/figures/fig_p36_0.png",
      caption: "Methodological workflow of the modelling study",
      category: "methodology",
    },
    {
      src: "/thesis/figures/fig_p46_0.png",
      caption: "Pearson correlation (r) — nudging vs no-nudging scenarios",
      category: "validation",
    },
    {
      src: "/thesis/figures/fig_p50_0.png",
      caption: "Wind rose: CPCB observations vs WRF with and without nudging",
      category: "validation",
    },
    {
      src: "/thesis/figures/fig_p53_0.png",
      caption: "Domain resolution comparison — surface PM₂.₅ (Case C3)",
      category: "results",
    },
    {
      src: "/thesis/figures/fig_p55_0.png",
      caption: "Diurnal variation of temperature, wind speed, and solar radiation",
      category: "results",
    },
    {
      src: "/thesis/figures/fig_p60_0.png",
      caption: "Temporal evolution of PM₂.₅ — C1 vs C2 (fire emission impact)",
      category: "results",
    },
    {
      src: "/thesis/figures/fig_p63_0.png",
      caption: "Shortwave downwelling radiation — aerosol radiative feedback effects",
      category: "results",
    },
  ],

  stack: [
    "WRF-Chem-Fire",
    "WRF-SFIRE",
    "MOZCART",
    "Python",
    "NetCDF",
    "ArcGIS",
    "ERA5",
    "NASA FIRMS",
    "CPCB CAQMS",
    "Grid-FDDA",
  ],
};

// ─────────────────────────────────────────────────────────────
// SKILLS
// Duplicate "HEC-RAS" removed from GIS group.
// ─────────────────────────────────────────────────────────────

export const skillGroups = [
  {
    title: "Fire & Atmospheric Modelling",
    skills: [
      "WRF-Chem-Fire",
      "WRF-SFIRE",
      "MOZCART",
      "GOCART",
      "RRTMG",
      "Grid-FDDA",
      "Fire Weather Indices",
      "HPC / Linux Clusters",
    ],
    color: "emerald",
  },
  {
    title: "GIS & Civil Engineering",
    skills: [
      "ArcGIS Pro",
      "QGIS",
      "HEC-RAS",
      "Civil 3D",
      "AutoCAD 3D",
      "NetCDF / GRIB",
      "PostGIS",
      "Remote Sensing",
    ],
    color: "teal",
  },
  {
    title: "Full-Stack Development",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Prisma",
      "Supabase",
      "PostgreSQL",
      "REST APIs",
    ],
    color: "violet",
  },
  {
    title: "AI / ML & Data",
    skills: [
      "Python",
      "LangChain",
      "Gemini AI",
      "TensorFlow",
      "Scikit-learn",
      "Snowflake",
      "Power BI",
      "ETL / Data Warehousing",
    ],
    color: "amber",
  },
];

// ─────────────────────────────────────────────────────────────
// LEADERSHIP
// Descriptions rewritten — active voice, one line each.
// ─────────────────────────────────────────────────────────────

export const leadership = [
  {
    role: "Festival Chief, Ganeshotsav '24",
    org: "IIT Jodhpur",
    period: "2024",
    detail:
      "Led end-to-end operations for IIT Jodhpur's annual Ganeshotsav — coordinating 200+ volunteers across events, logistics, and campus programming.",
  },
  {
    role: "Head, Public Relations Team",
    org: "EDIFICIO — IIT Jodhpur Civil Engineering Festival",
    period: "2023",
    detail:
      "Directed PR strategy, external outreach, and communications for IIT Jodhpur's civil engineering festival.",
  },
];

// ─────────────────────────────────────────────────────────────
// DOCUMENTS
// Description added explaining why there are multiple resumes —
// this context helps visitors understand the structure immediately.
// ─────────────────────────────────────────────────────────────

export const resumesNote =
  "Three role-targeted résumés — the same background looks different to a software team, a climate risk firm, and a wildfire research group. Download whichever fits the role.";

export const resumes = [
  {
    title: "Full Stack Résumé",
    description: "Software, product, AI app, and web engineering roles",
    href: "/resumes/FullStack_Resume.pdf",
  },
  {
    title: "Environmental Engineering Résumé",
    description: "Climate risk, GIS, fire science, and environmental roles",
    href: "/resumes/Environment_Engineering_Resume.pdf",
  },
  {
    title: "Fire Scientist Résumé",
    description: "Wildfire modelling, atmospheric science, and WRF research roles",
    href: "/resumes/Fire_Scientist_Resume.pdf",
  },
  {
    title: "JJM Internship Report",
    description: "GIS mapping of borewells — Jal Jeevan Mission field study",
    href: "/resumes/JJM_Internship_Report.pdf",
  },
  {
    title: "M.Tech Thesis (98 pages)",
    description: "WRF-Chem-Fire wildfire simulation — full project report",
    href: "/thesis/Divyang_MTech_Thesis.pdf",
  },
];

// ─────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────

export const contactNote =
  "Available from June 2026. Open to roles in climate risk modelling, environmental data science, geospatial intelligence, or full-stack AI engineering — and to any intersection of these.";

// ─────────────────────────────────────────────────────────────
// NAV
// ─────────────────────────────────────────────────────────────

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#skills", label: "Skills" },
  { href: "#resumes", label: "Résumés" },
  { href: "#contact", label: "Contact" },
];

// ─────────────────────────────────────────────────────────────
// COMBINED EXPORT
// ─────────────────────────────────────────────────────────────

export const allProjects = [...devProjects, ...civilProjects];
