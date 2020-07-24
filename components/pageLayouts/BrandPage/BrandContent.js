import React, { useEffect, useContext, useState } from 'react';
import { imagesNames } from '../../../utilities/dataHelpers';
import Link from 'next/link';
import ProgressiveImage from '../../ReusableComponents/Images/ProgressiveImage';
import theme from '../../../utilities/theme';
import DownloadIcon from '../../ReusableComponents/Icons/Download';
import { Element } from 'react-scroll';
const BrandContent = ({ model }) => {
  console.log(model);
  const images = imagesNames(model.imageSlug);
  console.log(images[1]);
  return (
    <>
      <Element name='Introduction'>
        <div className='pb-16 -mt-16'>
          <h2 className='landing-title lg:w-80per'>
            Where Democratic Fashion catalyzes self-discovery.
          </h2>
          <p className='paragraph-text'>
            Democratic Fashion is a practice that minimizes the gap between a designers’ work and
            the mass market, while considering fair economic and social trade off. YZED is built
            upon the five most important factors of this practice, which you can read more about in
            our manifesto.;
          </p>
          <Link href='/manifesto'>
            <div className='flex flex-row justify-start mt-4'>
              <DownloadIcon fill={theme.colors.black} />
              <a className='ml-2'>MANIFESTO</a>
            </div>
          </Link>
        </div>
        <div className='top-images py-16'>
          <ProgressiveImage
            preview={images[0].image}
            image={images[0].image}
            styleClass='first mt-8'
          />
          <ProgressiveImage
            preview={images[1].image}
            image={images[1].image}
            styleClass='w-70per ml-30per mt-8'
          />
          <ProgressiveImage
            preview={images[2].image}
            image={images[2].image}
            styleClass='w-60per mt-8'
          />
        </div>
      </Element>
      <Element name='Introduction'>
        <div>
          <h2 className='landing-title lg:w-80per'>
            “The desire to make fashion more accessible to people.”
          </h2>
          <p className='paragraph-text'>
            We are an international team of five, based in Seoul, South Korea. we became united by
            the desire to make fashion more accessible to people, which has continued to be our
            team’s top priority. We strongly believe that a change of status quo is imminent in the
            fashion industry - and that it’s going to be catalyzed by none other than digital
            garments created in 3D & AR. We strive to create a community Where our users
            self-expression leads our decisions.
          </p>
        </div>
        <div className='bottom-images py-16'>
          <ProgressiveImage
            preview={images[3].image}
            image={images[3].image}
            styleClass='w-80per mt-8'
          />
          <ProgressiveImage
            preview={images[4].image}
            image={images[4].image}
            styleClass='w-60per mt-8'
          />
        </div>
      </Element>
      <Element name='Introduction'>
        <div className='py-16'>
          <h2 className='landing-title lg:w-80per'>Let’s Work Together!</h2>
          <p className='paragraph-text'>
            Dive into a mixed-reality world with a team of professionals in 3D & graphic design,
            UI/UX, trend forecasting, as well as front and back-end programming. YZED is turning
            your exquisite physical products into digital-dazzle, leading your brand into the
            digital era.
          </p>
          <div className='pt-6'>
            <p className='paragraph-text'>Interested in working with us?</p>
            <p className='paragraph-text'>
              Please contact us at{' '}
              <a className='font-bold' href='mailto:yzed@101.global'>
                yzed@101.global
              </a>
            </p>
          </div>
        </div>
        <div className='py-24'>
          <h3>Contact</h3>
          <a href='mailto:yzed@101.global'>yzed@101.global</a>
          <a href='tel:+82 02  6248  2130'>+82 02 6248 2130</a>
          <p className='paragraph-text'>
            22-18, Bongeunsa-ro 26-gil, Gangnam-gu,
            <br />
            Seoul, Republic of Korea 06126
          </p>
        </div>
      </Element>
      <style jsx global>{`
        .landing-title {
          background: -webkit-linear-gradient(right, ${theme.colors.aqua}, ${theme.colors.purple});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </>
  );
};

export default BrandContent;
