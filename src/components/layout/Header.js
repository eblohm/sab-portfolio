import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

const HeaderStyles = styled.header`
  background-color: rgba(255, 255, 255, 0.7);
  position: fixed;
  width: 100%;
  z-index: 9999;
`;

const Header = () => {
  return (
    <HeaderStyles>
      <Navbar />
    </HeaderStyles>
  );
};

export default Header;
