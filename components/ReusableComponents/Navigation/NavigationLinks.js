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
              <Link href={`/profile/${user.uid}`}>
                {user.profilePicture.length > 1 ? (
                  <a>
                    <img
                      src={user.profilePicture}
                      alt={`${user.firstName} ${user.lastName} profile picture`}
                      className='lg:mr-0 lg:ml-4'
                    />
                  </a>
                ) : (
                  <a className='user-icon lg:mr-0 lg:ml-4'>{user.firstName.slice(0, 1)}</a>
                )}
              </Link>
            </div>
          </div>
        ) : (
          <Link href='/login'>
            <a className='text-lg font-normal ml-4'>Login</a>
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

          background: ${theme.colors.purple};
        }
        .user-info img,
        .user-icon {
          width: 26px;
          height: 26px;
          border-radius: 50%;
        }
      `}</style>
    </>
  );
};

export default NavigationLinks;
