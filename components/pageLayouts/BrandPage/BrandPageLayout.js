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
      <div className='main-page-container flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 min-h-screen px-4 lg:px-dsk'>
        <div>
          <div className='model-viewer-container fixed'>
            <BrandModelControls model={model} />
          </div>
        </div>
        <div>
          <BrandContent model={model} />
        </div>
      </div>
      <style jsx>{`
        .main-page-container {
          padding-top: 200px;
        }
        .model-viewer-container {
          max-height: calc(100vh);
          width: calc(100%);
        }
      `}</style>
    </>
  );
};

export default BrandPageLayout;
