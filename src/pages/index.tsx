// Gatsby supports TypeScript natively!
import React from 'react';
import { PageProps, Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Banner from '../components/Banner';
import Portfolio from '../components/portfolio/Portfolio';
import About from '../components/About';

import { usePortfolioData } from '../hooks/usePortfolioData';

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
      <About title='about me'>
        Hi! Most people call me Sarah. I'm a designer/advertising professional
        in the Metro-Detroit area and bunny mom of three (Bridget, Toast and
        Hazel). Upon graduating from Michigan State University (Go Green!) - I
        decided to go work for Mickey Mouse to fulfill a lifelong dream of
        working for Disney. After a semester of working for the Mouse I decided
        it was time to put my degree to work by accepting a job in Kalamazoo to
        work as a production for a beverage distributing company. Fast-forward a
        year and a half, I then decided to move back to the Metro-Detroit area
        and interned for a smaller advertising agency, then entered the
        corporate world working for a Commercial Insurance company in their
        marketing department. Then made my way to a Detroit based agency where I
        worked in the studio and got to work on all things Chevy. Now I am
        searching for my next big careern opportunity post-pandemic. I look
        forward to figuring out what that is. Thanks for visiting.
      </About>
      <Portfolio />
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
