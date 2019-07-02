import React from "react";

export default ({ year, lists }) => (
  <section>
    <h1>{year}</h1>
    <ul>
      {lists.map(({ title, website, desc }, i) => (
        <li key={i}>
          <h2>{title}</h2>
          <h4>
            <a href={website}>{website}</a>
          </h4>
          <h5>{desc}</h5>
        </li>
      ))}
    </ul>
  </section>
);
