import React from "react";
import "./Services.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const services = [
  {
    title: "Machine Learning Solutions",
    description:
      "Harness the power of machine learning to predict trends, optimize operations, and drive innovation.",
    features: [
      "Predictive Analytics",
      "NLP & Chatbots",
      "Custom Models",
      "Recommendation Systems",
      "Anomaly Detection",
    ],
    animation: "service-animation-ml",
  },
  {
    title: "Full Stack Development",
    description:
      "Build scalable web and mobile applications with seamless experiences and user-focused designs.",
    features: [
      "Custom Web Applications",
      "SaaS Development",
      "E-commerce Platforms",
      "API Development",
      "Progressive Web Apps",
    ],
    animation: "service-animation-fs",
  },
  {
    title: "Web Development",
    description:
      "Create engaging and visually stunning websites to captivate your audience and drive conversions.",
    features: [
      "Landing Page Design",
      "Custom WordPress Websites",
      "Portfolio Websites",
      "Corporate Websites",
      "SEO-Optimized Pages",
    ],
    animation: "service-animation-wd",
  },
  {
    title: "Data Analytics Services",
    description:
      "Transform raw data into actionable insights to make timely decisions and drive profitability.",
    features: [
      "Business Intelligence",
      "Customer Segmentation",
      "Predictive Modeling",
      "Data Visualization",
      "A/B Testing",
    ],
    animation: "service-animation-da",
  },
  {
    title: "Graphic Design",
    description:
      "Craft impactful designs that resonate with your audience and enhance brand recognition.",
    features: [
      "Logo & Branding",
      "Marketing Collaterals",
      "UI/UX Design",
      "Infographics",
      "Rebranding Solutions",
    ],
    animation: "service-animation-gd",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-heading">
        <span>Our</span> Services for <b>2024 and Beyond</b>
      </h1>
      <TransitionGroup className="services-list">
        {services.map((service, index) => (
          <CSSTransition
            key={index}
            timeout={500}
            classNames="service-item-transition"
          >
            <div className={`service-card ${service.animation}`}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul>
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default Services;
