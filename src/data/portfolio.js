// Semua konten portofolio ada di sini. Ubah file ini saja untuk memperbarui isi website.

export const profile = {
  name: "Veronica",
  nickname: "Vero",
  role: "Fullstack Developer",
  location: "Banten, Indonesia",
  email: "veyolie@gmail.com",
  phone: "(+62) 878-8830-2321",
  whatsapp: "https://wa.me/6287888302321",
  linkedin: "https://www.linkedin.com/in/veronica-a245a6197/",
  instagram: "https://www.instagram.com/vero_liee/",
  tagline:
    "I build end-to-end web systems, from logistics and finance platforms to AI-powered tools, with a strong background in fintech backend engineering.",
  about: [
    "I'm a Fullstack Developer with a Bachelor's degree in Information Systems from Universitas Multimedia Nusantara. My career started in fintech, where I built and maintained payment gateway services, transaction reporting, and high-volume schedulers.",
    "Today I work across the whole stack: designing interfaces in Figma, building web apps with Next.js and TypeScript, and developing backend services for export-import cargo, customs (CEISA) integration, and finance management. I've also integrated AI, like a natural-language chatbot for master data and Groq AI for validating calculations.",
    "I enjoy turning complex business processes into reliable, easy-to-use software.",
  ],
  stats: [
    { value: "3+", label: "Years of experience" },
    { value: "4", label: "Companies" },
    { value: "3.72", label: "GPA / 4.00" },
  ],
};

export const skills = [
  {
    title: "Frontend",
    icon: "ph:browser-duotone",
    items: ["Next.js", "TypeScript", "JavaScript", "HTML5", "CSS", "SCSS"],
  },
  {
    title: "Backend & Database",
    icon: "ph:database-duotone",
    items: [
      "Golang",
      "TypeScript",
      "REST API",
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "MongoDB",
    ],
  },
  {
    title: "Programming Languages",
    icon: "ph:code-duotone",
    items: ["Go", "PHP", "Java", "JavaScript", "C#", "R"],
  },
  {
    title: "Tools & Others",
    icon: "ph:wrench-duotone",
    items: [
      "Figma",
      "Laravel",
      "GitHub",
      "Ubuntu",
      "FileZilla",
      "Android Studio",
      "VS Code",
      "Tableau",
      "RStudio",
      "Excel",
    ],
  },
];

export const experiences = [
  {
    company: "PT. Kolaborasi Tujuh Pelangi",
    role: "Fullstack Developer",
    start: "Jun 2025",
    end: "Present",
    highlights: [
      "Developed and enhanced an end-to-end export-import cargo management system, managing cargo flows from overseas shipment and customs clearance to warehouse processing and final release, with integration supporting CEISA and Indonesian Customs processes.",
      "Developed a finance management system for tracking and processing billing, receivables, and payables associated with export-import operations, improving financial visibility throughout the cargo lifecycle.",
    ],
    tags: ["Fullstack", "Logistics", "CEISA Integration", "Finance System"],
  },
  {
    company: "PT. Gema Phala Ananta",
    role: "Fullstack Developer",
    start: "Aug 2024",
    end: "Present",
    highlights: [
      "Designed and contributed to the UI/UX of websites using Figma to create a user-friendly and visually appealing interface.",
      "Developed and integrated an AI-powered chatbot for automated master data management, enabling users to perform create, update, and delete operations through natural language commands.",
      "Integrated Groq AI to analyze and validate gas fuel consumption calculations, generating analytical insights and connecting the results with expert analysis to improve calculation accuracy and decision support.",
    ],
    tags: ["Next.js", "TypeScript", "Figma", "AI Chatbot", "Groq AI"],
  },
  {
    company: "PT. Finexus Group Jakarta",
    role: "Software Engineer (Fintech)",
    start: "Jun 2023",
    end: "Jun 2024",
    highlights: [
      "Analyzed, maintained, and enhanced complex payment gateway systems by resolving technical issues, implementing functional improvements, and optimizing system reliability and performance.",
      "Analyzed payment gateway business processes and program workflows, particularly in scheduling and service environments.",
      "Optimized scheduler performance to handle thousands of daily transactions and concurrent jobs, improving processing efficiency while preventing conflicts between simultaneously running processes.",
    ],
    tags: ["Payment Gateway", "Scheduler", "Linux", "SQL"],
  },
  {
    company: "PT. Finpoint Solusi Indonesia",
    role: "Backend Developer (Fintech)",
    start: "Jun 2022",
    end: "Dec 2022",
    highlights: [
      "Created and implemented daily and monthly transaction reports to enhance financial insights and tracking.",
      "Integrated payment gateway APIs with the frontend to enable seamless access to transaction data and reporting.",
      "Implemented MongoDB for transaction processing to support flexible and dynamic data structures, replacing PostgreSQL for transaction flow management.",
    ],
    tags: ["Golang", "REST API", "PostgreSQL", "MongoDB"],
  },
];

export const education = {
  school: "Universitas Multimedia Nusantara",
  degree: "Bachelor Degree, Information Systems",
  start: "2019",
  end: "2023",
  gpa: "3.72 / 4.00",
  activities: [
    {
      title: "Laboratory Assistant, Visual Programming (C#)",
      date: "Jan 2022 – Jun 2022",
    },
    {
      title: "Laboratory Assistant, Probability & Statistics (R)",
      date: "Aug 2021 – Dec 2021",
    },
  ],
};

export const achievements = [
  {
    title: "First Place & Public Favorite, Startup Weekend",
    project: "Gajiku",
    description:
      "Pitched Gajiku, an idea for making saving money more fun, and won both the judges' first place and the audience's public favorite award.",
    date: "Oct 2022",
  },
];
