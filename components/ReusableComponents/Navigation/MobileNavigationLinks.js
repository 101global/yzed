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
        </>
      )}
    </div>
  );
};

export default MobileNavigationLinks;
