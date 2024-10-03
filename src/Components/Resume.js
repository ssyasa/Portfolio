/* eslint-disable react/no-unknown-property */ 
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../Shreyas CR_Resume sept 2024.pdf"; // Adjust the path if necessary
import { AiOutlineDownload } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";

function Resume() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set iframe width to a fixed size to maintain medium dimensions
  const iframeWidth = "70%"; // Fixed width for medium size
  const iframeHeight = width > 600 ? "500px" : "300px"; // Responsive height

  // Styles for the component
  const styles = {
    resumeSection: {
      textAlign: "center",
      padding: "50px",
      borderRadius: "30px",
      boxShadow: "0 2px 20px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
      fontFamily: "'Arial', sans-serif", // Set a modern font
      
    },
    
    iframe: {
      border: "none", // Remove border for a cleaner look
      borderRadius: "30px", // Matching border radius
      boxShadow: "0 4px 16px rgba(1, 0, 0, 0.3)", // Enhanced shadow for depth
      transition: "box-shadow 0.3s ease, transform 0.5s ease", // Smooth transition
      marginBottom: "20px", // Margin below iframe for spacing
      willChange: "box-shadow", // Hint to the browser for better performance
    },
    downloadButton: {
      maxWidth: "180px",
      fontSize: "16px",
      padding: "10px 20px",
      background: "linear-gradient(90deg, #007bff, #0056b3)", // Gradient background
      border: "none",
      borderRadius: "30px", // Rounded button
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Shadow for the button
      transition: "background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease" // Transition for hover effect
    },
    hoverShadow: {
      boxShadow: "0 8px 32px rgba(138, 43, 226, 0.5)", // Light purple shadow on hover
    }
  };

  return (
    <Container fluid className="resume-section" style={styles.resumeSection}>
      <Row className="justify-content-center mt-5">
        {/* Combined PDF Viewer and Download Button in one row */}
        <div 
          className="pdf-container" 
          style={styles.iframeContainer} 
          onMouseEnter={(e) => {
            e.currentTarget.querySelector("iframe").style.boxShadow = styles.hoverShadow.boxShadow;
          }} 
          onMouseLeave={(e) => {
            e.currentTarget.querySelector("iframe").style.boxShadow = styles.iframe.boxShadow;
          }}
        >
          <iframe
            src={pdf}
            width={iframeWidth}
            height={iframeHeight}
            title="Resume PDF"
            style={styles.iframe}
          ></iframe>
        </div>
      </Row>

      {/* Download Button in a new Row with hover effect */}
      <Row className="justify-content-center mt-3">
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={styles.downloadButton}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.1)"; // Slightly enlarge on hover
            e.target.style.boxShadow = styles.hoverShadow.boxShadow; // Add hover shadow effect
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)"; // Reset size on hover out
            e.target.style.boxShadow = styles.downloadButton.boxShadow; // Reset shadow
          }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default Resume;
