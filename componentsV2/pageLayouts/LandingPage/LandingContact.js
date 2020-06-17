import React, { useContext, useEffect, useState } from 'react';

import ContactAnimated from '../../reusableStyledComponents/ContactAnimatedSVG';
import contactText from '../../../public/contact_us.svg';

const LandingContact = () => {
  return (
    <>

        <div className='main-contact-container px-dsk grid grid-cols-1 lg:grid-cols-2 justify-center align-center'>
          <div className='title-section flex flex-col justify-center align-center'>
            <h1>Let's Work Together!</h1>
            <ContactAnimated />
          </div>
          <div className='content-section flex flex-col justify-center align-center'>
            <h1>Contact</h1>
          </div>
        </div>

      <style jsx>{`
        .flex-container {
        }
        .main-contact-container {
          width: 100%;
          min-height: 600px;
        }
        .title-section,
        .content-section {
        }
      `}</style>
    </>
  );
};

export default LandingContact;
