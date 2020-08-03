import React, { useContext, useEffect, useState } from 'react';

import MobileLandingLinks from './MobileLandingLinks';
import MobileNavigationLinks from './MobileNavigationLinks';
import theme from '../../../utilities/theme';

const MobileNav = ({ openMenu, isLandingMenu }) => {
  return (
    <>
      {isLandingMenu ? (
        <div className='mobile-nav fixed z-thous w-full b-0 bg-transparentWhite dark:bg-transparentBlack'>
          <div className='w-full links grid grid-cols-3 items-center justify-around text-center'>
            <MobileLandingLinks />
          </div>
        </div>
      ) : (
        <div className='mobile-nav fixed z-thous w-full b-0 bg-transparentWhite dark:bg-transparentBlack'>
          <MobileNavigationLinks />
        </div>
      )}
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
