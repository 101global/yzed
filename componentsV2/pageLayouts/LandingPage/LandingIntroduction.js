import React, { useEffect, useContext, useState } from 'react';
import BlackLink from '../../reusableStyledComponents/BlackLink';
import theme from '../../../utilities/theme';
import ProgressiveImage from '../../ProgressiveImage';
import image from '../../../public/HQ_IMGS3_0120.png';
import YZEDAnimatedLogo from '../../reusableStyledComponents/YZEDAnimatedLogoSVG';

const LandingIntroduction = () => {
  return (
    <>
      <div className='main-landing-container grid col-gap-16 sm:grid-cols-1 md:grid-cols-2'>
        <div className='text-section'>
          <div className='text-content'>
            <YZEDAnimatedLogo />
            <h1>Where Democratic Fashion catalyzes self-discovery.</h1>
            <p>
              Democratic Fashion is a practice that minimizes the gap between a designers’ work and
              the mass market, while considering fair economic and social trade off. YZED is built
              upon the five most important factors of this practice, which you can read more about
              in our manifesto.
            </p>
            <BlackLink title='DOWNLOAD MANIFESTO' href='' />
          </div>
        </div>
        <div className='photo-section'>
          <ProgressiveImage image={image} />
        </div>
      </div>
      <style jsx>{`
        .main-landing-container {
          width: 90%;
          margin-left: 10%;
        }
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

        img {
          max-height: 444px;
          width: auto;
          max-width: 90%;
        }
      `}</style>
    </>
  );
};

export default LandingIntroduction;
