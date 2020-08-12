import React, { useContext, useEffect, useState } from 'react';

import Link from 'next/link';
import LogoutButton from '../Buttons/LogoutButton';
import ToggleDarkModeButton from '../Buttons/ToggleDarkMode';

const MobileNavigationLinks = ({ user }) => {
  return (
    <div className='flex flex-col justify-around h-full py-4'>
      {user ? (
        <div className='user-nav grid grid-cols-userNav gap-4 items-center'>
          <img src={user.profilePicture} />
        </div>
      ) : (
        <>
          <Link href='/login'>
            <a className='text-lg py-2 font-light block text-center'>Login</a>
          </Link>
          <Link href='/login'>
            <a className='text-lg py-2 font-light block text-center'>Login</a>
          </Link>
        </>
      )}
    </div>
  );
};

export default MobileNavigationLinks;
