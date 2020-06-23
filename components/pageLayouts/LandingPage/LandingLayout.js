import React, { useContext, useEffect, useState } from 'react';

import { Element } from 'react-scroll';
import LandingAbout from './LandingAbout';
import LandingContact from './LandingContact';
import LandingFooter from './LandingFooter';
import LandingIntroduction from './LandingIntroduction';
import LandingNavigation from './LandingNavigation';
import ModelViewerController from '../../reusableStyledComponents/modelViewers/ModelViewerController';
import theme from '../../../utilities/theme';

const LandingLayout = ({ model }) => {
  const [topModelDark, setTopModelDark] = useState(true);
  return (
    <>
      <header
        id='top'
        className='w-full flex flex-col fixed pin-t pin-r pin-l px-4 py-mob lg:px-dsk bg-transparentBlack z-tenThous'>
        <LandingNavigation />
      </header>
      <main className='w-full flex flex-col'>
        <Element
          id='model-section'
          name='model'
          className={`scroll-section dark min-h-screen min-w-screen ${
            topModelDark ? 'bg-black' : 'bg-white'
          } pt-nav`}>
          <ModelViewerController
            model={model}
            topModelDark={topModelDark}
            setTopModelDark={setTopModelDark}
          />
        </Element>

        <Element
          id='intro-section'
          name='introduction'
          className='min-h-screen min-w-screen flex items-center justify-center'>
          <LandingIntroduction model={model} />
        </Element>

        <Element
          id='about-section'
          name='about'
          className='min-h-screen min-w-screen flex items-center justify-center bg-black'>
          <LandingAbout model={model} />
        </Element>

        <Element id='contact-section' name='contact' className='min-h-screen min-w-screen grid'>
          <LandingContact />
        </Element>
      </main>
      <LandingFooter />
      <style jsx global>{`
        @media (max-width: 768px) {
          #model-section {
            min-height: 112vh;
          }
        }
      `}</style>
    </>
  );
};

export default LandingLayout;
