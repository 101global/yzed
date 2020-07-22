import React, { useContext, useEffect, useState } from 'react';

const PlayIcon = ({ styleClass, fill, playFill }) => {
  return (
    <svg
      width='40'
      height='40'
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={styleClass}>
      <path
        d='M39.3347 20C39.3347 30.6783 30.6783 39.3347 20 39.3347C9.32173 39.3347 0.665283 30.6783 0.665283 20C0.665283 9.32173 9.32173 0.665283 20 0.665283C30.6783 0.665283 39.3347 9.32173 39.3347 20Z'
        fill={fill ?? 'white'}
        stroke-miterlimit='10'
        className='opposite-fill'
      />
      <path
        d='M16.033 11.719L27.9338 20.314L16.033 28.9091V11.719Z'
        fill={playFill ?? '#272727'}
      />
    </svg>
  );
};

export default PlayIcon;
