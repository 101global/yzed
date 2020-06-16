import React, { useContext, useEffect, useState } from 'react';

import { Element } from 'react-scroll';
import LandingNavigation from './LandingNavigation';
import ModelViewerController from '../../reusableStyledComponents/modelViewers/ModelViewerController';
import theme from '../../../utilities/theme';

const LandingLayout = ({ model }) => {
  return (
    <>
      <header id='top' className='w-full flex flex-col fixed  pin-t pin-r pin-l'>
        <LandingNavigation />
      </header>
      <main>
        <section className='landing-section'>
          <Element id='model-section' name='model' className='scroll-section dark'>
            <ModelViewerController model={model} />
          </Element>
        </section>
      </main>
      <style jsx>{`
        #top {
          background-color: #0d0d0df6;
          display: fixed;
          left: 0;
          top: 0;
          z-index: 10000;
        }
        .landing-section {
          min-height: 100vh;
          min-width: 100vw;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .scroll-section {
          height: 100%;
          width: 100%;
        }
      `}</style>
      <style jsx global>
        {`
          .scroll-section {
            height: 100%;
            width: 100%;
          }
          .dark {
            background-color: ${theme.colors.black};
          }
          #model-section {
            padding-top: 85px;
          }
        `}
      </style>
    </>
  );
};

export default LandingLayout;
