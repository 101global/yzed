import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-scroll';
import theme from '../../utilities/theme';

const MobileNav = ({ openMenu, setOpenMenu }) => {
  return (
    <>
      <div className='mobile-nav flex flex-col lg:hidden justify-between w-full'>
        <div className='link-items-container'>
          <Link
            to='model'
            spy={true}
            smooth={true}
            duration={500}
            className='nav-scroll-link inline-block lg:hidden font-light text-white tracking-wide'
            activeClass='active'>
            <p onClick={() => setOpenMenu(false)}>3D Model</p>
          </Link>
          <Link
            to='introduction'
            spy={true}
            smooth={true}
            duration={500}
            className='nav-scroll-link inline-block lg:hidden font-light text-white tracking-wide'
            activeClass='active'>
            <p onClick={() => setOpenMenu(false)}>Introduction</p>
          </Link>
          <Link
            to='about'
            spy={true}
            smooth={true}
            duration={500}
            className='nav-scroll-link inline-block lg:hidden font-light text-white tracking-wide'
            activeClass='active'>
            <p onClick={() => setOpenMenu(false)}>About Us</p>
          </Link>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            duration={500}
            className='nav-scroll-link inline-block lg:hidden font-light text-white tracking-wide'
            activeClass='active'>
            <p onClick={() => setOpenMenu(false)}>Contact</p>
          </Link>
        </div>
      </div>
      <style jsx global>{`
        .mobile-nav {
          background: #0d0d0dfb;
          transform: ${openMenu ? 'translateX(0)' : 'translateX(100%)'};
          min-width: ${openMenu ? '100%' : '0'};
          min-height: calc(100vh - 72px);
          text-align: left;
          position: fixed;
          margin-top: 72px;
          top: 0;
          left: 0;
          z-index: 800;
          transition: all 0.7s ease-in-out;
          font-family: ${theme.fonts.main};
          overflow-y: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .mobile-nav a {
          font-size: 1.6rem;
          text-align: center;
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
