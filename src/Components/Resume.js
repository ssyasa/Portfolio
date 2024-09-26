import React, { useState, useEffect } from 'react';
import { BsDownload } from "react-icons/bs";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [wid, setWid] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWid(window.innerWidth);
    
    window.addEventListener("resize", handleResize);
    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  const pdfFile = '../Shreyas CR_Resume sept 2024.pdf'; // Update this with your PDF file path

  return (
    <div className='ResumePage'>
      <Document file={pdfFile} className="resumeview">
        <Page pageNumber={1} scale={wid < 700 ? (wid > 475 ? 0.7 : 0.5) : 1} />
      </Document>

      <a href={pdfFile} target='_blank' rel="noreferrer" download="Shreyas's Resume">
        <button className='downloadCV' type='button'>
          <h3><BsDownload />&nbsp; Download MY CV</h3>
        </button>
      </a>
    </div>
  );
}

export default Resume;
