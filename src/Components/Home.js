import React, { useState } from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import ssPic from '../images/ss_pic-fotor-2024112221420.png'; // Relative path
import './Home.css'; // Import external CSS file

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
  const [setIsHover] = useState(false);

  return (
    <div>
      {/* Home Section */}
      <div className="HomePage">
        <div className="HomeText">
          <h1>{getTimeOfDayGreeting()}</h1>
          <h1>
            I'M <b>SHREYAS C.R</b>
          </h1>
          <Typed />
          <p className="ctaText">
            Let's turn your vision into reality with innovative solutions in{" "}
            <b>Web Development</b> and <b>Machine Learning</b>.
          </p>
          <button
            className="ctaButton"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() =>
              window.open("https://www.linkedin.com/in/shreyas-c-r-777b4229a", "_blank")
            }
          >
            Let's Connect
          </button>
        </div>

        {/* Lottie Animation */}
        <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
      </div>

      {/* About Section */}
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            A Brief <b>Introduction</b>
          </h1>
          <h6 className="about_text_paragraphs">
            As a versatile <b>Freelancer</b> with a deep passion for{" "}
            <b>Data Analytics</b>, <b>Machine Learning</b>, and <b>Web Development</b>, I
            help businesses and individuals turn ideas into actionable, scalable
            solutions. With a degree in <b>Bachelor of Technology</b> and hands-on
            experience across various industries, I specialize in crafting
            data-driven applications and predictive models that deliver measurable
            results.
            <br />
            <br />
            Whether you need a web app that is fast, intuitive, and user-friendly, or
            a machine learning model that accurately forecasts trends and insights, I
            bring a wealth of knowledge in it.
            <br />
            <br />
            I focus on providing solutions that not only meet but exceed client
            expectations. My experience spans everything from full-stack development
            to designing predictive systems using machine learning and AI, tailored to
            solving real-world problems.
            <br />
            <br />
            When I'm not building innovative projects, you’ll find me exploring
            emerging technologies, reading thought-provoking books 📗, and constantly
            seeking new ways to make an impact in the tech world. Let’s collaborate to
            bring your next big idea to life!
          </h6>
        </div>

        {/* Profile Card Section */}
        <div className="profile-container">
          <div className="card-container">
            <span className="pro">10+ projects done</span>
            <img
              className="round"
              src={ssPic} // Use the imported image
              alt="Shreyas"
            />
            <h3>Shreyas C.R</h3>
            <h6>Bengaluru</h6>
            <p>Expert Web Developer & Machine Learning Enthusiast</p>
            <div className="buttons">
              <button
                className="primary"
                onClick={() =>
                  window.open("mailto:shreyassrt483@gmail.com", "_blank")
                }
              >
                Mail
              </button>
              <button
                className="primary ghost"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/shreyas-c-r-777b4229a", "_blank")
                }
              >
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form action="https://formbold.com/s/FORM_ID" method="POST">
            <div className="formbold-input-flex">
              <div>
                <label htmlFor="firstname" className="formbold-form-label"> First Name </label>
                <input type="text" name="firstname" id="firstname" placeholder="Jane" className="formbold-form-input" required />
              </div>
              <div>
                <label htmlFor="lastname" className="formbold-form-label"> Last Name </label>
                <input type="text" name="lastname" id="lastname" placeholder="Doe" className="formbold-form-input" required />
              </div>
            </div>

            <div className="formbold-input-flex">
              <div>
                <label htmlFor="email" className="formbold-form-label"> Email </label>
                <input type="email" name="email" id="email" placeholder="jane.doe@example.com" className="formbold-form-input" required />
              </div>
              <div>
                <label htmlFor="phone" className="formbold-form-label"> Phone </label>
                <input type="text" name="phone" id="phone" placeholder="(123) 456-7890" className="formbold-form-input" />
              </div>
            </div>

            <div>
              <label htmlFor="project_type" className="formbold-form-label"> What are you looking for? </label>
              <select name="project_type" id="project_type" className="formbold-form-input" required>
                <option value="web-development">Web Development</option>
                <option value="machine-learning">Machine Learning</option>
                <option value="data-analytics">Data Analytics</option>
                <option value="Graphic designing">Graphic designing</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="formbold-input-flex">
              <div>
                <label htmlFor="budget" className="formbold-form-label"> Budget </label>
                <input type="text" name="budget" id="budget" placeholder="Enter your budget" className="formbold-form-input" />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="formbold-form-label"> Tell me more about your project in detail </label>
              <textarea name="message" id="message" rows="5" placeholder="Project Description here..." className="formbold-form-input" required></textarea>
            </div>

            <button type="submit" className="formbold-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
