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
        callback={animationFinished}
      />

      <style jsx global>
        {`
          #animated-svg {
            position: absolute;
            width: 100%;
            top: 20px;
          }
          #animated-svg svg {
            height: 80px;
          }
          @media (max-width: 768px) {
            #animated-svg {
              top: 30px;
            }
            #animated-svg svg {
              height: 60px;
            }
          }
        `}
      </style>
    </>
  );
};
export default AnimatedLogo;
