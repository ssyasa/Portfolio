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

  // Set iframe width to 20% on large screens, with adjustments for smaller screens
  const iframeWidth = width > 1200 ? "20%" : width > 992 ? "30%" : width > 768 ? "50%" : "65%";
  const iframeHeight = width > 768 ? "450px" : "300px"; // Smaller height across all devices

  return (
    <Container fluid className="resume-section" style={{ textAlign: "center", padding: "90px" }}>
      
      {/* Embedded PDF Viewer (iframe) */}
      <Row className="content-center mt-5">
        <iframe
          src={pdf}
          width={iframeWidth}
          height={iframeHeight}
          title="Resume PDF"
          style={{
            border: "2px solid #ddd",
            borderRadius: "28px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
            marginBottom: "40px" // Margin below iframe for spacing
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
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)" // Subtle shadow for the button
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
