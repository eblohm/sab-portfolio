import React from "react";
import styled from "styled-components";
import headingDots from "../../assets/heading-dots.png";

const BaseStyles = styled.div`
  display: inline-block;
  position: relative;

  img {
    height: auto;
    margin-bottom: 0;
    width: 175px;

    @media screen and (min-width: 1200px) {
      width: auto;
    }
  }

  h2,
  h3 {
    bottom: 0;
    font-family: "The Spirit";
    margin: 0;
    position: absolute;
  }
`;

const SectionHeadingStyles = styled(BaseStyles)`
  display: inline-block;
  position: relative;

  img {
    width: 175px;
  }

  h2 {
    color: #590f1a;
    font-size: 3rem;
    right: -105px;
  }
`;

const FooterHeadingStyles = styled(BaseStyles)`
  img {
    display: none;

    @media screen and (min-width: 500px) {
      display: block;
      width: 125px;
    }
  }

  h3 {
    color: white;
    font-size: 1.75rem;
    position: relative;

    @media screen and (min-width: 500px) {
      bottom: -2px;
      font-size: 2rem;
      position: absolute;
      right: -90px;
    }
  }
`;

const SectionHeading = ({ children }) => {
  return (
    <SectionHeadingStyles>
      <img src={headingDots} alt="decorative dots" />
      <h2>{children}</h2>
    </SectionHeadingStyles>
  );
};

const FooterHeading = ({ children }) => {
  return (
    <FooterHeadingStyles>
      <img src={headingDots} alt="decorative dots" />
      <h3>{children}</h3>
    </FooterHeadingStyles>
  );
};

export { SectionHeading, FooterHeading };
