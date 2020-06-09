import { useStaticQuery, graphql } from "gatsby";

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
              mainImage {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              hoverImage {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  return allMarkdownRemark;
};
