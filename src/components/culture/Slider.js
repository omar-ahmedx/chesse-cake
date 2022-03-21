import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { useEffect } from "react";
const Slider = () => {
  const data = useStaticQuery(graphql`
    {
      culture: allFile(
        filter: { relativeDirectory: { eq: "culture" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            id
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
            name
          }
        }
      }
    }
  `);

  const cultureImgs = data.culture.edges;
  useEffect(() => {
    // get the slider
    var theSlider = document.querySelectorAll(".slider-all-items");
    theSlider.forEach((slider) => {
      dragElement(slider);
    });
    // run the function

    function dragElement(theSlider) {
      var pos1 = 0,
        pos3 = 0;
      theSlider.onmousedown = dragMouseDown;

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos3 = e.clientX;

        // set the element's new position:
        if (theSlider.offsetLeft - pos1 >= 0) {
          theSlider.style.left = 0;
        } else if (theSlider.offsetLeft - pos1 < -2515) {
          closeDragElement();
          theSlider.style.left = "-2500px";
        } else {
          theSlider.style.left = theSlider.offsetLeft - pos1 + "px";
        }
      }

      function closeDragElement() {
        // get each item width

        // get the right side position of the slider

        // delay 0.5s, then remove the class .shifting when finished checking and styling
        // .shifting {transition: all 0.5s ease;}
        setTimeout(() => {
          theSlider.classList.remove("shifting");
        }, 500);

        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
    let list = document.querySelectorAll(".hover-container");
    list.forEach((item) => {
      item.addEventListener("mousemove", (e) => {
        console.log();
        item.childNodes[0].style.cssText = `left: ${
          e.layerX - 350 / 2
        }px; top: ${e.layerY - 350 / 2}px;`;
      });
    });
    let sliders = document.querySelectorAll(".slider-container");
    sliders.forEach((slide) => {
      slide.addEventListener("mouseenter", () => {
        document.querySelector(".drag").style.display = "flex";
        document.querySelector(".cursor-dot").style.backgroundColor =
          "transparent";
        document
          .querySelector(".cursor-dot-outline")
          .classList.add("eye-outline");
      });
      slide.addEventListener("mouseleave", () => {
        document.querySelector(".drag").style.display = "none";
        document.querySelector(".cursor-dot").style.backgroundColor = "#f49578";
        document
          .querySelector(".cursor-dot-outline")
          .classList.remove("eye-outline");
      });
    });
  });
  useEffect(() => {
    document.querySelector("body").classList.add("loaded");
    document.querySelector("nav").classList.add("animate-nav");
    if (document.querySelector(".slide-header")) {
      document.querySelector(".slide-header").classList.add("animate-header");
    }
    let list = document.querySelectorAll(".mouse-hover");
    list.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        document.querySelector(".cursor-dot").classList.add("eye");
        document
          .querySelector(".cursor-dot-outline")
          .classList.add("eye-outline");
      });
      item.addEventListener("mouseleave", () => {
        document.querySelector(".cursor-dot").classList.remove("eye");
        document
          .querySelector(".cursor-dot-outline")
          .classList.remove("eye-outline");
      });
    });
  });
  return (
    <section className="slider-wrapper">
      <div>
        <div data-item="slider-full" className="slider-container">
          <div className="slider-all-items">
            <div className="slider-item">
              {cultureImgs.map((img, index) => (
                <GatsbyImage
                  image={img.node.childImageSharp.gatsbyImageData}
                  key={index}
                  alt=""
                  className={`img${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
