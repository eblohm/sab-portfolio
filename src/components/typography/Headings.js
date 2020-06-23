import React from 'react';
import styled from 'styled-components';
import headingDots from '../../assets/heading-dots.png';

const SectionHeadingStyles = styled.div`
  display: inline-block;
  position: relative;

  h2 {
    bottom: 0;
    color: #590f1a;
    font-family: 'The Spirit', sans-serif;
    font-size: 3.5rem;
    position: absolute;
    right: -130px;
  }
`;

const SectionHeading = ({ children }) => {
  return (
    <SectionHeadingStyles>
      <img src={headingDots} />
      <h2>{children}</h2>
    </SectionHeadingStyles>
  );
};

export { SectionHeading };
