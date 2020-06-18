import React, { useState } from 'react';

import ReactVivus from 'react-vivus';
import svg from '../../public/contact_us.svg';

const ContactAnimated = () => {
  const [animationOver, setAnimationOver] = useState(false);

  return (
    <>
      <ReactVivus
        id='animated-contact-svg'
        option={{
          file: svg,
          animTimingFunction: 'EASE-IN',
          type: 'oneByOne',
          duration: 1000,
        }}
        style={{
          height: '100px',
        }}
      />

      <style jsx global>
        {`
          #animated-contact-svg {
            width: 80%;
            
            display: inline-block;
            position: absolute;
          }
          #animated-contact-svg svg {
            display: inline-block;
            height: 60px;
          }
        `}
      </style>
    </>
  );
};
export default ContactAnimated;
