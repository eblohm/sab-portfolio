import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import useHover from '../../hooks/useHover';

const PortfolioCardStyles = styled.div`
  img {
    width: 363px !important;
  }
`;

const PortfolioCard = ({ base, hover, url }) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <PortfolioCardStyles className='portfolio-item' ref={hoverRef}>
      <Link to={url}>
        <Img
          fluid={base}
          style={!isHovered ? { display: 'none' } : { display: 'block' }}
        />
        <Img
          fluid={hover}
          style={!isHovered ? { display: 'block' } : { display: 'none' }}
        />
      </Link>
    </PortfolioCardStyles>
  );
};

PortfolioCard.propTypes = {
  base: PropTypes.object.isRequired,
  hover: PropTypes.object.isRequired,
};

export default PortfolioCard;
