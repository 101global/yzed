import React, { useContext, useEffect, useState } from 'react';

import Link from 'next/link';
import { UserContext } from '../../../utilities/context/UserContext';
import YZEDLogo from '../../../public/yzed_logo_white.svg';
import theme from '../../../utilities/theme';
import LoadingSpinner from '../Loading/LoadingSpinner';
import LogoutButton from '../Buttons/LogoutButton';

const UserNavigation = ({ user }) => {
  return (
    <>
      <div className='navigation-container w-full fixed flex flex-row justify-between items-center top-0 left-0'>
        <Link href='/'>
          <a aria-label='YZED Home'>
            <img className='yzed-icon' src={YZEDLogo} alt='YZED Logo' />
          </a>
        </Link>
        <div className='links-container'>
          {user ? (
            <div className='user-nav grid grid-cols-userNav gap-4 items-center'>
              <img src={user.profilePicture} />
              <div className='user-info'>
                <p>{user.firstName}</p>
                <LogoutButton />
              </div>
            </div>
          ) : (
            <Link href='/login'>
              <a className='text-lg bg-black text-white font-light'>Login</a>
            </Link>
          )}
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
        p {
          color: ${theme.colors.white};
        }
        .links-container a {
          color: ${theme.colors.white};
        }
        .user-nav img {
          height: 40px;
          border-radius: 20px;
        }
      `}</style>
    </>
  );
};

export default UserNavigation;
