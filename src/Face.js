import React from "react";
import Lacan from "./lacan.png";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

export default props => (
  <Container>
    <Row style={{ alignItems: "center" }}>
      <Col>
        <img
          src={Lacan}
          alt="img"
          style={{ objectFit: "contain", width: "inherit" }}
        />
      </Col>
      <Col>
        <h1>Swain Hwang</h1>
        <h2>Web Dev.</h2>
        <h3>Javascript</h3>
        <Row /* style={{ justifyContent: "space-between" }} */>
          <Col>
            <a
              href="https://linkedin.com/in/iamswain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="5x" />
            </a>
          </Col>
          <Col>
            <a
              href="https://github.com/iamswain25"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="5x" />
            </a>
          </Col>
          <Col>
            <a
              href="https://facebook.com/iamswain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="5x" />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);
