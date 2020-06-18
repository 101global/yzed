import React, { useContext, useEffect, useState } from 'react';

import ContactAnimated from '../../reusableStyledComponents/ContactAnimatedSVG';
import contactText from '../../../public/contact_us.svg';
import theme from '../../../utilities/theme';

const LandingContact = () => {
  return (
    <>
      <>
        <div className='main-contact-container px-4 lg:px-dsk flex flex-col lg:flex-row justify-center lg:justify-between align-center'>
          <div className='title-section flex flex-col justify-center align-center w-full lg:w-6/12'>
            <h1 className='text-3xl lg:text-5xl m-0 lg:mr-8 text-center lg:text-right mt-20 mb-24 lg:my-0'>
              Let's Work Together!
            </h1>
            <ContactAnimated />
          </div>
          <div className='content-section flex flex-col w-full lg:w-6/12 justify-center align-center'>
            <p className='text-xl'>
              Dive into a mixed-reality world with a team of professionals in 3D & graphic design,
              UI/UX, trend forecasting, as well as front and back-end programming. YZED is turning
              your exquisite physical products into digital-dazzle, leading your brand into the
              digital era.
            </p>
            <div className='signature'>
              <p className='text-xl'>Interested in working with us? </p>
              <p className='text-xl'>
                {' '}
                Please contact us at <a className='email-link'>yzed@101.global</a>
              </p>
            </div>
          </div>
        </div>
      </>
      <style jsx>{`
        .main-contact-container {
          width: 100%;
        }
        .title-section,
        .content-section {
          position: relative;
        }
        .content-section p {
          font-weight: 200;
        }
        .signature {
          margin-top: 30px;
        }
        a {
          font-weight: 600;
        }
        h1 {
          font-weight: 500;
          z-index: 500;
        }

        a.email-link {
          display: inline-block;
          cursor: pointer;
        }
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
