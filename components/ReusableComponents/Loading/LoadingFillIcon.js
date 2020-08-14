import React, { useContext, useEffect, useState } from 'react';

import theme from '../../../utilities/theme';

const LoadingFillIcon = () => {
  return (
    <>
      <div className='bg-transparentBlack min-h-screen min-w-full flex justify-center items-center fixed top-0 left-0 z-tenThous'>
        <div className='relative'>
          <div className='box'>
            <svg
              role='img'
              width='250'
              height='42'
              viewBox='0 0 250 42'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <title>loading</title>
              <defs>
                <clipPath id='myClip'>
                  <path
                    d='M57.0424 31.1806L86.479 10.4861H62.2536L64.9297 0H112.606L110.352 10.4861L81.3382 31.1806H107.465L104.648 41.6667H54.9297L57.0424 31.1806Z'
                    stroke='white'
                    strokeWidth='1.5'
                  />
                  <path
                    d='M61.3381 0H41.4085L27.817 20.0694L22.9578 0H3.09864L11.9719 31.1806H2.81695L0.281738 41.6667H15.2817C31.1972 41.6667 40.7043 28.4722 40.7043 28.4722L61.3381 0Z'
                    stroke='white'
                    strokeWidth='1.5'
                  />
                  <path
                    d='M171.62 0H204.155C218.521 0 224.789 5.48611 221.69 20.8333C218.591 35.4861 209.789 41.6667 195.775 41.6667H162.887L171.62 0ZM181.76 31.1806H191.338C198.944 31.1806 202.817 27.4306 204.225 20.8333C205.563 14.2361 203.31 10.4861 195.704 10.4861H186.127L181.76 31.1806Z'
                    stroke='white'
                    strokeWidth='1.5'
                  />
                  <path
                    d='M120.071 0H165L162.888 10.1389H134.648L133.451 15.7639H159.648L157.536 25.9028H131.338L130.141 31.5278H158.381L156.268 41.6667H111.338L120.071 0Z'
                    stroke='white'
                    strokeWidth='1.5'
                  />
                  <path
                    d='M241.408 41.6666C246.114 41.6666 249.929 37.9046 249.929 33.2639C249.929 28.6231 246.114 24.8611 241.408 24.8611C236.702 24.8611 232.887 28.6231 232.887 33.2639C232.887 37.9046 236.702 41.6666 241.408 41.6666Z'
                    stroke='white'
                    strokeWidth='1.5'
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className='hello'>
            <svg
              role='img'
              width='254'
              height='44'
              viewBox='-1 0 254 42'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='outline-svg'>
              <title>loading</title>

              <path
                d='M57.0424 31.1806L86.479 10.4861H62.2536L64.9297 0H112.606L110.352 10.4861L81.3382 31.1806H107.465L104.648 41.6667H54.9297L57.0424 31.1806Z'
                stroke='white'
                strokeWidth='1.5'
              />
              <path
                d='M61.3381 0H41.4085L27.817 20.0694L22.9578 0H3.09864L11.9719 31.1806H2.81695L0.281738 41.6667H15.2817C31.1972 41.6667 40.7043 28.4722 40.7043 28.4722L61.3381 0Z'
                stroke='white'
                strokeWidth='1.5'
              />
              <path
                d='M171.62 0H204.155C218.521 0 224.789 5.48611 221.69 20.8333C218.591 35.4861 209.789 41.6667 195.775 41.6667H162.887L171.62 0ZM181.76 31.1806H191.338C198.944 31.1806 202.817 27.4306 204.225 20.8333C205.563 14.2361 203.31 10.4861 195.704 10.4861H186.127L181.76 31.1806Z'
                stroke='white'
                strokeWidth='1.5'
              />
              <path
                d='M120.071 0H165L162.888 10.1389H134.648L133.451 15.7639H159.648L157.536 25.9028H131.338L130.141 31.5278H158.381L156.268 41.6667H111.338L120.071 0Z'
                stroke='white'
                strokeWidth='1.5'
              />
              <path
                d='M241.408 41.6666C246.114 41.6666 249.929 37.9046 249.929 33.2639C249.929 28.6231 246.114 24.8611 241.408 24.8611C236.702 24.8611 232.887 28.6231 232.887 33.2639C232.887 37.9046 236.702 41.6666 241.408 41.6666Z'
                stroke='white'
                strokeWidth='1.5'
              />
            </svg>
          </div>
        </div>
      </div>
      <style jsx>{`
        .box {
          width: 250px;
          height: 50px;
          line-height: 200px;
          text-align: center;
          font-size: 25px;
          font-weight: 600;
          text-transform: uppercase;
          position: relative;
          clip-path: url('#myClip');
        }
        .box:before {
          content: '';
          position: absolute;
          width: 400px;
          height: 100px;
          background: ${theme.colors.transparentWhite};
          background: linear-gradient(
            transparent,
            transparent 50%,
            ${theme.colors.aqua} 50%,
            ${theme.colors.aqua},
            ${theme.colors.purple} 75%,
            ${theme.colors.purple} 100%
          );
          left: 0;
          top: 0px;

          animation: fill 3s ease-in-out infinite;
          z-index: -1;
        }

        @keyframes fill {
          from {
            transform: translateY(0px);
          }
          to {
            transform: translateY(-50px);
          }
        }
        .outline-svg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, calc(-50% - 4px));
          -webkit-transform: -webkit-translate(-50%, calc(-50% - 4px));
        }
      `}</style>
    </>
  );
};

export default LoadingFillIcon;
