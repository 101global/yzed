import React, { useContext, useEffect, useState } from 'react';
import theme from '../../../utilities/theme';

const DownloadIcon = ({ styleClass, fill }) => {
  return (
    <svg
      width='23'
      height='19'
      viewBox='0 0 23 19'
      xmlns='http://www.w3.org/2000/svg'
      className={styleClass}>
      <path
        d='M22.4 18.26H0V13.99H2V16.26H20.4V13.99H22.4V18.26Z'
        fill='url("#download0_linear")'
      />
      <path
        d='M17.25 5.77L12.2 10.82V0H10.2V10.82L5.13998 5.77L3.72998 7.18L11.2 14.65L18.67 7.18L17.25 5.77Z'
        fill='url("#download1_linear")'
      />
      <defs>
        <linearGradient
          id='download0_linear'
          x1='11.2'
          y1='13.99'
          x2='11.2'
          y2='18.26'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor={theme.colors.aqua} />
          <stop offset='1' stopColor={theme.colors.purple} />
        </linearGradient>
        <linearGradient
          id='download1_linear'
          x1='11.2'
          y1='0'
          x2='11.2'
          y2='14.65'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor={theme.colors.aqua} />
          <stop offset='1' stopColor={theme.colors.purple} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DownloadIcon;
