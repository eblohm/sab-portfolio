import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import useHover from '../../hooks/useHover';

const PortfolioCardStyles = styled.div`
  img {
    max-width: 100%;
  }

  .gatsby-image-wrapper [data-placeholder-image] {
    border-radius: 45px !important;
    opacity: 1 !important;
    transition: none !important;
  }
`;

const PortfolioCard = ({ base, hover, url, behance, title }) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <PortfolioCardStyles className='portfolio-item' ref={hoverRef}>
      <a href={behance} target="_blank">
        <Img
          fluid={base}
          style={!isHovered ? { display: 'none' } : { display: 'block' }}
          fadeIn={false}
          durationFadeIn={0}
          alt={title}
        />
        <Img
          fluid={hover}
          style={!isHovered ? { display: 'block' } : { display: 'none' }}
          fadeIn={false}
          durationFadeIn={0}
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
