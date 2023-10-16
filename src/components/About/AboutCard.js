import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import Contactus from "../Contactus";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">MISS lAXMI PRIYA PRADHAN </span>
             from <span className="purple"> Jharkhand, India.</span>
            <br />I am a Software Engineer at Trisys IT Services Pvt Ltd.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Dress up
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
         
          <footer className="blockquote-footer">Laxmi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
