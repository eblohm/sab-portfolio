// Gatsby supports TypeScript natively!
import React from "react";
import { PageProps, Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Banner from "../components/Banner";
import Grid from "../components/Grid";

import { usePortfolioData } from "../hooks/usePortfolioData";

type Data = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMarkdownRemark: any;
};

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title;
  const portfolio = usePortfolioData();

  const { edges: portfolioItems } = portfolio;

  return (
    <Layout title={siteTitle}>
      <SEO title='Home' />
      <Banner />
      <Grid />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;
