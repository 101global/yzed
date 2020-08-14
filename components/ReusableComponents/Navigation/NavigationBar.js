import React, { useContext, useEffect, useState } from 'react';

import LandingLinks from './LandingLinks';
import Link from 'next/link';
import LoadingSpinner from '../Loading/LoadingSpinner';
import Logo from '../Icons/Logo';
import LogoutButton from '../Buttons/LogoutButton';
import MobileNav from './MobileNav';
import NavigationButtonLayout from './NavButtonLayout';
import NavigationLinks from './NavigationLinks';
import { UserContext } from '../../../utilities/context/UserContext';
import theme from '../../../utilities/theme';
import { useRouter } from 'next/router';

const NavigationBar = ({ user }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isLandingMenu, setIsLandingMenu] = useState(false);

  const router = useRouter();

  const landingRoutes = ['/', '/kaimin', '/marineserre', '/misbhv'];

  useEffect(() => {
    if (landingRoutes.some((route) => route === router.route)) {
      setIsLandingMenu(true);
    }
  }, []);

  return (
    <>
      <header className='relative'>
        <div className='w-full fixed flex flex-row justify-between items-center top-0 left-0 px-4 lg:px-dsk bg-white dark:bg-black h-mobileNav lg:h-desktopNav z-tenThous'>
          <Link href='/'>
            <a aria-label='YZED Home' className='logo-link'>
              <Logo styleClass='logo-link fill-black dark:fill-white h-mobileNavLogo w-mobileNavLogo lg:h-desktopNavLogo w-full' />
            </a>
          </Link>
          <nav className='links-container w-full flex flex-row'>
            <NavigationButtonLayout
              user={user}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
              isLandingMenu={isLandingMenu}></NavigationButtonLayout>
          </nav>
        </div>
        <MobileNav openMenu={openMenu} isLandingMenu={isLandingMenu} user={user} />
      </header>
      <style jsx>{`
        .links-container {
          width: calc(50% - 0.5rem);
        }
      `}</style>
    </>
  );
};

export default NavigationBar;
