/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import ssPic from "../images/ss_pic-fotor-2024112221420.png"; // Relative path
import "./Home.css"; // Import external CSS file

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

// Handle Button Vibration
const handleButtonClick = () => {
  if (navigator.vibrate) {
    navigator.vibrate(100); // Vibration feedback for 100ms
  }
};

const Home = () => {
  const [formVisible, setFormVisible] = useState(false); // State to toggle modal visibility

  const toggleForm = () => {
    setFormVisible(!formVisible); // Toggle form visibility
  };

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
            <b>Web Development</b>
          </p>
          <button
            className="ctaButton"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/shreyas-c-r-777b4229a",
                "_blank"
              )
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
            <b>Web Development</b>, I
            help businesses and individuals turn ideas into actionable, scalable
            solutions. 
            <br />
            <br />
            With a degree in <b>Bachelor of Technology</b> and hands-on experience across various industries, I specialize in crafting
            data-driven applications and predictive models that deliver measurable results.
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
            <p>Expert Web Developer</p>
            <div className="buttons">
              <button
                className="primary"
                onClick={() => {
                  handleButtonClick(); // Add vibration
                  window.open("mailto:shreyassrt483@gmail.com", "_blank");
                }}
              >
                Mail
              </button>
              <button
                className="primary ghost"
                onClick={() => {
                  handleButtonClick(); // Add vibration
                  window.open(
                    "https://www.linkedin.com/in/shreyas-c-r-777b4229a",
                    "_blank"
                  );
                }}
              >
                LinkedIn
              </button>
              {/* Contact Me via Form Button */}
              <button
                className="ctaButton enhancedButton"
                onClick={() => {
                  handleButtonClick(); // Optional: Add vibration feedback
                  toggleForm(); // Toggle modal visibility
                }}
              >
                ✉️ Contact Me via Form
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form Modal */}
        {formVisible && (
          <div
            className="modal"
            onClick={toggleForm} // Close modal when clicking outside of the modal content
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()} // Prevent closing modal on content click
            >
              <button
                className="modal-close"
                onClick={toggleForm}
                style={{
                  background: "red",
                  border: "none",
                  color: "white",
                  float: "right",
                  cursor: "pointer",
                }}
              >
                ✖
              </button>
              <iframe
                src="https://tally.so/r/w2bo9p"
                width="100%"
                height="500px"
                frameBorder="0"
                title="Contact Form"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
