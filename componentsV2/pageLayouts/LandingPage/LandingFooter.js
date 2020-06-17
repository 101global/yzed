import React, { useContext, useEffect, useState } from 'react';

import theme from '../../../utilities/theme';

const LandingFooter = () => {
  return (
    <>
      <footer className='text-left'>
        <p className='p-2 lg:px-dsk'>
          <strong>YZED</strong> - All rights reserved to{' '}
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
          font-weight: 100;
          font-size: 1.2rem;
          background: ${theme.colors.black};
          color: ${theme.colors.white};

          width: 100%;
          letter-spacing: 0.02em;
        }

        footer p a {
          margin: 0 5px;
          font-weight: 600;
        }
        footer p strong {
          display: inline-block;
        }
        footer p strong:after {
          content: '';
          background-image: linear-gradient(to right, #a891d9, #73cfdb);
          width: 110%;
          margin-left: -5%;
          margin-top: -12px;
          height: 12px;
          display: block;
        }
      `}</style>
    </>
  );
};

export default LandingFooter;
