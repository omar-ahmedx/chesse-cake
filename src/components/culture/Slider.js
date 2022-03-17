import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
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
  return (
    <section>
      <div>
        <div>
          <div>
            <div>
              {cultureImgs.map((img, index) => (
                <GatsbyImage
                  image={img.node.childImageSharp.gatsbyImageData}
                  key={index}
                  alt=""
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
