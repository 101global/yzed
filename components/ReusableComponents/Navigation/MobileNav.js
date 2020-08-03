import React, { useContext, useEffect, useState } from 'react';

import MobileLandingLinks from './MobileLandingLinks';
import theme from '../../../utilities/theme';

const MobileNav = ({ openMenu }) => {
  return (
    <>
      <div className='mobile-nav fixed z-thous w-full b-0 bg-transparentWhite dark:bg-transparentBlack border-lightGrey'>
        <div className='w-full links grid grid-cols-3 items-center justify-around text-center'>
          <MobileLandingLinks />
        </div>
      </div>
      <style jsx>{`
        .mobile-nav {
          overflow-x: scroll;
          transition: all 0.5s ease-in-out;
          top: 86px;
          height: ${openMenu ? '40px' : '0px'};
          overflow: ${openMenu ? 'auto' : 'hidden'};
        }
      `}</style>
    </>
  );
};

export default MobileNav;
