import React, { useContext, useEffect, useState } from 'react';

import theme from '../../../utilities/theme';

const ARActivation = () => {
  return (
    <>
      <button slot='ar-button' aria-label='activate ar' className='ar-button'>
        <div className='flex flex-row justify-center items-center'>
          <svg
            width='40'
            height='40'
            viewBox='0 0 30 30'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='activate-ar-button'>
            <g clip-path='url(#clip0)'>
              <path
                d='M29.624 15C29.624 23.0081 23.1322 29.5 15.124 29.5C7.11589 29.5 0.624023 23.0081 0.624023 15C0.624023 6.99187 7.11589 0.5 15.124 0.5C23.1322 0.5 29.624 6.99187 29.624 15Z'
                className='stroke-main fill-opposite'
                stroke-miterlimit='10'
              />
              <path
                d='M11.1318 12.9347H8.5918L8.9993 11.7297H11.3493L11.1318 12.9347Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M13.6718 12.9347H11.1318L11.3493 11.7297H13.6993L13.6718 12.9347Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M16.2119 12.9347H13.6719L13.6994 11.7297H16.0494L16.2119 12.9347Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M18.7523 12.9347H16.2123L16.0498 11.7297H18.3998L18.7523 12.9347Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M21.2919 12.9347H18.7519L18.3994 11.7297H20.7494L21.2919 12.9347Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M10.8772 14.3498H8.11475L8.59225 12.9348H11.1322L10.8772 14.3498Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M13.6399 14.3498H10.8774L11.1324 12.9348H13.6724L13.6399 14.3498Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M16.4026 14.3498H13.6401L13.6726 12.9348H16.2126L16.4026 14.3498Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M19.1644 14.3498H16.4019L16.2119 12.9348H18.7519L19.1644 14.3498Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M21.9274 14.3498H19.1649L18.7524 12.9348H21.2924L21.9274 14.3498Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M24.7495 20.6247H5.99951L8.99951 11.7297H20.7495L24.7495 20.6247Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M10.5749 16.0399H7.54736L8.11486 14.3499H10.8774L10.5749 16.0399Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M13.6022 16.0399H10.5747L10.8772 14.3499H13.6397L13.6022 16.0399Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M16.6321 16.0399H13.6021L13.6396 14.3499H16.4021L16.6321 16.0399Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M19.6598 16.0399H16.6323L16.4023 14.3499H19.1648L19.6598 16.0399Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M22.6871 16.0399H19.6595L19.1646 14.3499H21.9271L22.6871 16.0399Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M10.2075 18.0873H6.85498L7.54748 16.0398H10.575L10.2075 18.0873Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M13.5575 18.0873H10.2075L10.575 16.0398H13.6025L13.5575 18.0873Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M16.9071 18.0873H13.5571L13.6021 16.0398H16.6321L16.9071 18.0873Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M20.2573 18.0873H16.9073L16.6323 16.0398H19.6598L20.2573 18.0873Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M23.6102 18.0873H20.2577L19.6602 16.0398H22.6877L23.6102 18.0873Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M9.74951 20.6247H5.99951L6.85451 18.0872H10.207L9.74951 20.6247Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M13.5 20.6247H9.75L10.2075 18.0872H13.5575L13.5 20.6247Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M17.2495 20.6247H13.4995L13.557 18.0872H16.907L17.2495 20.6247Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M20.9997 20.6247H17.2497L16.9072 18.0872H20.2572L20.9997 20.6247Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M24.7498 20.6247H20.9998L20.2573 18.0872H23.6098L24.7498 20.6247Z'
                className='stroke-main'
                stroke-width='0.5'
                stroke-miterlimit='10'
              />
              <path
                d='M15.1167 17.5074C17.6255 17.5074 19.6592 16.7865 19.6592 15.8974C19.6592 15.0082 17.6255 14.2874 15.1167 14.2874C12.608 14.2874 10.5742 15.0082 10.5742 15.8974C10.5742 16.7865 12.608 17.5074 15.1167 17.5074Z'
                className='fill-main'
              />
              <path
                d='M15.1173 14.9998C17.3872 14.9998 19.2273 13.1809 19.2273 10.9373C19.2273 8.6936 17.3872 6.87476 15.1173 6.87476C12.8474 6.87476 11.0073 8.6936 11.0073 10.9373C11.0073 13.1809 12.8474 14.9998 15.1173 14.9998Z'
                className='fill-opposite stroke-main'
                stroke-miterlimit='10'
              />
            </g>
            <defs>
              <clipPath id='clip0'>
                <rect width='30' height='30' className='fill-opposite' fill='pink' />
              </clipPath>
            </defs>
          </svg>
          <p className='ml-2 font-light text-sm tracking-wide'>View AR</p>
        </div>
      </button>

      <style jsx global>{`
        button.ar-button {
          position: absolute;
          bottom: 0;
          right: 0;
        }
        .ar-button svg.activate-ar-button {
          height: 40px;
        }
        .dark-mode svg.activate-ar-button .stroke-main {
          stroke: ${theme.colors.white};
        }
        .dark-mode svg.activate-ar-button .fill-main {
          fill: ${theme.colors.white};
        }
        .dark-mode svg.activate-ar-button .fill-opposite {
          fill: ${theme.colors.black};
        }
      `}</style>
    </>
  );
};

export default ARActivation;
