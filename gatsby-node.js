const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___title], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  const portfolioPost = path.resolve("./src/templates/portfolio-post.js");
  const portfolioResults = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___order], order: ASC }
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/(/portfolio/)/" } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (portfolioResults.errors) {
    throw portfolioResults.errors;
  }

  const portfolios = portfolioResults.data.allMarkdownRemark.edges;

  portfolios.forEach((portfolio, index) => {
    const previous =
      index === portfolios.length - 1 ? null : portfolios[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    console.log(portfolio.node.fields.slug);

    createPage({
      path: portfolio.node.fields.slug,
      component: portfolioPost,
      context: {
        slug: `${portfolio.node.fields.slug}`,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
