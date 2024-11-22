/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
import React, { useState } from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";

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
      position: "relative",
      top: "-70px",
    },
    ctaButton: {
      marginTop: "25px",
      padding: "12px 30px",
      background: "linear-gradient(135deg, #11d3ff, #28a745)",
      color: "#fff",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: "bold",
      outline: "none",
      position: "relative",
      overflow: "hidden",
      transition: "transform 0.4s ease, box-shadow 0.4s ease, background 0.3s ease",
      boxShadow: isHover
        ? "0 15px 30px rgba(0, 195, 255, 0.4)"
        : "0 5px 15px rgba(0, 195, 255, 0.2)",
      transform: isHover ? "scale(1.1) rotate(0deg)" : "scale(1)",
    },
    ctaText: {
      marginTop: "10px",
    },
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
          <p style={styles.ctaText}>
            Let's turn your vision into reality with innovative solutions in{" "}
            <b>Web Development</b> and <b>Machine Learning</b>.
          </p>
          <button
            style={styles.ctaButton}
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
        <div className="AboutText" style={styles.aboutText}>
          <h1 className="AboutTextHeading">
            A Brief <b>Introduction</b>
          </h1>
          <p>
            As a versatile <b>Freelancer</b> with a deep passion for{" "}
            <b>Data Analytics</b>, <b>Machine Learning</b>, and <b>Web Development</b>, I
            help businesses and individuals turn ideas into actionable, scalable
            solutions. With a degree in <b>Bachelor of Technology</b> and hands-on
            experience across various industries, I specialize in crafting
            data-driven applications and predictive models that deliver measurable
            results.<br />
            <br />
            Whether you need a web app that is fast, intuitive, and user-friendly, or
            a machine learning model that accurately forecasts trends and insights, I
            bring a wealth of knowledge in it.<br />
            <br />
            I focus on providing solutions that not only meet but exceed client
            expectations. My experience spans everything from full-stack development
            to designing predictive systems using machine learning and AI, tailored to
            solving real-world problems.<br />
            <br />
            When I'm not building innovative projects, you’ll find me exploring
            emerging technologies, reading thought-provoking books 📗, and constantly
            seeking new ways to make an impact in the tech world. Let’s collaborate to
            bring your next big idea to life!
          </p>
        </div>

        {/* Profile Card Section */}
        <div className="profile-container">
          <div className="card-container">
            <span className="pro">10+ projects done</span>
            <img
              className="round"
              src={require("C:/Users/shrey/OneDrive/Desktop/Portfolio-main current/src/images/ss_pic-fotor-2024112221420.png")}
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
                Message
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
    </div>
  );
};

export default Home;
