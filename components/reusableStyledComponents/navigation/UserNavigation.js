import React, { useContext, useEffect, useState } from 'react';

import Link from 'next/link';
import YZEDLogo from '../../../public/yzed_logo_white.svg';
import theme from '../../../utilities/theme';

const UserNavigation = () => {
  return (
    <>
      <div className='navigation-container w-full fixed flex flex-row justify-between items-center top-0 left-0'>
        <Link href='/'>
          <a aria-label='YZED Home'>
            <img className='yzed-icon' src={YZEDLogo} alt='YZED Logo' />
          </a>
        </Link>
        <div className='links-container'>
          <Link href='/signin'>
            <a>Sign In</a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .navigation-container {
          height: 75px;
          padding: 0px 150px;
          border-bottom: 1px solid ${theme.colors.white};
        }
        img.yzed-icon {
          height: 26px;
        }
        .links-container a {
          color: ${theme.colors.white};
        }
      `}</style>
    </>
  );
};

export default UserNavigation;