import React from 'react';
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
  return (
    <div>
      {/* Home Section */}
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>{getTimeOfDayGreeting()}</h1>
          <h1>I'M <b>SHREYAS C.R</b></h1>
          <Typed />
          <p className="cta-text">
            Let's turn your vision into reality with innovative solutions in <b>Web Development</b> and <b>Machine Learning</b>. <br />
            <a href="#contact" className="cta-button">Let's Connect</a>
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
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>A Brief <b>Introduction</b></h1>
          <p>
            As a versatile <b>Freelancer</b> with a deep passion for <b>Data Analytics</b>, <b>Machine Learning</b>, and <b>Web Development</b>, I help businesses and individuals turn ideas into actionable, scalable solutions. 
            With a degree in <b>Bachelor of Technology</b> and hands-on experience across various industries, I specialize in crafting data-driven applications and predictive models that deliver measurable results.<br /><br />

            Whether you need a web app that is fast, intuitive, and user-friendly, or a machine learning model that accurately forecasts trends and insights, I bring a wealth of knowledge in it . <br /><br />
            
            I focus on providing solutions that not only meet but exceed client expectations. My experience spans everything from full-stack development to designing predictive systems using machine learning and AI, tailored to solving real-world problems. Currently, I’m expanding my expertise into <b>Next.js</b> and <b>TypeScript</b> to stay on the cutting edge of web technologies.<br /><br />

            When I'm not building innovative projects, you’ll find me exploring emerging technologies, reading thought-provoking books 📗, and constantly seeking new ways to make an impact in the tech world. Let’s collaborate to bring your next big idea to life!
          </p>
        </div>

        {/* Avatar Image with Hover Effect */}
        <Tilt>
          <img className='Avatar' src={Avatar} alt="Shreyas C.R Avatar" />
        </Tilt>
      </div>
    </div>
  );
}

export default Home;
