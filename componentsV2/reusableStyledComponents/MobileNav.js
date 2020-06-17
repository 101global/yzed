import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-scroll';
import theme from '../../utilities/theme';

const MobileNav = ({ openMenu, setOpenMenu }) => {
  return (
    <>
      <div className='mobile-nav flex flex-col lg:hidden justify-between w-full'>
        <Link
          to='model'
          spy={true}
          smooth={true}
          duration={500}
          className='nav-scroll-link inline-block lg:hidden'
          activeClass='active'
          onSetActive={() => setOpenMenu(false)}>
          3D Model
        </Link>
        <Link
          to='introduction'
          spy={true}
          smooth={true}
          duration={500}
          className='nav-scroll-link inline-block lg:hidden'
          activeClass='active'
          onSetActive={() => setOpenMenu(false)}>
          Introduction
        </Link>
        <Link
          to='about'
          spy={true}
          smooth={true}
          duration={500}
          className='nav-scroll-link inline-block lg:hidden'
          activeClass='active'
          onSetActive={() => setOpenMenu(false)}>
          About Us
        </Link>
        <Link
          to='contact'
          spy={true}
          smooth={true}
          duration={500}
          className='nav-scroll-link inline-block lg:hidden'
          activeClass='active'
          onSetActive={() => setOpenMenu(false)}>
          Contact
        </Link>
      </div>
      <style jsx global>{`
        .mobile-nav {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          background: ${theme.colors.black};
          transform: ${openMenu ? 'translateX(0)' : 'translateX(100%)'};
          min-width: ${openMenu ? '100%' : '0'};
          height: calc(100vh - 88.5px);
          text-align: left;
          position: fixed;
          margin-top: 88.5px;
          top: 0;
          left: 0;
          z-index: 1001;
          transition: all 0.5s ease-in-out;
          font-family: ${theme.fonts.main};
          overflow-y: scroll;
        }
        .mobile-nav a {
          font-size: 1.6rem;
          text-align: center;
          max-width: 60%;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

export default MobileNav;
