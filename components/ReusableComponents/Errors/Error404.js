import React, { useContext, useEffect, useState } from 'react';

import Footer from '../Footer/Footer';
import MainBodyLayout from '../Layouts/MainBodyLayout';
import NavigationBar from '../Navigation/NavigationBar';
import SquareEmptyLink from '../Links/SquareEmptyLink';
import SquareFilledLink from '../Links/SquareFilledLink';

const Error404 = ({ user }) => {
  return (
    <MainBodyLayout title='404 - Not Found'>
      <NavigationBar isLandingMenu={false} user={user} />
      <main className='flex flex-col pt-navHeight min-h-contentAreaMobile lg:min-h-contentArea text-center '>
        <h1 className='w-formArea mx-auto text-lg lg:text-xl mb-8 mt-16'>Looks like you're lost</h1>
        <p className='w-formArea mx-auto text-sm lg:text-base mb-16'>
          The page you are looking for not available or does not exist anymore
        </p>
        <svg
          className='mx-auto mb-16'
          role='img'
          width='253'
          height='65'
          viewBox='0 0 253 65'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <title>404 Error</title>
          <path
            d='M3.19474 38.3767L46.4125 1.60274H78.2712L70.4618 39H81.9097L78.8924 53.9589H67.4446L65.4922 63.3973H43.3065L45.2589 53.9589H0L3.19474 38.3767ZM52.9795 16.5616L25.7354 39H48.2761L52.9795 16.5616Z'
            fill='url(#paint4040_linear)'
          />
          <path
            d='M136.043 0C162.044 0 173.049 11.6644 168.434 32.6781C164.174 53.3356 148.289 65 122.288 65C96.3748 65 85.3707 53.3356 89.6303 32.6781C94.2449 11.6644 110.13 0 136.043 0ZM125.837 48.9726C137.019 48.9726 143.054 40.6027 144.473 32.6781C146.331 24.3973 143.32 16.0274 132.404 16.0274C121.4 16.0274 115.454 24.3973 113.591 32.6781C112.171 40.6027 115.1 48.9726 125.837 48.9726Z'
            fill='url(#paint4041_linear)'
          />
          <path
            d='M174.291 38.3767L217.503 1.60274H249.362L241.552 39H253L249.983 53.9589H238.535L236.583 63.3973H214.397L216.349 53.9589H171.09L174.291 38.3767ZM224.07 16.5616L196.832 39H219.372L224.07 16.5616Z'
            fill='url(#paint4042_linear)'
          />
          <defs>
            <linearGradient
              id='paint4040_linear'
              x1='-24.8174'
              y1='14.1624'
              x2='239.754'
              y2='70.4548'
              gradientUnits='userSpaceOnUse'>
              <stop stop-color='#75CEDB' />
              <stop offset='1' stop-color='#A891D9' />
            </linearGradient>
            <linearGradient
              id='paint4041_linear'
              x1='-21.8364'
              y1='0.151725'
              x2='242.735'
              y2='56.4442'
              gradientUnits='userSpaceOnUse'>
              <stop stop-color='#75CEDB' />
              <stop offset='1' stop-color='#A891D9' />
            </linearGradient>
            <linearGradient
              id='paint4042_linear'
              x1='-17.3597'
              y1='-20.8887'
              x2='247.212'
              y2='35.4038'
              gradientUnits='userSpaceOnUse'>
              <stop stop-color='#75CEDB' />
              <stop offset='1' stop-color='#A891D9' />
            </linearGradient>
          </defs>
        </svg>
        <SquareFilledLink href='/' text='Go Home' />
      </main>
      <Footer />
    </MainBodyLayout>
  );
};

export default Error404;
