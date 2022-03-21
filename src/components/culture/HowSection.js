import React from "react";
import { howInfo } from "../../info/info";
import gif1 from "../../images/gifs/gif1.webp";
import gif2 from "../../images/gifs/gif2.webp";
import gif3 from "../../images/gifs/gif3.webp";
import * as culture from "../../styles/culture.module.css";
import * as container from "../../styles/container.module.css";

const How = () => {
  const gifs = [gif1, gif2, gif3];
  return (
    <section className={container.container_how}>
      <p className="small-text">
        <strong>How</strong> we make fun stuff.
      </p>
      <ol>
        {howInfo.map((info, index) => (
          <li key={index}>
            <div>
              <div className={culture.list_num}>{`0${index + 1}`}</div>
              <h2>{info.title}</h2>
              <div className={culture.gif}>
                <img src={gifs[index]} alt="" />
              </div>
            </div>
            <div>
              <h3>{info.title}</h3>
              <p>{info.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default How;
