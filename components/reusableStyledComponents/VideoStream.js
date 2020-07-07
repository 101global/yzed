import React, { useContext, useEffect, useState } from 'react';

const VideoStream = () => {
  return (
    <div>
      <iframe
        width='840'
        height='473'
        src='https://www.youtube.com/embed/ut_8lkPwRU4'
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'></iframe>
    </div>
  );
};

export default VideoStream;
