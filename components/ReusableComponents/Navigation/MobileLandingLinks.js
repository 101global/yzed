import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-scroll';
import ToggleDarkModeButton from '../Buttons/ToggleDarkMode';
import theme from '../../../utilities/theme';

const MobileLandingLinks = () => {
  return (
    <>
      <Link
        to='introduction'
        spy={true}
        smooth={true}
        duration={500}
        offset={-800}
        className='mobile-nav-scroll-link dark:text-white hover:gradient-blue-left'
        activeClass='active'>
        Introduction
      </Link>
      <Link
        to='about'
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        className='mobile-nav-scroll-link dark:text-white hover:gradient-blue-left'
        activeClass='active'>
        About Us
      </Link>
      <Link
        to='contact'
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className='mobile-nav-scroll-link dark:text-white hover:gradient-blue-left'
        activeClass='active'>
        Contact
      </Link>
      <style jsx global>{`
        .mobile-nav-scroll-link {
          position: relative;
        }
        .mobile-nav-scroll-link:not(:last-child):after {
          content: '';
          border-right: ${theme.colors.grey} 1px solid;
          position: absolute;
          top: 12px;
          bottom: 12px;
          right: 0px;
        }
      `}</style>
    </>
  );
};

export default MobileLandingLinks;
