import React, { useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import theme from '../../../utilities/theme';

const BrandCommunity = ({ lightMode }) => {
  return (
    <>
      <div className='about-container'>
        <div className='about'>
          <h2>Democratic Fashion Community</h2>
          <p>
            The Democratic Fashion community is a young movement started, in its majority, inside of
            social media, designers and 3D artists were the first ones to experiment with a digital
            version of the fashion industry. With the technological enhancement garments became more
            realistic, and AR/VR environments opened the doors to experiences mesmerizing as runaway
            shows.
          </p>
        </div>
        <a
          className='black-link'
          href='https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/YZED_MANIFESTO.pdf'
          target='_blank'
          rel='noopener noreferrer'>
          READ MORE
        </a>
      </div>
      <style jsx>{`
        .about-container {
          width: ${theme.boxSizes.mainContentWidthDesktop};
          background-color: ${theme.colors.white};
          color: ${theme.colors.black};
          margin-left: ${theme.boxSizes.mainContentMarginLeftDesktop};
        }
        .about {
          width: 85%;
        }
        .about h2 {
          font-weight: ${theme.fontWeights.medium};
          font-size: ${theme.fontSizes.h2SizeDesktop};
        }

        p {
          font-weight: ${theme.fontWeights.thin};
          font-size: ${theme.fontSizes.pSizeDesktop};
          line-height: ${theme.fontSizes.pLineHeightDesktop};
          letter-spacing: ${theme.fontSizes.pLetterSpacingDesktop};
        }
        .about p a {
          color: ${theme.colors.black};
          letter-spacing: 0em;
          text-decoration: none;
        }
        a.black-link {
          display: block;
          background-color: ${theme.colors.black};
          color: ${theme.colors.white};
          text-decoration: none;
          padding: 10px 0;
          border-radius: 25px;
          border: 1px solid ${theme.colors.black};
          transition: all 0.4s ease;
          width: 350px;
          font-size: ${theme.fontSizes.pSizeDesktop};
          text-align: center;
        }
        a {
          letter-spacing: 0.2em;
          font-weight: ${theme.fontWeights.medium};
        }
        a.black-link:hover {
          background-color: ${theme.colors.white};
          color: ${theme.colors.black};
          transition: all 0.3s ease;
          border-color: ${theme.colors.black};
        }

         {
          /* Tablet Portrait */
        }
        @media (max-width: 768px) {
          .about-container {
            width: 100%;
            padding: 30px 5%;
          }
          .contact {
            width: 100%;
          }
          .about {
            padding: 10px;
          }
        }
         {
          /* Tablet Landscape */
        }
        @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
          .about-container {
            grid-gap: 20px;
            padding: 30px 0;
          }
          .contact {
            width: 90%;
          }
        }
         {
          /* Mobile Landscape */
        }
        @media screen and (orientation: landscape) and (min-device-width: 375px) and (max-device-width: 900px) {
          .about-container {
            width: 100%;
            flex-direction: column;
            padding: 30px 0;
          }
        }
         {
          /* Mobile Portrait */
        }
        @media (max-width: 640px) {
          .about-container {
            width: 100%;
            flex-direction: column;
            padding: 30px 5%;

            margin-right: 0;
          }
          .contact {
            max-width: 100%;
            padding-bottom: 30px;
          }
          .about {
            padding: 30px 0;
            width: 100%;
          }
          .contact h2 {
            text-align: center;
          }
          a.black-link {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default BrandCommunity;

BrandCommunity.propTypes = {
  lightMode: PropTypes.bool,
};
