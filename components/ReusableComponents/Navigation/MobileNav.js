import React, { useEffect, useContext, useState } from 'react';
import theme from '../../../utilities/theme';
const MobileNav = ({ openMenu }) => {
  return (
    <>
      <div className='mobile-nav fixed z-thous w-full b-0 bg-transparentWhite dark:bg-transparentBlack border-lightGrey'>
        <div className='w-full links grid grid-cols-3 items-center justify-around text-center'>
          <a>Link</a>
          <a>Link</a>
          <a>Link</a>
        </div>
      </div>
      <style jsx>{`
        .mobile-nav {
          transition: all 0.5s ease-in-out;
          top: 86px;
          height: ${openMenu ? '40px' : '0px'};
          overflow: ${openMenu ? 'auto' : 'hidden'};
        }
        .mobile-nav a:not(:last-child) {
          border-right: 1px solid ${theme.colors.lightGrey};
        }
      `}</style>
    </>
  );
};

export default MobileNav;
