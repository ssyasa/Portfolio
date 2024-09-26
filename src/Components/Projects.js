import React from 'react';
import ProjectBox from './ProjectBox';
import FraudDetectionImage from '../images/FraudDetection.jpg';
import HousePredictionImage from '../images/HousePrediction.jpg';
import KidneyPredictionImage from '../images/KidneyPrediction.jpg';
import './ProjectBox'; // Import new CSS for heading

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">My <b>Projects</b></h1>
      <div className="project">        
        <ProjectBox 
          projectPhoto={FraudDetectionImage} 
          projectName="Fraud Detection"
        />
        <ProjectBox 
          projectPhoto={HousePredictionImage} 
          projectName="House Prediction"
        />
        <ProjectBox 
          projectPhoto={KidneyPredictionImage} 
          projectName="Kidney Prediction"
        />
      </div>
    </div>
  );
}

export default Projects;
