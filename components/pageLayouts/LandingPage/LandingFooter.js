import React, { useContext, useEffect, useState } from 'react';

import YZEDsvg from '../../../public/yzed_logo_white.svg';
import theme from '../../../utilities/theme';

const LandingFooter = () => {
  return (
    <>
      <footer className='text-left'>
        <p className='p-2 lg:px-dsk lg:text-base text-center lg:text-left align-middle tracking-wide w-full bg-black text-white font-thin'>
          <a
            className='color-link block lg:inline-block pb-6 pt-2 lg:pb-0 lg:pt-0 align-middle my-0 mx-auto h-3'
            href='/'>
            <img src={YZEDsvg} className='yzed-logo align-middle my-0 mx-auto h-3 -mt-1' />
          </a>{' '}
          <span className='hidden lg:inline'>- </span>All rights reserved to{' '}
          <a
            href='https://www.101.global/?lang=en'
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold'>
            101Global
          </a>{' '}
          and{' '}
          <a
            href='https://www.hanwha.com/en.html'
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold'>
            Hanwha
          </a>
          .
        </p>
      </footer>
    </>
  );
};

export default LandingFooter;
