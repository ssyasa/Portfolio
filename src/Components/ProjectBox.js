/* eslint-disable react/prop-types */
import React from 'react';

const ProjectBox = ({ projectPhoto, projectName, projectDescription, projectLink }) => {
  // Define styles as JavaScript objects
  const styles = {
    projectBox: {
      textAlign: 'center',
      margin: '50px auto',
      boxShadow: '0 8px 16px rgba(128, 0, 128, 0.2)', // Purple shadow
      padding: '60px',
      borderRadius: '40px',
      maxWidth: '1000px', // Reduced max-width for smaller box
      transition: 'box-shadow 0.3s ease, transform 0.3s ease', // Added transform transition
      position: 'relative', // Necessary for button positioning
      overflow: 'hidden', // Prevent overflow on scale
      backgroundColor: '#fff', // Added background color
    },
    projectBoxHover: {
      boxShadow: '0 25px 40px rgba(128, 0, 128, 0.3)', // Deeper purple shadow on hover
      transform: 'translateY(-5px)', // Slight lift effect
    },
    projectImage: {
      width: '100%',
      maxWidth: '600px', // Reduced image size
      height: 'auto',
      borderRadius: '20px',
      transition: 'transform 0.3s ease',
    },
    projectImageHover: {
      transform: 'scale(1.2)', // Zoom effect on hover
    },
    projectName: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1.8rem',
      color: '#333',
      marginTop: '40px',
      transition: 'color 0.3s ease', // Color transition on hover
    },
    projectNameHover: {
      color: '#11d3ff', // Change color on hover
    },
    projectDescription: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1.2rem',
      color: '#666',
      marginTop: '10px',
      marginBottom: '20px', // Spacing below the description
    },
    button: {
      backgroundColor: '#11d3ff',
      color: '#525050',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0aa1cc', // Darker blue on hover
      transform: 'scale(1.05)', // Scale effect on button hover
    },
  };

  return (
    <div
      style={styles.projectBox}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = styles.projectBoxHover.boxShadow;
        e.currentTarget.style.transform = styles.projectBoxHover.transform;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = styles.projectBox.boxShadow;
        e.currentTarget.style.transform = 'translateY(0)'; // Reset transform
      }}
    >
      <img
        src={projectPhoto}
        alt={projectName}
        style={styles.projectImage}
        onMouseEnter={(e) => (e.currentTarget.style.transform = styles.projectImageHover.transform)}
        onMouseLeave={(e) => (e.currentTarget.style.transform = styles.projectImage.transform)}
      />
      <p
        style={styles.projectName}
        onMouseEnter={(e) => (e.currentTarget.style.color = styles.projectNameHover.color)}
        onMouseLeave={(e) => (e.currentTarget.style.color = styles.projectName.color)}
      >
        {projectName}
      </p>
      <p style={styles.projectDescription}>{projectDescription}</p>
      <a href={projectLink} target="_blank" rel="noopener noreferrer" aria-label={`View project: ${projectName}`}>
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
          onMouseOver={(e) => (e.currentTarget.style.transform = styles.buttonHover.transform)}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          View Project
        </button>
      </a>
    </div>
  );
};

export default ProjectBox;
