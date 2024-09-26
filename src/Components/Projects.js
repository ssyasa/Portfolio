import React from 'react';
import ProjectBox from './ProjectBox';
import FraudDetectionImage from '../images/FraudDetection.jpg';
import HousePredictionImage from '../images/HousePrediction.jpg';
import KidneyPredictionImage from '../images/KidneyPrediction.jpg';

const Projects = () => {
  const projectBoxStyle = {
    textAlign: 'center',
    margin: '20px',
  };

  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        {/* Pass the corresponding images and names */}
        <ProjectBox 
          projectPhoto={FraudDetectionImage} 
          projectName="Fraud Detection" 
          style={projectBoxStyle}
        />
        <ProjectBox 
          projectPhoto={HousePredictionImage} 
          projectName="House Prediction" 
          style={projectBoxStyle}
        />
        <ProjectBox 
          projectPhoto={KidneyPredictionImage} 
          projectName="Kidney Prediction" 
          style={projectBoxStyle}
        />
      </div>
    </div>
  );
}

export default Projects;
