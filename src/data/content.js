import project1 from '../assets/project_1.jpg';
import project2 from '../assets/project_2.svg';
import project3 from '../assets/project_3.svg';
import project4 from '../assets/project_4.svg';
import project5 from '../assets/project_5.svg';
import project6 from '../assets/project_6.svg';

// Centralized, static data so the app can run without any backend
export const projects = [
  {
    id: 'brand-site',
    name: 'Brand Identity Site',
    w_img: project1,
    img: project1,
    description: 'One-page brand presence with smooth scroll and contact lead form.',
    link: '#',
    technologies: ['React', 'Vite', 'CSS'],
    features: ['Hero marquee', 'Sticky navbar', 'Lead capture form'],
  },
  {
    id: 'saas-dashboard',
    name: 'SaaS Dashboard',
    w_img: project2,
    img: project2,
    description: 'Lightweight analytics dashboard with reusable UI blocks.',
    link: '#',
    technologies: ['React', 'Context API', 'Charts'],
    features: ['Theming', 'KPI cards', 'Responsive grid'],
  },
  {
    id: 'storefront',
    name: 'Minimal Storefront',
    w_img: project3,
    img: project3,
    description: 'Product landing with sections for highlights, FAQs, and pricing.',
    link: '#',
    technologies: ['React', 'CSS Modules'],
    features: ['Feature highlights', 'FAQ accordion', 'CTA driven layout'],
  },
  {
    id: 'portfolio-refresh',
    name: 'Portfolio Refresh',
    w_img: project4,
    img: project4,
    description: 'Updated personal portfolio with case-study deep dives.',
    link: '#',
    technologies: ['React', 'Vite', 'Animations'],
    features: ['Case study pages', 'Smooth scrolling', 'Image galleries'],
  },
  {
    id: 'agency-landing',
    name: 'Agency Landing',
    w_img: project5,
    img: project5,
    description: 'Conversion-focused landing page for a creative agency.',
    link: '#',
    technologies: ['React', 'CSS'],
    features: ['Service overview', 'Testimonials', 'Contact CTA'],
  },
  {
    id: 'product-teaser',
    name: 'Product Teaser',
    w_img: project6,
    img: project6,
    description: 'Micro-site for an upcoming product with newsletter capture.',
    link: '#',
    technologies: ['React', 'Vite'],
    features: ['Launch countdown', 'Email capture', 'Animated highlights'],
  },
];

export const services = [
  {
    id: 'brand-site',
    name: 'Frontend Development',
    tech: 'React, Vite, CSS',
    description: 'Pixel-perfect marketing and landing pages built for speed.',
  },
  {
    id: 'saas-dashboard',
    name: 'Dashboard UI',
    tech: 'React, Context API',
    description: 'Interactive dashboards with reusable, data-ready components.',
  },
  {
    id: 'storefront',
    name: 'Product Pages',
    tech: 'React, CSS Modules',
    description: 'Clear, high-converting product storytelling and pricing flows.',
  },
  {
    id: 'portfolio-refresh',
    name: 'Case Study Sites',
    tech: 'React, Animations',
    description: 'Narrative-driven sites that showcase projects and outcomes.',
  },
  {
    id: 'agency-landing',
    name: 'Landing Experiments',
    tech: 'React, CSS',
    description: 'Fast experiment-friendly landing pages for campaigns.',
  },
  {
    id: 'product-teaser',
    name: 'Launch Microsites',
    tech: 'React, Vite',
    description: 'Teaser sites with opt-in flows and animated highlights.',
  },
];

export const workDetails = projects.map((project) => ({
  id: project.id,
  name: project.name,
  description: project.description,
  technologies: project.technologies,
  features: project.features,
  projects: [
    {
      img: project.img,
      name: project.name,
      link: project.link,
    },
  ],
}));

