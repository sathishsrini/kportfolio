import project1 from "../assets/drone.jpg";
import project2 from "../assets/dashboard.png";
import project3 from "../assets/agri.png";
import project4 from "../assets/portfolio.jpg";
import intern from "../assets/intern.jpg";
import powerbi from "../assets/power.jpg";
import python from "../assets/python.webp";
import pass from "../assets/komathi_pic.jpg";
import result_yolo from "../assets/result.jpeg";

export const HERO_CONTENT = `I'm an enthusiastic and ambitious developer, eager to kickstart my career in the tech industry. With a strong foundation in computer science and a passion for building innovative solutions, I've been actively working on various projects to hone my skills. My portfolio showcases my journey so far, featuring projects that demonstrate my understanding of front-end technologies like React and my ability to work with modern tools like Vite.`;

export const ABOUT_TEXT = `I'm an aspiring full stack developer, eager to start my career in the tech industry. With a solid foundation in computer science and a passion for building web applications, I've been actively working on various projects to develop my skills and showcase my creativity. My journey in web development began with a deep curiosity for how things work, and I'm excited to continue learning and growing as a developer. I enjoy solving complex problems, collaborating with others, and delivering high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

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
    description: `Web development for real-time chat application creation using a MREN Stack Technology.`,
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
];

export const PROJECTS = [
  {
    title: "Inventory Management System",
    image: project1,
    description: `Web application developed using PHP and MySQL.`,
    technologies: ["PHP", "MySQL"],
  },
  {
    title: "AI Based Virtual Clinic for Rural India",
    image: project2,
    description: `Developed an AI-assisted telemedicine robotic kiosk for rural India, allowing easy access to expert doctors based on individual health conditions, facilitated by biometric identification and e-sanjeevani App, enabling timely medication delivery.`,
    technologies: ["HTML", "CSS", "Django", "Gen AI"],
  },
  {
    title: "E-Commerce Webpage",
    image: project3,
    description: `Front-end development using HTML, CSS, and React.js.`,
    technologies: ["HTML", "CSS", "React.js"],
  },
  {
    title: "AI Enabled Car Parking Using Open CV",
    image: project4,
    description: `A web application using computer vision to automate the car parking process in busy urban areas.`,
    technologies: ["IBM Cognos", "HTML", "CSS"],
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
    title: "C Programming",
    description: "Completed the C Programming course from EduPrep.",
    image: intern,
    issuedBy: "EduPrep",
    date: "N/A",
  },
  {
    title: "Introduction to Cloud",
    description: "Completed the Introduction to Cloud course from IBM.",
    image: intern,
    issuedBy: "IBM",
    date: "N/A",
  },
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
    image: intern,
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
