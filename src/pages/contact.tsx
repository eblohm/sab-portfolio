import React, { useState } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby-link';
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

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const contact = () => {
  const [formState, setFormState] = useState({});

  const onChange = (e) =>
    setFormState({ ...formState, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': form.getAttribute('name'), ...formState }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  return (
    <Layout title='Contact Me'>
      <SEO title='Contact Me' />
      <TopSpace />
      <PageContainer>
        <h1>Let's Talk</h1>
        <form
          name='contact'
          method='POST'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
          action='/thankyou'
          onSubmit={onSubmit}
        >
          <input type='hidden' name='form-name' value='contact' />
          <p hidden>
            <label>
              <input name='bot-field' onChange={onChange} />
            </label>
          </p>
          <p>
            <label>
              <input
                type='text'
                name='name'
                placeholder='Name'
                onChange={onChange}
              />
            </label>
          </p>
          <p>
            <label>
              <input
                type='email'
                name='email'
                placeholder='Email'
                onChange={onChange}
              />
            </label>
          </p>
          <p>
            <label>
              <textarea
                name='message'
                placeholder='Message'
                onChange={onChange}
              ></textarea>
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
