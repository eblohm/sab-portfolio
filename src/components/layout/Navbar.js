import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";

const NavStyles = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;

  .left--nav {
    margin-left: 2.5%;

    @media screen and (min-width: 700px) {
      margin-left: 5%;
    }
  }

  .right--nav {
    margin-right: 2.5%;

    @media screen and (min-width: 700px) {
      margin-right: 5%;
    }

    nav {
      @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        text-align: right;
      }
    }
  }

  .left--nav,
  .right--nav {
    a {
      box-shadow: none;
      color: #ffffff;
      font-family: "BrandonBold";
      text-decoration: none;
      text-transform: uppercase;

      &[aria-current="page"],
      &:hover {
        color: #590f1a;
      }

      &:not(:last-child) {
        margin-right: 0;

        @media screen and (min-width: 600px) {
          margin-right: 1.5rem;
        }

        @media screen and (min-width: 700px) {
          margin-right: 3rem;
        }
      }
    }
  }
`;

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "2.5%",
    top: "1rem",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "0",
    width: "200px",
  },
  bmMenu: {
    background: "rgba(55, 58, 71, 0.95)",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const Navbar = () => {
  let width = window.innerWidth;

  if (width < 600) {
    return (
      <NavStyles>
        <div className='left--nav'>
          <Link to={`/`}>LOGO</Link>
        </div>
        <div className='right--nav'>
          <Menu styles={styles} right>
            <Link to={`/`}>Home</Link>
            <Link to={`/about`}>About</Link>
            <Link to={`/portfolio`}>Portfolio</Link>
            <a href='/resume.pdf'>Resume</a>
            <Link to={`/contact`}>Contact</Link>
          </Menu>
        </div>
      </NavStyles>
    );
  }

  return (
    <NavStyles>
      <div className='left--nav'>
        <Link to={`/`}>LOGO</Link>
      </div>
      <div className='right--nav'>
        <Link to={`/`}>Home</Link>
        <Link to={`/about`}>About</Link>
        <Link to={`/portfolio`}>Portfolio</Link>
        <a href='/resume.pdf'>Resume</a>
        <Link to={`/contact`}>Contact</Link>
      </div>
    </NavStyles>
  );
};

export default Navbar;
