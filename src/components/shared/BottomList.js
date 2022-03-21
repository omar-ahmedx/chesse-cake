import React from "react";
import * as list from "../../styles/bottom_list.module.css";
import * as container from "../../styles/container.module.css";
import { useEffect } from "react";
import gif1 from "../../images/gifs/gif1.webp";
import gif2 from "../../images/gifs/gif2.webp";
import gif3 from "../../images/gifs/gif3.webp";
const BottomList = ({ name1, name2, name3, path }) => {
  useEffect(() => {
    let list = document.querySelectorAll(".hover-container");
    list.forEach((item) => {
      item.addEventListener("mousemove", (e) => {
        item.childNodes[0].style.cssText = `left: ${
          e.layerX - 350 / 2
        }px; top: ${e.layerY - 350 / 2}px;`;
      });
    });
  }, []);
  return (
    <section className={container.container_bottom_list}>
      {path === "culture" ? (
        <p className="small-text">
          <strong>What</strong> we craft.
        </p>
      ) : (
        ""
      )}
      <div>
        <div className={`${list.item} ${list.border} hover-container`}>
          <img src={gif1} alt="" className={`${list.gif} hover-img`} />
          {name1}
        </div>
        <div className={`${list.item} ${list.middle_text} hover-container`}>
          <img src={gif2} alt="" className={`${list.gif} hover-img`} />
          {name2}
        </div>
        <div className={`${list.item} ${list.border} hover-container`}>
          <img src={gif3} alt="" className={`${list.gif} hover-img`} />
          {name3}
        </div>
      </div>
    </section>
  );
};

export default BottomList;
