import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am an Electronics and Communication Engineering student passionate about Embedded Systems, IoT, and smart automation. I focus on creating intelligent solutions that connect hardware with software to solve real-world problems.`;

export const ABOUT_TEXT = `Skilled in Arduino, ESP32, C/C++, Python, and modern web technologies, I enjoy working on innovative ideas that blend electronics with software. I thrive on problem-solving, teamwork, and continuous learning to stay ahead in emerging technologies.`;

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
    title: "Smart Saline Monitoring System",
    image: project1,
    description:
      "A smart IoT-based system designed to monitor saline levels in real time using weight sensors. It automatically alerts healthcare staff when the saline is about to finish, ensuring patient safety and reducing manual monitoring in hospitals.",
    technologies: ["ESP32","Weight Sensor (Load Cell + HX711)","C/C++","Blynk"],
    link: "https://github.com/akshay-janamatti/smart-saline-monitor",
  },
  


];

export const CONTACT = {
  email: "akshayjanamatti@gmail.com",
};