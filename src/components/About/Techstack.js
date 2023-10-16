import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSqllite,
  DiHtml5,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiCss3,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} Miss={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} Miss={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} Miss={2} className="tech-icons">
        <SiCss3 />
      </Col>
      <Col xs={4} Miss={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} Miss={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} Miss={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} Miss={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} Miss={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} Miss={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} Miss={2} className="tech-icons">
        <DiSqllite />
      </Col>
    </Row>
  );
}

export default Techstack;
