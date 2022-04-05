import { useStaticQuery, graphql } from 'gatsby';

export const usePortfolioData = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "portfolio" } } }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              mainImage {
                childImageSharp {
                  gatsbyImageData
                }
              }
              hoverImage {
                childImageSharp {
                  gatsbyImageData
                }
              }
              behance
            }
          }
        }
      }
    }
  `);
  return allMarkdownRemark;
};
