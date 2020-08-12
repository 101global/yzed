import React, { useContext, useEffect, useState } from 'react';

import MobileLandingLinks from './MobileLandingLinks';
import MobileNavigationLinks from './MobileNavigationLinks';
import theme from '../../../utilities/theme';

const MobileNav = ({ openMenu, isLandingMenu }) => {
  return (
    <>
      {isLandingMenu ? (
        <nav className='mobile-landing-nav fixed z-thous w-full b-0 bg-transparentWhite dark:bg-transparentBlack'>
          <div className='w-full links grid grid-cols-3 items-center justify-around text-center lg:hidden'>
            <MobileLandingLinks />
          </div>
        </nav>
      ) : (
        <nav className='mobile-navigation-nav fixed z-thous w-full b-0 bg-transparentWhite dark:bg-transparentBlack lg:hidden'>
          <MobileNavigationLinks />
        </nav>
      )}
      <style jsx>{`
        .mobile-landing-nav,
        .mobile-navigation-nav {
          transition: all 0.3s ease-in-out;
          top: 59px;
          max-height: ${openMenu ? '400px' : '0px'};
          overflow: ${openMenu ? 'auto' : 'hidden'};
        }
      `}</style>
    </>
  );
};

export default MobileNav;
