import React, { useState } from 'react';

import ReactVivus from 'react-vivus';
import svg from '../../public/yzed_logo_outline_gradient.svg';

const AnimatedLogo = () => {
  const [animationOver, setAnimationOver] = useState(false);

  const animationFinished = () => {
    setTimeout(() => {
      setAnimationOver(true);
    }, 1200);
  };

  return (
    <>
      <ReactVivus
        id='animated-svg'
        option={{
          file: svg,
          animTimingFunction: 'EASE-IN',
          type: 'oneByOne',

          duration: 300,
        }}
        style={{
          height: '100px',
        }}
        callback={animationFinished}
      />

      <style jsx global>
        {`
          #animated-svg {
            position: absolute;
            min-width: 45%;
            margin-top: 10px;
          }
          #animated-svg svg {
            height: 80px !important;
            display: inline !important;
            width: auto;
            transform: translateX(calc(50% - 22.5%));
          }
        `}
      </style>
    </>
  );
};
export default AnimatedLogo;
