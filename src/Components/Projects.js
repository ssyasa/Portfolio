/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import LionGymImage from '../images/lion-club image.png'; 
import TigerClubGymImage from '../images/tiger-club.png';
import JaguarClubGymImage from '../images/jaquar-club.png'; 
import RockyFitnessGymImage from '../images/RockyFitnessGymImage.png';
import FitClubGymImage from '../images/FitClubGymImage.png';
import AIgymImage from '../images/AI-gym.png';
import DEMOGYMImage from '../images/DEMO GYM.png';
import RedDinosaurgym from '../images/Red Dinosaur Club1.png'
import TriumphGYM from '../images/Triumph1.png'
import Gym_Landing_Page from '../images/Gym_Landing_Page.png'


// Project data
const projects = [
  {
    projectPhoto: LionGymImage,
    projectName: 'LION GYM – Power Up Your Fitness Journey',
    projectDescription:
      'A fully responsive gym website with dynamic scroll animations, a BMI calculator, and contact form. Designed with a mobile-first approach, it ensures a sleek user experience across devices.',
    projectLink: 'https://lion-club-gym-website1.netlify.app/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    projectType: 'Landing page',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
  },  
  {
    projectPhoto: FitClubGymImage,
    projectName: 'FitClub Gym Website',
    projectDescription:
      'A single-page gym website built with HTML, CSS, and JavaScript, featuring a responsive design and multiple sections for gym services, classes, schedules, and pricing.',
    projectLink: 'https://fitclub-gymwebsite.netlify.app',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    projectType: 'Landing page',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Single Page Application'],
  },
  {
    projectPhoto: TigerClubGymImage,
    projectName: 'Tiger Club Gym – Fitness Website',
    projectDescription:
      'A single-page gym website built with HTML, CSS, and JavaScript, featuring a responsive design and multiple sections for gym services, classes, schedules, and pricing.',
    projectLink: 'https://tiger-club-website.netlify.app/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    projectType: 'Landing page',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Single Page Application'],
  },
  {
    projectPhoto: RockyFitnessGymImage,
    projectName: 'Rocky Fitness Gym Website',
    projectDescription:
      'A single-page gym website built with HTML, CSS, and JavaScript, featuring a responsive design and multiple sections for gym services, classes, schedules, and pricing.',
    projectLink: 'https://rocky-gym-website.netlify.app',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    projectType: 'Landing page',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Single Page Application'],
  },
  {
    projectPhoto: AIgymImage,
    projectName: 'AI Powered Fitness Website',
    projectDescription:
      'A single-page gym website built with HTML, CSS, and JavaScript, featuring a responsive design and multiple sections for gym services, classes, schedules, and pricing.',
    projectLink: 'https://ai-gym-website.netlify.app',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    projectType: 'Ai Landing page',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Single Page Application','React'],
  },
  {
    projectPhoto: DEMOGYMImage,
    projectName: 'DEMO Gym – Fitness Website',
    projectDescription:
      'A modern gym website offering details on classes, trainers, schedules, and membership. Features include smooth scrolling animations, a membership form, and Google Maps integration.',
    projectLink: 'https://demo-gym-responsive-website.netlify.app',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript','Responsive Design'],
    projectType: 'Landing page',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'],
  },  
  {
    projectPhoto: RedDinosaurgym,
    projectName: 'Red Dinosaur Gym',
    projectDescription:
      'A modern gym website offering details on classes, trainers, schedules, and membership. Features include smooth scrolling animations, a membership form, and Google Maps integration.',
    projectLink: 'https://red-dinosaur-club-website.netlify.app',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript','Responsive Design'],
    projectType: 'Landing page',
    tags: ['HTML', 'CSS', 'JavaScript', 'React','Responsive Design'],
  },
  {
    projectPhoto: Gym_Landing_Page,
    projectName: 'GymME Landing Page',
    projectDescription:
      'A modern gym website offering details on classes, trainers, schedules, and membership. Features include smooth scrolling animations, a membership form, and Google Maps integration.',
    projectLink: 'https://gym-landing-page1.netlify.app/',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript','Responsive Design'],
    projectType: 'Landing page',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'],
  },
  {
    projectPhoto: TriumphGYM,
    projectName: 'Triumph GYM ',
    projectDescription:
      'A modern gym website offering details on classes, trainers, schedules, and membership. Features include smooth scrolling animations, a membership form, and Google Maps integration.',
    projectLink: 'https://triumph-gym-website.netlify.app',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript','Responsive Design'],
    projectType: 'Landing page',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'],
  },
  {
    projectPhoto: JaguarClubGymImage,
    projectName: 'Jaguar Club Gym – Fitness Center Website',
    projectDescription:
      'A modern gym website offering details on classes, trainers, schedules, and membership. Features include smooth scrolling animations, a membership form, and Google Maps integration.',
    projectLink: 'https://jaguar-gym-website.netlify.app/',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript','Responsive Design'],
    projectType: 'Landing page',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Responsive Design'],
  },
];


