/* eslint-disable react/react-in-jsx-scope */
import { SiPostman, SiMongodb, SiMysql, SiGit, SiTensorflow, SiAmazonaws, SiBootstrap, SiFigma, SiCanva, SiDocker, SiKubernetes, SiMicrosoftexcel } from "react-icons/si";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import './Skills.css'; // Importing the external CSS file for hover effect
import { SiScikitlearn, SiPandas, SiNumpy, SiOpencv, SiPytorch, SiKeras } from "react-icons/si";
import { FaBrain } from "react-icons/fa"; // For AI Ethics (no dedicated icon, using Brain as placeholder)
import { AiOutlineLineChart } from "react-icons/ai"; // For Matplotlib (no dedicated icon, using line chart)
import { MdLanguage } from "react-icons/md"; 

// List of all unique skills categorized
const skillsData = {
  dataAnalytics: [
    { skill: "Python", icon: <FaPython /> },
    { skill: "SQL", icon: <SiMysql /> },
    { skill: "Excel", icon: <SiMicrosoftexcel /> }, // Placeholder for Excel
  ],
  webDevelopment: [
    { skill: "HTML5", icon: <FaHtml5 /> },
    { skill: "CSS3", icon: <FaCss3Alt /> },
    { skill: "JavaScript", icon: <DiJavascript1 /> },
    { skill: "Bootstrap", icon: <SiBootstrap /> },
    { skill: "React", icon: <FaReact /> },
    { skill: "Node", icon: <FaNodeJs /> },
    { skill: "MongoDb", icon: <SiMongodb /> },
    { skill: "Figma", icon: <SiFigma /> },
    { skill: "Canva", icon: <SiCanva /> },
    { skill: "Express", icon: <SiPostman /> }, 
    { skill: "Postman", icon: <SiPostman /> },
    { skill: "Git", icon: <SiGit /> },
    { skill: "TypeScript", icon: <DiJavascript1 /> }, // Added TypeScript
    { skill: "Sass", icon: <SiBootstrap /> }, // Added Sass
    { skill: "Jest", icon: <SiGit /> }, // Added Jest
  ],
  machineLearning: [
    { skill: "AWS", icon: <SiAmazonaws /> },
    { skill: "Docker", icon: <SiDocker /> },
    { skill: "Kubernetes", icon: <SiKubernetes /> },
    { skill: "TensorFlow", icon: <SiTensorflow /> },
    { skill: "Scikit-Learn", icon: <SiScikitlearn /> }, // Using the Scikit-Learn icon
    { skill: "Pandas", icon: <SiPandas /> }, // Using the Pandas icon
    { skill: "NumPy", icon: <SiNumpy /> }, // Using the NumPy icon
    { skill: "Matplotlib", icon: <AiOutlineLineChart /> }, // Using line chart icon for Matplotlib
    { skill: "NLP", icon: <MdLanguage /> }, // Using language icon for NLP
    { skill: "Keras", icon: <SiKeras /> }, // Using Keras icon
    { skill: "OpenCV", icon: <SiOpencv /> }, // Using OpenCV icon
    { skill: "PyTorch", icon: <SiPytorch /> }, // Using PyTorch icon
    { skill: "AI Ethics", icon: <FaBrain /> }, // Using brain icon for AI Ethics
  ],
};

const Skills = () => {
  // Function to render skills in the defined sections
  const renderSkills = (skills, title) => (
    <div style={styles.skillsSection}>
      <h3 style={styles.sectionTitle}>{title}</h3>
      <div className="skills-container"> {/* Use CSS class here */}
        {skills.map(({ skill, icon }, index) => (
          <div key={index} className="skill-box"> {/* Use CSS class for hover effect */}
            <div className='skill-header' style={styles.skillHeader}>
              <div className='skill-icon' style={styles.skillIcon}>
                {icon}
              </div>
              <h4 style={styles.skillName}>{skill}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {renderSkills(skillsData.dataAnalytics, "Data Analytics Skills")}
      {renderSkills(skillsData.webDevelopment, "Web Development (MERN Stack, UI/UX Design) Skills")}
      {renderSkills(skillsData.machineLearning, "Machine Learning Skills")}
    </div>
  );
};

// Custom styles
const styles = {
  skillsSection: {
    margin: '20px 0',
  },
  skillHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  skillIcon: {
    fontSize: '2rem',
    color: '#dbc21f',
    marginBottom: '10px',
  },
  skillName: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '1.2rem',
    color: 'cyan', // Updated text color to cyan
  },
  sectionTitle: {
    fontSize: '1.5rem',
    color: 'cyan', // Updated section title color to cyan
    textAlign: 'center',
    margin: '20px 0',
    fontFamily: "'Poppins', sans-serif",
  },
};

export default Skills;
