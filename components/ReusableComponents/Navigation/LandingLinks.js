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
        className='nav-scroll-link hidden lg:inline-block font-light text-white tracking-wider'
        activeClass='active'>
        Introduction
      </Link>
      <Link
        to='about'
        spy={true}
        smooth={true}
        duration={500}
        className='nav-scroll-link hidden lg:inline-block font-light text-white tracking-wider'
        activeClass='active'>
        About Us
      </Link>
      <Link
        to='contact'
        spy={true}
        smooth={true}
        duration={500}
        className='nav-scroll-link hidden lg:inline-block font-light text-white tracking-wider'
        activeClass='active'>
        Contact
      </Link>
    </div>
  );
};

export default LandingLinks;
