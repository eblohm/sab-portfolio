import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const HeaderStyles = styled.header`
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
