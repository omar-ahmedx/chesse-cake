import React from "react";
import gif1 from "../../images/gifs/gif1.webp";
import gif2 from "../../images/gifs/gif2.webp";
import gif3 from "../../images/gifs/gif3.webp";
const BottomList = ({ name1, name2, name3, path }) => {
  return (
    <section>
      {path === "culture" ? (
        <p className="small-text">
          <strong>What</strong> we craft.
        </p>
      ) : (
        ""
      )}
      <div>
        <div>
          <img src={gif1} alt="" />
          {name1}
        </div>
        <div>
          <img src={gif2} alt="" />
          {name2}
        </div>
        <div>
          <img src={gif3} alt="" />
          {name3}
        </div>
      </div>
    </section>
  );
};

export default BottomList;
