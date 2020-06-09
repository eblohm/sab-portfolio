import React from "react";
import styled from "styled-components";
import banner from "../assets/banner.jpg";

const ScarletteFont = styled.span`
  font-family: "Scarlette";
`;

const BrandonFont = styled.p`
  font-family: "Brandon";
`;

const BannerStyles = styled.div`
  background-image: url(${banner});
  background-position: 70% 50%;
  background-size: cover;
  height: 80vh;
  margin-bottom: 5rem;
  overflow: hidden;
  position: relative;

  @media screen and (min-width: 800px) {
    background-position: center;
  }
`;

const TextCircle = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  bottom: 0;
  padding: 1rem;
  position: absolute;

  @media screen and (min-width: 600px) {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 1rem 2rem;
  }

  @media screen and (min-width: 800px) {
    border-radius: 50%;
    bottom: -5rem;
    left: 10%;
    padding: 3rem;
    position: absolute;
    transform: translateX(-15%);
    width: 570px;
  }

  @media screen and (min-width: 1200px) {
    background-color: rgba(255, 255, 255, 0.25);
    padding: 4rem;
    width: 640px;
  }

  @media screen and (min-width: 1350px) {
    left: 15%;
  }

  h1,
  h2,
  p {
    margin: 0;
  }

  span {
    color: #590f1a;
    display: block;
    text-align: center;
  }

  p {
    margin: 1rem 0;
  }

  h1 {
    font-size: 3rem;
    font-weight: 700;

    @media screen and (min-width: 600px) {
      font-size: 4rem;
      font-weight: 300;
    }

    @media screen and(min-width: 1200px) {
      font-size: 5rem;
    }

    @media screen and (min-width: 1600px) {
      font-size: 6rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0;

    @media screen and (min-width: 600px) {
      font-size: 3.5rem;
      font-weight: 300;
    }

    @media screen and (min-width: 800px) {
      margin-bottom: 2.5rem;
    }

    @media screen and (min-width: 1200px) {
      margin-bottom: 2rem;
    }

    @media screen and (min-width: 1600px) {
      font-size: 3.5rem;
    }
  }
`;

const Banner = () => {
  return (
    <BannerStyles>
      <TextCircle>
        <h1>
          <ScarletteFont>Welcome</ScarletteFont>
        </h1>
        <BrandonFont>
          Upon graduating from Michigan State University (Go Green!) - I decided
          to go work for Mickey Mouse to fulfill a lifelong dream. After a
          semester of working for the Mouse I made my way to Kalamazoo to work
          in a Marketing Department for a beverage distributing company. I then
          decided to move back to the Metro-Detroit area and worked for a
          smaller advertising agency, and then entered the corporate world
          working for a commercial insurance company in their marketing
          department. Then, I made my way to a larger Detroit based agency where
          I got to work on all things Chevy. Now I am searching for my next big
          career opportunity post pandemic. I look forward to figuring out what
          that is. Thanks for visiting.
        </BrandonFont>
        <h2>
          <ScarletteFont>- Sarah</ScarletteFont>
        </h2>
      </TextCircle>
    </BannerStyles>
  );
};

export default Banner;
