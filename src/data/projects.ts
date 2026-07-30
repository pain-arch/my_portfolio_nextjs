import aimock from "@/assets/images/ai-mock.png";
import fluentLang from "@/assets/images/fluent-lang.png";
import buildx from "@/assets/images/buildx.png";
import prochesta from "@/assets/images/prochesta.png";
import next_blog from "@/assets/images/next-blog.png";
import darkSaas from "@/assets/images/dark-saas-landing-page.png";
import lightSaas from "@/assets/images/light-saas-landing-page.png";
import aiStartup from "@/assets/images/ai-startup-landing-page.png";
import arroyoInsurance from "@/assets/images/arroyo-insurance.png";
import aBitRude from "@/assets/images/a-bit-rude.png";
import eastRiverPlaza from "@/assets/images/east-river-plaza.png";
import einfachFinanzieren from "@/assets/images/einfach-finanzieren.png";
import childPsychologyAssessments from "@/assets/images/child-psychology-assessments.png";

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
  duration?: string;
}

export const allProjects: Project[] = [
  {
    id: "arroyo-insurance",
    title: "Arroyo Insurance",
    description: "Responsive insurance website for tailored business and personal coverage",
    longDescription: "A conversion-focused insurance website that organizes commercial and personal coverage into clear service journeys, with dedicated quote requests, consultation calls to action, FAQs, team information, and location content.",
    company: "Insurance Website",
    year: "2025",
    category: "Landing Page",
    technologies: ["WordPress", "Elementor", "JavaScript", "jQuery", "Swiper", "Yoast SEO"],
    features: [
      "Business and personal insurance service journeys",
      "Quote and consultation conversion paths",
      "Coverage pages for auto, property, liability, cyber, and workers' compensation",
      "Responsive navigation and service discovery",
      "Insurance FAQ and guidance content",
      "Team and location information"
    ],
    results: [
      { title: "Business and personal insurance journeys" },
      { title: "Quote and consultation conversion paths" },
      { title: "Responsive service and FAQ experience" },
    ],
    link: "https://arroyoins.com/",
    image: arroyoInsurance,
    status: "Completed"
  },
  {
    id: "a-bit-rude",
    title: "A Bit Rude",
    description: "Bold WooCommerce storefront for apparel, mugs, and novelty products",
    longDescription: "A personality-led e-commerce experience with a vibrant storefront, featured products, new arrivals, product variants, customer accounts, cart functionality, newsletter capture, and supporting policy pages.",
    company: "E-commerce Store",
    year: "2026",
    category: "Web Application",
    technologies: ["WordPress", "WooCommerce", "Elementor", "JavaScript", "jQuery", "Swiper", "Yoast SEO"],
    features: [
      "WooCommerce product catalogue",
      "Product variants and shopping cart",
      "Customer account experience",
      "Featured products and new arrivals",
      "Newsletter signup integration",
      "Cookie preferences and store policies"
    ],
    results: [
      { title: "WooCommerce storefront and product catalogue" },
      { title: "Variants, cart, and account workflows" },
      { title: "Newsletter and consent integrations" },
    ],
    link: "https://abitrude.co/",
    image: aBitRude,
    status: "Completed"
  },
  {
    id: "east-river-plaza",
    title: "East River Plaza",
    description: "Destination website for a major East Harlem shopping and community hub",
    longDescription: "A content-rich property website that helps visitors explore East River Plaza's retailers, events, local art, community initiatives, news, parking, public transportation, and leasing information.",
    company: "Retail Property Website",
    year: "2024",
    category: "Web Application",
    technologies: ["WordPress", "Elementor", "JavaScript", "jQuery", "Swiper", "Responsive Design"],
    features: [
      "Retailer directory and property overview",
      "Events, news, and community content",
      "Local artist gallery",
      "Parking and public transportation resources",
      "Leasing information and contact paths",
      "Responsive multimedia experience"
    ],
    results: [
      { title: "Retailer directory and property overview" },
      { title: "Events, local art, news, and community content" },
      { title: "Parking, transit, and leasing resources" },
    ],
    link: "https://eastriverplaza.com/",
    image: eastRiverPlaza,
    status: "Completed"
  },
  {
    id: "einfach-finanzieren",
    title: "Einfach Finanzieren",
    description: "Swiss mortgage platform with guidance, affordability tools, and lead capture",
    longDescription: "A German-language mortgage website that guides customers from initial affordability questions to a tailored financing request, supported by a mortgage calculator, a four-step process, testimonials, and consultation forms.",
    company: "Mortgage Platform",
    year: "2025",
    category: "Web Application",
    technologies: ["WordPress", "Elementor", "JavaScript", "jQuery", "Swiper", "Yoast SEO"],
    features: [
      "Mortgage guidance and inquiry funnel",
      "Property affordability calculator",
      "Four-step financing journey",
      "Tailored mortgage solution content",
      "Customer testimonials",
      "Consultation and contact forms"
    ],
    results: [
      { title: "Mortgage guidance and inquiry funnel" },
      { title: "Integrated property affordability calculator" },
      { title: "Four-step financing journey with testimonials" },
    ],
    link: "https://einfachfinanzieren.ch/",
    image: einfachFinanzieren,
    status: "Completed"
  },
  {
    id: "child-psychology-assessments",
    title: "Child Psychology Assessments",
    description: "Supportive psychology website for assessments, counselling, and family care",
    longDescription: "A reassuring healthcare website that explains psychology, counselling, and assessment services for children, including ADHD, autism, learning, and cognitive assessments delivered across home, school, and clinic settings.",
    company: "Healthcare Website",
    year: "2026",
    category: "Landing Page",
    technologies: ["WordPress", "Elementor", "JavaScript", "jQuery", "Swiper", "Responsive Design"],
    features: [
      "Psychology, counselling, and assessment service pathways",
      "ADHD and autism assessment information",
      "Learning and cognitive assessment guidance",
      "Home, school, and clinic service options",
      "Frequently asked questions",
      "Session and assessment booking calls to action"
    ],
    results: [
      { title: "Psychology, counselling, and assessment services" },
      { title: "ADHD, autism, learning, and cognitive pathways" },
      { title: "Booking flow for home, school, and clinic support" },
    ],
    link: "https://childpsychologyassessments.com.au/",
    image: childPsychologyAssessments,
    status: "Completed"
  },
  {
    id: "spark-studio",
    title: "Spark Studio",
    description: "Website development studio helping businesses launch responsive digital experiences",
    longDescription: "A conversion-focused studio website that guides customers from an initial idea to launch through a clear three-step journey, supported by service features, plan comparisons, testimonials, account access, and strong calls to action.",
    company: "Web Development Studio",
    year: "2026",
    category: "Landing Page",
    technologies: ["Next.js", "React", "Tailwind CSS", "Clerk", "Vercel", "Responsive Design"],
    features: [
      "Three-step signup, customization, and launch journey",
      "Website plan and pricing comparison",
      "Customizable template offering",
      "SEO and responsive design positioning",
      "E-commerce and secure hosting support",
      "Clerk-powered account authentication"
    ],
    results: [
      { title: "Three-step signup, customize, and launch journey" },
      { title: "Plan comparison and conversion-focused pricing" },
      { title: "SEO, e-commerce, and secure hosting feature set" },
    ],
    link: "https://spark-studio-ltd.vercel.app/",
    image: "/project-images/spark-studio.svg",
    status: "Completed"
  },
  {
    id: "userlify",
    title: "Userlify",
    description: "Startup-focused design agency turning product ideas into polished digital experiences",
    longDescription: "A portfolio-led design agency website presenting UI/UX design, web development, product strategy, and brand identity services through project showcases, mobile and web design examples, founder-focused positioning, and client testimonials.",
    company: "Product Design Agency",
    year: "2026",
    category: "Landing Page",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel", "Responsive Design"],
    features: [
      "UI/UX and product design service presentation",
      "Web development and product strategy offerings",
      "Brand identity capabilities",
      "Responsive project showcase",
      "Startup-focused value proposition",
      "Client testimonials and consultation calls to action"
    ],
    results: [
      { title: "Startup-focused design and development services" },
      { title: "Portfolio-led product and device showcase" },
      { title: "Founder testimonials and consultation flow" },
    ],
    link: "https://userlify.vercel.app/",
    image: "/project-images/userlify.png",
    status: "Completed"
  },
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
    status: "In Progress",
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
    status: "In Progress", 
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
  "2026",
  "2025",
  "2024",
  "2023", 
  "2022",
  "2021",
  "2020"
] as const;

export const allTechnologies = [
  "WordPress",
  "Elementor",
  "WooCommerce",
  "Clerk",
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
  "Swiper",
  "Yoast SEO",
  "Vercel",
  "OpenAI API",
  "Responsive Design"
] as const;
