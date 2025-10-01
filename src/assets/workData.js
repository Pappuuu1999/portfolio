// Import images from src/assets
import project1 from "../assets/project_1.jpg";

const servicesData = [
  {
    id: "01",
    title: "Web Development",
    description: "Building responsive and modern websites tailored to your business needs.",
    features: [
      "Responsive Design",
      "SEO Friendly",
      "Cross-Browser Compatibility",
      "Performance Optimization"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    tools: ["VS Code", "GitHub", "Postman", "Figma"],
    projects: [
      {
        name: "E-commerce Website",
        img: project1,   // ✅ imported image
        link: "https://example.com/ecommerce"
      }
    ]
  },
  {
    id: "02",
    title: "Graphic Design",
    description: "Crafting visually stunning graphics that represent your brand identity.",
    features: [
      "Logo Design",
      "Brand Identity",
      "Social Media Graphics"
    ],
    technologies: ["Adobe Photoshop", "Illustrator", "Canva"],
    tools: ["Adobe Creative Suite", "Canva", "Figma"],
    projects: [
      {
        name: "Brand Kit",
        img: project1,   // ✅ same image (you can import more if needed)
        link: "https://example.com/brand-kit"
      }
    ]
  },
  {
    id: "03",
    title: "Digital Marketing",
    description: "Helping your business grow with targeted digital campaigns.",
    features: [
      "SEO Optimization",
      "Content Creation",
      "Ad Campaigns"
    ],
    technologies: ["Google Ads", "Facebook Ads", "Instagram"],
    tools: ["Hootsuite", "Canva", "Google Analytics"],
    projects: [
      {
        name: "Ad Campaign",
        img: project1,   // ✅ same image
        link: "https://example.com/ad-campaign"
      }
    ]
  }
];

export default servicesData;
