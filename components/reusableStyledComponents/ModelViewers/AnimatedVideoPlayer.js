import React, { useContext, useEffect, useState } from 'react';

import loadingSVG from '../../../public/YZED_Square.svg';
import loadingSVGDark from '../../../public/YZED_Square_Dark.svg';

const AnimatedVideoPlayer = ({ model, onLoadedData, isVideoLoading, topModelDark }) => {
  return (
    <>
      <div className='video-container text-white flex flex-col justify-center items-center h-full'>
        <video
          playsInline
          autoplay='autoplay'
          muted
          loop
          src={model.animatedVideo}
          onLoadedData={onLoadedData}
        />
        {isVideoLoading && (
          <img
            src={topModelDark ? loadingSVG : loadingSVGDark}
            alt='loading logo'
            className='video-loading-logo absolute w-full h-full'
          />
        )}
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default AnimatedVideoPlayer;
