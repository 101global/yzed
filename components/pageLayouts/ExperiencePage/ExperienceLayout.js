import React, { useContext, useEffect, useState } from 'react';

import ExperiencePhotos from './ExperiencePhotos';
import UserNavigation from '../../reusableStyledComponents/navigation/UserNavigation';
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
    <>
      <UserNavigation />
      <div className='grid grid-cols-experience gap-6 max-h-screen py-16 px-16 bg-black text-white'>
        <div className='w-full'>
          <div>
            <ExperienceModel />
          </div>
        </div>
        <section className='flex flex-col justify-between items-center'>
          <VideoStream />
          <ExperiencePhotos />
        </section>
        <section>
          <h1>Content</h1>
        </section>
      </div>
    </>
  );
};

export default ExperienceLayout;
