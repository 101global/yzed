import React, { useContext, useEffect, useState } from 'react';

import ExperienceChat from './ExperienceChat';
import ExperienceModelInformation from './ExperienceModelInformation';
import ExperiencePhotos from './ExperiencePhotos';
import ExperienceShop from './ExperienceShop';
import UserNavigation from '../../ReusableComponents/Navigation/UserNavigation';
import VideoStream from '../../ReusableComponents/Video/VideoStream';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import UserLayout from '../../ReusableComponents/Layouts/UserLayout';

const ExperienceLayout = ({ user }) => {
  const router = useRouter();
  const { id } = router.query;
  const ExperienceModel = dynamic(() => import('./ExperienceModel'), {
    ssr: false,
  });

  return (
    <>
      <UserLayout user={user}>
        <div className='main-container grid grid-cols-experience gap-6 min-h-screen bg-black text-white'>
          <section className='w-full flex flex-col justify-between items-center'>
            <div className='h-full'>
              <ExperienceModel />
            </div>
            <ExperienceModelInformation />
          </section>
          <section className='w-full flex flex-col justify-between items-center'>
            <VideoStream />
            <ExperiencePhotos />
          </section>
          <section className='w-full flex flex-col justify-between items-center'>
            <ExperienceChat />
            <ExperienceShop />
          </section>
        </div>
      </UserLayout>
      <style jsx>{`
        .main-container {
          padding: 115px 120px 40px;
        }
      `}</style>
    </>
  );
};

export default ExperienceLayout;
