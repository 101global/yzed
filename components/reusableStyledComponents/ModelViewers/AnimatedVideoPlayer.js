import React, { useContext, useEffect, useState } from 'react';

import darkBackgroundLoading from '../../../public/yzed-loading-dark-background.svg';
import lightBackgroundLoading from '../../../public/yzed-loading-light-background.svg';

const AnimatedVideoPlayer = ({ model, onLoadedData, isVideoLoading, topModelDark }) => {
  return (
    <>
      <div className='video-container text-white flex flex-col justify-center items-center h-full'>
        <video
          playsInline
          autoplay='autoplay'
          muted
          loop
          src={topModelDark ? model.darkBackgroundVideo : model.lightBackgroundVideo}
          onLoadedData={onLoadedData}
        />
        {isVideoLoading && (
          <img
            src={topModelDark ? darkBackgroundLoading : lightLoadingBackground}
            alt='loading logo'
            className='video-loading-logo absolute w-full h-full'
          />
        )}
      </div>
      <style jsx>{`
        .video-container {
          height: 80vh;
        }
      `}</style>
    </>
  );
};

export default AnimatedVideoPlayer;
