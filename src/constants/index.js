import project1 from "../assets/inv.png";
import project2 from "../assets/tm.webp";
import project3 from "../assets/sp.jpg";
import project4 from "../assets/portfolio.jpg";
import intern from "../assets/wd.png";
import powerbi from "../assets/power.jpg";
import python from "../assets/python.webp";
import pass from "../assets/komathi_pic.jpg";
import cloud from "../assets/ce.jpg";
import result_yolo from "../assets/result.jpeg";

export const HERO_CONTENT = `I'm an enthusiastic and ambitious Python developer, eager to kickstart my career in the tech industry. With a strong foundation in programming and a passion for building innovative solutions, I've been actively working on various projects to hone my skills in Python, web development, and AI-based applications. My portfolio showcases my journey so far, featuring projects that demonstrate my expertise in Python, Django, OpenCV, and data analysis using tools like PowerBI. I'm excited to contribute to impactful projects and continue growing as a developer.`;

export const ABOUT_TEXT = `I'm an aspiring Python developer with a solid foundation in programming and a passion for building efficient and scalable solutions. My journey in software development began with a deep curiosity for problem-solving, and I've since developed expertise in Python, web development frameworks like Django, and AI-based applications using OpenCV. I enjoy working on projects that challenge me to think critically and creatively, whether it's developing web applications, automating processes, or building AI-driven solutions. Outside of coding, I enjoy staying updated with the latest technologies, contributing to open-source projects, and continuously improving my skills.`;

export const EXPERIENCES = [
  {
    year: "2023",
    role: "Web Developer Intern",
    company: "ELEWAYTE - WIPRO",
    description: `Web development for creating a website on an online platform. Managed a high-performing marketing team, fostering a collaborative and results-driven work environment. Monitored brand consistency across marketing channels and materials.`,
    technologies: ["HTML", "CSS", "React.js"],
  },
  {
    year: "2024",
    role: "Web Developer Intern",
    company: "ZIDIO INFO TECH",
    description: `Web development for real-time chat application creation using MERN Stack Technology.`,
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
];

export const PROJECTS = [
  {
    title: "Inventory Management System",
    image: project1,
    description: `Developed an Inventory Management System for retailer and wholesaler processes, managing stored items and transactions efficiently.`,
    technologies: ["PHP", "MySQL"],
  },
  {
    title: "AI Based Virtual Clinic for Rural India",
    image: project2,
    description: `Developed an AI-assisted telemedicine kiosk for rural India, providing access to doctors via biometric ID and the e-Sanjeevani App for timely medication delivery.`,
    technologies: ["HTML", "CSS", "Django", "Gen AI"],
  },
  {
    title: "AI Enabled Car Parking Using OpenCV",
    image: project3,
    description: `A computer vision-based project that aims to automate the car parking process in busy urban areas using OpenCV.`,
    technologies: ["OpenCV", "Python"],
  },
];

export const CONTACT = {
  name: "Komathi M",
  image: pass,
  address: "Chennai, Tamil Nadu",
  phoneNo: "+91 9943248995",
  email: "komathilakshmi08@gmail.com",
  github: "https://github.com/Komathi08",
  linkedIn: "https://www.linkedin.com/in/komathi-m-76417424a/",
};

export const COURSES = [
  {
    title: "Python Course",
    description: "Completed the Python course from IBM.",
    image: python,
    issuedBy: "IBM",
    date: "N/A",
  },
  {
    title: "Web Development",
    description: "Completed the Web Development course from Zidio Technology.",
    image: intern,
    issuedBy: "Zidio Technology",
    date: "N/A",
  },
  {
    title: "Cloud Essentials",
    description: "Completed the Cloud Essentials course from IBM.",
    image: cloud,
    issuedBy: "IBM",
    date: "N/A",
  },
  {
    title: "Web Development",
    description: "Completed the Web Development course from Elewayte.",
    image: intern,
    issuedBy: "Elewayte",
    date: "N/A",
  },
  {
    title: "Power BI",
    description: "Completed the Power BI course from Atos Pray-as Foundation.",
    image: powerbi,
    issuedBy: "Atos Pray-as Foundation",
    date: "N/A",
  },
];
