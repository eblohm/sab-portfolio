import React from 'react';
import styled from 'styled-components';
import { SectionHeading } from './typography/Headings';

import bridget from '../assets/bridget.png';
import toast from '../assets/toast.png';
import hazel from '../assets/hazel.png';
import thingrid from '../assets/thingrid.png';

const AboutStyles = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem 2.5% 0;

  @media screen and (min-width: 700px) {
    margin: 2rem 5% 0;
  }

  @media screen and (min-width: 1000px) {
    flex-wrap: nowrap;
    margin: 2rem 0 0 5%;
  }

  .left-half {
    align-items: flex-start;
    display: flex;
    font-family: 'Brandon', sans-serif;
    flex-basis: 100%;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    @media screen and (min-width: 1000px) {
      flex-basis: 50%;
      margin-right: 0;
      width: 50%;
    }

    p {
      @media screen and (min-width: 1000px) {
        margin-left: 108px;
      }

      @media screen and (min-width: 1200px) {
        margin-left: 125px;
      }
    }
  }

  .right-half {
    display: flex;
    flex-basis: 100%;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
    width: 100%;

    @media screen and (min-width: 1000px) {
      align-items: flex-start;
      flex-basis: 30%;
      flex-direction: column;
      justify-content: center;
      width: 30%;
    }

    .dots {
      display: none;
      position: absolute;
      right: -90px;
      z-index: -1;

      @media screen and (min-width: 1000px) {
        display: block;
      }
    }

    .bunny {
      height: auto;
      width: auto;

      @media screen and (min-width: 1000px) {
        width: 175px;
      }

      @media screen and (min-width: 1200px) {
        width: 200px;
      }

      @media screen and (min-width: 1500px) {
        width: auto;
      }
    }
  }
`;

const About = ({ title, children }) => {
  return (
    <AboutStyles>
      <div className='left-half'>
        <SectionHeading>{title}</SectionHeading>
        <p>{children}</p>
      </div>
      <div className='right-half'>
        <img src={thingrid} alt='Background Dots' className='dots' />
        <img src={bridget} alt='Bridget' className='bunny' />
        <img src={toast} alt='Toast' className='bunny toast' />
        <img src={hazel} alt='Hazel' className='bunny' />
      </div>
    </AboutStyles>
  );
};

export default About;
