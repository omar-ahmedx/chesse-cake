import React from "react";
import { useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as section from "../../styles/container.module.css";
import * as cases from "../../styles/cases.module.css";
import * as global from "../../styles/global.module.css";
import * as dark from "../../styles/dark.module.css";

const Cases = ({ path }) => {
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
                <div className="shape-wrapper mouse-hover full-wrapper">
                  <div className="shape">
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
                  </div>
                  <div className={cases.video_container}>
                    <video loop={true} muted={true} className="shape-video">
                      <source src={c.frontmatter.video} type="video/mp4" />
                    </video>
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
