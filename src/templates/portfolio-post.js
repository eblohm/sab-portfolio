import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
//import SEO from "../components/seo";
import { Container, TopSpace } from '../components/StyledComponents';

const PortfolioPostTemplate = ({ data, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Layout title={siteTitle}>
      <TopSpace />
      <Container>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <article
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </Container>
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
