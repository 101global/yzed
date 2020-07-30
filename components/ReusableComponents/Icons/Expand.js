import React, { useContext, useEffect, useState } from 'react';

const ExpandIcon = ({ styleClass, fill }) => {
  return (
    <svg
      width='40'
      height='40'
      viewBox='0 0 40 40'
      xmlns='http://www.w3.org/2000/svg'
      className={styleClass}>
      <path
        d='M39.3347 20C39.3347 30.6783 30.6783 39.3347 20 39.3347C9.32173 39.3347 0.665283 30.6783 0.665283 20C0.665283 9.32173 9.32173 0.665283 20 0.665283C30.6783 0.665283 39.3347 9.32173 39.3347 20Z'
        strokeMiterlimit='10'
        className='opposite-fill stroke-fill'
      />
      <path d='M20.8265 10.9091H19.1736V29.0909H20.8265V10.9091Z' />
      <path d='M29.091 19.1735H10.9092V20.8264H29.091V19.1735Z' />
    </svg>
  );
};

export default ExpandIcon;
