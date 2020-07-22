import React, { useContext, useEffect, useState } from 'react';

import NavigationBar from '../../ReusableComponents/Navigation/NavigationBar';
import ProgressiveImage from '../../ReusableComponents/Images/ProgressiveImage';

const BrandPageLayout = ({ model }) => {
  console.log(model);
  return (
    <>
      <NavigationBar isLandingMenu={true} />
      <div className='main-page-container flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 min-h-screen px-4 lg:px-dsk'>
        <div className='model-viewer-container relative'>
          <ProgressiveImage
            styleClass=''
            image='https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/YZED_model_viewer_still.png'
            preview='https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/YZED_model_viewer_still.png'
          />
        </div>
        <div>TEXT</div>
      </div>
      <style jsx>{`
        .main-page-container {
          padding-top: 200px;
        }
        .model-viewer-container {
          position: absolute;
          max-height: calc(100vh);
        }
      `}</style>
    </>
  );
};

export default BrandPageLayout;
