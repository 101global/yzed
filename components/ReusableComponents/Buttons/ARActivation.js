import React, { useContext, useEffect, useState } from 'react';

import theme from '../../../utilities/theme';

const ARActivation = () => {
  return (
    <>
      <button slot='ar-button' aria-label='activate ar' className='ar-button'>
        <div className='flex flex-row justify-center items-center p-1'>
          <svg
            aria-hidden='true'
            width='40'
            height='40'
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='activate-ar-button'>
            <g clipPath='url(#clip0)'>
              <path
                d='M39.6653 20C39.6653 30.7696 30.9348 39.5 20.1653 39.5C9.39573 39.5 0.665283 30.7696 0.665283 20C0.665283 9.23045 9.39573 0.5 20.1653 0.5C30.9348 0.5 39.6653 9.23045 39.6653 20Z'
                className='fill-opposite stroke-main'
                strokeMiterlimit='10'
              />
              <path
                d='M14.8425 17.2466H11.4558L11.9991 15.6399H15.1325L14.8425 17.2466Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M18.2294 17.2466H14.8428L15.1328 15.6399H18.2661L18.2294 17.2466Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M21.6162 17.2466H18.2295L18.2662 15.6399H21.3995L21.6162 17.2466Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M25.0028 17.2466H21.6161L21.3994 15.6399H24.5327L25.0028 17.2466Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M28.3896 17.2466H25.003L24.533 15.6399H27.6663L28.3896 17.2466Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M14.5029 19.1332H10.8196L11.4562 17.2466H14.8429L14.5029 19.1332Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M18.1865 19.1332H14.5032L14.8432 17.2466H18.2298L18.1865 19.1332Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M21.8701 19.1332H18.1868L18.2301 17.2466H21.6168L21.8701 19.1332Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M25.5526 19.1332H21.8693L21.616 17.2466H25.0026L25.5526 19.1332Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M29.2367 19.1332H25.5534L25.0034 17.2466H28.3901L29.2367 19.1332Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M32.9993 27.4999H7.99927L11.9993 15.6399H27.6659L32.9993 27.4999Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M14.0994 21.3866H10.0627L10.8194 19.1333H14.5027L14.0994 21.3866Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M18.136 21.3866H14.0994L14.5027 19.1333H18.186L18.136 21.3866Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M22.176 21.3866H18.136L18.186 19.1333H21.8693L22.176 21.3866Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M26.2127 21.3866H22.1761L21.8694 19.1333H25.5527L26.2127 21.3866Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M30.2496 21.3866H26.213L25.553 19.1333H29.2363L30.2496 21.3866Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M13.6099 24.1167H9.13989L10.0632 21.3867H14.0999L13.6099 24.1167Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M18.0763 24.1167H13.6096L14.0996 21.3867H18.1363L18.0763 24.1167Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M22.5431 24.1167H18.0764L18.1364 21.3867H22.1764L22.5431 24.1167Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M27.0098 24.1167H22.5432L22.1765 21.3867H26.2132L27.0098 24.1167Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M31.4798 24.1167H27.0098L26.2131 21.3867H30.2498L31.4798 24.1167Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M12.9995 27.4998H7.99951L9.13951 24.1165H13.6095L12.9995 27.4998Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M18.0002 27.4998H13.0002L13.6102 24.1165H18.0769L18.0002 27.4998Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M22.9998 27.4998H17.9998L18.0764 24.1165H22.5431L22.9998 27.4998Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M27.9999 27.4998H22.9999L22.5432 24.1165H27.0099L27.9999 27.4998Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M32.9998 27.4998H27.9998L27.0098 24.1165H31.4798L32.9998 27.4998Z'
                className='stroke-main'
                strokeWidth='0.5'
                strokeMiterlimit='10'
              />
              <path
                d='M20.1558 23.3434C23.5008 23.3434 26.2125 22.3823 26.2125 21.1967C26.2125 20.0111 23.5008 19.05 20.1558 19.05C16.8108 19.05 14.0991 20.0111 14.0991 21.1967C14.0991 22.3823 16.8108 23.3434 20.1558 23.3434Z'
                className='fill-main'
              />
              <path
                d='M20.1563 19.9998C23.1828 19.9998 25.6363 17.5747 25.6363 14.5832C25.6363 11.5916 23.1828 9.1665 20.1563 9.1665C17.1297 9.1665 14.6763 11.5916 14.6763 14.5832C14.6763 17.5747 17.1297 19.9998 20.1563 19.9998Z'
                className='fill-opposite stroke-main'
                strokeMiterlimit='10'
              />
            </g>
            <defs>
              <clipPath id='clip0'>
                <rect width='40' height='40' className='fill-opposite' />
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
        .dark-mode svg.activate-ar-button .stroke-main {
          stroke: ${theme.colors.white};
        }
        .dark-mode svg.activate-ar-button .fill-main {
          fill: ${theme.colors.white};
        }
        .dark-mode svg.activate-ar-button .fill-opposite {
          fill: ${theme.colors.black};
        }
        .light-mode svg.activate-ar-button .stroke-main {
          stroke: ${theme.colors.black};
        }
        .light-mode svg.activate-ar-button .fill-main {
          fill: ${theme.colors.black};
        }
        .light-mode svg.activate-ar-button .fill-opposite {
          fill: ${theme.colors.white};
        }
      `}</style>
    </>
  );
};

export default ARActivation;
