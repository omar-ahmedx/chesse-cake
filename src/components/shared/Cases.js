import React from "react";
import { useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as section from "../../styles/container.module.css";
import * as cases from "../../styles/cases.module.css";
import * as global from "../../styles/global.module.css";
import * as dark from "../../styles/dark.module.css";

const Cases = ({ path }) => {
  useEffect(() => {
    if (path === "work") {
      const videoContainer = document.querySelectorAll(".work-shape-wrapper");
      videoContainer.forEach((wrapper) => {
        wrapper.addEventListener("mouseover", (e) => {
          e.target.querySelector(".work-video").currentTime = 0;
          e.target.querySelector(".work-video").play();
        });
      });
    }
    if (path !== "work") {
      const videoContainer = document.querySelectorAll(".shape-wrapper");
      videoContainer.forEach((wrapper) => {
        wrapper.addEventListener("mouseover", (e) => {
          e.target.querySelector(".shape-video").currentTime = 0;
          e.target.querySelector(".shape-video").play();

          e.target.nextSibling.style = "left:15%";
        });
      });
      videoContainer.forEach((wrapper) => {
        wrapper.addEventListener("mouseleave", (e) => {
          e.target.nextSibling.style = "left:0";
        });
      });

      const videoContainerFull = document.querySelectorAll(".full-wrapper");
      videoContainerFull.forEach((wrapper) => {
        wrapper.addEventListener("mouseover", (e) => {
          e.target.nextSibling.style = "margin-left:14%";
        });
      });
      videoContainerFull.forEach((wrapper) => {
        wrapper.addEventListener("mouseleave", (e) => {
          e.target.nextSibling.style = "left:0";
        });
      });
    }
  });

  useEffect(() => {
    let maxDeltaX = 30,
      maxDeltaY = 30;
    let shapeWrapper = document.querySelectorAll(".shape-wrapper");
    shapeWrapper.forEach((shape) => {
      shape.addEventListener("mousemove", (e) => {
        let shapeWidth = shape.clientWidth,
          shapeHeight = shape.clientHeight;

        let mouseX = (e.layerX / shapeWidth) * 2 - 1,
          mouseY = (e.layerY / shapeHeight) * 2 - 1;

        let translateX = mouseX * maxDeltaX,
          translateY = mouseY * maxDeltaY;

        let /*nextWidth = shape.nextSibling.clientWidth,*/
          nextHeight = shape.nextSibling.clientHeight;

        let mouseXNext = translateX; /*,
          mouseYNext = translateY / (shapeHeight / nextHeight)*/

        shape.childNodes[0].style.cssText = `transform: translate3D(${translateX}px, ${translateY}px,0 )`;

        shape.nextSibling.style.cssText = `transform: translate3D(${
          mouseXNext + 0.14 * shape.nextSibling.clientWidth
        }px, ${(translateY / (shapeHeight / nextHeight)) * 10}px,0 )`;
      });
      shape.addEventListener("mouseout", (e) => {
        shape.childNodes[0].style.cssText = `transform: translate(0, 0)`;
      });
    });
  });

  useEffect(() => {
    const sliderImages = document.querySelectorAll(".shape");
    document.addEventListener("scroll", () => {
      sliderImages.forEach((e, i) => {
        let top = e.getBoundingClientRect().top;
        if (top < 1600) {
          e.classList.add("shape-active");
        }
      });
    });
  });

  const data = useStaticQuery(graphql`
    query CasesInfo {
      allMdx(sort: { fields: frontmatter___order }) {
        nodes {
          frontmatter {
            video
            category
            link
            title
            homeThumbnail {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
            workThumbnail {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
          id
        }
      }
    }
  `);
  const casesInfo = data.allMdx.nodes;

  return (
    <section className={section.container_cases}>
      <div className={path === "work" ? cases.work_cases : ""}>
        {casesInfo.map((c, index) => (
          <div
            key={index}
            className={
              path === "home" ? cases.full_case : cases.work_case_wrapper
            }
          >
            <Link to={`${path === "home" ? "work/" : ""}${c.frontmatter.link}`}>
              <figure>
                <div
                  className={`${
                    path === "work" ? "work-shape-wrapper" : "shape-wrapper"
                  } mouse-hover full-wrapper`}
                >
                  <div
                    className={`${path === "work" ? "work-shape" : "shape"}`}
                  >
                    {path === "work" ? (
                      <GatsbyImage
                        image={
                          c.frontmatter.workThumbnail.childImageSharp
                            .gatsbyImageData
                        }
                        alt=""
                      />
                    ) : (
                      <GatsbyImage
                        image={
                          c.frontmatter.homeThumbnail.childImageSharp
                            .gatsbyImageData
                        }
                        alt=""
                      />
                    )}
                    <div className={cases.video_container}>
                      <video
                        loop={true}
                        muted={true}
                        className={`${
                          path === "work" ? "work-video" : "shape-video"
                        }`}
                      >
                        <source src={c.frontmatter.video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>

                <figcaption>
                  <div
                    className={
                      path === "work" ? dark.light_caption : global.caption
                    }
                  >
                    {c.frontmatter.title}
                  </div>
                  <div
                    className={
                      path === "work" ? dark.light_category : global.category
                    }
                  >
                    {c.frontmatter.category}
                    <span
                      className={path === "work" ? dark.light_dot : global.dot}
                    ></span>
                    UI/UX
                  </div>
                </figcaption>
              </figure>
            </Link>
          </div>
        ))}

        {path === "home" ? (
          <div>
            <div>
              <Link to="work">
                <div className={cases.home_btn}>
                  <div className={cases.home_line}></div>
                  <div>All Projects</div>
                </div>
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Cases;
