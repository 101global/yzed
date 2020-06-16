import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-scroll';
import YZEDNavLogo from '../../../public/yzed_logo_white.svg';
import theme from '../../../utilities/theme';

const LandingNavigation = () => {
  return (
    <>
      <nav className='flex justify-between sm:justify-start md:justify-between p-3'>
        <div className='logo-container'>
          <YZEDLogoSVG fill={theme.colors.white} />
        </div>
        <div className='link-container w-1/3 p-2 flex justify-between align-center'>
          <Link
            to='model'
            spy={true}
            smooth={true}
            duration={500}
            className='nav-scroll-link '
            activeClass='active'>
            3D Model
          </Link>
          <Link
            to='about'
            spy={true}
            smooth={true}
            duration={500}
            className='nav-scroll-link '
            activeClass='active'>
            Introduction
          </Link>
          <Link
            to='services'
            spy={true}
            smooth={true}
            duration={500}
            className='nav-scroll-link'
            activeClass='active'>
            About Us
          </Link>
          <Link
            to='4'
            spy={true}
            smooth={true}
            duration={500}
            className='nav-scroll-link'
            activeClass='active'>
            Contact
          </Link>
        </div>
      </nav>
      <style jsx global>{`
        .link-container a {
          color: ${theme.colors.white};
          height: 30px;
        }
        .active {
          border: 1px solid green;
        }
      `}</style>
    </>
  );
};

export default LandingNavigation;
