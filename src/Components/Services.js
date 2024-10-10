/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';

// Service data
const services = [
  {
    category: 'Machine Learning Solutions',
    offerings: [
      'Predictive Analytics: Empower data-driven decision-making with precise forecasting models tailored to your business.',
      'Natural Language Processing (NLP): Enhance user experiences through AI-driven chatbots, sentiment analysis, and language translation tools.',
      'Custom Model Development: Design and implement bespoke machine learning models that address specific business challenges.',
      'Image Recognition & Computer Vision: Automate visual data analysis with advanced image and video recognition solutions for diverse applications.',
      'Recommendation Systems: Increase engagement and conversion rates through personalized product and content recommendations.',
      'Anomaly Detection: Leverage machine learning to identify unusual patterns for fraud detection, network security, and operational risk management.',
      'Time Series Forecasting: Analyze temporal data to predict trends, demand, and performance metrics over time.',
      'AutoML Solutions: Develop automated machine learning solutions that streamline model training and deployment processes for enhanced productivity.',
    ],
  },
  {
    category: 'Full Stack Development',
    offerings: [
      'Custom Web Applications: Craft scalable, efficient web applications tailored to meet specific client requirements and enhance user experience.',
      'SaaS Product Development: Build and launch robust Software as a Service (SaaS) platforms, ensuring optimal performance and scalability.',
      'E-commerce Solutions: Create high-converting e-commerce websites with integrated payment gateways, inventory management, and user analytics.',
      'API Development and Integration: Design and implement APIs for seamless connectivity and interoperability across various platforms.',
      'Mobile Application Development: Develop responsive cross-platform mobile applications for iOS and Android, ensuring a consistent user experience.',
      'Progressive Web Apps (PWAs): Deliver app-like experiences on the web that enhance engagement and reduce bounce rates.',
      'Microservices Architecture: Design microservices-based systems for improved scalability and flexibility in application development.',
      'DevOps Services: Implement DevOps practices for continuous integration and delivery (CI/CD), improving deployment efficiency and reducing time to market.',
    ],
  },
  {
    category: 'Data Analytics Services',
    offerings: [
      'Business Intelligence (BI): Transform raw data into actionable insights using advanced BI tools and dashboards for strategic decision-making.',
      'Customer Segmentation and Profiling: Utilize data analytics to identify and target key customer segments, optimizing marketing efforts and improving ROI.',
      'Real-Time Analytics: Implement systems that provide instant insights from live data streams, enabling rapid decision-making.',
      'Predictive Modeling: Build models that analyze historical data to forecast future trends and outcomes, aiding strategic planning.',
      'Data Visualization: Design interactive and compelling visual representations of data to facilitate better understanding and communication of insights.',
      'Data Cleaning and Preparation: Ensure high-quality data through meticulous cleaning, transformation, and validation processes.',
      'A/B Testing and Experimentation: Conduct rigorous A/B testing to evaluate marketing strategies, product features, and user experience enhancements.',
      'Data Governance and Compliance: Establish frameworks to manage data quality, security, and compliance with regulations (e.g., GDPR, HIPAA).',
    ],
  },
];

// ServiceCard component
const ServiceCard = ({ category, offerings }) => {
  const styles = {
    card: {
      backgroundColor: '#272e54',
      borderRadius: '15px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      margin: '20px',
      padding: '20px',
      transition: 'transform 0.3s ease',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    title: {
      fontSize: '1.5rem',
      color: '#dbc21f',
      marginBottom: '15px',
      fontFamily: "'Poppins', sans-serif",
      textAlign: 'center',
    },
    offeringsList: {
      listStyle: 'none',
      paddingLeft: '0',
      color: '#d6d0d0',
      fontFamily: "'Poppins', sans-serif",
      fontSize: '0.9rem',
      lineHeight: '1.5',
    },
    offeringItem: {
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{category}</h3>
      <ul style={styles.offeringsList}>
        {offerings.map((offering, index) => (
          <li key={index} style={styles.offeringItem}>
            {offering}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Services component
const Services = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '80px 20px',
      color: '#343a40',
      fontFamily: "'Poppins', sans-serif",
    },
    header: {
      fontSize: '2.5rem',
      marginBottom: '30px',
      color: '#203bc9',
    },
    cardsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      maxWidth: '1200px',
      width: '100%',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Our Services</h2>
      <div style={styles.cardsContainer}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            category={service.category}
            offerings={service.offerings}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
