import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a passionate developer with a knack for crafting robust and scalable embedded & iot applications. I have honed my skills in embedded technologies . My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Java, Node.js, express.js,MySQL, and MongoDB. My journey in development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EDUCATION = [
  {
    year: '2024-Present',
    degree: 'Bachelor Of Engineering',
    college: 'Kle Technological University, Belagavi',
    
  },
  {
    year: '2023-2024',
    degree: 'Pre-University(12th)',
    college: 'Alva’s Pre-University College, Moodabidri',
    
  },
  {
    year: '2021-2022',
    degree: 'HSC (10th)',
    college: 'SSKP CBSE School,Sankeshwar',
    
  },
];

export const PROJECTS = [
  {
    title: "Surakshit- Cloud Storage App",
    image: project1,
    description:
      "Surakshit is a secure, lightweight cloud storage web application built using Node.js, Express, and MongoDB. It allows users to register, log in using JWT-based authentication, and securely upload and download personal files.",
    technologies: ["Node.js", "Express.js","JWT","bcrypt","multer","firebase"],
    link: "https://github.com/anmol-janamatti/Surakshit",
  },
  {
  title: "RealtimeChat - 1-on-1 Chat App",
  image:project2,
  description:
    "RealtimeChat is a real-time 1-on-1 chat application built using React, Node.js, and Socket.io. It allows users to connect through a unique code system where incoming chat requests can be accepted or declined, ensuring privacy and consent. The UI is styled with Tailwind CSS and the app is deployed on Render.",
  technologies: ["React", "Node.js", "Socket.io", "Tailwind CSS"],
  link: "http://realtimechat-ivyb.onrender.com/",
},


];

export const CONTACT = {
  email: "akshayjanamatti@gmail.com",
};