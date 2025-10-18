export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  featured: boolean;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "react-performance-tips",
    title: "10 React Performance Tips That Actually Work",
    excerpt: "Learn practical techniques to optimize your React applications and improve user experience.",
    content: "Performance optimization in React is crucial for creating smooth user experiences...",
    author: "Your Name",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "Performance", "JavaScript", "Web Development"],
    image: "/images/blog/react-performance.jpg",
    featured: true,
    slug: "react-performance-tips"
  },
  {
    id: "css-grid-vs-flexbox",
    title: "CSS Grid vs Flexbox: When to Use Which",
    excerpt: "A comprehensive guide to choosing the right CSS layout method for your projects.",
    content: "Both CSS Grid and Flexbox are powerful layout tools, but they serve different purposes...",
    author: "Your Name",
    date: "2024-01-10",
    readTime: "6 min read",
    tags: ["CSS", "Layout", "Web Design", "Frontend"],
    image: "/images/blog/css-grid-flexbox.jpg",
    featured: true,
    slug: "css-grid-vs-flexbox"
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices for Large Applications",
    excerpt: "Essential TypeScript patterns and practices for maintaining large-scale applications.",
    content: "TypeScript can significantly improve code quality and developer experience...",
    author: "Your Name",
    date: "2024-01-05",
    readTime: "10 min read",
    tags: ["TypeScript", "Best Practices", "JavaScript", "Development"],
    image: "/images/blog/typescript-best-practices.jpg",
    featured: false,
    slug: "typescript-best-practices"
  },
  {
    id: "web-accessibility-guide",
    title: "Complete Guide to Web Accessibility",
    excerpt: "Everything you need to know about making your websites accessible to everyone.",
    content: "Web accessibility is not just a nice-to-have feature; it's a fundamental requirement...",
    author: "Your Name",
    date: "2023-12-28",
    readTime: "12 min read",
    tags: ["Accessibility", "WCAG", "Web Development", "UX"],
    image: "/images/blog/web-accessibility.jpg",
    featured: false,
    slug: "web-accessibility-guide"
  },
  {
    id: "nextjs-seo-optimization",
    title: "Next.js SEO Optimization: Complete Guide",
    excerpt: "Learn how to optimize your Next.js applications for search engines.",
    content: "SEO is crucial for any web application, and Next.js provides excellent tools...",
    author: "Your Name",
    date: "2023-12-20",
    readTime: "9 min read",
    tags: ["Next.js", "SEO", "React", "Web Development"],
    image: "/images/blog/nextjs-seo.jpg",
    featured: false,
    slug: "nextjs-seo-optimization"
  }
];

export const featuredPosts = blogPosts.filter(post => post.featured);

export const blogTags = [
  "React",
  "TypeScript",
  "CSS",
  "JavaScript",
  "Next.js",
  "Performance",
  "Accessibility",
  "SEO",
  "Web Development",
  "Frontend",
  "UX",
  "Best Practices"
];
