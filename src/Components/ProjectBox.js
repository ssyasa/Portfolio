import React from 'react';

const ProjectBox = ({ projectPhoto, projectName }) => {
  return (
    <div>
      <img src={projectPhoto} alt={projectName} />
      <p>{projectName}</p>
    </div>
  );
};

export default ProjectBox;
