import '@google/model-viewer/dist/model-viewer';

import React, { useContext, useEffect, useState } from 'react';

import darkBackgroundLoading from '../../../public/yzed-loading-dark-background.svg';

const ExperienceModel = () => {
  return (
    <>
      <div className='model-viewer-experience'>
        <model-viewer
          src='https://oneoone-resource.s3-ap-northeast-2.amazonaws.com/yzed/bvQP164cIw.gltf'
          poster={darkBackgroundLoading}
          interaction-policy='allow-when-focused'
          exposure={1}
          auto-rotate
          camera-controls></model-viewer>
      </div>
      <style jsx global>{`
        .model-viewer-experience model-viewer {
          margin: 0 auto;
          z-index: 101;
          min-width: 80%;
          min-height: 70vh;
          height: 100%;
          width: 100%;
          --poster-color: transparent;
        }
      `}</style>
    </>
  );
};

export default ExperienceModel;
