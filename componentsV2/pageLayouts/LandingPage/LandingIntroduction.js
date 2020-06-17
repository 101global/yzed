import React, { useContext, useEffect, useState } from 'react';

import BlackLink from '../../reusableStyledComponents/BlackLink';
import ProgressiveImage from '../../ProgressiveImage';
import YZEDAnimatedLogo from '../../reusableStyledComponents/YZEDAnimatedSVG';
import image from '../../../public/HQ_IMGS3_0120.png';
import theme from '../../../utilities/theme';

const LandingIntroduction = () => {
  return (
    <>
      <div className='main-intro-container p-0 md:pl-dsk grid gap-8 md:gap-16 sm:grid-cols-1 md:grid-cols-2'>
        <div className='text-section flex w-full'>
          <div className='text-content p-2'>
            <YZEDAnimatedLogo />
            <h1>Where Democratic Fashion catalyzes self-discovery.</h1>
            <p>
              Democratic Fashion is a practice that minimizes the gap between a designers’ work and
              the mass market, while considering fair economic and social trade off. YZED is built
              upon the five most important factors of this practice, which you can read more about
              in our manifesto.
            </p>
            <BlackLink
              title='DOWNLOAD MANIFESTO'
              link='https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/YZED_MANIFESTO.pdf'
            />
          </div>
        </div>
        <div className='photo-section'>
          <ProgressiveImage image={image} />
        </div>
      </div>
      <style jsx>{`
        h1 {
          font-size: 3rem;
          line-height: 3rem;
          font-weight: ${theme.fontWeights.semiBold};
          z-index: 1000;
          padding-top: 60px;
        }
        p {
          margin-top: 100px;
          font-weight: 100;
          font-size: 1.4rem;
        }
        .text-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        .photo-section {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-top: 60px;
        }
        .text-section {
          position: relative;
        }
        .main-intro-container {
        }
        img {
          max-height: 444px;
          width: auto;
          max-width: 90%;
        }
        @media (max-width: 640px) {
          .photo-section {
            padding-top: 0;
          }
          h1 {
            text-align: center;
            font-size: 2.6rem;
            max-width: 95%;
            margin: 0px auto;
          }
          p {
            max-width: 95%;
            margin: 20px auto 10px;
          }
          .main-intro-container {
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
      <style jsx global>{`
        .black-link {
          margin-top: 50px;
        }
        @media (max-width: 640px) {
          .black-link {
            display: block;
            margin-top: 0px;
            margin: 10px auto;
          }
        }
      `}</style>
    </>
  );
};

export default LandingIntroduction;
