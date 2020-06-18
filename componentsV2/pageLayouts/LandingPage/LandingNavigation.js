import React, { useContext, useEffect, useState } from 'react';

import DesktopNav from '../../reusableStyledComponents/DesktopNav';
import { HamburgerSqueeze } from 'react-animated-burgers';
import { Link } from 'react-scroll';
import MobileNav from '../../reusableStyledComponents/MobileNav';
import YZEDNavLogo from '../../../public/yzed_logo_white.svg';
import theme from '../../../utilities/theme';

const LandingNavigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <nav className='flex w-full justify-between py-4'>
        <div className='logo-container'>
          <svg
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            x='0px'
            y='0px'
            viewBox='0 0 355 60'
            fill='white'>
            <defs></defs>
            <g>
              <path
                class='st0'
                d='M87.1,0H58.8L39.5,28.9L32.6,0H4.4L17,44.9H4L0.4,60h21.3c22.6,0,36.1-19,36.1-19L87.1,0z M81,44.9l41.8-29.8H88.4L92.2,0h67.7l-3.2,15.1l-41.2,29.8h37.1l-4,15.1H78L81,44.9z M170.5,0h63.8l-3,14.6h-40.1l-1.7,8.1h37.2l-3,14.6h-37.2l-1.7,8.1h40.1l-3,14.6h-63.8L170.5,0z M243.7,0h46.2c20.4,0,29.3,7.9,24.9,30c-4.4,21.1-16.9,30-36.8,30h-46.7L243.7,0z M258.1,44.9h13.6 c10.8,0,16.3-5.4,18.3-14.9c1.9-9.5-1.3-14.9-12.1-14.9h-13.6L258.1,44.9z M330.7,47.9a12.1,12.1 0 1,0 24.2,0a12.1,12.1 0 1,0 -24.2,0'
              />
            </g>
          </svg>
        </div>
        <div className='link-container w-1/2 py-2 flex justify-between'>
          <div className='flex lg:hidden hamburger-container'>
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
        .hamburger-container {
          width: 100%;
          position: relative;
          top: 0;
          height: 25px;
        }
        .hamburger-container button {
          right: 0;
          position: absolute;
          bottom: -6px;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 50px;
        }
        .link-container a {
          color: ${theme.colors.white};
          font-family: ${theme.fonts.main};
          font-weight: 100;
        }
        .logo-container svg {
          height: 25px;
        }
        .logo-container {
          display: flex;
          justify-content: center;
          align-items: center;
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
