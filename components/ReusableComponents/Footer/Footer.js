import React, { useEffect, useContext, useState } from 'react';
import Link from 'next/link';
import YZED from '../Icons/YZED';
import theme from '../../../utilities/theme';

const Footer = () => {
  return (
    <>
      <footer className='footer px:4 lg:px-10per flex flex-row items-center'>
        <Link href='/'>
          <a>
            <YZED styleClass='yzed-footer-logo' />
          </a>
        </Link>
        <p className='text-base text-light'>
          - All rights reserved for{' '}
          <Link href='https://www.101.global/?lang=en'>
            <a>101Global</a>
          </Link>{' '}
          and{' '}
          <Link href='https://www.hanwha.com/en.html'>
            <a>Hanwha</a>
          </Link>
        </p>
      </footer>
      <style jsx>{`
        footer {
          height: 60px;
        }
      `}</style>
      <style jsx global>{`
        .yzed-footer-logo {
          height: 16px;
          margin-top: -2px;
        }
        .light-mode svg.yzed-footer-logo path {
          fill: ${theme.colors.white};
        }
        .dark-mode svg.yzed-footer-logo path {
          fill: ${theme.colors.black};
        }
        .light-mode .footer {
          background: ${theme.colors.black};
          color: ${theme.colors.white};
        }
        .dark-mode .footer {
          background: ${theme.colors.white};
          color: ${theme.colors.black};
        }
      `}</style>
    </>
  );
};

export default Footer;
