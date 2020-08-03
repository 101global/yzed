import React, { useContext, useEffect, useState } from 'react';

import Link from 'next/link';
import LogoutButton from '../Buttons/LogoutButton';
import ToggleDarkModeButton from '../Buttons/ToggleDarkMode';

const NavigationLinks = ({ user }) => {
  return (
    <div className='hidden lg:block'>
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
          <a className='text-lg font-light'>Login</a>
        </Link>
      )}
    </div>
  );
};

export default NavigationLinks;
