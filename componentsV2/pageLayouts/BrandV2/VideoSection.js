import React, { useContext, useEffect, useState } from 'react';

const VideoSection = () => {
  return (
    <div>
      <video
        preload='auto'
        muted
        autoPlay
        loop
        playsInline
        src='https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/main_video2.mp4'
        type='video/mp4'>
        Your device does not support this video.
      </video>
      <video
        preload='auto'
        muted
        autoPlay
        loop
        playsInline
        src='https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/HQ_video_main_lower.mp4'
        type='video/mp4'>
        Your device does not support this video.
      </video>
    </div>
  );
};

export default VideoSection;
