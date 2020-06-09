import React from "react";
import styled from "styled-components";

import { usePortfolioData } from "../hooks/usePortfolioData";
import PortfolioCard from "./portfolio/PortfolioCard";

const GridStyles = styled.section`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  margin: 0 auto;
  width: 75%;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Grid = () => {
  const portfolio = usePortfolioData();

  const { edges: portfolioItems } = portfolio;

  return (
    <GridStyles>
      {portfolioItems.map((portfolioItem) => (
        <PortfolioCard
          key={portfolioItem.node.fields.slug}
          hover={portfolioItem.node.frontmatter.mainImage.childImageSharp.fluid}
          base={portfolioItem.node.frontmatter.hoverImage.childImageSharp.fluid}
        />
      ))}
    </GridStyles>
  );
};

export default Grid;
