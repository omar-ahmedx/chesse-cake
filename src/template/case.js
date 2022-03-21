import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout/Layout";
const Case = ({ data }) => {
  const post = data.mdx;
  const images = post.frontmatter.embeddedImagesLocal;
  return (
    <Layout path="home">
      <Helmet>
        <title>{post.frontmatter.name}</title>
        <link rel="canonical" href={`${post.frontmatter.canonical}`} />
        <meta name="Keyword" content={`${post.frontmatter.keywords}`} />
        <meta name="Description" content={`${post.frontmatter.desc}`} />
        <meta name="robots" content={`${post.frontmatter.robots}`} />
        <link
          rel="alternate"
          href={`${post.frontmatter.alternate}`}
          hreflang="en-us"
        />
      </Helmet>
      <main>
        <video controls>
          <source src={post.frontmatter.video} type="video/mp4" />
        </video>
        <MDXRenderer imgs={images}>{post.body}</MDXRenderer>
      </main>
    </Layout>
  );
};

export default Case;

export const query = graphql`
  query CaseStudy($link: String) {
    mdx(frontmatter: { link: { eq: $link } }) {
      body
      frontmatter {
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData(formats: WEBP, layout: FULL_WIDTH)
          }
        }
        video
        robots
        name
        keywords
        desc
        canonical
        alternate
      }
    }
  }
`;
