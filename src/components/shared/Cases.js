import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
const Cases = ({ path }) => {
  const data = useStaticQuery(graphql`
    query CasesInfo {
      allMarkdownRemark(sort: { fields: frontmatter___order }) {
        nodes {
          frontmatter {
            category
            link
            title
            homeThumbnail {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
            workThumbnail {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
          id
        }
      }
    }
  `);

  const casesInfo = data.allMarkdownRemark.nodes;
  return (
    <section>
      {casesInfo.map((c, index) => (
        <div key={index}>
          <Link to={c.frontmatter.link}>
            <div>
              <div>
                <div>
                  <div>
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

                    <div>
                      <video loop="True" muted="True" type="video/mp4" />
                    </div>
                  </div>
                </div>

                <div>
                  <p>{c.frontmatter.title}</p>
                  <p>
                    {c.frontmatter.category} <span></span> UI/UX
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}

      {path === "home" ? (
        <div>
          <div>
            <Link to="work">
              <div>
                <div></div> <div>All Projects</div>
              </div>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Cases;
