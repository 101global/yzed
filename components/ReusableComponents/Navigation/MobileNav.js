import React, { useContext, useEffect, useState } from 'react';

import Link from 'next/link';
import LogoutButton from '../Buttons/LogoutButton';
import MobileLandingLinks from './MobileLandingLinks';
import MobileNavigationLinks from './MobileNavigationLinks';
import theme from '../../../utilities/theme';

const MobileNav = ({ openMenu, isLandingMenu, user }) => {
  return (
    <>
      <nav className='mobile-landing-nav fixed z-thous w-full b-0 bg-white dark:bg-transparentBlack lg:hidden'>
        <div className='w-full links grid grid-cols-3 items-center justify-around text-center'>
          {isLandingMenu ? <MobileLandingLinks /> : <MobileNavigationLinks />}
        </div>
        <div className='text-right px-4 pb-4 pr-8 pt-6'>
          {user ? (
            <LogoutButton styleClass='menu-logout' />
          ) : (
            <Link href='/login'>
              <a className={`text-base font-normal ${!isLandingMenu ? 'lg:ml-4' : ''}`}>Login</a>
            </Link>
          )}
        </div>
      </nav>
   
      <style jsx>{`
        .mobile-landing-nav,
        .mobile-navigation-nav {
          transition: all 0.5s ease-in-out;
          top: ${openMenu ? '59px' : '-100px'};
          max-height: ${openMenu ? '400px' : '0px'};
          overflow: ${openMenu ? 'auto' : 'hidden'};
          z-index: 10000;
          border-radius: 0 0 20px 20px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  );
};

export default MobileNav;
