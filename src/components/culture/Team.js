import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import teamInfo from "../../info/info";

const Team = () => {
  const data = useStaticQuery(graphql`
    {
      team: allFile(
        filter: { relativeDirectory: { eq: "team" } }
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

  const teamImgs = data.team.edges;

  return (
    <section>
      <p className="small-text">
        <strong>Who</strong> leads these party people.
      </p>
      {teamImgs.map((img, index) => (
        <div key={index}>
          <div>
            <div>
              <GatsbyImage
                image={img.node.childImageSharp.gatsbyImageData}
                alt=""
              />
            </div>
          </div>

          <div>
            <p>{teamInfo[index].name}</p>
          </div>
          <div>
            <p>{teamInfo[index].quote}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Team;
