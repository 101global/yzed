import React, { useEffect, useContext, useState } from 'react';
import theme from '../../../utilities/theme';

const LogoutIcon = ({ styleClass }) => {
  return (
    <>
      <svg
        width='19'
        height='10'
        viewBox='0 0 19 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={`logout-key ${styleClass}`}>
        <path d='M9.70833 3.33333C9.025 1.39167 7.175 0 5 0C2.24167 0 0 2.24167 0 5C0 7.75833 2.24167 10 5 10C7.175 10 9.025 8.60833 9.70833 6.66667H13.3333V10H16.6667V6.66667H18.3333V3.33333H9.70833ZM5 6.66667C4.08333 6.66667 3.33333 5.91667 3.33333 5C3.33333 4.08333 4.08333 3.33333 5 3.33333C5.91667 3.33333 6.66667 4.08333 6.66667 5C6.66667 5.91667 5.91667 6.66667 5 6.66667Z' />
      </svg>
      <style jsx global>{`
        .dark-mode .logout-key path {
          fill: ${theme.colors.white};
        }
        .light-mode .logout-key path {
          fill: ${theme.colors.black};
        }
        .menu .logout-key path {
          fill: ${theme.colors.aqua};
        }
      `}</style>
    </>
  );
};

export default LogoutIcon;
