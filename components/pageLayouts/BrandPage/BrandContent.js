import React, { useEffect, useContext, useState } from 'react';
import { imagesNames } from '../../../utilities/dataHelpers';
import Link from 'next/link';
import ProgressiveImage from '../../ReusableComponents/Images/ProgressiveImage';
const BrandContent = ({ model }) => {
  console.log(model);
  const images = imagesNames(model.brandName);
  console.log(images);
  return (
    <>
      <div>
        <div>
          <h2>Where Democratic Fashion catalyzes self-discovery.</h2>
          <p>
            Democratic Fashion is a practice that minimizes the gap between a designers’ work and
            the mass market, while considering fair economic and social trade off. YZED is built
            upon the five most important factors of this practice, which you can read more about in
            our manifesto.
          </p>
          <Link href='/manifesto'>
            <a>MANIFESTO</a>
          </Link>
        </div>
        <div>
          <ProgressiveImage />
          <ProgressiveImage />
          <ProgressiveImage />
        </div>
        <div>
          <h2>“The desire to make fashion more accessible to people.”</h2>
          <p>
            We are an international team of five, based in Seoul, South Korea. we became united by
            the desire to make fashion more accessible to people, which has continued to be our
            team’s top priority. We strongly believe that a change of status quo is imminent in the
            fashion industry - and that it’s going to be catalyzed by none other than digital
            garments created in 3D & AR. We strive to create a community Where our users
            self-expression leads our decisions.
          </p>
        </div>
        <div>
          <ProgressiveImage />
          <ProgressiveImage />
        </div>
        <div>
          <h2>Let’s Work Together!</h2>
          <p>
            Dive into a mixed-reality world with a team of professionals in 3D & graphic design,
            UI/UX, trend forecasting, as well as front and back-end programming. YZED is turning
            your exquisite physical products into digital-dazzle, leading your brand into the
            digital era.
          </p>
          <p>Interested in working with us?</p>
          <p>
            Please contact us at <a href='mailto:yzed@101.global'>yzed@101.global</a>
          </p>
        </div>
        <div>
          <h3>Contact</h3>
          <a href='mailto:yzed@101.global'>yzed@101.global</a>
          <a href='tel:+82 02  6248  2130'>+82 02 6248 2130</a>
          <p>
            22-18, Bongeunsa-ro 26-gil, Gangnam-gu,
            <br />
            Seoul, Republic of Korea 06126
          </p>
        </div>
      </div>
      <style jsx>{``}</style>
      <style jsx global>{``}</style>
    </>
  );
};

export default BrandContent;
