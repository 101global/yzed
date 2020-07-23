import React, { useEffect, useContext, useState } from 'react';

const DownloadIcon = ({ fill }) => {
  return (
    <svg width='23' height='19' viewBox='0 0 23 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M22.4 18.26H0V13.99H2V16.26H20.4V13.99H22.4V18.26Z'
        fill={fill ?? 'url(#paint1_linear)'}
      />
      <path
        d='M17.25 5.77L12.2 10.82V0H10.2V10.82L5.13998 5.77L3.72998 7.18L11.2 14.65L18.67 7.18L17.25 5.77Z'
        fill={fill ?? 'url(#paint1_linear)'}
      />
      <defs>
        <linearGradient
          id='paint0_linear'
          x1='11.2'
          y1='13.99'
          x2='11.2'
          y2='18.26'
          gradientUnits='userSpaceOnUse'>
          <stop stop-color='#8BC6D8' />
          <stop offset='1' stop-color='#A495D5' />
        </linearGradient>
        <linearGradient
          id='paint1_linear'
          x1='11.2'
          y1='0'
          x2='11.2'
          y2='14.65'
          gradientUnits='userSpaceOnUse'>
          <stop stop-color='#8BC6D8' />
          <stop offset='1' stop-color='#A495D5' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default DownloadIcon;
