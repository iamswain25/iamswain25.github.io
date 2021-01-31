import React from "react";
import Lacan from "./lacan.png";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Face(props) {
  return (
    <Container>
      <Row style={{ alignItems: "center" }}>
        <Col>
          <img
            src={Lacan}
            alt="img"
            style={{
              objectFit: "contain",
              width: "inherit",
              borderRadius: 20,
              transform: "scale(0.8)",
            }}
          />
        </Col>
        <Col>
          <h1>Swain Hwang</h1>
          <h2>Web Dev.</h2>
          <h3>Javascript</h3>
          <Row>
            <Col>
              {[
                { site: "https://linkedin.com/in/iamswain", icon: faLinkedin },
                { site: "https://github.com/iamswain25", icon: faGithub },
                { site: "https://facebook.com/iamswain", icon: faFacebook },
              ].map((i, index) => (
                <a
                  href={i.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  style={{ marginRight: 10 }}
                >
                  <FontAwesomeIcon icon={i.icon} size="3x" />
                </a>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
