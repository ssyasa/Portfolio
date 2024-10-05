import React, { useState } from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';

// Dynamic greeting based on time of day
const getTimeOfDayGreeting = () => {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return "Good Morning!";
  } else if (currentHour < 18) {
    return "Good Afternoon!";
  } else {
    return "Good Evening!";
  }
};

const Home = () => {
  const [isHover, setIsHover] = useState(false);

  const styles = {
    aboutText: {
      position: 'relative',
      top: '-70px', // Shift the introduction 20px above its original position
    },
    ctaButton: {
      marginTop: '25px',
      padding: '12px 30px',
      background: 'linear-gradient(135deg, #11d3ff, #28a745)',
      color: '#fff',
      border: 'none',
      borderRadius: '20px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: 'bold',
      outline: 'none',
      position: 'relative',
      overflow: 'hidden',
      transition: 'transform 0.4s ease, box-shadow 0.4s ease, background 0.3s ease',
      boxShadow: isHover
        ? '0 15px 30px rgba(0, 195, 255, 0.4)'
        : '0 5px 15px rgba(0, 195, 255, 0.2)',
      transform: isHover ? 'scale(1.1) rotate(0deg)' : 'scale(1)',
    },
    ctaButtonHover: {
      boxShadow: '0 20px 40px rgba(0, 195, 255, 0.6)',
      background: 'linear-gradient(135deg, #00aaff, #20c997)',
      transform: 'scale(1.1) rotate(3deg)',
    },
    rippleEffect: {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      borderRadius: 'inherit',
      background: 'rgba(255, 255, 255, 0.5)',
      opacity: 0,
      pointerEvents: 'none',
      transition: 'opacity 0.6s ease, transform 0.6s ease',
    },
    ctaText: {
      marginTop: '10px',
    },
  };

  return (
    <div>
      {/* Home Section */}
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>{getTimeOfDayGreeting()}</h1>
          <h1>I'M <b>SHREYAS C.R</b></h1>
          <Typed />
          <p style={styles.ctaText}>
            Let's turn your vision into reality with innovative solutions in <b>Web Development</b> and <b>Machine Learning</b>. <br />
            <button
              style={styles.ctaButton}
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              onClick={() => window.open('https://www.linkedin.com/in/shreyas-c-r-777b4229a', '_blank')}
              className="cta-button"
            >
              Let's Connect
              <span style={styles.rippleEffect}></span>
            </button>
          </p>
        </div>

        {/* Lottie Animation */}
        <Lottie
          className="illustration"
          animationData={SpaceBoy}
          loop={true}
        />
      </div>

      {/* About Section */}
      <div className='AboutPage'>
        <div className='AboutText' style={styles.aboutText}>
          <h1 className='AboutTextHeading'>A Brief <b>Introduction</b></h1>
          <p>
            As a versatile <b>Freelancer</b> with a deep passion for <b>Data Analytics</b>, <b>Machine Learning</b>, and <b>Web Development</b>, I help businesses and individuals turn ideas into actionable, scalable solutions. 
            With a degree in <b>Bachelor of Technology</b> and hands-on experience across various industries, I specialize in crafting data-driven applications and predictive models that deliver measurable results.<br /><br />

            Whether you need a web app that is fast, intuitive, and user-friendly, or a machine learning model that accurately forecasts trends and insights, I bring a wealth of knowledge in it. <br /><br />
            
            I focus on providing solutions that not only meet but exceed client expectations. My experience spans everything from full-stack development to designing predictive systems using machine learning and AI, tailored to solving real-world problems. Currently, I’m expanding my expertise into <b>Next.js</b> and <b>TypeScript</b> to stay on the cutting edge of web technologies.<br /><br />

            When I'm not building innovative projects, you’ll find me exploring emerging technologies, reading thought-provoking books 📗, and constantly seeking new ways to make an impact in the tech world. Let’s collaborate to bring your next big idea to life!
          </p>
        </div>

        {/* Avatar Image with Hover Effect */}
        <Tilt>
          <img className='Avatar' src={Avatar} alt="Avatar" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
