import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';

const Home = () => {
  return (
    <div >
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>SHREYAS C.R</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I enjoy transforming ideas into real-world applications through web development and machine learning. 
            I'm currently focusing on building scalable applications and exploring advanced algorithms for predictive modeling. <br /><br />
            My main expertise lies in <b>Python, React, Node.js</b>, and <b>Machine Learning</b>, and I am constantly learning new technologies like <b>Next.js</b> and <b>TypeScript</b>. <br /><br />
            Also, I love <b>reading books 📗</b>    
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
}

export default Home;
