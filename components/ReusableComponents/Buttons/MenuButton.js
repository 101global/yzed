import React, { useContext, useEffect, useState } from 'react';

import theme from '../../../utilities/theme';

const MenuButton = ({ openMenu, setOpenMenu, styleClass }) => {
  // TODO: COLOR GRADIENTS FOR MENU WITH LIGHT AND DARK MODE

  return (
    <>
      <button
        aria-label='menu open'
        className='p-2 pr-0'
        onClick={() => {
          setOpenMenu(!openMenu);
        }}>
        <svg
          width='21'
          height='17'
          className={`menu-button-icon ${styleClass}`}
          viewBox='0 0 21 17'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M20.505 0H6.96069V2.64224H20.505V0Z' fill='url(#paint0_linear)' />
          <path d='M13.5443 13.3601H0V16.0024H13.5443V13.3601Z' fill='url(#paint1_linear)' />
          <path d='M20.5051 6.66772H0V9.33217H20.5051V6.66772Z' fill='url(#paint2_linear)' />
          <defs>
            <linearGradient
              id='paint0_linear'
              x1='7'
              y1='8.64062e-07'
              x2='20.5'
              y2='2.5'
              gradientUnits='userSpaceOnUse'>
              <stop stopColor='#A495D5' />
              <stop offset='1' stopColor='#8BC6D8' />
            </linearGradient>
            <linearGradient
              id='paint1_linear'
              x1='-5.30782e-07'
              y1='13'
              x2='14'
              y2='16'
              gradientUnits='userSpaceOnUse'>
              <stop stopColor='#A495D5' />
              <stop offset='1' stopColor='#8BC6D8' />
            </linearGradient>
            <linearGradient
              id='paint2_linear'
              x1='-1.46412e-07'
              y1='7'
              x2='20.5'
              y2='9.5'
              gradientUnits='userSpaceOnUse'>
              <stop stopColor='#A495D5' />
              <stop offset='1' stopColor='#8BC6D8' />
            </linearGradient>
          </defs>
        </svg>
      </button>
      <style jsx global>{`
        .light-mode .menu-button-icon stop:first-child {
          stop-color: ${openMenu ? theme.colors.purple : theme.colors.black};
          transition: all 1s;
        }
        .light-mode .menu-button-icon stop:last-child {
          stop-color: ${openMenu ? theme.colors.aqua : theme.colors.black};
          transition: all 1s;
        }
        .dark-mode .menu-button-icon stop:first-child {
          stop-color: ${openMenu ? theme.colors.purple : theme.colors.white};
          transition: all 1s;
        }
        .dark-mode .menu-button-icon stop:last-child {
          stop-color: ${openMenu ? theme.colors.aqua : theme.colors.white};
          transition: all 1s;
        }
      `}</style>
    </>
  );
};

export default MenuButton;
