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
        className='mobile-nav-scroll-link lg:inline-block dark:text-white hover:gradient-blue-left'
        activeClass='active'>
        Introduction
      </Link>
      <Link
        to='about'
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        className='mobile-nav-scroll-link lg:inline-block dark:text-white hover:gradient-blue-left'
        activeClass='active'>
        About Us
      </Link>
      <Link
        to='contact'
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className='mobile-nav-scroll-link lg:inline-block dark:text-white hover:gradient-blue-left'
        activeClass='active'>
        Contact
      </Link>
      <style jsx global>{`
        .mobile-nav-scroll-link:not(:last-child) {
          border-right: 1px solid ${theme.colors.grey};
        }
      `}</style>
    </>
  );
};

export default MobileLandingLinks;
