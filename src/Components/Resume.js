import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../Shreyas CR_Resume sept 2024.pdf"; // Adjust the path if necessary
import { AiOutlineDownload } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Resume.css"; // Importing CSS for additional styles

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

  return (
    <Container 
      fluid 
      className="resume-section" 
      style={{ 
        textAlign: "center", 
        padding: "40px", 
        borderRadius: "30px",
        boxShadow: "0 2px 20px rgba(0, 0, 0, 0.1)" // Subtle shadow for depth
      }}
    >
      
      {/* Embedded PDF Viewer (iframe) */}
      <Row className="justify-content-center mt-5">
        <iframe
          src={pdf}
          width={iframeWidth}
          height={iframeHeight}
          title="Resume PDF"
          style={{
            border: "none", // Remove border for a cleaner look
            borderRadius: "40px", // Slightly smaller border radius for a more modern look
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.15)", // Enhanced shadow for depth
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Transition for hover effect
            marginBottom: "20px", // Margin below iframe for spacing
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.02)"; // Slight zoom on hover
            e.target.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.2)"; // Deeper shadow on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)"; // Reset zoom
            e.target.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.15)"; // Reset shadow
          }}
        ></iframe>
      </Row>

      {/* Download Button below the iframe */}
      <Row className="justify-content-center">
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{
            maxWidth: "180px",
            fontSize: "16px",
            padding: "10px 20px",
            background: "linear-gradient(90deg, #007bff, #0056b3)", // Gradient background
            border: "none",
            borderRadius: "30px", // Rounded button
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", // Shadow for the button
            transition: "background 0.3s ease, transform 0.3s ease" // Transition for hover effect
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)"; // Slightly enlarge on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)"; // Reset size on hover out
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
