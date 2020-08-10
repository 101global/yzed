import React, { useContext, useEffect, useState } from 'react';

import Link from 'next/link';
import OppositeLogo from '../Icons/OppositeLogo';
import theme from '../../../utilities/theme';

const Footer = () => {
  return (
    <>
      <footer className='footer lg:px-10per flex flex-row items-center bg-black dark:bg-white h-mobileFooter lg:h-desktopFooter justify-center lg:justify-start'>
        <Link href='/'>
          <a aria-label='home' className='yzed-home-footer-link inline-block'>
            <OppositeLogo styleClass='fill-white dark:fill-black h-mobileFooterLogo lg:h-desktopFooterLogo -mt-1 mr-2' />
          </a>
        </Link>
        <p className='text-xs lg:text-base text-light text-white dark:text-black inline-block'>
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
      <style jsx>{`
        .yzed-home-footer-link {
          text-align: left;
        }
      `}</style>
    </>
  );
};

export default Footer;
