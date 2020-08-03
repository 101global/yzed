import React, { useContext, useEffect, useState } from 'react';

import BrandContent from './BrandContent';
import BrandModelControls from './BrandModelControls';
import Footer from '../../ReusableComponents/Footer/Footer';
import NavigationBar from '../../ReusableComponents/Navigation/NavigationBar';
import ProgressiveImage from '../../ReusableComponents/Images/ProgressiveImage';

const BrandPageLayout = ({ model }) => {
  return (
    <>
      <NavigationBar isLandingMenu={true} />
      <div className='main-page-container py-navHeight lg:pt-48 lg:pb-0  flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 min-h-screen px-4 lg:px-dsk'>
        <div className='container flex justify-around items-start'>
          <div className='model-viewer-controls-container w-full lg:w-floatScroll mb-12 lg:mb-0'>
            <BrandModelControls model={model} />
          </div>
        </div>
        <div>
          <BrandContent model={model} />
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .model-viewer-controls-container {
          position: -webkit-sticky;
          position: sticky;
          top: 12rem;
      `}</style>
    </>
  );
};

export default BrandPageLayout;
