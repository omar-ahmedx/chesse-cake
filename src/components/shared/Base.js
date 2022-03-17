import React from "react";
const Base = ({ h1, h2, text }) => {
  return (
    <section>
      <div>
        <h1>{h1}</h1>
        <h2>
          {h2}
          {text ? <br /> : ""}
          {text ? `\n ${text}` : ""}
        </h2>
      </div>
    </section>
  );
};

export default Base;
