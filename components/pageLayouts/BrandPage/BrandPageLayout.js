import React, { useContext, useEffect, useState } from 'react';

import BrandModelControls from './BrandModelControls';
import NavigationBar from '../../ReusableComponents/Navigation/NavigationBar';
import ProgressiveImage from '../../ReusableComponents/Images/ProgressiveImage';
import BrandContent from './BrandContent';

const BrandPageLayout = ({ model }) => {
  console.log(model);
  return (
    <>
      <NavigationBar isLandingMenu={true} />
      <div className='main-page-container py-navHeight lg:pt-48 flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 min-h-screen px-4 lg:px-dsk'>
        <div>
          <div className='model-viewer-container'>
            <BrandModelControls model={model} />
          </div>
        </div>
        <div className='z-100'>
          <BrandContent model={model} />
        </div>
      </div>
    </>
  );
};

export default BrandPageLayout;