// ProjectBox component
const ProjectBox = ({ project }) => {
  const styles = {
    projectBox: {
      textAlign: 'left',
      margin: '20px auto',
      boxShadow: '0 16px 32px rgba(128, 0, 128, 0.2)',
      padding: '20px',
      borderRadius: '20px',
      maxWidth: '300px',
      transition: 'box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease',
      backgroundColor: '#272e54',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    projectImage: {
      width: '100%',
      borderRadius: '10px',
      transition: 'transform 0.3s ease',
    },
    projectName: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1.5rem',
      color: '#dbc21f',
      marginTop: '10px',
    },
    projectDescription: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '0.9rem',
      color: '#d6d0d0',
      marginTop: '5px',
      textAlign: 'justify', // Justifying text
    },
    projectDetails: {
      textAlign: 'left', // Align left
      fontSize: '0.9rem',
      color: '#999',
      marginTop: '5px',
      fontFamily: "'Roboto', sans-serif", // Added font family for details
    },
    technologies: {
      textAlign: 'left', // Align left
      fontSize: '0.9rem',
      color: '#999',
      marginTop: '5px',
      fontFamily: "'Roboto', sans-serif", // Added font family for details
    },
    projectType: {
      textAlign: 'left', // Align left
      fontSize: '0.9rem',
      color: '#dbc21f', // Keep project type color consistent
      marginTop: '5px',
      fontFamily: "'Roboto', sans-serif",
    },
    tags: {
      textAlign: 'left', // Align left
      fontSize: '0.8rem',
      color: '#b3b3b3',
      marginTop: '5px',
      fontFamily: "'Roboto', sans-serif",
    },
    button: {
      backgroundColor: '#11d3ff',
      color: '#474444',
      border: 'none',
      padding: '10px 15px',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '10px',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
  };

  return (
    <div
      style={styles.projectBox}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(128, 0, 128, 0.3)';
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.backgroundColor = '#2d344a'; // Darker background on hover
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 16px 32px rgba(128, 0, 128, 0.2)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.backgroundColor = '#272e54'; // Reset to original background
      }}
    >
      <img
        src={project.projectPhoto}
        alt={project.projectName}
        style={styles.projectImage}
      />
      <h3 style={styles.projectName}>{project.projectName}</h3>
      <p style={styles.projectDescription}>{project.projectDescription}</p>
      <p style={styles.projectDetails}>Technologies: {project.technologies.join(', ')}</p>
      <p style={styles.projectType}>Type: {project.projectType}</p>
      <p style={styles.tags}>Tags: {project.tags.join(', ')}</p>
      <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
        <button style={styles.button}>View Project</button>
      </a>
    </div>
  );
};

// Main AllProjects component
const AllProjects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter] = useState('All');

  // Filter projects based on search term and selected filter
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.projectDescription.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filter === 'All' || project.projectType === filter;

    return matchesSearch && matchesFilter;
  });

  const styles = {
    container: {
      padding: '20px',
    },
    searchWrapper: {
      display: 'flex',
      justifyContent: 'flex-end', // Aligns the search input to the right
      marginBottom: '30px',
      marginTop: '50px', // Margin to push down by 30px
    },
    searchInput: {
      padding: '5px',
      borderRadius: '9px',
      border: '1px solid black',
      marginLeft: '10px',
      marginTop: '20px',

      width: '250px',
      transition: 'border-color 0.3s ease',
    },
    filterWrapper: {
      display: 'auto',
      justifyContent: 'center', // Center the filter buttons
      marginBottom: '30px',
      marginTop: '20px',
    },
    filterButton: {
      padding: '10px 15px',
      margin: '10px 20px',
      borderRadius: '8px',
      border: '1px solid #dbc21f',
      backgroundColor: '#1e1e1e',
      color: '#dbc21f',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Added shadow
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search Projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredProjects.map((project, index) => (
          <ProjectBox key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
