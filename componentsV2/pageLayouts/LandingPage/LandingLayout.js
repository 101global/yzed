import React, { useContext, useEffect, useState } from 'react';

import { Element } from 'react-scroll';
import LandingNavigation from './LandingNavigation';
import ModelViewerController from '../../reusableStyledComponents/modelViewers/ModelViewerController';
import theme from '../../../utilities/theme';
import LandingIntroduction from './LandingIntroduction';
import Layout from '../../Layout';

const LandingLayout = ({ model }) => {
  const [topModelDark, setTopModelDark] = useState(true);
  return (
    <Layout>
      <header id='top' className='w-full flex flex-col fixed pin-t pin-r pin-l'>
        <LandingNavigation />
      </header>
      <main>
        <section className='landing-section'>
          <Element id='model-section' name='model' className='scroll-section dark'>
            <ModelViewerController
              model={model}
              topModelDark={topModelDark}
              setTopModelDark={setTopModelDark}
            />
          </Element>
        </section>
        <section className='landing-section'>
          <Element id='intro-section' name='introduction' className='scroll-section light '>
            <LandingIntroduction model={model} />
          </Element>
        </section>
        <section className='landing-section'>
          <Element name='about' className='scroll-section dark'></Element>
        </section>
        <section className='landing-section'>
          <Element name='contact' className='scroll-section light'></Element>
        </section>
      </main>
      <style jsx>{`
        #top {
          background-color: #0d0d0df6;
          display: fixed;
          left: 0;
          top: 0;
          z-index: 10000;
          padding: 0 10%;
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
            min-height: 100vh;
            min-width: 100vw;
          }
          .dark {
            background-color: ${theme.colors.black};
          }
          #model-section {
            background-color: ${topModelDark ? theme.colors.black : theme.colors.white};
            min-height: 100vh;
            padding-top: 85px;
          }
          #intro-section {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </Layout>
  );
};

export default LandingLayout;
