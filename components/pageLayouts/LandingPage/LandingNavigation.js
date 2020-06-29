import React, { useContext, useEffect, useState } from 'react';

import DesktopNav from '../../reusableStyledComponents/DesktopNavLinks';
import { HamburgerSqueeze } from 'react-animated-burgers';
import { Link } from 'react-scroll';
import MobileNav from '../../reusableStyledComponents/MobileNavLinks';
import YZEDNavLogo from '../../../public/yzed_logo_white.svg';
import theme from '../../../utilities/theme';

const LandingNavigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <nav className='flex w-full justify-between py-4'>
        <div className='logo-container flex justify-center items-center'>
          <a href='/' aria-label='home'>
            <img src={YZEDNavLogo} alt='YZED logo' className='h-6' />
          </a>
        </div>
        <div className='link-container w-1/2 py-2 flex justify-between'>
          <div className='flex lg:hidden hamburger-container relative w-full top-0 h-6'>
            <HamburgerSqueeze
              isActive={openMenu}
              toggleButton={() => setOpenMenu(!openMenu)}
              barColor='white'
              buttonWidth={30}
            />
          </div>
          <MobileNav openMenu={openMenu} setOpenMenu={setOpenMenu} />
          <DesktopNav />
        </div>
      </nav>
      <style jsx global>{`
        .hamburger-container button {
          right: 0;
          position: absolute;
          bottom: -6px;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 50px;
        }
        a.nav-scroll-link.active,
        a.nav-scroll-link:hover {
          font-weight: 600;
        }
        a.nav-scroll-link:hover {
          cursor: pointer;
        }
        a.nav-scroll-link.active:after,
        a.nav-scroll-link:hover:after {
          content: '';
          background-image: linear-gradient(to right, #a891d9, #73cfdb, #a891d9, #73cfdb);
          background-size: 260% 200%;
          width: 130%;
          margin-left: -15%;
          margin-top: -10px;
          height: 10px;
          display: block;
        }
        a.nav-scroll-link:hover:after {
          animation: gradient 3s ease infinite;
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  );
};

export default LandingNavigation;
