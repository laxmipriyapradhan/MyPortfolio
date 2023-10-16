import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiAndroidstudio,
  SiUbuntu,
  SiJira,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} Miss={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} Miss={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} Miss={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} Miss={2} className="tech-icons">
        <SiJira />
      </Col>
      <Col xs={4} Miss={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
    </Row>
  );
}

export default Toolstack;
