import React from "react";
import { howInfo } from "../../info/info";
import gif1 from "../../images/gifs/gif1.webp";
import gif2 from "../../images/gifs/gif2.webp";
import gif3 from "../../images/gifs/gif3.webp";
const How = () => {
  const gifs = [gif1, gif2, gif3];
  return (
    <section>
      <p className="small-text">
        <strong>How</strong> we make fun stuff.
      </p>
      <ol>
        {howInfo.map((info, index) => (
          <li key={index}>
            <div>
              <h2>{info.title}</h2>
            </div>
            <div className="gif">
              <img src={gifs[index]} alt="" />
            </div>
            <div className="section-text">
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
