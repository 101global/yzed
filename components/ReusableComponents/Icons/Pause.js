import React, { useContext, useEffect, useState } from 'react';

const PauseIcon = ({ styleClass, fill }) => {
  return (
    <svg
      width='40'
      height='40'
      viewBox='-2 -2 43 43'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      fill={fill ?? 'white'}
      className={styleClass}>
      <path
        d='M39.3349 20.0001C39.3349 30.6783 30.6785 39.3348 20.0002 39.3348C9.32197 39.3348 0.665527 30.6783 0.665527 20.0001C0.665527 9.32179 9.32197 0.665344 20.0002 0.665344C30.6785 0.665344 39.3349 9.32179 39.3349 20.0001Z'
        stroke={fill ?? 'white'}
        stroke-miterlimit='10'
        stroke-width='1.5'
        className='opposite-stroke opposite-fill'
      />
      <path d='M18.195 11.5704H14.5586V28.4299H18.195V11.5704Z' />
      <path d='M25.4411 11.5704H21.8047V28.4299H25.4411V11.5704Z' />
    </svg>
  );
};

export default PauseIcon;
