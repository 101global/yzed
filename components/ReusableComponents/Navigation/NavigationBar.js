import React, { useContext, useEffect, useState } from 'react';

import LandingLinks from './LandingLinks';
import Link from 'next/link';
import LoadingSpinner from '../Loading/LoadingSpinner';
import Logo from '../Icons/Logo';
import LogoutButton from '../Buttons/LogoutButton';
import MobileNav from './MobileNav';
import NavigationButtonLayout from './NavigationButtonLayout';
import NavigationLinks from './NavigationLinks';
import { UserContext } from '../../../utilities/context/UserContext';
import YZEDLogo from '../../../public/yzed_logo_white.svg';
import theme from '../../../utilities/theme';

const NavigationBar = ({ user, isLandingMenu = true }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <nav className='relative'>
        <div className='w-full fixed flex flex-row justify-between items-center top-0 left-0 px-4 lg:px-dsk bg-transparentWhite dark:bg-transparentBlack h-mobileNav lg:h-desktopNav z-tenThous'>
          <Link href='/'>
            <a aria-label='YZED Home' className='logo-link'>
              <Logo styleClass='logo-link fill-black dark:fill-white h-mobileNavLogo w-mobileNavLogo lg:h-desktopNavLogo w-full' />
            </a>
          </Link>
          <div className='links-container w-full flex flex-row'>
            <NavigationButtonLayout openMenu={openMenu} setOpenMenu={setOpenMenu}>
              {isLandingMenu ? <LandingLinks /> : <NavigationLinks user={user} />}
            </NavigationButtonLayout>
          </div>
        </div>
        <MobileNav openMenu={openMenu} isLandingMenu={isLandingMenu} />
      </nav>
      <style jsx>{`
        .links-container {
          width: calc(50% - 0.5rem);
        }
      `}</style>
    </>
  );
};

export default NavigationBar;
