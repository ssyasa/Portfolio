/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ChatAppImage from '../images/chat_app.jpg';
import FraudDetectionImage from '../images/fraud-detection-using-machine-ml.PNG';
import HousePredictionImage from '../images/hpp.jpg';
import CarPredictionImage from '../images/car price prediction.jpg';
import CreditCardFraudImage from '../images/credit card fraud.jpg';
import KidneyPredictionImage from '../images/chronic-kidney-disease-prediction.png';
import SentimentAnalysisImage from '../images/nlp1.jpeg.JPG';

// Project data
const projects = [
  {
    projectPhoto: ChatAppImage,
    projectName: 'Chat App (with LLM)',
    projectDescription: 'Developed a web application with real-time voice communication using Web Speech API and ElevenLabs. Languages: JavaScript, Python.',
    projectLink: 'link_to_chat_app',
    tags: ['JavaScript', 'Python', 'Web Development'],
  },
  {
    projectPhoto: FraudDetectionImage,
    projectName: 'Online Payment Fraud Detection',
    projectDescription: 'Engineered a fraud detection system for online transactions. Analyzed patterns in real-time. Languages: Python, SQL.',
    projectLink: 'link_to_fraud_detection',
    tags: ['Python', 'SQL', 'Machine Learning'],
  },
  {
    projectPhoto: HousePredictionImage,
    projectName: 'House Price Prediction using Machine Learning',
    projectDescription: 'Created a model to predict house prices using historical data and market trends. Languages: Python, Scikit-learn.',
    projectLink: 'link_to_house_price_prediction',
    tags: ['Python', 'Machine Learning', 'Data Science'],
  },
  {
    projectPhoto: CarPredictionImage,
    projectName: 'Car Price Prediction using Machine Learning',
    projectDescription: 'Developed a model for predicting car prices to assist dealerships. Languages: Python, Scikit-learn.',
    projectLink: 'link_to_car_price_prediction',
    tags: ['Python', 'Machine Learning', 'Data Science'],
  },
  {
    projectPhoto: CreditCardFraudImage,
    projectName: 'Credit Card Fraud Detection using Machine Learning',
    projectDescription: 'Designed a system to detect credit card fraud by analyzing transaction patterns. Languages: Python, Scikit-learn.',
    projectLink: 'link_to_credit_card_fraud',
    tags: ['Python', 'Machine Learning'],
  },
  {
    projectPhoto: KidneyPredictionImage,
    projectName: 'Kidney Disease Prediction',
    projectDescription: 'Developed a predictive model for assessing kidney disease risk. Languages: Python, Scikit-learn.',
    projectLink: 'link_to_kidney_disease_prediction',
    tags: ['Python', 'Machine Learning', 'Health Tech'],
  },
  {
    projectPhoto: SentimentAnalysisImage,
    projectName: 'Sentiment Analysis on Twitter Data',
    projectDescription: 'Implemented sentiment analysis to evaluate public opinion on social media. Languages: Python, NLP.',
    projectLink: 'link_to_sentiment_analysis',
    tags: ['Python', 'NLP', 'Data Science'],
  },
];

// ProjectBox component
const ProjectBox = ({ project }) => {
  const styles = {
    projectBox: {
      textAlign: 'center',
      margin: '20px auto',
      boxShadow: '0 16px 32px rgba(128, 0, 128, 0.2)',
      padding: '20px',
      borderRadius: '20px',
      maxWidth: '300px',
      transition: 'box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease',
      backgroundColor: '#272e54',
      overflow: 'hidden',
      position: 'relative',
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
      color: '#666',
      marginTop: '5px',
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
      <p style={styles.projectDescription}>Tags: {project.tags.join(', ')}</p>
      <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
        <button style={styles.button}>View Project</button>
      </a>
    </div>
  );
};

// Main AllProjects component
const AllProjects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter projects based on search term
  const filteredProjects = projects.filter(project =>
    project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.projectDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      borderRadius: '15px',
      border: '1px solid #ccc',
      width: '300px',
      boxSizing: 'border-box',
    },
    projectContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    noProjects: {
      marginTop: '50px',
      fontSize: '1.2rem',
      color: '#999',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
      </div>
      <div style={styles.projectContainer}>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectBox key={index} project={project} />
          ))
        ) : (
          <p style={styles.noProjects}>No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default AllProjects;
