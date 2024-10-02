import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "./Particle"; // Ensure this file exists
import pdf from "../Shreyas CR_Resume sept 2024.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Import pdfjs from the package directly
import * as pdfjs from "pdfjs-dist/build/pdf";

// Set the workerSrc
pdfjs.GlobalWorkerOptions.workerSrc = "https://unpkg.com/pdfjs-dist@2.11.338/build/pdf.worker.min.js";

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
