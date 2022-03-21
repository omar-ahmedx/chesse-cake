const path = require("path");
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, printTypeDefinitions } = actions;

  createTypes(`    
    type Frontmatter @dontInfer {
      title: String!
      embeddedImagesLocal: [File] @fileByRelativePath
    }
    `);

  printTypeDefinitions({ path: "./typeDefs.txt" });
};
exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Cases {
      allMdx {
        nodes {
          frontmatter {
            link
          }
        }
      }
    }
  `);

  data.allMdx.nodes.forEach((node) => {
    actions.createPage({
      path: "/work/" + node.frontmatter.link,
      component: path.resolve("./src/template/case.js"),
      context: { link: node.frontmatter.link },
    });
  });
};
