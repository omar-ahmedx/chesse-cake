import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import teamInfo from "../../info/info";
import * as container from "../../styles/container.module.css";
import * as culture from "../../styles/culture.module.css";

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
    <section className={container.container}>
      <p className="small-text">
        <strong>Who</strong> leads these party people.
      </p>
      <div className={container.container_team}>
        {teamImgs.map((img, index) => (
          <div key={index} className={culture.member}>
            <div>
              <div>
                <GatsbyImage
                  image={img.node.childImageSharp.gatsbyImageData}
                  alt=""
                />
              </div>
            </div>

            <div className={culture.member_name}>
              <p>{teamInfo[index].name}</p>
            </div>
            <div className={culture.quote}>
              <p>{teamInfo[index].quote}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
