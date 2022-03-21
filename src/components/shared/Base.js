import React from "react";
import * as section from "../../styles/container.module.css";
import * as base from "../../styles/base.module.css";

const Base = ({ h1, h2, text }) => {
  return (
    <section className={section.container_base}>
      <div className={base.container}>
        <h1 className={`${base.fontFamily} ${base.h1}`}>{h1}</h1>
        <h2 className={base.h2}>
          {h2}
          {text ? <br /> : ""}
          {text ? `\n ${text}` : ""}
        </h2>
      </div>
    </section>
  );
};

export default Base;
