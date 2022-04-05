import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import useHover from '../../hooks/useHover';

const PortfolioCardStyles = styled.div`
  img {
    width: 363px !important;
  }

  .gatsby-image-wrapper [data-placeholder-image] {
    border-radius: 45px !important;
    opacity: 1 !important;
    transition: none !important;
  }
`;

const PortfolioCard = ({ base, hover, url, behance, title }) => {
  const [hoverRef, isHovered] = useHover();

  const baseImage = getImage(base);
  const hoverImage = getImage(hover);

  return (
    <PortfolioCardStyles className='portfolio-item' ref={hoverRef}>
      <a href={behance}>
        <GatsbyImage
          image={isHovered ? baseImage : hoverImage}
          alt={title}
        />
      </a>
    </PortfolioCardStyles>
  );
};

PortfolioCard.propTypes = {
  base: PropTypes.object.isRequired,
  hover: PropTypes.object.isRequired,
};

export default PortfolioCard;
