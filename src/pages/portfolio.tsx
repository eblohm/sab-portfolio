import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { TopSpace } from '../components/StyledComponents';
import Portfolio from '../components/portfolio/Portfolio';

const portfolio = () => {
  return (
    <Layout title='Portfolio'>
      <SEO title='Portfolio' />
      <TopSpace />
      <Portfolio />
    </Layout>
  );
};

export default portfolio;
