import React, { useContext, useEffect, useState } from 'react';

import ContactAnimated from '../../reusableStyledComponents/ContactAnimatedSVG';
import contactText from '../../../public/contact_us.svg';
import theme from '../../../utilities/theme';

const LandingContact = () => {
  return (
    <>
      <>
        <div className='main-contact-container px-dsk grid grid-cols-1 lg:grid-cols-2 gap-16 justify-center align-center'>
          <div className='title-section flex flex-col justify-center align-center'>
            <h1>Let's Work Together!</h1>
            <ContactAnimated />
          </div>
          <div className='content-section flex flex-col justify-center align-center'>
            <p>
              Dive into a mixed-reality world with a team of professionals in 3D & graphic design,
              UI/UX, trend forecasting, as well as front and back-end programming. YZED is turning
              your exquisite physical products into digital-dazzle, leading your brand into the
              digital era.
            </p>
            <div className='signature'>
              <p>Interested in working with us? </p>
              <p>
                {' '}
                Please contact us at <a className='email-link'>yzed@101.global</a>
              </p>
            </div>
          </div>
        </div>
      </>
      <style jsx>{`
        .flex-container {
        }
        .main-contact-container {
          width: 100%;
        }
        .title-section,
        .content-section {
          position: relative;
        }
        .signature {
          margin-top: 30px;
        }
        a {
          font-weight: 600;
        }
        h1 {
          text-align: right;
          font-size: 2.8rem;
          font-weight: 500;
          z-index: 500;
        }
        footer p {
          font-weight: 100;
          font-size: 1.2rem;
          background: ${theme.colors.black};
          color: ${theme.colors.white};
          position: absolute;
          width: 100%;
          letter-spacing: 0.02em;
        }
        footer p a {
          margin: 0 5px;
        }
        a.email-link,
        footer p strong {
          display: inline-block;
        }
        a.email-link:after,
        footer p strong:after {
          content: '';
          background-image: linear-gradient(to right, #a891d9, #73cfdb);
          width: 110%;
          margin-left: -5%;
          margin-top: -10px;
          height: 12px;
          display: block;
        }
      `}</style>
    </>
  );
};

export default LandingContact;
