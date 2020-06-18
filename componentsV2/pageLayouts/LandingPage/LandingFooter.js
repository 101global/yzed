import React, { useContext, useEffect, useState } from 'react';

import theme from '../../../utilities/theme';

const LandingFooter = () => {
  return (
    <>
      <footer className='text-left'>
        <p className='p-2 lg:px-dsk text-md lg:text-md'>
          <a className='color-link' href='/'>
            YZED
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
        .color-link:after {
          content: '';
          background-image: linear-gradient(to right, #a891d9, #73cfdb, #a891d9, #73cfdb);
          background-size: 260% 200%;
          width: 110%;
          margin-left: -5%;
          margin-top: -12px;
          height: 12px;
          display: block;
        }
        .color-link:hover:after {
          animation: gradient 3s ease infinite;
          animation-direction: alternate;
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  );
};

export default LandingFooter;
