import aimock from "@/assets/images/ai-mock.png";
import fluentLang from "@/assets/images/fluent-lang.png";
import buildx from "@/assets/images/buildx.png";
import prochesta from "@/assets/images/prochesta.png";
import next_blog from "@/assets/images/next-blog.png";
import darkSaas from "@/assets/images/dark-saas-landing-page.png";
import lightSaas from "@/assets/images/light-saas-landing-page.png";
import aiStartup from "@/assets/images/ai-startup-landing-page.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  company: string;
  year: string;
  category: 'Web Application' | 'Landing Page' | 'Mobile App' | 'API' | 'Tool';
  technologies: string[];
  features: string[];
  results: Array<{ title: string }>;
  link: string;
  githubLink?: string;
  image: any;
  status: 'Completed' | 'In Progress' | 'Planned';
  duration: string;
}

export const allProjects: Project[] = [
  {
    id: "ai-mock-interview",
    title: "Mock AI Interview Website",
    description: "AI-powered interview practice platform with real-time feedback",
    longDescription: "A comprehensive AI interview preparation platform that helps users practice technical and behavioral interviews with real-time feedback, speech recognition, and personalized improvement suggestions.",
    company: "Web Application",
    year: "2024",
    category: "Web Application",
    technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS", "Vercel", "Speech Recognition"],
    features: [
      "AI-powered interview simulation",
      "Real-time speech recognition",
      "Personalized feedback system",
      "Multiple interview types",
      "Progress tracking",
      "Resume analysis"
    ],
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://mock-ai-interview-website.vercel.app/",
    githubLink: "https://github.com/pain-arch/mock-ai-interview",
    image: aimock,
    status: "Completed",
    duration: "3 months"
  },
  {
    id: "next-blog",
    title: "Next.js Blog Website",
    description: "Modern blog platform with dynamic content management",
    longDescription: "A fully-featured blog website built with Next.js featuring dynamic routing, SEO optimization, markdown support, and a clean, responsive design perfect for content creators.",
    company: "Web Application", 
    year: "2023",
    category: "Web Application",
    technologies: ["Next.js", "React", "Markdown", "CSS Modules", "Vercel", "SEO"],
    features: [
      "Dynamic blog routing",
      "Markdown content support",
      "SEO optimization",
      "Responsive design",
      "Social media integration",
      "Search functionality"
    ],
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://next-blog-sepia-five.vercel.app/",
    githubLink: "https://github.com/pain-arch/next-blog",
    image: next_blog,
    status: "Completed",
    duration: "2 months"
  },
  {
    id: "prochesta-fundraising",
    title: "Prochesta - Fund Raising Website",
    description: "Crowdfunding platform for social causes and startups",
    longDescription: "A comprehensive crowdfunding platform that connects project creators with potential backers, featuring secure payment processing, project tracking, and social sharing capabilities.",
    company: "Web Application",
    year: "2021", 
    category: "Web Application",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL"],
    features: [
      "User authentication system",
      "Project creation tools",
      "Payment integration",
      "Social sharing",
      "Progress tracking",
      "Admin dashboard"
    ],
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://procheshta.netlify.app/",
    image: prochesta,
    status: "Completed",
    duration: "4 months"
  },
  {
    id: "fluent-language",
    title: "Fluent Language Learning Website",
    description: "Interactive language learning platform with gamification",
    longDescription: "An engaging language learning platform featuring interactive lessons, progress tracking, gamification elements, and community features to make language learning fun and effective.",
    company: "Web Application",
    year: "2021",
    category: "Web Application", 
    technologies: ["React", "JavaScript", "CSS3", "Local Storage", "Responsive Design"],
    features: [
      "Interactive language lessons",
      "Progress tracking system",
      "Gamification elements",
      "Multiple language support",
      "Responsive design",
      "Offline capabilities"
    ],
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://fluentlang010.netlify.app/",
    image: fluentLang,
    status: "Completed",
    duration: "3 months"
  },
  {
    id: "buildx-construction",
    title: "Buildx - Construction Company Website",
    description: "Professional construction company website with project showcase",
    longDescription: "A professional website for a construction company featuring project portfolios, service listings, team information, and contact forms with a modern, industry-appropriate design.",
    company: "Html, Css, Js website",
    year: "2020",
    category: "Landing Page",
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Responsive Design"],
    features: [
      "Project portfolio showcase",
      "Service listings",
      "Team member profiles",
      "Contact forms",
      "Image galleries",
      "Mobile optimization"
    ],
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://pain-arch.github.io/builder-jquery/",
    githubLink: "https://github.com/pain-arch/builder-jquery",
    image: buildx,
    status: "Completed",
    duration: "2 months"
  },
  {
    id: "dark-saas-landing",
    title: "Dark SaaS Landing Page",
    description: "Modern dark-themed SaaS product landing page",
    longDescription: "A sleek, dark-themed landing page designed for SaaS products with modern animations, responsive design, and conversion-optimized layout to maximize user engagement and sign-ups.",
    company: "Landing Page",
    year: "2024",
    category: "Landing Page",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Responsive Design"],
    features: [
      "Dark theme design",
      "Smooth animations", 
      "Conversion optimization",
      "Mobile-first approach",
      "Performance optimized",
      "SEO friendly"
    ],
    results: [
      { title: "Increased conversion rate by 25%" },
      { title: "Reduced bounce rate by 30%" },
      { title: "Improved loading speed by 45%" },
    ],
    link: "#",
    image: darkSaas,
    status: "Completed",
    duration: "1 month"
  },
  {
    id: "light-saas-landing",
    title: "Light SaaS Landing Page", 
    description: "Clean, light-themed SaaS product showcase",
    longDescription: "A bright and clean landing page design perfect for SaaS products, featuring intuitive navigation, clear value propositions, and strategically placed call-to-action buttons.",
    company: "Landing Page",
    year: "2024",
    category: "Landing Page",
    technologies: ["React", "Styled Components", "TypeScript", "Vercel", "Responsive Design"],
    features: [
      "Light theme design",
      "Clean typography",
      "Strategic CTAs",
      "Feature highlights",
      "Testimonial sections",
      "Pricing tables"
    ],
    results: [
      { title: "Enhanced user engagement by 35%" },
      { title: "Increased demo requests by 50%" },
      { title: "Improved mobile experience by 40%" },
    ],
    link: "#",
    image: lightSaas,
    status: "Completed", 
    duration: "1 month"
  },
  {
    id: "ai-startup-landing",
    title: "AI Startup Landing Page",
    description: "Cutting-edge landing page for AI technology startup",
    longDescription: "A futuristic and innovative landing page designed specifically for AI startups, featuring dynamic animations, interactive elements, and a design that communicates technological advancement.",
    company: "Landing Page",
    year: "2024",
    category: "Landing Page", 
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Three.js", "TypeScript"],
    features: [
      "Interactive 3D elements",
      "AI-themed animations",
      "Modern gradient designs",
      "Particle effects",
      "Dynamic content",
      "Performance optimized"
    ],
    results: [
      { title: "Captured investor attention by 60%" },
      { title: "Increased sign-ups by 45%" },
      { title: "Enhanced brand perception by 50%" },
    ],
    link: "#",
    image: aiStartup,
    status: "In Progress",
    duration: "2 months"
  }
];

export const projectCategories = [
  "All",
  "Web Application", 
  "Landing Page",
  "Mobile App",
  "API",
  "Tool"
] as const;

export const projectYears = [
  "All",
  "2024",
  "2023", 
  "2022",
  "2021",
  "2020"
] as const;

export const allTechnologies = [
  "Next.js",
  "React", 
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "CSS3",
  "HTML5",
  "Node.js",
  "Framer Motion",
  "Three.js",
  "PHP",
  "MySQL",
  "Bootstrap",
  "jQuery",
  "Vercel",
  "OpenAI API"
] as const;