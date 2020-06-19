import React, { useContext, useEffect, useState } from 'react';

import YZEDsvg from '../../../public/yzed_logo_white.svg';
import theme from '../../../utilities/theme';

const LandingFooter = () => {
  return (
    <>
      <footer className='text-left'>
        <p className='p-2 lg:px-dsk text-md lg:text-base'>
          <a className='color-link' href='/'>
            <img src={YZEDsvg} className='color-link' />
          </a>{' '}
          - All rights reserved to{' '}
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
        }
        footer p a {
          font-weight: 600;
          display: inline-block;
        }
        .color-link {
          height: 1rem;
          vertical-align: middle;
        }
      `}</style>
    </>
  );
};

export default LandingFooter;
