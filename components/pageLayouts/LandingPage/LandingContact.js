import React, { useContext, useEffect, useState } from 'react';

import ContactAnimated from '../../reusableStyledComponents/ContactAnimatedSVG';
import theme from '../../../utilities/theme';

const LandingContact = () => {
  return (
    <>
      <>
        <div className='main-contact-container px-4 lg:px-dsk flex flex-col lg:flex-row justify-center lg:justify-between align-center w-full'>
          <div className='title-section flex flex-col justify-center align-center w-full lg:w-6/12 relative'>
            <h1 className='text-3xl lg:text-5xl m-0 lg:mr-16 text-center lg:text-right mt-20 mb-20 lg:my-0 font-semibold z-fiveHund'>
              Let's Work Together!
            </h1>
            <ContactAnimated />
          </div>
          <div className='content-section flex flex-col w-full lg:w-6/12 md:mb-16 lg:mb-0 text-justify lg:text-left justify-center align-center relative'>
            <p className='text-xl font-light'>
              Dive into a mixed-reality world with a team of professionals in 3D & graphic design,
              UI/UX, trend forecasting, as well as front and back-end programming. YZED is turning
              your exquisite physical products into digital-dazzle, leading your brand into the
              digital era.
            </p>
            <div className='signature mt-16 text-left'>
              <p className='text-xl font-light'>Interested in working with us? </p>
              <p className='text-xl font-light'>
                Please contact us at{' '}
                <a className='email-link font-semibold inline-block cursor-pointer'>
                  yzed@101.global
                </a>
              </p>
            </div>
          </div>
        </div>
      </>
      <style jsx>{`
        a.email-link:after {
          content: '';
          background-image: linear-gradient(to right, #a891d9, #73cfdb, #a891d9, #73cfdb);
          background-size: 260% 200%;
          width: 110%;
          margin-left: -5%;
          margin-top: -10px;
          height: 12px;
          display: block;
        }
        a.email-link:hover:after {
          animation: gradient 3s ease infinite;
          animation-direction: alternate;
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  );
};

export default LandingContact;
