import React, { useContext, useEffect, useState } from 'react';

import LandingLinks from './LandingLinks';
import Link from 'next/link';
import LoadingSpinner from '../Loading/LoadingSpinner';
import Logo from '../Icons/Logo';
import LogoutButton from '../Buttons/LogoutButton';
import NavigationLinks from './NavigationLinks';
import { UserContext } from '../../../utilities/context/UserContext';
import YZEDLogo from '../../../public/yzed_logo_white.svg';
import theme from '../../../utilities/theme';

const NavigationBar = ({ user, isLandingMenu = false }) => {
  return (
    <>
      <nav className='navigation-container w-full fixed flex flex-row justify-between items-center top-0 left-0 px-4 lg:px-dsk bg-transparentWhite dark:bg-transparentBlack'>
        <Link href='/'>
          <a aria-label='YZED Home' className='logo-link'>
            <Logo styleClass='logo-svg' />
          </a>
        </Link>
        <div className='links-container w-full flex flex-row'>
          {isLandingMenu ? <LandingLinks /> : <NavigationLinks user={user} />}
        </div>
      </nav>
      <style jsx>{`
        .navigation-container {
          height: 86px;
        }
        img.yzed-icon {
          height: 26px;
        }
        p {
          color: ${theme.colors.white};
        }
        .links-container {
          width: calc(50% - 0.5rem);
        }
        .user-nav img {
          height: 40px;
          border-radius: 20px;
        }
      `}</style>
      <style jsx global>{`
        .light-mode .logo-link svg path {
          fill: ${theme.colors.black};
        }
      `}</style>
    </>
  );
};

export default NavigationBar;
