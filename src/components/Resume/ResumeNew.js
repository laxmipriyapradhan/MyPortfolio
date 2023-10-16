import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Laxmi_React_2022.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://github.com/laxmipriya/my-portfolio/blob/main/src/Assets/Laxmi_React_2022.pdf";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    // <div>
    //   <Container fluid className="resume-section">
    //     <Particle />
    //     <Row style={{ justifyContent: "center", position: "relative", marginTop: "500px" }}>
    //       <Button
    //         variant="primary"
    //         href={pdf}
    //         target="_blank"
    //         style={{ maxWidth: "250px",marginBottom:"950px", postion:"absolute" }}
    //       >
    //         <AiOutlineDownload  />
    //         &nbsp;Download CV
    //       </Button>
    // </Row>

    <div>
  <Container fluid className="resume-section" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '92vh' }}>
    <Particle />
    <Button
      variant="primary"
      href={pdf}
      target="_blank"
      style={{ maxWidth: "100vh", position:"absolute" }}
    >
      <AiOutlineDownload  />
      &nbsp;Download CV
    </Button>
        

        {/* <Row className="resume">
          <Document file={resumeLink} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row> */}

        {/* <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row> */}
      </Container>
    </div>
  );
}

export default ResumeNew;
