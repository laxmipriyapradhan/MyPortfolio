import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import PortfolioImg from '../../Assets/PortfolioImg.png'

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col Miss={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!&nbsp;
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Miss Laxmi</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
           

            <Col Miss={5} style={{ paddingBottom: 20 }}>
              <img
                src={PortfolioImg}
                alt="home pic"
                className="img-fluid"
                style={{marginTop: "100px",  maxHeight: "100%"}}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
