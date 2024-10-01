/* eslint-disable react/prop-types */
import React from 'react';

const ProjectBox = ({ projectPhoto, projectName, projectDescription, projectLink }) => {
  // Define styles as JavaScript objects
  const styles = {
    projectBox: {
      textAlign: 'center',
      margin: '30px auto', // Reduced margin for compactness
      boxShadow: '0 16px 32px rgba(128, 0, 128, 0.2)', // Purple shadow
      padding: '40px', // Reduced padding for a smaller box
      borderRadius: '40px', // Smaller border radius
      maxWidth: '800px', // Further reduced max-width
      transition: 'box-shadow 0.3s ease, transform 0.3s ease', // Added transform transition
      position: 'relative', // Necessary for button positioning
      overflow: 'hidden', // Prevent overflow on scale
      backgroundColor: '#272e54', // Added background color
    },
    projectBoxHover: {
      boxShadow: '0 15px 30px rgba(128, 0, 128, 0.3)', // Deeper purple shadow on hover
      transform: 'translateY(-5px)', // Slight lift effect
    },
    projectImage: {
      width: '100%',
      maxWidth: '300px', // Reduced image size
      height: 'auto',
      borderRadius: '30px', // Smaller border radius for the image
      transition: 'transform 0.3s ease', // Smooth transition for the image
    },
    projectImageHover: {
      transform: 'scale(1.1)', // Zoom effect on hover (slightly smaller zoom)
    },
    projectName: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '2.0rem', // Slightly smaller font size
      color: '#dbc21f',
      marginTop: '20px', // Reduced spacing above the text
      transition: 'color 0.3s ease', // Color transition on hover
    },
    projectNameHover: {
      color: '#11d3ff', // Change color on hover
    },
    projectDescription: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '1rem', // Smaller font size for description
      color: '#666',
      marginTop: '10px',
      marginBottom: '15px', // Reduced spacing below the description
    },
    button: {
      backgroundColor: '#11d3ff',
      color: '#474444',
      border: 'none',
      padding: '8px 16px', // Reduced padding for button
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
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')} // Reset to original size
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
