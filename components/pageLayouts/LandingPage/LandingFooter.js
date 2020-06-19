import React, { useContext, useEffect, useState } from 'react';

import YZEDsvg from '../../../public/yzed_logo_white.svg';
import theme from '../../../utilities/theme';

const LandingFooter = () => {
  return (
    <>
      <footer className='text-left'>
        <p className='p-2 lg:px-dsk text-md lg:text-base text-center lg:text-left'>
          <a className='color-link block lg:inline-block pb-6 pt-2 lg:pb-0 lg:pt-0' href='/'>
            <img src={YZEDsvg} className='yzed-logo' />
          </a>{' '}
          <span className='hidden lg:inline'>- </span>All rights reserved to{' '}
          <a href='https://www.101.global/?lang=en' target='_blank' rel='noopener noreferrer'>
            101Global
          </a>{' '}
          and{' '}
          <a href='https://www.hanwha.com/en.html' target='_blank' rel='noopener noreferrer'>
            Hanwha
          </a>
          .
        </p>
      </footer>
      <style jsx>{`
        footer p {
          font-weight: 200;
          background: ${theme.colors.black};
          color: ${theme.colors.white};
          width: 100%;
          letter-spacing: 0.02em;
          vertical-align: middle;
        }
        footer p a {
          font-weight: 600;
        }
        .color-link,
        .yzed-logo {
          height: 0.8rem;
          vertical-align: middle;
          margin: 0 auto;
        }
        .yzed-logo {
          margin-top: -1px;
        }
      `}</style>
    </>
  );
};

export default LandingFooter;
