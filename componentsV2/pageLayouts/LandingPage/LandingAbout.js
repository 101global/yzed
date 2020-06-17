import React, { useContext, useEffect, useState } from 'react';

import BlackLink from '../../reusableStyledComponents/BlackLink';
import ProgressiveImage from '../../ProgressiveImage';
import YZEDAnimatedLogo from '../../reusableStyledComponents/YZEDAnimatedLogoSVG';
import image1 from '../../../public/HQ_IMGS2_0120.png';
import image2 from '../../../public/HQ_IMAGES8_0032.png';
import selfExpressionWhite from '../../../public/self-expression.svg';
import theme from '../../../utilities/theme';

const LandingAbout = () => {
  return (
    <>
      <div className='main-about-container'>
        <div className='text-container'>
          <h1>“The desire to make fashion more accessible to people.”</h1>
          <p>
            We are an international team of four, based in Seoul, South Korea. We became united by
            the desire to make fashion more accessible to people, which has continued to be our
            team’s top priority. We strongly believe that a change of status quo is imminent in the
            fashion industry - and that it’s going to be catal<strong>yzed</strong> by none other
            than digital garments created in 3D & AR. We strive to create a community where our
            users self-expression leads our decisions.
          </p>
        </div>
        <div className='bottom-section'>
          <div className='image-container'>
            <div className='large-image-container'>
              <ProgressiveImage image={image1} />
            </div>
            <div className='small-image-container'>
              <ProgressiveImage image={image2} />
            </div>
            <div className='word-mark'>
              <img src={selfExpressionWhite} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bottom-section {
          position: relative;
        }
        .main-about-container {
          width: 100%;
          padding-bottom: 150px;
          background-color: ${theme.colors.black};
        }
        .text-container {
          width: 80%;
          margin: 0px auto;
          position: relative;
          padding-top: 100px;
        }
        h1,
        p {
          color: ${theme.colors.white};

          display: inline-block;
        }
        h1 {
          font-size: 2.5rem;
          line-height: 2.5rem;
          width: 48%;
          padding: 20px 0 40px;
        }
        p {
          position: absolute;
          right: 0;
          top: 100px;
          width: 48%;
          margin-left: 4%;
          z-index: 100;
          background-color: ${theme.colors.black};
          padding: 20px 20px 40px 40px;
          font-weight: 100;
          font-size: 1.1rem;
        }
        .image-container {
          overflow: hidden;
          width: 100%;
        }
        .large-image-container {
          width: 70%;
        }
        .small-image-container {
          position: absolute;
          right: 0;
          width: 40%;
          top: calc(50% - 222px);
        }
        .word-mark img {
          overflow: hidden;
          position: absolute;
          bottom: -30px;
          right: 80px;
          mix-blend-mode: exclusion;
          filter: contrast(175%) grayscale(100%);
        }
      `}</style>
      <style jsx global>{`
        .large-image-container img {
        }
        .small-image-container img {
        }
      `}</style>
    </>
  );
};

export default LandingAbout;
