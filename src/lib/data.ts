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
  /** Card thumbnail */
  image?: string;
  /** Gallery for detail modal */
  images?: string[];
  /** Longer copy for detail modal */
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

export const profile = {
  name: "Divyang Deepak Palshetkar",
  shortName: "Divyang Palshetkar",
  title: "Environmental Engineer · Full-Stack Developer · Climate Modeller",
  tagline:
    "Environmental engineer and full-stack developer — wildfire simulation, GIS, and deployed applications.",
  location: "IIT Jodhpur, Rajasthan, India",
  email: "palshetkardivyang@gmail.com",
  academicEmail: "palshetkar.1@iitj.ac.in",
  phone: "+91-9359849585",
  github: "https://github.com/DivyangP2003",
  linkedin: "https://www.linkedin.com/in/divyang-palshetkar23",
  image: "/images/profile.jpeg",
  imageCutout: "/images/Divyang_withoutbg.png",
  highlights: [
    "Dept. Rank 1 — B.Tech–M.Tech Dual Degree, IIT Jodhpur",
    "M.Tech CGPA 9.5 / 10 · B.Tech CGPA 8.3 / 10",
    "WRF-Chem-Fire thesis on 2024 Uttarakhand wildfire",
    "7+ deployed full-stack & AI applications on Vercel/Streamlit",
  ],
};

export const metrics = [
  { value: "1 km", label: "Wildfire simulation resolution" },
  { value: "470 km²", label: "Simulated burnt area" },
  { value: "500+", label: "Tickers in AI finance platform" },
  { value: "150+ hr", label: "Traffic footage analysed (AICOE)" },
  { value: "Rank 1", label: "Dept., B.Tech–M.Tech IIT Jodhpur" },
  { value: "9.5 / 8.3", label: "M.Tech · B.Tech CGPA" },
];

export const categoryFilters: { key: ProjectCategory; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "fullstack", label: "Full Stack" },
  { key: "ai", label: "AI / ML" },
  { key: "data", label: "Data Engineering" },
  { key: "civil", label: "Civil / GIS" },
  { key: "research", label: "Research" },
];

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
    period: "2021 – 2025",
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

export const experience: ExperienceEntry[] = [
  {
    role: "Civil Engineer",
    company: "EEKI Foods",
    period: "Mar 2025 – May 2025",
    sortYear: 2025,
    location: "India",
    highlights: [
      "Developed GIS-based flood risk mitigation strategies through hydraulic analysis, reducing hazard zones by 32%.",
      "Produced grading plans, terrain models, and drainage designs using Civil 3D and spatial datasets.",
      "Conducted hydrological surveys supporting earthwork balancing, drainage, and environmental compliance.",
    ],
    tags: ["GIS", "Civil 3D", "Flood Risk", "Hydrology"],
  },
  {
    role: "AI Research & Data Analysis Intern",
    company: "AICOE Project, Ministry of Education",
    period: "May 2024 – Jul 2024",
    sortYear: 2024,
    location: "IIT Jodhpur",
    highlights: [
      "Built a large-scale analytics and computer vision pipeline for 150+ hours of traffic footage from 16 smart-city locations.",
      "Used statistical modelling, clustering, and anomaly detection for urban mobility planning.",
      "Explored generative AI and agent-based digital twins for predictive infrastructure planning.",
    ],
    tags: ["Computer Vision", "Python", "Traffic Analytics", "AI"],
  },
  {
    role: "Engineering Intern",
    company: "Jal Jeevan Mission, Ministry of Jal Shakti",
    period: "May 2024 – Jul 2024",
    sortYear: 2024,
    location: "Rajasthan",
    highlights: [
      "Conducted GPS/QGIS field mapping across 40+ sites for groundwater recharge assessment.",
      "Designed 3D hydraulic models and horizontal recharge techniques, improving efficiency by 24.6%.",
      "Developed REST APIs to integrate GIS data with an analytics dashboard.",
    ],
    tags: ["QGIS", "GPS", "REST API", "Water Resources"],
    report: "/resumes/JJM_Internship_Report.pdf",
  },
];

