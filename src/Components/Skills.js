/* eslint-disable react/react-in-jsx-scope */
import { SiPostman, SiMongodb, SiMysql, SiGit, SiTensorflow, SiAmazonaws, SiBootstrap, SiFigma, SiCanva, SiDocker, SiKubernetes, SiGooglecloud, SiMicrosoft } from "react-icons/si";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

// List of all unique skills
const skillsData = [
  { skill: "Python", icon: <FaPython /> },
  { skill: "SQL", icon: <SiMysql /> },
  { skill: "Postman", icon: <SiPostman /> },
  { skill: "Git", icon: <SiGit /> },
  { skill: "Excel", icon: <SiMysql /> }, // Placeholder for Excel
  { skill: "AWS", icon: <SiAmazonaws /> },
  { skill: "Docker", icon: <SiDocker /> },
  { skill: "Kubernetes", icon: <SiKubernetes /> },
  { skill: "Azure", icon: <SiMicrosoft /> }, // Used Microsoft icon as a placeholder for Azure
  { skill: "GCP", icon: <SiGooglecloud /> },
  { skill: "HTML5", icon: <FaHtml5 /> },
  { skill: "CSS3", icon: <FaCss3Alt /> },
  { skill: "JavaScript", icon: <DiJavascript1 /> },
  { skill: "Bootstrap", icon: <SiBootstrap /> },
  { skill: "React", icon: <FaReact /> },
  { skill: "Node", icon: <FaNodeJs /> },
  { skill: "MongoDb", icon: <SiMongodb /> },
  { skill: "Figma", icon: <SiFigma /> },
  { skill: "Canva", icon: <SiCanva /> },
  { skill: "Pandas", icon: <SiTensorflow /> }, // Placeholder for Pandas
  { skill: "NumPy", icon: <SiTensorflow /> }, // Placeholder for NumPy
  { skill: "Matplotlib", icon: <SiTensorflow /> }, // Placeholder for Matplotlib
  { skill: "TensorFlow", icon: <SiTensorflow /> },
  { skill: "Scikit-Learn", icon: <SiTensorflow /> }, // Using TensorFlow icon as placeholder
  { skill: "Keras", icon: <SiTensorflow /> }, // Placeholder for Keras
  { skill: "NLP", icon: <SiTensorflow /> }, // Placeholder for NLP
];

const Skills = () => {
  // Function to render skills
  const renderSkills = () => (
    <div style={styles.skillsContainer}>
      {skillsData.map(({ skill, icon }, index) => (
        <div 
          key={index} 
          className='skill-box' 
          style={styles.skillBox}
        >
          <div className='skill-header' style={styles.skillHeader}>
            <div className='skill-icon' style={styles.skillIcon}>
              {icon}
            </div>
            <h3 style={styles.skillName}>{skill}</h3>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <h2 style={styles.sectionTitle}>Skills</h2>
      {renderSkills()}
    </div>
  );
};

// Custom styles
const styles = {
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    margin: '20px 0',
  },
  skillBox: {
    margin: '10px',
    padding: '15px',
    backgroundColor: '#272e54',
    borderRadius: '10px',
    width: '150px',
    boxShadow: '0 16px 32px rgba(128, 0, 128, 0.4)', 
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
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
    color: '#dbc21f',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    color: '#dbc21f',
    textAlign: 'center',
    margin: '40px 0 20px',
    fontFamily: "'Poppins', sans-serif",
  },
};

export default Skills;
