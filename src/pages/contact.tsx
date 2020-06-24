import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { TopSpace } from '../components/StyledComponents';

const PageContainer = styled.main`
  border-radius: 30px;
  box-shadow: 0 0 10px #d3d3d3;
  margin: 0 auto 3rem;
  padding: 2rem;
  text-align: center;
  width: 30%;

  h1 {
    margin-top: 0;
  }

  input,
  textarea {
    border: 1px solid #d0d0d0;
    border-radius: 5px;
    font-family: 'Brandon', sans-serif;
    padding: 0.5rem;
    width: 100%;
  }

  textarea {
    resize: none;
  }
`;

const contact = () => {
  return (
    <Layout title='Contact Me'>
      <SEO title='Contact Me' />
      <TopSpace />
      <PageContainer>
        <h1>Let's Talk</h1>
        <form
          name='Contact Form'
          method='POST'
          data-netlify='true'
          action='/thankyou'
        >
          <p>
            <label>
              <input type='text' name='name' placeholder='Name' />
            </label>
          </p>
          <p>
            <label>
              <input type='email' name='email' placeholder='Email' />
            </label>
          </p>
          <p>
            <label>
              <textarea name='message' placeholder='Message'></textarea>
            </label>
          </p>
          <p>
            <button type='submit'>Send</button>
          </p>
        </form>
      </PageContainer>
    </Layout>
  );
};

export default contact;
