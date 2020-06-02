import React, { useContext, useEffect, useState } from 'react';

import theme from '../../../../utilities/theme';

const BrandAbout = ({ lightMode }) => {
  return (
    <>
      <div className='about-container'>
        <div className='mobile-message'>
          <h2>We believe democratic fashion catalyzes self-discovery.</h2>
          <p>
            YZED is the view of four professionals from different backgrounds based in Seoul, South
            Korea represented by innovation hub 101Global.
          </p>
        </div>
        <div className='about'>
          <h2>About Us</h2>
          <p>
            In 2019, we started from creating 3D models of real garments and placing them in
            Augmented Reality. We realized that Augmented Reality technology makes it possible for
            users to place virtual clothing anywhere at any time, thus increasing customer
            engagement.
          </p>
          <p>
            YZED can assist in translating your garments into 3D, placing them in AR environment and
            building the web architecture around it. We are a team of highly-skilled professionals,
            specializing in 3D design, graphic design, UI & UX, programming and business
            consultancy. We are comfortable working with tools such as Spark AR, Cinema4D, Clo3D,
            Adobe CC, React and more.
          </p>
          <p>The current page you are in is an example of our beta version to be released soon.</p>
          <p>
            <i>YZED team</i>
          </p>
        </div>
        <div className='contact'>
          <h2>Would you like to be a catalyst of democratic fashion?</h2>
          <a
            className='black-link'
            href='mailto:yzed@101.global?subject=Interested in Learning More'>
            SEND US AN EMAIL
          </a>
          <p className='or'>or</p>
          <a
            className='blank-link'
            href='https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/YZED_MANIFESTO.pdf'
            target='_blank'
            rel='noopener noreferrer'>
            DOWNLOAD MANIFESTO
          </a>
        </div>
      </div>
      <style jsx>{`
        .about-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 80px 10%;
          background-color: ${lightMode ? theme.colors.black : theme.colors.white};
          color: ${lightMode ? theme.colors.white : theme.colors.black};
        }
        .about {
          width: 49%;
        }
        .about h2 {
          font-weight: 500;
        }
        .contact {
          text-align: center;
          display: inline-block;
          max-width: 49%;
        }
        .contact h2 {
          text-align: center;
          font-weight: 500;
        }
        .contact a {
          text-align: center;
          display: inline-block;
        }
        p {
          font-weight: 100;
        }
        a.black-link {
          background-color: ${lightMode ? theme.colors.white : theme.colors.black};
          color: ${lightMode ? theme.colors.black : theme.colors.white};
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 20px;
          width: 80%;
          margin: 0 auto;
          border: 1px solid ${lightMode ? theme.colors.white : theme.colors.black};
          transition: all 0.3s ease;
          max-width: 400px;
        }
        a {
          letter-spacing: 0.2em;
          font-weight: 500;
        }
        a.black-link:hover {
          background-color: ${lightMode ? theme.colors.black : theme.colors.white};
          color: ${lightMode ? theme.colors.white : theme.colors.black};
          transition: all 0.3s ease;
          border-color: ${lightMode ? theme.colors.white : theme.colors.black};
        }
        a.blank-link {
          color: ${lightMode ? theme.colors.white : theme.colors.black};
          padding: 5px 0;
          position: relative;
          text-decoration: none;
          text-indent: 0.1em;
        }
        a.blank-link:after {
          content: '';
          width: 100%;
          border-bottom: 1px solid ${lightMode ? theme.colors.white : theme.colors.black};
          position: absolute;
          left: 0;
          bottom: 0;
          transition: all 1s;
        }
        a.blank-link:hover:after {
          width: 0%;
          transition: all 1s;
        }
        .or {
          color: ${theme.colors.mediumGrey};
          font-size: 0.8rem;
          text-align: center;
        }
         {
          /* Tablet Portrait */
        }
        @media (max-width: 768px) {
          .about-container {
            width: 90%;
            padding: 30px 0;
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
            width: 90%;
            flex-direction: column;
            padding: 30px 0;
          }
        }
         {
          /* Mobile Portrait */
        }
        @media (max-width: 640px) {
          .about-container {
            width: 90%;
            flex-direction: column;
            padding: 30px 0;
          }
          .contact {
            max-width: 100%;
            padding-bottom: 30px;
          }
          .about {
            padding: 30px 0;
            width: 100%;
          }
          a.black-link {
            width: 100%;
          }
        }
        @media (min-width: 641px) {
          .mobile-message {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default BrandAbout;
