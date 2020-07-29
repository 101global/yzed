import React, { useEffect, useContext, useState } from 'react';
import Link from 'next/link';
import YZED from '../Icons/YZED';
import theme from '../../../utilities/theme';

const Footer = () => {
  return (
    <>
      <footer className='footer mt-8 px:4 lg:px-10per flex flex-row items-center bg-black dark:bg-white h-desktopFooter'>
        <Link href='/'>
          <a>
            <YZED styleClass='yzed-footer-logo fill-white dark:fill-black' />
          </a>
        </Link>
        <p className='text-base text-light text-white dark:text-black'>
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
        .footer {
          height: 60px;
        }
      `}</style>
      <style jsx global>{`
        .yzed-footer-logo {
          height: 16px;
          margin-top: -2px;
        }
      `}</style>
    </>
  );
};

export default Footer;
