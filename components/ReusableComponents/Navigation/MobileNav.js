import React, { useContext, useEffect, useState } from 'react';

import MobileLandingLinks from './MobileLandingLinks';
import MobileNavigationLinks from './MobileNavigationLinks';
import theme from '../../../utilities/theme';

const MobileNav = ({ openMenu, isLandingMenu }) => {
  return (
    <>
      {isLandingMenu ? (
        <div className='mobile-landing-nav fixed z-thous w-full b-0 bg-transparentWhite dark:bg-transparentBlack'>
          <div className='w-full links grid grid-cols-3 items-center justify-around text-center'>
            <MobileLandingLinks />
          </div>
        </div>
      ) : (
        <div className='mobile-navigation-nav fixed z-thous w-full b-0 bg-transparentWhite dark:bg-transparentBlack'>
          <MobileNavigationLinks />
        </div>
      )}
      <style jsx>{`
        .mobile-landing-nav {
          overflow-x: scroll;
          transition: all 0.5s ease-in-out;
          top: 59px;
          height: ${openMenu ? '40px' : '0px'};
          overflow: ${openMenu ? 'auto' : 'hidden'};
        }
        .mobile-navigation-nav {
          overflow-x: scroll;
          transition: all 0.5s ease-in-out;
          top: 59px;
          height: ${openMenu ? '80px' : '0px'};
          overflow: ${openMenu ? 'auto' : 'hidden'};
        }
      `}</style>
    </>
  );
};

export default MobileNav;
