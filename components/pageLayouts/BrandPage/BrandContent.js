import React, { useContext, useEffect, useState } from 'react';

import DownloadIcon from '../../ReusableComponents/Icons/Download';
import { Element } from 'react-scroll';
import Link from 'next/link';
import ProgressiveImage from '../../ReusableComponents/Images/ProgressiveImage';
import { imagesNames } from '../../../utilities/dataHelpers';
import theme from '../../../utilities/theme';

const BrandContent = ({ model }) => {
  const images = imagesNames(model.imageSlug);
  return (
    <>
      <Element name='introduction'>
        <div className='pb-16 -mt-20'>
          <h2 className='landing-title lg:text-4xl gradient-blue-right lg:w-80per'>
            Where Democratic Fashion catalyzes self-discovery.
          </h2>
          <p className='paragraph-text'>
            Democratic Fashion is a practice that minimizes the gap between a designers’ work and
            the mass market, while considering fair economic and social trade off. YZED is built
            upon the five most important factors of this practice, which you can read more about in
            our manifesto.
          </p>
          <a
            className='manifesto-link flex flex-row justify-start mt-8 text-2xl items-center hover:gradient-blue-top cursor-pointer'
            target='_blank'
            rel='noopener noreferrer'>
            <DownloadIcon styleClass='download-manifesto-svg mr-2 ' />
            MANIFESTO
          </a>
        </div>
        <div className='top-images py-16'>
          <ProgressiveImage
            preview={images[0].image}
            image={images[0].image}
            styleClass='first mt-8'
            alt={images[0].id}
          />
          <ProgressiveImage
            preview={images[1].image}
            image={images[1].image}
            styleClass='w-70per ml-30per mt-8'
            alt={images[1].id}
          />
          <ProgressiveImage
            preview={images[2].image}
            image={images[2].image}
            styleClass='w-60per mt-8'
            alt={images[2].id}
          />
        </div>
      </Element>
      <Element name='about'>
        <div>
          <h2 className='landing-title lg:text-4xl gradient-blue-right lg:w-80per'>
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
            alt={images[3].id}
          />
          <ProgressiveImage
            preview={images[4].image}
            image={images[4].image}
            styleClass='w-60per mt-8'
            alt={images[4].id}
          />
        </div>
      </Element>
      <Element name='contact'>
        <div className='py-16'>
          <h2 className='landing-title lg:text-4xl gradient-blue-right lg:w-80per'>
            Let’s Work Together!
          </h2>
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
              <a className='font-bold hover:gradient-blue-top' href='mailto:yzed@101.global'>
                yzed@101.global
              </a>
            </p>
          </div>
        </div>
        <div className='py-48'>
          <h3 className='font-semibold text-xl'>Contact</h3>
          <a
            className='block font-light text-lg hover:gradient-blue-top'
            href='mailto:yzed@101.global'>
            yzed@101.global
          </a>

          <a
            className='block font-light text-lg hover:gradient-blue-top'
            href='tel:+82 02  6248  2130'>
            +82 02 6248 2130
          </a>
          <p className='paragraph-text'>
            22-18, Bongeunsa-ro 26-gil, Gangnam-gu,
            <br />
            Seoul, Republic of Korea 06126
          </p>
        </div>
      </Element>
      <style jsx global>{`
        .dark-mode .download-manifesto-svg stop:first-child,
        .dark-mode .download-manifesto-svg stop:last-child {
          stop-color: ${theme.colors.white};
        }
        .light-mode .download-manifesto-svg stop:first-child,
        .light-mode .download-manifesto-svg stop:last-child {
          stop-color: ${theme.colors.black};
        }
        .manifesto-link:hover .download-manifesto-svg stop:first-child {
          stop-color: ${theme.colors.aqua};
        }
        .manifesto-link:hover .download-manifesto-svg stop:last-child {
          stop-color: ${theme.colors.purple};
        }
      `}</style>
    </>
  );
};

export default BrandContent;
