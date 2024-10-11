/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';

// Service data
const services = [
  {
    category: 'Machine Learning Solutions',
    offerings: [
      'Predictive Analytics: Unlock the potential of data-driven decision-making by implementing precise forecasting models tailored to your business needs. This not only minimizes risk but also drives revenue growth by identifying new market opportunities.',
      'Natural Language Processing (NLP): Revolutionize user interactions with AI-driven chatbots and sentiment analysis, leading to enhanced customer satisfaction. Improved customer experiences can significantly increase retention rates and lifetime value.',
      'Custom Model Development: Design bespoke machine learning models specifically for your unique business challenges. By optimizing operational efficiencies, you can expect to reduce costs and improve profit margins.',
      'Image Recognition & Computer Vision: Automate visual data analysis to streamline processes and enhance accuracy. This leads to cost savings and boosts productivity across various applications, ultimately impacting your bottom line positively.',
      'Recommendation Systems: Drive engagement and conversion rates by implementing personalized product recommendations. Studies show that effective recommendation systems can increase sales by up to 30%.',
      'Anomaly Detection: Utilize advanced machine learning techniques to identify unusual patterns that signal fraud or operational risks. Proactively addressing these issues can save your business substantial amounts in potential losses.',
      'Time Series Forecasting: Analyze historical data to predict future trends, enabling better inventory management and resource allocation. Improved forecasting accuracy can lead to higher profitability.',
      'AutoML Solutions: Streamline your model training and deployment processes through automated machine learning. This not only saves time but also reduces operational costs, providing a robust return on investment.',
    ],
  },
  {
    category: 'Full Stack Development',
    offerings: [
      'Custom Web Applications: Develop scalable and efficient web applications that meet your specific needs, enhancing user engagement and driving conversions, leading to increased revenue streams.',
      'SaaS Product Development: Launch robust Software as a Service (SaaS) platforms designed for optimal performance and scalability. A well-executed SaaS solution can provide recurring revenue models that significantly boost profitability.',
      'E-commerce Solutions: Build high-converting e-commerce platforms with integrated payment gateways and inventory management. A well-optimized e-commerce site can substantially increase sales volume.',
      'API Development and Integration: Ensure seamless connectivity across platforms, enhancing operational efficiency and enabling new revenue channels through better interoperability.',
      'Mobile Application Development: Create responsive cross-platform applications that deliver consistent user experiences. Mobile engagement can significantly increase sales, especially in retail sectors.',
      'Progressive Web Apps (PWAs): Develop web applications that deliver app-like experiences, reducing bounce rates and improving user engagement, which translates to higher conversion rates.',
      'Microservices Architecture: Implement a microservices architecture for greater scalability and flexibility in your applications. This enhances your ability to adapt to market changes and user demands, driving ongoing revenue growth.',
      'DevOps Services: Adopt continuous integration and delivery (CI/CD) practices to improve deployment efficiency. Faster time-to-market means quicker realization of revenue from your projects.',
    ],
  },
  {
    category: 'Data Analytics Services',
    offerings: [
      'Business Intelligence (BI): Transform raw data into actionable insights using advanced BI tools. Strategic decision-making backed by data can lead to more effective marketing and increased revenue.',
      'Customer Segmentation and Profiling: Leverage data analytics to target key customer segments. Optimized marketing strategies can enhance your ROI and significantly boost sales.',
      'Real-Time Analytics: Implement systems that provide instant insights from live data streams. Rapid decision-making capabilities lead to better responsiveness in a competitive market, positively impacting revenue.',
      'Predictive Modeling: Develop predictive models that forecast future trends and outcomes, aiding strategic planning. Better planning translates to more effective resource allocation and increased profitability.',
      'Data Visualization: Create compelling visual representations of data to enhance understanding. This clarity can lead to quicker decision-making, unlocking additional revenue opportunities.',
      'Data Cleaning and Preparation: Ensure high-quality data through meticulous cleaning and validation processes. High-quality data leads to better insights and more effective strategies, which boost financial performance.',
      'A/B Testing and Experimentation: Conduct rigorous A/B testing to evaluate marketing strategies and user experience enhancements. Data-driven experiments can significantly improve conversion rates and drive revenue.',
      'Data Governance and Compliance: Establish frameworks to manage data quality and security. Ensuring compliance can prevent costly penalties and foster customer trust, which is crucial for long-term revenue growth.',
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
      listStyle: 'disc', // Changed to 'disc' for bullet points
      paddingLeft: '20px', // Add padding for better alignment of bullet points
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
