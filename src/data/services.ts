export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price?: string;
  duration?: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices.",
    features: [
      "Responsive design",
      "Performance optimization",
      "SEO-friendly code",
      "Cross-browser compatibility",
      "Mobile-first approach"
    ],
    price: "Starting at $2,500",
    duration: "2-4 weeks",
    icon: "Code"
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Beautiful and intuitive user interfaces that provide exceptional user experiences.",
    features: [
      "User research and analysis",
      "Wireframing and prototyping",
      "Visual design",
      "Usability testing",
      "Design system creation"
    ],
    price: "Starting at $1,500",
    duration: "1-3 weeks",
    icon: "Palette"
  },
  {
    id: "consulting",
    title: "Technical Consulting",
    description: "Expert guidance on technology choices, architecture, and development processes.",
    features: [
      "Technology stack recommendations",
      "Code reviews",
      "Architecture planning",
      "Performance audits",
      "Team mentoring"
    ],
    price: "$150/hour",
    duration: "Flexible",
    icon: "Lightbulb"
  },
  {
    id: "maintenance",
    title: "Website Maintenance",
    description: "Ongoing support and maintenance to keep your website running smoothly.",
    features: [
      "Regular updates",
      "Security monitoring",
      "Performance optimization",
      "Bug fixes",
      "Content updates"
    ],
    price: "Starting at $200/month",
    duration: "Ongoing",
    icon: "Settings"
  }
];

export const testimonials = [
  {
    id: "testimonial-1",
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and exceeded all our expectations. The code quality and attention to detail were outstanding.",
    rating: 5,
    image: "/images/testimonials/sarah.jpg"
  },
  {
    id: "testimonial-2",
    name: "Michael Chen",
    role: "Product Manager, Digital Agency",
    content: "The UI/UX design work was exceptional. Our user engagement increased by 40% after implementing the new design. Highly recommend for any design or development project.",
    rating: 5,
    image: "/images/testimonials/michael.jpg"
  },
  {
    id: "testimonial-3",
    name: "Emily Rodriguez",
    role: "Founder, StartupXYZ",
    content: "Professional, reliable, and incredibly talented. They helped us build our MVP from scratch and provided valuable technical guidance throughout the process.",
    rating: 5,
    image: "/images/testimonials/emily.jpg"
  }
];

export const process = [
  {
    step: 1,
    title: "Discovery & Planning",
    description: "We start by understanding your goals, target audience, and requirements through detailed discussions and research.",
    duration: "1-2 days"
  },
  {
    step: 2,
    title: "Design & Prototyping",
    description: "Create wireframes, mockups, and interactive prototypes to visualize the final product before development begins.",
    duration: "3-5 days"
  },
  {
    step: 3,
    title: "Development & Testing",
    description: "Build the application using modern technologies, following best practices and conducting thorough testing.",
    duration: "1-3 weeks"
  },
  {
    step: 4,
    title: "Launch & Support",
    description: "Deploy the application, provide training, and offer ongoing support to ensure everything runs smoothly.",
    duration: "Ongoing"
  }
];
