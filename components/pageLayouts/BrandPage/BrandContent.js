import React, { useContext, useEffect, useState } from 'react';

import DownloadIcon from '../../ReusableComponents/Icons/Download';
import { Element } from 'react-scroll';
import Link from 'next/link';
import ProgressiveImage from '../../ReusableComponents/Images/ProgressiveImage';
import SelfExpressionIcon from '../../ReusableComponents/AnimatedSVGs/SelfExpressionAnimatedSVG';
import { imagesNames } from '../../../utilities/dataHelpers';
import theme from '../../../utilities/theme';

const BrandContent = ({ model }) => {
  console.log(model);
  const images = imagesNames(model.imageSlug, model.imageCount);
  console.log(images);
  return (
    <>
      <Element name='introduction'>
        <section className='pb-16 -mt-20'>
          <h2 className='inline-block landing-title lg:text-4xl gradient-blue-right'>
            Where Democratic Fashion catalyzes self-discovery.
          </h2>
          <aside className='paragraph-text lg:text-xl lg:text-left'>
            Democratic Fashion is a practice that minimizes the gap between a designers’ work and
            the mass market, while considering fair economic and social trade off. YZED is built
            upon the five most important factors of this practice, which you can read more about in
            our manifesto.
          </aside>
          <a
            href='https://oneoone-resource.s3.ap-northeast-2.amazonaws.com/yzed/YZED_MANIFESTO.pdf'
            className='manifesto-link flex flex-row justify-start mt-8 text-2xl items-center hover:gradient-blue-top cursor-pointer'
            target='_blank'
            rel='noopener noreferrer'>
            <DownloadIcon styleClass='manifesto-download-icon mr-2' />
            MANIFESTO
          </a>
        </section>
        <div className='top-images py-16'>
          <ProgressiveImage
            preview={images[0].imageThumb}
            image={images[0].image}
            divStyleClass='first mt-8'
            alt={images[0].id}
          />
          <ProgressiveImage
            preview={images[1].imageThumb}
            image={images[1].image}
            divStyleClass='w-full lg:w-70per lg:ml-30per mt-8'
            alt={images[1].id}
          />
          {images.length > 4 ? (
            <ProgressiveImage
              preview={images[2].imageThumb}
              image={images[2].image}
              divStyleClass='w-full lg:w-60per mt-8'
              alt={images[2].id}
            />
          ) : null}
        </div>
      </Element>
      <Element name='about'>
        <section>
          <h2 className='inline-block landing-title lg:text-4xl gradient-blue-right'>
            “The desire to make fashion more accessible to people.”
          </h2>
          <aside className='paragraph-text lg:text-xl lg:text-left'>
            We are an international team of five, based in Seoul, South Korea. we became united by
            the desire to make fashion more accessible to people, which has continued to be our
            team’s top priority. We strongly believe that a change of status quo is imminent in the
            fashion industry - and that it’s going to be catalyzed by none other than digital
            garments created in 3D & AR. We strive to create a community Where our users
            self-expression leads our decisions.
          </aside>
        </section>
        <div className='bottom-images py-16'>
          <ProgressiveImage
            preview={images[3].imageThumb}
            image={images[3].image}
            divStyleClass='w-full lg:w-80per mt-8'
            alt={images[3].id}
          />
          <ProgressiveImage
            preview={images[images.length > 4 ? 4 : 2].imageThumb}
            image={images[images.length > 4 ? 4 : 2].image}
            divStyleClass='w-full lg:w-60per mt-8'
            alt={images[images.length > 4 ? 4 : 2].id}
          />
        </div>
        <div className='my-8'>
          <SelfExpressionIcon />
        </div>
      </Element>
      <Element name='contact'>
        <section className='py-16'>
          <h2 className='inline-block landing-title lg:text-4xl gradient-blue-right'>
            Let’s Work Together!
          </h2>
          <aside className='paragraph-text lg:text-xl lg:text-left'>
            Dive into a mixed-reality world with a team of professionals in 3D & graphic design,
            UI/UX, trend forecasting, as well as front and back-end programming. YZED is turning
            your exquisite physical products into digital-dazzle, leading your brand into the
            digital era.
          </aside>
          <div className='pt-6'>
            <p className='paragraph-text lg:text-xl lg:text-left'>Interested in working with us?</p>
            <p className='paragraph-text lg:text-xl lg:text-left'>
              Please contact us at{' '}
              <a className='font-semibold hover:gradient-blue-top' href='mailto:yzed@101.global'>
                yzed@101.global
              </a>
            </p>
          </div>
        </section>
        <section className='py-32 lg:py-48'>
          <h3 className='font-semibold text-2xl mb-8'>Contact</h3>
          <a
            className='block font-light text-base lg:text-xl hover:gradient-blue-top'
            href='mailto:yzed@101.global'>
            yzed@101.global
          </a>

          <a
            className='block font-light text-base lg:text-xl hover:gradient-blue-top mb-4'
            href='tel:+82 02  6248  2130'>
            +82 02 6248 2130
          </a>
          <p className='text-base font-light lg:text-xl lg:text-left'>
            22-18, Bongeunsa-ro 26-gil, Gangnam-gu,
            <br />
            Seoul, Republic of Korea 06126
          </p>
        </section>
      </Element>
      <style jsx>{`
        .landing-title {
          max-width: 80%;
        }
        @media (max-width: 1024px) {
          .landing-title {
            max-width: 100%;
          }
        }
      `}</style>
      <style jsx global>{`
        .dark-mode .manifesto-download-icon stop:first-child,
        .dark-mode .manifesto-download-icon stop:last-child {
          stop-color: white;
        }
        .light-mode .manifesto-download-icon stop:first-child,
        .light-mode .manifesto-download-icon stop:last-child {
          stop-color: black;
        }
        a.manifesto-link:hover .manifesto-download-icon stop:first-child {
          stop-color: ${theme.colors.aqua};
        }
        a.manifesto-link:hover .manifesto-download-icon stop:last-child {
          stop-color: ${theme.colors.purple};
        }
      `}</style>
    </>
  );
};

export default BrandContent;
