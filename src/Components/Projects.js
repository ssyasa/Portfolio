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
    projectPhoto: FraudDetectionImage,
    projectName: 'Real-Time Online Payment Fraud Detection System',
    projectDescription:
      'Developed a machine learning-powered fraud detection system for online payments, reducing fraudulent transactions by 30% and saving the client $500,000 annually. Analyzed transactional patterns in real time.',
    projectLink: 'link_to_fraud_detection',
    technologies: ['Python', 'SQL', 'Machine Learning'],
    projectType: 'Machine Learning',
    tags: ['Python', 'SQL', 'Machine Learning', 'FinTech'],
  },
  {
    projectPhoto: HousePredictionImage,
    projectName: 'House Price Prediction Model for Real Estate Insights',
    projectDescription:
      'Engineered a predictive model for accurate house price estimation, used by real estate agencies to guide pricing strategies and boost sales. Resulted in a 15% increase in forecast accuracy.',
    projectLink: 'link_to_house_price_prediction',
    technologies: ['Python', 'Scikit-learn', 'Data Analysis'],
    projectType: 'Data Analytics',
    tags: ['Python', 'Machine Learning', 'Data Science', 'Real Estate'],
  },
  {
    projectPhoto: ChatAppImage,
    projectName: 'Real-Time Chat App with AI Integration',
    projectDescription:
      'Built a scalable chat application with real-time voice communication and AI capabilities. Integrated with Web Speech API and ElevenLabs for enhanced user experience, helping businesses provide seamless customer support.',
    projectLink: 'link_to_chat_app',technologies: ['Python', 'TypeScript', 'Flask','SCSS'],
    projectType: 'Full Stack Development',
    tags: ['TypeScript', 'Python', 'AI', 'Web Development'],
  },
  {
    projectPhoto: CarPredictionImage,
    projectName: 'Automated Car Price Prediction Platform for Dealerships',
    projectDescription:
      'Designed a data-driven pricing model to help car dealerships predict prices based on historical sales data, improving profit margins by 20%.',
    projectLink: 'link_to_car_price_prediction',
    technologies: ['Python', 'Scikit-learn', 'Data Analytics'],
    projectType: 'Data Analytics',
    tags: ['Python', 'Machine Learning', 'Data Science', 'Automotive'],
  },
  {
    projectPhoto: CreditCardFraudImage,
    projectName: 'Credit Card Fraud Detection using Machine Learning',
    projectDescription:
      'Created a credit card fraud detection system, identifying suspicious transactions in real-time and reducing fraud cases by 25%.',
    projectLink: 'link_to_credit_card_fraud',
    technologies: ['Python', 'Scikit-learn', 'Financial Data'],
    projectType: 'Machine Learning',
    tags: ['Python', 'Machine Learning', 'FinTech', 'Security'],
  },
  {
    projectPhoto: KidneyPredictionImage,
    projectName: 'Predictive Health Model for Chronic Kidney Disease',
    projectDescription:
      'Developed a predictive model to assess kidney disease risk, empowering healthcare providers with early diagnosis and preventive strategies. Improved detection rate by 18%.',
    projectLink: 'link_to_kidney_disease_prediction',
    technologies: ['Python', 'Scikit-learn', 'Health Data'],
    projectType: 'Machine Learning',
    tags: ['Python', 'Machine Learning', 'Health Tech', 'Predictive Analytics'],
  },
  {
    projectPhoto: SentimentAnalysisImage,
    projectName: 'Twitter Sentiment Analysis for Brand Monitoring',
    projectDescription:
      'Implemented a sentiment analysis system to analyze public opinion on social media, helping businesses understand customer sentiment and tailor marketing strategies. Increased positive engagement by 12%.',
    projectLink: 'link_to_sentiment_analysis',
    technologies: ['Python', 'NLP', 'Social Media Data'],
    projectType: 'Data Analytics',
    tags: ['Python', 'NLP', 'Data Science', 'Marketing'],
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
  const [filter, setFilter] = useState('All');

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
      borderRadius: '15px',
      border: '1px solid #ccc',
      marginLeft: '10px',
      width: '250px',
      transition: 'border-color 0.3s ease',
    },
    filterWrapper: {
      display: 'flex',
      justifyContent: 'center', // Center the filter buttons
      marginBottom: '30px',
    },
    filterButton: {
      padding: '10px 15px',
      margin: '0 10px',
      borderRadius: '15px',
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
      <div style={styles.filterWrapper}>
        {['All', 'Machine Learning', 'Full Stack Development', 'Data Analytics'].map(type => (
          <button
            key={type}
            style={styles.filterButton}
            onClick={() => setFilter(type)}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
              e.currentTarget.style.transform = 'translateY(-2px)'; // Slight lift effect
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
              e.currentTarget.style.transform = 'translateY(0)'; // Reset position
            }}
          >
            {type}
          </button>
        ))}
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
