import React, { useState } from 'react';

import ReactVivus from 'react-vivus';
import svg from '../../public/yzed_logo_outline2.svg';

const AnimatedLogo = () => {
  const [animationOver, setAnimationOver] = useState(false);

  const animationFinished = () => {
    setTimeout(() => {
      setAnimationOver(true);
    }, 1200);
  };

  return (
    <>
      <div className='gradient-container'>
        <div className='animated-svg-container'>
          <ReactVivus
            id='foo'
            option={{
              file: svg,
              animTimingFunction: 'EASE',
              type: 'oneByOne',

              duration: 300,
            }}
            style={{ height: '60px' }}
            callback={animationFinished}
          />
        </div>
      </div>
      <style jsx global>
        {`
          {/* .animated-svg-container {
            background: ${!animationOver ? 'transparent' : 'transparent'};
            clip-path: url(#svgPath);
            min-width: 500px;
          } */}
        `}
      </style>
    </>
  );
};
export default AnimatedLogo;
