import React from 'react';
import Layout from '../components/layout';
import { Container, TopSpace } from '../components/StyledComponents';

const portfolio = () => {
  return (
    <Layout title='Portfolio'>
      <TopSpace />
      <Container>
        <h1>Thanks for your message!</h1>
        <p>I'll be in touch soon.</p>
      </Container>
    </Layout>
  );
};

export default portfolio;
