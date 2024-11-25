/* eslint-disable react/react-in-jsx-scope */
import {
  SiPostman,
  SiMongodb,
  SiMysql,
  SiGit,
  SiTensorflow,
  SiAmazonaws,
  SiBootstrap,
  SiFigma,
  SiCanva,
  SiDocker,
  SiKubernetes,
  SiMicrosoftexcel,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiPytorch,
  SiKeras,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaBrain,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { AiOutlineLineChart } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";

import "./Skills.css"; // Importing the external CSS file

// Data for categorized skills
const skillsData = {
  dataAnalytics: [
    { skill: "Python", icon: <FaPython /> },
    { skill: "SQL", icon: <SiMysql /> },
    { skill: "Excel", icon: <SiMicrosoftexcel /> },
  ],
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
  machineLearning: [
    { skill: "AWS", icon: <SiAmazonaws /> },
    { skill: "Docker", icon: <SiDocker /> },
    { skill: "Kubernetes", icon: <SiKubernetes /> },
    { skill: "TensorFlow", icon: <SiTensorflow /> },
    { skill: "Scikit-Learn", icon: <SiScikitlearn /> },
    { skill: "Pandas", icon: <SiPandas /> },
    { skill: "NumPy", icon: <SiNumpy /> },
    { skill: "Matplotlib", icon: <AiOutlineLineChart /> },
    { skill: "NLP", icon: <MdLanguage /> },
    { skill: "Keras", icon: <SiKeras /> },
    { skill: "OpenCV", icon: <SiOpencv /> },
    { skill: "PyTorch", icon: <SiPytorch /> },
    { skill: "AI Ethics", icon: <FaBrain /> },
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
      {renderSkills(skillsData.dataAnalytics, "Data Analytics Skills")}
      {renderSkills(skillsData.webDevelopment, "Web Development Skills")}
      {renderSkills(skillsData.machineLearning, "Machine Learning Skills")}
    </div>
  );
};

export default Skills;
