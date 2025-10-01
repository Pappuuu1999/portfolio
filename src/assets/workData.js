import ecommerceImage from './projects/ecommerce.jpg';
import brandKitImage from './projects/brand-kit.jpg';
import adCampaignImage from './projects/ad-campaign.jpg';

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
        img: ecommerceImage,
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
        img: brandKitImage,
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
        img: adCampaignImage,
        link: "https://example.com/ad-campaign"
      }
    ]
  }
];

export default servicesData;