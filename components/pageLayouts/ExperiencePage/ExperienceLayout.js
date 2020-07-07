import React, { useContext, useEffect, useState } from 'react';

import VideoStream from '../../reusableStyledComponents/VideoStream';

const ExperienceLayout = () => {
  return (
    <div className='grid grid-cols-experience min-h-screen px-12'>
      <aside>
        <h1>Content</h1>
      </aside>
      <div className='flex flex-col justify-start items-center'>
        <VideoStream />
      </div>
      <aside>
        <h1>Content</h1>
      </aside>
    </div>
  );
};

export default ExperienceLayout;
