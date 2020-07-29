import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-scroll';
import ToggleDarkModeButton from '../Buttons/ToggleDarkMode';

const LandingLinks = () => {
  return (
    <div className='w-full flex flex-row justify-between items-center'>
      <ToggleDarkModeButton />
      <Link
        to='introduction'
        spy={true}
        smooth={true}
        duration={500}
        offset={-200}
        className='nav-scroll-link lg:inline-block dark:text-white hover:gradient-blue-left'
        activeClass='active'>
        Introduction
      </Link>
      <Link
        to='about'
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        className='nav-scroll-link lg:inline-block dark:text-white hover:gradient-blue-left'
        activeClass='active'>
        About Us
      </Link>
      <Link
        to='contact'
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className='nav-scroll-link lg:inline-block dark:text-white hover:gradient-blue-left'
        activeClass='active'>
        Contact
      </Link>
    </div>
  );
};

export default LandingLinks;
