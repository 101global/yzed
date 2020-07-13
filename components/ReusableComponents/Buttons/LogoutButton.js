import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../../utilities/context/UserContext';
import theme from '../../../utilities/theme';

const LogoutButton = () => {
  const { requestLogout } = useContext(UserContext);

  return (
    <>
      <button
        className='text-lg bg-black text-white font-light'
        onClick={() => {
          if (window.confirm('Are you sure you want to logout?')) {
            requestLogout();
          }
        }}>
        Logout
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
