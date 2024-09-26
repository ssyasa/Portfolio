import React from 'react';
import './ProjectBox.css'; // Import the CSS file

const ProjectBox = ({ projectPhoto, projectName }) => {
  return (
    <div className="projectBox">
      <img src={projectPhoto} alt={projectName} className="projectImage" /> {/* Add className here */}
      <p>{projectName}</p>
    </div>
  );
};

export default ProjectBox;
