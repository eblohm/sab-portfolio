import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaTwitter, FaBehance, FaLinkedin } from 'react-icons/fa';
import { FooterHeading } from '../typography/Headings';

const FooterStyles = styled.footer`
  background-color: #590f1a;
  display: flex;
  font-family: 'Brandon';
  justify-content: space-between;
  padding: 3rem 0;

  &,
  a {
    box-shadow: none;
    color: #ffffff;
  }

  .footer--left {
    margin-left: 5%;

    .contact-info {
      display: flex;
      flex-direction: column;

      @media screen and (min-width: 500px) {
        margin-left: 76px;
      }
    }
  }

  .footer--right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 5%;

    &__top {
      display: flex;
      justify-content: flex-end;

      a {
        font-size: 1.45rem;

        &:not(:last-child) {
          margin-right: 1rem;

          @media screen and (min-width: 500px) {
            margin-right: 2rem;
          }
        }
      }
    }

    &__bottom {
      p {
        margin-bottom: 0;
        text-align: right;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <div className='footer--left'>
        <FooterHeading>contact me</FooterHeading>
        <div className='contact-info'>
          <a href='mailto:sarah.blohm@outlook.com'>sarah.blohm@outlook.com</a>
        </div>
      </div>
      <div className='footer--right'>
        <div className='footer--right__top'>
          <a href='https://www.behance.net/barkers6'>
            <FaBehance />
          </a>
          <a href='https://www.instagram.com/sarah.blohm/'>
            <FaInstagram />
          </a>
          <a href='https://www.linkedin.com/in/sarahblohm'>
            <FaLinkedin />
          </a>
          <a href='https://twitter.com/heysarahashley'>
            <FaTwitter />
          </a>
        </div>
        <div className='footer--right__bottom'>
          <p>&copy; 2022 Sarah Blohm</p>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
