import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
//import SEO from "../components/seo";

const PortfolioPostTemplate = ({ data, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Layout location={window.location} title={siteTitle}>
      <h1>Portfolios</h1>
      {JSON.stringify(data)}
    </Layout>
  );
};

export default PortfolioPostTemplate;

export const pageQuery = graphql`
  query PortfolioPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
