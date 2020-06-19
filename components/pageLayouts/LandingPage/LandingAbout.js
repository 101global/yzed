import React, { useContext, useEffect, useState } from 'react';

import BlackLink from '../../reusableStyledComponents/BlackLink';
import ProgressiveImage from '../../ProgressiveImage';
import YZEDAnimatedLogo from '../../reusableStyledComponents/YZEDAnimatedSVG';
import selfExpressionWhite from '../../../public/self-expression.svg';
import theme from '../../../utilities/theme';

const LandingAbout = ({ model }) => {
  const imageBaseUrl = 'https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/';
  const smallPhoto = {
    id: `${model.name} Detail View 2`,
    mini: `${imageBaseUrl}${model.imageSlug}_image_2_mini-compressor.jpg`,
    thumb: `${imageBaseUrl}${model.imageSlug}_image_2_thumb-compressor.jpg`,
    max: `${imageBaseUrl}${model.imageSlug}_image_2_max-compressor.jpg`,
  };
  const largePhoto = {
    id: `${model.name} Detail View 3`,
    mini: `${imageBaseUrl}${model.imageSlug}_image_3_mini-compressor.jpg`,
    thumb: `${imageBaseUrl}${model.imageSlug}_image_3_thumb-compressor.jpg`,
    max: `${imageBaseUrl}${model.imageSlug}_image_3_max-compressor.jpg`,
  };

  return (
    <>
      <div className='main-about-container pb-16 lg:pb-32 align-center justify-center w-full'>
        <div className='text-container grid grid-cols-1 lg:block align-center justify-center w-full lg:w-4/5 mx-auto my-0 relative'>
          <h1 className='text-3xl lg:text-4xl px-4 lg:pb-8 lg:p-0 lg:text-4xl w-full lg:w-5/12 inline-block text-center lg:text-left'>
            “The desire to make fashion more accessible to people.”
          </h1>
          <p className='text-xl w-full lg:w-6/12 block lg:inline-block relative lg:absolute right-o font-hairline z-50 right-0 px-4 py-12 lg:pb-8 lg:pl-8 lg:pt-0 lg:pr-0 right-0 text-justify'>
            We are an international team of four, based in Seoul, South Korea. We became united by
            the desire to make fashion more accessible to people, which has continued to be our
            team’s top priority. We strongly believe that a change of status quo is imminent in the
            fashion industry - and that it’s going to be catal<strong>yzed</strong> by none other
            than digital garments created in 3D & AR. We strive to create a community where our
            users self-expression leads our decisions.
          </p>
        </div>
        <div className='bottom-section relative'>
          <div className='image-container w-full'>
            <div className='small-image-container relative lg:absolute right-0  lg:w-2/5 mb-8 lg:mb-0'>
              <ProgressiveImage
                image={largePhoto.max}
                preview={largePhoto.mini}
                alt={largePhoto.id}
              />
            </div>
            <div className='large-image-container  lg:w-9/12'>
              <ProgressiveImage
                image={smallPhoto.max}
                preview={smallPhoto.mini}
                alt={smallPhoto.id}
              />
            </div>
            <div className='word-mark'>
              <img src={selfExpressionWhite} alt='contact us' />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .main-about-container {
          color: white;
        }
        h1,
        p {
          color: ${theme.colors.white};
          background: ${theme.colors.black};
        }
        .text-container {
          padding-top: 100px;
        }
        h1 {
          font-weight: 600;
        }
        p {
          font-weight: 100;
        }
        .small-image-container {
          top: calc(50% - 140px);
          z-index: 100;
        }
        .word-mark img {
          overflow: hidden;
          position: absolute;
          bottom: -30px;
          right: 80px;
          mix-blend-mode: difference;
          filter: grayscale(100%) !important;
        }
        @media (max-width: 768px) {
          .word-mark img {
            max-width: 100%;
            right: 0;
            left: 0;
            bottom: -20px;
          }
        }
      `}</style>
    </>
  );
};

export default LandingAbout;
