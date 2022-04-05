import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from './layout/Header';
import Footer from './layout/Footer';

import TheSpirit from '../../static/The-Spirit.woff2';
import Brandon_reg from '../../static/Brandon_reg.woff2';
import Brandon_bld from '../../static/Brandon_bld.woff2';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'The Spirit';
    src: url(${TheSpirit}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Brandon';
    src: url(${Brandon_reg}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'BrandonBold';
    src: url(${Brandon_bld}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  body {
    margin: 0;
  }
`;

const Layout = ({ title, children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
