import React from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import { SectionHeading } from './typography/Headings';

const PortfolioStyles = styled.section`
  background-color: #f0f0f0;
  padding: 6rem 0;

  .container {
    margin: 0 auto;
    width: 95%;

    @media screen and (min-width: 700px) {
      width: 90%;
    }
  }
`;

const Portfolio = () => {
  return (
    <PortfolioStyles>
      <div className='container'>
        <SectionHeading>portfolio</SectionHeading>
        <Grid />
      </div>
    </PortfolioStyles>
  );
};

export default Portfolio;
