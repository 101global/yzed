import React, { useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import theme from '../../../utilities/theme';

const BrandAbout = ({ lightMode }) => {
  return (
    <>
      <div className='about-container'>
        <div className='about'>
          <h2>About Us</h2>
          <p>
            Welcome to YZED,
            <br /> We believe Democratic Fashion catalyzes self-discovery.
          </p>
          <p>
            Democratic Fashion is a practice that minimizes the gap between a designers’ work and
            the mass market, while considering fair economic and social trade off. This manifesto
            was written in detail listing 5 main practices regarding Democratic Fashion, please
            check it out{' '}
            <a
              href='https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/YZED_MANIFESTO.pdf'
              target='_blank'
              rel='noopener noreferrer'>
              here
            </a>
            .
          </p>
          <p>
            An international team united by the desire to make fashion more accessible for people.
            We understand that the change of status quo is catalyzed by digital garments in 3D & AR.
            A digital community where your self-discovery leads our decisions.
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
          background-color: ${lightMode ? theme.colors.black : theme.colors.white};
          color: ${lightMode ? theme.colors.white : theme.colors.black};
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
          background-color: ${lightMode ? theme.colors.white : theme.colors.black};
          color: ${lightMode ? theme.colors.black : theme.colors.white};
          text-decoration: none;
          padding: 10px 0;
          border-radius: 25px;
          border: 1px solid ${lightMode ? theme.colors.white : theme.colors.black};
          transition: all 0.4s ease;
          width: 350px !important;
          font-size: ${theme.fontSizes.pSizeDesktop};
          text-align: center;
        }
        a {
          letter-spacing: 0.2em;
          font-weight: ${theme.fontWeights.medium};
        }
        a.black-link:hover {
          background-color: ${lightMode ? theme.colors.black : theme.colors.white};
          color: ${lightMode ? theme.colors.white : theme.colors.black};
          transition: all 0.3s ease;
          border-color: ${lightMode ? theme.colors.white : theme.colors.black};
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

export default BrandAbout;

BrandAbout.propTypes = {
  lightMode: PropTypes.bool,
};
