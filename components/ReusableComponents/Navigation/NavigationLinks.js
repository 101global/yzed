import React, { useContext, useEffect, useState } from 'react';

import Link from 'next/link';
import LogoutButton from '../Buttons/LogoutButton';
import ToggleDarkModeButton from '../Buttons/ToggleDarkMode';
import theme from '../../../utilities/theme';

const NavigationLinks = ({ user }) => {
  return (
    <>
      <div>
        {user ? (
          <div className=''>
            <div className='user-info'>
              {user.profilePicture.length > 1 ? (
                <img src={user.profilePicture} />
              ) : (
                <Link href={`/profile/${user.uid}`}>
                  <a className='user-icon mx-4 lg:mr-0 lg:ml-4'>{user.firstName.slice(0, 1)}</a>
                </Link>
              )}
            </div>
          </div>
        ) : (
          <Link href='/login'>
            <a className='text-lg font-light'>Login</a>
          </Link>
        )}
      </div>
      <style jsx>{`
        .user-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${theme.colors.white};
          font-size: 18px;
          width: 25px;
          height: 25px;
          background: ${theme.colors.purple};
          border-radius: 50%;
        }
      `}</style>
    </>
  );
};

export default NavigationLinks;
