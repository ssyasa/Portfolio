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
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Shreyas C.R</b> and I am from Bengaluru, India.
            I'm a <b>Full-Stack Developer</b> and a final-year college student pursuing a <b>Bachelor of Engineering in Computer Science</b>. <br/><br/>
            I have worked as a <b>Machine Learning Intern</b> and have experience in developing predictive models and web applications.
            I love creating innovative projects with a focus on problem-solving and clean design. You can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to collaborations or roles where I can learn, contribute, and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding, I enjoy exploring new technologies and developing machine learning models to solve real-world problems.
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
        
        <Skills skill='Python' />
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='TensorFlow' />
        <Skills skill='Scikit-learn' />
        <Skills skill='MySQL' />
        <Skills skill='AWS' />
        <Skills skill='Java' />
        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  );
}

export default About;
