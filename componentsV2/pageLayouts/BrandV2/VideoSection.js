import React, { useContext, useEffect, useState } from 'react';

const VideoSection = () => {
  return (
    <div>
      <video autoplay='autoplay' loop>
        <source
          src='https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/main_video2.mp4'
          type='video/mp4'></source>
        <source
          src='https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/main_video2.ogg'
          type='video/ogg'></source>
        Your device does not support this video.
      </video>
    </div>
  );
};

export default VideoSection;
