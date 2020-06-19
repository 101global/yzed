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
        className='nav-scroll-link hidden lg:inline-block'
        activeClass='active'>
        3D Model
      </Link>
      <Link
        to='introduction'
        spy={true}
        smooth={true}
        duration={500}
        className='nav-scroll-link hidden lg:inline-block'
        activeClass='active'>
        Introduction
      </Link>
      <Link
        to='about'
        spy={true}
        smooth={true}
        duration={500}
        className='nav-scroll-link hidden lg:inline-block'
        activeClass='active'>
        About Us
      </Link>
      <Link
        to='contact'
        spy={true}
        smooth={true}
        duration={500}
        className='nav-scroll-link hidden lg:inline-block'
        activeClass='active'>
        Contact
      </Link>
    </div>
  );
};

export default DesktopNav;
