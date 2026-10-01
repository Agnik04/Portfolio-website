/**
 * ============================================================
 *  EDIT THIS FILE TO ADD YOUR OWN DATA
 * ============================================================
 *  Everything the site displays lives here. Replace the
 *  placeholder content below with your real information and
 *  the whole site updates automatically.
 *
 *  Formatting inside text: **bold** highlights a key phrase,
 *  *italic* renders as the accent serif (used in headings).
 * ============================================================
 */

export const profile = {
  name: "Agnik Karan",
  role: "Full-Stack Software Engineer",
  // Big line under the name in the hero
  headline:
    "Full-stack engineer building *payment systems*, RESTful APIs and production SaaS.",
  // Supporting sentence under the headline
  tagline:
    "Currently an Associate Software Engineer at Bit Canny Technologies, shipping marketplace platforms for Ireland and Thailand with Node.js and React.js.",
  availability: "Open to new opportunities",
  location: "Kolkata, West Bengal, India",
  // IANA time zone, used to show your local time in the contact section
  timezone: "Asia/Kolkata",
  email: "karanagnik@gmail.com",
  // Optional resume link (leave "" to hide the buttons)
  resumeUrl: "/Resume_Agnik_Karan.pdf",
  socials: {
    github: "https://github.com/Agnik04",
    linkedin: "https://www.linkedin.com/in/agnik-karan-3615a723a/",
    twitter: "https://x.com/AgnikKaran",
  },
};

// The "At a glance" card in the hero: what a recruiter needs in 7 seconds
export const snapshot = [
  {
    label: "Current role",
    value: "Associate Software Engineer at Bit Canny Technologies",
  },
  { label: "Experience", value: "1+ year in production · promoted in 7 months" },
  { label: "Focus", value: "Payments, backend APIs, marketplace platforms" },
  { label: "Education", value: "B.Tech CSBS · 8.57 CGPA" },
  { label: "Based in", value: "Kolkata, India (IST)" },
];

// Highlighted in the hero card and in the Skills section.
// Names must match the items in `skills` exactly.
export const coreStack = [
  "Node.js",
  "React.js",
  "JavaScript",
  "RESTful APIs",
  "MongoDB",
  "Stripe",
];

// The numbers strip under the hero
export const stats = [
  { value: "1+", label: "Year shipping production code" },
  { value: "2", label: "Live marketplaces (Ireland, Thailand)" },
  { value: "2", label: "Payment gateways integrated" },
  { value: "8.57", label: "B.Tech CGPA out of 10" },
];

export type FocusIcon = "payments" | "backend" | "frontend" | "ai";

export const about = {
  title: "I turn product specs into *production* systems.",
  // Each string is a paragraph
  paragraphs: [
    "I'm a **full-stack software engineer** who builds scalable payment systems, RESTful APIs and production SaaS platforms with **Node.js** and **React.js**. I've shipped end-to-end financial workflows integrating **Stripe** and **CashFree** for marketplaces serving users in Ireland and Thailand.",
    "I have strong CS fundamentals in data structures, algorithms and software design, and I care about clean, maintainable code and system design. Lately I've also been building applied AI, like a **RAG-powered support assistant** with FastAPI, ChromaDB and the Gemini API.",
  ],
  focusAreas: [
    {
      icon: "payments" as FocusIcon,
      title: "Payment systems",
      description:
        "Stripe and CashFree flows with webhook processing, idempotent retries and Dev/Staging/Prod configuration.",
    },
    {
      icon: "backend" as FocusIcon,
      title: "Backend & APIs",
      description:
        "RESTful services on Node.js backed by MongoDB, MySQL and Amazon S3.",
    },
    {
      icon: "frontend" as FocusIcon,
      title: "Product frontend",
      description:
        "React.js and Sharetribe marketplaces with custom listing, search and booking flows.",
    },
    {
      icon: "ai" as FocusIcon,
      title: "Applied AI",
      description:
        "RAG pipelines with ChromaDB, embeddings and the Gemini API, served over FastAPI.",
    },
  ],
};

export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript", "Python", "Java", "C/C++", "HTML & CSS"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Sharetribe"],
  },
  {
    category: "Backend",
    items: ["Node.js", "RESTful APIs", "FastAPI"],
  },
  {
    category: "AI/ML",
    items: [
      "RAG",
      "Vector Databases (ChromaDB)",
      "Embeddings",
      "Gemini API",
      "Prompt Engineering",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Cloud & Tools",
    items: ["AWS (Amazon S3)", "Railway", "Git/GitHub"],
  },
  {
    category: "Payments & APIs",
    items: ["Stripe", "CashFree", "Google Maps", "Mapbox", "SendGrid"],
  },
  {
    category: "Concepts",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "System Design",
      "Software Design Principles",
      "Distributed Systems",
    ],
  },
];

