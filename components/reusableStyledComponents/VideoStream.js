import React, { useContext, useEffect, useState } from 'react';

const VideoStream = () => {
  return (
    <>
      <div className='video-wrapper'>
        <iframe
          width='560'
          height='349'
          src='https://www.youtube.com/embed/QH2-TGUlwu4?modestbranding=1&rel=0&fs=0&color=white'
          frameborder='0'></iframe>
      </div>
      <style jsx>{`
        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 */
          padding-top: 25px;
          width: 100%;
        }
        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
};

export default VideoStream;
