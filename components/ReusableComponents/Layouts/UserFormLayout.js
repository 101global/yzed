import React, { useContext, useEffect, useState } from 'react';

import Footer from '../Footer/Footer';
import Logo from '../Icons/Logo';
import MainBodyLayout from './MainBodyLayout';
import Link from 'next/link';

const UserFormLayout = ({ children, title }) => {
  return (
    <>
      <MainBodyLayout title={title}>
        <div className='min-h-screen flex flex-col justify-between'>
          <Link href='/'>
            <a aria-label='home'>
              <Logo styleClass='h-desktopNavLogo mx-auto my-16' />
            </a>
          </Link>
          <main className='min-h-formAreaMobile lg:min-h-formArea w-full mx-auto'>{children}</main>
          <Footer />
        </div>
      </MainBodyLayout>
      <style jsx>{`
        .min-h-formArea {
          max-width: 450px;
        }
      `}</style>
    </>
  );
};

export default UserFormLayout;
