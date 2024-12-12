/* eslint-disable react/react-in-jsx-scope */
import {
  SiMongodb,
  SiGit,
  SiBootstrap,
  SiFigma,
  SiCanva,
  SiPostman,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

import "./Skills.css"; // Importing the external CSS file

// Data for categorized skills
const skillsData = {
  webDevelopment: [
    { skill: "HTML5", icon: <FaHtml5 /> },
    { skill: "CSS3", icon: <FaCss3Alt /> },
    { skill: "JavaScript", icon: <DiJavascript1 /> },
    { skill: "Bootstrap", icon: <SiBootstrap /> },
    { skill: "React", icon: <FaReact /> },
    { skill: "Node.js", icon: <FaNodeJs /> },
    { skill: "MongoDB", icon: <SiMongodb /> },
    { skill: "Figma", icon: <SiFigma /> },
    { skill: "Canva", icon: <SiCanva /> },
    { skill: "Postman", icon: <SiPostman /> },
    { skill: "Git", icon: <SiGit /> },
  ],
};

// Skills component
const Skills = () => {
  // Function to render categorized skills
  const renderSkills = (skills, title) => (
    <div className="skills-section">
      <h3 className="skills-title">{title}</h3>
      <div className="skills-grid">
        {skills.map(({ skill, icon }, index) => (
          <div key={index} className="skill-box">
            <div className="skill-icon">{icon}</div>
            <h4 className="skill-name">{skill}</h4>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="skills-container">
      {renderSkills(skillsData.webDevelopment, "Web Development Skills")}      
    </div>
  );
};

export default Skills;
