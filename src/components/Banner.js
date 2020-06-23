import React from 'react';
import styled from 'styled-components';
import banner from '../assets/banner.jpg';
import quote from '../assets/quote.png';
import bannergrid from '../assets/largegrid.png';

const TheSpiritFont = styled.h1`
  font-family: 'The Spirit';
`;

const BrandonFont = styled.p`
  font-family: 'Brandon';
`;

const BannerStyles = styled.div`
  background-image: url(${banner});
  background-position: 70% 50%;
  background-size: cover;
  height: 60vh;
  margin-bottom: 5rem;
  overflow: hidden;
  position: relative;

  @media screen and (min-width: 600px) {
    height: 80vh;
  }

  @media screen and (min-width: 800px) {
    background-position: center;
  }

  .dots {
    display: none;
    height: 100%;
    width: 50%;

    @media screen and (min-width: 1024px) {
      display: block;
    }
  }
`;

const TextCircle = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  filter: blur(0.5);
  bottom: 0;

  padding: 1rem;
  position: absolute;

  @media screen and (min-width: 600px) {
    background-color: rgba(255, 255, 255, 0.5);
    height: 240px;
    padding: 1rem 2rem;
  }

  @media screen and (min-width: 800px) {
    border-radius: 50%;
    height: 350px;
    left: 10%;
    padding: 3rem;
    position: absolute;
    top: 50%;
    transform: translate(-15%, -40%);
    width: 570px;
  }

  @media screen and (min-width: 1200px) {
    padding: 4rem;
    width: 640px;
  }

  @media screen and (min-width: 1350px) {
    left: 15%;
  }

  p {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0;
    margin-top: 1rem;
    text-align: center;

    @media screen and (min-width: 500px) {
      font-size: 1.5rem;
      margin-top: 1.5rem;
    }
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0;
    margin-top: 2rem;
    text-align: center;

    @media screen and (min-width: 400px) {
      font-size: 3rem;
    }

    @media screen and (min-width: 600px) {
      font-size: 4rem;
      font-weight: 300;
    }

    @media screen and(min-width: 1200px) {
      font-size: 5rem;
    }
  }

  .quote-icon {
    height: auto;
    left: 50%;
    position: absolute;
    top: -5%;
    transform: translateX(-50%);
    width: 60px;

    @media screen and (min-width: 800px) {
      width: 100px;
    }

    @media screen and (min-width: 1024px) {
      width: auto;
    }
  }
`;

const Banner = () => {
  return (
    <BannerStyles>
      <img src={bannergrid} alt='repeating dots' className='dots' />
      <TextCircle>
        <img src={quote} alt='quote' className='quote-icon' />
        <TheSpiritFont>hello. I'm sarah.</TheSpiritFont>
        <BrandonFont>
          Graphic designer and typography enthusiast from the Metro-Detroit
          area.
        </BrandonFont>
      </TextCircle>
    </BannerStyles>
  );
};

export default Banner;
