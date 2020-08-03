import React, { useContext, useEffect, useState } from 'react';

import Link from 'next/link';
import OppositeLogo from '../Icons/OppositeLogo';
import theme from '../../../utilities/theme';

const Footer = () => {
  return (
    <>
      <footer className='footer mt-8 px:4 lg:px-10per flex flex-row items-center bg-black dark:bg-white h-desktopFooter'>
        <Link href='/'>
          <a aria-label='home'>
            <OppositeLogo styleClass='fill-white dark:fill-black h-footerLogo -mt-1' />
          </a>
        </Link>
        <p className='text-base text-light text-white dark:text-black'>
          - All rights reserved for{' '}
          <a
            href='https://www.101.global/?lang=en'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:gradient-blue-top'>
            101Global
          </a>{' '}
          and{' '}
          <a
            href='https://www.hanwha.com/en.html'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:gradient-blue-top'>
            Hanwha
          </a>
        </p>
      </footer>
    </>
  );
};

export default Footer;
