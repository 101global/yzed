import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import theme from '../../utilities/theme';

const MobileNav = ({ openMenu, setOpenMenu }) => {
  return (
    <>
      <div className='mobile-nav flex flex-col lg:hidden justify-center w-full bg-transparentBlack fixed top-0 left-0 z-thous'>
        <div className='link-items-container'>
          <Link
            to='model'
            spy={true}
            smooth={true}
            duration={500}
            className='nav-scroll-link inline-block lg:hidden font-light text-white tracking-wide text-center'
            activeClass='active'>
            <p onClick={() => setOpenMenu(false)}>3D Model</p>
          </Link>
          <Link
            to='introduction'
            spy={true}
            smooth={true}
            duration={500}
            className='nav-scroll-link inline-block lg:hidden font-light text-white tracking-wide text-center'
            activeClass='active'>
            <p onClick={() => setOpenMenu(false)}>Introduction</p>
          </Link>
          <Link
            to='about'
            spy={true}
            smooth={true}
            duration={500}
            className='nav-scroll-link inline-block lg:hidden font-light text-white tracking-wide text-center'
            activeClass='active'>
            <p onClick={() => setOpenMenu(false)}>About Us</p>
          </Link>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            duration={500}
            className='nav-scroll-link inline-block lg:hidden font-light text-white tracking-wide text-center'
            activeClass='active'>
            <p onClick={() => setOpenMenu(false)}>Contact</p>
          </Link>
        </div>
      </div>
      <style jsx global>{`
        .mobile-nav {
          transform: ${openMenu ? 'translateX(0)' : 'translateX(100%)'};
          min-width: ${openMenu ? '100%' : '0'};
          min-height: calc(100vh - 4.5rem);
          margin-top: 4.5rem;
          transition: all 0.7s ease-in-out;
          overflow-y: hidden;
        }
        .mobile-nav a {
          font-size: 1.6rem;

          max-width: 60%;
          margin: 0 auto;
        }
        .link-items-container {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 60vh;
        }
      `}</style>
    </>
  );
};

export default MobileNav;

MobileNav.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  setOpenMenu: PropTypes.func.isRequired,
};
