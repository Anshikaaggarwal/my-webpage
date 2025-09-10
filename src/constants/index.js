export const experienceData = [
  {
    title: "AMTS Intern - Salesforce",
    period: "May 2025 – July 2025", // exact months included
    description:
      "At Salesforce, I developed and tested MuleSoft connectors using Java, ensuring high reliability in enterprise integrations. I wrote over 700 MUnits and JUnits, achieving more than 80% test coverage. I also automated workflows with Selenium, resolved critical code issues using SonarQube, and managed CI/CD pipelines and deployments with Jenkins.",
    items: [
      { title: "Connector Development", description: "MuleSoft connectors in Java" },
      { title: "Automation", description: "Selenium scripts & CI/CD with Jenkins" },
      { title: "Testing", description: "700+ MUnits & JUnits (>80% coverage)" },
    ],
  },
  {
    title: "Frontend Developer Intern - ZySec AI",
    period: "May 2024 – July 2024",
    description:
      "Contributed to ZySec AI’s blogging platform by building and optimizing frontend components with ReactJS. I developed reusable UI components to handle user input efficiently, improved performance with encapsulation techniques, and collaborated with peers to deliver a smooth, interactive user experience.",
    items: [
      { title: "Frontend Development", description: "ReactJS components" },
      { title: "UI Optimization", description: "Reusable, encapsulated input handling" },
    ],
  },
  {
    title: "Web Development Mentor",
    period: "Jan 2023 – Dec 2023",
    description:
      "As a web development mentor, I taught JavaScript to over 20 mentees in an online cohort. I designed lesson plans, created coding challenges, and helped mentees refine their design and development skills by guiding them through real-world projects.",
    items: [
      { title: "Mentorship", description: "JavaScript, frontend guidance" },
      { title: "Community", description: "1:1 project and design feedback" },
    ],
  },
  {
    title: "Vice President - AssetMerkle IGDTUW",
    period: "Aug 2023 – May 2024",
    description:
      "Led AssetMerkle, a community focused on NFTs, Web3, and blockchain technologies. I organized 10+ events, built collaborations with companies and blockchain enthusiasts, and secured sponsorships for workshops and hackathons, driving both technical learning and community growth.",
    items: [
      { title: "Leadership", description: "Community management & vision" },
      { title: "Event Management", description: "10+ blockchain-focused events" },
      { title: "Collaboration", description: "Industry partnerships & sponsorships" },
    ],
  },
];

// Skills Section (square bracket style)
// Skills Section (square bracket style)
export const skillsData = [
  {
    title: "Programming Languages",
    items: ["C", "C++", "HTML", "CSS", "JavaScript", "SQL", "Python"],
  },
  {
    title: "Backend & Databases",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Libraries, Frameworks & Tools",
    items: [
      "ReactJS",
      "NextJS",
      "Tailwind CSS",
      "Shadcn",
      "Bootstrap",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Jupyter Notebooks",
    ],
  },
  {
    title: "Soft Skills",
    items: ["Leadership", "Event Management", "Writing", "Public Speaking"],
  },
];


export const projects = [
  {
    id: 1,
    name: "Transcare",
    description:
      "A healthcare platform for the LGBTQ+ community with FastAPI backend, PostgreSQL, and ML-based HRT risk assessment. Includes telemedicine consultations, trackers, chatbot, and inclusive features.",
    href: "https://github.com/mahak2005/transcare",
    image: "/assets/projects/transcare.jpg",
    bgImage: "/assets/backgrounds/trans.jpg",
    frameworks: [
      { id: 1, name: "FastAPI" },
      { id: 2, name: "PostgreSQL" },
      { id: 3, name: "ReactJS" },
      { id: 4, name: "NextJS" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "ThriveAgro",
    description:
      "Web app to digitize farming data, support SDGs (No Poverty & Zero Hunger), and provide inventory management & reporting for farmers.",
    href: "https://github.com/ayuugoyal/thriveagro",
    image: "/assets/projects/thrive-agro.png",
    bgImage: "/assets/backgrounds/farmers.jpg",
    frameworks: [
      { id: 1, name: "NextJS" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "TypeScript" },
      { id: 4, name: "JavaScript" },
    ],
  },
  {
    id: 3,
    name: "IRCTC App",
    description:
      "An improved IRCTC app incorporating a proper seating plan (missing in the official IRCTC app) and priority allocation for female seats. Features a Gen AI-powered voice assistant chatbot built with Gemini API, which listens to user requests and redirects them to ticket booking. Designed as an efficient substitute for the existing Disha chatbot.",
    href: "https://github.com/Anshikaaggarwal/irctc-app",
    image: "/assets/projects/irctc.png", 
    bgImage: "/assets/backgrounds/train.jpg", 
    frameworks: [
      { id: 1, name: "Gen AI" },
      { id: 2, name: "Python" },
      { id: 3, name: "Gemini API" },
    ],
  },
  {
    id: 4,
    name: "Customer App",
    description:
      "Smart Shopping Assistant app with barcode scanning, queue management, and AI-driven personalized recommendations to enhance in-store shopping.",
    href: "https://github.com/Anshikaaggarwal/customer-app",
    image: "/assets/projects/customer-app.jpg",
    bgImage: "/assets/backgrounds/store-app.jpg",
    frameworks: [
      { id: 1, name: "ReactJS" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "JavaScript" },
    ],
  },
];

export const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anshika-aggarwal-704847249/",
  },
  { name: "GitHub", href: "https://github.com/Anshikaaggarwal" },
  { name: "Email", href: "mailto:anshikaaggarwal02@gmail.com" },
  { name: "X", href: "https://x.com/kipupwidanshika" },
];
