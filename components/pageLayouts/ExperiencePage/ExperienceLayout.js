import React, { useContext, useEffect, useState } from 'react';

import VideoStream from '../../reusableStyledComponents/VideoStream';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const ExperienceLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  const ExperienceModel = dynamic(() => import('./ExperienceModel'), {
    ssr: false,
  });
  console.log(ExperienceModel);
  return (
    <div className='grid grid-cols-experience gap-6 min-h-screen px-12 pt-16 bg-black text-white'>
      <div className='w-full'>
        <div>
          <ExperienceModel />
        </div>
      </div>
      <section className='flex flex-col justify-start items-center'>
        <VideoStream />
        <h1>Photos</h1>
      </section>
      <section>
        <h1>Content</h1>
      </section>
    </div>
  );
};

export default ExperienceLayout;
