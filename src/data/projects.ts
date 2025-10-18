export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  image: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
  challenges: string[];
  solutions: string[];
  results: string[];
}

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with modern UI and robust backend architecture.",
    longDescription: "Built a comprehensive e-commerce platform from scratch using React, Node.js, and PostgreSQL. The platform includes user authentication, product management, shopping cart, payment integration, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS", "Express"],
    category: "Full Stack",
    image: "/images/projects/ecommerce-main.jpg",
    images: [
      "/images/projects/ecommerce-1.jpg",
      "/images/projects/ecommerce-2.jpg",
      "/images/projects/ecommerce-3.jpg"
    ],
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
    featured: true,
    date: "2023",
    challenges: [
      "Complex state management across multiple components",
      "Secure payment processing integration",
      "Real-time inventory updates"
    ],
    solutions: [
      "Implemented Redux for centralized state management",
      "Integrated Stripe with proper security measures",
      "Used WebSocket for real-time updates"
    ],
    results: [
      "40% increase in conversion rate",
      "99.9% uptime achieved",
      "Handles 1000+ concurrent users"
    ]
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    longDescription: "Developed a modern task management application that allows teams to collaborate effectively. Features include project boards, task assignments, deadline tracking, and real-time notifications.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io", "Framer Motion"],
    category: "Web Application",
    image: "/images/projects/taskapp-main.jpg",
    images: [
      "/images/projects/taskapp-1.jpg",
      "/images/projects/taskapp-2.jpg"
    ],
    liveUrl: "https://taskapp-demo.com",
    githubUrl: "https://github.com/username/task-management",
    featured: true,
    date: "2023",
    challenges: [
      "Real-time collaboration without conflicts",
      "Complex permission system",
      "Mobile responsiveness"
    ],
    solutions: [
      "Implemented operational transformation for conflict resolution",
      "Role-based access control system",
      "Mobile-first responsive design"
    ],
    results: [
      "50% improvement in team productivity",
      "Zero data conflicts in real-time collaboration",
      "95% user satisfaction rating"
    ]
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with location-based forecasts and interactive maps.",
    longDescription: "Created an intuitive weather dashboard that provides detailed weather information, forecasts, and interactive maps. Features include location search, weather alerts, and customizable widgets.",
    technologies: ["React", "OpenWeather API", "Mapbox", "Chart.js", "CSS Modules"],
    category: "Frontend",
    image: "/images/projects/weather-main.jpg",
    images: [
      "/images/projects/weather-1.jpg",
      "/images/projects/weather-2.jpg"
    ],
    liveUrl: "https://weather-dashboard-demo.com",
    githubUrl: "https://github.com/username/weather-dashboard",
    featured: true,
    date: "2022",
    challenges: [
      "Handling multiple API calls efficiently",
      "Creating smooth map interactions",
      "Optimizing for mobile devices"
    ],
    solutions: [
      "Implemented caching and request batching",
      "Used Mapbox GL JS for smooth interactions",
      "Progressive web app features"
    ],
    results: [
      "Sub-second load times",
      "Works offline with cached data",
      "Used by 10,000+ users monthly"
    ]
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description: "A minimalist portfolio website showcasing projects and skills with smooth animations.",
    longDescription: "Designed and developed a clean, modern portfolio website with smooth animations and responsive design. Features include project showcases, skills visualization, and contact form integration.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript", "Formspree"],
    category: "Frontend",
    image: "/images/projects/portfolio-main.jpg",
    images: [
      "/images/projects/portfolio-1.jpg"
    ],
    liveUrl: "https://yourportfolio.com",
    githubUrl: "https://github.com/username/portfolio",
    featured: false,
    date: "2024",
    challenges: [
      "Creating smooth page transitions",
      "Optimizing for performance",
      "SEO optimization"
    ],
    solutions: [
      "Framer Motion for animations",
      "Next.js static generation",
      "Comprehensive meta tags"
    ],
    results: [
      "100% Lighthouse performance score",
      "Perfect SEO score",
      "Fast loading times"
    ]
  },
  {
    id: "api-documentation",
    title: "API Documentation Portal",
    description: "Interactive API documentation with live testing capabilities and code examples.",
    longDescription: "Built a comprehensive API documentation portal that allows developers to test APIs directly in the browser. Features include interactive examples, code snippets, and automated testing.",
    technologies: ["React", "Swagger", "Monaco Editor", "Express", "Jest"],
    category: "Developer Tools",
    image: "/images/projects/api-docs-main.jpg",
    images: [
      "/images/projects/api-docs-1.jpg",
      "/images/projects/api-docs-2.jpg"
    ],
    liveUrl: "https://api-docs-demo.com",
    githubUrl: "https://github.com/username/api-documentation",
    featured: false,
    date: "2022",
    challenges: [
      "Integrating code editor",
      "Real-time API testing",
      "Generating documentation from OpenAPI specs"
    ],
    solutions: [
      "Monaco Editor integration",
      "Proxy server for CORS handling",
      "Swagger UI customization"
    ],
    results: [
      "60% reduction in API support tickets",
      "Developer onboarding time cut by half",
      "95% developer satisfaction"
    ]
  },
  {
    id: "mobile-app-ui",
    title: "Mobile App UI Design",
    description: "Complete UI/UX design for a fitness tracking mobile application.",
    longDescription: "Designed the complete user interface and user experience for a fitness tracking mobile app. Created wireframes, prototypes, and design system for iOS and Android platforms.",
    technologies: ["Figma", "Adobe XD", "Principle", "Sketch"],
    category: "UI/UX Design",
    image: "/images/projects/mobile-ui-main.jpg",
    images: [
      "/images/projects/mobile-ui-1.jpg",
      "/images/projects/mobile-ui-2.jpg"
    ],
    featured: false,
    date: "2023",
    challenges: [
      "Creating intuitive navigation",
      "Designing for multiple screen sizes",
      "Accessibility compliance"
    ],
    solutions: [
      "User-centered design approach",
      "Responsive design system",
      "WCAG 2.1 compliance"
    ],
    results: [
      "4.8/5 app store rating",
      "40% increase in user engagement",
      "Award-winning design"
    ]
  }
];

export const projectCategories = [
  "All",
  "Full Stack",
  "Frontend",
  "Web Application",
  "UI/UX Design",
  "Developer Tools"
];

export const featuredProjects = projects.filter(project => project.featured);
