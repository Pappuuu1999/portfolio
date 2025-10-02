import project1_img from '../assets/project_1.jpg'
import project2_img from '../assets/project_2.svg'
import project3_img from '../assets/project_3.svg'
import project4_img from '../assets/project_4.svg'
import project5_img from '../assets/project_5.svg'
import project6_img from '../assets/project_6.svg'

const mywork_data = [
    {
        id:1,
        name:"Web design",
        w_img:project1_img,
        link:"https://absolutemobility.com.pk",
        category:"web-design",
        description:"Professional web design services creating modern, responsive websites that deliver exceptional user experiences and drive business growth.",
        features:["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX", "Cross-browser Compatible"],
        technologies:["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
        projects:[
            {name:"E-commerce Platform", img:project1_img, link:"https://absolutemobility.com.pk"},
            {name:"Corporate Website", img:project2_img},
            {name:"Portfolio Site", img:project3_img}
        ]
    },
    {
        id:2,
        name:"Graphics design",
        w_img:project2_img,
        category:"graphics-design",
        description:"Creative graphic design solutions including logos, branding, marketing materials, and visual content that makes your brand stand out.",
        features:["Logo Design", "Brand Identity", "Print Design", "Digital Graphics", "Marketing Materials"],
        technologies:["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva", "CorelDRAW"],
        projects:[
            {name:"Brand Identity Package", img:project2_img},
            {name:"Logo Design Collection", img:project3_img},
            {name:"Marketing Campaign", img:project4_img}
        ]
    },
    {
        id:3,
        name:"Social media",
        w_img:project3_img,
        category:"social-media",
        description:"Comprehensive social media management and content creation to build your online presence and engage with your audience effectively.",
        features:["Content Creation", "Social Media Strategy", "Community Management", "Analytics & Reporting", "Paid Advertising"],
        technologies:["Facebook Ads", "Instagram Marketing", "LinkedIn", "Twitter", "TikTok"],
        projects:[
            {name:"Instagram Campaign", img:project3_img},
            {name:"Facebook Business Page", img:project4_img},
            {name:"LinkedIn Strategy", img:project5_img}
        ]
    },
    {
        id:4,
        name:"App design",
        w_img:project4_img,
        category:"app-design",
        description:"User-centered mobile and web app design focusing on intuitive interfaces and seamless user experiences across all devices.",
        features:["Mobile App Design", "Web App Interface", "User Experience", "Prototyping", "User Testing"],
        technologies:["React Native", "Flutter", "Figma", "Adobe XD", "Sketch"],
        projects:[
            {name:"Mobile Banking App", img:project4_img},
            {name:"Food Delivery App", img:project5_img},
            {name:"Fitness Tracker", img:project6_img}
        ]
    },
    {
        id:5,
        name:"Digital marketing",
        w_img:project5_img,
        category:"digital-marketing",
        description:"Data-driven digital marketing strategies to increase brand visibility, drive traffic, and generate leads for your business.",
        features:["SEO Optimization", "PPC Campaigns", "Email Marketing", "Content Marketing", "Analytics"],
        technologies:["Google Ads", "Facebook Ads", "Google Analytics", "Mailchimp", "SEMrush"],
        projects:[
            {name:"SEO Campaign", img:project5_img},
            {name:"Google Ads Strategy", img:project6_img},
            {name:"Email Marketing", img:project1_img}
        ]
    },
    {
        id:6,
        name:"Content writing",
        w_img:project6_img,
        category:"content-writing",
        description:"Professional content writing services including blog posts, website copy, and marketing content that engages and converts your audience.",
        features:["Blog Writing", "Website Copy", "Marketing Content", "SEO Writing", "Technical Writing"],
        technologies:["WordPress", "Grammarly", "Hemingway", "SEMrush", "Ahrefs"],
        projects:[
            {name:"Blog Content Strategy", img:project6_img},
            {name:"Website Copy", img:project1_img},
            {name:"Marketing Campaign", img:project2_img}
        ]
    },
]
 
export default mywork_data;