import React from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import { SectionHeading } from '../typography/Headings';
import { Container } from '../StyledComponents';

const PortfolioStyles = styled.section`
  background-color: #f0f0f0;
  padding: 6rem 0;
`;

const Portfolio = () => {
  return (
    <PortfolioStyles>
      <Container>
        <SectionHeading>portfolio</SectionHeading>
        <Grid />
      </Container>
    </PortfolioStyles>
  );
};

export default Portfolio;
