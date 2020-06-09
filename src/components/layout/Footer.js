import React from "react";
import styled from "styled-components";
import { FaInstagram, FaTwitter, FaBehance } from "react-icons/fa";

const FooterStyles = styled.footer`
  background-color: #590f1a;
  display: flex;
  font-family: "Brandon";
  justify-content: space-between;
  margin-top: 5rem;
  padding: 3rem 0;

  &,
  a {
    box-shadow: none;
    color: #ffffff;
  }

  .footer--left {
    display: flex;
    flex-direction: column;
    margin-left: 5%;

    h3 {
      font-family: "Brandon";
      font-size: 1.25rem;
      margin: 0 0 2rem 0;
      text-transform: uppercase;

      @media screen and (min-width: 400px) {
        font-size: 1.4427rem;
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
          margin-right: 2rem;
        }
      }
    }

    &__bottom {
      p {
        margin-bottom: 0;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyles>
      <div className='footer--left'>
        <h3>Contact Me</h3>
        <a href='tel:+15865567693'>586.556.7693</a>
        <a href='mailto:barkers6@live.com'>barkers6@live.com</a>
      </div>
      <div className='footer--right'>
        <div className='footer--right__top'>
          <a href='https://www.behance.net/barkers6'>
            <FaBehance />
          </a>
          <a href='https://www.instagram.com/princess.ashtreemeadow/'>
            <FaInstagram />
          </a>
          <a href='https://twitter.com/heysarahashley'>
            <FaTwitter />
          </a>
        </div>
        <div className='footer--right__bottom'>
          <p>&copy; 2020 Sarah Barker</p>
        </div>
      </div>
    </FooterStyles>
  );
};

export default Footer;
