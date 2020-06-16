import React, { useContext, useEffect, useState } from 'react';

import LandingNavigation from './LandingNavigation';

const LandingLayout = () => {
  return (
    <div>
      <header
        id='top'
        className='w-full flex flex-col fixed sm:relative bg-white pin-t pin-r pin-l'>
        <LandingNavigation />
        {/* <nav
          id='site-menu'
          class='flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white shadow sm:shadow-none border-t-4 border-red-900'>
          <div class='w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center'>

          </div>
          <div
            id='menu'
            class='w-full sm:w-auto self-end sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden'>
            <a
              class='text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1 sm:pt-2'
              href='https://ttntm.me/blog/tailwind-responsive-menu/'
              target='_blank'>
              About
            </a>
            <a
              class='text-dark font-bold hover:text-red text-lg w-full no-underline sm:w-auto sm:px-4 py-2 sm:py-1 sm:pt-2'
              href='#bottom'>
              Features
            </a>
          </div>
        </nav> */}
      </header>
      <style jsx>{`
        .w-full {
          background-color: #0d0d0d;
        }
      `}</style>
    </div>
  );
};

export default LandingLayout;
