import React, { useState, useEffect } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../Shreyas CR_Resume sept 2024.pdf"; // Ensure this path is correct
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Import the worker directly from pdfjs-dist
import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

const Resume = () => {
  const [wid, setWid] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWid(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    
    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='ResumePage'>
      <Document file={pdf} className="resumeview">
        <Page pageNumber={1} scale={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1} />
      </Document>

      <a href={pdf} target='_blank' download="Resume" rel="noreferrer">
        <button className='downloadCV' type='button'>
          <h3><BsDownload />&nbsp; Download CV</h3>
        </button>
      </a>
    </div>
  );
};

export default Resume;
