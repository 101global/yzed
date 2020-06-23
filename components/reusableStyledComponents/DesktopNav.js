import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-scroll';

const DesktopNav = () => {
  return (
    <div className='desktop-nav hidden lg:flex justify-between w-full'>
      <Link
        to='model'
        spy={true}
        smooth={true}
        duration={500}
        className='nav-scroll-link hidden lg:inline-block font-light text-white tracking-wide active:font-semibold hover:semi-bold hover:cursor-pointer'
        activeClass='active'>
        3D Model
      </Link>
      <Link
        to='introduction'
        spy={true}
        smooth={true}
        duration={500}
        className='nav-scroll-link hidden lg:inline-block font-light text-white tracking-wide active:font-semibold hover:semi-bold hover:cursor-pointer'
        activeClass='active'>
        Introduction
      </Link>
      <Link
        to='about'
        spy={true}
        smooth={true}
        duration={500}
        className='nav-scroll-link hidden lg:inline-block font-light text-white tracking-wide active:font-semibold hover:semi-bold hover:cursor-pointer'
        activeClass='active'>
        About Us
      </Link>
      <Link
        to='contact'
        spy={true}
        smooth={true}
        duration={500}
        className='nav-scroll-link hidden lg:inline-block font-light text-white tracking-wide active:font-semibold hover:semi-bold hover:cursor-pointer'
        activeClass='active'>
        Contact
      </Link>
    </div>
  );
};

export default DesktopNav;