export const civilProjects: Project[] = [
  {
    name: "Urban Flood & Drainage Modelling",
    description:
      "Designed urban drainage and stormwater conveyance systems using HEC-RAS and GIS spatial data, optimising drainage capacity by 27% and reducing earthwork by 19%.",
    overview:
      "A civil design project for urban stormwater management — HEC-RAS hydraulic modelling paired with GIS terrain data to size drains, optimise conveyance, and cut earthwork volumes on a real site layout.",
    highlights: [
      "27% improvement in drainage capacity through conveyance redesign",
      "19% reduction in earthwork via terrain-aware grading",
      "HEC-RAS + Civil 3D + ArcGIS integrated workflow",
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
      "Python pipelines for ERA5 NetCDF climate data, fire weather indices, MODIS land cover integration, and spatial fire hazard exposure mapping in ArcGIS/QGIS.",
    overview:
      "Pre-thesis GIS work that fed into my WRF-Chem-Fire research — pulling ERA5 reanalysis, computing fire weather indices, and mapping hazard exposure across complex terrain in ArcGIS/QGIS.",
    highlights: [
      "Automated NetCDF → GIS pipelines for ERA5 climate data",
      "Fire weather index computation and spatial overlay",
      "MODIS land cover integration for fuel mapping",
    ],
    stack: ["Python", "ArcGIS", "QGIS", "NetCDF", "Remote Sensing"],
    category: "research",
    featured: true,
    image: "/thesis/figures/fig_p18_0.png",
    images: ["/thesis/figures/fig_p18_0.png", "/thesis/figures/fig_p60_0.png"],
  },
  {
    name: "Construction Project Monitoring System",
    description:
      "Multi-sheet Excel analytics integrating DPR, WBS, manpower, material, QC, safety, and Earned Value tracking with automated dashboards.",
    overview:
      "A practical site-management workbook I built for tracking DPR progress, manpower, materials, QC, safety, and earned value — the kind of system contractors actually open every morning.",
    highlights: [
      "Integrated DPR, WBS, and EVM in linked sheets",
      "Automated dashboard views for progress and cost variance",
      "QC and safety logging with summary roll-ups",
    ],
    stack: ["Advanced Excel", "EVM", "Project Management"],
    category: "civil",
    featured: true,
    image: "/projects/construction-monitoring.png",
    images: ["/projects/construction-monitoring.png"],
  },
  {
    name: "Residential Building Design (G+1)",
    description:
      "Comprehensive architectural drawings — floor plans, elevations, sectional details — and accurate 3D model using AutoCAD 3D.",
    overview:
      "Complete G+1 residential design package — floor plans, elevations, sections, and a 3D AutoCAD model. Documented on GitHub with drawing sets.",
    highlights: [
      "Full architectural drawing set (plan, elevation, section)",
      "Accurate 3D model in AutoCAD 3D",
      "GitHub repo with design documentation",
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
      "Ground floor plan in AutoCAD Civil 3D adhering to VastuShastra principles, converted to detailed 3D model in SketchUp Pro with realistic textures.",
    overview:
      "A Vastu-compliant bungalow design — Civil 3D floor planning, then a textured SketchUp Pro 3D model. Balancing traditional layout rules with realistic spatial design.",
    highlights: [
      "VastuShastra layout compliance in Civil 3D",
      "SketchUp Pro 3D model with realistic materials",
      "Full design repo on GitHub",
    ],
    stack: ["AutoCAD Civil 3D", "SketchUp Pro", "VastuShastra"],
    category: "civil",
    github: "https://github.com/DivyangP2003/VastuShastra-Compliant-Residential-Bungalow-Design-in-3D",
    featured: true,
    image: "/projects/vastu-bungalow.png",
    images: ["/projects/vastu-bungalow.png"],
  },
  {
    name: "Building Energy Efficiency & Fire Safety Audit",
    description:
      "HVAC thermal load estimation via HDD/CDD analysis and fire safety compliance audit across G+3 academic facilities against NBC 2016 standards.",
    overview:
      "Energy and life-safety audit for G+3 academic buildings — HDD/CDD-based HVAC load estimation plus NBC 2016 fire safety compliance checks across egress, detection, and suppression systems.",
    highlights: [
      "Degree-day based HVAC thermal load estimation",
      "NBC 2016 fire safety compliance review",
      "G+3 academic facility case study",
    ],
    stack: ["Energy Audit", "NBC 2016", "Fire Safety"],
    category: "civil",
    featured: true,
    image: "/projects/energy-audit.png",
    images: ["/projects/energy-audit.png"],
  },
];

export const devProjects: Project[] = [
  {
    name: "AI Finance Agent LLM",
    description:
      "Multi-agent financial analysis platform with 6 AI agents covering 500+ tickers with VaR/CVaR, stress testing, and efficient frontier simulations.",
    overview:
      "Six LangChain agents orchestrated around a single Streamlit app — market, sentiment, fundamentals, risk, portfolio, and an orchestrator — analysing 500+ tickers with VaR/CVaR, stress tests, and efficient frontier plots.",
    highlights: [
      "6 specialised AI agents with orchestrated workflows",
      "500+ tickers — VaR, CVaR, stress testing, efficient frontier",
      "Live on Streamlit with Gemini 2.0 + Plotly dashboards",
    ],
    stack: ["Python", "Streamlit", "LangChain", "Gemini 2.0", "Plotly"],
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
      "AI-powered personal finance with receipt OCR, multi-account budgeting, recurring automation, and real-time budget alerts.",
    overview:
      "Personal finance app I actually use — track income and expenses across accounts, scan receipts with Gemini OCR, set recurring rules, and get budget alerts before you overspend.",
    highlights: [
      "Gemini-powered receipt OCR for automatic transaction entry",
      "Multi-account budgeting with daily/monthly views",
      "Recurring automation + real-time budget alerts",
      "Deployed on Vercel with Prisma + Supabase",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "Supabase", "Inngest", "Arcjet"],
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
      "Telemedicine platform with Vonage video calls, appointment scheduling, credit plans, Clerk auth, and Stripe subscriptions.",
    overview:
      "End-to-end telemedicine — doctors set availability, patients book slots, pay via Stripe credits, and join secure 1:1 Vonage video consultations. Separate admin flows for verification and payouts.",
    highlights: [
      "Secure 1:1 Vonage video consultations",
      "Doctor availability + real-time appointment booking",
      "Clerk auth, Stripe subscriptions, credit-based plans",
      "Admin panel for doctor verification and payouts",
    ],
    stack: ["Next.js", "Prisma", "Vonage", "PostgreSQL", "Clerk", "Stripe"],
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
      "AI culinary platform for recipe generation, meal plans, nutritional analysis, AI dish images, and shopping lists.",
    overview:
      "Cooking app with real depth — generate recipes from ingredients, build weekly meal plans, calculate nutrition, generate dish images with AI, and export shopping lists. One of my more feature-complete Next.js builds.",
    highlights: [
      "AI recipe generation + custom meal planning",
      "Nutritional analysis with PDF export",
      "AI-generated dish images via Hugging Face",
      "Global recipe hub with favourites and sharing",
    ],
    stack: ["Next.js", "Prisma", "Supabase", "Gemini", "Hugging Face"],
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
      "Interactive canvas for math note-taking with shape tools, grid/ruler, TensorFlow.js recognition, and Gemini analysis.",
    overview:
      "An iPad-style math canvas in the browser — draw equations freehand, use shape tools and grids, get TensorFlow.js handwriting recognition, and ask Gemini to walk through the steps.",
    highlights: [
      "Freehand canvas with grid, ruler, and shape tools",
      "TensorFlow.js equation recognition",
      "Gemini AI step-by-step math analysis",
      "Live demo on Vercel",
    ],
    stack: ["React", "Next.js", "Canvas", "TensorFlow.js", "Math.js", "Gemini"],
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
      "TypeScript tourism platform for the Konkan region with responsive design and rich UI components.",
    overview:
      "A tourism site for Maharashtra's Konkan coast — beaches, forts, food, and travel routes presented in a clean Next.js + TypeScript frontend with component-driven layout.",
    highlights: [
      "Konkan region travel guide with rich UI components",
      "TypeScript + Next.js + Tailwind CSS",
      "Responsive design for mobile travellers",
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
      "End-to-end data warehousing with Medallion Architecture, ETL pipelines, star schema modelling, and BI analytics.",
    overview:
      "A full medallion pipeline in SQL Server — Bronze ingestion, Silver cleansing, Gold star-schema models, with T-SQL ETL and BI-ready outputs. Architecture documented in the repo.",
    highlights: [
      "Bronze → Silver → Gold medallion architecture",
      "T-SQL ETL pipelines in SQL Server",
      "Star schema modelling for BI analytics",
    ],
    stack: ["MS SQL Server", "T-SQL", "ETL", "Star Schema"],
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
      "Role-based access control with dynamic user/role management, fine-grained permissions, and role hierarchy.",
    overview:
      "Admin interface for managing users, roles, and permissions — Admin / Moderator / User hierarchy with granular access rules. React frontend, Express API, MongoDB backend.",
    highlights: [
      "Dynamic role and permission management",
      "Three-tier hierarchy: Admin, Moderator, User",
      "React + TypeScript frontend, Express + MongoDB API",
    ],
    stack: ["React", "TypeScript", "Express.js", "MongoDB"],
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
      "AI agent for personalised day-wise itineraries with LangChain, Groq-Llama, geospatial mapping, and weather data.",
    overview:
      "Tell it where you're going and how many days you have — it returns a day-wise itinerary with maps (Folium), weather context, and activity suggestions via LangChain + Groq Llama 3.3.",
    highlights: [
      "Day-wise personalised itineraries via LangChain",
      "Groq Llama 3.3 for fast inference",
      "Geospatial maps and weather integration",
    ],
    stack: ["Python", "LangChain", "Llama", "Geopy", "Folium"],
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
      "LSTM classifier distinguishing real vs fake news with TensorFlow/Keras, ~94% accuracy.",
    overview:
      "Classic NLP project done properly — text preprocessing pipeline, LSTM architecture in TensorFlow/Keras, trained on labelled news data with ~94% test accuracy and evaluation metrics.",
    highlights: [
      "~94% classification accuracy on test set",
      "LSTM neural network with TensorFlow/Keras",
      "Full NLP preprocessing pipeline",
    ],
    stack: ["Python", "TensorFlow", "NLP", "LSTM"],
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
      "Tourism website for Goa with modern Next.js UI, deployed on Vercel.",
    overview:
      "A Goa travel site — beaches, heritage spots, and local culture in a Next.js frontend. Deployed live on Vercel with assets from the GitHub repo.",
    highlights: [
      "Goa destinations and heritage content",
      "Modern Next.js + Tailwind UI",
      "Live deployment on Vercel",
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
    name: "Inventory Optimization (Slooze)",
    description:
      "Demand forecasting, inventory optimization (EOQ, reorder points), and ABC classification with time-series analysis.",
    overview:
      "Supply chain analytics pipeline — forecast demand, compute EOQ and reorder points, run ABC classification, and visualise inventory health with time-series methods in Python.",
    highlights: [
      "Demand forecasting with time-series methods",
      "EOQ and reorder point optimisation",
      "ABC classification for inventory prioritisation",
    ],
    stack: ["Python", "Pandas", "Time-Series", "Visualization"],
    category: "data",
    tier: "Analytics",
    featured: true,
    image: "/projects/inventory-optimization.png",
    images: ["/projects/inventory-optimization.png"],
  },
];

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

export const thesis = {
  title: "Simulation of the 2024 Wildfire Event over Champawat–Purnagiri Region (Uttarakhand)",
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
    "WRF-Chem-Fire simulation — fire spread dynamics over the Champawat–Purnagiri region (FEMISS run).",
  abstract:
    "The Indian Himalayan region experiences recurrent pre-monsoon wildfires driven by dry biomass, low humidity, strong westerly winds, and complex terrain. This study presents a high-resolution, process-based simulation of the 15–20 April 2024 wildfire episode in the Champawat–Purnagiri region using coupled WRF-Chem-Fire with nested domains (3 km outer, 1 km inner), ERA5 meteorology, CAM-Chem chemistry, MODIS/Bhuvan land use, EDGAR-HTAP emissions, and FINN fire inventories with three FIRMS-derived ignition points.",
  keyMetrics: [
    { value: "1 km", label: "Inner domain resolution", icon: "grid" },
    { value: "470 km²", label: "Simulated burnt area (~92 hr)", icon: "fire" },
    { value: "+6.4%", label: "PM₂.₅ NMB with fire emissions", icon: "air" },
    { value: "~6 m/s", label: "Peak rate of spread (ROS)", icon: "wind" },
    { value: "7", label: "Controlled simulation scenarios", icon: "lab" },
    { value: "~14%", label: "Burnt area vs FIRMS (~414 km²)", icon: "satellite" },
  ],
  phases: [
    {
      id: "phase1",
      phase: "Phase 1",
      title: "Grid-FDDA Nudging Evaluation",
      chapter: "Chapter 5",
      description:
        "Evaluated meteorological fidelity with ERA5 nudging (G = 3×10⁻⁴ s⁻¹). Wind speed NMB reduced 29% at Kashipur and 38% at Rishikesh; IOA improved 40–44%. Essential for Himalayan pre-monsoon fire simulations.",
    },
    {
      id: "phase2",
      phase: "Phase 2",
      title: "WRF-Chem-Fire vs CPCB Validation",
      chapter: "Chapter 6",
      description:
        "Compared 1 km vs 3 km nested domains against CPCB CAQMS observations. Fire-enabled simulation (C2) improved PM₂.₅ NMB from −19.2% (C1) to +6.4%, confirming wildfire emissions contribute ~25% of observed PM₂.₅ loading.",
    },
    {
      id: "phase3a",
      phase: "Phase 3A",
      title: "Fire Emission Impacts (C2 vs C1)",
      chapter: "Chapter 7",
      description:
        "Fire emissions increased PM₂.₅ (~33 µg/m³), PM₁₀ (~84 µg/m³), BC (~9×), OC (~10×), and NO₂ (~2.5×). Reduced SWDOWN (10–12 W/m⁻²) and altered PBLH (±20–40 m) during the active episode.",
    },
    {
      id: "phase3b",
      phase: "Phase 3B",
      title: "Aerosol Radiative Feedback (C2 vs C3)",
      chapter: "Chapter 8",
      description:
        "ARF reduced SWDOWN by 15–25 W/m⁻², suppressed PBLH by 20–50 m, enhanced near-surface PM₂.₅ by 5–12 µg/m³, and depleted surface O₃ by 1–3 ppbv — but fire spread remained <1.3% sensitive to ARF.",
    },
    {
      id: "phase4",
      phase: "Phase 4",
      title: "Wildfire Spread Dynamics",
      chapter: "Chapter 9",
      description:
        "Two peak spread periods (18 & 19 April): spread rate >1.5 km²/hr, peak ROS ~6 m/s. Fire governed by wind, slope, and terrain channeling with strong diurnal PBL-driven pulsing behavior.",
    },
  ],
  scenarios: [
    { id: "N1", name: "N1", description: "No nudging, no fire" },
    { id: "N2", name: "N2", description: "With nudging, no fire" },
    { id: "W1", name: "W1", description: "No nudging, with fire" },
    { id: "W2", name: "W2", description: "With nudging, with fire" },
    { id: "C1", name: "C1", description: "Chem only — no fire emissions" },
    { id: "C2", name: "C2", description: "Full coupled fire + chemistry" },
    { id: "C3", name: "C3", description: "C2 without aerosol radiative feedback" },
  ],
  datasets: [
    { name: "ERA5", use: "Meteorological IC/BC & nudging" },
    { name: "NASA FIRMS", use: "Ignition points & burn scar validation" },
    { name: "MODIS / Bhuvan", use: "Land use & land cover" },
    { name: "EDGAR-HTAP", use: "Anthropogenic emissions" },
    { name: "FINN v2.5", use: "Fire emission inventories" },
    { name: "CAM-Chem", use: "Chemical boundary conditions" },
    { name: "CPCB CAQMS", use: "PM₂.₅, O₃, meteorology validation" },
  ],
  conclusions: [
    "Grid-FDDA nudging is essential for meteorological fidelity in the Himalayan pre-monsoon environment.",
    "Fire emissions contribute ~25% of observed PM₂.₅ — improving NMB from −19.2% to +6.4%.",
    "Fire emissions dramatically enhance BC (~9×), OC (~10×), and create compound PM₂.₅ + O₃ air quality events.",
    "Aerosol radiative feedback significantly modifies radiation and PBL but negligibly affects fire spread (<1.3%).",
    "Wildfire spread is primarily wind- and terrain-controlled with strong diurnal pulsing — ~470 km² in ~92 hours.",
  ],
  figures: [
    {
      src: "/thesis/figures/fig_p18_0.png",
      caption: "Active fire detections — NASA FIRMS (15–20 April 2024)",
      category: "context",
    },
    {
      src: "/thesis/figures/fig_p35_0.png",
      caption: "WRF-Chem-Fire coupled modeling system schematic",
      category: "methodology",
    },
    {
      src: "/thesis/figures/fig_p36_0.png",
      caption: "Methodological workflow of the modeling study",
      category: "methodology",
    },
    {
      src: "/thesis/figures/fig_p46_0.png",
      caption: "Pearson correlation (r) — nudging vs no-nudging",
      category: "validation",
    },
    {
      src: "/thesis/figures/fig_p50_0.png",
      caption: "Wind rose: CPCB observations vs WRF with/without nudging",
      category: "validation",
    },
    {
      src: "/thesis/figures/fig_p53_0.png",
      caption: "Domain resolution comparison — surface PM₂.₅ (Case C3)",
      category: "results",
    },
    {
      src: "/thesis/figures/fig_p55_0.png",
      caption: "Diurnal variation of temperature, wind speed & solar radiation",
      category: "results",
    },
    {
      src: "/thesis/figures/fig_p60_0.png",
      caption: "Temporal evolution of PM₂.₅ — C1 vs C2 (fire emission impact)",
      category: "results",
    },
    {
      src: "/thesis/figures/fig_p63_0.png",
      caption: "SWDOWN temporal evolution — fire emission radiative effects",
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
    "CPCB",
    "Grid-FDDA",
  ],
};

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
      "Remote Sensing",
      "HEC-RAS",
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
      "Gemini",
      "TensorFlow",
      "Scikit-learn",
      "Streamlit",
      "Power BI",
      "ETL / Data Warehousing",
    ],
    color: "amber",
  },
];

export const resumes = [
  {
    title: "Full Stack Resume",
    description: "Software, product, AI app & web engineering roles",
    href: "/resumes/FullStack_Resume.pdf",
  },
  {
    title: "Environmental Engineering Resume",
    description: "Climate risk, GIS, fire science & environmental roles",
    href: "/resumes/Environment_Engineering_Resume.pdf",
  },
  {
    title: "Fire Scientist Resume",
    description: "Wildfire, atmospheric science & WRF research roles",
    href: "/resumes/Fire_Scientist_Resume.pdf",
  },
  {
    title: "JJM Internship Report",
    description: "GIS mapping of borewells — Jal Jeevan Mission field work",
    href: "/resumes/JJM_Internship_Report.pdf",
  },
  {
    title: "M.Tech Thesis (98 pages)",
    description: "WRF-Chem-Fire wildfire simulation — full project report",
    href: "/thesis/Divyang_MTech_Thesis.pdf",
  },
];

export const leadership = [
  {
    role: "Festival Chief, Ganeshotsav '24",
    org: "IIT Jodhpur",
    period: "2024",
    detail: "Organised cultural events, 200+ volunteer team operations.",
  },
  {
    role: "Head, Public Relations Team",
    org: "EDIFICIO (Civil Engineering Festival)",
    period: "2023",
    detail: "Led PR strategy and outreach for IIT Jodhpur's civil engineering fest.",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#skills", label: "Skills" },
  { href: "#resumes", label: "Resumes" },
  { href: "#contact", label: "Contact" },
];

export const allProjects = [...devProjects, ...civilProjects];
