import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '../../../utilities/context/UserContext';
import theme from '../../../utilities/theme';
import LogoutIcon from '../Icons/Logout';

const LogoutButton = ({ styleClass }) => {
  const { requestLogout } = useContext(UserContext);

  return (
    <>
      <button
        aria-label='log out'
        className={`text-sm font-normal inline-block ${styleClass}`}
        onClick={() => {
          requestLogout();
        }}>
        <div className='flex justify-between items-center'>
          <LogoutIcon styleClass={`mr-2 ${styleClass}`} /> Log out
        </div>
      </button>
      <style jsx>{`
        button {
          border: none;
        }
        .menu-logout {
          color: ${theme.colors.aqua};
        }
      `}</style>
    </>
  );
};

export default LogoutButton;
