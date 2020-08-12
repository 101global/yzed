import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../../utilities/context/UserContext';
import theme from '../../../utilities/theme';
import LogoutIcon from '../Icons/Logout';

const LogoutButton = () => {
  const { requestLogout } = useContext(UserContext);

  return (
    <>
      <button
        aria-label='log out'
        className='text-sm font-normal inline-block'
        onClick={() => {
          if (window.confirm('Are you sure you want to logout?')) {
            requestLogout();
          }
        }}>
        <div className='flex justify-between items-center'>
          <LogoutIcon styleClass='mr-2' /> Log out
        </div>
      </button>
      <style jsx>{`
        button {
          border: none;
        }
      `}</style>
    </>
  );
};

export default LogoutButton;
