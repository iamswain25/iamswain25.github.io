import React from "react";
import Face from "./Face";
import Year from "./Year";
import { Container } from "react-bootstrap";
import { list } from "./data";
export default function App() {
  return (
    <Container>
      <Face />
      {Object.entries(list)
        .sort(([y1], [y2]) => y2 - y1)
        .map(([year, list]) => (
          <Year year={year} lists={list} />
        ))}
      <hr />
      <section style={{ margin: "30px 0" }}>
        <h2>support me</h2>
        <a
          href="https://coindrop.to/iamswain"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>coindrop.to/iamswain</div>
          <img
            src="https://coindrop.to/embed-button.png"
            alt="Coindrop.to me"
          ></img>
        </a>
      </section>
    </Container>
  );
}
