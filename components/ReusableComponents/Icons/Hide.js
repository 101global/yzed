import React, { useContext, useEffect, useState } from 'react';

const HideIcon = ({ styleClass }) => {
  return (
    <svg
    aria-hidden="true"
      role='img'
      width='40'
      height='40'
      viewBox='-2 -2 43 43'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={styleClass}>
      <title>hide 3d</title>
      <path
        d='M20 39.8347C30.9544 39.8347 39.8347 30.9544 39.8347 20C39.8347 9.04559 30.9544 0.165283 20 0.165283C9.04559 0.165283 0.165283 9.04559 0.165283 20C0.165283 30.9544 9.04559 39.8347 20 39.8347Z'
        fill='transparent'
        strokeMiterlimit='10'
        strokeWidth='1.5'
        className='opposite-fill opposite-stroke'
      />
      <path d='M29.091 19.1736H10.9092V20.8265H29.091V19.1736Z' />
    </svg>
  );
};

export default HideIcon;
