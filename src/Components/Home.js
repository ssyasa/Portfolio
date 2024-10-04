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
            I’m a versatile <b>Freelancer</b> specializing in <b>Data Analytics</b>, <b>Machine Learning</b>, and <b>Web Development</b>. 
            My passion lies in transforming ideas into impactful solutions that solve real-world challenges.<br /><br />
            Whether you're looking to build a dynamic web application, integrate predictive analytics, or scale your infrastructure, 
            I can help you achieve your goals with scalable and reliable technology.<br /><br />
            I’m skilled in technologies like <b>Python, React, Node.js</b>, and always staying ahead by learning 
            <b>Next.js</b> and <b>TypeScript</b>.<br /><br />
            When I’m not coding, you’ll find me indulging in <b>reading books 📗</b> or exploring the latest advancements in tech.
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
