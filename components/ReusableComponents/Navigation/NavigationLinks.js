import React, { useContext, useEffect, useState } from 'react';

import Link from 'next/link';
import LogoutButton from '../Buttons/LogoutButton';
import ToggleDarkModeButton from '../Buttons/ToggleDarkMode';
import theme from '../../../utilities/theme';

const NavigationLinks = ({ user, isLandingMenu }) => {
  return (
    <>
      {user ? (
        <Link href={`/profile/${user.uid}`}>
          {user.profilePicture.length > 1 ? (
            <a
              aria-label={`${user.firstName} ${user.lastName} profile`}
              className={!isLandingMenu ? 'lg:ml-4' : null}>
              <img
                src={user.profilePicture}
                alt={`${user.firstName} ${user.lastName} profile picture`}
              />
            </a>
          ) : (
            <a className={`user-icon ${isLandingMenu ? 'lg:ml-4' : 'lg:ml-4'}`}>
              {user.firstName.slice(0, 1)}
            </a>
          )}
        </Link>
      ) : (
        <Link href='/login'>
          <a className={`hidden lg:block text-lg font-normal ${!isLandingMenu ? 'lg:ml-4' : ''}`}>
            Login
          </a>
        </Link>
      )}
      <style jsx>{`
        .user-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${theme.colors.white};
          font-size: 18px;
          background: ${theme.colors.purple};
        }
        img,
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