export type ProjectStatus = "Live" | "Deployed" | "In progress" | "Research";

export type Project = {
  title: string;
  category: string;
  status: ProjectStatus;
  period?: string;
  role?: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Community Manager Bot",
    category: "AI · RAG",
    status: "Deployed",
    period: "Sep 2026",
    description:
      "A **RAG-powered support assistant** that answers a game studio's player FAQs from its own docs. A **ChromaDB** vector store with local CPU embeddings and paragraph-aware chunking feeds **Gemini**-generated answers grounded strictly in retrieved context. One shared retrieval core powers both a **Discord bot** and an embeddable website chat widget through a **FastAPI** REST API, with per-IP rate limiting, admin re-indexing and session memory, deployed on Railway.",
    tags: ["Python", "FastAPI", "Discord.py", "ChromaDB", "Gemini API"],
  },
  {
    title: "Metta People",
    category: "Marketplace · Thailand",
    status: "In progress",
    period: "Dec 2025 — Present",
    role: "Lead Engineer",
    description:
      "Leading end-to-end development of a **Thailand-based wellness marketplace** on Sharetribe, from design spec to production deployment. I've customised listing flows, search filters and provider onboarding in **React.js**, and built a component architecture that improves listing discovery for providers and users.",
    tags: ["React.js", "Node.js", "Sharetribe"],
  },
  {
    title: "Activity Time",
    category: "Marketplace · Ireland",
    status: "Live",
    period: "Jun 2025 — Dec 2025",
    description:
      "A **production marketplace** connecting Irish activity providers with parents. I engineered the **booking, listing and location-based discovery** systems on Node.js and Sharetribe, with custom frontend components tailored to the Irish market's UX and operational needs.",
    tags: ["Node.js", "React.js", "Sharetribe"],
    liveUrl: "https://activity-time.com",
  },
  {
    title: "Crowd Behaviour Detection",
    category: "Computer vision",
    status: "Research",
    description:
      "A **real-time crowd violence detection** system using **YOLOv7 and YOLOv8** with transfer learning. I benchmarked both models on the Hockey Fight and Real-time Violence datasets, weighing inference speed against accuracy to choose the best model.",
    tags: ["Python", "YOLOv7", "YOLOv8"],
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  // Optional career steps inside the company, oldest first
  progression?: { title: string; period: string }[];
  markets?: string[];
  highlights: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Bit Canny Technologies",
    role: "Associate Software Engineer",
    period: "Jun 2025 — Present",
    progression: [
      { title: "Junior Software Engineer", period: "Jun 2025 — Dec 2025" },
      { title: "Associate Software Engineer", period: "Jan 2026 — Present" },
    ],
    markets: ["Ireland", "Thailand"],
    highlights: [
      "Engineered and maintained **production-grade SaaS marketplace platforms** for global markets using **Node.js** and **React.js**, designing scalable backend services and **RESTful APIs** used by real end-users.",
      "Architected end-to-end **payment systems** integrating **Stripe and CashFree**, handling webhook processing, idempotent retries and multi-environment configuration across **Dev/Staging/Prod**.",
      "Designed RESTful API layers backed by **MongoDB** and **MySQL**, with cloud storage on **Amazon S3** and integrations with Google Maps, Mapbox and SendGrid.",
      "Collaborated with cross-functional teams through **code reviews**, code quality standards, Git branching strategies and **technical documentation** such as design specs and architecture notes.",
    ],
    stack: [
      "Node.js",
      "React.js",
      "MongoDB",
      "MySQL",
      "Stripe",
      "CashFree",
      "Amazon S3",
      "Google Maps",
      "Mapbox",
      "SendGrid",
    ],
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  location: string;
  score: string;
  scoreLabel: string;
};

export const education: EducationItem[] = [
  {
    school: "Sister Nivedita University",
    degree: "B.Tech in Computer Science and Business Systems",
    period: "Oct 2021 — Jun 2025",
    location: "Kolkata, West Bengal",
    score: "8.57",
    scoreLabel: "CGPA / 10",
  },
  {
    school: "St. John's High School",
    degree: "Higher Secondary (PCM)",
    period: "Apr 2019 — Mar 2021",
    location: "Kolkata, West Bengal",
    score: "91.75%",
    scoreLabel: "Aggregate",
  },
];

export const contact = {
  title: "Let's build something *great* together.",
  message:
    "I'm open to full-stack and backend engineering roles. Email is the fastest way to reach me.",
};
