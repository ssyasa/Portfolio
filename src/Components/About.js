/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Let’s <b>Build</b> Something Great Together</h1>
          <p>
            Hello! I'm <b>Shreyas C.R.</b>, a dedicated and results-driven <b>Freelance Developer</b> based in Bengaluru, India. Highly skilled in <b>Web Development</b>. I specialize in creating customized solutions that solve complex business problems and add tangible value to my clients.<br/><br/>

            I hold a <b>Bachelor’s degree in Computer Science</b> and have worked with clients from various industries, providing end-to-end services from conceptualization to deployment. Whether you need a <b>Basic Landing Page</b> or a  <b> Full-Stack web application</b>, I’m here to deliver exceptional results.<br/><br/>

            As a freelancer, I take pride in my ability to communicate effectively, manage time efficiently, and ensure that every project I undertake is completed to the highest standards. With experience across <b>Web Development, Data Analytics, Machine Learning</b> and more, I bring technical expertise and creative problem-solving to every project.<br/><br/>

            If you’re looking for a Freelancer who’s passionate about technology and committed to delivering solutions that exceed expectations, let’s connect! Whether it's a short-term project or a long-term partnership, I’m excited to bring your vision to life.<br/><br/>

            <b>Let’s work together and make your next project a success!</b><br/>
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>
      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills />
      </div>
    </>
  );
}

export default About;
